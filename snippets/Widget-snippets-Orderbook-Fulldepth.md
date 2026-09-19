---
title: "Orderbook Fulldepth"
kind: widget-snippet
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widget snippets > Orderbook Fulldepth"
description: "Test snippet for OrderbookFulldepth"
tags: ["widget", "test", "widget:ConsolidatedOrderbookWidget", "widget:OrderbookWidget", "widget:consolidatedOrderbookWidget", "widget:orderbookWidget"]
demonstrates: ["ConsolidatedOrderbookWidget", "OrderbookWidget", "consolidatedOrderbookWidget", "orderbookWidget"]
example_config: {"title":"Orderbook Fulldepth","description":"Test snippet for OrderbookFulldepth","modify_date":"2025-12-16","owner":"Infront","tags":["widget","test","widget:ConsolidatedOrderbookWidget","widget:OrderbookWidget","widget:consolidatedOrderbookWidget","widget:orderbookWidget"],"flags":{"show_description":true,"show_creator":true,"show_date":true,"show_metadata":true},"styles":["../themes/light-latest/theme.css"]}
source_url: "https://docs.infrontfinance.com/tests/OrderbookFulldepth"
source_files: ["script.ts", "template.html", "config.json"]
---

# Orderbook Fulldepth

Test snippet for OrderbookFulldepth

Demonstrates: `ConsolidatedOrderbookWidget`, `OrderbookWidget`, `consolidatedOrderbookWidget`, `orderbookWidget`

## Script (script.ts)

```typescript
const opts1 = new Infront.OrderbookWidgetOptions();
// opts.instrument = { "feed": 2008, "ticker": "UG" };
// opts.instrument = { "feed": 15, "ticker": "AAPL" };
opts1.instrument = { feed: 18177, ticker: 'DNB' };
opts1.levels = 5;
// opts1.layout = Infront.OrderbookRowLayout.WIDE;
opts1.layout = Infront.OrderbookRowLayout.COMPACT;
opts1.titleSettings = {
    showTicker: true,
    showPctChange: true,
    showAbsoluteChange: true,
};
opts1.showFooter = true;

infront.orderbookWidget('#orderbook1', opts1);

const opts2 = new Infront.ConsolidatedOrderbookWidgetOptions();
// opts.instrument = { "feed": 2008, "ticker": "UG" };
// opts.instrument = { "feed": 15, "ticker": "AAPL" };
opts2.instrument = { feed: 18177, ticker: 'DNB' };
opts2.levels = 5;
// opts2.layout = Infront.OrderbookRowLayout.WIDE;
opts2.layout = Infront.OrderbookRowLayout.COMPACT;
opts2.titleSettings = {
    showTicker: true,
    showPctChange: true,
    showAbsoluteChange: true,
};
opts2.showFooter = true;
opts2.widgetTitle = 'Orderbook';
// Consolidated OB special options
opts2.showMarket = true;
opts2.showFeed = true;
// opts2.detailView = Infront.ConsolidatedOrderbookDetailView.POPUP; //EXPANDABLE;
opts2.enableConsolidation = true;

infront.consolidatedOrderbookWidget('#orderbook2', opts2);
```

## Markup (template.html)

```html
<div class="cell-row">
    <div class="cell cell--w6">
        <div class="cell-content" id="orderbook1"></div>
    </div>
    <div class="cell cell--w6">
        <div class="cell-content" id="orderbook2"></div>
    </div>
</div>
```

