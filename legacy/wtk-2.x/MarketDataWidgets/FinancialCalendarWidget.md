---
title: "Financial calendar widget"
kind: legacy-widget
page_type: legacy-reference
product: "Infront Web Toolkit"
library_version: "2.x"
status: "legacy — superseded by the 4.x docs in ../../reference; Infront's own banner says this site is no longer updated"
legacy_page: "MarketDataWidgets"
widget_id: "FinancialCalendarWidget"
option_count: 24
options: ["target", "options", "target", "options", "widgetTitle", "id", "persistState", "storageType", "linkChannels", "decimals", "hasContentCallback", "widgetStateCallback", "navButton", "navButtonClicked", "useOriginal", "showSearchWidget", "instrument", "countryCodes", "feed", "paging", "pageItems", "startDate", "endDate", "layout"]
source_url: "https://doc.infrontfinance.com/v2/MarketDataWidgets#FinancialCalendarWidget"
---

# Financial calendar widget

```javascript
InfrontWidget = Infront.financialCalendarWidget(target, [options]);
```

This widget shows a financial calendar for a given country/feed/instrument (or a set of).

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

### `instrument`

- **Type:** `Instrument`
- **Required:** no

The instrument to show a calendar for.

### `countryCodes`

- **Type:** `string[]`
- **Required:** no

The country/countries to show a calendar for. [Wikipedia list of country ISO 3166-1 codes](http://no.wikipedia.org/wiki/ISO_3166-1_alfa-2).

### `feed`

- **Type:** `number[]`
- **Required:** no

The feed(s) to show a calendar for, specified as Infront feed numbers.

Widget requires either an instrument, one or more feeds or country.

### `paging`

- **Type:** `boolean`
- **Default:** `false`

Enables paging to split the available calendar-items into separate pages and displays paging-controls.

### `pageItems`

- **Type:** `number`
- **Default:** `5 (10 if FinancialCalendarLayout.EXPANDED == true)`

Maximum number of items per page.

### `startDate`

- **Type:** `Date`
- **Default:** `today`

The starting date of the calendar.

### `endDate`

- **Type:** `Date`
- **Default:** `today + 1 month`

The ending date of the calendar.

### `layout`

- **Type:** `FinancialCalendarLayout`
- **Default:** `Infront.FinancialCalendarLayout.COMPACT`

Decides the layout of the widget, can be one of the following:

- Infront.FinancialCalendarLayout.COMPACT
- Infront.FinancialCalendarLayout.EXPANDED

### Example

```html
<script type="text/javascript">
/* This configuration shows a financial calendar for Great Britain for the next 6 months.
* Includes paging with 10 items pr page and expanded layout.
*/
    var opts = new Infront.FinancialCalendarWidgetOptions();
    opts.countryCodes = ["GB"];
    opts.endDate = InfrontUtil.addMonths(new Date(), 6);
    opts.paging = true;
    opts.layout = Infront.FinancialCalendarLayout.EXPANDED;
    infront.financialCalendarWidget("#financialcal", opts);
</script>
...
<div id="financialcal"></div>
        
```
