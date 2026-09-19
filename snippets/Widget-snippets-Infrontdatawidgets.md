---
title: "Infrontdatawidgets"
kind: widget-snippet
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widget snippets > Infrontdatawidgets"
description: "Test snippet for Infrontdatawidgets"
tags: ["widget", "test", "widget:CompanyDescriptionWidget", "widget:CompanyFundamentalsWidget", "widget:companyDescription", "widget:companyFundamentals"]
demonstrates: ["CompanyDescriptionWidget", "CompanyFundamentalsWidget", "companyDescription", "companyFundamentals"]
example_config: {"title":"Infrontdatawidgets","description":"Test snippet for Infrontdatawidgets","modify_date":"2025-12-16","owner":"Infront","tags":["widget","test","widget:CompanyDescriptionWidget","widget:CompanyFundamentalsWidget","widget:companyDescription","widget:companyFundamentals"],"flags":{"show_description":true,"show_creator":true,"show_date":true,"show_metadata":true}}
source_url: "https://docs.infrontfinance.com/tests/Infrontdatawidgets"
source_files: ["script.ts", "template.html", "config.json"]
---

# Infrontdatawidgets

Test snippet for Infrontdatawidgets

Demonstrates: `CompanyDescriptionWidget`, `CompanyFundamentalsWidget`, `companyDescription`, `companyFundamentals`

## Script (script.ts)

```typescript
let instrument = new Infront.Instrument(17921, 'ABB');

var opts = new Infront.CompanyDescriptionWidgetOptions();
opts.instrument = instrument;
//opts.instrument = new Infront.Instrument(17665, "MAERSK B");
infront.companyDescription('#description', opts);

var opts2 = new Infront.CompanyFundamentalsWidgetOptions();
opts2.instrument = instrument;
opts2.actualLimit = 3;
infront.companyFundamentals('#fundamentals', opts2);
```

## Markup (template.html)

```html
<div class="cell-row">
    <div class="cell cell--w6">
        <div class="cell-content" id="description"></div>
    </div>
</div>
<div class="cell-row">
    <div class="cell cell--w6">
        <div class="cell-content" id="fundamentals"></div>
    </div>
</div>
```

