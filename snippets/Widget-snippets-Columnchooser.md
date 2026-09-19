---
title: "Columnchooser"
kind: widget-snippet
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widget snippets > Columnchooser"
description: "Test snippet for Columnchooser"
tags: ["widget", "test", "widget:QuoteListWidget", "widget:quoteList"]
demonstrates: ["QuoteListWidget", "quoteList"]
example_config: {"title":"Columnchooser","description":"Test snippet for Columnchooser","modify_date":"2025-12-16","owner":"Infront","tags":["widget","test","widget:QuoteListWidget","widget:quoteList"],"flags":{"show_description":true,"show_creator":true,"show_date":true,"show_metadata":true}}
source_url: "https://docs.infrontfinance.com/tests/Columnchooser"
source_files: ["script.ts", "template.html", "style.css", "config.json"]
---

# Columnchooser

Test snippet for Columnchooser

Demonstrates: `QuoteListWidget`, `quoteList`

## Script (script.ts)

```typescript
var opts = new Infront.QuoteListWidgetOptions();
opts.widgetTitle = 'Quote List Widget';
opts.sortable = true;
opts.defaultSortedColumn = 0;
opts.id = 'test0';
opts.loadSavedColumns = true;
opts.enableColumnsMove = true;
opts.enableColumnsResize = true;
opts.onSettingsClicked = function () {
    createColumnChooser();
    let colChooser = document.getElementsByClassName('cell-column-chooser')[0];
    if (colChooser) colChooser.parentElement.style.display = 'block';
};

opts.instruments = [
    new Infront.Instrument(2008, 'UG'),
    new Infront.Instrument(20, 'DJI'),
    new Infront.Instrument(2087, 'COMP'),
    new Infront.Instrument(2088, 'SP500'),
    new Infront.Instrument(2018, 'UKX'),
    new Infront.Instrument(6880, '990100P'),
    new Infront.Instrument(20, 'DJI'),
];

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
        onClick: function (item, value) {
            alert('You clicked this row: ' + JSON.stringify(item));
        },
    },
];
opts.extraColumns = ['full_name', 'currency'];
opts.availableColumns = [
    {
        name: '_FLAG',
        heading: 'Flag',
        flag: true,
        frozen: 'left',
    },
    //{
    //    "name": "TICKER",
    //    //"frozen": "left",
    //    "categories": ["Most used", "Common"]
    //},
    //{
    //    "name": "TICKER",
    //    "heading": "Ticker",
    //    "id": "SymbolB",
    //    "categories": ["Most used", "Common"]
    //},
    {
        name: 'TICKER',
        //"heading": "Red Ticker",
        id: 'RedSymbol',
        type: 'computed',
        computeFields: ['TICKER'],
        compute: function (rowId, args) {
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
```

## Markup (template.html)

```html
<div class="cell cell--w12">
    <div class="cell-content" id="my-lists"></div>
</div>
<div class="cell cell--tools">
    <div class="cell-content" id="my-lists">
        <div>
            <label for="chkColumnsMove">Allow column moving:</label>
            <input id="chkColumnsMove" onclick="updateInputs()" type="checkbox" />
        </div>
        <div>
            <label for="chkColumnsResize">Allow column resizing:</label>
            <input id="chkColumnsResize" onclick="updateInputs()" type="checkbox" />
        </div>
        <div>
            <label for="chkDirectUpdates">Allow direct updates on column: </label>
            <input id="chkDirectUpdates" onclick="updateInputs()" type="checkbox" />
        </div>
    </div>
</div>
<div
    class="cell cell-column-chooser__overlay"
    onclick="hideElement(this, event)"
    style="display: none"
>
    <div class="cell cell-column-chooser">
        <div class="cell-content" id="column-chooser"></div>
    </div>
</div>
```

## Styles (style.css)

```css
.cell-column-chooser {
    width: 630px;
    position: absolute;
    left: calc(50% - 315px);
    top: calc(50% - 258px);
}

.cell-column-chooser__overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    z-index: 1;
}

.cell--tools {
    padding: 10px 0;
}
```

