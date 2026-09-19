---
title: "Chart estimates history"
kind: example
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widgets > Analytics widgets > Chart estimates history"
example_config: {"title":"Chart estimates history","description":"","modify_date":"2020-12-06T16:52:05","owner":"","tags":[]}
source_url: "https://docs.infrontfinance.com/examples/Widgets/Widgets/Analyticswidgets/Chartestimateshistory"
source_files: ["script.ts", "template.html", "config.json"]
---

# Chart estimates history

## Script (script.ts)

```typescript
let opts = new Infinancials.ChartEstimatesHistoWidgetOptions();
opts.company = "01462SS";
opts.period = "FULL"; //# Define the period to display - FULL or only for FDS = 5Y,3Y,1Y
opts.source = "FDS"; //# FDS or INQ
opts.currency = Infinancials.Currency.LOCAL;

let widget = visual.ChartEstimatesHistoWidget("#ceh-widget", opts);
```

## Markup (template.html)

```html
<div class="cell-row">
    <div class="cell cell--w12">
        <div class="cell-content" id="ceh-widget"></div>
    </div>
</div>
```

