---
title: "Production token, transport loss and concurrent logins"
kind: field-note
page_type: field-note
module: SDK
verified: "2026-09-24"
source: "EFN-Loop production build on AX-6, production account, WTK 3.1.42; pinned CDN source"
related: ["field-notes/authentication.md", "field-notes/production-user.md", "field-notes/time-series.md", "field-notes/errors-and-access.md"]
---

# Production token and transport behavior

Evidence: [real-service report](https://github.com/floke75/EFN-Loop/blob/cb3a0e1/research/infront-live/README.md).
Reusable implementation: [framework-free adapter](https://github.com/floke75/EFN-Loop/blob/cb3a0e1/app/src/loop/market/sources/infront/adapter.ts),
[SDK types and loader](https://github.com/floke75/EFN-Loop/blob/cb3a0e1/app/src/loop/market/sources/infront/sdk.ts),
and [browser probes](https://github.com/floke75/EFN-Loop/blob/cb3a0e1/app/scripts/infront-live-proof.mjs).
These links pin the verified implementation. No secrets or bearer tokens are retained.

## Authentication

EFN's issued endpoint is
`https://efn.cloud.eu.infrontservices.com/auth/realms/efn/protocol/openid-connect/token`.
The documented password grant works with the issued client registration and production user.
The access token lasts **36,000 seconds** and WTK accepts it unchanged as `signedToken`.
The stage's forced reissue returns a different token; the following cached request returns that new token.
Use the token response's lifetime when caching; ten hours is this account's observation, not an API constant.

Changing one JWT signature character provokes a real `onLoginFailed`. Destroying that SDK, requesting
a fresh token and constructing another SDK restores prices. Natural ten-hour expiry of an already-running
session remains unobserved. An arbitrary non-JWT string is a different failure: WTK throws during
constructor/cleanup and can retain an unusable model; do not use that probe as evidence of expiry behavior.
Handle `onLoginFailed` as well as `onDisconnect`. A rejected cached token needs a forced server-side
reissue; another ordinary cache read can return the same rejected token. Repeated rejection of newly
issued tokens needs backoff to avoid a tight login loop.

## Data transport loss is not a top-level disconnect

A 60-second browser-only outage closed existing vendor sockets and blocked reconnects. No top-level
`onDisconnect` fired. The SDK reopened data sockets and resumed subscriptions on restoration, without
another `onReady` or a new `symbolData` list. An adapter's local keepalive is therefore not evidence of
vendor liveness. EFN-Loop now gates it on connection status.

Use the public request and observe the initially empty list as it fills:

```js
sdk.get(InfrontSDK.loginData({
  flags: { ConnectionStatus: true }, subscribe: true,
  onData: ({ connectionsStatus }) => connectionsStatus.observe({
    reInit, itemAdded, itemChanged, itemRemoved
  })
}));
```

WTK 3.1.42 emits plain records with `providerId`, `serviceId`, `serverType`, `state` and other fields
that the extracted interface omits. Types/states are strings. Four Realtime identities were observed:
`22:1`, `2:4`, `2:70`, `2:0`. They changed from Running to None/Connecting during the outage and returned
to Running afterward. History and Chain services closed normally after their work; that is not a price-feed
failure. The list deduplicates by host and removes Closed/Suspended entries: retain a missing required
Realtime identity as unhealthy until its replacement is Running. This is scoped evidence for these feeds.

**Application policy, verified in EFN-Loop:** require at least one known Realtime service and all known
Realtime services Running before publishing live health. Derive the identities from the observed list;
the four above are evidence, not a hard-coded account-wide set. A required service disappearing does not
make the remaining set healthy. This conservative policy can hold the whole source unavailable for an
unused service; selective per-instrument health needs a verified instrument-to-service mapping.

**Bound initial readiness separately from login.** The initial empty list is normal, so it is not an
immediate outage. EFN-Loop allows 30 seconds after `onReady`, then marks unavailable while retaining the
SDK. A later Running update recovers normally. Thirty seconds is an application choice, not a vendor
timeout. Clearing a login deadline on `onReady` without a transport deadline can leave startup pending
forever. Cancel the deadline on first readiness and teardown; fence callbacks by their session/generation.

Keep and dispose both the `sdk.get(...)` unsubscribe and each list/field observer's unbind. On an outage,
cancel already queued publish work as well as future keepalives; otherwise a pending flush can overwrite
the unavailable state. Preserve the displayed values under that state. During recovery, a new
`symbolData.onData` callback is unnecessary: existing item observers can resume delivering fields.

The pinned bundle's SHA256 is `c7b649e0ce2996d534c6094bf7dec1bafa0f15d58422c73284d175e3e74dc583`.
Its server heartbeat continues independently of price ticks, so quiet markets need not appear disconnected.
Physical cable loss and half-open connections were not qualified by the browser socket probe.

## Concurrent login

A second independent browser context on the same production user kicks out the first with reason **0**.
EFN-Loop's 60-second retry then reconnects the first and kicks out the second. The control-board preview
shares the program's frames and avoids a second login. This observation is not a general account-limit contract.

**When adding another EFN app:** sharing a token endpoint or cached bearer token does not share an SDK
session. Two apps with independent SDK instances can repeatedly kick each other out even when both use
backoff. Reuse a single feed owner where appropriate, or arrange and verify separate session capacity with
Infront. The shared preview proves reuse within one app; a cross-app feed service is not implemented here.

## Data observations

- All 17 addressed catalogue instruments answered and the OMXS30 chain had 30 members. Unlike the earlier
  first-login observation, Nikkei supplied a numeric Last in this run.
- OMX, FX and the tested foreign indices still reported Delayed; Brent and gold reported Realtime.
  Johan is addressing delay entitlements at account level; they do not block the integration work.
- A 75-second Brent series observation saw one index-zero addition and 221 forming-minute changes.
  The rendered OMXS30 hero matched 491 bars from today's Stockholm session, 07:00–15:10 UTC.
- One array request for `2088:SP500`, `20:DJI`, `2098:DAX` emitted an addressed NoAccess followed by
  an unaddressed Unknown for **each** address. Keep all error callbacks; the last one alone is useless.

## Proving an integration against the real service

For token rejection, alter one signature character in a real JWT and count the substitution; require
an actual vendor refusal, a fresh token request and restored data. For transport recovery, establish
healthy visible data first, close existing sockets as well as blocking new ones, verify a quiet interval,
then require restored required services, new field updates and visible healthy data on the same page.
An initial `onData`, another `onReady`, or an open socket alone is not that evidence.

Record lifecycle counts, instrument identities, timestamps and verdicts without token strings or socket
payloads. Keep natural token expiry and physical-network failures separate from these bounded probes.
Run functional fault injection separately from frame timing; EFN-Loop's variable AX-6 timing did not
establish a repeatable vendor-specific performance regression or qualify another EFN app's renderer.
