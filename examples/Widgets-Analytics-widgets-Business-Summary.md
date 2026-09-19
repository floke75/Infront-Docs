---
title: "Business Summary"
kind: example
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widgets > Analytics widgets > Business Summary"
example_config: {"title":"Business Summary","description":"","modify_date":"2020-12-06T15:40:00","owner":"","tags":[]}
source_url: "https://docs.infrontfinance.com/examples/Widgets/Widgets/Analyticswidgets/BusinessSummary"
source_files: ["script.ts", "template.html", "config.json"]
---

# Business Summary

## Script (script.ts)

```typescript
var opts = new Infinancials.BusinessSummaryWidgetOptions();
opts.company = "01462SS";
let bsWidget = visual.BusinessSummaryWidget("#bs-widget", opts);
```

## Markup (template.html)

```html
<div class="cell-row">
    <div class="cell cell--w12">
        <div class="cell-content" id="bs-widget"></div>
    </div>
</div>
```

