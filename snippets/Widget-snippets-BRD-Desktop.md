---
title: "BRD Desktop"
kind: widget-snippet
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widget snippets > BRD Desktop"
description: "Test snippet for BrdDesktop"
tags: ["widget", "test", "widget:FxFocusGridWidget", "widget:OrdersWidget", "widget:PortfolioSelectWidget", "widget:TradesWidget", "widget:fxFocusGridWidget", "widget:infrontRTD", "widget:ordersWidget", "widget:portfolioSelectWidget", "widget:tradesWidget"]
demonstrates: ["FxFocusGridWidget", "OrdersWidget", "PortfolioSelectWidget", "TradesWidget", "fxFocusGridWidget", "infrontRTD", "ordersWidget", "portfolioSelectWidget", "tradesWidget"]
example_config: {"title":"BRD Desktop","description":"Test snippet for BrdDesktop","modify_date":"2025-12-16","owner":"Infront","tags":["widget","test","widget:FxFocusGridWidget","widget:OrdersWidget","widget:PortfolioSelectWidget","widget:TradesWidget","widget:fxFocusGridWidget","widget:infrontRTD","widget:ordersWidget","widget:portfolioSelectWidget","widget:tradesWidget"],"flags":{"show_description":true,"show_creator":true,"show_date":true,"show_metadata":true},"scripts":["http://code.highcharts.com/stock/5.0.14/highstock.src.js"],"styles":["//fonts.googleapis.com/css?family=Roboto:light,regular,thin,italic,bold"]}
source_url: "https://docs.infrontfinance.com/tests/BrdDesktop"
source_files: ["script.ts", "template.html", "style.css", "config.json"]
---

# BRD Desktop

Test snippet for BrdDesktop

Demonstrates: `FxFocusGridWidget`, `OrdersWidget`, `PortfolioSelectWidget`, `TradesWidget`, `fxFocusGridWidget`, `infrontRTD`, `ordersWidget`, `portfolioSelectWidget`, `tradesWidget`

## Script (script.ts)

```typescript
var focusGridOptions = new Infront.FxFocusGridWidgetOptions();
var ordersOptions = new Infront.OrdersWidgetOptions();
var tradesOptions = new Infront.TradesWidgetOptions();
var portfolioSelectOptions = new Infront.PortfolioSelectWidgetOptions();
var chart1;
var chart2;

// Debugging.
infront.infrontRTD('DEBUG_LOGIN_DETAIL', false);

// Focus grid
focusGridOptions.id = 'brdFxFocusGrid';
focusGridOptions.spotFeed = 4250;
focusGridOptions.persistState = false;
focusGridOptions.spotInstruments = [
    new Infront.Instrument(4250, 'EURRON'),
    new Infront.Instrument(4250, 'USDRON'),
    new Infront.Instrument(4250, 'EURUSD'),
    new Infront.Instrument(4250, 'GBPUSD'),
];
focusGridOptions.chainTemplate.tenorKeys = [
    Infront.FxTenorKey.Overnight,
    Infront.FxTenorKey.Spot,
    Infront.FxTenorKey.MonthBase + 1,
    Infront.FxTenorKey.MonthBase + 3,
    Infront.FxTenorKey.YearBase + 1,
];
focusGridOptions.selectableTenorKeys = [
    Infront.FxTenorKey.Overnight,
    Infront.FxTenorKey.TomorrowNext,
    Infront.FxTenorKey.Spot,
    Infront.FxTenorKey.SpotWeek,
    Infront.FxTenorKey.MonthBase + 1,
    Infront.FxTenorKey.MonthBase + 3,
    Infront.FxTenorKey.MonthBase + 9,
    Infront.FxTenorKey.YearBase + 1,
    Infront.FxTenorKey.YearBase + 2,
];
focusGridOptions.mandatoryTenorKeys = [Infront.FxTenorKey.Spot];
focusGridOptions.chainNavigation = Infront.FxFocusGridHorizontalNavigation.Scroll;
focusGridOptions.chainTemplate.allowCurrencySwap = false;
focusGridOptions.chainTemplate.quotePairTemplate.leftQuoteTemplate.showForwardPointsCallback =
    determineForwardPointsShown;
focusGridOptions.chainTemplate.quotePairTemplate.rightQuoteTemplate.showForwardPointsCallback =
    determineForwardPointsShown;
focusGridOptions.chainTemplate.quotePairTemplate.leftQuoteTemplate.label = 'Sell';
focusGridOptions.chainTemplate.quotePairTemplate.rightQuoteTemplate.label = 'Buy';
focusGridOptions.chainTemplate.quotePairTemplate.leftQuoteTemplate.onClickedCallback = function (
    spotInstrument,
    tenorKey,
    quoteSide,
    clickEvent,
) {
    createOrderEntryWidget(spotInstrument, tenorKey, quoteSide, clickEvent);
};
focusGridOptions.chainTemplate.quotePairTemplate.rightQuoteTemplate.onClickedCallback = function (
    spotInstrument,
    tenorKey,
    quoteSide,
    clickEvent,
) {
    createOrderEntryWidget(spotInstrument, tenorKey, quoteSide, clickEvent);
};
focusGridOptions.chainTemplate.onChartClickedCallback = function (spotInstrument) {
    var msg = new InterLibraryLink.Message();

    // Using the link API seems to be the only reliable way to get the chart to do as it's told.
    msg.type = InterLibraryLink.DataType.infrontInstrument;
    msg.value = spotInstrument;
    chart1.receiveMessage(msg);
    chart2.receiveMessage(msg);
};
infront.fxFocusGridWidget('focusGridWidget', focusGridOptions);
chart1 = createChart('chartWidget1', new Infront.Instrument(4250, 'EURRON'), '30D');
chart2 = createChart('chartWidget2', new Infront.Instrument(4250, 'EURRON'), 'S');

// Orders.
ordersOptions.widgetTitle = null;
ordersOptions.columns = [
    'ORDER_ID',
    'PORTFOLIO',
    'EXEC_MARKET',
    'TICKER',
    'ORDER_STATUS',
    'BUY_OR_SELL',
    'PRICE',
    getBaseAmountField(),
    getOrderCounterAmountField(),
    'COMMENT',
];
ordersOptions.hideEmptyList = false;
infront.ordersWidget('ordersWidget', ordersOptions);

// Trades.
tradesOptions.widgetTitle = null;
tradesOptions.columns = [
    'TRADE_ID',
    'TRADE_TIME',
    'PORTFOLIO',
    'EXEC_MARKET',
    'TICKER',
    'BUY_OR_SELL',
    'PRICE',
    getBaseAmountField(),
    getTradeCounterAmountField(),
    'FX_MATURITY_DATE',
    'FX_NDF_FIXING',
    'COMMENT',
];
tradesOptions.hideEmptyList = false;
infront.tradesWidget('tradesWidget', tradesOptions);

portfolioSelectOptions.widgetTitle = 'PORTFOLIO';
portfolioSelectOptions.titleClick = function () {
    /* Has to be provided. */
};
infront.portfolioSelectWidget('portfolioSelect', portfolioSelectOptions);

// Setup the tables
document.getElementById(ORDERS_TAB_ID).addEventListener('click', function () {
    selectTab(ORDERS_TAB_ID);
});
document.getElementById(TRADES_TAB_ID).addEventListener('click', function () {
    selectTab(TRADES_TAB_ID);
});

// Update portfolio operations based on the selected portfolio.
listenForCurrentPortfolioChanges(function () {
    showPortfolioOperations();
});

// Trading control for testing.
initializeTradingControl();

// Start on the orders tab.
selectTab(ORDERS_TAB_ID);
```

## Markup (template.html)

```html
<div class="cell-row">
    <div class="cell" style="display: flex; justify-content: flex-end; width: 100%">
        <button
            id="tradingControl"
            style="display: none; background-color: #00a4d4; color: white"
        ></button>
    </div>
</div>
<div class="cell-row">
    <div class="cell" style="width: 100%">
        <div class="cell-content" id="focusGridWidget" style="height: 466px"></div>
    </div>
</div>
<div class="cell-row">
    <div class="cell cell--w6">
        <div class="cell-content cell-chart-wrapper" style="padding: 0">
            <div id="chartWidget1" style="height: 200px"></div>
        </div>
    </div>
    <div class="cell cell--w6">
        <div class="cell-content cell-chart-wrapper" style="padding: 0">
            <div id="chartWidget2" style="height: 200px"></div>
        </div>
    </div>
</div>
<div class="cell-row">
    <div style="border: 1px solid #002d40">
        <div class="tab-menu cell-noselect" id="tabMenu">
            <div class="tab-menu__item" id="ordersTab">
                <a class="tab-menu__item-link" tabindex="0">
                    <span class="tab-menu__item-label">Orders</span>
                </a>
            </div>
            <div class="tab-menu__item" id="tradesTab">
                <a class="tab-menu__item-link" tabindex="0">
                    <span class="tab-menu__item-label">Trades</span>
                </a>
            </div>
            <div id="portfolioSelect" style="position: relative; top: 10px; left: 10px"></div>
        </div>
        <div class="cell-clear" style="padding: 6px">
            <div
                class="cell-content invalid-portfolio-message"
                id="invalidPortfolio"
                style="display: none"
            >
                <span>NOT A FX PORTFOLIO</span>
            </div>
            <div
                class="cell-content"
                id="ordersWidget"
                style="display: none; min-height: 200px"
            ></div>
            <div
                class="cell-content"
                id="tradesWidget"
                style="display: none; min-height: 200px"
            ></div>
        </div>
    </div>
</div>
```

## Styles (style.css)

```css
body {
    font-family: Roboto !important;
    width: 1150px;
    height: 774px;
    user-select: none;
}

.order-entry__dialog-box {
    position: absolute;
    background-color: #001721;
    border: solid #0a5373 1px;
    width: 500px;
}

.order-entry__dialog-box-title-bar {
    background-color: #0a5373;
    cursor: move;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    height: 24px;
    position: relative;
}

.order-entry__dialog-box-title-caption {
    font-size: 14px;
    font-weight: bold;
    padding-left: 6px;
    align-self: center;
}

.order-entry__dialog-box-title-close-button {
    cursor: pointer;
    width: 24px;
    height: 24px;
    position: relative;
}

.order-entry__dialog-box-title-close-button:after {
    content: '';
    -webkit-mask: url(../../themes/terminal-latest/close.svg) no-repeat;
    mask: url(../../themes/terminal-latest/close.svg) no-repeat;
    background-color: white;
    position: absolute;
    right: 5px;
    top: 5px;
    height: 14px;
    width: 14px;
}

.order-entry__dialog-box-title-close-button:hover {
    background-color: #ff5a5a;
}

.order-entry__widget-container {
    width: 500px;
}

/* Tabs */
.tab-menu {
    list-style-type: none;
    width: 100%;
    margin: 0;
    padding: 0;
    float: left;
    border-bottom: 0;
}

.tab-menu__item {
    position: relative;
    margin: 0;
    padding: 0;
    float: left;
    border-width: 0 1px 0 0;
    border-style: solid;
    text-transform: none;
    cursor: pointer;
}

.tab-menu__item-link {
    display: block;
    text-transform: uppercase;
    font-size: 14px;
    text-decoration: none;
}

.tab-menu__item-label {
    display: block;
    padding: 10px 12px 8px;
    margin-right: 0;
    white-space: nowrap;
    overflow: hidden;
}

.tab-menu__item--selected {
    cursor: default;
    z-index: 1;
}

.tab-menu__item:not(.tab-menu__item--selected):hover {
    z-index: 0;
}

/* DARK THEME */
.tab-menu {
    border-bottom: 1px solid #002d40;
}
.tab-menu__item {
    border-color: #002d40;
    background-color: #00131c;
    color: rgba(255, 255, 255, 0.6);
}
.tab-menu__item--selected {
    color: #fff;
    background-color: #00374f;
    border-color: #00374f;
}
.tab-menu__item-label {
    color: #fff;
}
.tab-menu__item:not(.tab-menu__item--selected):hover {
    background-color: #001e2b;
}

/* TODO: White Theme */
.invalid-portfolio-message {
    align-items: center;
    display: flex;
    height: 200px;
    justify-content: center;
    border: 2px dashed #07394d;
}

/* IE11 Fix - TODO: White Theme */
_:-ms-lang(x) .order-entry__dialog-box-title-close-button:after,
:root .order-entry__dialog-box-title-close-button:after {
    background: transparent
        url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cpath fill='%23FFFFFF' d='M19.9 17.071L12.827 10 19.9 2.929 17.071.1 10 7.17 2.929.102.1 2.929 7.17 10l-7.07 7.071L2.929 19.9 10 12.83l7.071 7.07z' fill-rule='nonzero'/%3E%3C/svg%3E")
        50% 50% no-repeat;
    background-size: 14px;
}

/* Override portfolio selector - Not a good idea for the real thing. */
.cell-mininav__dd {
    top: 5px;
}

.cell-portfolio-select__title--interaction {
    cursor: default;
}

.cell-portfolio-select__title--interaction:hover {
    text-decoration: none;
}
```

