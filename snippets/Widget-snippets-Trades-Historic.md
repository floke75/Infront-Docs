---
title: "Trades Historic"
kind: widget-snippet
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widget snippets > Trades Historic"
description: "Test snippet for TradesHistoric"
tags: ["widget", "test", "widget:NetTradesWidget", "widget:PortfolioSelectWidget", "widget:TradesWidget", "widget:netTradesWidget", "widget:ordersWidget", "widget:portfolioSelectWidget", "widget:tradesWidget"]
demonstrates: ["NetTradesWidget", "PortfolioSelectWidget", "TradesWidget", "netTradesWidget", "ordersWidget", "portfolioSelectWidget", "tradesWidget"]
example_config: {"title":"Trades Historic","description":"Test snippet for TradesHistoric","modify_date":"2025-12-16","owner":"Infront","tags":["widget","test","widget:NetTradesWidget","widget:PortfolioSelectWidget","widget:TradesWidget","widget:netTradesWidget","widget:ordersWidget","widget:portfolioSelectWidget","widget:tradesWidget"],"flags":{"show_description":true,"show_creator":true,"show_date":true,"show_metadata":true}}
source_url: "https://docs.infrontfinance.com/tests/TradesHistoric"
source_files: ["script.ts", "template.html", "style.css", "config.json"]
---

# Trades Historic

Test snippet for TradesHistoric

Demonstrates: `NetTradesWidget`, `PortfolioSelectWidget`, `TradesWidget`, `netTradesWidget`, `ordersWidget`, `portfolioSelectWidget`, `tradesWidget`

## Script (script.ts)

```typescript
// Infront.getInfrontModel().setActivePortfolio('BRD.Test.ClientPC8_RON');

// TRADES WIDGET
const opts = new Infront.TradesWidgetOptions();
opts.columns = [
    'TRADE_ID',
    'ORDER_ID',
    'TICKER',
    'ISIN',
    'BUY_OR_SELL',
    'CURRENCY',
    'TRADE_TIME',
    'PRICE',
    'VOLUME',
    'MULTIPLIER',
    {
        name: 'VALUE',
        heading: 'Value',
        dataType: Infront.DataType.Integer,
        type: 'computed',
        computeFields: ['PRICE', 'VOLUME', 'MULTIPLIER'],
        compute: function (rowId, args) {
            return args[0] * args[1] * (args[2] || 1);
        },
    },
];
opts.layout = Infront.ListLayout.TABLE;
// opts.layout=Infront.ListLayout.CARD; // flex-layout
opts.hideEmptyList = false;
// opts.showPortfolioSelect = true;
// opts.showPortfolio = true;
// opts.showDeleteAll = false;
// opts.showTodaysTrades = true;
// opts.showHistoricTrades = true;
opts.showDateSelectors = true;
opts.showFilter = true;
const w = infront.tradesWidget('#trades', opts);
w.startDate = new Date(2025, 0, 8);
w.endDate = new Date(2025, 0, 8);
setTimeout(() => {
    w.retrieveClick();
}, 1000);
widgets.push(w);

// NET-TRADES WIDGET
const optsNet = new Infront.NetTradesWidgetOptions();
optsNet.showPortfolio = false;
optsNet.hideEmptyList = false;
widgets.push(infront.netTradesWidget('#net-trades', optsNet));

// PORTFOLIO-SELECTOR WIDGET
const optsPort = new Infront.PortfolioSelectWidgetOptions();
optsPort.id = 'pww';
widgets.push(infront.portfolioSelectWidget('#portfolio-selector', optsPort));

console.log('declaring order widget');
const optsOrder = {
    defaultSortedColumn: 'TICKER',
    columns: [
        'ORDER_ID',
        'BUY_OR_SELL',
        'ORDER_STATUS',
        'ORDER_TYPE',
        'PRICE',
        'S_MARKET_PRICE',
        'LAST',
        'CURRENCY',
        'CONTRACT_SIZE',
        'MULTIPLIER',
        'S_ORDER_VALUE',
    ],
};

console.log('order options', optsOrder);
widgets.push(infront.ordersWidget('#orders', optsOrder));
```

## Markup (template.html)

```html
<div class="portfolio-selector" id="portfolio-selector"></div>
<div class="cell-row">
    <div class="cell cell--w12">
        <div class="cell-content" id="trades"></div>
    </div>
</div>
<div class="cell-row">
    <div class="cell cell--w12">
        <div class="cell-content" id="net-trades"></div>
    </div>
</div>
<div class="cell-row">
    <div class="cell cell--w12">
        <div class="cell-content" id="orders"></div>
    </div>
</div>
```

## Styles (style.css)

```css
.portfolio-selector {
    float: right;
}

.cell-table .cell-table-cell__highlight--buy,
.cell-table-row__highlight--buy td {
    color: #3dcc63;
}

.cell-table .cell-table-cell__highlight--sell,
.cell-table-row__highlight--sell td {
    color: #ff5a5a;
}
```

