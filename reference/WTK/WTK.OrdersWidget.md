---
title: "OrdersWidget"
qualified_name: "WTK.OrdersWidget"
kind: class
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "WTK"
group: "Trading Widgets"
nav_path: "WTK > Trading Widgets > OrdersWidget"
source_url: "https://docs.infrontfinance.com/docs/classes/WTK.OrdersWidget.html"
defines: ["OrdersWidget"]
member_count: 11
members: ["subscribes", "unbinds", "addEventListener", "addInfrontEventObserver", "createBindings", "destroy", "modify", "newBuildUI", "newInit", "pause", "resume"]
member_groups:
  "Properties": ["subscribes", "unbinds"]
  "Methods": ["addEventListener", "addInfrontEventObserver", "createBindings", "destroy", "modify", "newBuildUI", "newInit", "pause", "resume"]
related_types: ["WTK.TradingTableWidgetBase"]
reference_count: 6
references: ["WTK.WidgetSubscriptions", "WTK.WidgetOptions", "WTK.TradingTableWidgetBase", "WTK.OrdersWidgetOptions", "WTK.WidgetBase", "WTK.InfrontWidget"]
---

# OrdersWidget

OrdersWidget class extending TradingTableWidgetBase class.

`InfrontWidget = InfrontUI.orders(target, [options]);`

A highly configurable widget to show orders from the trading gateway for a given portfolio.

Options can be configured with OrdersWidgetOptions.

#### Example

```ts
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
                var retVal = "<div class=\"cell-w-orders__order-fill-bar\"  *     style=\"background-color:#ddd;\"><div class=\"cell-w-orders__order-fill-bar__filled\"  *     style=\"width:" + val + "%;\"></div></div>";
                return retVal;
            }
        }
    ];
    infrontUI.ordersWidget("#orders", orderOpts);
</script>
...
<div id="orders"></div>
```

#### See

OrdersWidgetOptions | WidgetBase | TradingTableWidgetBase | [InfrontWidget](./WTK.InfrontWidget.md)

#### Hierarchy ([View Summary](../type-hierarchy.md#WTK.OrdersWidget))

- TradingTableWidgetBase

  - OrdersWidget

### Properties

#### `Protected` subscribes

```ts
subscribes: WidgetSubscriptions
```

Add fields and instruments to subscribe, will unsubscribe and clear on this.unsubscribe()

Inherited from TradingTableWidgetBase.subscribes

#### `Protected` unbinds

```ts
unbinds: (() => void)[] = []
```

All unbind functions added here will be executed during this.removeBindings()

Inherited from TradingTableWidgetBase.unbinds

### Methods

#### `Protected` addEventListener

```ts
addEventListener(
    element: HTMLElement,
    event: string,
    callback: (event: Event) => void,
): void
```

Adds an event and registers it so it will be removed when calling destroy

##### Parameters

- element: HTMLElement
- event: string
- callback: (event: Event) => void

##### Returns void

Inherited from TradingTableWidgetBase.addEventListener

#### `Protected` addInfrontEventObserver

```ts
addInfrontEventObserver(
    eventName: string,
    callback: (event: InfrontEvent) => void,
): void
```

Adds an infront event and registers it so it will be removed when calling destroy

##### Parameters

- eventName: string
- callback: (event: InfrontEvent) => void

##### Returns void

Inherited from TradingTableWidgetBase.addInfrontEventObserver

#### `Protected` createBindings

```ts
createBindings(): void
```

Do bindings here

##### Returns void

Inherited from TradingTableWidgetBase.createBindings

#### destroy

```ts
destroy(): void
```

Destroys this widget. You must call this before removing the widget from the Page to avoid memory leaks and make
sure the corresponding data is unsubscribed from.

##### Returns void

Inherited from TradingTableWidgetBase.destroy

#### modify

```ts
modify(options: Partial<WidgetOptions>): void
```

Modify the options for this widget.

##### Parameters

- options: Partial<WidgetOptions>

##### Returns void

Inherited from TradingTableWidgetBase.modify

#### `Protected` newBuildUI

```ts
newBuildUI(): void
```

Responsible for creating DOM and bindings

##### Returns void

Inherited from TradingTableWidgetBase.newBuildUI

#### `Protected` newInit

```ts
newInit(): void
```

Should do property initialization/resets.

##### Returns void

Inherited from TradingTableWidgetBase.newInit

#### pause

```ts
pause(): void
```

Stop this widget. Calling stop will unsubscribe all data, but will not remove the widget from the ui or the data currently contained in it.

##### Returns void

Inherited from TradingTableWidgetBase.pause

#### resume

```ts
resume(): void
```

Starts this widget if previously stopped. You do not need to call this if you haven't called pause(), widgets are
automatically started on creation.

##### Returns void

Inherited from TradingTableWidgetBase.resume
