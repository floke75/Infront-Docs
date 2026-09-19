---
title: "Quote List Pre-made"
kind: example
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widgets > Market data widgets > Quote List > Quote List Pre-made"
example_config: {"title":"Quote List Pre-made","description":"","modify_date":"2023-04-28T07:32:00","owner":"","tags":[]}
source_url: "https://docs.infrontfinance.com/examples/Widgets/Widgets/Marketdatawidgets/QuoteList/QuoteListPre-made"
source_files: ["script.ts", "template.html", "config.json"]
---

# Quote List Pre-made

## Script (script.ts)

```typescript
const opts = new Infront.QuoteListWidgetOptions();
opts.sortable = true;
opts.instruments = [
    new Infront.Instrument(26, "BMW"),
    new Infront.Instrument(26, "ADS"),
    new Infront.Instrument(26, "SAP"),
    new Infront.Instrument(26, "DTE"),
    new Infront.Instrument(26, "ALV")
];
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
  <p>This example shows how to pre add instruments to QuoteListWidget.</p>
</div>

<div class="cell-content  cell-row" id="quotelist"></div>
```

