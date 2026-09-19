---
title: "Portfolio single value"
kind: example
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widgets > Trading Widgets > Portfolio single value"
description: "Displays a single portfolio value such as market value using PortfolioSingleValueWidgetOptions."
tags: ["portfolio-single-value-widget", "PortfolioSingleValueWidgetOptions", "widgets", "examples", "wtk", "requests"]
example_config: {"title":"Portfolio single value","description":"Displays a single portfolio value such as market value.","modify_date":"2020-11-03T22:11:23","owner":"","tags":["portfolio-single-value-widget"]}
source_url: "https://docs.infrontfinance.com/examples/Widgets/Widgets/TradingWidgets/Portfoliosinglevalue"
source_files: ["script.ts", "template.html", "config.json"]
---

# Portfolio single value

Displays a single portfolio value such as market value using PortfolioSingleValueWidgetOptions.

## Script (script.ts)

```typescript
var opts = new Infront.PortfolioSingleValueWidgetOptions();
opts.valueName = "MARKET VALUE";
infront.singlePortfolioValueWidget("#portfolio-singleValue", opts);
```

## Markup (template.html)

```html
<div id="portfolio-singleValue"></div>
```

