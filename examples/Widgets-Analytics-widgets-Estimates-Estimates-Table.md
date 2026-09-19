---
title: "Estimates Table"
kind: example
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widgets > Analytics widgets > Estimates > Estimates Table"
description: "Displays an analytics estimates table widget for financial instruments, supporting multiple report types and period counts. Integrates with SDK and supports custom event handling."
tags: ["analyticsEstimatesTableWidget", "Analyticswidgets", "widgets", "examples", "wtk", "requests", "sdk"]
example_config: {"title":"Estimates Table","description":"Displays an analytics estimates table widget for financial instruments, supporting multiple report types and period counts. Integrates with SDK and supports custom event handling.","modify_date":"2025-12-08T13:27:08","owner":"","tags":["analyticsEstimatesTableWidget","Analyticswidgets","widgets","examples","wtk","requests","sdk"]}
source_url: "https://docs.infrontfinance.com/examples/Widgets/Widgets/Analyticswidgets/Estimates/EstimatesTable"
source_files: ["script.ts", "template.html", "config.json"]
---

# Estimates Table

Displays an analytics estimates table widget for financial instruments, supporting multiple report types and period counts. Integrates with SDK and supports custom event handling.

## Script (script.ts)

```typescript
const widget = infront.analyticsEstimatesTableWidget('widget1', {
    instrument: { isin: 'SE0011090547' },
    estimateSource: 'INFRONT',
    reportTypes: ['ANNUAL', 'INTERIM'],
    showEmptyGroups: false,
    historicalPeriodCount: {
        ANNUAL: 4,
        QUARTERLY: 4,
        INTERIM: 4,
        SEMI_ANNUAL: 4,
    },
    futurePeriodCount: {
        ANNUAL: 3,
        QUARTERLY: 2,
        INTERIM: 2,
        SEMI_ANNUAL: 1,
    },
    showOpenChartBtnInRow: false,
    onOpenChartBtnClicked: (code) => {
        console.log('[onOpenChartBtnClicked] called with', {code});
    }
});
```

## Markup (template.html)

```html
<div class="cell-row">
    <div class="cell cell--w12">
        <div class="cell-content" id="widget1" style="height: 520px;"></div>
    </div>
</div>
```

