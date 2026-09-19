---
title: "Mini Chart"
kind: example
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widgets > Analytics widgets > Mini Chart"
description: "Displays a mini chart widget using AnalyticsMiniChartWidgetOptions for key financial fields."
tags: ["mini-chart-widget", "AnalyticsMiniChartWidgetOptions", "widgets", "examples", "wtk", "requests"]
example_config: {"title":"Mini Chart","description":"Displays a mini chart widget using AnalyticsMiniChartWidgetOptions for key financial fields.","modify_date":"2025-12-08T12:27:56","owner":"","tags":["mini-chart-widget","AnalyticsMiniChartWidgetOptions","widgets","examples","wtk","requests"]}
source_url: "https://docs.infrontfinance.com/examples/Widgets/Widgets/Analyticswidgets/MiniChart"
source_files: ["script.ts", "template.html", "config.json"]
---

# Mini Chart

Displays a mini chart widget using AnalyticsMiniChartWidgetOptions for key financial fields.

## Script (script.ts)

```typescript
const opts = new Infront.AnalyticsMiniChartWidgetOptions({
    fields: [
        // absolute value fields:
        'NET_INCOME',
        'NET_SALES',
        // 'EBITDA',
        // percent value fields:
        'NET_PROFIT_MARGIN',
        // 'EBITDA_MARGIN',
    ],
    instrument: { ticker: 'BMW', feed: 26 },
    estimateSource: 'STANDARD_AND_POORS',
    fundamentalSource: 'MORNINGSTAR',
    showLtmCheckbox: true,
    showFundamentalPeriodSelectDropdown: true,
    showEstimatePeriodSelectDropdown: true,
    showReportTypeSwitch: true,
    availableReportTypes: ['ANNUAL', 'QUARTERLY'],
    fundamentalPeriodSelectDropdownPeriods: {
        ANNUAL: [0, 1, 2, 3, 4],
        QUARTERLY: [0, 1, 2, 4, 8],
        INTERIM: [0, 1, 2, 4, 8],
    },
    estimatePeriodSelectDropdownPeriods: {
        ANNUAL: [0, 1, 2, 3],
        QUARTERLY: [0, 1, 2, 4, 8],
        INTERIM: [0, 1, 2, 4, 8],
    },
    hasContentCallback: (hasContent) => console.log('AnalyticsMiniChartWidget hasContent', hasContent),
    onFundamentalPeriodCountChanged: (fundamentalPeriodCount) => {
        console.log('[AnalyticsMiniChartWidget] onFundamentalPeriodCountChanged', { fundamentalPeriodCount });
    },
    onEstimatePeriodCountChanged: (estimatePeriodCount) => {
        console.log('[AnalyticsMiniChartWidget] onEstimatePeriodCountChanged', { estimatePeriodCount });
    },
    onLtmPeriodCountChanged: (ltmPeriodCount) => {
        console.log('[AnalyticsMiniChartWidget] onLtmPeriodCountChanged', { ltmPeriodCount });
    },
    onReportTypeChanged: (reportPeriodType) => {
        console.log('[AnalyticsMiniChartWidget] onReportTypeChanged', { reportPeriodType });
    },
});

const widget = infront.analyticsMiniChartWidget('widget1', opts);
```

## Markup (template.html)

```html
<div class="cell-row">
    <div class="cell cell--w12">
        <div class="cell-content" id="widget1"></div>
    </div>
</div>
```

