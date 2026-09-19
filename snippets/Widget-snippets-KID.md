---
title: "KID"
kind: widget-snippet
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widget snippets > KID"
description: "Test snippet for Kid"
tags: ["widget", "test", "widget:getFeatureStrings"]
demonstrates: ["getFeatureStrings"]
example_config: {"title":"KID","description":"Test snippet for Kid","modify_date":"2025-12-16","owner":"Infront","tags":["widget","test","widget:getFeatureStrings"],"flags":{"show_description":true,"show_creator":true,"show_date":true,"show_metadata":true}}
source_url: "https://docs.infrontfinance.com/tests/Kid"
source_files: ["script.ts", "template.html", "style.css", "config.json"]
---

# KID

Test snippet for Kid

Demonstrates: `getFeatureStrings`

## Script (script.ts)

```typescript
document.getElementById('fStrings').innerHTML = syntaxHighlight(
    JSON.stringify(infront.infront.getFeatureStrings(), null, 4),
);
```

## Markup (template.html)

```html
<div class="cell-row">
    <div class="cell cell--w4">
        <pre id="fStrings"></pre>
    </div>
</div>
```

## Styles (style.css)

```css
.key {
    color: maroon;
}

.string {
    color: red;
}

.number {
    color: blueviolet;
}

.boolean,
.null {
    color: rgb(0, 124, 83);
}
```

