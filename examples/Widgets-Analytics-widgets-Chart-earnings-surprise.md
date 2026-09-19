---
title: "Chart earnings surprise"
kind: example
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widgets > Analytics widgets > Chart earnings surprise"
example_config: {"title":"Chart earnings surprise","description":"","modify_date":"2020-12-06T16:09:27","owner":"","tags":[]}
source_url: "https://docs.infrontfinance.com/examples/Widgets/Widgets/Analyticswidgets/Chartearningssurprise"
source_files: ["script.ts", "template.html", "config.json"]
---

# Chart earnings surprise

## Script (script.ts)

```typescript
let opts = new Infinancials.ChartEarningsSurpriseWidgetOptions();
opts.company = "01462SS";
opts.item = Infinancials.EarningsSurpriseItemsCharts.REVENUES;
opts.period = Infinancials.EarningsSurprisePeriodCharts.YEAR; //# Enum values: YEAR or QUARTER only !!!
opts.source = "INQ"; //# FDS or INQ.
opts.currency = Infinancials.Currency.LOCAL; 

let widget = visual.ChartEarningsSurpriseWidget("#ces-widget", opts);
```

## Markup (template.html)

```html
<div class="cell-row">
    <div class="cell cell--w12">
        <div class="cell-content" id="ces-widget"></div>
    </div>
</div>
```

