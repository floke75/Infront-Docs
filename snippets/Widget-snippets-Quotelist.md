---
title: "Quotelist"
kind: widget-snippet
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widget snippets > Quotelist"
description: "Test snippet for Quotelist"
tags: ["widget", "test", "widget:QuoteListWidget", "widget:infrontRTD", "widget:quoteList"]
demonstrates: ["QuoteListWidget", "infrontRTD", "quoteList"]
example_config: {"title":"Quotelist","description":"Test snippet for Quotelist","modify_date":"2025-12-16","owner":"Infront","tags":["widget","test","widget:QuoteListWidget","widget:infrontRTD","widget:quoteList"],"flags":{"show_description":true,"show_creator":true,"show_date":true,"show_metadata":true}}
source_url: "https://docs.infrontfinance.com/tests/Quotelist"
source_files: ["script.ts", "template.html", "config.json"]
---

# Quotelist

Test snippet for Quotelist

Demonstrates: `QuoteListWidget`, `infrontRTD`, `quoteList`

## Script (script.ts)

```typescript
//infront.infrontRTD("DEBUG_ALL_SYMBOL_DATA_TAGS,DEBUG_SYMBOL_DATA_TAGS,DEBUG_HIST_PERFORMANCE_TAGS,DEBUG_REQUESTS", false)
Infront.DEBUG_THROTTLING_DATA_ITEMS = true;
Infront.DEBUG_SYMBOL_DATA_CS = true;

var opts = new Infront.QuoteListWidgetOptions();
opts.id = 'test1';
opts.instruments = [
    // new Infront.Instrument(18177, "AASB"),
    new Infront.Instrument(18177, 'INFRO'),
    new Infront.Instrument(18177, 'NHY'),
    new Infront.Instrument(18177, 'EQNR'),
    // new Infront.Instrument(2087, "COMP"),
    // new Infront.Instrument(2088, "SP500"),
    // new Infront.Instrument(2018, "UKX"),
    // new Infront.Instrument(2087, "OMXS30"),
    // new Infront.Instrument(2087, "OMXSPI"),
    // new Infront.Instrument(2161, "SX5E"),
    // new Infront.Instrument(12, "EURSEK"),
    new Infront.Instrument(12, 'USDSEK'),
    // new Infront.Instrument(100, "NOKIA"),
    // new Infront.Instrument(2008, "NOKIA"),
    // new Infront.Instrument(6380, "NOKIA"),
    // new Infront.Instrument(2057, "NOKIA"),
];

// opts.feed = 18177;
// opts.defaultSortedColumns = [{ column: 0, sortOrder: Infront.SortOrder.Desc }, { column: 1, sortOrder: Infront.SortOrder.Desc }, { column: 2, sortOrder: Infront.SortOrder.Desc }]
//opts.instruments = [new Infront.Instrument(18199, "ZENT")];
//         opts.columns = ["TICKER", "BID", "ASK", "LAST", "ONE_W_CLOSE", "S_DATETIME", "TIME", "LAST_VALID_DATE"];
//         //opts.sortable = true;

opts.sortable = true;
opts.decimals = 4;
opts.enableChangeStatusColors = true;
opts.showFilters = false;
opts.columns = [
    {
        name: 'TICKER',
        hover: 'FULL_NAME',
        flag: {
            name: '_FEED_COUNTRY',
            type: 'custom',
            content: () => {
                return 'us';
            },
        },
        // flag: true,
    },
    // "BID",
    // "ASK",
    'last',
    // "LAST_VALID",
    // "CURRENCY",
    // "COUNTRY",
    // "COUNTRY_OF_INCORPORATION",
    // "FEED_COUNTRY_CODE",
    // "FEED_COUNTRY",
    // "FEED_COUNTRY3",
    // "FEED_COUNTRY_NAME",
    // "FEED_EXCHANGE",
    // "FEED_MAIN_INDEX",
    // "FEED_DESC",
    // "FEED_MARKET_CODE"
];

infront.quoteList('#quotelist', opts);
```

## Markup (template.html)

```html
<div class="cell-content cell-row" id="quotelist"></div>
```

