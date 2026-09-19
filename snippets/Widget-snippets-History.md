---
title: "History"
kind: widget-snippet
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widget snippets > History"
description: "Test snippet for History"
tags: ["widget", "test", "widget:HistoryWidget", "widget:historyWidget"]
demonstrates: ["HistoryWidget", "historyWidget"]
example_config: {"title":"History","description":"Test snippet for History","modify_date":"2025-12-16","owner":"Infront","tags":["widget","test","widget:HistoryWidget","widget:historyWidget"],"flags":{"show_description":true,"show_creator":true,"show_date":true,"show_metadata":true},"scripts":["//code.highcharts.com/stock/highstock.src.js"]}
source_url: "https://docs.infrontfinance.com/tests/History"
source_files: ["script.ts", "template.html", "config.json"]
---

# History

Test snippet for History

Demonstrates: `HistoryWidget`, `historyWidget`

## Script (script.ts)

```typescript
var opts = new Infront.HistoryWidgetOptions();
opts.instrument = new Infront.Instrument(17921, 'ABB');
opts.widgetTitle = 'Historical prices, ABB Ltd';
opts.startYear = 1999;
opts.endYear = 2019;
opts.columns = ['oPEn', 'LaSt', 'num_tradEs'];

infront.historyWidget('#history', opts);
```

## Markup (template.html)

```html
<div class="cell-row">
    <div class="cell cell--w12">
        <div class="cell-content" id="history"></div>
    </div>
</div>
```

