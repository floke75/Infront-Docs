---
title: "Index Overview"
kind: widget-snippet
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widget snippets > Index Overview"
description: "Test snippet for Indexoverview"
tags: ["widget", "test", "widget:IndexOverviewWidget", "widget:indexOverviewWidget"]
demonstrates: ["IndexOverviewWidget", "indexOverviewWidget"]
example_config: {"title":"Index Overview","description":"Test snippet for Indexoverview","modify_date":"2025-12-16","owner":"Infront","tags":["widget","test","widget:IndexOverviewWidget","widget:indexOverviewWidget"],"flags":{"show_description":true,"show_creator":true,"show_date":true,"show_metadata":true},"scripts":["//code.highcharts.com/stock/highstock.src.js"]}
source_url: "https://docs.infrontfinance.com/tests/Indexoverview"
source_files: ["script.ts", "template.html", "config.json"]
---

# Index Overview

Test snippet for Indexoverview

Demonstrates: `IndexOverviewWidget`, `indexOverviewWidget`

## Script (script.ts)

```typescript
var opts = new Infront.IndexOverviewWidgetOptions();
opts.instrument = new Infront.Instrument(2098, 'DAX');
opts.primaryValue = 'LAST';

infront.indexOverviewWidget('#index-overview', opts);
```

## Markup (template.html)

```html
<div class="cell-row">
    <div class="cell cell--w5">
        <div class="cell-content" id="index-overview"></div>
    </div>
</div>
```

