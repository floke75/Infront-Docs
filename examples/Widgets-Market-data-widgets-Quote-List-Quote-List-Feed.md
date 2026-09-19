---
title: "Quote List Feed"
kind: example
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widgets > Market data widgets > Quote List > Quote List Feed"
example_config: {"title":"Quote List Feed","description":"","modify_date":"2023-04-28T07:32:06","owner":"","tags":[]}
source_url: "https://docs.infrontfinance.com/examples/Widgets/Widgets/Marketdatawidgets/QuoteList/QuoteListFeed"
source_files: ["script.ts", "template.html", "config.json"]
---

# Quote List Feed

## Script (script.ts)

```typescript
const opts = new Infront.QuoteListWidgetOptions();
opts.feed = 26;
opts.sortable = true;
opts.enableChangeStatusColors = true;
opts.showFilters = false;
opts.instrumentTypes = ["STOCK"];
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
  <p>This example shows how to use feed as a data source of QuoteListWidget. QuoteListWidget will list all instruments in the given feed.</p>
</div>

<div class="cell-content  cell-row" id="quotelist"></div>
```

