---
title: "Quote List Chains Viewer"
kind: example
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widgets > Market data widgets > Quote List > Quote List Chains Viewer"
example_config: {"title":"Quote List Chains Viewer","description":"","modify_date":"2023-04-28T07:32:17","owner":"","tags":[]}
source_url: "https://docs.infrontfinance.com/examples/Widgets/Widgets/Marketdatawidgets/QuoteList/QuoteListChainsViewer"
source_files: ["script.ts", "template.html", "config.json"]
---

# Quote List Chains Viewer

## Script (script.ts)

```typescript
const opts = new Infront.QuoteListWidgetOptions();
opts.useChains = true;
opts.chains = [
  {
    "feed":15,
    "name":"NAS100_MANUAL",
    "description":"Nasdaq 100"
  },
  {
    "feed":26,
    "name":"DAX",
    "description":"DAX Constituents"
  }];

//Optional configurations
opts.defaultChain = "DAX"; 
opts.sortable = true;
opts.chainButtonTitle = "Click to switch"; 
opts.columns = [ 
  {
    name: "TICKER",
    hover: "FULL_NAME",
    flag: true
  },
  "BID",
  "ASK",
  "OPEN",
  "Last"
];

const widget = infront.quoteList("#quotelist", opts);
```

## Markup (template.html)

```html
<div class="cell-content cell-row">
  <h1>Description</h1>
  <p>This example shows how to use a QuoteListWidget as a chain viewer.</p>
</div>

<div class="cell-content  cell-row" id="quotelist"></div>
```

