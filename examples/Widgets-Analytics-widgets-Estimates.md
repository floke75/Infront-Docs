---
title: "Estimates"
kind: example
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widgets > Analytics widgets > Estimates"
example_config: {"title":"Estimates","description":"","modify_date":"2021-05-26T11:29:21","owner":"","tags":[]}
source_url: "https://docs.infrontfinance.com/examples/Widgets/Widgets/Analyticswidgets/Estimates"
source_files: ["script.ts", "template.html", "config.json"]
---

# Estimates

## Script (script.ts)

```typescript
const opts = new Infinancials.EstimatesWidgetOptions();
opts.company = "01462SS";
opts.display = InfinancialsConstants.Display.VERTICAL;
opts.displayLegend = true;
opts.period = "last12w";
opts.chartHeight = 200;
opts.title = "CONSENSUS";

const widget = visual.EstimatesWidget("estimates", opts);
```

## Markup (template.html)

```html
<div class="cell-row">
    <div class="cell cell--w12">
        <div class="cell-content cell-clear" id="estimates"></div>
    </div>
</div>
```

