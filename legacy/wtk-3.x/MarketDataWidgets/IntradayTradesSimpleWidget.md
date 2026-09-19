---
title: "Intraday Trades Simple Widget"
kind: legacy-widget
page_type: legacy-reference
product: "Infront Web Toolkit"
library_version: "3.x"
status: "legacy — superseded by the 4.x docs in ../../reference; Infront's own banner says this site is no longer updated"
legacy_page: "MarketDataWidgets"
widget_id: "IntradayTradesSimpleWidget"
extends: "SingleInstrumentWidgetOptions"
option_count: 7
options: ["pageItems", "tickerInHeader", "showBuyerAndSeller", "showColumnsHeaders", "onTickerClick", "onPriceClick", "onPriceInstrumentClick"]
source_url: "https://doc.infrontfinance.com/v3/MarketDataWidgets#IntradayTradesSimpleWidget"
---

# Intraday Trades Simple Widget

```javascript
InfrontWidget = Infront.intradayTradesSimpleWidget(target, [options]);
```

Extends [SingleInstrumentWidgetOptions](../CoreObjects/SingleInstrumentWidgetOptions.md)

Shows the latest trades of a given instrument.

### `pageItems`

- **Type:** `number`
- **Default:** `5`

Sets how many trades that are shown for the instrument.

### `tickerInHeader`

- **Type:** `boolean`
- **Default:** `false`

Sets whether the instrument is going to be shown in the title or not.

### `showBuyerAndSeller`

- **Type:** `boolean`
- **Default:** `false`

If true and the market provides the buyer and the seller, it is going to show buyer and seller columns.

### `showColumnsHeaders`

- **Type:** `boolean`
- **Default:** `true`

Set this to true to show the columns headers.

### `onTickerClick`

- **Type:** `function`

A callback to that will be called when title is clicked. It passes the current instrument(Instrument).

### `onPriceClick`

- **Type:** `function`

A callback to that will be called when a number in price-column is clicked. It passes one argument: price(number).

### `onPriceInstrumentClick`

- **Type:** `function`

A callback to that will be called when a number in price-column is clicked. It passes two arguments: price(number) and instrument(Instrument).

### Example

```html
<script type="text/javascript">
var opts = new Infront.IntradayTradesSimpleWidgetOptions();
opts.instrument = { "feed": 2008, "ticker": "UG" };
opts.pageItems = 10;
opts.tickerInHeader = true;
opts.showColumnsHeaders = true;
opts.showBuyerAndSeller = true;

infront.intradayTradesSimpleWidget("#intradaytradessimple", opts);
</script>
...
<div id="intradaytradessimple"></div>
```
