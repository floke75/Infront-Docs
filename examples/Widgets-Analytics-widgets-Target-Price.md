---
title: "Target Price"
kind: example
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widgets > Analytics widgets > Target Price"
description: "Displays a target price widget for an instrument with chart and table using AnalyticsTargetPriceWidget."
tags: ["target-price-widget", "AnalyticsTargetPriceWidget", "widgets", "examples", "wtk", "requests"]
example_config: {"title":"Target Price","description":"Displays a target price widget for an instrument with chart and table using AnalyticsTargetPriceWidget.","modify_date":"2025-12-08T12:28:35","owner":"","tags":["target-price-widget","AnalyticsTargetPriceWidget","widgets","examples","wtk","requests"]}
source_url: "https://docs.infrontfinance.com/examples/Widgets/Widgets/Analyticswidgets/TargetPrice"
source_files: ["script.ts", "template.html", "config.json"]
---

# Target Price

Displays a target price widget for an instrument with chart and table using AnalyticsTargetPriceWidget.

## Script (script.ts)

```typescript
const widget = infront.analyticsTargetPriceWidget('widget1', {
    instrument: { ticker: 'DNB', feed: 18177 },
    showChart: true,
    showTable: true,
    spacingLeft: 0,
    spacingRight: 0,
    spacingBottom: 5,
    estimateSource: 'INFRONT',
    hasContentCallback: (hasContent) => console.log('AnalyticsTargetPriceWidget hasContent', hasContent),
});
```

## Markup (template.html)

```html
<div class="cell-row">
    <div class="cell cell--w12">
        <div class="cell-content" id="widget1"></div>
    </div>
</div>
```

