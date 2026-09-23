---
title: "EFN's production user — first login"
kind: field-note
page_type: field-note
module: SDK
verified: "2026-09-23"
source: "a local page on AX-6 logging in with the SDK's userId/password option, EFN's production user, WTK 3.1.42"
related: ["field-notes/authentication.md", "field-notes/errors-and-access.md", "field-notes/streaming.md", "reference/SDK/SDK.InfrontSDK.SDKOptions.md"]
---

# EFN's production user: first login (2026-09-23)

Infront sent EFN's production **username and password** on 2026-09-23. The `client_id`, secret and token
endpoint for the server-side flow ([authentication.md](authentication.md)) were still to come, so this
login used the SDK's own `userId`/`password` option in a throwaway local page — typed in by a person,
never stored. Everything below is scoped to **this login on this date**.

## The SDK build the CDN actually serves

- `https://wtk.infrontservices.com/js/CommonFramework-4.3.1.min.js` — the URL `guides/sdk-setup.md` gives —
  answers **404**.
- `CommonFramework-latest.min.js` answers 200 (1 963 360 bytes); its header reads **"Infront Web toolkit
  version 3.1.42"**, and the same bytes are published at `CommonFramework-3.1.42.min.js`. Pin that URL:
  `latest` would change the SDK under a running integration.
- On 3.1.42, `InfrontSDK.SDK`, `symbolData`, `loginData`, `feedContents`, `timeSeries` and `symbolSearch`
  are all present, and `symbolData`, `feedContents` and `timeSeries` behaved as the other notes describe.

## Logging in

```js
new InfrontSDK.SDK({ userId, password, environment: "cloud.eu", realm: "infront", onReady, onDisconnect });
```

This worked for the production user: `onReady` fired and data flowed. It hands the password itself to the
page, so it is a check for a person at a desk, not a way to run a broadcast (use the server-side token,
[authentication.md](authentication.md)).

`loginData` (login id left out): environment `cloud.eu`, realm `infront`, subdomain `infront`,
`userType` 5, `expireDate` 20481231, `ownerProviderId` 31; features: `DefaultCurrency` SEK,
`DefaultLanguage` se, `HasTrading` false, `HasCalendar` true, `HasInfinancials` false.

## Access: Nasdaq Stockholm is **delayed** for this user

Contrary to what EFN expected (real-time Nasdaq Stockholm on the production user), **every OMX instrument
read `FeedAccess: "Delayed"`** — the indices, the stocks and all 30 OMXS30 constituents. Only World
Commodities was real-time.

| Instrument | Address | Access | Notes |
|---|---|---|---|
| OMX Stockholm 30 | `17921:OMXS30` | Delayed | |
| OMX Stockholm PI | `17921:OMXSPI` | Delayed | |
| Nikkei 225 | `6150:N225` | Delayed | still no `Last`, no `Currency` ([streaming.md](streaming.md)) |
| Nasdaq Composite | `2087:COMP` | Delayed | |
| SAAB B, VOLV B, ERIC B, INVE B, HEM, BOL, EVO, SINCH, SEB A | `17921:<ticker>` | Delayed | |
| USD/SEK, EUR/SEK | `12:USDSEK`, `12:EURSEK` | Delayed | |
| Brent | `13:BRT` | **Realtime** | |
| Gold | `13:GLDSPOT` | **Realtime** | no `Currency` |

- The OMXS30 chain (`feedContents`, `17921`, `DEFAULT`, `providerId: 0`) answered with **30 members**, the
  same list as [chains.md](chains.md); all 30 read `Delayed`.
- OMXS30 1-minute history (`timeSeries`, `daysBack: 1`): 765 bars, 2026-09-22 07:00Z → 2026-09-23 11:17Z.
- S&P 500, DAX and Dow Jones: a free-text `symbolSearch` for each returned only ETFs, options and
  certificates, not the index itself — no index address was found for this user (open question 2).

## Two things that differ from the sandbox

**The rows of an array `symbolData` are not reliably in request order.** On the session's first data
request (17 ids), items read by position 1.5 s after `onData` carried other instruments' values — the
`SAAB B` slot held OMXS30's 3311.5 / 3335.94, the `OMXS30` slot held Nikkei's. Three later requests of
the same ids came back aligned. Match each item to what you asked for by its own `get("Feed")` and
`get("Ticker")`, never by index ([streaming.md](streaming.md)).

**Search results are objects on 3.1.42**, not the plain records the sandbox's SDK 2.3.1 returned: each
exposes `get(field)` (own keys `type`, `get`, `getConverted`, `inspect`), so `r.Ticker` is `undefined` and
`r.get("Ticker")` is the value ([instrument-ids.md](instrument-ids.md)).
