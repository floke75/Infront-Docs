---
title: "Mylists"
kind: widget-snippet
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widget snippets > Mylists"
description: "Test snippet for Mylists"
tags: ["widget", "test", "widget:MyListsWidget", "widget:NewsListWidget", "widget:myListsWidget", "widget:newsListWidget", "widget:quoteList"]
demonstrates: ["MyListsWidget", "NewsListWidget", "myListsWidget", "newsListWidget", "quoteList"]
example_config: {"title":"Mylists","description":"Test snippet for Mylists","modify_date":"2025-12-16","owner":"Infront","tags":["widget","test","widget:MyListsWidget","widget:NewsListWidget","widget:myListsWidget","widget:newsListWidget","widget:quoteList"],"flags":{"show_description":true,"show_creator":true,"show_date":true,"show_metadata":true}}
source_url: "https://docs.infrontfinance.com/tests/Mylists"
source_files: ["script.ts", "template.html", "config.json"]
---

# Mylists

Test snippet for Mylists

Demonstrates: `MyListsWidget`, `NewsListWidget`, `myListsWidget`, `newsListWidget`, `quoteList`

## Script (script.ts)

```typescript
var opts = new Infront.MyListsWidgetOptions();
opts.sortable = true;
opts.id = 'mylistetstsststt';
opts.defaultSortedColumn = 0;
opts.enableColumnsMove = true;
opts.enableColumnsResize = true;
opts.defaultSortOrder = Infront.SortOrder.Asc;
opts.columns = [
    {
        name: '_TICKER',
        hover: 'FULL_NAME',
        heading: 'Comp-Tick',
        flag: true,
        dataType: Infront.DataType.Text,
        type: 'computed',
        computeFields: ['TICKER', 'FULL_NAME', 'INSTRUMENT_TYPE'],
        compute: function (rowId, args) {
            if (args[2] == 'FUND' || args[0].startsWith('0P0')) {
                return args[1];
            }
            return args[0];
        },
        onClick: (instrument) => {
            alert(instrument.ticker);
        },
    },
    'TICKER',
    'CURRENCY',
    'LAST',
    'PCT_CHANGE',
];

opts.onSettingsClicked = function () {
    createColumnChooser();
    let colChooser = document.getElementById('columnChooser');
    if (colChooser) colChooser.parentElement.style.display = 'block';
};

opts.popupContainer = Infront.WidgetPopupParent.FIRST_PARENT;
opts.resetPopupPosition = true;

widget = infront.myListsWidget('#my-lists', opts);

opts = new Infront.QuoteListWidgetOptions();
opts.sortable = true;
opts.instruments = [
    new Infront.Instrument(6880, '990100P'),
    new Infront.Instrument(20, 'DJI'),
    new Infront.Instrument(2087, 'COMP'),
    new Infront.Instrument(2088, 'SP500'),
    new Infront.Instrument(2018, 'UKX'),
];
opts.columns = [
    {
        name: '_TICKER',
        hover: 'FULL_NAME',
        heading: 'Comp-Ticker',
        flag: true,
        dataType: Infront.DataType.Text,
        type: 'computed',
        computeFields: ['TICKER', 'FULL_NAME', 'INSTRUMENT_TYPE'],
        compute: function (rowId, args) {
            if (args[2] == 'FUND' || args[0].startsWith('0P0')) {
                return args[1];
            }
            return args[0];
        },
        onClick: (instrument) => {
            alert(instrument.ticker);
        },
    },

    {
        name: 'TICKER',
        hover: 'FULL_NAME',
        flag: true,
    },
    'BID',
    'ASK',
    'OPEN',
    'Last',
];
infront.quoteList('#quotelist', opts);

//	var opts2 = new Infront.NewsListWidgetOptions();
////	opts2.instrument = new Infront.Instrument(14, "F");
//	opts2.columns = ["TIME", "HEADLINE", , "SHORT_SOURCE"];
//	opts2.linkChannels = [200];
//	opts2.linkAction = Infront.LinkAction.Append;

//	opts2.streaming = true;
//	opts2.paging = true;
//	opts2.pageItems = 12;

//	infront.newsListWidget("newsWidget", opts2);

//var opts3 = new Infront.NewsListWidgetOptions();
//opts3.instrument = new Infront.Instrument(14, "F");
//opts3.columns = ["TIME", "HEADLINE", , "SHORT_SOURCE"];
//opts3.linkChannels = [200];
//opts3.linkAction = Infront.LinkAction.Append;

//opts3.streaming = true;
//opts3.paging = true;
//opts3.pageItems = 12;
//infront.newsListWidget("newscontrol", opts3);
```

## Markup (template.html)

```html
<div class="cell-row">
    <div class="cell cell--w6">
        <div class="cell-content" id="quotelist"></div>
    </div>
</div>
<div class="cell-row">
    <div class="cell cell--w6">
        <div class="cell-content" id="my-lists"></div>
    </div>
</div>
<div
    class="cell cell-column-chooser__overlay"
    onclick="hideElement(this, event)"
    style="display: none"
>
    <div class="cell-row" id="columnChooser"></div>
</div>
```

