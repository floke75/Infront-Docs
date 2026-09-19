---
title: "Multiple values widget"
kind: legacy-widget
page_type: legacy-reference
product: "Infront Web Toolkit"
library_version: "3.x"
status: "legacy — superseded by the 4.x docs in ../../reference; Infront's own banner says this site is no longer updated"
legacy_page: "MarketDataWidgets"
widget_id: "MultipleValuesWidget"
extends: "SingleInstrumentWidgetOptions"
option_count: 17
options: ["target", "options", "widgetTitle", "id", "persistState", "storageType", "linkChannels", "decimals", "hasContentCallback", "widgetStateCallback", "navButton", "navButtonClicked", "useOriginal", "showSearchWidget", "instrument", "layout", "fields"]
source_url: "https://doc.infrontfinance.com/v3/MarketDataWidgets#MultipleValuesWidget"
---

# Multiple values widget

```javascript
InfrontWidget = Infront.instrumentValuesWidget(target, [options]);
```

Extends [SingleInstrumentWidgetOptions](../CoreObjects/SingleInstrumentWidgetOptions.md)

Shows an array of fields for a given instrument.

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
- **Required:** Yes

Sets the instrument that you want to show the info of.

### `layout`

- **Type:** `enum`
- **Required:** Yes

Defines which layout you want to use. You can choose between:

- Infront.MultipleValuesWidgetLayout.TABLE_ROW
- Infront.MultipleValuesWidgetLayout.VERTICAL

### `fields`

- **Type:** `any[]`
- **Required:** Yes

This is where you specify which fields you want in your widget. Columns can be specified as a name or an object of parameters.

### Standard fields

Standard field-names available for this table is:

|  |  |  |  |
|---|---|---|---|
| TICKER | FULL_NAME | ISIN | CURRENCY |
| CFI | MARKET | ACC_VOLUME | TURNOVER |
| ONEXCH_VOLUME | ONEXCH_TURNOVER | BID | ASK |
| BID_SIZE | ASK_SIZE | NUM_BIDS | NUM_ASKS |
| ORDERBOOK | VWAP | AVG_VOLUME | AVG_VALUE |
| OPEN | ASK | HIGH | LOW |
| LAST | PREVIOUS_CLOSE | TIME | CHANGE |
| PCT_CHANGE | NUM_TRADES | GICS | NUM_SHARES |
| RSI14 | MACD | MA50 | MA100 |
| MA200 | YTD_CLOSE | ONE_W_CLOSE | ONE_M_CLOSE |
| THREE_M_CLOSE | SIX_M_CLOSE | ONE_Y_CLOSE | TWO_Y_CLOSE |
| THREE_Y_CLOSE | FIVE_Y_CLOSE | YTD_CHANGE | ONE_W_CHANGE |
| ONE_M_CHANGE | THREE_M_CHANGE | SIX_M_CHANGE | ONE_Y_CHANGE |
| TWO_Y_CHANGE | THREE_Y_CHANGE | FIVE_Y_CHANGE | YTD_PCT_CHANGE |
| ONE_W_PCT_CHANGE | ONE_M_PCT_CHANGE | THREE_M_PCT_CHANGE | SIX_M_PCT_CHANGE |
| ONE_Y_PCT_CHANGE | TWO_Y_PCT_CHANGE | THREE_Y_PCT_CHANGE | FIVE_Y_PCT_CHANGE |
| YTD_HIGH | ONE_W_HIGH | ONE_M_HIGH | THREE_M_HIGH |
| SIX_M_HIGH | ONE_Y_HIGH | TWO_Y_HIGH | THREE_Y_HIGH |
| FIVE_Y_HIGH | YTD_LOW | ONE_W_LOW | ONE_M_LOW |
| THREE_M_LOW | SIX_M_LOW | ONE_Y_LOW | TWO_Y_LOW |
| THREE_Y_LOW | FIVE_Y_LOW | LAST_TRADE | LAST_TRADE_DATE |

### Fund fields

Additional fund field-names available for this table is:

|  |  |  |  |
|---|---|---|---|
| FUND_TYPE | FUND_PROSPECTIVE_BOOK_VALUE_YIELD | FUND_TOTAL_EXPENSE | FUND_TOTAL_ASSETS |
| FUND_SHARPE_RATIO | FUND_STD_DEV_1Y | PROSPECTIVE_BOOK_VALUE_YIELD | SEGMENT |
| MIN_INIT_INVESTMENT | START_DATE | INVESTMENT_MANDATE | PROSPECTIVE_EARNINGS_YIELD |
| FUND_STYLEBOX | FOR_SALE_IN | FOR_SALE_IN_SHORT | FOR_SALE_IN_COUNT |
| ISSUER |  |  |  |

### Contributed Fund columns

Additional contributed fund column-names available for this table is:

|  |  |  |  |
|---|---|---|---|
| CONTRIBUTED_ID | CONTRIBUTED_FUND_MANAGER | CONTRIBUTED_SUSTAINABILITY | CONTRIBUTED_BUY_BUTTON |
| CONTRIBUTED_FEE | CONTRIBUTED_RISK | CONTRIBUTED_MAIN_SUPPLY | CONTRIBUTED_FUND_TEXT |
| CONTRIBUTED_STANDARD_TEXTS | CONTRIBUTED_RECOMMENDATION_TEXTS | CONTRIBUTED_PRODUCTS | CONTRIBUTED_LINKS |
| CONTRIBUTED_METADATA_00 | CONTRIBUTED_METADATA_01 | ..02-30 | CONTRIBUTED_METADATA_31 |

### Example

```html
<script type="text/javascript">
/* This configuration show a multiple values widget for a given instrument.*/
var opts = new Infront.InstrumentValuesWidgetOptions();
opts.widgetTitle = "DNB Private Equity retail B";
opts.instrument = new Infront.Instrument(18197, "0P00009FQ5");
opts.layout = Infront.MultipleValuesWidgetLayout.VERTICAL;
opts.fields = ["FULL_NAME", "CURRENCY", "SEGMENT", "DATE"];

infront.instrumentValuesWidget("#instrumentValues", opts);
</script>
...
<div class="cell-row">
	<div class="cell cell--w4">
		<div id="instrumentValues" class="cell-content"></div>
	</div>
</div>
    
```
