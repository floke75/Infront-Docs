---
title: "Esgsectorcomposition"
kind: widget-snippet
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widget snippets > Esgsectorcomposition"
description: "Test snippet for Esgsectorcomposition"
tags: ["widget", "test", "widget:EsgSectorCompositionWidget", "widget:esgSectorCompositionWidget"]
demonstrates: ["EsgSectorCompositionWidget", "esgSectorCompositionWidget"]
example_config: {"title":"Esgsectorcomposition","description":"Test snippet for Esgsectorcomposition","modify_date":"2025-12-16","owner":"Infront","tags":["widget","test","widget:EsgSectorCompositionWidget","widget:esgSectorCompositionWidget"],"flags":{"show_description":true,"show_creator":true,"show_date":true,"show_metadata":true}}
source_url: "https://docs.infrontfinance.com/tests/Esgsectorcomposition"
source_files: ["script.ts", "template.html", "config.json"]
---

# Esgsectorcomposition

Test snippet for Esgsectorcomposition

Demonstrates: `EsgSectorCompositionWidget`, `esgSectorCompositionWidget`

## Script (script.ts)

```typescript
let sectorClassification = Infront.SectorClassification;
let options = new Infront.EsgSectorCompositionWidgetOptions();
options.sector = sectorClassification.COMMUNICATION_MEDIAENTERTAINMENT;

options.defaultSortedColumn = 'ESG_GLOBAL_SCORE';

options.paging = true;
options.layout = Infront.ListLayout.TABLE;
options.persistState = true;
options.columns = [
    {
        name: 'ESG_COMPANY_NAME',
        onClick: function (item, value, extra) {
            let companyCode = item.instrument;

            alert(companyCode);
        },
    },
    Infront.EsgSectorFields.ESG_GLOBAL_SCORE(Infront.EsgScoreFieldType.PROGRESS),
    Infront.EsgSectorFields.ESG_ENVIRONMENTAL(),
    Infront.EsgSectorFields.ESG_SOCIAL(),
    Infront.EsgSectorFields.ESG_GOVERNANCE(),
];

let widget = infront.esgSectorCompositionWidget('#esgSectorComposition', options);

//# Add support for InterLibrary link.
let channelNumber = 10;
InterLibraryLink.ControllerLinkFactory.link(channelNumber, widget);

function generic_error_handler(error_code, error_message) {
    console.log(error_code + ': ' + error_message);
}

function generic_success_handler(result) {
    console.log(result);
}
```

## Markup (template.html)

```html
<div class="cell--12" id="esgSectorComposition"></div>
```

