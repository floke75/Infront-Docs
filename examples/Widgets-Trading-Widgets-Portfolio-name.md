---
title: "Portfolio name"
kind: example
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widgets > Trading Widgets > Portfolio name"
description: "Displays a portfolio name widget using PortfolioNameWidgetOptions."
tags: ["portfolio-name-widget", "PortfolioNameWidgetOptions", "widgets", "examples", "wtk", "requests"]
example_config: {"title":"Portfolio name","description":"","modify_date":"2020-11-03T22:06:21","owner":"","tags":[]}
source_url: "https://docs.infrontfinance.com/examples/Widgets/Widgets/TradingWidgets/Portfolioname"
source_files: ["script.ts", "template.html", "config.json"]
---

# Portfolio name

Displays a portfolio name widget using PortfolioNameWidgetOptions.

## Script (script.ts)

```typescript
var opts = new Infront.PortfolioNameWidgetOptions();
infront.portfolioNameWidget("#portfolio-name", opts);
```

## Markup (template.html)

```html
<div id="portfolio-name"></div>
```

