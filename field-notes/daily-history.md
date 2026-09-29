---
title: "Daily history, total return, gross indices and search — what EFN's production login returned"
kind: field-note
page_type: field-note
module: SDK
verified: "2026-09-30"
source: "EFN production account, WTK 3.1.42 (pinned CDN bundle), headless Google Chrome and jsdom; efn-graf spike probes, run 2026-09-30 01:00–01:30 CEST"
related: ["reference/SDK/SDK.InfrontSDK.TimeSeriesOptions.md", "reference/SDK/SDK.InfrontSDK.HistPerformanceField.md", "reference/SDK/SDK.InfrontSDK.HistoryOptions.md", "field-notes/time-series.md", "field-notes/instrument-ids.md", "field-notes/production-user.md"]
---

# Daily history, total return, gross indices and search

Probed on the production user for a chart tool: comparing shares and indices over YTD, 1, 3 and 5 years,
by price and by total return. Numbers are from one run after midnight, when the latest close was
**2026-09-29**. No token or credential was recorded.

## Rule of thumb

To reproduce Infront's own performance figures exactly:
- count N-year periods back from the **latest close date**, not the calendar day;
- measure from the last close **on or before** that date;
- measure YTD from the previous year's last close;
- for total return, use `timeSeries` with `adjustDividends: true`.

All 36 figures (6 shares × 1Y/3Y/5Y × price/total return) then equalled `PreChangePercent*` and
`PreTotalReturnChangePct*` to within 0.01 percentage points. YTD matched as well.

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

| Instrument | Daily bars | First | Last | First request |
|---|---|---|---|---|
| `17921:SAAB B` | 7 110 | 1998-06-18 | 2026-09-29 | 11.2 s (cold) |
| `17921:VOLV B` | 7 900 | 1995-04-21 | 2026-09-29 | 2.0 s |
| `17921:OMXS30` | 9 313 | 1990-01-02 | 2026-09-29 | 1.7 s |
| `17921:OMXSPI` | 7 727 | 1995-12-29 | 2026-09-29 | 1.7 s |

- The ten-year period and more are safe.
- No bar had a null `last`.
- A historical daily bar's `dateTime` is **midnight UTC** of its trading day (`1998-06-18T00:00:00.000Z`). The latest,
  still-current bar is stamped at session open instead (09:00 local). Converting `dateTime` to a Stockholm date gives
  the trading day in both cases.
- **Use `last` as the close.** `officialClose` is null on the latest bar and on indices. It also differs from
  `last` on 2 592 of SAAB B's bars (4 or fewer for the others). `last` is the field whose results matched Infront's
  figures.

## Total return: use Infront's dividend-adjusted series

For each share, over the same windows, three things were compared:
- Infront's published figures (`symbolData`, `content: { HistoricalPerformance: true }`);
- the `adjustDividends: true` series, rebased;
- our own reinvestment: unadjusted closes plus `history()` dividends, reinvested at the ex-date close.

| Share | Period | Infront `PreTotalReturnChangePct*` | `adjustDividends: true`, rebased | Own reinvestment |
|---|---|---|---|---|
| SAAB B | YTD | 14.44 | 14.44 | 14.44 |
| SAAB B | 3Y | 346.98 | 346.98 | 351.62 |
| VOLV B | YTD | 13.99 | 13.99 | 13.95 |
| VOLV B | 3Y | 69.19 | 69.19 | 70.21 |
| SEB A | YTD | 28.53 | 28.53 | 28.34 |
| HM B | 3Y | 14.58 | 14.58 | 14.36 |

- The same held for INVE B and ERIC B, and for 1Y and 5Y once they were anchored on the latest close. The
  median gap was **0.002 pp for the adjusted series** and 0.28 pp for own reinvestment.
- Own reinvestment fails worst across a split. Over a window containing SAAB B's 4:1 split (2024-05-07), it gave
  1 005 % against the adjusted series' 923 %.
- The adjustment Infront applies is therefore a proper gross total return, reinvested (not merely
  "dividends subtracted"). The docs never say so (`TimeSeriesOptions.adjustDividends`: "can only be applied on
  historical trades").

## `history()`: the options work, but amounts are as paid

- `InfrontSDK.history({ id, from, to })` works on 3.1.42, even though [HistoryOptions](../reference/SDK/SDK.InfrontSDK.HistoryOptions.md) lists no `id`, `from` or `to`.
- `trades` respected the window: 1 696 bars from 2020-01-01, the same count `timeSeries` returned.
- `dividends` and `splits` came back for the instrument's **whole history** (VOLV B from 1985) regardless
  of `from`.
- A dividend is `{ amount, currency, date }`, and `date` is the **ex-date**. VOLV B `2026-04-09 13 SEK`
  matches Volvo's published first trading day without the dividend (AGM 2026-04-08, record date 04-10).
- **Amounts are not split-adjusted.** SAAB B paid 1.20 SEK on 2026-04-02 after a factor-0.25 split on 2024-05-07,
  while earlier entries are in pre-split kronor. `splits` also carries rights-issue factors (SAAB B `2018-11-23 0.92441`).
  Reinvesting these amounts against split-adjusted prices overstates total return.
- `sdk.getAsync(InfrontSDK.history(...))` and `getAsync(loginData(...))` throw `e.toPromise is not a
  function` on 3.1.42. Use `sdk.get` and take the first `onData`.

## Gross indices exist on 17921

Free-text search finds Nasdaq Stockholm's gross (dividends reinvested) indices on the same feed as the price
indices. All of them read `Delayed`, like every OMX instrument on this login ([production-user.md](production-user.md)).

| Price index | Gross twin | 5 years to 2026-09-29, price → gross |
|---|---|---|
| `17921:OMXSPI` (OMX Stockholm PI) | `17921:OMXSGI` (OMX Stockholm GI) | 21.72 % → 41.09 % |
| `17921:OMXS30` | `17921:OMXS30GI` (OMX Stockholm 30 GI) | 45.46 % → 69.49 % |

- Also present: `17921:OMXSBGI` (Benchmark GI), `OMXS60` (named "OMX Stockholm 60_GI"), `OMXSBCAPGI`, and sector
  GIs such as `SX3010GI`.
- `2087:OMXSGI` duplicates `17921:OMXSGI` (compare the `2087` copies in [instrument-ids.md](instrument-ids.md)).
- **SIXRX / "SIX Return" are not visible.** Those searches found nothing.

For a total-return comparison, benchmark against the GI twin. The price index leaves out a dividend yield of
several percent a year.

## Search for a type-ahead picker

`symbolSearch({ parameters: "<text>", fields: [...], limit: 30 })`, 12 queries:

- **Latency:** about 0.8 s per query once warm. The first search of a session took 11 s.
- **What comes back:**
  - The Stockholm share or index is present in every case.
  - Keeping only feed `17921` and `SymbolType` `"Stock"` or `"Index"` (dropping indicator tickers ending `_XX`)
    leaves exactly the Swedish shares and indices. For example, "volvo" gives VOLV B, VOLV A and VOLCAR B, and
    "hennes" gives HM B.
  - The rest: derivatives on `17923`, warrants on `17931`, certificates on `17944`/`17952`, and foreign listings
    on `2358` (Tradegate), `5475` (Cboe Europe), `2343`/`2344` (US), `2163` (Toronto), `100`, `17665`, `18177`,
    `18051` and `17938`.
  - `SymbolType` arrives as the strings `Stock`, `Index`, `Funds`, `Futures`, `Option`, `UsOption`, `Certificate`
    and `Bond`.
- **A query with no hits never answers.** "SIXRX" produced no `onData` item and no `onError` for 60 s. A picker
  needs its own short timeout to show "nothing found".

## Node.js: the pinned bundle runs under jsdom

The 3.1.42 bundle was evaluated inside a jsdom window (`runScripts: "outside-only"`, the window's own WebSocket),
with the SHA256 checked first. It logged in with the server-issued token and returned 437 daily OMXS30 bars,
with no errors. **A server-side relay does not need a browser** (open question 8).

## Session start-up

The first session of the night was ready 6.6 s after `new SDK(...)`. Sessions opened within a minute or two of
the previous one took 9.6–27.6 s. Only one session was open at a time throughout.
