---
title: "Revision Chart widget"
kind: legacy-widget
page_type: legacy-reference
product: "Infront Web Toolkit"
library_version: "3.x"
status: "legacy — superseded by the 4.x docs in ../../reference; Infront's own banner says this site is no longer updated"
legacy_page: "VisualWidgets"
widget_id: "ChartRevisionWidget"
option_count: 9
options: ["target", "options", "company", "item", "year", "source", "title", "currency", "highchartsOptions"]
source_url: "https://doc.infrontfinance.com/v3/VisualWidgets#ChartRevisionWidget"
---

# Revision Chart widget

```javascript
IAWidget = InfinancialsUI.ChartRevisionWidgetOptions(target, [options]);
```

The widget is a chart showing, for each fiscal year, the current revision (variation) of consensus estimates for various period of time (4 weeks, 12 weeks…).
The widget has two options:

Financial item

Fiscal year

### `target`

- **Type:** `String or HTMLElement`

Target element identifier, interpreted as an element id when it's a String.

### `options`

- **Type:** `Object`

A map of configuration options.

### Configuration options

### `company`

- **Type:** `String`
- **Required:** No

The company ISIN or Infront code.

### `item`

- **Type:** `RevisionItemsCharts`
- **Required:** No

Enum to select the field to display

- Infinancials.RevisionItemsCharts.**CFPS_MEDIAN**
- Infinancials.RevisionItemsCharts.**EPS_MEDIAN**
- Infinancials.RevisionItemsCharts.**DIV_MEDIAN**
- Infinancials.RevisionItemsCharts.**EBIT_MEDIAN**
- Infinancials.RevisionItemsCharts.**EBITDA_MEDIAN**
- Infinancials.RevisionItemsCharts.**NETPROFIT_MEDIAN**
- Infinancials.RevisionItemsCharts.**SALES_MEDIAN**

### `year`

- **Type:** `Number`
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
var opts = new Infinancials.ChartRevisionWidgetOptions();
opts.company = "90103EF";

var chartRevisionWidget = infinancialsUI.ChartRevisionWidget("chartRevision", opts);
</script>
...
<div id="chartRevision"></div>
        
```
