---
title: "Fund Top Holdings"
kind: example
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widgets > Market data widgets > Fund Top Holdings"
description: "Displays a fund top holdings widget for a given instrument."
tags: ["fund-top-holdings-widget", "FundTopHoldingsWidgetOptions", "widgets", "examples", "wtk", "requests"]
example_config: {"title":"Fund Top Holdings","description":"Displays a fund top holdings widget for a given instrument.","modify_date":"2025-12-20T00:00:00","owner":"","tags":["fund-top-holdings-widget","FundTopHoldingsWidgetOptions","widgets","examples","wtk","requests"]}
source_url: "https://docs.infrontfinance.com/examples/Widgets/Widgets/Marketdatawidgets/FundTopHoldings"
source_files: ["script.ts", "template.html", "config.json"]
---

# Fund Top Holdings

Displays a fund top holdings widget for a given instrument.

## Script (script.ts)

```typescript
/* You need access to a funds feed to see working funds widgets
   in action. If your user does not have access and requires it, 
   please contact Infront.
*/

const opts = new Infront.FundTopHoldingsWidgetOptions();
opts.instrument = new Infront.Instrument(2260, "0P00000MVB");
const widget = infront.fundTopHoldingsWidget("#holdings", opts);
```

## Markup (template.html)

```html
<div class="cell-row">
  <div class="cell cell--w6">
	  <div id="holdings" class="cell-content"></div>
  </div>
</div>
```

