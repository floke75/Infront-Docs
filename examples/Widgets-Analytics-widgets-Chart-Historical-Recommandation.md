---
title: "Chart Historical Recommandation"
kind: example
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widgets > Analytics widgets > Chart Historical Recommandation"
example_config: {"title":"Chart Historical Recommandation","description":"","modify_date":"2020-12-06T16:07:43","owner":"","tags":[]}
source_url: "https://docs.infrontfinance.com/examples/Widgets/Widgets/Analyticswidgets/ChartHistoricalRecommandation"
source_files: ["script.ts", "template.html", "config.json"]
---

# Chart Historical Recommandation

## Script (script.ts)

```typescript
let opts = new Infinancials.ChartHistoricalRecommandWidgetOptions();
opts.company = "01462SS";
opts.period = 2; //# Define the period to display - -1: Full, 1: 1year, 2: 2year
opts.source = "INQ"; //# FDS or INQ
opts.currency = Infinancials.Currency.LOCAL;

let widget = visual.ChartHistoricalRecommandWidget("#chr-widget", opts);
```

## Markup (template.html)

```html
<div class="cell-row">
    <div class="cell cell--w12">
        <div class="cell-content" id="chr-widget"></div>
    </div>
</div>
```

