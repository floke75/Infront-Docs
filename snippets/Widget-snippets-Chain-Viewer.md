---
title: "Chain Viewer"
kind: widget-snippet
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widget snippets > Chain Viewer"
description: "Test snippet for Chainviewer"
tags: ["widget", "test", "widget:QuoteListWidget", "widget:quoteList"]
demonstrates: ["QuoteListWidget", "quoteList"]
example_config: {"title":"Chain Viewer","description":"Test snippet for Chainviewer","modify_date":"2025-12-16","owner":"Infront","tags":["widget","test","widget:QuoteListWidget","widget:quoteList"],"flags":{"show_description":true,"show_creator":true,"show_date":true,"show_metadata":true}}
source_url: "https://docs.infrontfinance.com/tests/Chainviewer"
source_files: ["script.ts", "template.html", "config.json"]
---

# Chain Viewer

Test snippet for Chainviewer

Demonstrates: `QuoteListWidget`, `quoteList`

## Script (script.ts)

```typescript
cvOpts = new Infront.QuoteListWidgetOptions();
cvOpts.columns = ['TICKER', 'FULL_NAME', 'CHANGE', 'BID', 'ASK', 'LAST'];
cvOpts.sortable = true;
cvOpts.enableChangeStatusColors = true;
cvOpts.feed = 790;
cvOpts.useChains = true;
// cvOpts.chains = [{
//     "feed": 15,
//     "name": "NAS100_MANUAL",
//     "description": "Nasdaq 100"
// }, {
//     "feed": 26,
//     "name": "DAX",
//     "description": "DAX Constituents"
// }];
// cvOpts.defaultChain = "DAX";
list = infront.quoteList('#chainviewer', cvOpts);
```

## Markup (template.html)

```html
<div class="cell-row">
    <button onclick="setProviderId()">Chains for none specific provider</button>
    <button onclick="setProviderId(383)">Chains for Pareto</button>
    <button onclick="setProviderId(404)">Chains for NordNet</button>
</div>
<div class="cell-row">
    <div class="cell cell--w6">
        <div class="cell-content" id="chainviewer"></div>
    </div>
</div>
```

