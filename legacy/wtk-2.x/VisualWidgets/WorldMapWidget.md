---
title: "World Map widget"
kind: legacy-widget
page_type: legacy-reference
product: "Infront Web Toolkit"
library_version: "2.x"
status: "legacy — superseded by the 4.x docs in ../../reference; Infront's own banner says this site is no longer updated"
legacy_page: "VisualWidgets"
widget_id: "WorldMapWidget"
option_count: 6
options: ["target", "options", "chart", "height", "width", "enableSelection"]
source_url: "https://doc.infrontfinance.com/v2/VisualWidgets#WorldMapWidget"
---

# World Map widget

```javascript
InfinWidget = InfinancialsUI.WorldMapWidget(target, [options]);
```

Allows selection of a location in the process of investment universe selection using a map.
Functionalities include zoom in and out and selection of countries.

### `target`

- **Type:** `String or HTMLElement`

An identifier for the target element. If a string it will be interpreted as an element id.

### `options`

- **Type:** `Object`

A map of configuration-options.

### Configuration options

### `chart`

- **Type:** `WorldMapChartType`
- **Required:** No

Display world map by countries or by Market place. Available Infinancials.WorldMapChartType enum:

- COUNTRY
- MARKETPLACE

### `height`

- **Type:** `number`
- **Required:** No

Define the Height of the chart

### `width`

- **Type:** `number`
- **Required:** No

Define the Width of the chart.

### `enableSelection`

- **Type:** `Boolean`
- **Required:** No

Display a select box to select and change the region.

### Example

```html
<script>
    var opts = new Infinancials.WorldMapWidgetOptions();
    opts.chart = Infinancials.WorldMapchartType.MARKETPLACE;
    var wmWidget = infinancialsUI.WorldMapWidget("worldMap", opts);
</script>
...
<div id="worldMap"></div>
```
