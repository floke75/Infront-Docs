---
title: "Sector Momentum"
kind: example
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widgets > Analytics widgets > Sector Momentum"
description: "Displays a sector momentum widget using SectorMomentumWidgetOptions."
tags: ["sector-momentum-widget", "SectorMomentumWidgetOptions", "widgets", "examples", "wtk", "requests"]
example_config: {"title":"Sector Momentum","description":"Displays a sector momentum widget using SectorMomentumWidgetOptions.","modify_date":"2020-12-06T16:24:40","owner":"","tags":["sector-momentum-widget","SectorMomentumWidgetOptions","widgets","examples","wtk","requests"]}
source_url: "https://docs.infrontfinance.com/examples/Widgets/Widgets/Analyticswidgets/SectorMomentum"
source_files: ["script.ts", "template.html", "config.json"]
---

# Sector Momentum

Displays a sector momentum widget using SectorMomentumWidgetOptions.

## Script (script.ts)

```typescript
var options = new Infinancials.SectorMomentumWidgetOptions();
options.waitMessage = false;

var smWidget = visual.SectorMomentumWidget("#sm-widget", options);
```

## Markup (template.html)

```html
<div class="cell-row">
    <div class="cell cell--w12">
        <div class="cell-content" id="sm-widget"></div>
    </div>
</div>
```

