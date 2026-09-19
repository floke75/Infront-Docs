---
title: "Orders widget"
kind: legacy-widget
page_type: legacy-reference
product: "Infront Web Toolkit"
library_version: "3.x"
status: "legacy — superseded by the 4.x docs in ../../reference; Infront's own banner says this site is no longer updated"
legacy_page: "TradingWidgets"
widget_id: "OrdersWidget"
option_count: 7
options: ["showStatuses", "hideStatuses", "showTypes", "hideTypes", "stopLossOnly", "onOrderSelected", "modifyClick"]
source_url: "https://doc.infrontfinance.com/v3/TradingWidgets#OrdersWidget"
---

# Orders widget

```javascript
InfrontWidget = InfrontUI.orders(target, [options]);
```

Options class extends [TradingTableWidgetOptions](../CoreObjects/TradingTableWidgetOptions.md)

A highly configurable widget to show orders from the trading gateway for a given portfolio.

### Available columns

Standard column-names available for this table is listed below. In addition, most columns available for standard quote-lists are also available here.

|  |  |  |  |
|---|---|---|---|
| ORDER_ID | FAIL_CODE | ERROR_MESSAGE | PORTFOLIO |
| CUSTOMER_ID | BUY_OR_SELL | PRICE | AVG_PRICE |
| VOLUME | OPEN_VOLUME | ORDER_TYPE | CREATED |
| CHANGED | VALID_UNTIL | ORDER_STATUS | VOLUME_FILLED |
| COMMENT | ACCUMULATED_TRADED | TRANSACTION_ID | EXCHANGE_ORDER_ID |
| READ_ONLY |  |  |  |

Columns specific to certain strategies:

|  |  |  |  |
|---|---|---|---|
| TRIGGERCOND | TRIGGERPX | ORDERLIMITPX | TRIGGERVALID |
| TRAILLIMIT | PCTFROMLAST | TICKSFROMLAST | -BESTPX |
| -ENTRYPX | -FORETGTPX | -TRIGGERATPX |  |

Order statuses:

- Infront.OrderStatus.INACTIVE_ORDER
- Infront.OrderStatus.ORDER_REQUEST
- Infront.OrderStatus.EXCHANGE_ORDER
- Infront.OrderStatus.INTERNAL_ORDER
- Infront.OrderStatus.DELETE_REQUEST
- Infront.OrderStatus.OFFLINE_ORDER
- Infront.OrderStatus.DELETED_ORDER
- Infront.OrderStatus.MONITOR_ORDER
- Infront.OrderStatus.EXECUTED_ORDER
- Infront.OrderStatus.WORKING_ORDER
- Infront.OrderStatus.MODTONEW_ORDER
- Infront.OrderStatus.DONE_FOR_DAY
- Infront.OrderStatus.REJECTED_ORDER
- Infront.OrderStatus.EXPIRED_ORDER
- Infront.OrderStatus.PENDING_INSERT_ORDER
- Infront.OrderStatus.PENDING_MODIFY_ORDER
- Infront.OrderStatus.PENDING_DELETE_ORDER
- Infront.OrderStatus.CARE_REQUEST

Order types:

- Infront.OrderType.NORMAL
- Infront.OrderType.FILL_OR_KILL
- Infront.OrderType.FILL_AND_KILL
- Infront.OrderType.FILL_OR_NOTHING
- Infront.OrderType.CROSS
- Infront.OrderType.BEST_POSSIBLE
- Infront.OrderType.AT_MARKET
- Infront.OrderType.MARKET
- Infront.OrderType.MARKET_TO_LIMIT
- Infront.OrderType.AT_MARKET_AND_KILL
- Infront.OrderType.QUOTE_ORDER
- Infront.OrderType.LIMIT_OR_MARKET_ON_CLOSE
- Infront.OrderType.STOP_LIMIT
- Infront.OrderType.STOP_LOSS
- Infront.OrderType.CONTINGENT
- Infront.OrderType.FLEX
- Infront.OrderType.INTEREST
- Infront.OrderType.ACCEPT
- Infront.OrderType.PARENT
- Infront.OrderType.STRATEGY
- Infront.OrderType.FIX
- Infront.OrderType.LIMIT_TO_MARKET
- Infront.OrderType.BEST_TO_LIMIT
- Infront.OrderType.MULTI_LEG
- Infront.OrderType.MARKET_FOK
- Infront.OrderType.MARKET_FAK
- Infront.OrderType.PEGGED
- Infront.OrderType.AT_OPEN
- Infront.OrderType.AT_CLOSE
- Infront.OrderType.OCO

### `showStatuses`

- **Type:** `string[]`
- **Default:** `All`

What type of order statuses to display. Order statuses listed above.

### `hideStatuses`

- **Type:** `string[]`
- **Default:** `None`

What type of order statuses to hide. Order statuses listed above.

### `showTypes`

- **Type:** `string[]`

Displays types

### `hideTypes`

- **Type:** `string[]`

Hides types

### `stopLossOnly`

- **Type:** `boolean`

Stops loss only

### `onOrderSelected`

- **Type:** `(orderId:number)=>void`

Callback that is called on order selected

### `modifyClick`

- **Type:** `(portfolio: string, orderId: number) => void`

Callback then is called when modify is clicked

### Example

```html
<script type="text/javascript">
    var orderOpts = new Infront.OrdersWidgetOptions();
    orderOpts.sortable = true;
    orderOpts.defaultSortedColumn = "TICKER";
    orderOpts.showStatuses = [Infront.OrderStatus.EXCHANGE_ORDER];
    orderOpts.columns = [
        "ORDER_ID",
        "BUY_OR_SELL",
        "TICKER",
        "ORDER_STATUS",
        "ORDER_TYPE",
        "PRICE",
        "LAST", 
        {
            "name":"DIFF",
            "heading":"Diff",
            "type":"computed",
            "computeFields":["PRICE", "LAST"],
            "compute":function(rowId, args) {
                return args[0] - args[1];
            }
        },
        "VOLUME",
        "VOLUME_FILLED",
        {
            "heading":"Fill%",
            "name":"PCT_FILL",
            "type":"computed",
            "computeFields":["VOLUME","VOLUME_FILLED"],
            "dataType":Infront.DataType.Integer,
            "compute":function(rowId,args) {
                return (args[1]/args[0])*100;
            },
            "translate":function(rowId, val) {
                var retVal = "<div class=\"cell-w-orders__order-fill-bar\" style=\"background-color:#ddd;\"><div class=\"cell-w-orders__order-fill-bar__filled\" style=\"width:" + val + "%;\"></div></div>";
                return retVal;
            }
        }
    ];
    infrontUI.ordersWidget("#orders", orderOpts);
</script>
...
<div id="order-entry"></div>
        
```
