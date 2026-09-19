---
title: "Company"
kind: example
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widgets > Analytics widgets > Company"
example_config: {"title":"Company","description":"","modify_date":"2020-07-22T18:21:43","owner":"","tags":[]}
source_url: "https://docs.infrontfinance.com/examples/Widgets/Widgets/Analyticswidgets/Company"
source_files: ["script.ts", "template.html", "config.json"]
---

# Company

## Script (script.ts)

```typescript
const opts = new Infinancials.ChartRevisionWidgetOptions();
opts.company = "90103EF";
opts.source = "INQ";
opts.currency = -1;
opts.year = -1;
opts.item = Infinancials.RevisionItemsCharts.EPS_MEDIAN;
opts.title = "REVISIONS";
const widget = visual.ChartRevisionWidget("#chartRevision", opts);
```

## Markup (template.html)

```html
<div class="cell-row">
    <div class="cell cell--w6">
        <div class="cell-content cell-clear" id="chartRevision"></div>
    </div>
</div>
```

