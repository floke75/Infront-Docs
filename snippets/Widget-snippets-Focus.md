---
title: "Focus"
kind: widget-snippet
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widget snippets > Focus"
description: "Test snippet for Focus"
tags: ["widget", "test", "widget:FocusWidget", "widget:ValuePairWidget", "widget:focusWidget", "widget:valuePairWidget"]
demonstrates: ["FocusWidget", "ValuePairWidget", "focusWidget", "valuePairWidget"]
example_config: {"title":"Focus","description":"Test snippet for Focus","modify_date":"2025-12-16","owner":"Infront","tags":["widget","test","widget:FocusWidget","widget:ValuePairWidget","widget:focusWidget","widget:valuePairWidget"],"flags":{"show_description":true,"show_creator":true,"show_date":true,"show_metadata":true}}
source_url: "https://docs.infrontfinance.com/tests/Focus"
source_files: ["script.ts", "template.html", "config.json"]
---

# Focus

Test snippet for Focus

Demonstrates: `FocusWidget`, `ValuePairWidget`, `focusWidget`, `valuePairWidget`

## Script (script.ts)

```typescript
var opts = new Infront.FocusWidgetOptions();
opts.instrument = new Infront.Instrument(18177, 'NHY');
//opts.instrument = new Infront.Instrument(17665, "MAERSK B");
infront.focusWidget('#focus', opts);

var valuePairOpts4 = new Infront.ValuePairWidgetOptions();
valuePairOpts4.instrument = new Infront.Instrument(18177, 'NHY');
valuePairOpts4.leftField = 'TIME'; //"VWAP";
valuePairOpts4.rightField = 'S_DATETIME';
infront.valuePairWidget('time', valuePairOpts4);
```

## Markup (template.html)

```html
<div class="cell-row">
    <div class="cell cell--w4">
        <div class="cell-content" id="focus"></div>
    </div>
    <div class="cell cell--w4">
        <div class="cell-content" id="time"></div>
    </div>
</div>
```

