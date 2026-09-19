---
title: "Simple Chart Overview widget"
kind: legacy-widget
page_type: legacy-reference
product: "Infront Web Toolkit"
library_version: "2.x"
status: "legacy — superseded by the 4.x docs in ../../reference; Infront's own banner says this site is no longer updated"
legacy_page: "MarketDataWidgets"
widget_id: "SimpleChartOverviewWidget"
option_count: 3
options: ["instrument", "decimals", "defaultPeriod"]
source_url: "https://doc.infrontfinance.com/v2/MarketDataWidgets#SimpleChartOverviewWidget"
---

# Simple Chart Overview widget

```javascript
InfrontWidget = InfrontUI.valuePairWidget(target, [options]);
```

A widget that shows a two-day chart with both the last value and the percent change.

### `instrument`

- **Type:** `instrument`
- **Required:** Yes

The instrument to show in this widget.

### `decimals`

- **Type:** `number`
- **Required:** No

Set to override number of decimals for this widget. Defaults to instrument or feed decimals if not set.

### `defaultPeriod`

- **Type:** `string`
- **Required:** No
- **Default:** `"2D"`

Chart period, available values: "T", "S", "1D", "2D", "5D", "10D", "30D", "6M", "1Y", "5Y", "YTD", "ALL".

### Example

```html
<script type="text/javascript">
var opts = new Infront.SimpleChartOverviewWidgetOptions();
opts.instrument = new Infront.Instrument(2008, "UG");
infront.simpleChartOverviewWidget("#simplechartoverview", opts);
</script>
...
<div id="simplechartoverview"></div>
    
```
