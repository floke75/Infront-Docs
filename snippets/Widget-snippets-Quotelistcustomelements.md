---
title: "Quotelistcustomelements"
kind: widget-snippet
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widget snippets > Quotelistcustomelements"
description: "Test snippet for Quotelistcustomelements"
tags: ["widget", "test", "widget:QuoteListWidget", "widget:quoteList"]
demonstrates: ["QuoteListWidget", "quoteList"]
example_config: {"title":"Quotelistcustomelements","description":"Test snippet for Quotelistcustomelements","modify_date":"2025-12-16","owner":"Infront","tags":["widget","test","widget:QuoteListWidget","widget:quoteList"],"flags":{"show_description":true,"show_creator":true,"show_date":true,"show_metadata":true}}
source_url: "https://docs.infrontfinance.com/tests/Quotelistcustomelements"
source_files: ["script.ts", "template.html", "config.json"]
---

# Quotelistcustomelements

Test snippet for Quotelistcustomelements

Demonstrates: `QuoteListWidget`, `quoteList`

## Script (script.ts)

```typescript
//var feed = 17952; //Warrants
var feed = 18177; //OSS
//var feed = 17924; //Bonds
//var feed = 17923; //Options Stockholm
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
    'ISSUER',
    'ISSUER_FULL_NAME',
    'FEED',
];
opts.sortable = true;
opts.enableChangeStatusColors = true;
opts.feed = feed;
opts.showFilters = true;

//TEST 1
// opts.showIssuers = true;
// opts.showUnderlyings = true;
// opts.showExpiries = true;

//TEST 2
// opts.showIssuers = true;
// opts.showUnderlyings = true;
// opts.showExpiries = false;

// //TEST 3
// opts.showIssuers = true;
// opts.showUnderlyings = false;
// opts.showExpiries = false;

// //TEST 4
// opts.showIssuers = false;
// opts.showUnderlyings = false;
// opts.showExpiries = false;

// //TEST 5
// opts.showIssuers = false;
// opts.showUnderlyings = false;
// opts.showExpiries = true;

// //TEST 6
// opts.showIssuers = false;
// opts.showUnderlyings = true;
// opts.showExpiries = true;

// //TEST 7
// opts.showIssuers = true;
// opts.showUnderlyings = false;
// opts.showExpiries = true;

// //TEST 8
opts.showIssuers = false;
opts.showUnderlyings = true;
opts.showExpiries = false;

opts.enableColumnsResize = true;
opts.enableColumnsMove = true;

opts.columns = [
    {
        name: 'FULL_NAME',
        hover: 'TICKER',
        flag: true,
        onClick: (instrument) => {
            this.appService.navigateToInstrumentPage(instrument);
        },
    },
    'LAST',
    'PCT_CHANGE',
    'CHANGE',
    'BID',
    'ASK',
    'ONEXCH_VOLUME',
    'S_DATETIME',
    {
        name: 'IS_TRADEABLE',
        heading: '',
        sortable: false,
        highlightChange: false,
        onClick: (instrument) => {
            this.appService.sendTradingWithInstrument(instrument);
        },
        className: 'shb-button-col shb-button-col--longname ',
        translate: (rowId, value) => {
            return '<span class="btn-std btn-buy-sell-inline btn--disabled"></span>';
        },
    },
];

var elemB = document.createElement('div');
var elemA = document.createElement('div');
elemB.innerHTML = 'Before element';
elemA.innerHTML = 'After element';

elemB.classList.add('cell-pull-right');
elemA.classList.add('cell-pull-right');

elemA.addEventListener('click', function () {
    console.warn('click a');
});
elemB.addEventListener('click', function () {
    console.warn('click b');
});

opts.customElementsBefore = [elemB];
opts.customElementsAfter = [elemA];

opts.useChains = true;
opts.sortable = true;
opts.enableChangeStatusColors = true;
opts.defaultContent = '<div class="shb-watchlist__empty-text">Ingen information tillgänglig.</div>';

var listChains = [
    {
        feed: 17921,
        name: 'SWEDISH_ALL_STOCKS',
        description: '<span hidden>a</span>Alla aktier',
    },
    {
        feed: 17921,
        name: '10208',
        description: '<span hidden>b</span>Large Cap Stockholm',
    },
    {
        feed: 17921,
        name: '10210',
        description: '<span hidden>c</span>Mid Cap Stockholm',
    },
    {
        feed: 17921,
        name: '10212',
        description: '<span hidden>d</span>Small Cap Stockholm',
    },
    {
        feed: 17921,
        name: 'OMXS30',
        description: '<span hidden>e</span>OMXS30',
    },
    {
        feed: 17921,
        name: '10150',
        description: '<span hidden>f</span>Externa listan',
    },
    {
        feed: 17938,
        name: 'EQST',
        description: '<span hidden>g</span>NGM',
    },
    {
        feed: 17938,
        name: 'MST',
        description: '<span hidden>h</span>NGM Nordic MTF',
    },
    {
        feed: 17921,
        name: 'FNO_STOCK',
        description: '<span hidden>i</span>First North Stockholm',
    },
    {
        feed: 17921,
        name: 'AktieTorget-cotr',
        description: '<span hidden>j</span>Spotlight',
    },
    {
        feed: 17921,
        name: 'SEEQ EQR',
        description: '<span hidden>k</span>Teckningsrätter',
    },
];
var listDefaultChain = '10208';

opts = new Infront.QuoteListWidgetOptions();
opts.columns = [
    {
        name: 'FULL_NAME',
        hover: 'TICKER',
        flag: true,
        onClick: (instrument) => {
            this.appService.navigateToInstrumentPage(instrument);
        },
    },
    'LAST',
    'PCT_CHANGE',
    'CHANGE',
    'BID',
    'ASK',
    'ONEXCH_VOLUME',
    'S_DATETIME',
    {
        name: 'IS_TRADEABLE',
        heading: '',
        sortable: false,
        highlightChange: false,
        onClick: (instrument) => {
            this.appService.sendTradingWithInstrument(instrument);
        },
        className: 'shb-button-col shb-button-col--longname ',
        translate: (rowId, value) => {
            let tradable = true;
            if (!tradable) {
                return '<span class="btn-std btn-buy-sell-inline btn--disabled"></span>';
            }
            return '<span class="btn-std btn-buy-sell-inline"></span>';
        },
    },
];

var elemB = document.createElement('div');
var elemA = document.createElement('div');
elemB.innerHTML = 'Before element';
elemA.innerHTML = 'After element';

elemB.classList.add('cell-pull-right');
elemA.classList.add('cell-pull-right');

elemA.addEventListener('click', function () {
    console.warn('click a');
});
elemB.addEventListener('click', function () {
    console.warn('click b');
});

opts.customElementsBefore = [elemB];
opts.customElementsAfter = [elemA];

opts.useOriginal = true;
opts.useChains = true;
opts.sortable = true;
opts.enableChangeStatusColors = true;
opts.chains = listChains;
opts.defaultChain = listDefaultChain;
opts.defaultContent = '<div class="shb-watchlist__empty-text">Ingen information tillgänglig.</div>';

infront.quoteList('#quotelist', opts);
```

## Markup (template.html)

```html
<div class="container">
    <div class="cell-row">
        <div class="cell cell--w8" id="quotelist"></div>
    </div>
</div>
```

