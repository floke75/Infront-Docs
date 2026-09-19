---
title: "Newsinui"
kind: widget-snippet
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widget snippets > Newsinui"
description: "Test snippet for Newsinui"
tags: ["widget", "test"]
example_config: {"title":"Newsinui","description":"Test snippet for Newsinui","modify_date":"2025-12-16","owner":"Infront","tags":["widget","test"],"flags":{"show_description":true,"show_creator":true,"show_date":true,"show_metadata":true},"scripts":["https://code.highcharts.com/stock/9.3.1/highstock.js","https://code.highcharts.com/stock/9.3.1/indicators/indicators-all.js","https://code.highcharts.com/stock/9.3.1/modules/drag-panes.js","https://code.highcharts.com/stock/9.3.1/modules/annotations-advanced.js","https://code.highcharts.com/stock/9.3.1/modules/stock-tools.js","https://code.highcharts.com/stock/9.3.1/modules/heikinashi.js","https://code.highcharts.com/stock/9.3.1/modules/hollowcandlestick.js"],"styles":["../../commonwebframework/tests/test-styles.css"]}
source_url: "https://docs.infrontfinance.com/tests/Newsinui"
source_files: ["script.ts", "template.html", "config.json"]
---

# Newsinui

Test snippet for Newsinui

## Script (script.ts)

```typescript
console.log('ready:', event);
sdk = infront.sdk;
```

## Markup (template.html)

```html
<div class="sidenav">
    <h1>Login</h1>
    <a href="#" onclick="initSDK()">initSDK</a>
    <a href="#" onclick="destroySDK()">destroySDK</a>
    <h1>Demos</h1>
    <a href="#" onclick="headlines({ feed: 17921, ticker: 'SKF B' })">Symbol headlines</a>
    <a
        href="#"
        onclick="headlines([
            { feed: 17921, ticker: 'VOLV B' },
            { isin: 'CH0012221716' },//ABB
            { vwdKey: 'TSLA.Q' },
            { companyId: '90103EF' }, //LVMH
            { feed: 18197, ticker: 'QUEST' }
        ], 500)"
        >Symbols headlines</a
    >
    <a href="#" onclick="headlines([1189, 18182, 1160, 1020, 1038])">Feed headlines</a>
    <a href="#" onclick="initChart()">init Chart</a>
    <a href="#" onclick="initQT()">init Quotelist</a>
    <a href="#" onclick="unsubscribe()">Unsubscribe</a>
</div>
<div class="main">
    <h1>Infront SDK news demo</h1>
    <div class="news-container">
        <div class="list">
            <table>
                <thead>
                    <th>id</th>
                    <th>Feed</th>
                    <th>Headline</th>
                    <th>Instrument(s)</th>
                    <th>Has body</th>
                    <th>Time</th>
                </thead>
                <tbody id="headlines"></tbody>
            </table>
        </div>
        <div class="shade" hidden="" onclick="hideStory()">
            <div class="story" id="story"></div>
        </div>
    </div>
    <div class="cell-content cell-row">
        <h1>Description</h1>
        <p>
            This example shows how to use feed as a data source of QuoteListWidget. QuoteListWidget
            will list all instruments in the given feed.
        </p>
    </div>
    <div class="cell-content cell-row" id="quotelist"></div>
    <div class="cell-row">
        <div class="cell cell--w12">
            <div class="cell-content">
                <div id="chartwidget" style="height: 360px"></div>
            </div>
        </div>
    </div>
</div>
```

