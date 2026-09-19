---
title: "ChartType"
qualified_name: "WTK.ChartType"
kind: enum
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "WTK"
group: "Other"
nav_path: "WTK > Other > ChartType"
source_url: "https://docs.infrontfinance.com/docs/enums/WTK.ChartType.html"
defines: ["ChartType"]
member_count: 8
members: ["AREA", "BASELINE", "CANDLESTICK", "HEIKINASHI", "HOLLOWCANDLESTICK", "LINE", "OHLC", "POINTS"]
member_groups:
  "Enumeration Members": ["AREA", "BASELINE", "CANDLESTICK", "HEIKINASHI", "HOLLOWCANDLESTICK", "LINE", "OHLC", "POINTS"]
---

# ChartType

Chart types

### Enumeration Members

#### AREA

```ts
AREA: "area"
```

#### BASELINE

```ts
BASELINE: "baseline"
```

#### CANDLESTICK

```ts
CANDLESTICK: "candlestick"
```

#### HEIKINASHI

```ts
HEIKINASHI: "heikinashi"
```

#### HOLLOWCANDLESTICK

```ts
HOLLOWCANDLESTICK: "hollowcandlestick"
```

#### LINE

```ts
LINE: "line"
```

#### OHLC

```ts
OHLC: "ohlc"
```

#### POINTS

```ts
POINTS: "points"
```

points is a custom chart type, do not use existing scatter type!
scatter is 2D/xy and does not provide proper tooltip points (lack series information) since Highcharts 9.3!
