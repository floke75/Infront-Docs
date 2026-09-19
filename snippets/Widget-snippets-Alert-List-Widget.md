---
title: "Alert List Widget"
kind: widget-snippet
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widget snippets > Alert List Widget"
description: "Test snippet for Alertlistwidget"
tags: ["widget", "test", "widget:AlertListWidget", "widget:AlertWidget", "widget:alertListWidget"]
demonstrates: ["AlertListWidget", "AlertWidget", "alertListWidget"]
example_config: {"title":"Alert List Widget","description":"Test snippet for Alertlistwidget","modify_date":"2025-12-16","owner":"Infront","tags":["widget","test","widget:AlertListWidget","widget:AlertWidget","widget:alertListWidget"],"flags":{"show_description":true,"show_creator":true,"show_date":true,"show_metadata":true}}
source_url: "https://docs.infrontfinance.com/tests/Alertlistwidget"
source_files: ["script.ts", "template.html", "config.json"]
---

# Alert List Widget

Test snippet for Alertlistwidget

Demonstrates: `AlertListWidget`, `AlertWidget`, `alertListWidget`

## Script (script.ts)

```typescript
var listOpts = new Infront.AlertListWidgetOptions();

var list = infront.alertListWidget('#alertList', listOpts);
var modOpts = new Infront.AlertWidgetOptions();
modOpts.alertAddedClick = function () {
    list.reloadData();
};

var listOptsMini = new Infront.AlertListWidgetOptions();
listOptsMini.alertListMini = true;
var listMini = infront.alertListWidget('#alertList2', listOptsMini);
var modOpt2 = new Infront.AlertWidgetOptions();
modOpt2.alertAddedClick = function () {
    list.reloadData();
};
```

## Markup (template.html)

```html
Alert list
<div class="cell-row">
    <div class="cell cell--w12">
        <div class="cell-content" id="alertList"></div>
    </div>
</div>
Alert list - mini
<div class="cell-row">
    <div class="cell cell--w12">
        <div class="cell-content" id="alertList2"></div>
    </div>
</div>
```

