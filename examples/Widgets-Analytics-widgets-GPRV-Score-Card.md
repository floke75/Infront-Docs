---
title: "GPRV Score Card"
kind: example
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widgets > Analytics widgets > GPRV Score Card"
description: "Displays a GPRV score card widget using AnalyticsGprvScoreCardWidgetOptions for a given instrument."
tags: ["gprv-score-card-widget", "AnalyticsGprvScoreCardWidgetOptions", "widgets", "examples", "wtk", "requests"]
example_config: {"title":"GPRV Score Card","description":"Displays a GPRV score card widget using AnalyticsGprvScoreCardWidgetOptions for a given instrument.","modify_date":"2025-12-08T12:27:34","owner":"","tags":["gprv-score-card-widget","AnalyticsGprvScoreCardWidgetOptions","widgets","examples","wtk","requests"]}
source_url: "https://docs.infrontfinance.com/examples/Widgets/Widgets/Analyticswidgets/GPRVScoreCard"
source_files: ["script.ts", "template.html", "config.json"]
---

# GPRV Score Card

Displays a GPRV score card widget using AnalyticsGprvScoreCardWidgetOptions for a given instrument.

## Script (script.ts)

```typescript
const opts = new Infront.AnalyticsGprvScoreCardWidgetOptions({
    instrument: { ticker: 'BMW', feed: 26 },
    sectorSelectorMode: 'enabled',
    // showCompareSectorInfo: false,
    // sectorType: 'gicsIndustryGroup',
    // sectorType: 'infrontSubSector',
    hasContentCallback(hasContent) {
        console.log('AnalyticsGrpvScoreCardWidget hasContent', hasContent);
    },
    onMetricClicked(metric) {
        console.log('AnalyticsGrpvScoreCardWidget onMetricClicked', metric);
    },
    onSectorSelected(event) {
        console.log('AnalyticsGrpvScoreCardWidget onSectorSelected', event);
    },
});

const widget = infront.analyticsGprvScoreCardWidget('widget1', opts);
```

## Markup (template.html)

```html
<div class="cell-row">
    <div class="cell cell--w12">
        <div class="cell-content" id="widget1"></div>
    </div>
</div>
```

