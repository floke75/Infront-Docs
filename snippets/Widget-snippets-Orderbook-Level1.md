---
title: "Orderbook Level1"
kind: widget-snippet
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widget snippets > Orderbook Level1"
description: "Test snippet for OrderbookLevel1"
tags: ["widget", "test", "widget:OrderbookWidget", "widget:orderbookWidget"]
demonstrates: ["OrderbookWidget", "orderbookWidget"]
example_config: {"title":"Orderbook Level1","description":"Test snippet for OrderbookLevel1","modify_date":"2025-12-16","owner":"Infront","tags":["widget","test","widget:OrderbookWidget","widget:orderbookWidget"],"flags":{"show_description":true,"show_creator":true,"show_date":true,"show_metadata":true},"scripts":["//code.highcharts.com/stock/highstock.src.js"]}
source_url: "https://docs.infrontfinance.com/tests/OrderbookLevel1"
source_files: ["script.ts", "template.html", "config.json"]
---

# Orderbook Level1

Test snippet for OrderbookLevel1

Demonstrates: `OrderbookWidget`, `orderbookWidget`

## Script (script.ts)

```typescript
var opts = new Infront.OrderbookWidgetOptions();
opts.instrument = { feed: 2008, ticker: 'UG' };
opts.levels = 1;
opts.layout = Infront.OrderbookRowLayout.COMPACT;

infront.orderbookWidget('#orderbook1', opts);
```

## Markup (template.html)

```html
<div class="cell-row">
    <div class="cell cell--w8">
        <div class="cell-content" id="orderbook1"></div>
    </div>
</div>
```

