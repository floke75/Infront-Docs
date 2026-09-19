---
title: "Putcall"
kind: widget-snippet
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widget snippets > Putcall"
description: "Test snippet for Putcall"
tags: ["widget", "test", "widget:IntradayTradesSimpleWidget", "widget:PutCallWidget", "widget:QuoteListWidget", "widget:intradayTradesSimpleWidget", "widget:putCallWidget", "widget:quoteList"]
demonstrates: ["IntradayTradesSimpleWidget", "PutCallWidget", "QuoteListWidget", "intradayTradesSimpleWidget", "putCallWidget", "quoteList"]
example_config: {"title":"Putcall","description":"Test snippet for Putcall","modify_date":"2025-12-16","owner":"Infront","tags":["widget","test","widget:IntradayTradesSimpleWidget","widget:PutCallWidget","widget:QuoteListWidget","widget:intradayTradesSimpleWidget","widget:putCallWidget","widget:quoteList"],"flags":{"show_description":true,"show_creator":true,"show_date":true,"show_metadata":true}}
source_url: "https://docs.infrontfinance.com/tests/Putcall"
source_files: ["script.ts", "template.html", "style.css", "config.json"]
---

# Putcall

Test snippet for Putcall

Demonstrates: `IntradayTradesSimpleWidget`, `PutCallWidget`, `QuoteListWidget`, `intradayTradesSimpleWidget`, `putCallWidget`, `quoteList`

## Script (script.ts)

```typescript
var opts = new Infront.PutCallWidgetOptions();
opts.widgetTitle = 'Put / Call';
opts.linkChannels = [4555];
opts.linkAction = Infront.LinkAction.Replace;
opts.showTitle = true;
opts.showTabs = false;
opts.showFutureForward = false;
opts.showUnderlyingChooser = true;
opts.interactionHighlight = true;
opts.showSymbolPanel = true;
opts.showLastInTitle = true;
opts.defaultUnderlying = new Infront.Instrument(17921, 'OMXS30');
opts.columns = [
    'TICKER',
    'ASK',
    'BID',
    'LAST',
    'STRIKE_PRICE',
    'EXPIRY_DATE',
    'CHANGE',
    'FULL_NAME',
];
opts.availableColumns = [
    {
        name: '_FLAG',
        heading: 'Flag',
        flag: true,
    },
    {
        name: 'TICKER',
        id: 'CALL',
        categories: ['Put/Call default', 'Common'],
    },
    {
        name: 'FULL_NAME',
        categories: ['Put/Call default', 'Most used', 'Common'],
    },
    {
        name: 'ISIN',
        categories: ['Most used', 'Other'],
    },
    {
        name: 'BID',
        categories: ['Put/Call default', 'Instruments', 'Other'],
    },
    {
        name: 'ASK',
        categories: ['Put/Call default', 'Instruments', 'Other'],
    },
    {
        name: 'LAST',
        categories: ['Put/Call default', 'Instruments', 'Other'],
    },
    {
        name: 'PCT_CHANGE',
        categories: ['Put/Call default', 'Common'],
    },
    {
        name: 'CHANGE',
        categories: ['Put/Call default', 'Common'],
    },
    {
        name: 'OPEN_INTEREST',
        categories: ['Put/Call default', 'Common'],
    },
    {
        name: 'STRIKE',
        categories: ['Put/Call default', 'Common'],
    },
    {
        name: 'EXPIRY',
        categories: ['Put/Call default', 'Common'],
    },
];

opts.feed = 17923; //Stockholm
//opts.feed = 18179; //Oslo
//opts.feed = 2206; //Eurex
opts.id = 'put_call_test';
opts.loadSavedColumns = true;

opts.enableColumnsMove = true;
opts.enableColumnsResize = true;

opts.onUnderlyingClicked = function (instrument) {
    alert(instrument.ticker);
};
opts.onRowClicked = function (call, put) {
    alert('Row: ' + call.ticker + ', ' + put.ticker);
};
opts.onSettingsClicked = function () {
    createColumnChooser();
    let colChooser = document.getElementsByClassName('cell-column-chooser')[0];
    if (colChooser) colChooser.parentElement.style.display = 'block';
};
widget = infront.putCallWidget('#putCall', opts);

opts = new Infront.QuoteListWidgetOptions();
opts.feed = 17921;
opts.useChains = true;
opts.interactionHighlight = true;
opts.columns = ['TICKER', 'LAST'];
opts.linkChannels = [4555];
opts.linkAction = Infront.LinkAction.None;
infront.quoteList('quoteList', opts);

opts = new Infront.IntradayTradesSimpleWidgetOptions();
opts.instrument = { feed: 2008, ticker: 'UG' };
opts.tickerInHeader = true;
opts.pageItems = 5;
opts.linkChannels = [4555];
opts.linkAction = Infront.LinkAction.Append;
infront.intradayTradesSimpleWidget('intradayTradesMiniWidget', opts);
```

## Markup (template.html)

```html
<div class="cell-row">
    <div class="cell cell--w8">
        <div class="cell-content" id="putCall"></div>
    </div>
    <div class="cell cell--w2">
        <div class="cell-content" id="quoteList"></div>
    </div>
    <div class="cell cell--w2">
        <div class="cell-content" id="intradayTradesMiniWidget"></div>
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
}
```

