---
title: "Chart Historical"
kind: example
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widgets > Analytics widgets > Chart Historical"
example_config: {"title":"Chart Historical","description":"","modify_date":"2020-07-22T18:13:28","owner":"","tags":[]}
source_url: "https://docs.infrontfinance.com/examples/Widgets/Widgets/Analyticswidgets/ChartHistorical"
source_files: ["script.ts", "template.html", "config.json"]
---

# Chart Historical

## Script (script.ts)

```typescript
const opts = new Infinancials.ChartEstimatesHistoWidgetOptions();
opts.company = "90103EF";
opts.source = "INQ";
const widget = visual.ChartEstimatesHistoWidget("#chartEstimatesHisto", opts);
```

## Markup (template.html)

```html
<div class="cell-row">
	<div class="cell cell--w12">
		<div class="cell-content" id="chartEstimatesHisto"></div>
	</div>
</div>
```

