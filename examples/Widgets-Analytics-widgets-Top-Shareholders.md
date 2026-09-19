---
title: "Top Shareholders"
kind: example
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widgets > Analytics widgets > Top Shareholders"
description: "Displays a top shareholders widget using AnalyticsTopShareholdersWidgetOptions for a given instrument."
tags: ["top-shareholders-widget", "AnalyticsTopShareholdersWidgetOptions", "widgets", "examples", "wtk", "requests"]
example_config: {"title":"Top Shareholders","description":"Displays a top shareholders widget using AnalyticsTopShareholdersWidgetOptions for a given instrument.","modify_date":"2025-12-08T12:28:54","owner":"","tags":["top-shareholders-widget","AnalyticsTopShareholdersWidgetOptions","widgets","examples","wtk","requests"]}
source_url: "https://docs.infrontfinance.com/examples/Widgets/Widgets/Analyticswidgets/TopShareholders"
source_files: ["script.ts", "template.html", "config.json"]
---

# Top Shareholders

Displays a top shareholders widget using AnalyticsTopShareholdersWidgetOptions for a given instrument.

## Script (script.ts)

```typescript
const opts = new Infront.AnalyticsTopShareholdersWidgetOptions({
    instrument: {ticker: 'BMW',feed: 26},
    maxItems: 10,
    source: 'STANDARD_AND_POORS',
    // showVotingRights: true,
    hasContentCallback: (hasContent) => console.log('AnalyticsTopShareholdersWidget hasContent', hasContent),
});

const widget=infront.analyticsTopShareholdersWidget('widget1', opts);
```

## Markup (template.html)

```html
<div class="cell-row">
    <div class="cell cell--w12">
        <div class="cell-content" id="widget1"></div>
    </div>
</div>
```

