---
title: "Esgsectorscores"
kind: widget-snippet
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widget snippets > Esgsectorscores"
description: "Test snippet for Esgsectorscores"
tags: ["widget", "test", "widget:EsgSectorScoresWidget", "widget:esgSectorScoresWidget"]
demonstrates: ["EsgSectorScoresWidget", "esgSectorScoresWidget"]
example_config: {"title":"Esgsectorscores","description":"Test snippet for Esgsectorscores","modify_date":"2025-12-16","owner":"Infront","tags":["widget","test","widget:EsgSectorScoresWidget","widget:esgSectorScoresWidget"],"flags":{"show_description":true,"show_creator":true,"show_date":true,"show_metadata":true}}
source_url: "https://docs.infrontfinance.com/tests/Esgsectorscores"
source_files: ["script.ts", "template.html", "config.json"]
---

# Esgsectorscores

Test snippet for Esgsectorscores

Demonstrates: `EsgSectorScoresWidget`, `esgSectorScoresWidget`

## Script (script.ts)

```typescript
const options = new Infront.EsgSectorScoresWidgetOptions();
options.industryClassification = Infront.IndustryClassification.ALL;
options.avgCalculation = Infront.AverageCalculation.median;

options.preSelectedSector = 'H1';

options.defaultSortedColumn = 'ESG_GLOBAL_SCORE';
options.persistState = true;
options.paging = true;
options.layout = Infront.ListLayout.TABLE;
options.selectFirstElement = true;
options.enableBreadCrumb = true;
options.broadcastSector = true;
options.breadCrumbSeparationSymbol = ' > ';

options.dropdownElement = '#ddElement';
options.breadCrumbElement = '#breadCrumbElement';
options.enableDropdown = true;
options.dropdownOptions = {
    title: 'Industries',
    className: 'cell-pull-left',
    dropdownClass: '',
    dropDownClassName: '',
    selectionUpdatesTitle: true,
};

const widget = infront.esgSectorScoresWidget('#esg-sector-scores', options);

function generic_error_handler(error_code, error_message) {
    console.log(error_code + ': ' + error_message);
}

function generic_success_handler(result) {
    console.log(result);
}
```

## Markup (template.html)

```html
<div class="cell cell--w2" id="ddElement"></div>
<div class="cell-content" style="max-width: 600px">
    <div class="cell--12" id="esg-sector-scores"></div>
</div>
<div class="cell cell--w2" id="breadCrumbElement"></div>
```

