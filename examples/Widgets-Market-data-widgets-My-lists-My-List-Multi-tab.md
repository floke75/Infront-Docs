---
title: "My List Multi-tab"
kind: example
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widgets > Market data widgets > My lists > My List Multi-tab"
tags: ["my-lists-widget", "MyListsWidgetOptions", "widgets", "examples", "wtk", "requests"]
example_config: {"title":"My List Multi-tab","description":"","modify_date":"2023-04-28T07:30:37","owner":"","tags":["my-lists-widget","MyListsWidgetOptions","widgets","examples","wtk","requests"]}
source_url: "https://docs.infrontfinance.com/examples/Widgets/Widgets/Marketdatawidgets/Mylists/MyListMulti-tab"
source_files: ["script.ts", "template.html", "config.json"]
---

# My List Multi-tab

## Script (script.ts)

```typescript
const opts = new Infront.MyListsWidgetOptions();
opts.sortable = true;
opts.defaultSortedColumn = 2;
opts.defaultSortOrder = Infront.SortOrder.Desc;
opts.columns = ["TICKER", "CURRENCY", "LAST", "PCT_CHANGE", "YTD_CHANGE"];
opts.tabs = [{
    id:"overview",
    label:"Overview",
    columns:["TICKER", "CURRENCY", "LAST"]
},{
    id: "performance",
    label: "Performance",
    columns: ["TICKER", "YTD_CHANGE", "PCT_CHANGE"]
}];

const widget = infront.myListsWidget("#mylist", opts);
```

## Markup (template.html)

```html
<div class="cell-row">
	<div class="cell cell--w4">
		<div id="mylist" class="cell-content"></div>
	</div>
</div>
```

