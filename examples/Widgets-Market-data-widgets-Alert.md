---
title: "Alert"
kind: example
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widgets > Market data widgets > Alert"
description: "Displays an alert widget using AlertWidgetOptions."
tags: ["alert-widget", "AlertWidgetOptions", "widgets", "examples", "wtk", "requests"]
example_config: {"title":"Alert","description":"Displays an alert widget using AlertWidgetOptions.","modify_date":"2020-10-18T12:51:53","owner":"","tags":["alert-widget","AlertWidgetOptions","widgets","examples","wtk","requests"]}
source_url: "https://docs.infrontfinance.com/examples/Widgets/Widgets/Marketdatawidgets/Alert"
source_files: ["script.ts", "template.html", "config.json"]
---

# Alert

Displays an alert widget using AlertWidgetOptions.

## Script (script.ts)

```typescript
const opts = new Infront.AlertWidgetOptions();
const widget = infront.alertWidget("#alert", opts);
```

## Markup (template.html)

```html
<!-- Add/edit alert -->
<div class="cell-row">
	<div class="cell cell--w6">
		<div id="alert" class="cell-content"></div>
	</div>
</div>
```

