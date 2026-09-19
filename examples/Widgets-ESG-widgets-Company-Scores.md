---
title: "Company Scores"
kind: example
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widgets > ESG widgets > Company Scores"
description: "Displays a company scores widget using EsgCompanyScoresWidgetOptions for a given instrument."
tags: ["esg-company-scores-widget", "EsgCompanyScoresWidgetOptions", "AnalyticsInstrument", "widgets", "examples", "wtk", "requests"]
example_config: {"title":"Company Scores","description":"Displays a company scores widget using EsgCompanyScoresWidgetOptions for a given instrument.","modify_date":"2025-12-20T00:00:00","owner":"","tags":["esg-company-scores-widget","EsgCompanyScoresWidgetOptions","AnalyticsInstrument","widgets","examples","wtk","requests"]}
source_url: "https://docs.infrontfinance.com/examples/Widgets/Widgets/ESGwidgets/CompanyScores"
source_files: ["script.ts", "template.html", "config.json"]
---

# Company Scores

Displays a company scores widget using EsgCompanyScoresWidgetOptions for a given instrument.

## Script (script.ts)

```typescript
let options = new Infront.EsgCompanyScoresWidgetOptions();
options.instrument = new Infront.AnalyticsInstrument("30015NU");

let widget = infront.esgCompanyScores("#esgCompanyScores", options);
```

## Markup (template.html)

```html
<body th:fragment="content">
        <div class="cell-content cell-no-padding">
            <div class="widget-header cell-flex cell-flex-justify--flex-end cell-flex--center-align">
                <span class="widget-header--title">Company scores</span>
            </div>
            <div class="cell-10-padding" id="company-scores">
                <div id="esgCompanyScores"></div>
            </div>
        </div>
    </body>
```

