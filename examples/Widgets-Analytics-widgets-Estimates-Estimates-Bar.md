---
title: "Estimates Bar"
kind: example
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widgets > Analytics widgets > Estimates > Estimates Bar"
example_config: {"title":"Estimates Bar","description":"","modify_date":"2025-12-08T13:01:49","owner":"","tags":[]}
source_url: "https://docs.infrontfinance.com/examples/Widgets/Widgets/Analyticswidgets/Estimates/EstimatesBar"
source_files: ["script.ts", "template.html", "config.json"]
---

# Estimates Bar

## Script (script.ts)

```typescript
const opts = new Infront.AnalyticsEstimatesBarWidgetOptions({
    // instrument: { isin: 'GB00BP6MXD84' },
    instrument: { isin: 'SE0000108656' },
    hasContentCallback: (hasContent) => console.log('AnalyticsEstimatesBarWidget hasContent', hasContent),
    showExtraInformationIcon: true,
    estimateSource: 'STANDARD_AND_POORS',
    onShowExtraInformationClicked: (instrument) => {
        console.log('showExtraInformationIconClicked', instrument)
    },
});

const widget = infront.analyticsEstimatesBarWidget('widget1', opts);
```

## Markup (template.html)

```html
<div class="cell-row">
    <div class="cell cell--w12">
        <div class="cell-content" id="widget1"></div>
    </div>
</div>
```

