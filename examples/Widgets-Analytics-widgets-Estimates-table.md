---
title: "Estimates table"
kind: example
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widgets > Analytics widgets > Estimates table"
description: "Displays an estimates table widget using EstimatesTableWidgetOptions for a given company."
tags: ["estimates-table-widget", "EstimatesTableWidgetOptions", "widgets", "examples", "wtk", "requests"]
example_config: {"title":"Estimates table","description":"Displays an estimates table widget using EstimatesTableWidgetOptions for a given company.","modify_date":"2021-05-26T11:15:40","owner":"","tags":["estimates-table-widget","EstimatesTableWidgetOptions","widgets","examples","wtk","requests"]}
source_url: "https://docs.infrontfinance.com/examples/Widgets/Widgets/Analyticswidgets/Estimatestable"
source_files: ["script.ts", "template.html", "config.json"]
---

# Estimates table

Displays an estimates table widget using EstimatesTableWidgetOptions for a given company.

## Script (script.ts)

```typescript
var opts = new Infinancials.EstimatesTableWidgetOptions();
opts.company = "US0378331005";
var estimatesTableWidget = infinancialsUI.EstimatesTableWidget("estimatesTable", opts);
```

## Markup (template.html)

```html
<div id="estimatesTable"></div>
```

