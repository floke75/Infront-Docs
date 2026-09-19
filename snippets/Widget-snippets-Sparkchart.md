---
title: "Sparkchart"
kind: widget-snippet
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widget snippets > Sparkchart"
description: "Test snippet for Sparkchart"
tags: ["widget", "test"]
example_config: {"title":"Sparkchart","description":"Test snippet for Sparkchart","modify_date":"2025-12-16","owner":"Infront","tags":["widget","test"],"flags":{"show_description":true,"show_creator":true,"show_date":true,"show_metadata":true}}
source_url: "https://docs.infrontfinance.com/tests/Sparkchart"
source_files: ["script.ts", "template.html", "style.css", "config.json"]
---

# Sparkchart

Test snippet for Sparkchart

## Script (script.ts)

```typescript
addDownSampledSpikeChart();
```

## Markup (template.html)

```html
<div class="cell-row">
    <div class="cell cell--w3" id="outer"></div>
</div>
```

## Styles (style.css)

```css
.spark-test-chart-container {
    stroke: white;
    fill: transparent;
}

.spark-test-header {
    font-family: sans-serif;
    font-size: 14px;
    font-weight: 900;
    color: white;
}

.spark-test-explantion {
    font-family: sans-serif;
    font-size: 12px;
    font-weight: 400;
    font-style: italic;
    color: white;
}
```

