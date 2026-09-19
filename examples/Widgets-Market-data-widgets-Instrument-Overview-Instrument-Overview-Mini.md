---
title: "Instrument Overview Mini"
kind: example
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widgets > Market data widgets > Instrument Overview > Instrument Overview Mini"
description: "Displays a mini instrument overview widget using InstrumentOverviewWidgetOptions for a given instrument."
tags: ["instrument-overview-widget", "InstrumentOverviewWidgetOptions", "Instrument", "widgets", "examples", "wtk", "requests", "mini"]
example_config: {"title":"Instrument Overview Mini","description":"Displays a mini instrument overview widget using InstrumentOverviewWidgetOptions for a given instrument.","modify_date":"2025-12-20T00:00:00","owner":"","tags":["instrument-overview-widget","InstrumentOverviewWidgetOptions","Instrument","widgets","examples","wtk","requests","mini"]}
source_url: "https://docs.infrontfinance.com/examples/Widgets/Widgets/Marketdatawidgets/InstrumentOverview/InstrumentOverviewMini"
source_files: ["script.ts", "template.html", "config.json"]
---

# Instrument Overview Mini

Displays a mini instrument overview widget using InstrumentOverviewWidgetOptions for a given instrument.

## Script (script.ts)

```typescript
const opts = new Infront.InstrumentOverviewWidgetOptions();
opts.instrument = new Infront.Instrument(17921, "VOLV B");
opts.layout = "mini";
const widget = infront.instrumentOverviewWidget("#instrument-overview", opts);
```

## Markup (template.html)

```html
<div class="cell-row">
	<div class="cell cell--w3">
		<div id="instrument-overview" class="cell-content"></div>
	</div>
</div>
```

