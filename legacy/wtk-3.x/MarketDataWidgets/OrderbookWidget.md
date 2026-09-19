---
title: "Orderbook widget"
kind: legacy-widget
page_type: legacy-reference
product: "Infront Web Toolkit"
library_version: "3.x"
status: "legacy — superseded by the 4.x docs in ../../reference; Infront's own banner says this site is no longer updated"
legacy_page: "MarketDataWidgets"
widget_id: "OrderbookWidget"
extends: "SingleInstrumentWidgetOptions"
option_count: 14
options: ["levels", "layout", "volumeBarHeight", "hideOrders", "onPriceClick", "streaming", "onPriceInstrumentClick", "onTickerClick", "tickerInHeader", "titleSettings", "showTicker", "showAbsoluteChange", "showPctChange", "showFooter"]
source_url: "https://doc.infrontfinance.com/v3/MarketDataWidgets#OrderbookWidget"
---

# Orderbook widget

```javascript
   InfrontWidget = InfrontUI.orderbookWidget(target, [options]);
```

Extends [SingleInstrumentWidgetOptions](../CoreObjects/SingleInstrumentWidgetOptions.md)

The Orderbook shows an overview of the current orders for an instrument. The columns are configurable.

### `levels`

- **Type:** `number`
- **Default:** `5`

The number of rows you want to show in the orderbook.

### `layout`

- **Type:** `enum`
- **Default:** `Infront.OrderbookRowLayout.WIDE`

Sets the type of layout you want for the orderbook rows. Can be one of:

- Infront.OrderbookRowLayout.WIDE (Gives the percentage-bar its own column)
- Infront.OrderbookRowLayout.COMPACT (Shows the percentage-bar as the background of the volume-column)

### `volumeBarHeight`

- **Type:** `string`
- **Default:** `12px/70% for compact/wide layout, repectively`

Sets the height of the order bar. Requires a value and a unit, eg "15px".

### `hideOrders`

- **Type:** `boolen`
- **Default:** `false`

Hides the "Orders" column.

### `onPriceClick`

- **Type:** `function`

A callback to that will be called when a number in the price-column is clicked. It is passed the two arguments price(number) and orderType(string). orderType can be one of:

- InfrontConstants.OrderType.BID
- InfrontConstants.OrderType.ASK

### `streaming`

- **Type:** `boolean`
- **Default:** `true`

If enabled, broadcasts data to the widget.

### `onPriceInstrumentClick`

- **Type:** `(price: number, orderType: string) => void`

Callback that is triggered when instrument price is clicked.

### `onTickerClick`

- **Type:** `(instrument: Instrument) => void`

Callback that is triggered when ticker is clicked.

### `tickerInHeader`

- **Type:** `boolean`

Shows ticker in header

### `titleSettings`

- **Type:** `Object`
- **Required:** No

Use this option to customize orderbook title. The possible options are:

### `showTicker`

- **Type:** `boolean`
- **Default:** `false`

Displays ticker in title.

### `showAbsoluteChange`

- **Type:** `boolean`
- **Default:** `false`

Displays change value in title.

### `showPctChange`

- **Type:** `boolean`
- **Default:** `false`

Displays percentage change value in title.

### `showFooter`

- **Type:** `boolean`
- **Default:** `false`

Use this option to display footer row that contains total information like Bid/Ask ratio and spread.

### Example

```html
<script type="text/javascript">
var opts = new Infront.OrderbookWidgetOptions();
opts.instrument = {"feed":2008, "ticker":"UG"};
opts.levels = 1;
opts.layout = Infront.OrderbookRowLayout.COMPACT;

infront.orderbookWidget("#orderbook1", opts);
</script>
...                                                                                                                                    
<div id="orderbook1"></div>                                                                                                                                    
<div id="orderbook2"></div>
    
```
