---
title: "Daily history, total return, gross indices and search — what EFN's production login returned"
kind: field-note
page_type: field-note
module: SDK
verified: "2026-09-30"
source: "EFN production account, WTK 3.1.42 (pinned CDN bundle), headless Google Chrome and jsdom; efn-graf spike probes, run 2026-09-30 01:00–02:00 CEST; raw results in efn-graf docs/evidence/2026-09-30-*.json"
related: ["reference/SDK/SDK.InfrontSDK.TimeSeriesOptions.md", "reference/SDK/SDK.InfrontSDK.HistPerformanceField.md", "reference/SDK/SDK.InfrontSDK.HistoryOptions.md", "field-notes/time-series.md", "field-notes/instrument-ids.md", "field-notes/production-user.md"]
---

# Daily history, total return, gross indices and search

These probes ran on the production user, for a chart tool that compares shares and indices by price and by total
return. Every run happened after midnight, when the latest close was **2026-09-29**. No token or credential was
recorded. The raw results are in the local efn-graf repo under `docs/evidence/`.

## Rule of thumb

To reproduce Infront's own performance figures, all three of these must hold:

1. **Anchor:** count periods back from the **latest close date**, not the calendar day.
2. **Base:** measure from the last close **on or before** the start date. YTD is measured from the previous year's
   last close.
3. **Total return:** use `timeSeries` with `adjustDividends: true`.

With all three, 48 figures equalled `PreChangePercent*` and `PreTotalReturnChangePct*` to within
**0.003 percentage points**, for both price and total return. The 48 are 6 shares (SAAB B, VOLV B, INVE B, ERIC B,
HM B, SEB A) × 1M, 3M, 6M, 1Y, 2Y, 3Y, 5Y and YTD.

The base rule decides the result only when the start date is not a trading day. Here 1M started on a Saturday, and
6M and 2Y on Sundays:

| Share | Period | Start | Base on or before → % | First close after → % | Infront |
|---|---|---|---|---|---|
| VOLV B | 1M | Sat 2026-08-29 | 08-28 → −6.97 | 08-31 → −6.38 | −6.97 |
| VOLV B | 2Y | Sun 2024-09-29 | 09-27 → 18.94 | 09-30 → 20.84 | 18.94 |
| SAAB B | 6M | Sun 2026-03-29 | 03-27 → 3.79 | 03-30 → 1.57 | 3.79 |
| SAAB B | 2Y (total return) | Sun 2024-09-29 | 09-27 → 185.38 | 09-30 → 187.16 | 185.38 |

Across the 42 N-period figures, the first-close-after rule missed by up to 2.2 pp.

**Getting the anchor wrong is easy.** An earlier run counted back from the calendar day (2026-09-30, just after
midnight), and its 1Y and 5Y figures drifted from Infront's by up to 6 pp: HM B's 5Y total return came out 12.22
against Infront's 8.37.

**Not observed:** what the `Pre*` fields do during trading hours. The latest bar is then today's, still forming.

## Depth: decades of daily closes

```js
sdk.get(InfrontSDK.timeSeries({
  id: { feed: 17921, ticker: "SAAB B" },
  from: new Date("1990-01-01T00:00:00Z"), to: new Date("2026-09-30T23:59:59Z"),
  resolution: { unit: "Day", value: 1 }, fields: ["Last"],
  adjustDividends: false, adjustSplits: true,
  onData: (bars) => bars.observe({ reInit, itemAdded }),
}));
```

The requests started at 1990-01-01, so OMXS30's history may reach further back than shown.

| Instrument | Daily bars | First bar returned | First data after the request |
|---|---|---|---|
| `17921:SAAB B` | 7 110 | 1998-06-18 | 9.1 s (first request of the session) |
| `17921:VOLV B` | 7 900 | 1995-04-21 | 0.46 s |
| `17921:OMXS30` | 9 313 | 1990-01-02 | 0.55 s |
| `17921:OMXSPI` | 7 727 | 1995-12-29 | 0.39 s |

- No bar had a null `last`.
- A historical daily bar's `dateTime` is **midnight UTC** of its trading day (`1998-06-18T00:00:00.000Z`). The latest
  bar is stamped at session open instead (09:00 local). Converting to a Stockholm date gives the trading day in both
  cases.
- **Use `last` as the close.** `officialClose` is null on the latest bar and on nearly all index bars, and differs from
  `last` on 2 592 of SAAB B's bars.

## Total return: use Infront's dividend-adjusted series

With the anchor and base above, the `adjustDividends: true` series, rebased, is the total-return figure Infront
publishes. The largest gap was 0.003 pp.

A local alternative was also tried: unadjusted closes plus `history()` dividends, reinvested at each ex-date's close.
It drifted, with a median gap of 0.28 pp in the calendar-anchored run. Across SAAB B's 4:1 split on 2024-05-07 it
reached 1 005 % against 923 % over the same window, because `history()` amounts are as paid (see below).

Matching Infront's total-return figures is consistent with dividends being reinvested. The method itself is still
undocumented (open question 13 in [open-questions.md](open-questions.md)).

## `history()`: the options work, but amounts are as paid

- `InfrontSDK.history({ id, from, to })` works on 3.1.42, although [HistoryOptions](../reference/SDK/SDK.InfrontSDK.HistoryOptions.md) lists no `id`, `from` or `to`.
- `trades` respected the window: 1 696 bars from 2020-01-01, the same number `timeSeries` returned.
- `dividends` and `splits` came back for the instrument's **whole history** regardless of `from` (VOLV B from 1985).
- A dividend is `{ amount, currency, date }`, and `date` is the **ex-date**. VOLV B `2026-04-09 13 SEK` matches
  Volvo's published first trading day without the dividend (AGM 2026-04-08, record date 04-10).
- **Amounts are not split-adjusted.** SAAB B paid 1.20 SEK on 2026-04-02, after a factor-0.25 split on 2024-05-07;
  earlier entries are in pre-split kronor.
- `splits` also carries rights-issue factors, e.g. SAAB B `2018-11-23 0.92441`.
- On 3.1.42, `sdk.getAsync(InfrontSDK.history(...))` and `getAsync(loginData(...))` throw
  `e.toPromise is not a function`. Use `sdk.get` and take the first `onData`.

## Gross indices exist on 17921

Free-text search finds Nasdaq Stockholm's gross indices (dividends reinvested) on the same feed as the price indices.
All read `Delayed`, like every OMX instrument on this login ([production-user.md](production-user.md)).

| Price index | Gross twin | 5 years from 2021-09-29 to 2026-09-29: price → gross |
|---|---|---|
| `17921:OMXSPI` (OMX Stockholm PI) | `17921:OMXSGI` (OMX Stockholm GI) | 22.24 % → 41.74 % |
| `17921:OMXS30` | `17921:OMXS30GI` (OMX Stockholm 30 GI) | 45.69 % → 69.86 % |

- Other gross indices on 17921: `OMXSBGI` (Benchmark GI), `OMXSBCAPGI`, sector GIs such as `SX3010GI`, and `OMXS60`
  (named "OMX Stockholm 60_GI").
- `2087:OMXSGI` duplicates `17921:OMXSGI`, as the `2087` copies in [instrument-ids.md](instrument-ids.md) do.
- **SIXRX / "SIX Return" are not visible on this login.**

For a total-return comparison, benchmark against the GI twin. The price index leaves out a dividend yield of
several percent a year.

## Search for a type-ahead picker

`symbolSearch({ parameters: "<text>", fields: [...], limit: 30 })`, 13 queries.

- **Latency:** the first items arrived **45–90 ms** after the request once warm. The first search of a session took
  2.2 s, and "hm" once took 0.8 s. The list then stays quiet; nothing else arrives.
- **Filtering:**
  - Keeping only feed `17921` with `SymbolType` `"Stock"` or `"Index"`, and dropping indicator tickers ending `_XX`,
    leaves exactly the Swedish shares and indices. "volvo" gives VOLV B, VOLV A and VOLCAR B; "hennes" gives HM B.
  - Everything else is on other feeds: derivatives on `17923`, warrants on `17931`, certificates on `17944`/`17952`,
    and foreign listings on `2358`, `5475`, `2343`/`2344`, `2163`, `100`, `17665`, `18177`, `18051` and `17938`.
  - `SymbolType` arrives as the strings `Stock`, `Index`, `Funds`, `Futures`, `Option`, `UsOption`, `Certificate`
    and `Bond`.
- **A query with no hits: `onData` fires once, and the list never reports anything,** not even an empty
  `reInit`. That was "SIXRX" for 60 s. A picker should treat `onData` followed by a short silence as "nothing found".
- **The first search after a login is slow.** Its items arrived about 11 s later (2.2 s in another run), and
  every later search answered in tens of ms. A warm-up search right after `onReady` keeps a short empty-timer
  honest. efn-graf's gateway fires one and makes the first real search wait for it.
- **`symbolData` adds the item before its fields arrive.** An instrument not yet seen in the session is in the
  list with `FullName: null` for a moment, so read fields after they arrive, not when the list goes quiet. An
  unknown ticker keeps `FullName: null` for good.

## Node.js: jsdom logs in, but is not a usable host

The 3.1.42 bundle was checked against its SHA256, then evaluated in a jsdom window. It logged in with the
server-issued token and returned 437 daily OMXS30 bars. Kept running, though, it fails: **every Infront socket
closes with code 1006 about 5.5–6 s after opening.** That covers login, data and search.

- The SDK then logs in again, and a request issued during the gap comes back empty. In a run of five searches,
  one returned nothing and two triggered a fresh login.
- Swapping in Node's native (undici) WebSocket changed nothing.
- The minified bundle uses no Worker or page-visibility API that would explain it.

Headless Google Chrome, driven by Playwright and loaded from a `127.0.0.1` page, stays up. Its search sockets
also close after ~5.5 s, which looks like normal server behaviour, but the SDK opens a new one per search.
Warm searches answered in 18–25 ms over a 48-second run.

**Host a long-running relay in a real browser engine, not jsdom.** efn-graf's gateway does this. Whether
Infront supports server-side use at all is still open question 8.

## Session start-up

The first session of the night was ready 6.6 s after `new SDK(...)`. Sessions opened within a minute or two of the
previous one took 9.6–27.6 s. Only one session was open at a time throughout.
