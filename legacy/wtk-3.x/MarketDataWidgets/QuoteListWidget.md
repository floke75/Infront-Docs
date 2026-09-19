---
title: "Quote list widget"
kind: legacy-widget
page_type: legacy-reference
product: "Infront Web Toolkit"
library_version: "3.x"
status: "legacy — superseded by the 4.x docs in ../../reference; Infront's own banner says this site is no longer updated"
legacy_page: "MarketDataWidgets"
widget_id: "QuoteListWidget"
extends: "CommonListOptions"
option_count: 44
options: ["createExpandRow", "onInstrumentSelected", "setMaxItems(count: number)", "expandableRows", "feed", "instruments", "instrumentTypes", "issuer", "preferredIssuers", "showIssuers", "issuersHasAll", "issuersHasNone", "preferredUnderlying", "showUnderlyings", "underlyingsHasNone", "showFilters", "showExpiries", "layout", "linkAction", "maxItems", "rowSelectable", "selectedRow", "selectedInstrument", "showDropDowns", "onItemCountChange", "tabs", "tabs.id", "tabs.label", "tabs.columns", "useChains", "chains", "chain.feed", "chain.name", "chain.description", "defaultChain", "enableSearch", "dropDownItemClick", "chainButtonTitle", "types", "cacheKeyConverter", "customDropDowns", "customElementsBefore", "customElementsAfter", "secondarySortedColumn"]
source_url: "https://doc.infrontfinance.com/v3/MarketDataWidgets#QuoteListWidget"
---

# Quote list widget

```javascript
InfrontWidget = InfrontUI.quoteListWidget(target, [options]);
```

Extends [CommonListOptions](../CoreObjects/CommonListOptions.md)

A generic and highly configurable market data table.

### Functions

### `createExpandRow`

- **Type:** `function(Instrument, HTMLElement, optional?)`

Callback that is called when the row is clicked. The callback receives the concrete instrument that was clicked (as an Instrument-object), the row that was clicked (as an HTMLElement), and an additional (as an optional any) item, as parameters. Requires that 'layout' options is set to 'Infront.ListLayout.DIV'.

### `onInstrumentSelected`

- **Type:** `function(Instrument)`

Callback that is called when a row in the list is clicked. The callback receives the concrete instrument that was clicked, as an Instrument-object, as a parameter.

### `setMaxItems(count: number)`

- **Example:** quoteListWidget.setMaxItems(20);

Modifies the number of visible rows in a QuoteListWidget.

### Standard columns

Standard column-names available for this table are:

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
| VOLUME_AVD_PCT | SHARE_CAPITAL | Y_SHARE_CAPITAL | ADV |
| ESMA_TYPE | ESMA_ADV | ATR30 | ATR30_HISTORICAL |
| INFRONT_SECTOR | PCT_SPREAD | RANGE | EXEC_MARKET |
| START_PRICE | PAY_DAY | EPS |  |

### Fund columns

Additional fund column-names available for this table is:

|  |  |  |  |
|---|---|---|---|
| FUND_TYPE | FUND_PROSPECTIVE_BOOK_VALUE_YIELD | FUND_TOTAL_EXPENSE | FUND_TOTAL_ASSETS |
| FUND_SHARPE_RATIO | FUND_STD_DEV_1Y | FUND_PROSPECTIVE_DIVIDEND_YIELD | SEGMENT |
| ISSUER |  |  |  |

### Contributed Fund columns

Additional contributed fund column-names available for this table is:

|  |  |  |  |
|---|---|---|---|
| CONTRIBUTED_ID | CONTRIBUTED_FUND_MANAGER | CONTRIBUTED_SUSTAINABILITY | CONTRIBUTED_BUY_BUTTON |
| CONTRIBUTED_FEE | CONTRIBUTED_RISK | CONTRIBUTED_MAIN_SUPPLY | CONTRIBUTED_FUND_TEXT |
| CONTRIBUTED_STANDARD_TEXTS | CONTRIBUTED_RECOMMENDATION_TEXTS | CONTRIBUTED_PRODUCTS | CONTRIBUTED_LINKS |
| CONTRIBUTED_METADATA_00 | CONTRIBUTED_METADATA_01..02-30 | CONTRIBUTED_METADATA_31 |  |

### `expandableRows`

- **Type:** `boolean`
- **Default:** `False`

If set to true, an expandable compontent will be generated for each item row. Requires that 'layout' options is set to 'Infront.ListLayout.DIV'.

### `feed`

- **Type:** `Number`
- **Required:** This or instruments

Feed number for displaying all symbols on that feed.

### `instruments`

- **Type:** `Instrument Array`
- **Required:** This or Feed

Array of Instrument objects, the initial contents of this list.

### `instrumentTypes`

- **Type:** `string array`

A list of instrument types to limit result to.

- "NONE"
- "STOCK"
- "NEWS"
- "BOND"
- "EURO_OPTION"
- "FUTURES"
- "COMMODITY"
- "INDEX"
- "FOREX"
- "US_OPTION"
- "FUND"
- "OPTION"
- "COMBO"
- "CFD"
- "CERTIFICATE"
- "UNKNOWN"

### `issuer`

- **Type:** `string`

Use this property to limit the results list to show only instruments from assigned issuer. The user wil not be able to change the issuer later.

### `preferredIssuers`

- **Type:** `string array`

This property selects the default issuer, and allows the user to change the Issuer.

### `showIssuers`

- **Type:** `boolean`
- **Default:** `true`

Filters the list based on issuers. showFilters should be set to true in order for this to work.

### `issuersHasAll`

- **Type:** `boolean`
- **Default:** `false`

Adds "All" option to the issuers list to allow the user to ignore filtering by issuer.

### `issuersHasNone`

- **Type:** `boolean`
- **Default:** `false`

Adds "None" option to the issuers list to filter items that do not have any issuer.

### `preferredUnderlying`

- **Type:** `string`

This property selects the default underlying, and allows the user to change the underlying.

### `showUnderlyings`

- **Type:** `boolean`
- **Default:** `true`

Filters the list based on underlyings. showFilters should be set to true in order for this to work.

### `underlyingsHasNone`

- **Type:** `boolean`
- **Default:** `false`

Adds "None" option to the underlyings list to filter items that do not have an underlying.

### `showFilters`

- **Type:** `boolean`
- **Default:** `false`

By set this to true, It enables the user to filter the list by Issuers, Underlyings and Expiry dates.

### `showExpiries`

- **Type:** `boolean`
- **Default:** `true`

Filters the list based on Expiries. showFilters should be set to true in order for this to work.

### `layout`

- **Type:** `enum`
- **Default:** `Infront.ListLayout.TABLE`

Defines the layout of the list table. Options include:

- Infront.ListLayout.TABLE
- Infront.ListLayout.DIV

If set to Infront.ListLayout.TABLE, the list will be generated and organized into table elements. If set to Infront.ListLayout.DIV, the list is generated into div elements as a flex-table.

### `linkAction`

- **Type:** `enum`
- **Default:** `Infront.LinkAction.Append`

Defines the behaviour of the list when it receives an incoming link event.

### `maxItems`

- **Type:** `number`

If set, the visible number of items is limited to the given count. To change this count while widget is created, use the setMaxItems function.

### `rowSelectable`

- **Type:** `boolean`
- **Default:** `false`

Adds the css-class "cell-active-row" to the last clicked row in the list/table.

### `selectedRow`

- **Type:** `number`
- **Required:** No

Pre-selects the given row as a rowSelectable (see above).

### `selectedInstrument`

- **Type:** `Instrument`
- **Required:** No

Initially selected instrument

### `showDropDowns`

- **Type:** `boolean`
- **Default:** `True`

Gives the user a option to hide the issuer and underlying dropdown for quotelists.

### `onItemCountChange`

- **Type:** `(items: number) => void`

Event that triggers whenever the count of items change for updating any external counts.

### `tabs`

- **Type:** `Object`
- **Required:** No

Creates a tabbed table. Using this option it is possible to define a table with different layouts.

### `tabs.id`

- **Type:** `String`
- **Required:** Yes

The id of the tab.

### `tabs.label`

- **Type:** `String`
- **Required:** Yes

The name/title for the tab.

### `tabs.columns`

- **Type:** `Array`
- **Required:** Yes

An array of columns/values for the table.

### `useChains`

- **Type:** `boolean`
- **Default:** `false`

Enabels the chain viewer.

### `chains`

- **Type:** `Object[]`
- **Default:** `Empty array`

The chains to have available in the drop-down menu. The property useChains must be set to true in order to show chains.

### `chain.feed`

- **Type:** `number`

Feednumber of the chain.

### `chain.name`

- **Type:** `String`

Name of the chain.

### `chain.description`

- **Type:** `String`

The name of the chain as shown to the user in the heading or in the drop-down.

### `defaultChain`

- **Type:** `Object`
- **Default:** `First object in the chains-array`

The chain to show as default when the widget loads.

### `enableSearch`

- **Type:** `boolean`
- **Default:** `false`

Enables search in widget

### `dropDownItemClick`

- **Type:** `(item: any) => void`

Callback that is called when the dropdown item is clicked. Returns clicked item. It is possible to use the property "id" to know the origin of the item. If the clicked item belogs to issuers then the "id" would be "issuersDropDown", underlyings would be "underlyingDropDown", expiries would be "expiryDatesDropDown" and chains would be "chainsDropDown". It is possible to assign user-defined id for custom dropdowns by setting the desired "id" in DropDownOptions.

### `chainButtonTitle`

- **Type:** `string`

Use this property to alter chains button title.

### `types`

- **Type:** `Array`
- **Default:** `["FEED", "INDEX", "GLOBAL"]`

Array of types you want to show. Default are all types.

### `cacheKeyConverter`

- **Type:** `(originalKey: string, column: Field) => string`

Converts the base cacheKey into the key pointing to the location of this specific column

### `customDropDowns`

- **Type:** `[DropDownOptions](../CoreObjects/DropDownOptions.md)[]`

Creates custom dropwdows in QuoteList toolbar.

### `customElementsBefore`

- **Type:** `HTMLElement[]`

Add custom HTML element (s) to the beginning of QuoteListWidget's toolbar.

### `customElementsAfter`

- **Type:** `HTMLElement[]`

Add custom HTML element (s) to the end of QuoteListWidget's toolbar.

### `secondarySortedColumn`

- **Type:** `number or string`
- **Required:** No
- **Default:** `TICKER column`

Sets which column should be used to sort the list when sorting column has similar values. this can be either the columns index in the columns-array, or the name of the column as a string.

### Example

```html
<script type="text/javascript">
/* 
*  This is the table layout version of the quotelist
*/
var opts = new Infront.QuoteListWidgetOptions();
opts.instruments = [
    new Infront.Instrument(6880, "990100P"),
    new Infront.Instrument(20, "DJI"),
    new Infront.Instrument(2087, "COMP"),
    new Infront.Instrument(2088, "SP500"),
    new Infront.Instrument(2018, "UKX")
];
opts.columns = ["FULL_NAME", "CURRENCY", "LAST"];
infront.quoteList("#quotelist", opts);

/* 
*  This is the flex layout version of the quotelist
*/
var optsflex = new Infront.QuoteListWidgetOptions();
optsflex.instruments = opts.instruments;
optsflex.layout = Infront.ListLayout.DIV;
optsflex.expandableRows = true;
optsflex.createExpandRow = function (instrument, element) {
	var container = document.createElement("div");
	container.setAttribute("style", "width:100%;height:200px");
	element.appendChild(container);
	var opts = new Infront.FocusWidgetOptions();
	opts.instrument = instrument;
	var focus = infront.focusWidget(container, opts);
  
  	return function () {
        /* If you are using widgets while handling incomplete data
        *  it is recommended that you use try catch functions. 
        *  ALWAYS call destroy methods of widgets used in createExpandRow
        */
        	try {
        		focus.destroy();
         	}
         	catch (error) {
        		console.log(error);
        	}
        /* end return function by removing the container */
		container.parentElement.removeChild(container);
	}; 
}
infront.quoteList("quotelist-flex", optsflex);

</script>
...
<div id="quotelist"></div>
<div id="quotelist-flex"></div>
    
```
