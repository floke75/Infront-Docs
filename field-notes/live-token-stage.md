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

Evidence and repeatable probes: `floke75/EFN-Loop`, `research/infront-live/README.md` and
`app/scripts/infront-live-proof.mjs`. No secrets or bearer tokens are retained.

## Authentication

EFN's issued endpoint is
`https://efn.cloud.eu.infrontservices.com/auth/realms/efn/protocol/openid-connect/token`.
The documented password grant works with the issued client registration and production user.
The access token lasts **36,000 seconds** and WTK accepts it unchanged as `signedToken`.
The stage's forced reissue returns a different token; the following cached request returns that new token.

Changing one JWT signature character provokes a real `onLoginFailed`. Destroying that SDK, requesting
a fresh token and constructing another SDK restores prices. Natural ten-hour expiry of an already-running
session remains unobserved. An arbitrary non-JWT string is a different failure: WTK throws during
constructor/cleanup and can retain an unusable model; do not use that probe as evidence of expiry behavior.

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

The pinned bundle's SHA256 is `c7b649e0ce2996d534c6094bf7dec1bafa0f15d58422c73284d175e3e74dc583`.
Its server heartbeat continues independently of price ticks, so quiet markets need not appear disconnected.
Physical cable loss and half-open connections were not qualified by the browser socket probe.

## Concurrent login

A second independent browser context on the same production user kicks out the first with reason **0**.
EFN-Loop's 60-second retry then reconnects the first and kicks out the second. The control-board preview
shares the program's frames and avoids a second login. This observation is not a general account-limit contract.

## Data observations

- All 17 addressed catalogue instruments answered and the OMXS30 chain had 30 members. Unlike the earlier
  first-login observation, Nikkei supplied a numeric Last in this run.
- OMX, FX and the tested foreign indices still reported Delayed; Brent and gold reported Realtime.
  Johan is addressing delay entitlements at account level; they do not block the integration work.
- A 75-second Brent series observation saw one index-zero addition and 221 forming-minute changes.
  The rendered OMXS30 hero matched 491 bars from today's Stockholm session, 07:00–15:10 UTC.
- One array request for `2088:SP500`, `20:DJI`, `2098:DAX` emitted an addressed NoAccess followed by
  an unaddressed Unknown for **each** address. Keep all error callbacks; the last one alone is useless.
