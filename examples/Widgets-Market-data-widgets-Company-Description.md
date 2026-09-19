---
title: "Company Description"
kind: example
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widgets > Market data widgets > Company Description"
description: "Displays a company description widget using CompanyDescriptionWidgetOptions for a given instrument."
tags: ["company-description-widget", "CompanyDescriptionWidgetOptions", "widgets", "examples", "wtk", "requests"]
example_config: {"title":"Company Description","description":"Displays a company description widget using CompanyDescriptionWidgetOptions for a given instrument.","modify_date":"2020-10-29T16:19:30","owner":"","tags":["company-description-widget","CompanyDescriptionWidgetOptions","widgets","examples","wtk","requests"]}
source_url: "https://docs.infrontfinance.com/examples/Widgets/Widgets/Marketdatawidgets/CompanyDescription"
source_files: ["script.ts", "template.html", "config.json"]
---

# Company Description

Displays a company description widget using CompanyDescriptionWidgetOptions for a given instrument.

## Script (script.ts)

```typescript
/*Sweden only*/

var opts = new Infront.CompanyDescriptionWidgetOptions();
opts.instrument = new Infront.Instrument(17921, "SHB B");
infront.companyDescription("#companyDescription", opts);
```

## Markup (template.html)

```html
<div id="companyDescription" class="cell-content"></div>
```

