---
title: "Outlook"
kind: example
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widgets > Analytics widgets > Outlook"
description: "Displays an outlook widget using OutlookWidgetOptions for a given company."
tags: ["outlook-widget", "OutlookWidgetOptions", "widgets", "examples", "wtk", "requests"]
example_config: {"title":"Outlook","description":"Displays an outlook widget using OutlookWidgetOptions for a given company.","modify_date":"2020-07-22T18:38:37","owner":"","tags":["outlook-widget","OutlookWidgetOptions","widgets","examples","wtk","requests"]}
source_url: "https://docs.infrontfinance.com/examples/Widgets/Widgets/Analyticswidgets/Outlook"
source_files: ["script.ts", "template.html", "config.json"]
---

# Outlook

Displays an outlook widget using OutlookWidgetOptions for a given company.

## Script (script.ts)

```typescript
const opts = new Infinancials.OutlookWidgetOptions();
opts.company = "90103EF";
opts.source = "INQ";
opts.currency = -1;
const widget = visual.OutlookWidget("#outlook", opts);
```

## Markup (template.html)

```html
<div class="cell-row">
    <div class="cell cell--w12">
        <div class="cell-content" id="outlook"></div>
    </div>
</div>
```

