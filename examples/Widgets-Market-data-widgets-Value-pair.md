---
title: "Value pair"
kind: example
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widgets > Market data widgets > Value pair"
description: "Displays a value pair widget using ValuePairWidgetOptions for a given instrument, comparing two fields side by side."
tags: ["value-pair-widget", "ValuePairWidgetOptions", "widgets", "examples", "wtk", "requests"]
example_config: {"title":"Value pair","description":"Displays a value pair widget using ValuePairWidgetOptions for a given instrument, comparing two fields side by side.","modify_date":"2020-10-13T07:17:30","owner":"","tags":["value-pair-widget","ValuePairWidgetOptions","widgets","examples","wtk","requests"]}
source_url: "https://docs.infrontfinance.com/examples/Widgets/Widgets/Marketdatawidgets/Valuepair"
source_files: ["script.ts", "template.html", "config.json"]
---

# Value pair

Displays a value pair widget using ValuePairWidgetOptions for a given instrument, comparing two fields side by side.

## Script (script.ts)

```typescript
const opts = new Infront.ValuePairWidgetOptions();
opts.instrument = new Infront.Instrument(26, "BMW");
opts.leftField = "HIGH";
opts.rightField = "LOW";
const widget = infront.valuePairWidget("#valuePair", opts);
```

## Markup (template.html)

```html
<div class="cell-row">
	<div class="cell cell--w3">
		<div id="valuePair" class="cell-content"></div>
	</div>
</div>
```

