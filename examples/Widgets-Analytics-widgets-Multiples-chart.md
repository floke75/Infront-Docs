---
title: "Multiples chart"
kind: example
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widgets > Analytics widgets > Multiples chart"
description: "Displays a multiples chart widget using MultiplesChartWidgetOptions for a given company."
tags: ["multiples-chart-widget", "MultiplesChartWidgetOptions", "widgets", "examples", "wtk", "requests"]
example_config: {"title":"Multiples chart","description":"Displays a multiples chart widget using MultiplesChartWidgetOptions for a given company.","modify_date":"2021-05-26T11:09:42","owner":"","tags":["multiples-chart-widget","MultiplesChartWidgetOptions","widgets","examples","wtk","requests"]}
source_url: "https://docs.infrontfinance.com/examples/Widgets/Widgets/Analyticswidgets/Multipleschart"
source_files: ["script.ts", "template.html", "config.json"]
---

# Multiples chart

Displays a multiples chart widget using MultiplesChartWidgetOptions for a given company.

## Script (script.ts)

```typescript
<script type="text/javascript">
var opts = new Infinancials.MultiplesChartWidgetOptions();
opts.company = "90103EF";

var multiplesChartWidget = infinancialsUI.MultiplesChartWidget("multiplesChart", opts);
</script>
```

## Markup (template.html)

```html
<div id="multiplesChart"></div>
```

