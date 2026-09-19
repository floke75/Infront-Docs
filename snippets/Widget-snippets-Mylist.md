---
title: "Mylist"
kind: widget-snippet
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widget snippets > Mylist"
description: "Test snippet for Mylist"
tags: ["widget", "test", "widget:MyListsWidget", "widget:myListsWidget"]
demonstrates: ["MyListsWidget", "myListsWidget"]
example_config: {"title":"Mylist","description":"Test snippet for Mylist","modify_date":"2025-12-16","owner":"Infront","tags":["widget","test","widget:MyListsWidget","widget:myListsWidget"],"flags":{"show_description":true,"show_creator":true,"show_date":true,"show_metadata":true},"scripts":["//code.highcharts.com/stock/highstock.src.js"],"styles":["../themes/light-latest/theme.css"]}
source_url: "https://docs.infrontfinance.com/tests/Mylist"
source_files: ["script.ts", "config.json"]
---

# Mylist

Test snippet for Mylist

Demonstrates: `MyListsWidget`, `myListsWidget`

## Script (script.ts)

```typescript
var myListsWidget = new Infront.MyListsWidgetOptions();
myListsWidget.columns = ['FULL_NAME', 'LAST', 'PCT_CHANGE'];
infront.myListsWidget('#mylist', myListsWidget);

var optsMultiAdvanced = new Infront.MyListsWidgetOptions();
optsMultiAdvanced.columns = [
    {
        name: 'TICKER',
        hover: 'FULL_NAME',
        flag: true,
    },
    'CURRENCY',
    {
        name: 'LAST_VALID',
        className: 'wt-clickable-cell',
    },
    'CHANGE',
    'PCT_CHANGE',
    {
        name: 'timecheck',
        heading: 'Time',
        type: 'computed',
        dataType: Infront.DataType.DateTime,
        computeFields: ['S_DATETIME', 'LAST_TRADE_DATE'],
        compute: function (rowId, args) {
            if (args[0]) {
                return args[0];
            } else {
                return args[1];
            }
        },
        className: 'cell-table__num',
    },
    {
        name: 'my_calculation',
        heading: "Today's range",
        type: 'computed',
        computeFields: ['HIGH', 'LOW'],
        compute: function (rowId, args) {
            return args[0] - args[1];
        },
        className: 'cell-table__num',
    },
    {
        name: 'HOLDING_AVG_PRICE',
        decimals: 2,
    },
    {
        name: 'HOLDING_INVESTED',
        decimals: 2,
    },
    {
        name: 'HOLDING_MARKET_VALUE_W_POPUP',
        decimals: 2,
    },
    {
        name: 'HOLDING_TOTAL_PROFIT_W_POPUP',
        decimals: 2,
    },
];

optsMultiAdvanced.defaultSortOrder = Infront.SortOrder.Desc;
optsMultiAdvanced.sortable = true;
optsMultiAdvanced.defaultSortedColumn = 3;
optsMultiAdvanced.enableChangeStatusColors = true;
infront.myListsWidget('#mylist1', optsMultiAdvanced);

var optsMulti = new Infront.MyListsWidgetOptions();
optsMulti.sortable = true;
optsMulti.defaultSortedColumn = 2;
optsMulti.defaultSortOrder = Infront.SortOrder.Desc;
optsMulti.columns = [
    'TICKER',
    'CURRENCY',
    'LAST',
    'PCT_CHANGE',
    'YTD_CHANGE',
    {
        name: 'HOLDING_AVG_PRICE',
        decimals: 2,
    },
    {
        name: 'HOLDING_INVESTED',
        decimals: 2,
    },
    {
        name: 'HOLDING_MARKET_VALUE_W_POPUP',
        decimals: 2,
    },
    {
        name: 'HOLDING_TOTAL_PROFIT_W_POPUP',
        decimals: 2,
    },
];
optsMulti.tabs = [
    {
        id: 'overview',
        label: 'Overview',
        columns: ['TICKER', 'CURRENCY', 'LAST'],
    },
    {
        id: 'performance',
        label: 'Performance',
        columns: ['TICKER', 'YTD_CHANGE', 'PCT_CHANGE'],
    },
];

infront.myListsWidget('#mylist2', optsMulti);
```

