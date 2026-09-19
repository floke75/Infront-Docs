---
title: "Screener Instruments"
kind: widget-snippet
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widget snippets > Screener Instruments"
description: "Test snippet for ScreenerInstruments"
tags: ["widget", "test", "widget:QuoteListWidget", "widget:ScreenerWidget", "widget:quoteList", "widget:screenerWidget"]
demonstrates: ["QuoteListWidget", "ScreenerWidget", "quoteList", "screenerWidget"]
example_config: {"title":"Screener Instruments","description":"Test snippet for ScreenerInstruments","modify_date":"2025-12-16","owner":"Infront","tags":["widget","test","widget:QuoteListWidget","widget:ScreenerWidget","widget:quoteList","widget:screenerWidget"],"flags":{"show_description":true,"show_creator":true,"show_date":true,"show_metadata":true}}
source_url: "https://docs.infrontfinance.com/tests/ScreenerInstruments"
source_files: ["script.ts", "template.html", "config.json"]
---

# Screener Instruments

Test snippet for ScreenerInstruments

Demonstrates: `QuoteListWidget`, `ScreenerWidget`, `quoteList`, `screenerWidget`

## Script (script.ts)

```typescript
var opts = new Infront.QuoteListWidgetOptions();
opts.widgetTitle = 'Quote List Widget';
opts.sortable = true;
opts.defaultSortedColumn = 0;
opts.linkChannels = [12];
opts.linkAction = Infront.LinkAction.Append;

opts.columns = [
    {
        name: 'FULL_NAME',
        flag: true,
    },
    'ticker',
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
    },
    'FEED',
    //"PCT_CHANGE",
    //"YTD_CHANGE"
];
widget = infront.quoteList('#my-lists', opts);

opts = new Infront.ScreenerWidgetOptions();
//opts.feed = 18177;
opts.linkChannels = [12];
opts.linkAction = Infront.LinkAction.Append;
opts.collapsable = false;
opts.customRequiredFields = [IDS.RealtimeTags.Feed, IDS.RealtimeTags.SymbolSubType];
opts.instruments = [
    //new Infront.Instrument(2008, "UG"),
    //new Infront.Instrument(20, "DJI"),
    //new Infront.Instrument(2087, "COMP"),
    //new Infront.Instrument(2088, "SP500"),
    //new Infront.Instrument(2018, "UKX"),
    //new Infront.Instrument(6880, "990100P"),
    //new Infront.Instrument(20, "DJI")
    new Infront.Instrument(18177, 'DNB'),
    new Infront.Instrument(18177, 'DNO'),
    new Infront.Instrument(18177, 'WILS'),
    new Infront.Instrument(17921, 'ABB'),
];
opts.filters = [
    {
        filterFields: 'TICKER',
        filterType: Infront.FilterTypeEnum.Multiselect,
        header: 'Symbol',
        filterItems: [
            new Infront.FilterItemString('ABB', 'ABB', null, true),

            new Infront.FilterItemString('DNB', 'DNB', null, true),
            new Infront.FilterItemString('DNO', 'DNO', null, true),
            new Infront.FilterItemString('Wilson', 'WILS', null, true),

            //new Infront.FilterItemString("MSCI WORLD (Price)", "990100P", null, true),
            //new Infront.FilterItemString("NASDAQ Composite", "COMP", null, true),
            //new Infront.FilterItemString("Dow Jones Industrial Average", "DJI", null, true),
            //new Infront.FilterItemString("Dow Jones Industrial Average", "DJI", null, true),
            //new Infront.FilterItemString("S&P 500", "SP500", null, true),
            //new Infront.FilterItemString("PEUGEOT", "UG", null, true),
            //new Infront.FilterItemString("London", "FTSE", null, true)
        ],
    },
    {
        filterFields: 'FEED',
        filterType: Infront.FilterTypeEnum.Multiselect,
        header: 'Country',
        filterItems: [
            new Infront.FilterItemValue('Sweeden', [17921], 'fullname-select-val', false),
            new Infront.FilterItemValue('Norway', [18177], 'fullname-select-val', false),
            new Infront.FilterItemValue('Danmark', [17665], 'fullname-select-val', false),
            new Infront.FilterItemValue('Finland', [100], 'fullname-select-val', false),
        ],
    },
    {
        filterFields: 'FULL_NAME',
        filterType: Infront.FilterTypeEnum.FreeText,
        placeholder: 'Name',
    },
];
widget = infront.screenerWidget('#screener', opts);
```

## Markup (template.html)

```html
<div class="cell-row">
    <div class="cell cell--w2">
        <div class="cell-content">
            <div class="cell-h4">Add your filters</div>
            <div id="screener"></div>
        </div>
    </div>
    <div class="cell cell--w10">
        <div class="cell-content" id="my-lists"></div>
    </div>
</div>
```

