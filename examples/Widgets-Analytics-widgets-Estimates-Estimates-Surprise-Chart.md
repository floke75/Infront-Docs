---
title: "Estimates Surprise Chart"
kind: example
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widgets > Analytics widgets > Estimates > Estimates Surprise Chart"
example_config: {"title":"Estimates Surprise Chart","description":"","modify_date":"2025-12-08T13:26:47","owner":"","tags":[]}
source_url: "https://docs.infrontfinance.com/examples/Widgets/Widgets/Analyticswidgets/Estimates/EstimatesSurpriseChart"
source_files: ["script.ts", "template.html", "config.json"]
---

# Estimates Surprise Chart

## Script (script.ts)

```typescript
const opts = new Infront.AnalyticsEstimatesSurpriseChartWidgetOptions({
    instrument: { ticker: 'DNB', feed: 18177 },
    estimateSource: 'STANDARD_AND_POORS',
    showKeyFiguresDropdown: true,
    // selectedKeyFigure: 'NET_PROFIT',
    // fields: ['NET_PROFIT', 'NET_SALES']
    // fundamentalSource: 'MORNINGSTAR'
});

const widget = infront.analyticsEstimatesSurpriseChartWidget( 'widget1', opts );
```

## Markup (template.html)

```html
<div class="cell-row">
    <div class="cell cell--w12">
        <div class="cell-content" id="widget1" style="width: 500px; height: 400px"></div>
    </div>
</div>
```

