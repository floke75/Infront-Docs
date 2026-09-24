---
title: "Authentication — who holds which secret"
kind: field-note
page_type: field-note
module: SDK
verified: "2026-09-24"
source: "guides/wtk-authentication.md; Infront's message to EFN; live sandbox loginData; production token flow in live-token-stage.md"
related: ["guides/wtk-authentication.md", "guides/sdk-setup.md", "reference/SDK/SDK.InfrontSDK.SDKOptions.md"]
---

# Authentication: who holds which secret

## The production shape: a server-side token, a browser-side SDK

`guides/wtk-authentication.md` documents it, and Infront's own message to EFN (September 2026) matches it
exactly — they issue a **`client_id`, a secret and an endpoint "for server-side authentication"**, plus a
**production user**:

1. **The server** POSTs to the endpoint issued for the account; EFN's verified endpoint is in
   [live-token-stage.md](live-token-stage.md). The generic guide uses `https://api.infrontservices.com/id/connect/token`.
   Send the form
   with `grant_type=password`, the server-side user's `username`/`password`, `client_id`, `client_secret`
   and `scope=openid`. These values "must only be used on the server side".
2. It hands **only the returned `access_token`** to the browser.
3. The browser constructs the SDK with it: `new InfrontSDK.SDK({ signedToken, onReady, onDisconnect, onLoginFailed })`
   (`guides/sdk-setup.md`). With `signedToken`, the `environment` and `realm` options have no effect.

So the secret never reaches a browser. What the browser holds is a bearer token, usable by anyone who can
read it — keep the route that issues it off the public internet.

## Direct login with a user and password

`new InfrontSDK.SDK({ userId, password, environment: "cloud.eu", realm: "infront", onReady })` logs in
without the server-side flow. It worked for EFN's production user on 2026-09-23
([production-user.md](production-user.md)). It puts the password itself in the page, so it suits a
person checking entitlements at a desk, not a broadcast page that anyone on the network can open.

## What is NOT API access

EFN's **documentation test user** signs in to `docs.infrontfinance.com` and its sandbox. It is not the
server-side credential set above, and it cannot stand in for it. It is, however, enough to query the live
service through the sandbox ([sandbox-probing.md](sandbox-probing.md)).

## What a logged-in session reports

`sdk.get(InfrontSDK.loginData({ flags: { LoginDetails: true, Features: true } , onData }))`:

- `loginDetails`: `environment` (`"cloud.eu"`), `realm` (`"infront"`), `subdomain`, `userType`, `expireDate`
  (`20480101` — a date as a number), `loginServers` (space-separated IPs), `ownerProviderId`, `brokerCode`,
  `brokerCountry`, `supportEmail`, `loginId`.
- `features`: `HasTrading`, `HasCalendar`, `EnableDesktopBuilder`, `DefaultCurrency`, `DefaultLanguage`,
  `HasInfinancials`, `HasInfinancialsFull`.
- `connectionsStatus` (`flags: { ConnectionStatus: true }`) came back as an **empty** `ObservableArray` in
  the sandbox, subscribed or not — it could not be used there to watch socket state.

## Production verification

[live-token-stage.md](live-token-stage.md) records the issued endpoint, ten-hour lifetime, unchanged
access-token acceptance, signature-rejection recovery, data-transport states and observed login kick-out.
Natural expiry of a running session and the account's general concurrent-session contract remain open;
see [open-questions.md](open-questions.md).
