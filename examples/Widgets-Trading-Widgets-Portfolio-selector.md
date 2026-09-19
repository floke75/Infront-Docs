---
title: "Portfolio selector"
kind: example
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widgets > Trading Widgets > Portfolio selector"
description: "Displays a portfolio selector widget using PortfolioSelectWidgetOptions."
tags: ["portfolio-selector-widget", "PortfolioSelectWidgetOptions", "widgets", "examples", "wtk", "requests"]
example_config: {"title":"Portfolio selector","description":"","modify_date":"2020-11-03T22:11:14","owner":"","tags":[]}
source_url: "https://docs.infrontfinance.com/examples/Widgets/Widgets/TradingWidgets/Portfolioselector"
source_files: ["script.ts", "template.html", "config.json"]
---

# Portfolio selector

Displays a portfolio selector widget using PortfolioSelectWidgetOptions.

## Script (script.ts)

```typescript
var opts = new Infront.PortfolioSelectWidgetOptions();
infront.portfolioSelectWidget("#portfolio-selector", opts);
```

## Markup (template.html)

```html
<div id="portfolio-selector"></div>
```

