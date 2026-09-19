---
title: "ESG Outlook"
kind: example
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widgets > ESG widgets > ESG Outlook"
description: "Displays an ESG outlook widget using EsgCompanyOutlookWidgetOptions for a given instrument."
tags: ["esg-company-outlook-widget", "EsgCompanyOutlookWidgetOptions", "AnalyticsInstrument", "widgets", "examples", "wtk", "requests"]
example_config: {"title":"ESG Outlook","description":"Displays an ESG outlook widget using EsgCompanyOutlookWidgetOptions for a given instrument.","modify_date":"2025-12-20T00:00:00","owner":"","tags":["esg-company-outlook-widget","EsgCompanyOutlookWidgetOptions","AnalyticsInstrument","widgets","examples","wtk","requests"]}
source_url: "https://docs.infrontfinance.com/examples/Widgets/Widgets/ESGwidgets/ESGOutlook"
source_files: ["script.ts", "template.html", "config.json"]
---

# ESG Outlook

Displays an ESG outlook widget using EsgCompanyOutlookWidgetOptions for a given instrument.

## Script (script.ts)

```typescript
let options = new Infront.EsgCompanyOutlookWidgetOptions();
options.instrument = new Infront.AnalyticsInstrument("30015NU");

let widget= infront.esgCompanyOutlook("#outlookWidget", options);
```

## Markup (template.html)

```html
<div class="cell-content  cell--w12" id="outlookWidget"></div>
```

