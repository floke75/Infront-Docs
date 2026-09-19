---
title: "Chain viewer widget ( Deprecated! Use quotelist widget with opts.useChains = true instead )"
kind: legacy-widget
page_type: legacy-reference
product: "Infront Web Toolkit"
library_version: "2.x"
status: "legacy — superseded by the 4.x docs in ../../reference; Infront's own banner says this site is no longer updated"
legacy_page: "MarketDataWidgets"
widget_id: "ChainViewerWidget"
option_count: 10
options: ["target", "options", "chains", "defaultChain", "feed", "types", "chain.feed", "chain.name", "chain.description", "enableSearch"]
source_url: "https://doc.infrontfinance.com/v2/MarketDataWidgets#ChainViewerWidget"
---

# Chain viewer widget ( Deprecated! Use quotelist widget with opts.useChains = true instead )

The chain view widget is now deprecated. See [Quote List](./QuoteListWidget.md) to use chainview functionality.

```javascript
InfrontWidget = InfrontUI.chainViewer(target, [options]);
```

The chain viewer is a widget specialized for showing predefined lists. The lists are created as Infront chains,
and are accessible from the configurable menu or through search.

### `target`

- **Type:** `String or HTMLElement`

An identifier for the target element. If a string it will be interpreted as an element id.

### `options`

- **Type:** `Object`

A map of configuration-options.

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

### Configuration options

This component shares some options with other lists/tables. These options are described in a [common section](https://doc.infrontfinance.com/core.php#Lists). Only parameters specific
to this component are described here.

### `chains`

- **Type:** `Object[]`
- **Default:** `Empty array`

The chains to have available in the drop-down menu.

### `defaultChain`

- **Type:** `Object`
- **Default:** `First object in the chains-array`

The chain to show as default when the widget loads.

### `feed`

- **Type:** `number`
- **Default:** `Null`

Select a feed that you want to display.

### `types`

- **Type:** `Array`
- **Default:** `["FEED", "INDEX, "GLOBAL"]`

Array of types you want to show. Default are all types.

### `chain.feed`

- **Type:** `number`

Feednumber of the chain.

### `chain.name`

- **Type:** `String`

Name of the chain.

### `chain.description`

- **Type:** `String`

The name of the chain as shown to the user in the heading or in the drop-down.

### `enableSearch`

- **Type:** `boolean`
- **Default:** `false`

If true, a text-box is shown that enables the user to search through and see the chains available to him.

### Example

```html
<script type="text/javascript">
var cvOpts = new Infront.ChainViewerWidgetOptions();
cvOpts.columns = ["TICKER", "FULL_NAME", "LAST", "CHANGE",
                  "PCT_CHANGE", "ONEXCH_VOLUME", "ONEXCH_TURNOVER", "TIME"];
cvOpts.sortable = true;
cvOpts.enableChangeStatusColors = true;
cvOpts.chains = [{
    "feed":15,
    "name":"NAS100_MANUAL",
    "description":"Nasdaq 100"
},{
    "feed":26,
    "name":"DAX",
    "description":"DAX Constituents"
}];
cvOpts.defaultChain = {
    "feed":26,
    "name":"DAX",
    "description":"DAX Constituents"
};
infront.chainViewer("#chainviewer", cvOpts);
</script>
...
<div id="chainviewer"></div>
        
```
