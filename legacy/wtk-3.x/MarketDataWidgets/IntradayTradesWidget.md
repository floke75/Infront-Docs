---
title: "Intraday trades widget"
kind: legacy-widget
page_type: legacy-reference
product: "Infront Web Toolkit"
library_version: "3.x"
status: "legacy — superseded by the 4.x docs in ../../reference; Infront's own banner says this site is no longer updated"
legacy_page: "MarketDataWidgets"
widget_id: "IntradayTradesWidget"
extends: "SingleInstrumentWidgetOptions"
option_count: 5
options: ["pageItems", "paging", "tickerInHeader", "columns", "defaultSortedColumn"]
source_url: "https://doc.infrontfinance.com/v3/MarketDataWidgets#IntradayTradesWidget"
---

# Intraday trades widget

```javascript
InfrontWidget = Infront.intradayTradesWidget(target, [options]);
```

Extends [SingleInstrumentWidgetOptions](../CoreObjects/SingleInstrumentWidgetOptions.md)

Shows the latest trades of a given instrument.

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
| TRADES | ATR30 | ADV | VOLUME_ADV_PCT |
| Y_SHARE_CAPITAL | SHARE_CAPITAL | INFRONT_SECTOR | PCT_SPREAD |

### `pageItems`

- **Type:** `number`
- **Default:** `20`

Sets how many trades that are shown for the instrument.

### `paging`

- **Type:** `boolean`
- **Default:** `true`

Enables paging to split the available trades into separate pages and displays paging-controls.

### `tickerInHeader`

- **Type:** `boolean`
- **Default:** `false`

Sets whether the instrument is going to be shown in the title or not.

### `columns`

- **Type:** `any[]`
- **Default:** `["LAST", "VOLUME", "BUYER", "SELLER", "TIME"]`

This is where you specify which columns you want in your table, and where you want them. Columns can be specified as a name or an object of parameters.

### `defaultSortedColumn`

- **Type:** `any`
- **Default:** `"TIME"`

Sorts based on a column

### Example

```html
<script type="text/javascript">
var opts = new Infront.IntradayTradesWidgetOptions();
opts.instrument = new Infront.Instrument(100, "NRE1V")
opts.pageItems = 20;
opts.paging = false;
opts.columns = [
  {
    name: "TIME",
    className: "cell-text-left"
  },
  "VOLUME",
  {
    name: "BUYER",
    className: "cell-text-center"
  },
  {
    name: "SELLER",
    className: "cell-text-center"
  },
  "LAST",
];

infront.intradayTradesWidget("#intradaytrades", opts);
</script>
...
<div id="intradaytrades"></div>
```
