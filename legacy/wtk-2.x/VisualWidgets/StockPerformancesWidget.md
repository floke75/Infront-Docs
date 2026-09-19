---
title: "Stock performances widget"
kind: legacy-widget
page_type: legacy-reference
product: "Infront Web Toolkit"
library_version: "2.x"
status: "legacy — superseded by the 4.x docs in ../../reference; Infront's own banner says this site is no longer updated"
legacy_page: "VisualWidgets"
widget_id: "StockPerformancesWidget"
option_count: 4
options: ["target", "options", "company", "field"]
source_url: "https://doc.infrontfinance.com/v2/VisualWidgets#StockPerformancesWidget"
---

# Stock performances widget

```javascript
InfinWidget = InfinancialsUI.StockPerformancesWidget(target, [options]);
```

Displays the performance of a stock, its related index and relative performance for current year (year to date), and historical performance over & week, 1 month, 3, 5 and 7 years.

### `target`

- **Type:** `String or HTMLElement`

An identifier for the target element. If a string it will be interpreted as an element id.

### `options`

- **Type:** `Object`

A map of configuration-options.

### Configuration options

### `company`

- **Type:** `String`
- **Required:** Yes

The company ISIN or Infinancials code

### `field`

- **Type:** `BenchmarkOption`
- **Required:** No

Available Infinancials.BenchmarkOption:

- BENCHMARK_EV_EBITDA
- BENCHMARK_EV_SALES

### Example

```html
<script>
    var opts = new Infinancials.StockPerformancesWidgetOptions();
    opts.company = "US0378331005" ;
    var spWidget = infinancialsUI.StockPerformancesWidget("stockPerformances", opts);
</script>
...
<div id="stockPerformances"></div>
```
