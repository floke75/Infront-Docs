---
title: "Errors and entitlements — NoAccess, silent unknown tickers, access per feed and symbol"
kind: field-note
page_type: field-note
module: SDK
verified: "2026-09-22"
source: "live sandbox, EFN documentation test user"
related: ["reference/SDK/SDK.InfrontSDK.FeedAccess.md", "reference/SDK/SDK.InfrontSDK.DisconnectEventReason.md"]
---

# Errors and entitlements

## What a bad id does — three different outcomes

Probed with `symbolData`, one id at a time and mixed into an array, collecting **every** `onError` call:

| The id | What happens |
|---|---|
| A feed the login is **not entitled to** (`2088:SP500`, `20:DJI`, `2098:DAX`, `2229:BRT` for the test user) | `onData` fires (an empty `SymbolData`), then **two** errors: first `{ "type": "NoAccess", "title": "No access!", "parameters": { "serviceType": "Realtime", "feed": 2088, "ticker": "SP500" } }`, then `{ "type": "Unknown", "title": "Internal error!", "parameters": {} }` |
| A feed number that **does not exist** (`99999:X`) | exactly the same as above — `NoAccess` cannot tell "not entitled" from "no such feed" |
| A ticker that **does not exist** on an entitled feed (`17921:NOSUCHTICKER`) | **no error at all.** `onData` fires and the `SymbolData` simply stays empty: `get("Ticker")` and `get("Feed")` return `undefined` |

- **Collect every error, and read the first.** The `NoAccess` error is the informative one and names the
  feed and ticker; the `Internal error!` after it says nothing. A handler that keeps only the last error
  sees only the useless one.
- **An array request is not poisoned by a bad id.** `[17921:OMXS30, 2088:SP500, 12:USDSEK]` delivered
  OMXS30 and USDSEK normally; the SP500 slot was an empty `SymbolData`, and the two errors above fired.
- **Check that a slot was answered.** Because an unknown ticker is silent, verify `get("Ticker")` after
  the first `onData`; an empty slot is a missing instrument, not a quiet one.
- **Input errors are descriptive** and fail the whole request: `{ "type": "Input", "title": "Options object
  is invalid!", "parameters": { "validation": ["Missing required property: 'providerId'"], "options": { … } } }`.

## Access is reported per feed and per symbol

- `FeedAccess` is a **string** enum at runtime: `"Realtime"`, `"Delayed"`, `"NoAccess"`;
  `symbolData.get("FeedAccess")` returns the string (e.g. `"Delayed"`).
- Per **symbol**: `get("FeedAccess")`, `FeedAccessStr`, `FeedDelayStr`; search results carry `FeedAccess`
  and `FeedDelayStr` too.
- Per **feed**: `feedList` gives `accessType` (1 real-time, 2 delayed), `minDelaySecs`/`maxDelaySecs` and
  `delayStr` ([feeds-test-user.md](feeds-test-user.md)).
- Delays seen for the test user: Nasdaq Stockholm and most exchanges **15 min**, Nikkei **20 min**, Oslo
  NOTC 2 min, funds and fixings a day; **World Commodities real-time**.
- **EFN's production user reported delayed Nasdaq Stockholm data** on 2026-09-23 and 24. Johan is
  handling entitlements at account level. Mark delayed values per symbol: Brent and gold were real-time
  alongside delayed exchange feeds ([live-token-stage.md](live-token-stage.md)).

## Session-level signals

`onDisconnect(event)` carries `event.reason`, a **numeric** `DisconnectEventReason` at runtime: `KickOut`
= 0, `Disconnect` = 1, `InvalidSessionToken` = 2, `Unknown` = 3 (read off the live SDK). `ConnectionState`
is `None`, `Connecting`, `WaitFirstPacket`, `Running`, `Closing`, `Suspended`, `Closed`. None of these could
be triggered in the pre-logged-in sandbox; the connection-status list from `loginData` was empty there
([authentication.md](authentication.md)).

Production transport and concurrent-login observations: [live-token-stage.md](live-token-stage.md).
