---
title: "Risk Metrics"
kind: example
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widgets > Analytics widgets > Risk Metrics"
description: "Displays a risk metrics widget using AnalyticsRiskMetricsWidget for a given instrument."
tags: ["risk-metrics-widget", "AnalyticsRiskMetricsWidget", "widgets", "examples", "wtk", "requests"]
example_config: {"title":"Risk Metrics","description":"Displays a risk metrics widget using AnalyticsRiskMetricsWidget for a given instrument.","modify_date":"2025-12-08T12:28:11","owner":"","tags":["risk-metrics-widget","AnalyticsRiskMetricsWidget","widgets","examples","wtk","requests"]}
source_url: "https://docs.infrontfinance.com/examples/Widgets/Widgets/Analyticswidgets/RiskMetrics"
source_files: ["script.ts", "template.html", "config.json"]
---

# Risk Metrics

Displays a risk metrics widget using AnalyticsRiskMetricsWidget for a given instrument.

## Script (script.ts)

```typescript
const widget = infront.analyticsRiskMetricsWidget(
    'widget1', {
    instrument: { ticker: 'BMW', feed: 26 },
    minimumMarketCap: { currency: 'EUR', value: 5000000 },
    minColumnGroupWidth: 152,
    id: 'analyticsWidgetId1',
    onInstrumentClicked: (symbol) => {
        console.log('AnalyticsRiskMetricsWidget: ', symbol)
    },
    maxPeerCompanies: 20,
    onColumnsChanged: (columns) => {
        console.log('Columns changed:', columns);
    },
    onRegionSelected: (region) => {
        console.log('Region selected:', region);
    },
    onSectorSelected: (sector) => {
        console.log('Sector selected:', sector);
    },
    onCustomPeriodColumnsChanged: (customPeriodColumns) => {
        console.log('Custom period columns changed:', customPeriodColumns);
    },
});
```

## Markup (template.html)

```html
<div class="cell cell--w12">
        <div class="cell-content">
            <div id="widget1" style="width: 100%; height: 533px"></div>
        </div>
    </div>
</div>
```

