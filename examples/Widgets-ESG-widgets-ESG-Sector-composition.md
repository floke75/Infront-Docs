---
title: "ESG Sector composition"
kind: example
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widgets > ESG widgets > ESG Sector composition"
description: "Displays an ESG sector composition widget using EsgSectorCompositionWidgetOptions for a given sector."
tags: ["esg-sector-composition-widget", "EsgSectorCompositionWidgetOptions", "SectorClassification", "widgets", "examples", "wtk", "requests"]
example_config: {"title":"ESG Sector composition","description":"Displays an ESG sector composition widget using EsgSectorCompositionWidgetOptions for a given sector.","modify_date":"2025-12-20T00:00:00","owner":"","tags":["esg-sector-composition-widget","EsgSectorCompositionWidgetOptions","SectorClassification","widgets","examples","wtk","requests"]}
source_url: "https://docs.infrontfinance.com/examples/Widgets/Widgets/ESGwidgets/ESGSectorcomposition"
source_files: ["script.ts", "template.html", "config.json"]
---

# ESG Sector composition

Displays an ESG sector composition widget using EsgSectorCompositionWidgetOptions for a given sector.

## Script (script.ts)

```typescript
let options = new Infront.EsgSectorCompositionWidgetOptions();
options.sector = Infront.SectorClassification.COMMUNICATION_MEDIAENTERTAINMENT;
options.defaultSortedColumn = 'ESG_GLOBAL_SCORE';
options.paging = true;

let widget = infront.esgSectorCompositionWidget('#esgSectorComposition', options);
```

## Markup (template.html)

```html
<div class="cell cell--w6">
     <div id="esgSectorComposition"></div>
</div>
```

