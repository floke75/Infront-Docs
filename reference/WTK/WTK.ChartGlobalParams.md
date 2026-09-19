---
title: "ChartGlobalParams"
qualified_name: "WTK.ChartGlobalParams"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "WTK"
group: "Other"
nav_path: "WTK > Other > ChartGlobalParams"
source_url: "https://docs.infrontfinance.com/docs/interfaces/WTK.ChartGlobalParams.html"
defines: ["ChartGlobalParams"]
member_count: 7
members: ["chartType", "cursorType?", "labelAlpha?", "showOrdinate?", "showPulseTrackLine?", "showSplits?", "streaming?"]
member_groups:
  "Properties": ["chartType", "cursorType?", "labelAlpha?", "showOrdinate?", "showPulseTrackLine?", "showSplits?", "streaming?"]
related_types: ["WTK.GlobalChartSettings"]
reference_count: 3
references: ["WTK.ChartType", "WTK.CursorType", "WTK.GlobalChartSettings"]
---

# ChartGlobalParams

```ts
interface ChartGlobalParams {
    chartType: ChartType;
    cursorType?: CursorType;
    labelAlpha?: string;
    showOrdinate?: boolean;
    showPulseTrackLine?: boolean;
    showSplits?: boolean;
    streaming?: boolean;
}
```

#### Hierarchy ([View Summary](../type-hierarchy.md#WTK.ChartGlobalParams))

- ChartGlobalParams

  - GlobalChartSettings

### Properties

#### chartType

```ts
chartType: ChartType
```

- Main Chart settings

#### `Optional` cursorType

```ts
cursorType?: CursorType
```

- Display settings

#### `Optional` labelAlpha

```ts
labelAlpha?: string
```

- Transparency settings

#### `Optional` showOrdinate

```ts
showOrdinate?: boolean
```

- Axis settings

#### `Optional` showPulseTrackLine

```ts
showPulseTrackLine?: boolean
```

- Pulse line settings

#### `Optional` showSplits

```ts
showSplits?: boolean
```

- Additional information settings

#### `Optional` streaming

```ts
streaming?: boolean
```

- Data settings
