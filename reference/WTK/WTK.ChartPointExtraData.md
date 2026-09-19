---
title: "ChartPointExtraData"
qualified_name: "WTK.ChartPointExtraData"
kind: type-alias
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "WTK"
group: "Other"
nav_path: "WTK > Other > ChartPointExtraData"
source_url: "https://docs.infrontfinance.com/docs/types/WTK.ChartPointExtraData.html"
defines: ["ChartPointExtraData"]
reference_count: 2
references: ["WTK.ChartHoverSeriesValue", "WTK.ChartWidgetOptions"]
---

# ChartPointExtraData

```ts
ChartPointExtraData: ChartHoverSeriesValue[]
```

Additional, tooltip-equivalent data for the point passed to [ChartWidgetOptions.onPointMouseOver](./WTK.ChartWidgetOptions.md#onpointmouseover)

- one entry per series currently shown on the chart, each looked up at the hovered timestamp (not
  necessarily an exact match for series other than the hovered one - see [ChartHoverSeriesValue](./WTK.ChartHoverSeriesValue.md)).
