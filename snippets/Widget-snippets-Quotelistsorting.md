---
title: "Quotelistsorting"
kind: widget-snippet
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widget snippets > Quotelistsorting"
description: "Test snippet for Quotelistsorting"
tags: ["widget", "test", "widget:quoteList"]
demonstrates: ["quoteList"]
example_config: {"title":"Quotelistsorting","description":"Test snippet for Quotelistsorting","modify_date":"2025-12-16","owner":"Infront","tags":["widget","test","widget:quoteList"],"flags":{"show_description":true,"show_creator":true,"show_date":true,"show_metadata":true},"styles":["../themes/light-latest/theme.css"]}
source_url: "https://docs.infrontfinance.com/tests/Quotelistsorting"
source_files: ["script.ts", "template.html", "config.json"]
---

# Quotelistsorting

Test snippet for Quotelistsorting

Demonstrates: `quoteList`

## Script (script.ts)

```typescript
opts = new Infront.QuoteListWidgetOptions();
opts.columns = [
    {
        name: 'TICKER',
        hover: 'FULL_NAME',
        flag: true,
    },
    'CURRENCY',
    'BID',
    {
        name: 'BID',
        heading: 'BID(USD)',
        targetCurrency: 'USD',
    },
    'ASK',
    'INSTRUMENT_TYPE',
    {
        name: '_comp1',
        heading: 'Curr-ISIN-Computed',
        sortable: true,
        dataType: Infront.DataType.Percent,
        type: 'computed',
        computeFields: ['CURRENCY', 'ISIN'],
        compute: (instrument, arg) => {
            return '' + arg[0] + '-' + arg[1];
        },
    },
    {
        name: '_comp2',
        heading: 'BID-ASK-Computed',
        sortable: true,
        dataType: Infront.DataType.number,
        type: 'computed',
        computeFields: ['BID', 'ASK'],
        compute: (instrument, arg) => {
            return arg[0] - arg[1];
        },
    },
];
opts.sortable = true;
//opts.maxItems = 3;
opts.enableChangeStatusColors = true;
opts.id = 'test';
opts.instruments = [
    new Infront.Instrument(18177, 'AKER'),
    new Infront.Instrument(18177, 'DNB'),
    new Infront.Instrument(18177, 'DNO'),
    new Infront.Instrument(18177, 'EQNR'),
    new Infront.Instrument(17921, 'ABB'),
    new Infront.Instrument(2370, '0P00000TP1'),
    new Infront.Instrument(2370, '0P00000T3C'),
    new Infront.Instrument(17921, 'ATCO B'),
    new Infront.Instrument(17921, 'ERIC B'),
    new Infront.Instrument(17931, 'ABB0C 240SWE'),
];

//opts.enableColumnsResize = true;
//opts.enableColumnsMove = true;

opts.defaultSortedColumns = [
    {
        column: 1,
        sortOrder: Infront.SortOrder.Desc,
    },
    {
        column: 0,
        sortOrder: Infront.SortOrder.Desc,
    },
    {
        column: 5,
        sortOrder: Infront.SortOrder.Desc,
    },
];

opts.onItemCountChange = (x) => showOrder();

qt = infront.quoteList('#quotelist', opts);
```

## Markup (template.html)

```html
<div class="container">
    <div class="cell-row">
        <div class="cell cell--w12" id="quotelist"></div>
    </div>
</div>
<button onclick="sort(1,5,2);">sort 1 5 2</button>
<button onclick="sort(1,2,3);">sort 1 2 3</button>
<button onclick="sort(1,5,3);">sort 1 5 3</button>
<button onclick="sort(1,0,5);">sort 1 0 5</button>
```

