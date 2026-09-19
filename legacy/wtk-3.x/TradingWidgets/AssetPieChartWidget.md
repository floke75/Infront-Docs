---
title: "Assets pie charts widget"
kind: legacy-widget
page_type: legacy-reference
product: "Infront Web Toolkit"
library_version: "3.x"
status: "legacy — superseded by the 4.x docs in ../../reference; Infront's own banner says this site is no longer updated"
legacy_page: "TradingWidgets"
widget_id: "AssetPieChartWidget"
extends: "WidgetBaseOptions"
option_count: 19
options: ["type", "showCash", "enableLabels", "legend", "spacingBottom", "spacingLeft", "spacingRight", "spacingTop", "colors", "borderColor", "borderWidth", "enable3d", "alpha", "beta", "depth", "innerSize", "fontFamily", "legendMaxHeight", "legendLabelColor"]
source_url: "https://doc.infrontfinance.com/v3/TradingWidgets#AssetPieChartWidget"
---

# Assets pie charts widget

```javascript
InfrontWidget = InfrontUI.assetsPieChart(target, [options]);
```

Extends [WidgetBaseOptions](../CoreObjects/WidgetOptions.md)

Displays a pie chart of a portfolio's holdings.

Chart widgets requires the highchart javascript library to function. They also require a height (width optional) to be set via css.

### `type`

- **Type:** `string[]`
- **Default:** `kInstrumentTypes`

The type of units to show:

- Infront.AssetsPieChart.kInstrumentTypes
- Infront.AssetsPieChart.kInstruments

### `showCash`

- **Type:** `boolean`
- **Default:** `True`

Show cash post as an asset type.

### `enableLabels`

- **Type:** `boolean`
- **Default:** `False`

Show or hide labels on the chart.

### `legend`

- **Type:** `boolean`
- **Default:** `False`

Show or hide legend on the chart.

### `spacingBottom`

- **Type:** `number`
- **Default:** `15`

Spacing from chart to bottom edge of container.

### `spacingLeft`

- **Type:** `number`
- **Default:** `10`

Spacing from chart to left edge of container.

### `spacingRight`

- **Type:** `number`
- **Default:** `10`

Spacing from chart to right edge of container.

### `spacingTop`

- **Type:** `number`
- **Default:** `10`

Spacing from chart to top edge of container.

### `colors`

- **Type:** `string[]`
- **Required:** No

Array of hex colors (e.g "#ff00ff") to use in the chart.

### `borderColor`

- **Type:** `string`
- **Required:** No

Hex color (e.g "#ff00ff") to use for chart borders.

### `borderWidth`

- **Type:** `string`
- **Default:** `2`

Border width, in pixels.

### `enable3d`

- **Type:** `boolean`
- **Default:** `False`

Show chart as 3d.

### `alpha`

- **Type:** `number`
- **Default:** `45`

Rotate chart around its x-axis (enable3d must be true).

### `beta`

- **Type:** `number`
- **Default:** `0`

Rotate chart around its y-axis (enable3d must be true).

### `depth`

- **Type:** `number`
- **Default:** `40`

The depth/thickness of a 3d chart (enable3d must be true).

### `innerSize`

- **Type:** `string`
- **Default:** `0%`

Sets inner size

### `fontFamily`

- **Type:** `string`
- **Default:** `"Arial, sans-serif"`

Sets font for the widget

### `legendMaxHeight`

- **Type:** `number`

Sets max height for the legend

### `legendLabelColor`

- **Type:** `string`
- **Default:** `"#999"`

Sets label color

### Example

```html
<script type="text/javascript">
infrontUI.assetsPieChart("#pieChart", {});
</script>
...
<div id="pieChart"></div>
        
```
