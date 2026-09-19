---
title: "Historical Recommendation Chart widget"
kind: legacy-widget
page_type: legacy-reference
product: "Infront Web Toolkit"
library_version: "3.x"
status: "legacy — superseded by the 4.x docs in ../../reference; Infront's own banner says this site is no longer updated"
legacy_page: "VisualWidgets"
widget_id: "ChartHistoricalRecommandWidget"
option_count: 8
options: ["target", "options", "company", "period", "source", "title", "currency", "highchartsOptions"]
source_url: "https://doc.infrontfinance.com/v3/VisualWidgets#ChartHistoricalRecommandWidget"
---

# Historical Recommendation Chart widget

```javascript
IAWidget = InfinancialsUI.ChartHistoricalRecommandWidget(target, [options]);
```

The widget is a chart showing the history of analyst recommendations, the median target price, the range of target price (Min,Max) and the close price. Historical period options are 1 year (default), 2 years or full history.

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

### `period`

- **Type:** `Number`
- **Required:** No

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
var opts = new Infinancials.ChartHistoricalRecommandWidgetOptions();
opts.company = "90103EF";

var ChartHistoricalRecommand = infinancialsUI.ChartHistoricalRecommandWidget("chartHistoricalRecommand", opts);
</script>
...
<div id="chartHistoricalRecommand"></div>
        
```
