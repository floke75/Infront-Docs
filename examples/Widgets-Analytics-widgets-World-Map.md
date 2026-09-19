---
title: "World Map"
kind: example
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widgets > Analytics widgets > World Map"
example_config: {"title":"World Map","description":"","modify_date":"2020-12-06T16:23:34","owner":"","tags":[]}
source_url: "https://docs.infrontfinance.com/examples/Widgets/Widgets/Analyticswidgets/WorldMap"
source_files: ["script.ts", "template.html", "config.json"]
---

# World Map

## Script (script.ts)

```typescript
let options = new Infinancials.WorldMapWidgetOptions();
options.height = 238;
options.enableSelection = true;
options.autoZoomIn = false;
options.enabledStorage = true;
options.chart = Infinancials.WorldMapChartType.MARKETPLACE;

let widget = visual.WorldMapWidget("#wm-widget", options);
```

## Markup (template.html)

```html
<div class="cell-row">
    <div class="cell cell--w12">
        <div class="cell-content" id="wm-widget"></div>
    </div>
</div>
```

