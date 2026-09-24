---
title: "Streaming live fields — shapes, rates, batching"
kind: field-note
page_type: field-note
module: SDK
verified: "2026-09-24"
source: "2026-09-22 sandbox symbolData, EFN test user; production differences and later fields linked inline"
related: ["reference/SDK/SDK.InfrontSDK.SymbolDataOptions.md", "reference/SDK/SDK.InfrontSDK.BasicField.md", "examples/SDK-SDK-Examples-Feed-Symbol.md"]
---

# Streaming live fields: shapes, rates, batching

**Detecting outages or sharing data across EFN apps:** read
[production transport behavior](live-token-stage.md#data-transport-loss-is-not-a-top-level-disconnect)
and [concurrent login](live-token-stage.md#concurrent-login). Price ticks, local keepalives and top-level
SDK callbacks alone cannot establish that a data connection is healthy.

## What `onData` receives depends on how you pass `id`

```js
sdk.get(InfrontSDK.symbolData({ id, content: { Basic: true }, subscribe: true, onData, onError }));
```

- **One id object** → `onData(symbolData)`: a single `SymbolData`.
- **An array of ids** → `onData(list)`: an `InfrontUtil.ObservableArray<SymbolData>` with `length()`,
  `item(i)`, `observe({ reInit, itemAdded, itemChanged, itemRemoved, itemMoved })`, `foreach`, `find`.
  (`length` is a method; the `ObservableArray` reference page omits `observe`, which every example uses.)
- **Match items by identity, not position.** With EFN's production user on WTK 3.1.42 (2026-09-23), the
  items of a 17-id request read by index carried other instruments' values on the session's first data
  request, though later requests came back aligned ([production-user.md](production-user.md)). Key each
  item by its own `get("Feed")` and `get("Ticker")`.
- **Values are present on the first `onData`** for `content: { Basic: true }` — `item(0).get("Last")`
  returned OMXS30's last value immediately in the sandbox (SDK 2.3.1). **Not on WTK 3.1.42**: there the
  list starts empty and each id's item is pushed as its answer lands, so observe the list
  ([production-user.md](production-user.md)).
- `symbolData.get(field)` returns numbers, strings and **`Date` objects** (`TradeTime`, `LastTradedAt`).
  `symbolData.observe(field, cb)` returns an `Unbind`; the `Unsubscribe` from `sdk.get` ends the stream.

## Fields, as they came back

`Feed`, `Ticker`, `FullName`, `SymbolType`, `Currency`, `Last`, `Change`, `ChangePercent`,
`YesterdayClose`, `TradeTime`, `FeedAccess`, `FeedAccessStr`, `FeedDelayStr` ("15 minutes " — note the
trailing space), `NotForDisplay` (0 on everything observed), `MarketPhase` and `SymbolStatusText` (empty
after hours).

**`ChangePercent` is percent units measured against `YesterdayClose`**, verified on an index and a currency
pair: OMXS30 `Last` 3335.93765, `YesterdayClose` 3307.02408, `ChangePercent` 0.87431 = (3335.93765 /
3307.02408 − 1) × 100; USDSEK 9.84472 / 9.837 → 0.07848.

**Nikkei 225 (`6150:N225`) returned no `Last` in the initial observations**, while `ChangePercent` and
`YesterdayClose` were present. The [2026-09-24 production run](live-token-stage.md#data-observations)
did receive a numeric Last. Handle a missing level per response rather than permanently excluding the symbol.

## Update rates (20 s window, 21:30 CEST — US session open, Stockholm closed)

| Symbol | Access | Updates of `Last` | Median gap |
|---|---|---|---|
| `13:BRT` Brent | real-time | 74 | 141 ms |
| `13:GLDSPOT` Gold | real-time | 37 | 525 ms |
| `2087:COMP` Nasdaq Composite | delayed 15 | 22 | **1 ms** — delayed data arrives in bursts |
| `12:USDSEK` | delayed 15 | 2 | 8.6 s |

- `Last` and `ChangePercent` fire together: identical update counts on every symbol.
- A real-time instrument can tick several times a second. **Batch before rendering**: collect the latest
  value per symbol and render on a fixed cadence (e.g. at most twice a second). Rendering per tick for a few
  dozen instruments in a Nordic session is avoidable main-thread load — decisive on a page that is also
  decoding video.
- The `throttling` SDK option ("Delay updates by millie-seconds") exists; its effect was not measured here.
