---
title: "Estimates Bar Chart"
kind: example
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widgets > Analytics widgets > Estimates > Estimates Bar Chart"
example_config: {"title":"Estimates Bar Chart","description":"","modify_date":"2025-12-08T13:26:20","owner":"","tags":[]}
source_url: "https://docs.infrontfinance.com/examples/Widgets/Widgets/Analyticswidgets/Estimates/EstimatesBarChart"
source_files: ["script.ts", "template.html", "config.json"]
---

# Estimates Bar Chart

## Script (script.ts)

```typescript
const widget = infront.analyticsEstimatesBarChartWidget('widget1', {
    instrument: { ticker: 'BMW', feed: 26 },
    selectedField: 'NET_SALES',
    estimateSource: 'STANDARD_AND_POORS',
    showKeyFiguresDropdown: true,
    onFieldSelected(event) {
        console.log('Selected item', event);
    },
});
```

## Markup (template.html)

```html
<div class="cell-row">
    <div class="cell cell--w12">
        <div class="cell-content" id="widget1" style="width: 500px; height: 350px"></div>
    </div>
</div>
```

