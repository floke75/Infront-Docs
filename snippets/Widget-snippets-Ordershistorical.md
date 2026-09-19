---
title: "Ordershistorical"
kind: widget-snippet
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widget snippets > Ordershistorical"
description: "Test snippet for Ordershistorical"
tags: ["widget", "test", "widget:PortfolioSelectWidget", "widget:PositionsWidget", "widget:TradesWidget", "widget:ordersWidget", "widget:portfolioSelectWidget", "widget:positionsWidget", "widget:tradesWidget"]
demonstrates: ["PortfolioSelectWidget", "PositionsWidget", "TradesWidget", "ordersWidget", "portfolioSelectWidget", "positionsWidget", "tradesWidget"]
example_config: {"title":"Ordershistorical","description":"Test snippet for Ordershistorical","modify_date":"2025-12-16","owner":"Infront","tags":["widget","test","widget:PortfolioSelectWidget","widget:PositionsWidget","widget:TradesWidget","widget:ordersWidget","widget:portfolioSelectWidget","widget:positionsWidget","widget:tradesWidget"],"flags":{"show_description":true,"show_creator":true,"show_date":true,"show_metadata":true},"styles":["../themes/light-latest/theme.css"]}
source_url: "https://docs.infrontfinance.com/tests/Ordershistorical"
source_files: ["script.ts", "template.html", "style.css", "config.json"]
---

# Ordershistorical

Test snippet for Ordershistorical

Demonstrates: `PortfolioSelectWidget`, `PositionsWidget`, `TradesWidget`, `ordersWidget`, `portfolioSelectWidget`, `positionsWidget`, `tradesWidget`

## Script (script.ts)

```typescript
var opts = new Infront.PortfolioSelectWidgetOptions();
opts.id = 'pww1';
infront.portfolioSelectWidget('#portfolio-selector', opts);

/* Shows current positions with a few computed columns (MKT_VAL and RESULT).
 */
var opts = new Infront.PositionsWidgetOptions();
opts.columns = [
    'TICKER',
    'FULL_NAME',
    'LAST',
    {
        name: 'MKT_VAL',
        heading: 'Value',
        type: 'computed',
        dataType: Infront.DataType.Integer,
        computeFields: ['VOLUME', 'LAST'],
        compute: function (rowId, args) {
            return args[0] * args[1];
        },
    },
    {
        name: 'RESULT',
        allowZero: true,
    },
];
infront.positionsWidget('#positions', opts);

/* Shows you executed trades for this day.
 */
var opts = new Infront.TradesWidgetOptions();
opts.columns = [
    'TRADE_ID',
    'ORDER_ID',
    'TICKER',
    'FULL_NAME',
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

// infront.ordersWidget("#orders1", ordersOptions(true, false));
// infront.ordersWidget("#orders2", ordersOptions(false, true));
infront.ordersWidget('#orders3', ordersOptions(true, true));
// infront.ordersWidget("#orders4", ordersOptions(undefined, undefined));
```

## Markup (template.html)

```html
<div id="root">
    <div class="cell-row">
        <div class="cell cell--w12"></div>
        <div class="portfolio-selector" id="portfolio-selector"></div>
    </div>
</div>
<div id="trades"></div>
<div class="cell-row">
    <button onclick="loadInstr()">test</button>
    <div class="cell-content" id="testFullName"></div>
    <div class="cell cell--w12">
        <div class="cell-content" id="positions"></div>
    </div>
</div>
<div class="cell-row">
    <div class="cell cell--w6">
        <div class="cell-content" id="orders1"></div>
    </div>
    <div class="cell cell--w6">
        <div class="cell-content" id="orders2"></div>
    </div>
</div>
<div class="cell-row">
    <div class="cell cell--w12">
        <div class="cell-content" id="orders3"></div>
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

