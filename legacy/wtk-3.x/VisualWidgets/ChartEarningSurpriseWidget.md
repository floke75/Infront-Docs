---
title: "Earning Surprise Chart widget"
kind: legacy-widget
page_type: legacy-reference
product: "Infront Web Toolkit"
library_version: "3.x"
status: "legacy — superseded by the 4.x docs in ../../reference; Infront's own banner says this site is no longer updated"
legacy_page: "VisualWidgets"
widget_id: "ChartEarningSurpriseWidget"
option_count: 9
options: ["target", "options", "company", "item", "period", "source", "title", "currency", "highchartsOptions"]
source_url: "https://doc.infrontfinance.com/v3/VisualWidgets#ChartEarningSurpriseWidget"
---

# Earning Surprise Chart widget

```javascript
IAWidget = InfinancialsUI.ChartEarningsSurpriseWidget(target, [options]);
```

The widget is a chart showing:

the history of earnings surprises: for each fiscal year or interim period, the difference between the pre-reported consensus estimates and the reported figure.

the historical and forecast range of consensus estimates (Min,Max)

the historical reported statements as well as the median forecast consensus estimates

The widget has two options:

Financial item displayed

Period (yearly, quarterly)

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

- **Type:** `EarningsSurpriseItemsCharts`
- **Required:** No

Enum to select the field to display

- Infinancials.EarningsSurpriseItemsCharts.**REVENUES_ADJUSTED** = 35484
- Infinancials.EarningsSurpriseItemsCharts.**REVENUES** = 35458
- Infinancials.EarningsSurpriseItemsCharts.**EBITDA** = 35460
- Infinancials.EarningsSurpriseItemsCharts.**EBITDA_ADJUSTED** = 35479
- Infinancials.EarningsSurpriseItemsCharts.**EBIT** = 35462
- Infinancials.EarningsSurpriseItemsCharts.**EBIT_ADJUSTED** = 35477
- Infinancials.EarningsSurpriseItemsCharts.**NET_PROFIT** = 35466
- Infinancials.EarningsSurpriseItemsCharts.**NET_PROFIT_ADJUSTED** = 35478
- Infinancials.EarningsSurpriseItemsCharts.**NET_DEBT** = 38139
- Infinancials.EarningsSurpriseItemsCharts.**CAPEX** = 53456
- Infinancials.EarningsSurpriseItemsCharts.**EPS** = 35467
- Infinancials.EarningsSurpriseItemsCharts.**EPS_ADJUSTED** = 35480
- Infinancials.EarningsSurpriseItemsCharts.**DIVIDEND_PER_SHARE** = 35468
- Infinancials.EarningsSurpriseItemsCharts.**CASH_FLOW_PER_SHARE** = 107928
- Infinancials.EarningsSurpriseItemsCharts.**BOOK_VALUE_PER_SHARE** = 81598

### `period`

- **Type:** `EarningsSurprisePeriodCharts`
- **Required:** No

Enum to select the field to display

- Infinancials.EarningsSurprisePeriodCharts.**YEAR** = 9
- Infinancials.EarningsSurprisePeriodCharts.**QUARTER** = 12

### `source`

- **Type:** `String`
- **Required:** No

The source have to be set to "INQ" because the others data sources are not handled yet.

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
var opts = new Infinancials.ChartEarningsSurpriseWidgetOptions();
opts.company = "90103EF";

var chartEarningsSurpriseWidget = infinancialsUI.ChartEarningsSurpriseWidget("chartEarningsSurprise", opts);
</script>
...
<div id="chartEarningsSurprise"></div>
        
```
