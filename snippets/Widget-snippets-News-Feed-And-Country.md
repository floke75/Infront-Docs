---
title: "News Feed And Country"
kind: widget-snippet
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widget snippets > News Feed And Country"
description: "Test snippet for NewsFeedAndCountry"
tags: ["widget", "test", "widget:NewsListWidget", "widget:newsListWidget"]
demonstrates: ["NewsListWidget", "newsListWidget"]
example_config: {"title":"News Feed And Country","description":"Test snippet for NewsFeedAndCountry","modify_date":"2025-12-16","owner":"Infront","tags":["widget","test","widget:NewsListWidget","widget:newsListWidget"],"flags":{"show_description":true,"show_creator":true,"show_date":true,"show_metadata":true},"scripts":["//wtk.infrontservices.com/js/InfrontUI-2.1.90.min.js","//code.highcharts.com/stock/highstock.src.js"]}
source_url: "https://docs.infrontfinance.com/tests/NewsFeedAndCountry"
source_files: ["script.ts", "template.html", "style.css", "config.json"]
---

# News Feed And Country

Test snippet for NewsFeedAndCountry

Demonstrates: `NewsListWidget`, `newsListWidget`

## Script (script.ts)

```typescript
var opts1 = new Infront.NewsListWidgetOptions();
opts1.columns = ['TIME', 'HEADLINE', 'SHORT_SOURCE'];
opts1.id = 'newsWidget1';
opts1.widgetTitle = 'Norway news';
opts1.maxItems = 100;
opts1.columns = ['TIME', 'HEADLINE', 'SHORT_SOURCE'];
opts1.paging = true;
opts1.pageItems = 14; /* 
opts.instrument = new Infront.Instrument(14, "F"); */
opts1.preSelectedRegions = ['Norway'];
opts1.enableSourceSelector = false;
opts1.enableQuickFilter = true;
infront.newsListWidget('newsWidget1', opts1);

var opts = new Infront.NewsListWidgetOptions();
opts.columns = ['TIME', 'HEADLINE', 'SHORT_SOURCE'];
opts.id = 'newsWidget';
opts.feeds = [1518];
opts.streaming = false;
opts.paging = false;
opts.paging = true;
opts.pageItems = 14;

infront.newsListWidget('newsWidget', opts);
```

## Markup (template.html)

```html
<div class="cell-row">
    <div class="cell cell--w12">
        <div class="cell-content" id="newsWidget"></div>
    </div>
</div>
<div class="cell-row">
    <div class="cell cell--w12">
        <div class="cell-content" id="newsWidget1"></div>
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

