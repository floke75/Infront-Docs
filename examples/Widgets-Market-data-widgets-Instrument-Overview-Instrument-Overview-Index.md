---
title: "Instrument Overview Index"
kind: example
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widgets > Market data widgets > Instrument Overview > Instrument Overview Index"
description: "Displays an index instrument overview widget using InstrumentOverviewWidgetOptions for a given instrument."
tags: ["instrument-overview-widget", "InstrumentOverviewWidgetOptions", "Instrument", "widgets", "examples", "wtk", "requests", "index"]
example_config: {"title":"Instrument Overview Index","description":"Displays an index instrument overview widget using InstrumentOverviewWidgetOptions for a given instrument.","modify_date":"2025-12-20T00:00:00","owner":"","tags":["instrument-overview-widget","InstrumentOverviewWidgetOptions","Instrument","widgets","examples","wtk","requests","index"]}
source_url: "https://docs.infrontfinance.com/examples/Widgets/Widgets/Marketdatawidgets/InstrumentOverview/InstrumentOverviewIndex"
source_files: ["script.ts", "template.html", "config.json"]
---

# Instrument Overview Index

Displays an index instrument overview widget using InstrumentOverviewWidgetOptions for a given instrument.

## Script (script.ts)

```typescript
const opts = new Infront.InstrumentOverviewWidgetOptions();
opts.instrument = new Infront.Instrument(17921, "OMXS30");
const widget = infront.instrumentOverviewWidget("#instrument-overview", opts);
```

## Markup (template.html)

```html
<div class="cell-row">
	<div class="cell cell--w6">
		<div id="instrument-overview" class="cell-content"></div>
	</div>
</div>
```

