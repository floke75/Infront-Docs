---
title: "Chart"
kind: example
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widgets > Market data widgets > Chart"
example_config: {"title":"Chart","description":"Displays a chart widget using ChartWidgetOptions for a single instrument.","modify_date":"2025-12-20T00:00:00","owner":"","tags":["chart-widget","ChartWidgetOptions","widgets","examples","wtk","requests"]}
source_url: "https://docs.infrontfinance.com/examples/Widgets/Widgets/Marketdatawidgets/Chart"
source_files: ["script.ts", "template.html", "config.json"]
---

# Chart

## Script (script.ts)

```typescript
const opts = new Infront.ChartWidgetOptions();

const widget = infront.chartWidget('new-chartwidget', opts);
```

## Markup (template.html)

```html
<div class="cell-row">
  	<div class="cell cell--w12">
    	 	<div class="cell-content">
			<div id="new-chartwidget" style="height:300px"</div>
      		<div>  
	</div>
</div>
```

