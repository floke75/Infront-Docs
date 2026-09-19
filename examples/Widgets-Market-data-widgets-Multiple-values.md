---
title: "Multiple values"
kind: example
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widgets > Market data widgets > Multiple values"
description: "Displays an instrument values widget with customizable layout and fields."
tags: ["instrument-values-widget", "InstrumentValuesWidgetOptions", "widgets", "examples", "wtk", "requests"]
example_config: {"title":"Multiple values","description":"","modify_date":"2020-10-13T07:16:41","owner":"","tags":["instrument-values-widget","InstrumentValuesWidgetOptions","widgets","examples","wtk","requests"]}
source_url: "https://docs.infrontfinance.com/examples/Widgets/Widgets/Marketdatawidgets/Multiplevalues"
source_files: ["script.ts", "template.html", "config.json"]
---

# Multiple values

Displays an instrument values widget with customizable layout and fields.

## Script (script.ts)

```typescript
const opts = new Infront.InstrumentValuesWidgetOptions();
opts.widgetTitle = "Bayerische Motoren Werke AG (BMW)";
opts.instrument = new Infront.Instrument(26, "BMW");
opts.layout = Infront.MultipleValuesWidgetLayout.VERTICAL;
opts.fields = ["FULL_NAME", "CURRENCY", "SEGMENT", "DATE"];

const widget = infront.instrumentValuesWidget("#instrumentValues", opts);
```

## Markup (template.html)

```html
<div class="cell-row">
	<div class="cell cell--w4">
		<div id="instrumentValues" class="cell-content"></div>
	</div>
</div>
```

