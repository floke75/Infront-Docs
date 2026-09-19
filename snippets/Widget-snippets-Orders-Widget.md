---
title: "Orders Widget"
kind: widget-snippet
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widget snippets > Orders Widget"
description: "Test snippet for Orderswidget"
tags: ["widget", "test", "widget:OrderStackWidget", "widget:OrdersWidget", "widget:PortfolioSelectWidget", "widget:TradesWidget", "widget:orderStackWidget", "widget:ordersWidget", "widget:portfolioSelectWidget", "widget:tradesWidget"]
demonstrates: ["OrderStackWidget", "OrdersWidget", "PortfolioSelectWidget", "TradesWidget", "orderStackWidget", "ordersWidget", "portfolioSelectWidget", "tradesWidget"]
example_config: {"title":"Orders Widget","description":"Test snippet for Orderswidget","modify_date":"2025-12-16","owner":"Infront","tags":["widget","test","widget:OrderStackWidget","widget:OrdersWidget","widget:PortfolioSelectWidget","widget:TradesWidget","widget:orderStackWidget","widget:ordersWidget","widget:portfolioSelectWidget","widget:tradesWidget"],"flags":{"show_description":true,"show_creator":true,"show_date":true,"show_metadata":true},"styles":["../themes/light-latest/theme.css"]}
source_url: "https://docs.infrontfinance.com/tests/Orderswidget"
source_files: ["script.ts", "template.html", "style.css", "config.json"]
---

# Orders Widget

Test snippet for Orderswidget

Demonstrates: `OrderStackWidget`, `OrdersWidget`, `PortfolioSelectWidget`, `TradesWidget`, `orderStackWidget`, `ordersWidget`, `portfolioSelectWidget`, `tradesWidget`

## Script (script.ts)

```typescript
var opts = new Infront.PortfolioSelectWidgetOptions();
opts.id = 'pww1';
infront.portfolioSelectWidget('#portfolio-selector', opts);

var tickerField = {
    name: '_ticker',
    heading: 'Ticker',
    type: 'computed',
    computeFields: ['TICKER', 'BUY_OR_SELL'],
    dataType: Infront.DataType.Text,
    compute: function (rowId, args) {
        let className = args[1] == 1 ? 'cell-status-positive' : 'cell-status-negative';
        let buySell = args[1] == 1 ? 'BUY' : 'SELL';
        return new Infront.HTMLString(`<span class="${className}">${buySell}</span> ${args[0]}`);
    },
};
var typeField = {
    name: '_ORDER_STATUS',
    heading: 'Status',
    type: 'computed',
    computeFields: ['ORDER_STATUS', 'ORDER_TYPE', 'ALGO_ID', 'CREATED'],
    dataType: Infront.DataType.Text,
    compute: function (rowId, args) {
        let sortOrder;
        let status = args[0];
        let orderType = args[1];
        let algoId = args[2];
        let orderTime = InfrontUtil.formatDateTime(args[3], 'yyyyMMddHHmmss');
        if (orderType == Infront.OrderTypes.Strategy) {
            switch (algoId) {
                case 'InfrontCondor_TrailTick':
                    sortOrder = 'cc';
                    status = 'Trailing Stop (Ticks)';
                    break;
                case 'InfrontCondor_TrailPct':
                    sortOrder = 'ca';
                    status = 'Trailing Stop (%)';
                    break;
                case 'InfrontCondor_StopLmt':
                    sortOrder = 'cb';
                    status = 'Stop Loss';
                    break;
            }
        }
        switch (status) {
            case 'EXCHANGE_ORDER':
                sortOrder = 'a';
                status = 'Active';
                break;
            case 'MONITOR_ORDER':
                sortOrder = 'b';
                status = 'Monitor';
                break;
            case 'INACTIVE_ORDER':
                sortOrder = 'c';
                status = 'Inactive';
                break;
            case 'EXECUTED_ORDER':
                sortOrder = 'd';
                status = 'Executed';
                break;
            case 'DELETED_ORDER':
                sortOrder = 'z';
                status = 'Deleted';
                break;
        }
        return new Infront.HTMLString(`<span hidden>${sortOrder + orderTime}</span>${status}`);
    },
};

var orderOpts = new Infront.OrdersWidgetOptions();
orderOpts.hideEmptyList = false;
orderOpts.sortable = true;
orderOpts.defaultSortedColumn = '_ORDER_STATUS';
// orderOpts.showStatuses = [Infront.OrderStatus.EXCHANGE_ORDER];
orderOpts.layout = Infront.ListLayout.CARD;
orderOpts.displayRowColumns = [
    tickerField,
    'ORDER_ID',
    'ORDER_TYPE',
    'VOLUME',
    'VOLUME_FILLED',
    'CREATED',
    typeField,
];
orderOpts.columns = [
    'ORDER_ID',
    tickerField,
    typeField,
    'ORDER_TYPE',
    'PRICE',
    'LAST',
    {
        name: 'DIFF',
        heading: 'Diff',
        type: 'computed',
        computeFields: ['PRICE', 'LAST'],
        compute: function (rowId, args) {
            return args[0] - args[1];
        },
    },
    'VOLUME',
    'VOLUME_FILLED',
    'CREATED',
    {
        heading: 'Fill%',
        name: 'PCT_FILL',
        type: 'computed',
        computeFields: ['VOLUME', 'VOLUME_FILLED'],
        dataType: Infront.DataType.Integer,
        compute: function (rowId, args) {
            return (args[1] / args[0]) * 100;
        },
        translate: function (rowId, val) {
            var retVal =
                '<div class="cell-w-orders__order-fill-bar" style="background-color:#ddd;"><div class="cell-w-orders__order-fill-bar__filled" style="width:' +
                val +
                '%;"></div></div>';
            return new Infront.HTMLString(retVal);
        },
    },
];
infront.ordersWidget('#orders', orderOpts);

// var opts = new Infront.OrderStackWidgetOptions();
// infront.orderStackWidget("#order-stack", opts);

var tradesOpts = new Infront.TradesWidgetOptions();
tradesOpts.hideEmptyList = false;
tradesOpts.layout = Infront.ListLayout.CARD;
tradesOpts.displayRowColumns = [tickerField, 'TRADE_TIME', 'VOLUME', 'PRICE', 'TRADE_ID'];
tradesOpts.columns = [
    tickerField,
    'TRADE_TIME',
    'VOLUME',
    'PRICE',
    'TRADE_ID',
    {
        name: '_BASE_AMOUNT',
        heading: 'Base amount',
        type: 'custom',
        content: () => '#',
    },
    {
        name: '_COUNTER_AMOUNT',
        heading: 'Counter amount',
        type: 'custom',
        content: () => '#',
    },
    'PORTFOLIO',
    'EXEC_MARKET',
    {
        name: '_MATURITY',
        heading: 'Maturity',
        type: 'custom',
        content: () => '#',
    },
];
infront.tradesWidget('#trades', tradesOpts);
```

## Markup (template.html)

```html
<div id="root">
    <div class="cell-row">
        <div class="cell cell--w12"></div>
        <div class="portfolio-selector" id="portfolio-selector"></div>
    </div>
</div>
<div class="cell-row">
    <div class="cell cell--w6">
        <div class="cell-content" id="orders"></div>
    </div>
    <!-- <div class="cell cell--w6">
                <div class="cell-content" id="order-stack"></div>
            </div> -->
    <div class="cell cell--w6">
        <div class="cell-content" id="trades"></div>
    </div>
</div>
```

## Styles (style.css)

```css
.portfolio-selector {
    float: right;
    width: auto;
}
```

