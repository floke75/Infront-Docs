---
title: "News User"
kind: widget-snippet
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widget snippets > News User"
description: "Test snippet for NewsUser"
tags: ["widget", "test", "widget:NewsListWidget", "widget:newsListWidget"]
demonstrates: ["NewsListWidget", "newsListWidget"]
example_config: {"title":"News User","description":"Test snippet for NewsUser","modify_date":"2025-12-16","owner":"Infront","tags":["widget","test","widget:NewsListWidget","widget:newsListWidget"],"flags":{"show_description":true,"show_creator":true,"show_date":true,"show_metadata":true},"scripts":["//code.highcharts.com/stock/highstock.src.js"]}
source_url: "https://docs.infrontfinance.com/tests/NewsUser"
source_files: ["script.ts", "template.html", "config.json"]
---

# News User

Test snippet for NewsUser

Demonstrates: `NewsListWidget`, `newsListWidget`

## Script (script.ts)

```typescript
var opts = new Infront.NewsListWidgetOptions();
opts.columns = ['TIME', 'HEADLINE', 'SHORT_SOURCE'];
opts.preSelectedRegions = ['NORWAY'];
opts.enableRegionSelector = true;
opts.enableSourceSelector = true;
opts.enableQuickFilter = true;
opts.enableUserFilter = true;
opts.streaming = true;
opts.paging = true;
opts.pageItems = 12;
infront.newsListWidget('newsWidget', opts);
```

## Markup (template.html)

```html
<div class="cell-row">
    <div class="cell cell--w12">
        <div class="cell-content" id="newsWidget"></div>
    </div>
</div>
```

