---
title: "Table View"
kind: example
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widgets > ESG widgets > Table View"
description: "Displays an ESG table view widget using EsgTableViewWidgetOptions for a given instrument."
tags: ["esg-table-view-widget", "EsgTableViewWidgetOptions", "widgets", "examples", "wtk", "requests"]
example_config: {"title":"Table View","description":"Displays an ESG table view widget using EsgTableViewWidgetOptions for a given instrument.","modify_date":"2023-08-25T15:57:06","owner":"","tags":["esg-table-view-widget","EsgTableViewWidgetOptions","widgets","examples","wtk","requests"]}
source_url: "https://docs.infrontfinance.com/examples/Widgets/Widgets/ESGwidgets/TableView"
source_files: ["script.ts", "template.html", "config.json"]
---

# Table View

Displays an ESG table view widget using EsgTableViewWidgetOptions for a given instrument.

## Script (script.ts)

```typescript
const opts = new Infront.EsgTableViewWidgetOptions(); 
opts.instrument = { ticker: 'BMW', feed: 26 };
var esgTableViewWidget = infront.esgTableViewWidget('EsgTableViewWidget', opts);
```

## Markup (template.html)

```html
<div class="cell-row">
    <button onclick="esgTableViewWidget.setInstrument({ ticker: 'BMW', feed: 26 })">BMW</button>
    <button onclick="esgTableViewWidget.setInstrument({ ticker: 'TSLA', feed: 15 })">Tesla</button>
    <button onclick="esgTableViewWidget.setInstrument({ ticker: 'AAPL', feed: 15 })">Apple</button>
    <button onclick="esgTableViewWidget.setInstrument({ isin: 'NO0003921009', mic: 'XOSL' })">DNO</button>
</div>
<div class="cell-row">
    <div class="cell cell--w12">
        <div class="cell-content"> 
            <div id="EsgTableViewWidget"></div>
        </div>
    </div>
</div>
```

