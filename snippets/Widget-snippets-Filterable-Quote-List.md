---
title: "Filterable Quote List"
kind: widget-snippet
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widget snippets > Filterable Quote List"
description: "Test snippet for Filterablequotelist"
tags: ["widget", "test", "widget:quoteList"]
demonstrates: ["quoteList"]
example_config: {"title":"Filterable Quote List","description":"Test snippet for Filterablequotelist","modify_date":"2025-12-16","owner":"Infront","tags":["widget","test","widget:quoteList"],"flags":{"show_description":true,"show_creator":true,"show_date":true,"show_metadata":true}}
source_url: "https://docs.infrontfinance.com/tests/Filterablequotelist"
source_files: ["script.ts", "template.html", "config.json"]
---

# Filterable Quote List

Test snippet for Filterablequotelist

Demonstrates: `quoteList`

## Script (script.ts)

```typescript
//var feed = 2367; //Warrants
//var feed = 18177; //OSS
//var feed = 17924; //Bonds
//var feed = 17923; //Options Stockholm
var feed = 17944; //NDX Sweden certificates
opts = new Infront.QuoteListWidgetOptions();
opts.columns = [
    {
        name: 'TICKER',
        hover: 'FULL_NAME',
        flag: true,
    },
    'BID',
    'ASK',
    'STRIKE_PRICE',
    'EXPIRY_DATE',
    'S_DATETIME',
    'UNDER_TICKER',
    'ISSUER',
    'ISSUER_FULL_NAME',
];
opts.sortable = true;
opts.enableChangeStatusColors = true;
//opts.instrumentTypes = ["OPTION", "DERIVATIVE", "EURO_OPTION"];

switch (getUrlParam('type')) {
    case 'feed':
        // This will list all the instruments in this feed
        // This must not filter by underlying/issuer/expiry dates
        opts.feed = feed;
        opts.showFilters = false;
        break;
    case 'chains':
        opts.useChains = true;
        opts.feed = feed;
        break;
    case 'filters':
        opts.feed = feed;
        opts.showFilters = true;
        break;
    case 'instruments':
        opts.instruments = [
            new Infront.Instrument(18177, 'AKER'),
            new Infront.Instrument(18177, 'DNB'),
            new Infront.Instrument(18177, 'DNO'),
            new Infront.Instrument(18177, 'EQNR'),
            new Infront.Instrument(17921, 'ABB'),
            new Infront.Instrument(17921, 'ATCO B'),
            new Infront.Instrument(17921, 'ERIC B'),
            new Infront.Instrument(17931, 'ABB0C 240SWE'),
        ];
        opts.showFilters = false;
        break;
    default:
        opts.feed = feed;
        break;
}
//opts.preferredIssuers = ["SHB - Svenska Handelsbanken AB"];
//opts.preferredIssuers = ["XBT Provider AB (publ)"];
//opts.preferredIssuers = ["CBK"];
//opts.preferredIssuers = ["SHB"];
//If the issuer has been assigned, the Issuer dropdown will not be visible
//opts.issuer = "SHB - Svenska Handelsbanken AB";
//opts.issuer = "XBT Provider AB (publ)";
//opts.issuer = "BNP";
//opts.issuer = "SHB";
//opts.preferredUnderlying = "HM B";
//opts.showUnderlyings = false;
//opts.showIssuers = false;
//opts.showExpiries = false;
//opts.enableColumnsResize = true;
//opts.enableColumnsMove = true;

infront.quoteList('#quotelist', opts);
```

## Markup (template.html)

```html
<div>
    <p>Pass one of the following parameters to change the list:</p>
    <pre>?type=feed | chains | filters | instruments</pre>
</div>
<div class="container">
    <div class="cell-row">
        <div class="cell cell--w8" id="quotelist"></div>
    </div>
</div>
```

