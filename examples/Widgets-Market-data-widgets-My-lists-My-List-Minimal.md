---
title: "My List Minimal"
kind: example
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widgets > Market data widgets > My lists > My List Minimal"
tags: ["my-lists-widget", "MyListsWidgetOptions", "widgets", "examples", "wtk", "requests"]
example_config: {"title":"My List Minimal","description":"","modify_date":"2023-04-28T07:30:20","owner":"","tags":["my-lists-widget","MyListsWidgetOptions","widgets","examples","wtk","requests"]}
source_url: "https://docs.infrontfinance.com/examples/Widgets/Widgets/Marketdatawidgets/Mylists/MyListMinimal"
source_files: ["script.ts", "template.html", "config.json"]
---

# My List Minimal

## Script (script.ts)

```typescript
const opts = new Infront.MyListsWidgetOptions();
opts.columns = ["FULL_NAME", "LAST", "PCT_CHANGE"];
const widget = infront.myListsWidget("#mylist", opts)
```

## Markup (template.html)

```html
<div class="cell-row">
	<div class="cell cell--w6">
		<div id="mylist" class="cell-content"></div>
	</div>
</div>
```

