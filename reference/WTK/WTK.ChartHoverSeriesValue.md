---
title: "ChartHoverSeriesValue"
qualified_name: "WTK.ChartHoverSeriesValue"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "WTK"
group: "Other"
nav_path: "WTK > Other > ChartHoverSeriesValue"
source_url: "https://docs.infrontfinance.com/docs/interfaces/WTK.ChartHoverSeriesValue.html"
defines: ["ChartHoverSeriesValue"]
member_count: 9
members: ["isHoveredSeries", "name", "open?", "pctChange", "seriesId", "timestamp", "turnover", "value", "volume"]
member_groups:
  "Properties": ["isHoveredSeries", "name", "open?", "pctChange", "seriesId", "timestamp", "turnover", "value", "volume"]
reference_count: 1
references: ["WTK.ChartPointExtraData"]
---

# ChartHoverSeriesValue

One series' tooltip-equivalent values at the hovered timestamp - the same information (with the
same special-casing) shown in the chart's tooltip for that series, but computed independently of
whether the tooltip is actually shown. Part of [ChartPointExtraData](./WTK.ChartPointExtraData.md).

```ts
interface ChartHoverSeriesValue {
    isHoveredSeries: boolean;
    name: string;
    open?: number;
    pctChange: number;
    seriesId: string;
    timestamp: number;
    turnover: number;
    value: number;
    volume: number;
}
```

### Properties

#### isHoveredSeries

```ts
isHoveredSeries: boolean
```

`true` for the series the mouse is actually hovering over (matches the callback's ` point` parameter); ` false` for every other series looked up at the same timestamp.

#### name

```ts
name: string
```

Instrument display name, same as shown in the tooltip/legend.

#### `Optional` open

```ts
open?: number
```

Only set for OHLC instruments - same breakdown shown in the tooltip's open/high/low/close rows.

#### pctChange

```ts
pctChange: number
```

Percentage change vs. the neighbouring (previous) point - same value/calculation used for the
tooltip's coloured pct-change text. `null` if there is no previous point to compare against.

#### seriesId

```ts
seriesId: string
```

Highcharts series id (`ChartInstrumentSettings.id`).

#### timestamp

```ts
timestamp: number
```

Epoch-ms timestamp this entry's values actually belong to. Equal to the callback's `point.x` for
the hovered series; for every other series this is that series' OWN nearest timestamp, which is
generally NOT identical to `point.x` (different instruments/feeds never share exact timestamps).

#### turnover

```ts
turnover: number
```

Turnover at this point, if the instrument has turnover data - same value shown in the tooltip's turnover row. `null` if unavailable.

#### value

```ts
value: number
```

The single "current" value for this series (`close` for OHLC data, the plain value otherwise) - same value the tooltip's single-line row would show.

#### volume

```ts
volume: number
```

Volume at this point, if the instrument has volume data - same value shown in the tooltip's volume row. `null` if unavailable.
