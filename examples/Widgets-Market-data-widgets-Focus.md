---
title: "Focus"
kind: example
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widgets > Market data widgets > Focus"
description: "Displays a focus widget for a given instrument using FocusWidgetOptions."
tags: ["focus-widget", "FocusWidgetOptions", "widgets", "examples", "wtk", "requests"]
example_config: {"title":"Focus","description":"Displays a focus widget for a given instrument using FocusWidgetOptions.","modify_date":"2020-10-18T12:48:43","owner":"","tags":["focus-widget","FocusWidgetOptions","widgets","examples","wtk","requests"]}
source_url: "https://docs.infrontfinance.com/examples/Widgets/Widgets/Marketdatawidgets/Focus"
source_files: ["script.ts", "template.html", "style.css", "config.json"]
---

# Focus

Displays a focus widget for a given instrument using FocusWidgetOptions.

## Script (script.ts)

```typescript
const opts = new Infront.FocusWidgetOptions();
opts.instrument = new Infront.Instrument(26, "BMW");
const widget = infront.focusWidget("#focus", opts);
```

## Markup (template.html)

```html
<div class="cell-row">
	<div class="cell cell--w4">
		<div id="focus" class="cell-content"></div>
	</div>
</div>
```

## Styles (style.css)

```css
label, input {
  cursor: pointer;
  padding-right: 10px;
  vertical-align: middle;
}
```

