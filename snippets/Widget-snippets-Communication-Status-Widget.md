---
title: "Communication Status Widget"
kind: widget-snippet
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widget snippets > Communication Status Widget"
description: "Test snippet for Communicationstatuswidget"
tags: ["widget", "test", "widget:CommunicationStatusWidget", "widget:communicationStatus"]
demonstrates: ["CommunicationStatusWidget", "communicationStatus"]
example_config: {"title":"Communication Status Widget","description":"Test snippet for Communicationstatuswidget","modify_date":"2025-12-16","owner":"Infront","tags":["widget","test","widget:CommunicationStatusWidget","widget:communicationStatus"],"flags":{"show_description":true,"show_creator":true,"show_date":true,"show_metadata":true}}
source_url: "https://docs.infrontfinance.com/tests/Communicationstatuswidget"
source_files: ["script.ts", "template.html", "style.css", "config.json"]
---

# Communication Status Widget

Test snippet for Communicationstatuswidget

Demonstrates: `CommunicationStatusWidget`, `communicationStatus`

## Script (script.ts)

```typescript
var opts = new Infront.CommunicationStatusWidgetOptions();
opts.sortable = true;
widget = infront.communicationStatus('#communicationStatus', opts);
```

## Markup (template.html)

```html
<div class="cell-row">
    <div class="cell cell--w12">
        <div class="cell-content" id="communicationStatus"></div>
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

