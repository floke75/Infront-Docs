---
title: "Dynamic Columns"
kind: widget-snippet
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widget snippets > Dynamic Columns"
description: "Test snippet for DynamicColumns"
tags: ["widget", "test", "widget:FocusWidget", "widget:IntradayTradesWidget", "widget:MyListsWidget", "widget:QuoteListWidget", "widget:RankingWidget", "widget:focusWidget", "widget:intradayTradesWidget", "widget:myListsWidget", "widget:quoteList", "widget:rankingWidget"]
demonstrates: ["FocusWidget", "IntradayTradesWidget", "MyListsWidget", "QuoteListWidget", "RankingWidget", "focusWidget", "intradayTradesWidget", "myListsWidget", "quoteList", "rankingWidget"]
example_config: {"title":"Dynamic Columns","description":"Test snippet for DynamicColumns","modify_date":"2025-12-16","owner":"Infront","tags":["widget","test","widget:FocusWidget","widget:IntradayTradesWidget","widget:MyListsWidget","widget:QuoteListWidget","widget:RankingWidget","widget:focusWidget","widget:intradayTradesWidget","widget:myListsWidget","widget:quoteList","widget:rankingWidget"],"flags":{"show_description":true,"show_creator":true,"show_date":true,"show_metadata":true}}
source_url: "https://docs.infrontfinance.com/tests/DynamicColumns"
source_files: ["script.ts", "template.html", "style.css", "config.json"]
---

# Dynamic Columns

Test snippet for DynamicColumns

Demonstrates: `FocusWidget`, `IntradayTradesWidget`, `MyListsWidget`, `QuoteListWidget`, `RankingWidget`, `focusWidget`, `intradayTradesWidget`, `myListsWidget`, `quoteList`, `rankingWidget`

## Script (script.ts)

```typescript
//var opts = new Infront.MyListsWidgetOptions();
//opts.sortable = true;
//opts.defaultSortedColumn = 2;
//opts.defaultSortOrder = Infront.SortOrder.Desc;
//opts.columns = ["TICKER", "LAST", "PCT_CHANGE", "YTD_CHANGE"];
//opts.linkChannels = [200];
////opts.layout = Infront.ListLayout.DIV;
//opts.expandableRows = false;
//widget = infront.myListsWidget("#my-lists", opts);

var opts = new Infront.QuoteListWidgetOptions();
opts.widgetTitle = 'Quote List Widget';
opts.sortable = true;
opts.defaultSortedColumn = 0;
opts.id = 'test0';
opts.enableColumnsMove = true;
//opts.layout = Infront.ListLayout.DIV;
opts.instruments = [
    new Infront.Instrument(18177, 'DNB'),
    new Infront.Instrument(18177, 'DNO'),
    new Infront.Instrument(2008, 'UG'),
    new Infront.Instrument(20, 'DJI'),
    new Infront.Instrument(2087, 'COMP'),
    new Infront.Instrument(2088, 'SP500'),
    new Infront.Instrument(2018, 'UKX'),
    new Infront.Instrument(6880, '990100P'),
    new Infront.Instrument(20, 'DJI'),
];
//opts.columns = ["TICKER", //"ASK",
//    {
//        "name": "LAST",
//        "footer": "sum",
//        "hover": "FULL_NAME"
//    },
//    "BID"
//];
opts.tabs = [
    {
        id: 'testA',
        label: 'Test A',
        columns: [
            {
                name: 'last', //"s_market_price",
                footer: 'sum',
                hover: 'FULL_NAME',
            },
            'BID',
            'ASK',
        ],
    },
    {
        id: 'testB',
        label: 'Test B',
        columns: ['TICKER', 'FULL_NAME'],
    },
];

opts.availableColumns = ['LAST', 'BID', 'ASK', 'FULL_NAME', 'TICKER', 'CURRENCY', 'MARKET_PRICE'];
//opts.extraColumns = ["FULL_NAME", "ACC_VOLUME"];
//opts.columns = [
//    "FULL_NAME",
//    "s_market_price",
//    {
//        "name": "LAST",
//        "footer": "sum",
//        "hover": "FULL_NAME"
//    },
//    //"PCT_CHANGE",
//    //"YTD_CHANGE"
//];
widget = infront.quoteList('#my-lists', opts);

//var optsflex = new Infront.QuoteListWidgetOptions();
//optsflex.columns = ["FULL_NAME", "LAST", "PCT_CHANGE", "YTD_CHANGE"];
//optsflex.feed = 2257;
//optsflex.issuer = "NYKRED - Nykredit Realkredit A/S";
//optsflex.layout = Infront.ListLayout.DIV;
//optsflex.expandableRows = true;
//optsflex.id = "test1";
//optsflex.createExpandRow = function (instrument, element) {
//    var container = document.createElement("div");
//    container.setAttribute("style", "width:100%;height:200px");
//    element.appendChild(container);
//    var opts = new Infront.FocusWidgetOptions();
//    opts.instrument = instrument;
//    var focus = infront.focusWidget(container, opts);
//    return function () {
//        try {
//            focus.destroy();
//        }
//        catch (error) {
//            console.log(error);
//        }
//        container.parentElement.removeChild(container);
//    };
//}
//widget = infront.quoteList("my-lists", optsflex);

//var opts = new Infront.IntradayTradesWidgetOptions();
//opts.instrument = new Infront.Instrument(18177, "DNO");
//opts.pageItems = 10;
//opts.paging = false;
//opts.columns = [
//    {
//        name: "TIME",
//        className: "cell-text-left"
//    },
//    "VOLUME",
//    {
//        name: "BUYER",
//        className: "cell-text-center"
//    },
//    {
//        name: "SELLER",
//        className: "cell-text-center"
//    },
//    //"LAST",
//];
//widget1 = infront.intradayTradesWidget("#intradayTrades", opts);

//var opts = new Infront.RankingWidgetOptions();
//opts.widgetTitle = "Ranking Widget";
//opts.feed = 17665;
//opts.sortOrder = Infront.SortOrder.Asc;
//opts.rows = 10;
//opts.enablePeriodSelector = false;
//opts.instrumentTypes = ["STOCK", "FUND", "FOREX", "OPTION", "US_OPTION", "FUTURES", "EURO_OPTION", "BOND"];
//widget2 = infront.rankingWidget("#ranking", opts);
```

## Markup (template.html)

```html
<div class="cell-row">
    <div class="cell cell--w2">
        <div class="cell-content">
            <div class="cell-w-order-entry__input-pair">
                <label
                    >Param 1
                    <div class="cell-pull-right cell-width">
                        <input class="cell-input cell-width" id="column" name="column" /></div
                ></label>
            </div>
            <div class="cell-w-order-entry__input-pair">
                <label
                    >Param 2
                    <div class="cell-pull-right cell-width">
                        <input class="cell-input cell-width" id="toColumn" name="toColumn" /></div
                ></label>
            </div>
            <input
                class="cell-button--confirm cell-width"
                onclick="addColumn();"
                type="button"
                value="Add New Column"
            />
            <input
                class="cell-button--confirm cell-width"
                onclick="insertColumn();"
                type="button"
                value="Insert column at Index"
            />
            <input
                class="cell-button--confirm cell-width"
                onclick="removeColumn();"
                type="button"
                value="Remove Column"
            />
            <input
                class="cell-button--confirm cell-width"
                onclick="moveColumnIndex();"
                type="button"
                value="Move Column to Index"
            />
            <input
                class="cell-button--confirm cell-width"
                onclick="moveColumn();"
                type="button"
                value="Move Column to Column"
            />
            <br /><br />
            <input
                class="cell-button--confirm cell-width"
                onclick="saveColumns();"
                type="button"
                value="Save Columns"
            />
            <input
                class="cell-button--confirm cell-width"
                onclick="loadColumns();"
                type="button"
                value="Load Columns"
            />
            <input
                class="cell-button--confirm cell-width"
                onclick="resetColumns();"
                type="button"
                value="Reset Columns"
            />
        </div>
    </div>
    <div class="cell cell--w10">
        <div class="cell-content" id="my-lists"></div>
    </div>
    <!--<div class="cell cell--w2">
            <div id="intradayTrades" class="cell-content"></div>
        </div>
        <div class="cell cell--w4">
            <div id="ranking" class="cell-content"></div>
        </div>-->
</div>
```

## Styles (style.css)

```css
.cell-button--confirm {
    margin: 6px 0 0;
    border-radius: 2px;
    color: #fff;
    outline: 0;
    border: 1px solid #555;
    border-color: #119dda;
    border-width: 2px;
    box-sizing: border-box;
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.7);
    height: 24px;
    cursor: pointer;
    font-size: 12px;
    transition: all ease-in-out 0.08s;
}

.cell-button--confirm:hover {
    background-color: #26b1ee;
    border-color: #26b1ee;
    text-shadow: 2px 2px 3px #2b2b2b;
    transition: all ease-in-out 0.08s;
}

.cell-width {
    width: 100%;
}
```

