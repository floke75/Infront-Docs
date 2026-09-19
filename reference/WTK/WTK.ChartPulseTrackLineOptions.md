---
title: "ChartPulseTrackLineOptions"
qualified_name: "WTK.ChartPulseTrackLineOptions"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "WTK"
group: "Other"
nav_path: "WTK > Other > ChartPulseTrackLineOptions"
source_url: "https://docs.infrontfinance.com/docs/interfaces/WTK.ChartPulseTrackLineOptions.html"
defines: ["ChartPulseTrackLineOptions"]
member_count: 3
members: ["dashStyle?", "width?", "zIndex?"]
member_groups:
  "Properties": ["dashStyle?", "width?", "zIndex?"]
reference_count: 1
references: ["WTK.ChartPlotlineOptions"]
---

# ChartPulseTrackLineOptions

Line customization for PulseTrackLine.ts - a plain renderer-drawn path, not a Highcharts plotline,
so ChartPlotlineOptions doesn't apply here.

```ts
interface ChartPulseTrackLineOptions {
    dashStyle?: string;
    width?: number;
    zIndex?: number;
}
```

### Properties

#### `Optional` dashStyle

```ts
dashStyle?: string
```

The dash style of the line (e.g., 'Solid', 'Dash', 'Dot').

#### `Optional` width

```ts
width?: number
```

The width of the line (in pixels).

#### `Optional` zIndex

```ts
zIndex?: number
```

The z-index of the line (controls stacking order).
