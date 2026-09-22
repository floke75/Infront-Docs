---
title: "Open questions for Infront"
kind: field-note
page_type: field-note
module: SDK
verified: "2026-09-22"
source: "gaps left after the docs and the live sandbox"
---

# Open questions for Infront

Neither the documentation nor the live sandbox answers these. Collected so the next conversation with
Infront settles them in one pass; move each answer into the note it belongs to, with its date.

**Contract and entitlements**
1. Licensing for **public broadcast display** of Nasdaq Stockholm, index-provider, FX and commodity data,
   and what `BasicField.NotForDisplay` signals when it is non-zero.
2. Which feeds the production contract includes — in particular **S&P 500, Dow Jones (S&P DJI) and DAX
   (Xetra)**, which the test user cannot reach — and which are real-time.
3. Why `6150:N225` returns no `Last` while `ChangePercent` and `YesterdayClose` are present.

**Authentication and sessions**
4. Access-token lifetime and renewal; whether `signedToken` takes the IdP `access_token` unchanged; whether
   a live SDK instance survives its token's expiry or must be rebuilt.
5. How many concurrent sessions one user may hold (a preview screen and a playout screen on the same
   production user), and what triggers `DisconnectEventReason.KickOut`.
6. Does the SDK reconnect and re-subscribe on its own after a network drop, and which events fire?

**Delivery**
7. Access to the private npm registry for `@infront/sdk` (it is not on the public registry), versus the
   CDN script `https://wtk.infrontservices.com/js/CommonFramework-<version>.min.js`; module format and size.
8. Whether the SDK is supported outside a browser (Node.js), for a server-side relay.
9. `timeSeries` live behaviour: is inserting new bars at index 0 intended ([time-series.md](time-series.md)),
   and what is the per-bar `change` measured against?
10. The meaning of the trading-hour fields in `feedList` (Nasdaq Stockholm reports 08:00–16:31 +02:00).
11. Values of `MarketPhase` and `SymbolStatus` during a session, and any rate or subscription limits.
