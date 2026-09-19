---
title: "Intradaytradesmini"
kind: widget-snippet
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widget snippets > Intradaytradesmini"
description: "Test snippet for Intradaytradesmini"
tags: ["widget", "test", "widget:CommunicationStatusWidget", "widget:IntradayTradesSimpleWidget", "widget:IntradayTradesWidget", "widget:communicationStatus", "widget:getSubFeeds", "widget:intradayTradesSimpleWidget", "widget:intradayTradesWidget"]
demonstrates: ["CommunicationStatusWidget", "IntradayTradesSimpleWidget", "IntradayTradesWidget", "communicationStatus", "getSubFeeds", "intradayTradesSimpleWidget", "intradayTradesWidget"]
example_config: {"title":"Intradaytradesmini","description":"Test snippet for Intradaytradesmini","modify_date":"2025-12-16","owner":"Infront","tags":["widget","test","widget:CommunicationStatusWidget","widget:IntradayTradesSimpleWidget","widget:IntradayTradesWidget","widget:communicationStatus","widget:getSubFeeds","widget:intradayTradesSimpleWidget","widget:intradayTradesWidget"],"flags":{"show_description":true,"show_creator":true,"show_date":true,"show_metadata":true},"scripts":["./base64.js"]}
source_url: "https://docs.infrontfinance.com/tests/Intradaytradesmini"
source_files: ["script.ts", "template.html", "config.json"]
---

# Intradaytradesmini

Test snippet for Intradaytradesmini

Demonstrates: `CommunicationStatusWidget`, `IntradayTradesSimpleWidget`, `IntradayTradesWidget`, `communicationStatus`, `getSubFeeds`, `intradayTradesSimpleWidget`, `intradayTradesWidget`

## Script (script.ts)

```typescript
Infront.DEBUG_REQUESTS = true;
Infront.DEBUG_UNHANDLED_TAGS = true;
Infront.DEBUG_TRADES_RT_TAGS = true;
infront.infront.getSubFeeds(17921, (feeds) => {
    console.log('Sub feeds for feed 17921 are:', feeds);
});

//let instrument = new Infront.Instrument(17921, "HM B");
let instrument = new Infront.Instrument(18177, 'SALM');

var opts = new Infront.IntradayTradesSimpleWidgetOptions();
opts.instrument = instrument;
opts.tickerInHeader = true;
opts.pageItems = 25;
opts.linkChannels = [4555];
opts.showSearchWidget = true;
opts.linkAction = Infront.LinkAction.Append;
opts.showBuyerAndSeller = false;
infront.intradayTradesSimpleWidget('intradaytradesmini', opts);

opts = new Infront.IntradayTradesWidgetOptions();
opts.instrument = instrument;
opts.pageItems = 25;
opts.showSearchWidget = true;
opts.paging = false;
opts.linkChannels = [4555];
opts.linkAction = Infront.LinkAction.Replace;
opts.columns = [
    {
        name: 'TIME',
        className: 'cell-text-left',
    },
    'VOLUME',
    {
        name: 'BUYER',
        className: 'cell-text-center',
    },
    {
        name: 'SELLER',
        className: 'cell-text-center',
    },
    'LAST',
    'ESMA',
    'MARKET',
    'MMT',
    'yield',
    'tradeId',
    'trTypeStr',
];

infront.intradayTradesWidget('#intradaytrades', opts);

opts = new Infront.CommunicationStatusWidgetOptions();
infront.communicationStatus('comm', opts);
```

## Markup (template.html)

```html
<div class="cell-row">
    <div class="cell cell--w6">
        <div class="cell-content" id="intradaytradesmini"></div>
    </div>
    <div class="cell cell--w6">
        <div class="cell-content" id="intradaytrades"></div>
    </div>
</div>
<div class="cell-row">
    <div class="cell cell--w12">
        <div class="cell-content" id="comm"></div>
    </div>
</div>
```

