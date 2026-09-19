---
title: "Evolution chart widget"
kind: legacy-widget
page_type: legacy-reference
product: "Infront Web Toolkit"
library_version: "3.x"
status: "legacy — superseded by the 4.x docs in ../../reference; Infront's own banner says this site is no longer updated"
legacy_page: "VisualWidgets"
widget_id: "EvolutionChartWidget"
option_count: 4
options: ["target", "options", "company", "highchartsOptions"]
source_url: "https://doc.infrontfinance.com/v3/VisualWidgets#EvolutionChartWidget"
---

# Evolution chart widget

```javascript
InfinWidget = InfinancialsUI.EvolutionChartWidget(target, [options]);
```

Historical and forecast chart of net sales, net income and net margin.

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

### `highchartsOptions`

- **Type:** `HighchartsOptions`
- **Required:** no

Override predefined highcharts options (see Highcharts official documentation)

### Example

```html
<script>
    var opts = new Infin.EvolutionChartWidgetOptions();
    opts.company = "US0378331005";
    var ecWidget = infinancialsUI.EvolutionChartWidget("evolutionChart", opts);
</script>
...
<div id="evolutionChart"></div>
```
