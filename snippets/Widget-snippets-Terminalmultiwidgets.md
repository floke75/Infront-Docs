---
title: "Terminalmultiwidgets"
kind: widget-snippet
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widget snippets > Terminalmultiwidgets"
description: "Test snippet for Terminalmultiwidgets"
tags: ["widget", "test", "widget:IntradayTradesSimpleWidget", "widget:PutCallWidget", "widget:QuoteListWidget", "widget:intradayTradesSimpleWidget", "widget:putCallWidget", "widget:quoteList"]
demonstrates: ["IntradayTradesSimpleWidget", "PutCallWidget", "QuoteListWidget", "intradayTradesSimpleWidget", "putCallWidget", "quoteList"]
example_config: {"title":"Terminalmultiwidgets","description":"Test snippet for Terminalmultiwidgets","modify_date":"2025-12-16","owner":"Infront","tags":["widget","test","widget:IntradayTradesSimpleWidget","widget:PutCallWidget","widget:QuoteListWidget","widget:intradayTradesSimpleWidget","widget:putCallWidget","widget:quoteList"],"flags":{"show_description":true,"show_creator":true,"show_date":true,"show_metadata":true},"scripts":["InfrontUI-latest.c.js"],"styles":["https://software.infrontservices.com/wtk/ids/css/InfrontFramework-latest.css","https://software.infrontservices.com/wtk/ids/themes/light-latest/theme.css"]}
source_url: "https://docs.infrontfinance.com/tests/Terminalmultiwidgets"
source_files: ["script.ts", "template.html", "config.json"]
---

# Terminalmultiwidgets

Test snippet for Terminalmultiwidgets

Demonstrates: `IntradayTradesSimpleWidget`, `PutCallWidget`, `QuoteListWidget`, `intradayTradesSimpleWidget`, `putCallWidget`, `quoteList`

## Script (script.ts)

```typescript
var onLink = (type, value) => {
    console.log('Link event has been triggered - Type: ', type, 'Value: ', value);
    if (value && value['feed'] && value['ticker'] && window.terminalCallback)
        window.terminalCallback('' + value['feed'] + ',' + value['ticker']);
};
link = new Infront.Link(infront, Infront.LinkAction.Append, [4555], onLink);

var opts = new Infront.PutCallWidgetOptions();
opts.widgetTitle = 'Put / Call';
opts.linkChannels = [4555];
opts.linkAction = Infront.LinkAction.Replace;
opts.showTitle = true;
opts.showTabs = true;
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
opts.feed = 17923; //Stockholm
//opts.feed = 18179; //Oslo
//opts.feed = 2206; //Eurex
opts.onUnderlyingClicked = function (instrument) {
    alert(instrument.ticker);
};
opts.onRowClicked = function (call, put) {
    alert('Row: ' + call.ticker + ', ' + put.ticker);
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

