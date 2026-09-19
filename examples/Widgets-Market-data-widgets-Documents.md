---
title: "Documents"
kind: example
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widgets > Market data widgets > Documents"
description: "Displays a documents widget using DocumentsWidgetOptions for a given instrument."
tags: ["documents-widget", "DocumentsWidgetOptions", "Instrument", "widgets", "examples", "wtk", "requests"]
example_config: {"title":"Documents","description":"Displays a documents widget using DocumentsWidgetOptions for a given instrument.","modify_date":"2025-12-20T00:00:00","owner":"","tags":["documents-widget","DocumentsWidgetOptions","Instrument","widgets","examples","wtk","requests"]}
source_url: "https://docs.infrontfinance.com/examples/Widgets/Widgets/Marketdatawidgets/Documents"
source_files: ["script.ts", "template.html", "style.css", "config.json"]
---

# Documents

Displays a documents widget using DocumentsWidgetOptions for a given instrument.

## Script (script.ts)

```typescript
var opts = new Infront.DocumentsWidgetOptions();
opts.instrument = new Infront.Instrument(2358, "HJUF");
opts.group = "language";
infront.documentsWidget("#documents", opts);
```

## Markup (template.html)

```html
<div class="cell-content  cell-row  documents" id="documents"></div>
```

## Styles (style.css)

```css
.cell-table-wrapper {
    height: 500px;
}

.documents {
    width: 400px;
}
```

