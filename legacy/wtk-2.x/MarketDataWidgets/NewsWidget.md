---
title: "News widget"
kind: legacy-widget
page_type: legacy-reference
product: "Infront Web Toolkit"
library_version: "2.x"
status: "legacy — superseded by the 4.x docs in ../../reference; Infront's own banner says this site is no longer updated"
legacy_page: "MarketDataWidgets"
widget_id: "NewsWidget"
option_count: 33
options: ["target", "options", "target", "options", "widgetTitle", "id", "persistState", "storageType", "linkChannels", "decimals", "hasContentCallback", "widgetStateCallback", "navButton", "navButtonClicked", "useOriginal", "showSearchWidget", "instrument", "feeds", "enableRegionSelector", "enableSourceSelector", "customFilters", "name", "region", "feeds", "columns", "enableQuickFilter", "preSelectedRegions", "maxItems", "paging", "pageItems", "useLightbox", "filterFunction", "onNewsItemSelected"]
source_url: "https://doc.infrontfinance.com/v2/MarketDataWidgets#NewsWidget"
---

# News widget

```javascript
InfrontWidget = Infront.newsListWidget(target, [options]);
```

This widget shows a list of news-headlines with source and time/date from one or more news-feeds.

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

The news widget requires that you either:

1. Specify one instrument
2. Specify one or more feeds
3. Set enableRegionSelector to true
4. Specify customFilters

### `instrument`

- **Type:** `Instrument`
- **Required:** No

The instrument to show news for.

### `feeds`

- **Type:** `number[]`
- **Required:** No

The feeds to show news for, specified as an Infront feed numbers.

### `enableRegionSelector`

- **Type:** `boolean`
- **Default:** `false`

Enables the region selector box. This will also enable the source selector drop down field.

### `enableSourceSelector`

- **Type:** `boolean`
- **Default:** `false`

Enables the source selector drop down field. A "false" value will be overwritten if enableRegionSelector is true.

### `customFilters`

- **Type:** `Object[]`
- **Default:** `null`

Specifies a list of custom filters that are displayed as buttons in the top row. You can specify either region or feeds, if both are specified only feeds are used. Selecting a quickfilter will override the region-selector box. Each filter has these parameters:

### `name`

- **Type:** `String`
- **Required:** Yes

Filter name. Displayed on the button

### `region`

- **Type:** `String`
- **Required:** No

Numeric code for the specified region

### `feeds`

- **Type:** `number[]`
- **Required:** No

Array of feednumbers to get news from

### `columns`

- **Type:** `Array`
- **Default:** `["HEADLINE","SOURCE","TIME"]`

An array of columns/values for the table.

### `enableQuickFilter`

- **Type:** `boolean`
- **Default:** `false`

Enables the quick-filter textbox that allows the user to quickly do a keyword-search through the loaded headlines.

### `preSelectedRegions`

- **Type:** `string[]`
- **Default:** `false`

Sets regions in array to selected as default.

### `maxItems`

- **Type:** `number`
- **Default:** `20`

The maximum number of items to download.

### `paging`

- **Type:** `boolean`
- **Default:** `false`

Enables paging to split the available news-items into separate pages and displays paging-controls.

### `pageItems`

- **Type:** `number`
- **Default:** `20`

The maximum number of items to show per page. If paging is false, this value is always equal to maxItems.

### `useLightbox`

- **Type:** `boolean`
- **Default:** `true`

If enabled, automatically shows any selected news-item in an overlaid box while dimming the rest of the page. Links to another web-based source will always be opened in a separate window/tab, never in the lightbox.

### `filterFunction`

- **Type:** `function`
- **Required:** No

A function taking in a news-item and returning a boolean. If this function returns false, the item is removed from the news-list.

### `onNewsItemSelected`

- **Type:** `function`
- **Required:** No

A function taking in a news-item. This function will be called when a news-item is selected in the list.

### Example

```html
<script type="text/javascript">
var opts = new Infront.NewsListWidgetOptions();
opts.columns = ["TIME", "HEADLINE","SHORT_SOURCE"];
opts.preSelectedRegions = ["FRANCE"];
opts.streaming = true;
opts.paging = true;
opts.pageItems = 12;
infront.newsListWidget("newsWidget", opts);
</script>
...
<div id="newslist1"></div>            
<div id="newslist2"></div>
        
```
