---
title: "News Symbol"
kind: widget-snippet
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widget snippets > News Symbol"
description: "Test snippet for NewsSymbol"
tags: ["widget", "test", "widget:NewsListWidget", "widget:newsListWidget"]
demonstrates: ["NewsListWidget", "newsListWidget"]
example_config: {"title":"News Symbol","description":"Test snippet for NewsSymbol","modify_date":"2025-12-16","owner":"Infront","tags":["widget","test","widget:NewsListWidget","widget:newsListWidget"],"flags":{"show_description":true,"show_creator":true,"show_date":true,"show_metadata":true},"scripts":["//code.highcharts.com/stock/highstock.src.js"]}
source_url: "https://docs.infrontfinance.com/tests/NewsSymbol"
source_files: ["script.ts", "template.html", "style.css", "config.json"]
---

# News Symbol

Test snippet for NewsSymbol

Demonstrates: `NewsListWidget`, `newsListWidget`

## Script (script.ts)

```typescript
var opts = new Infront.NewsListWidgetOptions();
//opts.instrument = new Infront.Instrument(18177, "NHY");
opts.instruments = [
    /*
    new Infront.Instrument(18177, "BALT-ME"),
             new Infront.Instrument(18177, "EQNR"),
             new Infront.Instrument(18177, "NHY"),
             new Infront.Instrument(18177, "AKER"),
             new Infront.Instrument(18177, "AKA"),
             new Infront.Instrument(18177, "YAR"),
             new Infront.Instrument(18177, "AKSO"),
             new Infront.Instrument(18177, "BAKKA"),
             new Infront.Instrument(18177, "DNO"),
             new Infront.Instrument(18177, "GJF"),
             new Infront.Instrument(18177, "SPOL"),
             new Infront.Instrument(18177, "KOG"),
             */
    new Infront.Instrument(18177, 'GOGL'),
];
opts.columns = ['TIME', 'HEADLINE', 'SHORT_SOURCE'];
opts.streaming = true;
opts.paging = true;
opts.pageItems = 12;
opts.showTickerInHeader = true;

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

