---
title: "Screener Active Filters widget"
kind: legacy-widget
page_type: legacy-reference
product: "Infront Web Toolkit"
library_version: "2.x"
status: "legacy — superseded by the 4.x docs in ../../reference; Infront's own banner says this site is no longer updated"
legacy_page: "MarketDataWidgets"
widget_id: "ScreenerActiveFiltersWidget"
option_count: 16
options: ["target", "options", "target", "options", "widgetTitle", "id", "persistState", "storageType", "linkChannels", "decimals", "hasContentCallback", "widgetStateCallback", "navButton", "navButtonClicked", "useOriginal", "showSearchWidget"]
source_url: "https://doc.infrontfinance.com/v2/MarketDataWidgets#ScreenerActiveFiltersWidget"
---

# Screener Active Filters widget

```javascript
InfrontWidget = InfrontUI.screenerWidget(target, [options]);
```

A widget that filters symbols and displays the number of symbols within a filter that is selected.

### `target`

- **Type:** `String or HTMLElement`

An identifier for the target element. If a string it will be interpreted as an element id.

### `options`

- **Type:** `Object`

A map of configuration-options.

### `target`

- **Type:** `String or HTMLElement`

An identifier for the target element. If a string it will be interpreted as an element id.

### `options`

- **Type:** `Object`

A map of configuration-options.

### Configuration options

### `widgetTitle`

- **Type:** `string`
- **Required:** No
- **Default:** `varies per widget`

Title shown on the top of the widget. Set to null to hide title element (Not applicable to all widgets)

### `id`

- **Type:** `string`
- **Required:** No
- **Default:** `null`

Used if implementing persisting storage, then it must be unique

### `persistState`

- **Type:** `boolean`
- **Required:** No
- **Default:** `true`

Used if implementing persisting storage, set to false to prevent storage for this widget

### `storageType`

- **Type:** `any`
- **Required:** No
- **Default:** `null`

Used if implementing persisting storage, can be used to set special storage objects like global storage.

### `linkChannels`

- **Type:** `number[]|number`
- **Required:** No

Set to link this widget with other widgets.

### `decimals`

- **Type:** `WidgetDecimals | number`
- **Required:** No
- **Default:** `WidgetDecimals.FEED or WidgetDecimals.INSTRUMENT`

Set to change widgets displayed number of decimals. Available values:

- WidgetDecimals.FEED
- WidgetDecimals.INSTRUMENT
- WidgetDecimals.DEFAULT(usualy 2) or a numbe

### `hasContentCallback`

- **Type:** `() => void`
- **Required:** No

Callback that indicates whether the widget has any content. This can let you easily remove widgets that are empty

### `widgetStateCallback`

- **Type:** `(state: Infront.WidgetState) => void`
- **Required:** No

Callback is called when widget state changes. Can be one of:

- Infront.WidgetState.Constructing
- Infront.WidgetStateConstructed
- Infront.WidgetStateInitializing
- Infront.WidgetStateInitialized
- Infront.WidgetStateUiBuilt
- Infront.WidgetStateSubscribed
- Infront.WidgetStateDestroying

### `navButton`

- **Type:** `enum`
- **Required:** No
- **Default:** `WidgetNavButtonType.NONE`

Type of navigation-button. Available values:

- WidgetNavButtonType.NONE
- WidgetNavButtonType.EXPAND
- WidgetNavButtonType.NAVIGATE

### `navButtonClicked`

- **Type:** `() => void`
- **Required:** No

Callback that indicates whether the navigation button has been clicked.

### `useOriginal`

- **Type:** `boolean`
- **Required:** No
- **Default:** `false`

If true options object will not be copied before using.

### `showSearchWidget`

- **Type:** `boolean`
- **Required:** No
- **Default:** `false`

If true it will display a search bar on the top of instrument based widgets.

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
