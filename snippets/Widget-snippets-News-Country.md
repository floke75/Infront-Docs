---
title: "News Country"
kind: widget-snippet
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widget snippets > News Country"
description: "Test snippet for NewsCountry"
tags: ["widget", "test", "widget:NewsListWidget", "widget:newsListWidget"]
demonstrates: ["NewsListWidget", "newsListWidget"]
example_config: {"title":"News Country","description":"Test snippet for NewsCountry","modify_date":"2025-12-16","owner":"Infront","tags":["widget","test","widget:NewsListWidget","widget:newsListWidget"],"flags":{"show_description":true,"show_creator":true,"show_date":true,"show_metadata":true},"scripts":["//code.highcharts.com/stock/highstock.src.js"]}
source_url: "https://docs.infrontfinance.com/tests/NewsCountry"
source_files: ["script.ts", "template.html", "style.css", "config.json"]
---

# News Country

Test snippet for NewsCountry

Demonstrates: `NewsListWidget`, `newsListWidget`

## Script (script.ts)

```typescript
var opts = new Infront.NewsListWidgetOptions();
opts.columns = ['TIME', 'HEADLINE', 'SHORT_SOURCE'];
//opts.preSelectedRegions = ["GERMANY"];
opts.feeds = [1380, 1340, 18200, 18193, 18192, 1189, 18181, 1160];
//opts.instrument = new Infront.Instrument(18177, "MOWI");
opts.enableRegionSelector = true;
opts.enableSourceSelector = true;
opts.streaming = true;
opts.paging = true;
opts.pageItems = 25;
opts.id = 'std';
opts.enableQuickFilter = true;
//opts.enableUserFilter = true;

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

## Styles (style.css)

```css
body {
    color: #ffffff;
}
iframe.cell-overlay-newsreader.cell-maxed {
    font-family: 'Segoe UI', 'Helvetica Neue', 'Open Sans', Arial, sans-serif;
    font-weight: 400;
    line-height: 1;
    background-color: #004f67;
    color: #ffffff;
}
```

