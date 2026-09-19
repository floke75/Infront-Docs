---
title: "Insiders"
kind: example
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widgets > Analytics widgets > Insiders"
example_config: {"title":"Insiders","description":"","modify_date":"2020-12-06T15:42:31","owner":"","tags":[]}
source_url: "https://docs.infrontfinance.com/examples/Widgets/Widgets/Analyticswidgets/Insiders"
source_files: ["script.ts", "template.html", "config.json"]
---

# Insiders

## Script (script.ts)

```typescript
let opts = new Infinancials.InsidersWidgetOptions();
opts.company = "01462SS";
let widget = visual.InsidersWidget("#insiders-widget", opts);
```

## Markup (template.html)

```html
<div class="cell-row">
    <div class="cell cell--w12">
        <div class="cell-content" id="insiders-widget"></div>
    </div>
</div>
```

