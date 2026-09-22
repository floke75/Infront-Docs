---
title: "Errors and entitlements — opaque data errors, descriptive input errors, access per feed and symbol"
kind: field-note
page_type: field-note
module: SDK
verified: "2026-09-22"
source: "live sandbox, EFN documentation test user"
related: ["reference/SDK/SDK.InfrontSDK.FeedAccess.md", "reference/SDK/SDK.InfrontSDK.DisconnectEventReason.md"]
---

# Errors and entitlements

## Two kinds of error, and only one of them tells you anything

- **Data errors are opaque.** An id that does not exist *or* is not entitled — `2088:SP500`, `20:DJI`,
  `2098:DAX`, `2229:BRT` for the test user — first fires **`onData`** (with a `SymbolData` that has no
  values), **then `onError`** with
  `{ "title": "Internal error!", "type": "Unknown", "parameters": {} }`.
  The two causes cannot be told apart from the error. Resolve ids with `symbolSearch` first: its results
  carry `FeedAccess`, and an id you found is at least an id that exists ([instrument-ids.md](instrument-ids.md)).
  Do not treat a first `onData` as proof that the symbol is live.
- **Input errors are descriptive.** A malformed request fails with
  `{ "title": "Options object is invalid!", "type": "Input", "parameters": { "validation": ["Missing required property: 'providerId'"], "options": { … } } }`.

## Access is reported per feed and per symbol

- `FeedAccess` enum: `NoAccess`, `Realtime`, `Delayed`.
- Per **symbol**: `symbolData.get("FeedAccess")`, `FeedAccessStr`, `FeedDelayStr`; search results carry
  `FeedAccess` and `FeedDelayStr` too.
- Per **feed**: `feedList` gives `accessType` (1 real-time, 2 delayed), `minDelaySecs`/`maxDelaySecs` and
  `delayStr` ([feeds-test-user.md](feeds-test-user.md)).
- Delays seen for the test user: Nasdaq Stockholm and most exchanges **15 min**, Nikkei **20 min**, Oslo
  NOTC 2 min, funds and fixings a day; **World Commodities real-time**.
- **EFN's production user receives real-time Nasdaq Stockholm data** (per EFN, 2026-09-22; not yet
  observed). Mixed access within one screen is therefore normal, not an edge case: a display showing
  prices has to be able to mark *which* values are delayed, symbol by symbol.

## Session-level signals (documented, not observable in the sandbox)

`onDisconnect(DisconnectEvent)` with `DisconnectEventReason` `KickOut` (0), `Disconnect` (1),
`InvalidSessionToken` (2), `Unknown` (3). `ConnectionState`: `None`, `Connecting`, `WaitFirstPacket`,
`Running`, `Closing`, `Suspended`, `Closed` — the enum matched the live SDK exactly. The connection-status
list from `loginData` was empty in the sandbox ([authentication.md](authentication.md)).
