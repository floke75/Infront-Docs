---
title: "Alert Widget"
kind: widget-snippet
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widget snippets > Alert Widget"
description: "Test snippet for Alertwidget"
tags: ["widget", "test", "widget:AlertWidget", "widget:alertWidget"]
demonstrates: ["AlertWidget", "alertWidget"]
example_config: {"title":"Alert Widget","description":"Test snippet for Alertwidget","modify_date":"2025-12-16","owner":"Infront","tags":["widget","test","widget:AlertWidget","widget:alertWidget"],"flags":{"show_description":true,"show_creator":true,"show_date":true,"show_metadata":true}}
source_url: "https://docs.infrontfinance.com/tests/Alertwidget"
source_files: ["script.ts", "template.html", "config.json"]
---

# Alert Widget

Test snippet for Alertwidget

Demonstrates: `AlertWidget`, `alertWidget`

## Script (script.ts)

```typescript
var opts = new Infront.AlertWidgetOptions();
//opts.selectedInstrument = new Infront.Instrument(2008, "UG");
opts.alertAdded = function () {
    console.log('Window closed');
};
//opts.selectedInstrument = new Infront.Instrument(18177, "STL")

infront.alertWidget('#alerts', opts);
```

## Markup (template.html)

```html
<div id="root">
    <div class="cell-row" id="cell-row">
        <div class="cell cell--w8">
            <div class="cell-content" id="alerts"></div>
        </div>
    </div>
</div>
```

