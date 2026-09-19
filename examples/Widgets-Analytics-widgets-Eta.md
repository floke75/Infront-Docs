---
title: "Eta"
kind: example
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widgets > Analytics widgets > Eta"
example_config: {"title":"Eta","description":"","modify_date":"2020-12-06T15:40:37","owner":"","tags":[]}
source_url: "https://docs.infrontfinance.com/examples/Widgets/Widgets/Analyticswidgets/Eta"
source_files: ["script.ts", "template.html", "config.json"]
---

# Eta

## Script (script.ts)

```typescript
let opts = new Infinancials.EtaCardWidgetOptions();
opts.company = "01462SS";
opts.view = Infinancials.EtaView.CARD;
opts.companyAction = (eta) => {
    console.log("[EtaCardWidget]companyAction => eta object ", eta);
}
let widget = visual.EtaCardWidget("#eta-widget", opts);
```

## Markup (template.html)

```html
<div class="cell-row">
    <div class="cell cell--w12">
        <div class="cell-content" id="eta-widget"></div>
    </div>
</div>
```

