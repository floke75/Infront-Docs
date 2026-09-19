---
title: "Historical Overview"
kind: example
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widgets > Market data widgets > Historical Overview"
description: "Displays a historical overview widget for an instrument with customizable periods."
tags: ["historical-overview-widget", "HistoricalOverviewWidgetOptions", "widgets", "examples", "wtk", "requests"]
example_config: {"title":"Historical Overview","description":"Displays a historical overview widget for an instrument with customizable periods.","modify_date":"2025-12-20T00:00:00","owner":"","tags":["historical-overview-widget","HistoricalOverviewWidgetOptions","widgets","examples","wtk","requests"]}
source_url: "https://docs.infrontfinance.com/examples/Widgets/Widgets/Marketdatawidgets/HistoricalOverview"
source_files: ["script.ts", "template.html", "config.json"]
---

# Historical Overview

Displays a historical overview widget for an instrument with customizable periods.

## Script (script.ts)

```typescript
const opts = new Infront.HistoricalOverviewWidgetOptions();
opts.instrument = new Infront.Instrument(26, "BWM");
opts.barPeriod = InfrontConstants.HistoricalPeriodes.ONE_WEEK;
opts.historicFields = [
	InfrontConstants.HistoricalPeriodes.ONE_WEEK,
	InfrontConstants.HistoricalPeriodes.ONE_MONTH,
	InfrontConstants.HistoricalPeriodes.THREE_MONTH,
    InfrontConstants.HistoricalPeriodes.SIX_MONTH,
    InfrontConstants.HistoricalPeriodes.ONE_YEAR
 ];
 const widget = infront.historicalOverviewWidget("#historical", opts);
```

## Markup (template.html)

```html
<div class="cell-row">
	<div class="cell  cell--w6">
		<div id="historical" class="cell-content"></div>
	</div>
</div>
```

