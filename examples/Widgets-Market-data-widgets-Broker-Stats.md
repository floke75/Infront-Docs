---
title: "Broker Stats"
kind: example
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widgets > Market data widgets > Broker Stats"
description: "Displays a broker stats widget for a given instrument using BrokerstatsWidgetOptions."
tags: ["broker-stats-widget", "BrokerstatsWidgetOptions", "widgets", "examples", "wtk", "requests"]
example_config: {"title":"Broker Stats","description":"Displays a broker stats widget for a given instrument using BrokerstatsWidgetOptions.","modify_date":"2021-06-07T07:43:52","owner":"","tags":["broker-stats-widget","BrokerstatsWidgetOptions","widgets","examples","wtk","requests"]}
source_url: "https://docs.infrontfinance.com/examples/Widgets/Widgets/Marketdatawidgets/BrokerStats"
source_files: ["script.ts", "template.html", "config.json"]
---

# Broker Stats

Displays a broker stats widget for a given instrument using BrokerstatsWidgetOptions.

## Script (script.ts)

```typescript
const opts = new Infront.BrokerstatsWidgetOptions();
opts.instrument = new Infront.Instrument(17921, "ABB");
opts.columns = ["NAME", "FULLNAME", "BUY_VALUE", "SELL_VALUE", "TOTAL_VALUE"];
opts.period = InfrontConstants.BrokerStatsPeriodes.INTRADAY;
opts.sortable = true;
opts.defaultSortedColumn = 4;
opts.enablePeriodSelector = true;

const widget = infront.brokerstatsWidget("#bstats", opts);
```

## Markup (template.html)

```html
<div class="cell-row">
	<div class="cell cell--w12">
		<div id="bstats" class="cell-content"></div>
	</div>
</div>
```

