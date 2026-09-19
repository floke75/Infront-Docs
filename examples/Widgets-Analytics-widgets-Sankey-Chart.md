---
title: "Sankey Chart"
kind: example
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widgets > Analytics widgets > Sankey Chart"
description: "Displays a Sankey chart widget using AnalyticsSankeyChartWidgetOptions for a given instrument."
tags: ["sankey-chart-widget", "AnalyticsSankeyChartWidgetOptions", "widgets", "examples", "wtk", "requests"]
example_config: {"title":"Sankey Chart","description":"Displays a Sankey chart widget using AnalyticsSankeyChartWidgetOptions for a given instrument.","modify_date":"2025-12-08T12:28:19","owner":"","tags":["sankey-chart-widget","AnalyticsSankeyChartWidgetOptions","widgets","examples","wtk","requests"]}
source_url: "https://docs.infrontfinance.com/examples/Widgets/Widgets/Analyticswidgets/SankeyChart"
source_files: ["script.ts", "template.html", "config.json"]
---

# Sankey Chart

Displays a Sankey chart widget using AnalyticsSankeyChartWidgetOptions for a given instrument.

## Script (script.ts)

```typescript
const opts = new Infront.AnalyticsSankeyChartWidgetOptions({
    instrument: { ticker: 'BMW', feed: 26 },
    showYearSelectDropdown: true,
    fundamentalSource : 'MORNINGSTAR'
});

const widget = infront.analyticsSankeyChartWidget( 'widget1', opts );
```

## Markup (template.html)

```html
<div class="cell-row">
    <div class="cell cell--w12">
        <div class="cell-content">
            <div id="widget1" style="width: 100%; height: 533px"></div>
        </div>
    </div>
</div>
```

