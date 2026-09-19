---
title: "Lists and tables"
kind: legacy-widget
page_type: legacy-reference
product: "Infront Web Toolkit"
library_version: "2.x"
status: "legacy — superseded by the 4.x docs in ../../reference; Infront's own banner says this site is no longer updated"
legacy_page: "CoreObjects"
widget_id: "Lists"
option_count: 61
options: ["columns", "sortable", "defaultSortedColumn", "defaultSortOrder", "compareCaseInsensitive", "enableChangeStatusColors", "className", "interactionHighlight", "extraColumns", "extraOptions", "tabs", "id", "lable", "columns", "loadSavedColumns", "onColumnsChanged", "availableColumns", "enableColumnsMove", "enableColumnsResize", "decimals", "layout", "defaultContent", "expandableRows", "expandableRows", "onSettingsClicked", "onColumnDeleted", "onColumnMoving", "onColumnMoving", "onColumnMoved", "onColumnInsert", "onColumnsResized", "onResetColumns", "Note", "name", "type", "hover", "heading", "headingHover", "className", "translate", "sortable", "shorten", "hidden", "decimals", "dataType", "highlightChange", "footer", "showExtra", "sourceField", "currency", "content", "computeFields", "compute", "onClick", "addColumn", "insertColumn", "removeColumn", "moveColumn", "resetColumns", "saveColumns", "loadColumns"]
source_url: "https://doc.infrontfinance.com/v2/CoreObjects#Lists"
---

# Lists and tables

The tables that lets you configure column-configurations do this the same way and have much of the same functionality.
These arguments are the common ones used in the configuration-object for QuoteList, MyList, ChainViewer, IntradayTrades and more.
Default values for parameters are typically table-dependent.

### Configuration options

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

### `Note`

- **Example:** 

Note:  It is important that the correct options object must be used when instantiating a list or table widget to avoid errors.

- Quote List widget must use Infront.QuoteListWidgetOptions()
- Ranking widget must use Infront.RankingWidgetOptions()

### Column configuration

A column can be configured just by giving a name of a standard column as a string. This will merely show the value with standard formatting, and is
probably good enough most of the time. Valid column-names depends on the specific widget and is documented there.

##### For example:

```javascript
    /* Configures the list to show five standard columns */
    listOptions.columns=["TICKER", "LAST", "CHANGE", "PCT_CHANGE", "TIME"];
```

For advanced functionality, like special formatting, interaction or completely custom columns you can use the advanced column-configuration. You then
exchange the string in the array with an object. For advanced columns you can use the following parameters:

### `name`

- **Type:** `string`
- **Required:** Yes

Every column needs a name. For standard columns this is the same string you would have entered in directly in the array if you didn't want advanced configuring. For custom columns you can make up your own, but it must not collide with any official column-name. To avoid this you should use an app-/site-specific prefix.

### `type`

- **Type:** `string`
- **Default:** `Infront.FieldType.Normal`

The type of column. You only need to specifiy this if are creating a custom or computed column. Valid values are:

- Infront.FieldType.Normal
- Infront.FieldType.Custom
- Infront.FieldType.Computed
- Infront.FieldType.Converted

### `hover`

- **Type:** `string`
- **Required:** No

If you specify the name of another column, you get that columns value as a tool-tip when you hover over cells in this column.

```javascript
 //Shows full name if you hover over ticker.
 name: "TICKER",
 hover: "FULL_NAME"
```

### `heading`

- **Type:** `string`
- **Default:** `*From Dictionary*`

If you want to specify a custom heading for this column you can do so here. Every standard column has a standard heading text, so you usually don't need to do this for standard columns. If you want to change column headers across your site you should create a custom language-dictionary and install it in the library. This property is mainly for one-off changes.

### `headingHover`

- **Type:** `string`
- **Required:** No

Text to show when hovering over a column heading.

### `className`

- **Type:** `string`
- **Required:** No

Lets you specify a className (for styling or other purposes) that will be assigned to every cell in this column (including the heading).

### `translate`

- **Type:** `function`
- **Required:** No

Lets you format the cells value yourself. The supplied function should take two arguments, the rowId and the cells value in its raw format (usually a number). It may return any valid HTML, which is inserted unaltered into the cell.

```javascript
 translate: function(rowId, value){ return Math.round(value); }
```

### `sortable`

- **Type:** `boolean`
- **Default:** `True if type is Normal or Computed`

If true, sorting is enabled for this column.

### `shorten`

- **Type:** `boolean`
- **Default:** `false`

If true, numbers will be formatted with "k" or "m" instead of last last 3 or 6 digits.

### `hidden`

- **Type:** `boolean`
- **Default:** `false`

If true, this column will never be visible.

### `decimals`

- **Type:** `number`
- **Default:** `Market-specific`

Number of decimals to show

### `dataType`

- **Type:** `enum`
- **Default:** `Field-specific`

The data-type parameter can be set to adjust how the field is formatted.

### `highlightChange`

- **Type:** `boolean`
- **Default:** `Field-specific`

If true, the field will be given the class cell-status-positive if it has a positive value, or cell-status-negative if it is negative.

### `footer`

- **Type:** `string`
- **Required:** No

What kind of value you want in the footer field for this column. Currently only supports "sum". Note: Only trading/portfolio widgets supports footer fields.

### `showExtra`

- **Type:** `boolean`
- **Default:** `false`

If true and no onClick-event is set, this shows the extra-information popup for this row. Also see the extraColumns widget-property.

### `sourceField`

- **Type:** `string`
- **Required:** Only if type is kConvertedType, else ignored.

Name of the column that this one will currency convert.

### `currency`

- **Type:** `string`
- **Required:** Only if type is kConvertedType, else ignored.

Currency to convert to, ex "USD" or "EUR".

### `content`

- **Type:** `string or function`
- **Required:** Only if type is kCustomType, else ignored.

Whatever content you wish to show in a custom column. Can either be a string for static content, or a function to generate
it.

If you specify a function, it should take one parameter, rowId, which is different for each widget. If the list is a list of instruments (stocks, bonds, ETFs, etc.),
this is the instrument itself. The function may return any valid HTML, which is inserted unaltered into the cell.

```javascript
 content: function(rowId) { return rowId.ticker.length; }
```

### `computeFields`

- **Type:** `string[]`
- **Required:** Yes if type is kComputedType, else ignored.

For a computed column, this is where you specify which columns (or rather the values) should be sent as arguments to the computation-function (see below).

### `compute`

- **Type:** `function`
- **Required:** Yes if type is kComputedType, else ignored.

The function that performs the computation for this column. The function should take two arguments, rowId and args. In the args array comes the values of the columns you specified in computeFields. The framework assumes the result of a compute-field is numeric and formats it as a decimal number. If you wish to format it another way you need to provide a translate-function.

```javascript
 //calculates the mid-price
 computeFields: ["BID", "ASK"],
 compute: function (rowId, args) { return (args[0] + args[1])/2; } 
```

### `onClick`

- **Type:** `(rowId, value, extras: { target?: HTMLElement; instrument?: Instrument; }) => void`
- **Required:** No

onClick-event for this column.

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

### Editing the table

It is possible to add, insert, move and remove column(s) at runtime. You can achieve that by calling the following methods. These methods are members of the table widget object.
If the table has tabs, these methods affects the active tab.

### `addColumn`

- **Input:** column: any

Adds a new column to the table. This methode has only one input parameter and it can be column name or an object of parameters.

### `insertColumn`

**Input1:**  column: any **Input2:**  whereTo: string or number Inserts a new column into the table. The first input parameter is column name or an object of parameters. The second parameter specifies where to insert the new column. It can be number to define the index or string to define the column name to insert the new column before it.

### `removeColumn`

- **Input:** column: string or number

Removes a specific column defined by the input parameter. The input can be column index or column name.

### `moveColumn`

**Input1:**  source: string or number **Input2:**  target: string or number Moves a specific column to new index in the list or place it before a given column name.

### `resetColumns`

Recovers the original structure of the columns as it defined in "Configuration options".

### `saveColumns`

If you defined the widget's id then it is poassible to save the new structure of the columns by calling saveColumns. This method affects all the tabs.

### `loadColumns`

Loads the saved structure of the columns. You need to define the widget's id in order to make this work. This method affects all the tabs.

### Example

```html
<script type="text/javascript">
  /**
    * This example shows a list of OSEBX constituents, demonstrating
    * most of the parameters you can use when specifying columns.
    */
  infront.chainViewer("#table", {
    chains: [{
        feed: 18177,
        name: "OSEBX",
      	description: "OSEBX Constituents"
    }],
    enableSearch: false,
    sortable:true,
    columns: [
      	//Ticker with custom heading, hover-text and
        //an onClick-event that performs a Google-search.
    	{
          name: "TICKER",
          heading: "Symbol",
          hover: "FULL_NAME",
          onClick: function(rowId, value) {
            var query = value.replace(" ", "+");
            window.open("http://www.google.com/search?q=" + query, "_blank");
          }
        },
      	//Last with custom class for emphasis.
      	{
          name:"LAST",
          className: "emphasizeLast"
        },
      	//Normal change & Percent change
		"CHANGE",
		"PCT_CHANGE",
      	//Percent change with translate-function that
        //turns it into a column of up/down arrows.
      	{
          name: "PCT_CHANGE",
          heading: "",
          sortable: false,
          className: "pctChangeArrow",
          translate: function(rowId, value) {
            if( value == 0 ) {
              return "";
            } else {
              var base = "//software.infrontservices.com/wtk/themes/";
              var image = "indicator-arrow-" + (value > 0 ? "up" : "down") + ".png";
              return "<img src=\"" + base + image + "\" />";
            }
          }
        },
      	//Normal bid & ask
        "BID",
      	"ASK",
      	//Custom computed column "MID" that computes the mid-price
        //between BID and ASK.
      	{
          name: "MID",
          heading: "Mid",
          type: Infront.Column.kComputedType,
          computeFields: ["BID", "ASK"],
          compute: function(rowId, args) {
            return (args[0] + args[1])/2;
          }
        },
      	"HIGH",
      	"LOW",
      	//Hidden full name.
        {
          name: "FULL_NAME",
          hidden: true
        }
    ]
  });
}
</script>
```
