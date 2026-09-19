---
title: "Broker statistics widget"
kind: legacy-widget
page_type: legacy-reference
product: "Infront Web Toolkit"
library_version: "3.x"
status: "legacy — superseded by the 4.x docs in ../../reference; Infront's own banner says this site is no longer updated"
legacy_page: "MarketDataWidgets"
widget_id: "BrokerstatsWidget"
extends: "CommonListOptions"
option_count: 4
options: ["instrument", "feed", "broker", "period"]
source_url: "https://doc.infrontfinance.com/v3/MarketDataWidgets#BrokerstatsWidget"
---

# Broker statistics widget

```javascript
InfrontWidget = Infront.brokerstatsWidget(target, [options]);
```

Extends [CommonListOptions](../CoreObjects/CommonListOptions.md)

The broker statistics widget shows a table of broker statistics for a feed, an instrument or a specific broker.

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
