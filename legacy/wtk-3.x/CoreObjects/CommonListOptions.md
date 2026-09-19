---
title: "CommonListOptions"
kind: legacy-widget
page_type: legacy-reference
product: "Infront Web Toolkit"
library_version: "3.x"
status: "legacy — superseded by the 4.x docs in ../../reference; Infront's own banner says this site is no longer updated"
legacy_page: "CoreObjects"
widget_id: "CommonListOptions"
extends: "TradingWidgetOptions"
option_count: 32
options: ["columns", "sortable", "defaultSortedColumn", "defaultSortOrder", "compareCaseInsensitive", "enableChangeStatusColors", "className", "interactionHighlight", "extraColumns", "extraOptions", "tabs", "id", "lable", "columns", "loadSavedColumns", "onColumnsChanged", "availableColumns", "enableColumnsMove", "enableColumnsResize", "decimals", "layout", "defaultContent", "expandableRows", "expandableRows", "onSettingsClicked", "onColumnDeleted", "onColumnMoving", "onColumnMoving", "onColumnMoved", "onColumnInsert", "onColumnsResized", "onResetColumns"]
source_url: "https://doc.infrontfinance.com/v3/CoreObjects#CommonListOptions"
---

# CommonListOptions

Extends [TradingWidgetOptions](./TradingWidgetOptions.md)

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

### `columns`

- **Type:** `any[]`
- **Required:** Yes

This is where you specify which columns you want in your table, and where you want them. Columns can be specified as a name or an object of parameters.

### `sortable`

- **Type:** `boolean`
- **Required:** No
- **Default:** `false`

If true, the user can sort the table by clicking on the column-header. Sorting may not be available for all types of columns.

### `defaultSortedColumn`

- **Type:** `number or string`
- **Required:** No
- **Default:** `0`

The column you want the table sorted by as default. this can either be the columns index in the columns-array, or the name of the column as a string.

### `defaultSortOrder`

- **Type:** `enum: Infront.SortOrder`
- **Required:** No
- **Default:** `SortOrder.Desc`

Sort order (Asc or Desc) for the default sorted column. can be one of:

- Infront.SortOrder.Asc
- Infront.SortOrder.Desc

### `compareCaseInsensitive`

- **Type:** `boolean`
- **Required:** No
- **Default:** `false`

Case sensitive for the default sorted column.

### `enableChangeStatusColors`

- **Type:** `boolean`
- **Required:** No
- **Default:** `false`

If true, columns in the table that indicates a change or percentage change will show a color (actually be assigned a class, you can style it any way you want) to indicate if the change is positive or negative.

### `className`

- **Type:** `string`
- **Required:** No

A special className you want assigned to the lists table-element.

### `interactionHighlight`

- **Type:** `boolean`
- **Required:** No
- **Default:** `false`

If true, the rows in the table will be highlighted when you hover the mouse over it, to indicate that you can interact with the row. This property doesn't enable any event-handling, you have to do that separately. How to do this is specified in the documentation of the specific widget you are using.

### `extraColumns`

- **Type:** `string[] or column[]`
- **Required:** No

Contains columns that will be shown as a popup on mouse-click for columns with "showExtra" set to true.

### `extraOptions`

- **Type:** `ExtendedTableRowPopupOptions`
- **Required:** No

Options to set on the popup window containing the extraColumns.

### `tabs`

- **Type:** `any[]`
- **Required:** No

Here you can specify the tabs if the table supports tabs. If you defined this, the columns property is going to be ignored. Each tab must be an object with the following parameters:

### `id`

- **Type:** `string`
- **Required:** Yes

Defines the tab's name.

### `lable`

- **Type:** `string`
- **Required:** Yes

Defines the title of the tab.

### `columns`

- **Type:** `any[]`
- **Required:** Yes

This is where you specify which columns you want in your tab. Columns can be specified as array of names or an objects.

### `loadSavedColumns`

- **Type:** `boolean`
- **Required:** No
- **Default:** `false`

If true, the saved columns structure would be auto-loaded before creating the table widget.

### `onColumnsChanged`

- **Type:** `() => void`
- **Required:** No

This event fires on after changing the structure of the columns by using addColumn, insertColumn, moveColumn, removeColumn or resetColumns.

### `availableColumns`

- **Type:** `any[]`
- **Required:** No

If an array of columns are supplied these columns can be added by the user. Make sure to set loadSavedColumns to true if this should be preserved. (Experimental feature)

### `enableColumnsMove`

- **Type:** `boolean`
- **Default:** `false`

If set to true columns can be moved around by the user. Make sure to set loadSavedColumns to true if this should be preserved. (Experimental feature, default will be changed to true at some time in the future)

### `enableColumnsResize`

- **Type:** `boolean`
- **Default:** `false`

If set to true columns can be resized by the user. Make sure to set loadSavedColumns to true if this should be preserved. (Experimental feature, default will be changed to true at some time in the future)

### `decimals`

- **Type:** `WidgetDecimals | number`
- **Required:** No
- **Default:** `WidgetDecimals.FEED`

Set to change widgets displayed number of decimals. Available values: WidgetDecimals.FEED, WidgetDecimals.INSTRUMENT, WidgetDecimals.DEFAULT(usualy 2) or a number

### `layout`

- **Type:** `ListLayout`
- **Default:** `Infront.ListLayout.TABLE`

Sets the layout for the widget. Can be one of:

- Infront.ListLayout.TABLE
- Infront.ListLayout.DIV
- Infront.ListLayout.CARD
- Infront.ListLayout.COMPACT

### `defaultContent`

- **Type:** `any`
- **Required:** No

Sets default content. Plain-text, markup-text or HTMLElement to be viewed if the list is empty

### `expandableRows`

- **Type:** `boolean`
- **Default:** `false`

Makes rows expandable

### `expandableRows`

- **Type:** `(item: any, rowElem: HTMLElement, additional?: any) => () => void`
- **Required:** No

Makes rows expandable

### `onSettingsClicked`

- **Type:** `() => void`
- **Required:** No

Callback that is called when the settings is clicked.

### `onColumnDeleted`

- **Type:** `(col: any, index) => void`
- **Required:** No

Callback that is called when the settings is clicked. The callback receives the column and its index

### `onColumnMoving`

- **Type:** `(col: any, fromIdx, toIdx) => boolean`
- **Required:** No

Callback that is called when the column is moving. The callback receives the column with from and to index number as arguments

### `onColumnMoving`

- **Type:** `(col: any, fromIdx, toIdx) => boolean`
- **Required:** No

Callback that is called when the column is moving. The callback receives the column with from and to index number as arguments

### `onColumnMoved`

- **Type:** `(col: any, fromIdx, toIdx) => void`
- **Required:** No

Callback that is called when the column is moved. The callback receives the column with from and to index number as arguments

### `onColumnInsert`

- **Type:** `(spec: any, index) => void`
- **Required:** No

Callback that is called when the column is moved. The callback receives the column definition and its index

### `onColumnsResized`

- **Type:** `(indexes: number[]) => void`
- **Required:** No

Callback that is called when the columns is resized. The callback receives indexes of the columns that is resized

### `onResetColumns`

- **Type:** `() => void`
- **Required:** No

Callback that is called when the columns is reset
