---
title: "News widget"
kind: legacy-widget
page_type: legacy-reference
product: "Infront Web Toolkit"
library_version: "3.x"
status: "legacy — superseded by the 4.x docs in ../../reference; Infront's own banner says this site is no longer updated"
legacy_page: "MarketDataWidgets"
widget_id: "NewsWidget"
extends: "WidgetBaseOptions"
option_count: 30
options: ["instrument", "instruments", "feeds", "enableRegionSelector", "enableSourceSelector", "customFilters", "name", "region", "feeds", "columns", "enableQuickFilter", "preSelectedRegions", "maxItems", "paging", "pageItems", "useLightbox", "filterFunction", "onNewsItemSelected", "streaming", "maxDays", "enableUserFilter", "types", "preSelectNews", "cssURL", "layout", "enableHeaderLine", "preventDefault", "showFlashNewsFilter", "showFlashNewsOnly", "onPageChange"]
source_url: "https://doc.infrontfinance.com/v3/MarketDataWidgets#NewsWidget"
---

# News widget

```javascript
InfrontWidget = Infront.newsListWidget(target, [options]);
```

Extends [WidgetBaseOptions](../CoreObjects/WidgetOptions.md)

This widget shows a list of news-headlines with source and time/date from one or more news-feeds.

The news widget requires that you either:

1. Specify one instrument or list of instruments
2. Specify one or more feeds
3. Set enableRegionSelector to true
4. Specify customFilters

### `instrument`

- **Type:** `Instrument`
- **Required:** No

The instrument to show news for.

### `instruments`

- **Type:** `Instrument[]`

Multiple instruments to show news for.

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
- **Default:** `["TIME", "HEADLINE", "SHORT_SOURCE"]`

An array of columns/values for the table. Available columns are:

- HEADLINE
- CATEGORY
- SOURCE
- SHORT_SOURCE
- TIME

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

### `streaming`

- **Type:** `boolean`
- **Default:** `true`

If enabled, broadcasts data to the widget.

### `maxDays`

- **Type:** `number`
- **Default:** `30`

Sets filter of maximum days to display

### `enableUserFilter`

- **Type:** `number`

Enables user filter

### `types`

- **Type:** `string[]`

Types filter

### `preSelectNews`

- **Type:** `boolean`

Enables preselected news

### `cssURL`

- **Type:** `string`
- **Default:** `null`

Use custom css file by sending its url as an option.

### `layout`

- **Type:** `NewsListLayout`
- **Default:** `NewsListLayout.table`

Select news layout from NewsListLayout.table | NewsListLayout.flex

### `enableHeaderLine`

- **Type:** `boolean`
- **Default:** `true`

Enables header line

### `preventDefault`

- **Type:** `boolean`
- **Default:** `true`

Stops the default action of an element from happening

### `showFlashNewsFilter`

- **Type:** `boolean`
- **Default:** `true`

Displays flash news filter

### `showFlashNewsOnly`

- **Type:** `boolean`
- **Default:** `false`

Displays flash news only

### `onPageChange`

- **Type:** `(pageIndex: number) => void`

Callback that returns page index whenever it changes

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
