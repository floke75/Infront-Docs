---
title: "Company Description"
kind: example
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widgets > Analytics widgets > Company Description"
description: "Displays a company description widget using AnalyticsCompanyDescriptionWidgetOptions for a given instrument."
tags: ["company-description-widget", "AnalyticsCompanyDescriptionWidgetOptions", "widgets", "examples", "wtk", "requests"]
example_config: {"title":"Company Description","description":"Displays a company description widget using AnalyticsCompanyDescriptionWidgetOptions for a given instrument.","modify_date":"2025-12-08T12:26:13","owner":"","tags":["company-description-widget","AnalyticsCompanyDescriptionWidgetOptions","widgets","examples","wtk","requests"]}
source_url: "https://docs.infrontfinance.com/examples/Widgets/Widgets/Analyticswidgets/CompanyDescription"
source_files: ["script.ts", "template.html", "config.json"]
---

# Company Description

Displays a company description widget using AnalyticsCompanyDescriptionWidgetOptions for a given instrument.

## Script (script.ts)

```typescript
const opts = new Infront.AnalyticsCompanyDescriptionWidgetOptions({
    instrument: {ticker: 'BMW',feed: 26},
    source: 'STANDARD_AND_POORS',
    hasContentCallback: (hasContent) => console.log('AnalyticsCompanyDescriptionWidget hasContent', hasContent),
});

const widget=infront.analyticsCompanyDescriptionWidget('widget1', opts);
```

## Markup (template.html)

```html
<div class="cell-row">
    <div class="cell cell--w12">
        <div class="cell-content" id="widget1"></div>
    </div>
</div>
```

