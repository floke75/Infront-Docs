---
title: "ESG Top/Under performers"
kind: example
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widgets > ESG widgets > ESG Top/Under performers"
description: "Displays an ESG top/under performers widget using EsgPerformersWidgetOptions for a sector."
tags: ["esg-performers-widget", "EsgPerformersWidgetOptions", "widgets", "examples", "wtk", "requests"]
example_config: {"title":"ESG Top/Under performers","description":"Displays an ESG top/under performers widget using EsgPerformersWidgetOptions for a sector.","modify_date":"2021-08-16T14:45:59","owner":"","tags":["esg-performers-widget","EsgPerformersWidgetOptions","widgets","examples","wtk","requests"]}
source_url: "https://docs.infrontfinance.com/examples/Widgets/Widgets/ESGwidgets/ESGTopUnderperformers"
source_files: ["script.ts", "template.html", "config.json"]
---

# ESG Top/Under performers

Displays an ESG top/under performers widget using EsgPerformersWidgetOptions for a sector.

## Script (script.ts)

```typescript
let options = new Infront.EsgPerformersWidgetOptions();
options.sector = Infront.SectorClassification.COMMUNICATION_TELECOMMUNICATIONSERVICES;
options.limit = 5;
options.sortOrder = "DESC";
options.enableDropdown = true;

let widget = infront.esgPerformers("#esgPerformersWidget", options);
```

## Markup (template.html)

```html
<div class="cell cell--w6">
     <div class="cell-content cell-clear" id="esgPerformersWidget"></div>
</div>
```

