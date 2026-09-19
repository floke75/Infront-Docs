---
title: "Quote widget"
kind: example
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widgets > Market data widgets > Quote widget"
description: "Displays a quote widget for a given instrument using QuoteWidgetOptions."
tags: ["quote-widget", "QuoteWidgetOptions", "widgets", "examples", "wtk", "requests"]
example_config: {"title":"Quote widget","description":"Displays a quote widget for a given instrument using QuoteWidgetOptions.","modify_date":"2020-10-29T12:57:27","owner":"","tags":["quote-widget","QuoteWidgetOptions","widgets","examples","wtk","requests"]}
source_url: "https://docs.infrontfinance.com/examples/Widgets/Widgets/Marketdatawidgets/Quotewidget"
source_files: ["script.ts", "template.html", "config.json"]
---

# Quote widget

Displays a quote widget for a given instrument using QuoteWidgetOptions.

## Script (script.ts)

```typescript
const opts = new Infront.QuoteWidgetOptions();
opts.instrument = new Infront.Instrument(26, "BMW");
opts.name = "TICKER";
const widget = infront.quoteWidget("#quoteWidget", opts);
```

## Markup (template.html)

```html
<div class="cell-row" id="quoteWidget"></div>
```

