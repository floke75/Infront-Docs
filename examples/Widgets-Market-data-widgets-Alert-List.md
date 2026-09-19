---
title: "Alert List"
kind: example
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widgets > Market data widgets > Alert List"
description: "Displays an alert list widget using AlertListWidgetOptions."
tags: ["alert-list-widget", "AlertListWidgetOptions", "widgets", "examples", "wtk", "requests"]
example_config: {"title":"Alert List","description":"Displays an alert list widget using AlertListWidgetOptions.","modify_date":"2020-10-13T07:13:26","owner":"","tags":["alert-list-widget","AlertListWidgetOptions","widgets","examples","wtk","requests"]}
source_url: "https://docs.infrontfinance.com/examples/Widgets/Widgets/Marketdatawidgets/AlertList"
source_files: ["script.ts", "template.html", "config.json"]
---

# Alert List

Displays an alert list widget using AlertListWidgetOptions.

## Script (script.ts)

```typescript
const opts = new Infront.AlertListWidgetOptions();
const widget = infront.alertListWidget("#alertList", opts);
```

## Markup (template.html)

```html
<!-- Alert list -->
<div class="cell-row">
	<div class="cell cell--w12">
		<div id="alertList" class="cell-content"></div>
	</div>
</div>
```

