---
title: "Estimates History Chart widget"
kind: legacy-widget
page_type: legacy-reference
product: "Infront Web Toolkit"
library_version: "3.x"
status: "legacy — superseded by the 4.x docs in ../../reference; Infront's own banner says this site is no longer updated"
legacy_page: "VisualWidgets"
widget_id: "ChartEstimatesHistoWidget"
option_count: 9
options: ["target", "options", "company", "item", "period", "source", "title", "currency", "highchartsOptions"]
source_url: "https://doc.infrontfinance.com/v3/VisualWidgets#ChartEstimatesHistoWidget"
---

# Estimates History Chart widget

```javascript
IAWidget = InfinancialsUI.ChartEstimatesHistoWidgetOptions(target, [options]);
```

The widget is a chart showing, for each fiscal year, the historical consensus estimates together with the close price. The widget has one option which is the financial item.

### `target`

- **Type:** `String or HTMLElement`

An identifier for the target element. If a string it will be interpreted as an element id.

### `options`

- **Type:** `Object`

A map of configuration options.

### Configuration options

### `company`

- **Type:** `String`
- **Required:** No

The company ISIN or Infront code.

### `item`

- **Type:** `Number`
- **Required:** No

### `period`

- **Type:** `String`
- **Required:** No

### `source`

- **Type:** `String`
- **Required:** No

### `title`

- **Type:** `String`
- **Required:** No

### `currency`

- **Type:** `Number`
- **Required:** No

### `highchartsOptions`

- **Type:** `HighchartsOptions`
- **Required:** No

### Example

```html
<script type="text/javascript">
var opts = new Infinancials.ChartEstimatesHistoWidgetOptions();
opts.company = "90103EF";

var chartEstimatesHistoWidget = infinancialsUI.ChartEstimatesHistoWidget("chartEstimatesHisto", opts);
</script>
...
<div id="chartEstimatesHisto"></div>
        
```
