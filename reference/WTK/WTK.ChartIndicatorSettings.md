---
title: "ChartIndicatorSettings"
qualified_name: "WTK.ChartIndicatorSettings"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "WTK"
group: "Other"
nav_path: "WTK > Other > ChartIndicatorSettings"
source_url: "https://docs.infrontfinance.com/docs/interfaces/WTK.ChartIndicatorSettings.html"
defines: ["ChartIndicatorSettings"]
member_count: 5
members: ["id?", "linkedTo", "params?", "type", "visible?"]
member_groups:
  "Properties": ["id?", "linkedTo", "params?", "type", "visible?"]
reference_count: 1
references: ["WTK.IndicatorType"]
---

# ChartIndicatorSettings

Chart indicator settings

```ts
interface ChartIndicatorSettings {
    id?: string;
    linkedTo: string | number;
    params?: any;
    type: IndicatorType;
    visible?: boolean;
}
```

### Properties

#### `Optional` id

```ts
id?: string
```

the indicator id

#### linkedTo

```ts
linkedTo: string | number
```

id or index of instrument-series to which the indicator is linked

#### `Optional` params

```ts
params?: any
```

indicator specific parameters

#### type

```ts
type: IndicatorType
```

the [IndicatorType](./WTK.IndicatorType.md)

#### `Optional` visible

```ts
visible?: boolean
```

is indicator visible or hidden
