---
title: "Financial calendar widget"
kind: legacy-widget
page_type: legacy-reference
product: "Infront Web Toolkit"
library_version: "3.x"
status: "legacy — superseded by the 4.x docs in ../../reference; Infront's own banner says this site is no longer updated"
legacy_page: "MarketDataWidgets"
widget_id: "FinancialCalendarWidget"
extends: "WidgetBaseOptions"
option_count: 14
options: ["instrument", "countryCodes", "feeds", "paging", "pageItems", "startDate", "endDate", "layout", "enableRegionSelector", "startEmpty", "showCategory", "showTicker", "defaultSortOrder", "onInstrumentSelected"]
source_url: "https://doc.infrontfinance.com/v3/MarketDataWidgets#FinancialCalendarWidget"
---

# Financial calendar widget

```javascript
InfrontWidget = Infront.financialCalendarWidget(target, [options]);
```

Extends [WidgetBaseOptions](../CoreObjects/WidgetOptions.md)

This widget shows a financial calendar for a given country/feed/instrument (or a set of).

### `instrument`

- **Type:** `Instrument`
- **Required:** no

The instrument to show a calendar for.

### `countryCodes`

- **Type:** `string[]`
- **Required:** no

The country/countries to show a calendar for. [Wikipedia list of country ISO 3166-1 codes](http://no.wikipedia.org/wiki/ISO_3166-1_alfa-2).

### `feeds`

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

### `enableRegionSelector`

- **Type:** `boolean`
- **Default:** `false`

Enables region selector

### `startEmpty`

- **Type:** `boolean`
- **Default:** `false`

Starts widget with no data

### `showCategory`

- **Type:** `boolean`
- **Default:** `false`

Displays category

### `showTicker`

- **Type:** `boolean`
- **Default:** `true`

Displays ticker

### `defaultSortOrder`

- **Type:** `enum`
- **Default:** `SortOrder.Desc`

Sorts based on column name. Values that can be sent in Desc, Asc, None

### `onInstrumentSelected`

- **Type:** `(instrument: Instrument) => void`
- **Required:** No

Callback that indicates whether the instrument is selected and returns it

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
