---
title: "Top Officers"
kind: example
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widgets > Analytics widgets > Top Officers"
description: "Displays a top officers widget using AnalyticsTopOfficersWidgetOptions for a given instrument."
tags: ["top-officers-widget", "AnalyticsTopOfficersWidgetOptions", "widgets", "examples", "wtk", "requests"]
example_config: {"title":"Top Officers","description":"Displays a top officers widget using AnalyticsTopOfficersWidgetOptions for a given instrument.","modify_date":"2025-12-08T12:28:45","owner":"","tags":["top-officers-widget","AnalyticsTopOfficersWidgetOptions","widgets","examples","wtk","requests"]}
source_url: "https://docs.infrontfinance.com/examples/Widgets/Widgets/Analyticswidgets/TopOfficers"
source_files: ["script.ts", "template.html", "config.json"]
---

# Top Officers

Displays a top officers widget using AnalyticsTopOfficersWidgetOptions for a given instrument.

## Script (script.ts)

```typescript
const opts = new Infront.AnalyticsTopOfficersWidgetOptions({
    instrument: { ticker: 'BMW', feed: 26 },
    maxItems: 10,
    // topRolesCssClass: 'cell-table__field--top-roles'; // highlight the top3 roles
    source: 'STANDARD_AND_POORS',
    hasContentCallback : (hasContent) => console.log('AnalyticsTopOfficersWidget hasContent', hasContent);
});

const widget = infront.analyticsTopOfficersWidget('widget1', opts);
```

## Markup (template.html)

```html
<div class="cell-row">
    <div class="cell cell--w12">
        <div class="cell-content" id="widget1"></div>
    </div>
</div>
```

