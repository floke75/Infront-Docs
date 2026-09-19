---
title: "Intradaytrades"
kind: widget-snippet
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widget snippets > Intradaytrades"
description: "Test snippet for Intradaytrades"
tags: ["widget", "test", "widget:IntradayTradesWidget", "widget:intradayTradesWidget"]
demonstrates: ["IntradayTradesWidget", "intradayTradesWidget"]
example_config: {"title":"Intradaytrades","description":"Test snippet for Intradaytrades","modify_date":"2025-12-16","owner":"Infront","tags":["widget","test","widget:IntradayTradesWidget","widget:intradayTradesWidget"],"flags":{"show_description":true,"show_creator":true,"show_date":true,"show_metadata":true},"scripts":["//code.highcharts.com/stock/highstock.src.js"]}
source_url: "https://docs.infrontfinance.com/tests/Intradaytrades"
source_files: ["script.ts", "template.html", "config.json"]
---

# Intradaytrades

Test snippet for Intradaytrades

Demonstrates: `IntradayTradesWidget`, `intradayTradesWidget`

## Script (script.ts)

```typescript
var opts = new Infront.IntradayTradesWidgetOptions();
opts.instrument = new Infront.Instrument(18177, 'DNB');
opts.pageItems = 20;
opts.paging = true;
opts.columns = [
    {
        name: 'TIME',
        className: 'cell-text-left',
    },
    'VOLUME',
    {
        name: 'BUYER',
        className: 'cell-text-center',
    },
    {
        name: 'SELLER',
        className: 'cell-text-center',
    },
    'LAST',
    'MARKET',
];

infront.intradayTradesWidget('#intradaytrades', opts);
```

## Markup (template.html)

```html
<div class="cell-row">
    <div class="cell cell--w6">
        <div class="cell-content" id="intradaytrades"></div>
    </div>
</div>
```

