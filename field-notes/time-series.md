---
title: "Intraday time series — two sessions per day back, and the live ordering trap"
kind: field-note
page_type: field-note
module: SDK
verified: "2026-09-22"
source: "live sandbox timeSeries, EFN documentation test user"
related: ["reference/SDK/SDK.InfrontSDK.TimeSeriesOptions.md", "examples/SDK-SDK-Examples-TimeSeries.md"]
---

# Intraday time series: two sessions per "day back", and the live ordering trap

```js
sdk.get(InfrontSDK.timeSeries({
  id: { feed: 17921, ticker: "OMXS30" }, daysBack: 1,
  resolution: { unit: "Minute", value: 1 }, fields: ["Last"], subscribe: true,
  onData: (bars) => bars.observe({ reInit, itemAdded, itemChanged }),
}));
```

## What comes back

- An `ObservableArray` of **plain objects**: `dateTime`, `date`, `time`, `open`, `high`, `low`, `last`,
  `bid`, `ask`, `mid`, `volume`, `accumulatedVolume`, `turnover`, `onExchTurnover`, `yield`, `trades`,
  `orderbookMoves`, `netAssetValue`, `officialClose`, `bidYield`, `askYield`, `indicTrade`, `indicIncVol`,
  `indicHigh`, `indicLow`, `indicOpen`, `indicOpenVol`, `nms`, `onFloorVolume`, `change`, `changePercent`,
  `vwap`.
- **Use `dateTime`** (a `Date`, the bar's start). `time` is a time-of-day on a **1899-12-31 epoch** — a
  spreadsheet convention — and `date` is local midnight expressed in UTC.
- The per-bar `change`/`changePercent` is null on the first bar, so it is not measured against
  `YesterdayClose` (that is the symbol's `ChangePercent`, [streaming.md](streaming.md)); what it is measured
  against was not established.

## `daysBack: 1` is today AND the previous session

OMXS30 with `daysBack: 1` returned **1 014 one-minute bars, from 2026-09-21 07:00Z to 2026-09-22 15:29Z** —
two full Nasdaq Stockholm sessions. Brent (24-hour) returned 2 431. **Cut to today's session yourself.**
The docs' "If option to is not assigned today will be used" does not mean "only today".

## The live ordering trap (`subscribe: true`)

Watched on `13:BRT`, real-time, for 75 s across two minute boundaries:

1. The history arrives in **one `reInit`, oldest first** (index 0 = two days ago, last index = the latest
   minute).
2. Each **new minute's bar is INSERTED AT INDEX 0** — `itemAdded(item, 0)` — not appended.
3. The **forming bar is updated in place at index 0** — `itemChanged(item, 0)`, 373 times in 75 s, once per
   tick.
4. The result is **not monotonic**, and **the bar that was forming when the subscription started appeared
   twice** (21:36 at index 2 and again at the tail).
5. A newly inserted bar's `dateTime` carried milliseconds (`19:37:00.022Z`) while history bars sat on the
   minute.

**Rule:** never read a live series by index or trust its order. Key bars by `dateTime` floored to the
resolution, keep one bar per key (the latest update wins), and sort by key when you read.
