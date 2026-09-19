---
title: "My List Advanced"
kind: example
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widgets > Market data widgets > My lists > My List Advanced"
tags: ["my-lists-widget", "MyListsWidgetOptions", "widgets", "examples", "wtk", "requests"]
example_config: {"title":"My List Advanced","description":"","modify_date":"2023-04-28T07:30:30","owner":"","tags":["my-lists-widget","MyListsWidgetOptions","widgets","examples","wtk","requests"]}
source_url: "https://docs.infrontfinance.com/examples/Widgets/Widgets/Marketdatawidgets/Mylists/MyListAdvanced"
source_files: ["script.ts", "template.html", "config.json"]
---

# My List Advanced

## Script (script.ts)

```typescript
const opts = new Infront.MyListsWidgetOptions();
opts.columns = [
  {
    name: "TICKER",
    hover: "FULL_NAME",
    flag: true
  },
  {
    name: "LAST_VALID",
    className: "wt-clickable-cell"
  },
  "CHANGE",
  "PCT_CHANGE",
  {
    name: "timecheck",
    heading: "Time",
    type: "computed",
    dataType: Infront.DataType.DateTime,
    computeFields: ["S_DATETIME", "LAST_TRADE_DATE"],
    compute: function (rowId, args) {
      if (args[0]) {
        return args[0];
      }
      else {
        return args[1];
      }
    },
    className: "cell-table__num"
  },
  {
    name: "my_calculation",
    heading: "Today's range",
    type: "computed",
    computeFields: ["HIGH", "LOW"],
    compute: function (rowId, args) {
        return args[0] - args[1];
    },
    className: "cell-table__num"
  }

];
opts.defaultSortOrder = Infront.SortOrder.Desc;
opts.sortable = true;
opts.defaultSortedColumn = 3;
opts.enableChangeStatusColors = true;
const widget = infront.myListsWidget("#mylist", opts)
```

## Markup (template.html)

```html
<div class="cell-row">
	<div class="cell cell--w12">
		<div id="mylist" class="cell-content"></div>
	</div>
</div>
```

