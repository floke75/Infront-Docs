---
title: "ChartTemplate"
qualified_name: "WTK.ChartTemplate"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "WTK"
group: "Other"
nav_path: "WTK > Other > ChartTemplate"
source_url: "https://docs.infrontfinance.com/docs/interfaces/WTK.ChartTemplate.html"
defines: ["ChartTemplate"]
member_count: 8
members: ["chartType?", "indicatorList?", "period?", "resolution?", "showVolume?", "showVolumeUnderlay?", "volumeUnderlayUseUpDownColors?", "volumeUseUpDownColors?"]
member_groups:
  "Properties": ["chartType?", "indicatorList?", "period?", "resolution?", "showVolume?", "showVolumeUnderlay?", "volumeUnderlayUseUpDownColors?", "volumeUseUpDownColors?"]
reference_count: 4
references: ["WTK.ChartType", "WTK.ChartIndicatorSettings", "WTK.Period", "WTK.Resolution"]
---

# ChartTemplate

ChartTemplate

```ts
interface ChartTemplate {
    chartType?: ChartType;
    indicatorList?: ChartIndicatorSettings[];
    period?: Period;
    resolution?: Resolution;
    showVolume?: boolean;
    showVolumeUnderlay?: boolean;
    volumeUnderlayUseUpDownColors?: boolean;
    volumeUseUpDownColors?: boolean;
}
```

### Properties

#### `Optional` chartType

```ts
chartType?: ChartType
```

set chart type

#### `Optional` indicatorList

```ts
indicatorList?: ChartIndicatorSettings[]
```

list of indicators to add to the chart

#### `Optional` period

```ts
period?: Period
```

set period

#### `Optional` resolution

```ts
resolution?: Resolution
```

set resolution

#### `Optional` showVolume

```ts
showVolume?: boolean
```

show the volume

#### `Optional` showVolumeUnderlay

```ts
showVolumeUnderlay?: boolean
```

show the volume-underlay

#### `Optional` volumeUnderlayUseUpDownColors

```ts
volumeUnderlayUseUpDownColors?: boolean
```

color choice for volume-underlay

#### `Optional` volumeUseUpDownColors

```ts
volumeUseUpDownColors?: boolean
```

color choice for volume
