---
title: "Company Title"
kind: example
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widgets > ESG widgets > Company Title"
description: "Displays a company title widget using CompanyTitleWidgetOptions for a given instrument."
tags: ["company-title-widget", "CompanyTitleWidgetOptions", "Instrument", "widgets", "examples", "wtk", "requests"]
example_config: {"title":"Company Title","description":"Displays a company title widget using CompanyTitleWidgetOptions for a given instrument.","modify_date":"2025-12-20T00:00:00","owner":"","tags":["company-title-widget","CompanyTitleWidgetOptions","Instrument","widgets","examples","wtk","requests"]}
source_url: "https://docs.infrontfinance.com/examples/Widgets/Widgets/ESGwidgets/CompanyTitle"
source_files: ["script.ts", "template.html", "config.json"]
---

# Company Title

Displays a company title widget using CompanyTitleWidgetOptions for a given instrument.

## Script (script.ts)

```typescript
let options = new Infront.CompanyTitleWidgetOptions();
options.instrument = new Infront.Instrument(19, 'VOD');
let widget = infront.companyTitle("#companyTitle", options);
```

## Markup (template.html)

```html
<div class="cell cell--w12">
        <div class="cell-content" id="companyTitle"></div>
</div>
```

