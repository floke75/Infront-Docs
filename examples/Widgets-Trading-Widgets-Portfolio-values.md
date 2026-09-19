---
title: "Portfolio values"
kind: example
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widgets > Trading Widgets > Portfolio values"
description: "Displays a portfolio values widget using PortfolioValuesWidgetOptions."
tags: ["portfolio-values-widget", "PortfolioValuesWidgetOptions", "widgets", "examples", "wtk", "requests"]
example_config: {"title":"Portfolio values","description":"","modify_date":"2020-11-03T22:11:02","owner":"","tags":[]}
source_url: "https://docs.infrontfinance.com/examples/Widgets/Widgets/TradingWidgets/Portfoliovalues"
source_files: ["script.ts", "template.html", "config.json"]
---

# Portfolio values

Displays a portfolio values widget using PortfolioValuesWidgetOptions.

## Script (script.ts)

```typescript
var opts = new Infront.PortfolioValuesWidgetOptions();
infront.portfolioValuesWidget("#portfolio-values", opts);
```

## Markup (template.html)

```html
<div id="portfolio-values"></div>
```

