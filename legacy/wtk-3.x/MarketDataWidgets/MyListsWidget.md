---
title: "My lists widget"
kind: legacy-widget
page_type: legacy-reference
product: "Infront Web Toolkit"
library_version: "3.x"
status: "legacy — superseded by the 4.x docs in ../../reference; Infront's own banner says this site is no longer updated"
legacy_page: "MarketDataWidgets"
widget_id: "MyListsWidget"
extends: "CommonListOptions"
option_count: 12
options: ["hideSearchWidget", "hideListSelector", "tabs", "id", "label", "columns", "selectedList", "onInstrumentAdded", "onInstrumentRemoved", "linkAction", "rightAlignSearchBoxDropdown", "notificationsTargetElementId"]
source_url: "https://doc.infrontfinance.com/v3/MarketDataWidgets#MyListsWidget"
---

# My lists widget

```javascript
InfrontWidget = Infront.myListsWidget(target, [options]);
```

Extends [CommonListOptions](../CoreObjects/CommonListOptions.md)

The My lists widget displays a range a of customised lists across one or more tables (tabbed). The lists are made and maintained by the user.

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

### `hideSearchWidget`

- **Type:** `boolean`
- **Required:** No
- **Default:** `false`

Allow show / hide for the search box to add instruments to the list.

### `hideListSelector`

- **Type:** `boolean`
- **Required:** No
- **Default:** `false`

If true it will remove list selector.

### `tabs`

- **Type:** `Object`
- **Required:** No

Defines a tabbed menu, each tab can contain different columns:

### `id`

- **Type:** `String`
- **Required:** Yes

The id of the tab.

### `label`

- **Type:** `String`
- **Required:** Yes

The name/title for the tab.

### `columns`

- **Type:** `Array`
- **Required:** Yes

An array of columns/values for the table.

### `selectedList`

- **Type:** `(list: string) => void`
- **Required:** No

This callback will be called when a list has been selected.

### `onInstrumentAdded`

- **Type:** `(list: string, instrument: Instrument) => void`
- **Required:** No

This callback will be called after adding instrument to the selected list.

### `onInstrumentRemoved`

- **Type:** `(list: string, instrument: Instrument) => void`
- **Required:** No

This callback will be called after removing an instrument from the selected list.

### `linkAction`

- **Type:** `LinkAction`
- **Default:** `LinkAction.None`

Sets link action. Possible values are - Replace | Append | None

### `rightAlignSearchBoxDropdown`

- **Type:** `boolean`
- **Default:** `false`

Aligns search box dropdown to right

### `notificationsTargetElementId`

- **Type:** `string`

Sets target element id which should be same as the element id assigned to the widget.

### Example

```html
<script type="text/javascript">
/* This configuration shows two tabs with four fields each, */
/* sorted descending by the second column                   */
    var opts = new Infront.MyListsWidgetOptions();
    opts.sortable = true;
    opts.defaultSortedColumn = 2;
    opts.defaultSortOrder = Infront.SortOrder.Desc;
    opts.columns = ["TICKER", "CURRENCY", "LAST", "PCT_CHANGE", "YTD_CHANGE"];
    opts.tabs = [{
        id:"overview",
        label:"Overview",
        columns:["TICKER", "CURRENCY", "LAST"]
    },{
        id: "performance",
        label: "Performance",
        columns: ["TICKER", "YTD_CHANGE", "PCT_CHANGE"]
    }];
    infront.myListsWidget("#my-lists", opts);
</script>
...
<div id="mylist"></div>
        
```
