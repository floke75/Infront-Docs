---
title: "Company Description Widget"
kind: widget-snippet
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widget snippets > Company Description Widget"
description: "Test snippet for Companydescriptionwidget"
tags: ["widget", "test", "widget:CompanyDescriptionWidget", "widget:companyDescription"]
demonstrates: ["CompanyDescriptionWidget", "companyDescription"]
example_config: {"title":"Company Description Widget","description":"Test snippet for Companydescriptionwidget","modify_date":"2025-12-16","owner":"Infront","tags":["widget","test","widget:CompanyDescriptionWidget","widget:companyDescription"],"flags":{"show_description":true,"show_creator":true,"show_date":true,"show_metadata":true}}
source_url: "https://docs.infrontfinance.com/tests/Companydescriptionwidget"
source_files: ["script.ts", "template.html", "style.css", "config.json"]
---

# Company Description Widget

Test snippet for Companydescriptionwidget

Demonstrates: `CompanyDescriptionWidget`, `companyDescription`

## Script (script.ts)

```typescript
var opts = new Infront.CompanyDescriptionWidgetOptions();
//opts.actualLimit = -2;
//opts.estimateLimit = 2;
opts.hideEstimates = false;
opts.estimatesSubfix = 'e';
opts.layout = Infront.ListLayout.FLEX;
opts.instrument = new Infront.Instrument(17921, 'SHB B');

widget = infront.companyDescription('#companyDescription', opts);
```

## Markup (template.html)

```html
<div class="cell-row">
    <div class="cell cell--w12">
        <div class="cell-content" id="companyDescription"></div>
    </div>
</div>
```

## Styles (style.css)

```css
html {
    height: 98%;
}

body,
.cell-row {
    height: 100%;
    display: flex;
}

.cell-row {
    flex-grow: 1;
}
```

