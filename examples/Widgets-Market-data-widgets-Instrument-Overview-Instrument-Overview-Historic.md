---
title: "Instrument Overview Historic"
kind: example
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widgets > Market data widgets > Instrument Overview > Instrument Overview Historic"
description: "Displays a historic instrument overview widget using InstrumentOverviewWidgetOptions for a given instrument."
tags: ["instrument-overview-widget", "InstrumentOverviewWidgetOptions", "Instrument", "widgets", "examples", "wtk", "requests", "historic"]
example_config: {"title":"Instrument Overview Historic","description":"Displays a historic instrument overview widget using InstrumentOverviewWidgetOptions for a given instrument.","modify_date":"2025-12-20T00:00:00","owner":"","tags":["instrument-overview-widget","InstrumentOverviewWidgetOptions","Instrument","widgets","examples","wtk","requests","historic"]}
source_url: "https://docs.infrontfinance.com/examples/Widgets/Widgets/Marketdatawidgets/InstrumentOverview/InstrumentOverviewHistoric"
source_files: ["script.ts", "template.html", "config.json"]
---

# Instrument Overview Historic

Displays a historic instrument overview widget using InstrumentOverviewWidgetOptions for a given instrument.

## Script (script.ts)

```typescript
const opts = new Infront.InstrumentOverviewWidgetOptions();
opts.instrument = new Infront.Instrument(17921, "VOLV B");
opts.layout = "historic";
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

