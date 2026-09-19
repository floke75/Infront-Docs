---
title: "Estimates Outlook Widget"
kind: widget-snippet
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widget snippets > Estimates Outlook Widget"
description: "Test snippet for Estimatesoutlookwidget"
tags: ["widget", "test", "widget:EstimatesOutlook", "widget:estimatesOutlook"]
demonstrates: ["EstimatesOutlook", "estimatesOutlook"]
example_config: {"title":"Estimates Outlook Widget","description":"Test snippet for Estimatesoutlookwidget","modify_date":"2025-12-16","owner":"Infront","tags":["widget","test","widget:EstimatesOutlook","widget:estimatesOutlook"],"flags":{"show_description":true,"show_creator":true,"show_date":true,"show_metadata":true}}
source_url: "https://docs.infrontfinance.com/tests/Estimatesoutlookwidget"
source_files: ["script.ts", "template.html", "config.json"]
---

# Estimates Outlook Widget

Test snippet for Estimatesoutlookwidget

Demonstrates: `EstimatesOutlook`, `estimatesOutlook`

## Script (script.ts)

```typescript
let options = new Infront.EstimatesOutlookOptions();
options.instrument = new Infront.AnalyticsInstrument('90097EF');
options.columnToDisplay = [
    Infront.OutlookColumnToDisplay.targetPrice,
    Infront.OutlookColumnToDisplay.dividendYield,
    Infront.OutlookColumnToDisplay.PE,
    Infront.OutlookColumnToDisplay.epsMomentum,
    Infront.OutlookColumnToDisplay.consensus,
    Infront.OutlookColumnToDisplay.epsGrowth,
];

let outlookWidget = infront.estimatesOutlook('#outlookWidget', options);
```

## Markup (template.html)

```html
<div class="cell-content cell--w6" id="outlookWidget" style="height: auto; max-width: 720px"></div>
```

