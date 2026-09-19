---
title: "Valuation"
kind: example
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widgets > Analytics widgets > Valuation"
description: "Displays a valuation widget using ValuationWidgetOptions for a given company."
tags: ["valuation-widget", "ValuationWidgetOptions", "widgets", "examples", "wtk", "requests"]
example_config: {"title":"Valuation","description":"Displays a valuation widget using ValuationWidgetOptions for a given company.","modify_date":"2021-05-26T11:26:27","owner":"","tags":["valuation-widget","ValuationWidgetOptions","widgets","examples","wtk","requests"]}
source_url: "https://docs.infrontfinance.com/examples/Widgets/Widgets/Analyticswidgets/Valuation"
source_files: ["script.ts", "template.html", "config.json"]
---

# Valuation

Displays a valuation widget using ValuationWidgetOptions for a given company.

## Script (script.ts)

```typescript
var opts = new Infinancials.ValuationWidgetOptions();
opts.company = "US0378331005";
var valWidget = infinancialsUI.ValuationWidget("valuation", opts);
```

## Markup (template.html)

```html
<div id="valuation"></div>
```

