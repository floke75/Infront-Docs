---
title: "Multiples Chart widget"
kind: legacy-widget
page_type: legacy-reference
product: "Infront Web Toolkit"
library_version: "3.x"
status: "legacy — superseded by the 4.x docs in ../../reference; Infront's own banner says this site is no longer updated"
legacy_page: "VisualWidgets"
widget_id: "MultiplesChartWidget"
option_count: 9
options: ["target", "options", "company", "height", "width", "chart", "source", "currency", "highchartsOptions"]
source_url: "https://doc.infrontfinance.com/v3/VisualWidgets#MultiplesChartWidget"
---

# Multiples Chart widget

```javascript
IAWidget = InfinancialsUI.ChartEarningsSurpriseWidget(target, [options]);
```

The widget is a chart showing the monthly historical P/E (price to earnings ratio) using the close price and the next 12 months EPS (earnings per share) at each end of month.

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

### `source`

- **Type:** `String`
- **Required:** No

The source have to be set to "INQ" because the others data sources are not handled yet.

### `currency`

- **Type:** `Number`
- **Required:** No

### `highchartsOptions`

- **Type:** `HighchartsOptions`
- **Required:** No

Override predefined highcharts options (see Highcharts official documentation)

### Example

```html
<script type="text/javascript">
var opts = new Infinancials.MultiplesChartWidgetOptions();
opts.company = "90103EF";

var multiplesChartWidget = infinancialsUI.MultiplesChartWidget("multiplesChart", opts);
</script>
...
<div id="multiplesChart"></div>
        
```
