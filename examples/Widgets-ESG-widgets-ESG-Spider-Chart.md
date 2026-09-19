---
title: "ESG Spider Chart"
kind: example
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widgets > ESG widgets > ESG Spider Chart"
description: "Displays an ESG spider chart widget using EsgSpiderChartWidgetOptions for sector breakdown and analysis."
tags: ["esg-spider-chart-widget", "EsgSpiderChartWidgetOptions", "widgets", "examples", "wtk", "requests"]
example_config: {"title":"ESG Spider Chart","description":"Displays an ESG spider chart widget using EsgSpiderChartWidgetOptions for sector breakdown and analysis.","modify_date":"2025-12-20T00:00:00","owner":"","tags":["esg-spider-chart-widget","EsgSpiderChartWidgetOptions","widgets","examples","wtk","requests"]}
source_url: "https://docs.infrontfinance.com/examples/Widgets/Widgets/ESGwidgets/ESGSpiderChart"
source_files: ["script.ts", "template.html", "config.json"]
---

# ESG Spider Chart

Displays an ESG spider chart widget using EsgSpiderChartWidgetOptions for sector breakdown and analysis.

## Script (script.ts)

```typescript
let options = new Infront.EsgSpiderChartWidgetOptions();
options.id = 'EsgCompanySectorSpiderChart';
options.persistState = true;
options.sector = 'T1';
options.dropdownElement = "#ddElement";

options.enableDropdown = true;
options.dropdownOptions = {
          title: 'Sectors',
          dropdownClass: 'breakdown',
          selectionUpdatesTitle: true,
};

let widget = infront.esgSpiderChartWidget('#esg-company-sector-spider-chart', options);
```

## Markup (template.html)

```html
<div class="cell cell--w3" id="ddElement"></div>

<div class="cell-content" style="max-width: 515px;">
        <div class="cell cell--w12" id="esg-company-sector-spider-chart"></div>
</div>
```

