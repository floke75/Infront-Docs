---
title: "Analysts"
kind: example
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widgets > Analytics widgets > Analysts"
description: "Displays an analysts widget using AnalyticsAnalystsWidgetOptions for a given instrument."
tags: ["analysts-widget", "AnalyticsAnalystsWidgetOptions", "widgets", "examples", "wtk", "requests"]
example_config: {"title":"Analysts","description":"Displays an analysts widget using AnalyticsAnalystsWidgetOptions for a given instrument.","modify_date":"2025-12-05T14:29:04","owner":"","tags":["analysts-widget","AnalyticsAnalystsWidgetOptions","widgets","examples","wtk","requests"]}
source_url: "https://docs.infrontfinance.com/examples/Widgets/Widgets/Analyticswidgets/Analysts"
source_files: ["script.ts", "template.html", "config.json"]
---

# Analysts

Displays an analysts widget using AnalyticsAnalystsWidgetOptions for a given instrument.

## Script (script.ts)

```typescript
const opts = new Infront.AnalyticsAnalystsWidgetOptions({
    // instrument: { isin: 'SE0000108656' },
    instrument: { ticker: 'BMW', feed: 26 },
    maxItems: 15,
    // source: 'INFRONT',
    source: 'STANDARD_AND_POORS',
    hasContentCallback: (hasContent) => console.log('AnalyticsAnalystsWidget hasContent', hasContent),
});

const widget = infront.analyticsAnalystsWidget('widget1', opts);
```

## Markup (template.html)

```html
<div class="cell-row">
    <div class="cell cell--w12">
        <div class="cell-content" id="widget1"></div>
    </div>
</div>
```

