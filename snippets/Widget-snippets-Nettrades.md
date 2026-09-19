---
title: "Nettrades"
kind: widget-snippet
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widget snippets > Nettrades"
description: "Test snippet for Nettrades"
tags: ["widget", "test", "widget:NetTradesWidget", "widget:PortfolioSelectWidget", "widget:netTradesWidget", "widget:portfolioSelectWidget"]
demonstrates: ["NetTradesWidget", "PortfolioSelectWidget", "netTradesWidget", "portfolioSelectWidget"]
example_config: {"title":"Nettrades","description":"Test snippet for Nettrades","modify_date":"2025-12-16","owner":"Infront","tags":["widget","test","widget:NetTradesWidget","widget:PortfolioSelectWidget","widget:netTradesWidget","widget:portfolioSelectWidget"],"flags":{"show_description":true,"show_creator":true,"show_date":true,"show_metadata":true}}
source_url: "https://docs.infrontfinance.com/tests/Nettrades"
source_files: ["script.ts", "template.html", "style.css", "config.json"]
---

# Nettrades

Test snippet for Nettrades

Demonstrates: `NetTradesWidget`, `PortfolioSelectWidget`, `netTradesWidget`, `portfolioSelectWidget`

## Script (script.ts)

```typescript
let optsPort = new Infront.PortfolioSelectWidgetOptions();
optsPort.id = 'pww';
infront.portfolioSelectWidget('#portfolio-selector', optsPort);

let optsNet = new Infront.NetTradesWidgetOptions();
optsNet.showPortfolio = false;
optsNet.hideEmptyList = false;
var alert = infront.netTradesWidget('#net-trades', optsNet);
```

## Markup (template.html)

```html
<div class="portfolio-selector" id="portfolio-selector"></div>
<div class="cell-row">
    <div class="cell cell--w6">
        <div class="cell-content" id="net-trades"></div>
    </div>
</div>
```

## Styles (style.css)

```css
.portfolio-selector {
    float: right;
}
.cell-table .cell-table-cell__highlight--buy,
.cell-table-row__highlight--buy td {
    color: #3dcc63;
}
.cell-table .cell-table-cell__highlight--sell,
.cell-table-row__highlight--sell td {
    color: #ff5a5a;
}
```

