---
title: "Portfolio ranking"
kind: example
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widgets > Trading Widgets > Portfolio ranking"
description: "Displays a portfolio ranking widget using PortfolioRankingWidget."
tags: ["portfolio-ranking-widget", "PortfolioRankingWidget", "widgets", "examples", "wtk", "requests"]
example_config: {"title":"Portfolio ranking","description":"","modify_date":"2020-11-03T22:04:46","owner":"","tags":[]}
source_url: "https://docs.infrontfinance.com/examples/Widgets/Widgets/TradingWidgets/Portfolioranking"
source_files: ["script.ts", "template.html", "config.json"]
---

# Portfolio ranking

Displays a portfolio ranking widget using PortfolioRankingWidget.

## Script (script.ts)

```typescript
var opts = new Infront.PortfolioRankingWidget();
opts.maxItems = 5;
infront.portfolioRankingWidget("#portfolio-ranking", opts)
```

## Markup (template.html)

```html
<div id="portfolio-ranking"></div>
```

