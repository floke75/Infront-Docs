---
title: "Portfolio Selector"
kind: widget-snippet
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widget snippets > Portfolio Selector"
description: "Test snippet for Portfolioselector"
tags: ["widget", "test", "widget:PortfolioSelectWidget", "widget:infrontRTD", "widget:portfolioSelectWidget"]
demonstrates: ["PortfolioSelectWidget", "infrontRTD", "portfolioSelectWidget"]
example_config: {"title":"Portfolio Selector","description":"Test snippet for Portfolioselector","modify_date":"2025-12-16","owner":"Infront","tags":["widget","test","widget:PortfolioSelectWidget","widget:infrontRTD","widget:portfolioSelectWidget"],"flags":{"show_description":true,"show_creator":true,"show_date":true,"show_metadata":true}}
source_url: "https://docs.infrontfinance.com/tests/Portfolioselector"
source_files: ["script.ts", "template.html", "config.json"]
---

# Portfolio Selector

Test snippet for Portfolioselector

Demonstrates: `PortfolioSelectWidget`, `infrontRTD`, `portfolioSelectWidget`

## Script (script.ts)

```typescript
//infront.infrontRTD("DEBUG_ALL_SYMBOL_DATA_TAGS,DEBUG_SYMBOL_DATA_TAGS,DEBUG_HIST_PERFORMANCE_TAGS,DEBUG_REQUESTS", false)
// Infront.DEBUG_THROTTLING_DATA_ITEMS = true;
// Infront.DEBUG_SYMBOL_DATA_CS = true

var opts = new Infront.PortfolioSelectWidgetOptions();
opts.id = '1';
opts.showFullName = true;
infront.portfolioSelectWidget('#portfolio-selector', opts);
```

## Markup (template.html)

```html
<div id="portfolio-selector"></div>
```

