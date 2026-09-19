---
title: "Marketlist"
kind: widget-snippet
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widget snippets > Marketlist"
description: "Test snippet for Marketlist"
tags: ["widget", "test", "widget:MarketListWidget", "widget:marketListWidget"]
demonstrates: ["MarketListWidget", "marketListWidget"]
example_config: {"title":"Marketlist","description":"Test snippet for Marketlist","modify_date":"2025-12-16","owner":"Infront","tags":["widget","test","widget:MarketListWidget","widget:marketListWidget"],"flags":{"show_description":true,"show_creator":true,"show_date":true,"show_metadata":true}}
source_url: "https://docs.infrontfinance.com/tests/Marketlist"
source_files: ["script.ts", "template.html", "config.json"]
---

# Marketlist

Test snippet for Marketlist

Demonstrates: `MarketListWidget`, `marketListWidget`

## Script (script.ts)

```typescript
var opts = new Infront.MarketListWidgetOptions();
opts.widgetTitle = 'Market List';
opts.filter = [Infront.MarketListFilters.BI];
infront.marketListWidget('#market-list', opts);
```

## Markup (template.html)

```html
<div id="root">
    <div class="cell-row">
        <div class="cell cell--w6">
            <div class="cell-content" id="market-list"></div>
        </div>
    </div>
</div>
```

