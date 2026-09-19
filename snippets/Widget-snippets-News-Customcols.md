---
title: "News Customcols"
kind: widget-snippet
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widget snippets > News Customcols"
description: "Test snippet for NewsCustomcols"
tags: ["widget", "test", "widget:NewsListWidget", "widget:newsListWidget"]
demonstrates: ["NewsListWidget", "newsListWidget"]
example_config: {"title":"News Customcols","description":"Test snippet for NewsCustomcols","modify_date":"2025-12-16","owner":"Infront","tags":["widget","test","widget:NewsListWidget","widget:newsListWidget"],"flags":{"show_description":true,"show_creator":true,"show_date":true,"show_metadata":true},"scripts":["//code.highcharts.com/stock/highstock.src.js"]}
source_url: "https://docs.infrontfinance.com/tests/NewsCustomcols"
source_files: ["script.ts", "template.html", "style.css", "config.json"]
---

# News Customcols

Test snippet for NewsCustomcols

Demonstrates: `NewsListWidget`, `newsListWidget`

## Script (script.ts)

```typescript
var opts = new Infront.NewsListWidgetOptions();
opts.instruments = [
    new Infront.Instrument(17921, 'ABB'),
    new Infront.Instrument(18177, 'BALT-ME'),
    new Infront.Instrument(18177, 'EQNR'),
    new Infront.Instrument(18177, 'NHY'),
    new Infront.Instrument(18177, 'AKER'),
    new Infront.Instrument(18177, 'AKA'),
    new Infront.Instrument(18177, 'YAR'),
    new Infront.Instrument(18177, 'AKSO'),
    new Infront.Instrument(18177, 'BAKKA'),
    new Infront.Instrument(18177, 'DNO'),
    new Infront.Instrument(18177, 'GJF'),
    new Infront.Instrument(18177, 'SPOL'),
    new Infront.Instrument(18177, 'KOG'),
    new Infront.Instrument(18177, 'GOGL'),
];
opts.columns = [
    'TIME',
    {
        name: 'HEADLINE',
        heading: 'Headline Prefixed',
        translate: (rowId, value) => {
            console.log('Item: ', rowId, value);
            var retVal = value;
            if (retVal.length > 20) retVal = retVal.substr(0, 17) + '...';
            return 'Prefix: ' + retVal;
        },
    },
    {
        name: '_HEADLINE',
        heading: 'Headline stripped',
        translate: (rowId, value) => {
            var retVal = rowId['_headline'];
            if (rowId && rowId.instruments && rowId.instruments.length > 0) {
                if (
                    rowId.instruments[0].ticker ==
                    retVal.substr(0, rowId.instruments[0].ticker.length)
                )
                    retVal = retVal.substr(rowId.instruments[0].ticker.length + 2);
            }
            return retVal;
        },
    },
    {
        name: '_symbol',
        heading: 'Symbol',
        translate: (rowId, value) => {
            var retVal = '';
            if (rowId && rowId.instruments && rowId.instruments.length > 0)
                retVal = rowId.instruments[0].ticker;
            return retVal;
        },
    },
    {
        name: '_url',
        heading: 'URL',
        translate: (rowId, value) => {
            var retVal = '';
            if (rowId && rowId.url) {
                var parts = rowId.url.match(/^https?\:\/\/([^\/?#]+)(?:[\/?#]|$)/i);
                var domain = parts ? parts[1] : rowId.url;
                retVal = "<a target='_blank' href='" + rowId.url + "'>" + domain + '</a>';
            }
            return retVal;
        },
    },
    'SHORT_SOURCE',
];
opts.streaming = true;
opts.paging = true;
opts.pageItems = 12;

infront.newsListWidget('newsWidget', opts);
```

## Markup (template.html)

```html
<div class="cell-row">
    <div class="cell cell--w6">
        <div class="cell-content" id="newsWidget"></div>
    </div>
</div>
```

## Styles (style.css)

```css
a {
    color: #ffffff;
}

body {
    color: #ffffff;
}

iframe.cell-overlay-newsreader.cell-maxed {
    font-family: 'Segoe UI', 'Helvetica Neue', 'Open Sans', Arial, sans-serif;
    font-weight: 400;
    line-height: 1;
    background-color: #004f67;
    color: #ffffff;
}
```

