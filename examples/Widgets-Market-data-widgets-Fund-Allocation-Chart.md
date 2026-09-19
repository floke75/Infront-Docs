---
title: "Fund Allocation Chart"
kind: example
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widgets > Market data widgets > Fund Allocation Chart"
description: "Displays a fund allocation pie chart widget for a set of instruments."
tags: ["fund-allocation-pie-chart-widget", "FundAllocationPieChartWidgetOptions", "widgets", "examples", "wtk", "requests"]
example_config: {"title":"Fund Allocation Chart","description":"Displays a fund allocation pie chart widget for a set of instruments.","modify_date":"2025-12-20T00:00:00","owner":"","tags":["fund-allocation-pie-chart-widget","FundAllocationPieChartWidgetOptions","widgets","examples","wtk","requests"]}
source_url: "https://docs.infrontfinance.com/examples/Widgets/Widgets/Marketdatawidgets/FundAllocationChart"
source_files: ["script.ts", "template.html", "config.json"]
---

# Fund Allocation Chart

Displays a fund allocation pie chart widget for a set of instruments.

## Script (script.ts)

```typescript
/* You need access to a funds feed to see working funds widgets
   in action. If your user does not have access and requires it, 
   please contact Infront.
*/

const opts = new Infront.FundAllocationPieChartWidgetOptions();
opts.instruments = [
     new Infront.Instrument(2260, "0P00000MVB")
];
opts.allocationType = "Country";
opts.innerSize = "33%";
opts.legend = true;
const widget = infront.fundAllocationPieChartWidget("#fundAllocationPie", opts);
```

## Markup (template.html)

```html
<div id="fundAllocationPie"></div>
```

