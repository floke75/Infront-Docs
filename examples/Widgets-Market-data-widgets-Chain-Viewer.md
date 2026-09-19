---
title: "Chain Viewer"
kind: example
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widgets > Market data widgets > Chain Viewer"
description: "Displays a quote list widget for viewing instrument chains using QuoteListWidgetOptions."
tags: ["quote-list-widget", "QuoteListWidgetOptions", "widgets", "examples", "wtk", "requests"]
example_config: {"title":"Chain Viewer","description":"Displays a quote list widget for viewing instrument chains using QuoteListWidgetOptions.","modify_date":"2020-10-13T07:13:44","owner":"","tags":["quote-list-widget","QuoteListWidgetOptions","widgets","examples","wtk","requests"]}
source_url: "https://docs.infrontfinance.com/examples/Widgets/Widgets/Marketdatawidgets/ChainViewer"
source_files: ["script.ts", "template.html", "config.json"]
---

# Chain Viewer

Displays a quote list widget for viewing instrument chains using QuoteListWidgetOptions.

## Script (script.ts)

```typescript
const opts = new Infront.QuoteListWidgetOptions();
opts.columns = ["TICKER", "FULL_NAME", "LAST", "CHANGE"];
opts.sortable = true;
opts.enableChangeStatusColors = true;
opts.chains = [{
    "feed":15,
    "name":"NAS100_MANUAL",
    "description":"Nasdaq 100"
},{
    "feed":26,
    "name":"DAX",
    "description":"DAX Constituents"
}];
opts.useChains = true;
opts.defaultChain = "DAX";
const widget = infront.quoteList("#chainviewer", opts);
```

## Markup (template.html)

```html
<div class="cell-row">
	<div class="cell cell--w12">
		<div id="chainviewer" class="cell-content"></div>
	</div>
</div>
```

