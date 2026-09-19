---
title: "Fund Allocation"
kind: example
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widgets > Market data widgets > Fund Allocation"
description: "Displays a fund allocation widget for a given instrument using FundAllocationWidgetOptions."
tags: ["fund-allocation-widget", "FundAllocationWidgetOptions", "widgets", "examples", "wtk", "requests"]
example_config: {"title":"Fund Allocation","description":"Displays a fund allocation widget for a given instrument using FundAllocationWidgetOptions.","modify_date":"2020-12-15T09:58:33","owner":"","tags":["fund-allocation-widget","FundAllocationWidgetOptions","widgets","examples","wtk","requests"]}
source_url: "https://docs.infrontfinance.com/examples/Widgets/Widgets/Marketdatawidgets/FundAllocation"
source_files: ["script.ts", "template.html", "config.json"]
---

# Fund Allocation

Displays a fund allocation widget for a given instrument using FundAllocationWidgetOptions.

## Script (script.ts)

```typescript
/* You need access to a funds feed to see working funds widgets
   in action. If your user does not have access and requires it, 
   please contact Infront.
*/

const opts = new Infront.FundAllocationWidgetOptions();
opts.instrument = new Infront.Instrument(2260, "0P00000MVB");
const widget = infront.fundAllocationWidget("#fundAllocation", opts);
```

## Markup (template.html)

```html
<div class="cell-row">
	<div class="cell cell--w6">
		<div id="fundAllocation" class="cell-content"></div>
	</div>
</div>
```

