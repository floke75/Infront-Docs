---
title: "Orderbook Mbl5"
kind: widget-snippet
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widget snippets > Orderbook Mbl5"
description: "Test snippet for OrderbookMbl5"
tags: ["widget", "test", "widget:OrderbookWidget", "widget:orderbookWidget"]
demonstrates: ["OrderbookWidget", "orderbookWidget"]
example_config: {"title":"Orderbook Mbl5","description":"Test snippet for OrderbookMbl5","modify_date":"2025-12-16","owner":"Infront","tags":["widget","test","widget:OrderbookWidget","widget:orderbookWidget"],"flags":{"show_description":true,"show_creator":true,"show_date":true,"show_metadata":true}}
source_url: "https://docs.infrontfinance.com/tests/OrderbookMbl5"
source_files: ["script.ts", "template.html", "config.json"]
---

# Orderbook Mbl5

Test snippet for OrderbookMbl5

Demonstrates: `OrderbookWidget`, `orderbookWidget`

## Script (script.ts)

```typescript
var opts = new Infront.OrderbookWidgetOptions();
opts.instrument = new Infront.Instrument(18051, 'OPTI');
//opts.instrument = new Infront.Instrument(18177, "ARCHER");

//opts.instrument = { "feed": 2008, "ticker": "UG" };
//opts.levels = 5;
opts.layout = Infront.OrderbookRowLayout.COMPACT;

infront.orderbookWidget('#orderbook1', opts);
```

## Markup (template.html)

```html
<div class="cell-row">
    <div class="cell cell--w6">
        <div class="cell-content" id="orderbook1"></div>
    </div>
</div>
```

