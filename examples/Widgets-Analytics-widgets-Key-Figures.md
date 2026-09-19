---
title: "Key Figures"
kind: example
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widgets > Analytics widgets > Key Figures"
description: "Displays a key figures widget using AnalyticsKeyFiguresWidgetOptions for a given instrument."
tags: ["key-figures-widget", "AnalyticsKeyFiguresWidgetOptions", "widgets", "examples", "wtk", "requests"]
example_config: {"title":"Key Figures","description":"Displays a key figures widget using AnalyticsKeyFiguresWidgetOptions for a given instrument.","modify_date":"2025-12-08T12:27:48","owner":"","tags":["key-figures-widget","AnalyticsKeyFiguresWidgetOptions","widgets","examples","wtk","requests"]}
source_url: "https://docs.infrontfinance.com/examples/Widgets/Widgets/Analyticswidgets/KeyFigures"
source_files: ["script.ts", "template.html", "config.json"]
---

# Key Figures

Displays a key figures widget using AnalyticsKeyFiguresWidgetOptions for a given instrument.

## Script (script.ts)

```typescript
const opts = new Infront.AnalyticsKeyFiguresWidgetOptions({
    instrument: { ticker: 'BMW', feed: 26 },
    fundamentalSource: 'MORNINGSTAR',
    estimateSource: 'STANDARD_AND_POORS',
    showLtmCheckbox: true,
    showFundamentalPeriodSelectDropdown: true,
    showEstimatePeriodSelectDropdown: true,
    showReportTypeSwitch: true,
    availableReportTypes: ['ANNUAL', 'QUARTERLY'],
    fundamentalPeriodSelectDropdownPeriods: {
        ANNUAL: [0, 1, 2, 3, 4],
        QUARTERLY: [0, 1, 2, 4],
    },
    estimatePeriodSelectDropdownPeriods: {
        ANNUAL: [0, 1, 2, 3],
        QUARTERLY: [0, 1, 2, 4],
    },
    onFundamentalPeriodCountChanged: (fundamentalPeriodCount) => {
        console.log('[AnalyticsKeyFiguresWidget] onFundamentalPeriodCountChanged', { fundamentalPeriodCount });
    },
    onEstimatePeriodCountChanged: (estimatePeriodCount) => {
        console.log('[AnalyticsKeyFiguresWidget] onEstimatePeriodCountChanged', { estimatePeriodCount });
    },
    onShowLTMChanged: (showLTM) => {
        console.log('[AnalyticsKeyFiguresWidget] onShowLTMChanged', { showLTM });
    },
    onReportTypeChanged: (reportPeriodType) => {
        console.log('[AnalyticsKeyFiguresWidget] onReportTypeChanged', { reportPeriodType });
    },
});

const widget = infront.analyticsKeyFiguresWidget('widget1', opts);
```

## Markup (template.html)

```html
<div class="cell-row">
    <div class="cell cell--w12">
        <div class="cell-content" id="widget1"></div>
    </div>
</div>
```

