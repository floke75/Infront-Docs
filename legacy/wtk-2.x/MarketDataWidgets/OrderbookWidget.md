---
title: "Orderbook widget"
kind: legacy-widget
page_type: legacy-reference
product: "Infront Web Toolkit"
library_version: "2.x"
status: "legacy — superseded by the 4.x docs in ../../reference; Infront's own banner says this site is no longer updated"
legacy_page: "MarketDataWidgets"
widget_id: "OrderbookWidget"
option_count: 9
options: ["target", "options", "instrument", "decimals", "levels", "layout", "volumeBarHeight", "hideOrders", "onPriceClick"]
source_url: "https://doc.infrontfinance.com/v2/MarketDataWidgets#OrderbookWidget"
---

# Orderbook widget

```javascript
   InfrontWidget = InfrontUI.orderbookWidget(target, [options]);
```

The Orderbook shows an overview of the current orders for an instrument. The columns are configurable.

### `target`

- **Type:** `String or HTMLElement`

An identifier for the target element. If a string it will be interpreted as an element id.

### `options`

- **Type:** `Object`

A map of configuration-options.

### `instrument`

- **Type:** `instrument`
- **Required:** Yes

The instrument to show in this widget.

### `decimals`

- **Type:** `number`
- **Required:** No

Set to override number of decimals for this widget. Defaults to instrument or feed decimals if not set.

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
