---
title: "PositionsWidget"
qualified_name: "WTK.PositionsWidget"
kind: class
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "WTK"
group: "Trading Widgets"
nav_path: "WTK > Trading Widgets > PositionsWidget"
source_url: "https://docs.infrontfinance.com/docs/classes/WTK.PositionsWidget.html"
defines: ["PositionsWidget"]
member_count: 11
members: ["constructor", "subscribes", "unbinds", "addEventListener", "addInfrontEventObserver", "createBindings", "destroy", "modify", "newInit", "pause", "resume"]
member_groups:
  "Constructors": ["constructor"]
  "Properties": ["subscribes", "unbinds"]
  "Methods": ["addEventListener", "addInfrontEventObserver", "createBindings", "destroy", "modify", "newInit", "pause", "resume"]
related_types: ["WTK.TradingTableWidgetBase", "Utils.InfrontUtil.RowFactory"]
reference_count: 8
references: ["WTK.UI", "WTK.PositionsWidgetOptions", "WTK.WidgetSubscriptions", "WTK.WidgetOptions", "WTK.TradingTableWidgetBase", "WTK.WidgetBase", "WTK.InfrontWidget", "Utils.InfrontUtil.RowFactory"]
---

# PositionsWidget

PositionsWidget class extending TradingTableWidgetBase class.

`InfrontWidget = InfrontUI.positionsWidget(target, [options]);`

Shows the positions of a given portfolio from the trading gateway.

Options can be configured with PositionsWidgetOptions.

#### Example

```ts
// Shows current positions with a few computed columns (MKT_VAL and RESULT)
<script type="text/javascript">
    var opts = new Infront.PositionsWidgetOptions();
    opts.columns = ["TICKER", "VOLUME", "INVESTED", {
        name:"AVG_PRICE",
        heading:"Avg. price",
        type:"computed",
        computeFields:["VOLUME", "INVESTED"],
        compute: function(rowId, args) {
            return args[0] > 0 ? args[1] / args[0] : 0;
        }
    }, "LAST", {
        name:"MKT_VAL",
        heading:"Value",
        type:"computed",
        dataType:Infront.DataType.Integer,
        computeFields:["VOLUME", "LAST"],
        compute: function(rowId, args) {
            return args[0] * args[1];
        }
    }, {
        name:"RESULT",
        heading:"Result",
        type:"computed",
        dataType:Infront.DataType.Integer,
        computeFields:["MKT_VAL", "INVESTED"],
        compute: function(rowId, args) {
            return args[0] - args[1];
        }
    }];
    infront.positionsWidget("#positions", opts);
</script>
...
<div id="positions"></div>
```

#### See

PositionsWidgetOptions | WidgetBase | TradingTableWidgetBase | [InfrontWidget](./WTK.InfrontWidget.md)

#### Hierarchy ([View Summary](../type-hierarchy.md#WTK.PositionsWidget))

- TradingTableWidgetBase

  - PositionsWidget

#### Implements

- [RowFactory](../Utils/Utils.InfrontUtil.RowFactory.md)
- Controller

### Constructors

#### constructor

```ts
new PositionsWidget(
    element: HTMLElement,
    infront: Model,
    infrontUI: UI,
    options: PositionsWidgetOptions,
): PositionsWidget
```

##### Parameters

- element: HTMLElement
- infront: Model
- infrontUI: UI
- options: PositionsWidgetOptions

##### Returns PositionsWidget

##### Deprecated

use `new PositionsWidget(element, infrontUI, options)`

Overrides TradingTableWidgetBase.constructor

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
