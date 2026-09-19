---
title: "Instrument single value"
kind: example
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widgets > Market data widgets > Instrument single value"
description: "Displays a single value for an instrument with customizable options."
tags: ["instrument-single-value-widget", "InstrumentSingleValueWidgetOptions", "widgets", "examples", "wtk", "requests"]
example_config: {"title":"Instrument single value","description":"","modify_date":"2021-06-07T11:52:26","owner":"","tags":["instrument-single-value-widget","InstrumentSingleValueWidgetOptions","widgets","examples","wtk","requests"]}
source_url: "https://docs.infrontfinance.com/examples/Widgets/Widgets/Marketdatawidgets/Instrumentsinglevalue"
source_files: ["script.ts", "template.html", "config.json"]
---

# Instrument single value

Displays a single value for an instrument with customizable options.

## Script (script.ts)

```typescript
const opts = new Infront.InstrumentSingleValueWidgetOptions();
opts.decimals = 2;
opts.instrument = new Infront.Instrument(26, "BMW");
opts.name = "LAST";
const lastSingleValueWidget = infront.instrumentSingleValueWidget("#last", opts);

opts.name = "PCT_CHANGE";
const pctSingleValueWidget = infront.instrumentSingleValueWidget("#pct", opts);

opts.name="COUNTRY_OF_INCORPORATION"
opts.translate = (rowId, value) => {
    return `<div class="cell-flag  cell-flag-${value?.toLowerCase()}" title="${value}"></div>${opts.instrument.ticker}`
}
const countrySingleValueWidget = infront.instrumentSingleValueWidget("#country", opts);
```

## Markup (template.html)

```html
<div class="cell-content">
  <div id="country"></div>
  <div id="last"></div>
  <div id="pct"></div>
</div>
```

