---
title: "Chart mutliples"
kind: example
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widgets > Analytics widgets > Chart mutliples"
example_config: {"title":"Chart mutliples","description":"","modify_date":"2020-07-22T18:14:51","owner":"","tags":[]}
source_url: "https://docs.infrontfinance.com/examples/Widgets/Widgets/Analyticswidgets/Chartmutliples"
source_files: ["script.ts", "template.html", "config.json"]
---

# Chart mutliples

## Script (script.ts)

```typescript
const opts = new Infinancials.MultiplesChartWidgetOptions();
opts.company = "90103EF";
opts.source = "INQ";
opts.currency = -1;
opts.displayLegend = false;
opts.highchartsOptions = {
    legend: {
        enabled: false
    },
    colors:["#057085","#4dc46d","#79d6f2"]
};
const widget = visual.MultiplesChartWidget("#multiplesChart", opts);
```

## Markup (template.html)

```html
<div class="cell-row">
	<div class="cell cell--w12">
		<div class="cell-content" id="multiplesChart"></div>
	</div>
</div>
```

