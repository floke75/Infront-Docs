---
title: "Multiples Chart widget"
kind: legacy-widget
page_type: legacy-reference
product: "Infront Web Toolkit"
library_version: "2.x"
status: "legacy — superseded by the 4.x docs in ../../reference; Infront's own banner says this site is no longer updated"
legacy_page: "VisualWidgets"
widget_id: "MultiplesChartWidget"
option_count: 7
options: ["target", "options", "company", "height", "width", "chart", "highchartsOptions"]
source_url: "https://doc.infrontfinance.com/v2/VisualWidgets#MultiplesChartWidget"
---

# Multiples Chart widget

```javascript
InfinWidget = InfinancialsUI.MultiplesChartWidget(target, [options]);
```

The chart displays NTM (Next Twelve Months) estimates vs international peers.

### `target`

- **Type:** `String or HTMLElement`

An identifier for the target element. If a string it will be interpreted as an element id.

### `options`

- **Type:** `Object`

A map of configuration-options.

### Configuration options

### `company`

- **Type:** `String`
- **Required:** No

The company ISIN or Infinancials code

### `height`

- **Type:** `number`
- **Required:** No

Define the Height of the chart.

### `width`

- **Type:** `number`
- **Required:** No

Define the Width of the chart.

### `chart`

- **Type:** `number`
- **Required:** No
- **Default:** `InfinancialsContants.MultiplesChart.PRICE_EARNINGS_NTM`

Available options for Industrial companies:

- InfinancialsConstants.MultiplesChart.PRICE_EARNINGS_NTM
- InfinancialsConstants.MultiplesChart.EV_SALES_NTM
- InfinancialsConstants.MultiplesChart.EV_EBITDA_NTM
- InfinancialsConstants.MultiplesChart.EV_EBIT_NTM

Available options for Banking companies:

- InfinancialsConstants.MultiplesChart.PRICE_EARNINGS_NTM
- InfinancialsConstants.MultiplesChart.PRICE_TO_BOOK
- InfinancialsConstants.MultiplesChart.MARKET_CAP_SALES
- InfinancialsConstants.MultiplesChart.PRICE_GROSS_OP_PROFIT

### `highchartsOptions`

- **Type:** `HighchartsOptions`
- **Required:** No

Override predefined highcharts options (see Highcharts official documentation)

### Example

```html
<script>
    var opts = new Infinancials.MultiplesChartWidgetOptions();
    opts.company = "US0378331005";
    var mcWidget = InfinancialsUI.MultiplesChartWidget("multiplesChart", opts);
</script>
...
<div id="multiplesChart"></div>
```
