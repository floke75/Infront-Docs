---
title: "Columnchooser Light"
kind: widget-snippet
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widget snippets > Columnchooser Light"
description: "Test snippet for ColumnchooserLight"
tags: ["widget", "test", "widget:ColumnChooserWidget", "widget:QuoteListWidget", "widget:columnChooserWidget", "widget:quoteList"]
demonstrates: ["ColumnChooserWidget", "QuoteListWidget", "columnChooserWidget", "quoteList"]
example_config: {"title":"Columnchooser Light","description":"Test snippet for ColumnchooserLight","modify_date":"2025-12-16","owner":"Infront","tags":["widget","test","widget:ColumnChooserWidget","widget:QuoteListWidget","widget:columnChooserWidget","widget:quoteList"],"flags":{"show_description":true,"show_creator":true,"show_date":true,"show_metadata":true},"styles":["../themes/light-latest/theme.css"]}
source_url: "https://docs.infrontfinance.com/tests/ColumnchooserLight"
source_files: ["script.ts", "template.html", "style.css", "config.json"]
---

# Columnchooser Light

Test snippet for ColumnchooserLight

Demonstrates: `ColumnChooserWidget`, `QuoteListWidget`, `columnChooserWidget`, `quoteList`

## Script (script.ts)

```typescript
var opts = new Infront.QuoteListWidgetOptions();
opts.widgetTitle = 'Quote List Widget';
opts.sortable = true;
opts.defaultSortedColumn = 0;
opts.id = 'test0-light';
opts.loadSavedColumns = true;
opts.enableColumnsMove = true;
//opts.layout = Infront.ListLayout.DIV;
opts.instruments = [
    new Infront.Instrument(2008, 'UG'),
    new Infront.Instrument(20, 'DJI'),
    new Infront.Instrument(2087, 'COMP'),
    new Infront.Instrument(2088, 'SP500'),
    new Infront.Instrument(2018, 'UKX'),
    new Infront.Instrument(6880, '990100P'),
    new Infront.Instrument(20, 'DJI'),
];

//opts.tabs = [
//    {
//        id: "testA",
//        label: "Test A",
//        columns: [
//            {
//                "name": "last", //"s_market_price",
//                "footer": "sum",
//                "hover": "FULL_NAME"
//            },
//            "BID",
//            "ASK"
//        ]
//    },
//    {
//        id: "testB",
//        label: "Test B",
//        columns: [
//            "TICKER",
//            "FULL_NAME"
//        ]
//    }
//];

opts.columns = [
    {
        name: 'FULL_NAME',
        //frozen: "left"
    },
    {
        name: 's_market_price',
        footer: 'sum',
    },
    {
        name: 'CHANGE',
        heading: 'Change',
        locked: true,
    },
    {
        name: 'LAST',
        footer: 'sum',
        hover: 'FULL_NAME',
        //"frozen": "right"
    },
    //"PCT_CHANGE",
    //"YTD_CHANGE"
    {
        name: 'DELETEBUTTON',
        type: 'custom',
        heading: '',
        visible: true,
        frozen: 'right',
        content: '<span class="cell-table__deletebutton"></span>',
        className: 'cell-tablecell--interaction--full-button',
        onClick: (item, value) => alert('You clicked this row: ' + JSON.stringify(item)),
    },
];
opts.availableColumns = [
    {
        name: 'TICKER',
        //"frozen": "left",
        categories: ['Most used', 'Common'],
    },
    {
        name: 'TICKER',
        heading: 'Ticker',
        id: 'SymbolB',
        categories: ['Most used', 'Common'],
    },
    {
        name: 'TICKER_',
        heading: 'Red Ticker',
        id: 'RedSymbol',
        type: 'computed',
        computeFields: ['TICKER'],
        compute: (rowId, args) => {
            if (args[0]) {
                if (args[0].length < 4) return '<span style="color: red;">+' + args[0] + '</span>';
                else return args[0];
            }
            return '';
        },
        categories: ['Most used', 'Common'],
    },
    {
        name: 'FULL_NAME',
        //frozen: "left",
        categories: ['Most used', 'Common'],
    },
    {
        name: 'ISIN',
        categories: ['Most used', 'Other'],
    },
    {
        name: 'Test',
        heading: 'Test Column',
        categories: ['Most used', 'Other'],
    },
    {
        name: 'BID',
        categories: ['Instruments', 'Other'],
    },
    {
        name: 'ASK',
        categories: ['Instruments', 'Other'],
    },
    {
        name: 'LAST',
        categories: ['Instruments', 'Other'],
        //"frozen": "right"
    },
    'PCT_CHANGE',
    {
        name: 'CHANGE',
        heading: 'Change',
    },
];
widget = infront.quoteList('#my-lists', opts);

var optColumnChooser = new Infront.ColumnChooserWidgetOptions();
optColumnChooser.listWidget = widget;
//optColumnChooser.showTitle = true;
//optColumnChooser.overrideTitle = "My Widget";
//optColumnChooser.allowDirectUpdate = false;
optColumnChooser.onCloseClicked = function (columns) {
    alert('Dialog closed');
};
infront.columnChooserWidget('#column-chooser', optColumnChooser);
```

## Markup (template.html)

```html
<div class="cell cell--w5">
    <div class="cell-content" id="my-lists"></div>
</div>
<div class="cell cell-column-chooser">
    <div class="cell-content" id="column-chooser"></div>
</div>
```

## Styles (style.css)

```css
.cell-column-chooser {
    width: 630px;
}
```

