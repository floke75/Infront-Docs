---
title: "Fund risk level"
kind: example
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widgets > Market data widgets > Fund risk level"
description: "Displays a fund risk level widget for a given instrument."
tags: ["fund-risk-level-widget", "FundRiskLevelWidgetOptions", "widgets", "examples", "wtk", "requests"]
example_config: {"title":"Fund risk level","description":"Displays a fund risk level widget for a given instrument.","modify_date":"2025-12-20T00:00:00","owner":"","tags":["fund-risk-level-widget","FundRiskLevelWidgetOptions","widgets","examples","wtk","requests"]}
source_url: "https://docs.infrontfinance.com/examples/Widgets/Widgets/Marketdatawidgets/Fundrisklevel"
source_files: ["script.ts", "template.html", "config.json"]
---

# Fund risk level

Displays a fund risk level widget for a given instrument.

## Script (script.ts)

```typescript
/* You need access to a funds feed to see working funds widgets
   in action. If your user does not have access and requires it, 
   please contact Infront.
*/

const opts = new Infront.FundRiskLevelWidgetOptions();
opts.instrument = new Infront.Instrument(2260, "0P00000MVB");
const widget = infront.fundRiskLevelWidget("#fundRiskLevel", opts);
```

## Markup (template.html)

```html
<div class="cell-row">
  	<div class="cell  cell--w12">
		<div id="fundRiskLevel" class="cell-content"></div>
	</div>
</div>
```

