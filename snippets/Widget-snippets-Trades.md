---
title: "Trades"
kind: widget-snippet
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widget snippets > Trades"
description: "Test snippet for Trades"
tags: ["widget", "test", "widget:TradesWidget", "widget:tradesWidget"]
demonstrates: ["TradesWidget", "tradesWidget"]
example_config: {"title":"Trades","description":"Test snippet for Trades","modify_date":"2025-12-16","owner":"Infront","tags":["widget","test","widget:TradesWidget","widget:tradesWidget"],"flags":{"show_description":true,"show_creator":true,"show_date":true,"show_metadata":true},"scripts":["//code.highcharts.com/stock/highstock.src.js"]}
source_url: "https://docs.infrontfinance.com/tests/Trades"
source_files: ["script.ts", "template.html", "config.json"]
---

# Trades

Test snippet for Trades

Demonstrates: `TradesWidget`, `tradesWidget`

## Script (script.ts)

```typescript
var opts = new Infront.TradesWidgetOptions();
opts.columns = [
    'TRADE_ID',
    'ORDER_ID',
    'TICKER',
    'BUY_OR_SELL',
    'PRICE',
    'VOLUME',
    {
        name: 'VALUE',
        heading: 'Value',
        dataType: Infront.DataType.Integer,
        type: 'computed',
        computeFields: ['PRICE', 'VOLUME'],
        compute: function (rowId, args) {
            return args[0] * args[1];
        },
    },
];
infront.tradesWidget('#trades', opts);
```

## Markup (template.html)

```html
<div class="cell-row">
    <div class="cell cell--w12">
        <div class="cell-content" id="trades"></div>
    </div>
</div>
```

