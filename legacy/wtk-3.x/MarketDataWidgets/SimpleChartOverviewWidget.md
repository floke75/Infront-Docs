---
title: "Simple Chart Overview widget"
kind: legacy-widget
page_type: legacy-reference
product: "Infront Web Toolkit"
library_version: "3.x"
status: "legacy — superseded by the 4.x docs in ../../reference; Infront's own banner says this site is no longer updated"
legacy_page: "MarketDataWidgets"
widget_id: "SimpleChartOverviewWidget"
extends: "SingleInstrumentWidgetOptions"
option_count: 1
options: ["defaultPeriod"]
source_url: "https://doc.infrontfinance.com/v3/MarketDataWidgets#SimpleChartOverviewWidget"
---

# Simple Chart Overview widget

```javascript
InfrontWidget = InfrontUI.valuePairWidget(target, [options]);
```

Extends [SingleInstrumentWidgetOptions](../CoreObjects/SingleInstrumentWidgetOptions.md)

A widget that shows a two-day chart with both the last value and the percent change.

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
