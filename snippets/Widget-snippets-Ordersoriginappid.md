---
title: "Ordersoriginappid"
kind: widget-snippet
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widget snippets > Ordersoriginappid"
description: "Test snippet for Ordersoriginappid"
tags: ["widget", "test", "widget:OrderEntryWidget", "widget:OrdersWidget", "widget:PortfolioSelectWidget", "widget:TradesWidget", "widget:orderEntryWidget", "widget:ordersWidget", "widget:portfolioSelectWidget", "widget:tradesWidget"]
demonstrates: ["OrderEntryWidget", "OrdersWidget", "PortfolioSelectWidget", "TradesWidget", "orderEntryWidget", "ordersWidget", "portfolioSelectWidget", "tradesWidget"]
example_config: {"title":"Ordersoriginappid","description":"Test snippet for Ordersoriginappid","modify_date":"2025-12-16","owner":"Infront","tags":["widget","test","widget:OrderEntryWidget","widget:OrdersWidget","widget:PortfolioSelectWidget","widget:TradesWidget","widget:orderEntryWidget","widget:ordersWidget","widget:portfolioSelectWidget","widget:tradesWidget"],"flags":{"show_description":true,"show_creator":true,"show_date":true,"show_metadata":true},"scripts":["http://localhost:8080/infrontui/js/InfrontUI-latest.c.js","https://wtk.infrontservices.com/languages/sv.js"],"styles":["../themes/light-latest/theme.css"]}
source_url: "https://docs.infrontfinance.com/tests/Ordersoriginappid"
source_files: ["script.ts", "template.html", "style.css", "config.json"]
---

# Ordersoriginappid

Test snippet for Ordersoriginappid

Demonstrates: `OrderEntryWidget`, `OrdersWidget`, `PortfolioSelectWidget`, `TradesWidget`, `orderEntryWidget`, `ordersWidget`, `portfolioSelectWidget`, `tradesWidget`

## Script (script.ts)

```typescript
var opts = new Infront.PortfolioSelectWidgetOptions();
opts.id = 'pww1';
infront.portfolioSelectWidget('#portfolio-selector', opts);

let orderEntry;

let modifyOrder = (portfolio, orderID) => {
    let modifyOpts = getOrderEntryOpts(portfolio, orderID);
    if (orderEntry) {
        orderEntry.modify(modifyOpts);
    } else {
        orderEntry = infront.orderEntryWidget('#order-entry', opts);
    }
};

var orderOpts = new Infront.OrdersWidgetOptions();
orderOpts.hideEmptyList = false;
orderOpts.sortable = true;
orderOpts.defaultSortedColumn = '_ORDER_STATUS';
orderOpts.modifyClick = modifyOrder;
// orderOpts.showStatuses = [Infront.OrderStatus.EXCHANGE_ORDER];

orderOpts.columns = [
    'ORDER_ID',
    'FULL_NAME',
    'TICKER',
    'ORDER_TYPE',
    'MODIFY_ORDER',
    'ORDER_ORIGIN',
    'ORDER_APP_NUMBER',
    'ORDER_APP_VERSION',
    'ORDER_APP_USER',
    'ORDER_APP_ID',
    'PRICE',
    'LAST',
    'VOLUME',
    'CREATED',
    'PRICE',
];

infront.ordersWidget('#orders', orderOpts);

var opts = new Infront.OrderEntryWidgetOptions();
opts.flexMode = true;
opts.daysBack = 30;
opts.advancedPaneMode = Infront.AdvancedPaneMode.static;
orderEntry = infront.orderEntryWidget('#order-entry', opts);

var opts = new Infront.PortfolioSelectWidgetOptions();
infront.portfolioSelectWidget('#portfolioselector', opts);

/* Shows you executed trades for this day.
 */
var opts = new Infront.TradesWidgetOptions();
opts.columns = [
    'TRADE_ID',
    'ORDER_ID',
    'FULL_NAME',
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
<div id="root">
    <div id="portfolioselector"></div>
    <div id="order-entry"></div>
</div>
<div class="cell-row">
    <div class="cell cell--w12">
        <div class="cell-content" id="orders"></div>
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

