---
title: "Broker statistics widget"
kind: legacy-widget
page_type: legacy-reference
product: "Infront Web Toolkit"
library_version: "2.x"
status: "legacy — superseded by the 4.x docs in ../../reference; Infront's own banner says this site is no longer updated"
legacy_page: "MarketDataWidgets"
widget_id: "BrokerstatsWidget"
option_count: 29
options: ["target", "options", "target", "options", "widgetTitle", "id", "persistState", "storageType", "linkChannels", "decimals", "hasContentCallback", "widgetStateCallback", "navButton", "navButtonClicked", "useOriginal", "showSearchWidget", "instrument", "feed", "broker", "period", "enablePeriodSelector", "maxItems", "maxItems", "onInstrumentSelected", "onBrokerSelected", "tickerInHeader", "columns", "defaultSortedColumn", "defaultSortOrder"]
source_url: "https://doc.infrontfinance.com/v2/MarketDataWidgets#BrokerstatsWidget"
---

# Broker statistics widget

```javascript
InfrontWidget = Infront.brokerstatsWidget(target, [options]);
```

The broker statistics widget shows a table of broker statistics for a feed, an instrument or a specific broker.

### `target`

- **Type:** `String or HTMLElement`

An identifier for the target element. If a string it will be interpreted as an element id.

### `options`

- **Type:** `Object`

A map of configuration-options.

### Standard columns

Standard column-names available for this table is listed below. Available columns may vary based on the configuration of the other parameters. For example, a ticker-column would be empty for a list
of brokers.

|  |  |  |  |
|---|---|---|---|
| TICKER | FULL_NAME | ISIN | CURRENCY |
| CFI | MARKET | NAME | FULLNAME |
| TIME | BUYS | SELLS | INT_TRADES |
| BUY_VOLUME | SELL_VOLUME | INT_VOLUME | TOTAL_VOLUME |
| BUY_VALUE | SELL_VALUE | INT_VALUE | AVG_BUY |
| AVG_SELL | NET_BUY_VALUE | HIT_VALUE | HIT_VALUE_PCT |
| TAKE_VALUE | TAKE_VALUE_PCT | TOTAL_VALUE | TOTAL_VALUE_PCT |
| TRADES |  |  |  |

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

This component shares some options with other lists/tables. These options are described in a [common section](https://doc.infrontfinance.com/core.php#Lists). Only parameters specific
to this component are described here.

This widget requires either an instrument, a feed or a broker:

### `instrument`

- **Type:** `Instrument`
- **Required:** No

The instrument. This shows a list of brokers.

### `feed`

- **Type:** `number`
- **Required:** No

If specified, the feed you want to show statistics for. This shows a list of brokers.

### `broker`

- **Type:** `string`
- **Required:** No

If specified, the broker you want to show statistics for. This shows a list of instruments.

### `period`

- **Type:** `string`
- **default:** InfrontConstants.BrokerStatsPeriodes.INTRADAY

The time-period you want to show:

### `enablePeriodSelector`

- **Type:** `boolean`
- **Required:** No

Shows period selector for the widget

### `maxItems`

- **Type:** `number`
- **Required:** No

Sets max items to be displayed

### `maxItems`

- **Type:** `number`
- **Required:** No

Sets maximum items to be displayed

### `onInstrumentSelected`

- **Type:** `(instrument: Instrument) => void`
- **Required:** No

Callback that indicates whether the instrument is selected and returns it

### `onBrokerSelected`

- **Type:** `(broker: string) => void`
- **Required:** No

Callback that indicates whether the broker is selected and returns it

### `tickerInHeader`

- **Type:** `number`
- **Required:** No
- **Default:** `false`

Displays ticker in header

### `columns`

- **Type:** `Array`
- **Default:** `["NAME", "FULLNAME", "BUY_VOLUME", "SELL_VOLUME", "INT_VOLUME", "TOTAL_VOLUME"]`

An array of columns/values for the table.

### `defaultSortedColumn`

- **Type:** `any`
- **Default:** `0`

Sorts based on column name

### `defaultSortOrder`

- **Type:** `enum`
- **Default:** `SortOrder.Desc`

Sorts based on column name. Values that can be sent in Desc, Asc, None

- InfrontConstants.BrokerStatsPeriodes.INTRADAY
- InfrontConstants.BrokerStatsPeriodes.TWO_DAYS
- InfrontConstants.BrokerStatsPeriodes.ONE_WEEK
- InfrontConstants.BrokerStatsPeriodes.ONE_MONTH
- InfrontConstants.BrokerStatsPeriodes.THREE_MONTHS
- InfrontConstants.BrokerStatsPeriodes.SIX_MONTHS
- InfrontConstants.BrokerStatsPeriodes.ONE_YEAR
- InfrontConstants.BrokerStatsPeriodes.YTD

### Example

```html
<script type="text/javascript">
    var opts = new Infront.BrokerstatsWidgetOptions();
    opts.instrument = new Infront.Instrument(100, "NOKIA");
    opts.columns = ["NAME", "FULLNAME", "BUY_VALUE", "SELL_VALUE", "TOTAL_VALUE"];
    opts.period = InfrontConstants.BrokerStatsPeriodes.INTRADAY;
    opts.sortable = true;
    opts.defaultSortedColumn = 4;
    opts.enablePeriodSelector = true;

    infront.brokerstatsWidget("#bstats", opts);
</script>
...
<div id="bstats"></div>
```
