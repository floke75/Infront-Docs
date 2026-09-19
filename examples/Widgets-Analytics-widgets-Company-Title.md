---
title: "Company Title"
kind: example
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widgets > Analytics widgets > Company Title"
example_config: {"title":"Company Title","description":"","modify_date":"2020-12-06T15:41:06","owner":"","tags":[]}
source_url: "https://docs.infrontfinance.com/examples/Widgets/Widgets/Analyticswidgets/CompanyTitle"
source_files: ["script.ts", "template.html", "config.json"]
---

# Company Title

## Script (script.ts)

```typescript
var options = new Infinancials.CompanyTitleWidgetOptions();
options.company = "01462SS";
options.enable_title = true;
options.display = 'inline';
options.showActionButton = true;
options.moreButton = new Infinancials.ButtonObject();
options.moreButton.label = "ButtonAction";
options.moreButton.action = (instrument) => {
    console.log("[CompanyTitle]moreButton => instrument ", instrument);
};

var ctWidget = visual.CompanyTitleWidget("companyTitle", options);
```

## Markup (template.html)

```html
<div class="cell-row">
    <div class="cell cell--w12">
        <div class="cell-content" id="companyTitle"></div>
    </div>
</div>
```

