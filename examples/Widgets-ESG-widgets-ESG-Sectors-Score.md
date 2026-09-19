---
title: "ESG Sectors Score"
kind: example
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widgets > ESG widgets > ESG Sectors Score"
description: "Displays an ESG sector scores widget using EsgSectorScoresWidgetOptions for industry classification."
tags: ["esg-sector-scores-widget", "EsgSectorScoresWidgetOptions", "widgets", "examples", "wtk", "requests"]
example_config: {"title":"ESG Sectors Score","description":"Displays an ESG sector scores widget using EsgSectorScoresWidgetOptions for industry classification.","modify_date":"2021-08-20T09:49:27","owner":"","tags":["esg-sector-scores-widget","EsgSectorScoresWidgetOptions","widgets","examples","wtk","requests"]}
source_url: "https://docs.infrontfinance.com/examples/Widgets/Widgets/ESGwidgets/ESGSectorsScore"
source_files: ["script.ts", "template.html", "config.json"]
---

# ESG Sectors Score

Displays an ESG sector scores widget using EsgSectorScoresWidgetOptions for industry classification.

## Script (script.ts)

```typescript
let options = new Infront.EsgSectorScoresWidgetOptions();
options.industryClassification = Infront.IndustryClassification.ALL;
options.defaultSortedColumn = 'ESG_GLOBAL_SCORE';
options.avgCalculation :  AverageCalculation.median;
options.enableDropdown = true;

esgWidget = infront.esgSectorScoresWidget('#esg-sector-scores', options);
```

## Markup (template.html)

```html
<div class="cell cell--w6">
        <div class="cell-content cell-clear" id="esg-sector-scores"></div>
</div>
```

