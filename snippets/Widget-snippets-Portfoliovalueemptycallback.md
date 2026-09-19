---
title: "Portfoliovalueemptycallback"
kind: widget-snippet
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widget snippets > Portfoliovalueemptycallback"
description: "Test snippet for Portfoliovalueemptycallback"
tags: ["widget", "test", "widget:TradesWidget", "widget:tradesWidget"]
demonstrates: ["TradesWidget", "tradesWidget"]
example_config: {"title":"Portfoliovalueemptycallback","description":"Test snippet for Portfoliovalueemptycallback","modify_date":"2025-12-16","owner":"Infront","tags":["widget","test","widget:TradesWidget","widget:tradesWidget"],"flags":{"show_description":true,"show_creator":true,"show_date":true,"show_metadata":true},"scripts":["//code.highcharts.com/stock/highstock.src.js"]}
source_url: "https://docs.infrontfinance.com/tests/Portfoliovalueemptycallback"
source_files: ["script.ts", "template.html", "config.json"]
---

# Portfoliovalueemptycallback

Test snippet for Portfoliovalueemptycallback

Demonstrates: `TradesWidget`, `tradesWidget`

## Script (script.ts)

```typescript
// This to get login popup
var opts = new Infront.TradesWidgetOptions();
infront.tradesWidget('#trades', opts);

for (let item of portItems) {
    newPortfItem(item);
}
```

## Markup (template.html)

```html
<div id="singleValues"></div>
<div class="cell-content" id="trades" style="display: none"></div>
```

