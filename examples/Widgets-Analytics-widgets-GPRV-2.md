---
title: "GPRV"
kind: example
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widgets > Analytics widgets > GPRV"
description: "Displays a GPRV widget using AnalyticsGprvWidgetOptions for a given instrument."
tags: ["gprv-widget", "AnalyticsGprvWidgetOptions", "widgets", "examples", "wtk", "requests"]
example_config: {"title":"GPRV","description":"Displays a GPRV widget using AnalyticsGprvWidgetOptions for a given instrument.","modify_date":"2025-12-08T12:26:59","owner":"","tags":["gprv-widget","AnalyticsGprvWidgetOptions","widgets","examples","wtk","requests"]}
source_url: "https://docs.infrontfinance.com/examples/Widgets/Widgets/Analyticswidgets/GPRV"
source_files: ["script.ts", "template.html", "config.json"]
---

# GPRV

> Not the same page as [`Gprv`](./Widgets-Analytics-widgets-Gprv.md), the example — the names differ only in case.

Displays a GPRV widget using AnalyticsGprvWidgetOptions for a given instrument.

## Script (script.ts)

```typescript
const opts = new Infront.AnalyticsGprvWidgetOptions({
    instrument: { ticker: 'BMW', feed: 26 },
    hasContentCallback: (hasContent) => console.log('AnalyticsGprvWidget hasContent', hasContent),
    onMetricClicked: (metric) => console.log('AnalyticsGprvWidget onMetricClicked', metric),
persistState: true,
    onSectorTypeSelected: (sectorType) => console.log('AnalyticsGprvWidget onSectorTypeSelected', sectorType),
});

const widget = infront.analyticsGprvWidget('widget1', opts);
```

## Markup (template.html)

```html
<div class="cell-row">
    <div class="cell cell--w12">
        <div class="cell-content" id="widget1"></div>
    </div>
</div>
```

