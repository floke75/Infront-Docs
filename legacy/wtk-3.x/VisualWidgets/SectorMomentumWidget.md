---
title: "Sector Momentum widget"
kind: legacy-widget
page_type: legacy-reference
product: "Infront Web Toolkit"
library_version: "3.x"
status: "legacy — superseded by the 4.x docs in ../../reference; Infront's own banner says this site is no longer updated"
legacy_page: "VisualWidgets"
widget_id: "SectorMomentumWidget"
option_count: 5
options: ["target", "options", "region", "height", "width"]
source_url: "https://doc.infrontfinance.com/v3/VisualWidgets#SectorMomentumWidget"
---

# Sector Momentum widget

```javascript
InfinWidget = InfinancialsUI.SectorMomentumWidget(target, [options]);
```

Displays market sectors evolutions comparisons over 4 weeks (EPS estimates revisions and stock prices evolutions).

### `target`

- **Type:** `String or HTMLElement`

An identifier for the target element. If a string it will be interpreted as an element id.

### `options`

- **Type:** `Object`

A map of configuration-options.

### Configuration options

### `region`

- **Type:** `Integer`
- **Required:** No
- **Default:** `InfinancialsConstants.Regions.WORLD`

See available options in the LeagueLable section - [here](./LeagueTableWidget.md)

### `height`

- **Type:** `Integer`
- **Required:** No

Define the Height of the chart.

### `width`

- **Type:** `number`
- **Required:** No

Define the Width of the chart.

### Example

```html
<script>
    var opts = new Infinancials.SectorMomentumWidgetOptions();
    var smWidget = infinancialsUI.SectorMomentumWidget("sectorMomentum", opts);
</script>
...
<div id="sectorMomentum"></div>
```
