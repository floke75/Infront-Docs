---
title: "Screener Active Filters widget"
kind: legacy-widget
page_type: legacy-reference
product: "Infront Web Toolkit"
library_version: "3.x"
status: "legacy — superseded by the 4.x docs in ../../reference; Infront's own banner says this site is no longer updated"
legacy_page: "MarketDataWidgets"
widget_id: "ScreenerActiveFiltersWidget"
extends: "WidgetBaseOptions"
source_url: "https://doc.infrontfinance.com/v3/MarketDataWidgets#ScreenerActiveFiltersWidget"
---

# Screener Active Filters widget

```javascript
InfrontWidget = InfrontUI.screenerWidget(target, [options]);
```

Extends [WidgetBaseOptions](../CoreObjects/WidgetOptions.md)

A widget that filters symbols and displays the number of symbols within a filter that is selected.

### Example

```html
<script type="text/javascript">
var opts = new Infront.ScreenerWidgetOptions();
		var opts = new Infront.ScreenerWidgetOptions();
opts.feed = 18197;
opts.linkChannels = [4555];
opts.linkAction = Infront.LinkAction.Append;
opts.title = "Filters";
opts.collapsable = true;
opts.filters = [
	{
		defaultExpanded: true,
		filterField: "STAR_RATING",
		header: "Morningstar Rating",
		filterItems: [
			new Infront.FilterItem("Not Rated", (val) => {
				return typeof val == "undefined" || val == 0;
			}),
			new Infront.FilterItem("★", (val) => { return val == 1; }),
			new Infront.FilterItem("★★", (val) => { return val == 2; }),
			new Infront.FilterItem("★★★", (val) => { return val == 3; }),
			new Infront.FilterItem("★★★★", (val) => { return val == 4; }),
			new Infront.FilterItem("★★★★★", (val) => { return val == 5; }),
		]
	},
];
opts.searchBox = {
	filterField: ["FULL_NAME"],
	header: "NAME CONTAINING",
	placeholder: "Search here"
};

var activeOpts = new Infront.ScreenerActiveFiltersWidgetOptions();
activeOpts.linkChannels = [4555];
activeOpts.linkAction = Infront.LinkAction.Append;
infront.activeFiltersWidget("activeFilters", activeOpts);
infront.screenerWidget("screener", opts);
</script>
...
<div id="screener"></div>
<div id="activeFilters"></div>
	
```
