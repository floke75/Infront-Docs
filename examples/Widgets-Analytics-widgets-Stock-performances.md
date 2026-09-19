---
title: "Stock performances"
kind: example
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widgets > Analytics widgets > Stock performances"
description: "Displays a stock performances widget using StockPerformancesWidgetOptions for a given company."
tags: ["stock-performances-widget", "StockPerformancesWidgetOptions", "widgets", "examples", "wtk", "requests"]
example_config: {"title":"Stock performances","description":"Displays a stock performances widget using StockPerformancesWidgetOptions for a given company.","modify_date":"2021-05-26T11:21:42","owner":"","tags":["stock-performances-widget","StockPerformancesWidgetOptions","widgets","examples","wtk","requests"]}
source_url: "https://docs.infrontfinance.com/examples/Widgets/Widgets/Analyticswidgets/Stockperformances"
source_files: ["script.ts", "template.html", "config.json"]
---

# Stock performances

Displays a stock performances widget using StockPerformancesWidgetOptions for a given company.

## Script (script.ts)

```typescript
var opts = new Infinancials.StockPerformancesWidgetOptions();
opts.company = "US0378331005" ;
var spWidget = infinancialsUI.StockPerformancesWidget("stockPerformances", opts);
```

## Markup (template.html)

```html
<div id="stockPerformances"></div>
```

