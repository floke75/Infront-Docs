---
title: "Estimates widget"
kind: legacy-widget
page_type: legacy-reference
product: "Infront Web Toolkit"
library_version: "3.x"
status: "legacy — superseded by the 4.x docs in ../../reference; Infront's own banner says this site is no longer updated"
legacy_page: "VisualWidgets"
widget_id: "EstimatesWidget"
option_count: 18
options: ["target", "options", "company", "display", "chart", "chartHeight", "displayLegend", "period", "enableChartSelection", "source", "title", "currency", "dataContent", "displayTargetChart", "displayTargetChartLegend", "displayEstimatesSecondSeriesChart", "shortUpsideTargetPrice", "displayRecommendationsAsChart"]
source_url: "https://doc.infrontfinance.com/v3/VisualWidgets#EstimatesWidget"
---

# Estimates widget

```javascript
InfinWidget = InfinancialsUI.EstimatesWidget(target, [options]);
```

This widget includes EPS and Dividend Yield estimates evolution chart from last actual to 4 years ahead, latest and 4-week consensus recommendations,
number of analysts contributing to the consensus, target price information with statistics (median, average, highest, lowest),
upside to target price from current stock price, and target price historical evolution compared to stock price evolution.

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

### `display`

- **Type:** `String`
- **Required:** No
- **Default:** `InfinancialsConstants.Display.HORIZONTAL`

Available display constants:

- InfinancialsConstants.Display.HORIZONTAL
- InfinancialsConstants.Display.Vertical

### `chart`

- **Type:** `Integer`
- **Required:** No
- **Default:** `InfinancialsConstants.EstimatesChart.EPS_DIV_YIELD`

Available chart constants:

- InfinancialsConstants.EstimatesChart.EPS_DIV_YIELD
- InfinancialsConstants.EstimatesChart.NETSALES
- InfinancialsConstants.EstimatesChart.EBITDA_EBITDAMARGIN
- InfinancialsConstants.EstimatesChart.EBIT_EBITMARGIN
- InfinancialsConstants.EstimatesChart.NET_INCOME_MARGIN
- InfinancialsConstants.EstimatesChart.NET_DEBT_DEBT_EQUITY
- InfinancialsConstants.EstimatesChart.BOOKVALUE_ROE

### `chartHeight`

- **Type:** `number`
- **Required:** No

Define charts height.

### `displayLegend`

- **Type:** `boolean`
- **Required:** No

Display the recommendations legend.

### `period`

- **Type:** `String`
- **Required:** No

The recommandation to display. Can be "Last"+"1w"+"4w"+"12W+

### `enableChartSelection`

- **Type:** `Boolean`
- **Required:** No

Add a select box to choose between available charts.

### `source`

- **Type:** `String`
- **Required:** No

### `title`

- **Type:** `String`
- **Required:** No

### `currency`

- **Type:** `Number`
- **Required:** No

### `dataContent`

- **Type:** `Object`
- **Required:** No

### `displayTargetChart`

- **Type:** `Boolean`
- **Required:** No

### `displayTargetChartLegend`

- **Type:** `Boolean`
- **Required:** No

Display the Chart Target Price

### `displayEstimatesSecondSeriesChart`

- **Type:** `Boolean`
- **Required:** No

Display the close price inside the Chart Target Price

### `shortUpsideTargetPrice`

- **Type:** `Boolean`
- **Required:** No

Display the header name in short format

### `displayRecommendationsAsChart`

- **Type:** `Boolean`
- **Required:** No

Display the recommandation inside a variable-pie chart

### Example

```html
<script type="text/javascript">
    var opts = new Infinancials.EstimatesWidgetOptions();
    opts.company = "US0378331005";
    opts.display = InfinancialsConstants.Display.HORIZANTAL;
    opts.chartHeight = 150;
    opts.enableChartSelection = true;
    opts.chart = InfinancialsConstants.EstimatesChart.EPS_DIV_YIELD;
    var companyTitleWidget = infinancialsUI.EstimatesWidget("estimates", opts);
</script>
...
<div id="estimates"></div>
```
