---
title: "Search"
kind: example
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widgets > Core Widgets > Search"
description: "Provides a search box for instruments with customizable options and selection handling."
tags: ["search-widget", "SearchBoxOptions", "widgets", "examples", "wtk", "requests"]
example_config: {"title":"Search","description":"Provides a search box for instruments with customizable options and selection handling.","modify_date":"2021-05-12T13:35:22","owner":"","tags":["search-widget","SearchBoxOptions","widgets","examples","wtk","requests"]}
source_url: "https://docs.infrontfinance.com/examples/Widgets/Widgets/CoreWidgets/Search"
source_files: ["script.ts", "template.html", "config.json"]
---

# Search

Provides a search box for instruments with customizable options and selection handling.

## Script (script.ts)

```typescript
var sbOpts = new Infront.SearchBoxOptions();
sbOpts.enableMultiSelect = false;
sbOpts.placeholder = "Search instruments";
sbOpts.itemTypes = ["INSTRUMENT"];
sbOpts.showAfterSelect = "TICKER";
sbOpts.instrumentSelected = function (instrument) {
//Do something on instrument selected
};
infront.searchWidget("#editSearch", sbOpts);
```

## Markup (template.html)

```html
<div id="editSearch"></div>
```

