---
title: "Screener widget"
kind: legacy-widget
page_type: legacy-reference
product: "Infront Web Toolkit"
library_version: "3.x"
status: "legacy — superseded by the 4.x docs in ../../reference; Infront's own banner says this site is no longer updated"
legacy_page: "MarketDataWidgets"
widget_id: "ScreenerWidget"
extends: "WidgetBaseOptions"
option_count: 6
options: ["collapsable", "feed", "onChange", "instruments", "customRequiredFields", "customReferenceData"]
source_url: "https://doc.infrontfinance.com/v3/MarketDataWidgets#ScreenerWidget"
---

# Screener widget

```javascript
InfrontWidget = InfrontUI.screenerWidget(target, [options]);
```

Extends [WidgetBaseOptions](../CoreObjects/WidgetOptions.md)

A widget that filters symbols and displays the number of symbols within a filter that is selected.

### `collapsable`

- **Type:** `boolean`
- **Default:** `true`

If set to true, the filter groups are collapsable and expandable when clicked. If false, the filter groups are expanded and cannot be collapsed.

### `feed`

- **Type:** `number`
- **Required:** Yes

The feed to symbols specified as an Infront feed numbers.

### `onChange`

- **Type:** `(filter: FilterChangeEvent) => void`
- **Required:** No

Function fires whenever a filter is added or removed.

### `filters`

- **Type:** `FilterItem | FilterItem[]`
- **Required:** Yes
- **Default:** `false`

An array of filter objects formatted as either Infront.filterEnums, FilterGroupBaseSpecs or both Infront.FilterEnum An enum that contains standard filter groups which includes: Infront.FilterEnum.Morningstar Infront.FilterEnum.Risklevel Each enum type is a multiselect filter group. FilterGroupBaseSpec options A list of properties within a FilterGroupBaseSpec object. FilterGroupBaseSpec.filterFields Sets the field type for a custom filter. FilterGroupBaseSpec.className Sets custom css class(es) to the fitler group. This property is optional. FilterGroupBaseSpec.defaultExpanded Sets the filter group to be expanded as default. This property is optional. FilterGroupBaseSpec.header Sets a title to the filter group. This property is optional. FilterGroupBaseSpec.filterItems Sets array of custom FilterItems within the filters option FilterGroupBaseSpec.filterType FilterTypeEnum.Select - Use for one singular filter. Allows to specify only one filter in filterItems[] FilterTypeEnum.Multiselect - Default option if filterType is not specified. Option for multiselect on a group of filters. Allows for multiple items in filterItems[]. FilterTypeEnum.FreeText - Option for a text search field which can be configure to search user-inputted text on different filterFields. FilterTypeEnum.RadioSelect - Option for a radio button select list which can be configured the same way as a multiselect list. Only one filter at a time can be selected within the radio select list. FilterTypeEnum.RangeSelect - Option for a range selection of filters in filterItems[]. FilterGroupBaseSpec.placeholder Sets sets the placeholder text on input element if filterType is set to 'FreeText' FilterGroupBaseSpec.hideFromActiveFilters Set to true to avoid this filtergroup from showing up in a linked ActiveFiltersWidget FilterGroupBaseSpec.activeFilterType For value FilterTypeEnum.RangeSelect range values will be shown in a linked ActiveFiltersWidget. For example "1 to 6". FilterGroupBaseSpec.filterType has to be set to FilterTypeEnum.RangeSelect. FilterGroupBaseSpec.activeFilterSelectionCount Set to true to get number of selected filters in this filtergroup instead of the full list separated by comma in a linked ActiveFiltersWidget. For example "selected 1". FilterGroupBaseSpec.filterItems A filterItem represents a filter for the fields specified in filterFields. For filters with multiple selections, filterItems should be an array of filterItems. For simple “equals type” filterItems, the helper classes Infront.filterItemValue and Infront.filterItemString can be used to simplify the declaration. FreeTextFilter does not take any predefined filterItems, and will simply disregard them if included. FilterItem options Constructor takes 2-4 parameters: **text: string** The text to display to represent for the filter, and in the screener selected filter widget if linked to the screener. **filterFunction: (val:any[]) => boolean** The function each symbol will have to pass to be displayed when the filter is selected. The input to the function will be an array of the values of the fields specified in filterFields, for each symbol. The function must return a Boolean. **preselected:Boolean (optional)** Whether or not the filter shoud be preselected. Defaults to false **className: string (optional)** A specific class name for the filter. **filterItemValue** Helper class used to create a filterItem for filters with simple “number equals filters”. The constructor takes 2-4 parameters: **text: string** The text to display to represent for the filter, and in the screener selected filter widget if linked to the screener. **values: number[]** An array of the numbers to filter on. A symbol will only pass if one of the fields specified in filterFields contains one of the numbers in this array. **preselected:Boolean (optional)** Whether or not the filter shoud be preselected. Defaults to false **className: string (optional)** A specific class name for the filter. Defaults to "filter-value-item" **filterItemString** Helper class used to create a filterItem for filters with simple “string equals filters”. The constructor takes 2-4 parameters: **text: string** The text to display to represent for the filter, and in the screener selected filter widget if linked to the screener. **values: string[]** An array of the strings to filter. A symbol will only pass if one of the fields specified in filterFields contains one of the strings in this array. **preselected:Boolean (optional)** Whether or not the filter shoud be preselected. Defaults to false **className: string (optional)** A specific class name for the filter. Defaults to "filter-string-item";

### `instruments`

- **Type:** `Infront.Instrument[]`
- **Required:** no

List of initial instruments to show in widget

### `customRequiredFields`

- **Type:** `IDS.RealtimeTags[]`

Sets custom required fields based on realtime tags

### `customReferenceData`

- **Type:** `{ feed: number, fields: Infront.Field[] }`

Sets customReference data and binds it to fields

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

### Example

```html
<script type="text/javascript">
var opts = new Infront.ScreenerWidgetOptions();
opts.feed = 18197;
opts.linkChannels = [4555];
opts.linkAction = Infront.LinkAction.Append;
opts.title = "Filters";
opts.collapsable = true;
opts.filters = [
	{
		defaultExpanded: true,
		filterFields: "STAR_RATING",
		header: "Morningstar Rating",
		filterItems: [
			new Infront.FilterItem("Not Rated", (val) => {
			return typeof val == "undefined" || val == 0;
			}),
			new Infront.FilterItem("★", (val) => { return val == 1; }, "star-param-1"),
			new Infront.FilterItem("★★", (val) => { return val == 2; }, "star-param-2"),
			new Infront.FilterItem("★★★", (val) => { return val == 3; }, "star-param-3"),
			new Infront.FilterItem("★★★★", (val) => { return val == 4; }, "star-param-4"),
			new Infront.FilterItem("★★★★★", (val) => { return val == 5; }, "star-param-5"),
		]
	},
	{
		filterFields: ["FULL_NAME", "RISK_LEVEL"],
		//header: "Name containing:",
		placeholder: "Enter text here",
		filterType: Infront.FilterTypeEnum.FreeText,
		className: "free-text-filter2",
		filterItems: [new Infront.FilterItemValue("★★★", [3], "free-text-val")]
	},
	{
		filterFields: "STAR_RATING",
		header: "Morningstar Rating",
		filterType: Infront.FilterTypeEnum.Select,
		className: "star-select-group",
		filterItems: [ new Infront.FilterItemValue("★★★", [3], "star-select-val")]
	},
	Infront.FilterEnum.Risklevel,
];
opts.searchBox = {
	filterField: ["FULL_NAME", "RISK_LEVEL"],
	header: "NAME CONTAINING",
	placeholder: "Search here"
};

var quotelist;
var qopts = new Infront.QuoteListWidgetOptions();
qopts.linkChannels = [4555];
qopts.linkAction = Infront.LinkAction.Append;
qopts.sortable = true;
qopts.maxItems = 5;

/* this function tracks total number of items in the list */  
qopts.onItemCountChange = function (num) {
	console.log(num);
};
qopts.columns = [
	"FULL_NAME",
	{
	"name": "Tips",
	"type": "custom",
	"heading": "Tips",
	"content": "BUY",
	},
	"RISK_LEVEL",
	"STAR_RATING"
];
quoteList = infront.quoteList("quotelist", qopts);
infront.screenerWidget("screener", opts);
</script>
...
<div id="screener"></div>
<div id="quotelist"></div>

	
```
