---
title: "TradingTableWidgetBaseAbstract"
qualified_name: "WTK.TradingTableWidgetBase"
kind: class
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "WTK"
group: "Trading Base Widgets"
nav_path: "WTK > Trading Base Widgets > TradingTableWidgetBase"
source_url: "https://docs.infrontfinance.com/docs/classes/WTK.TradingTableWidgetBase.html"
defines: ["TradingTableWidgetBase"]
member_count: 11
members: ["subscribes", "unbinds", "addEventListener", "addInfrontEventObserver", "createBindings", "destroy", "modify", "newBuildUI", "newInit", "pause", "resume"]
member_groups:
  "Properties": ["subscribes", "unbinds"]
  "Methods": ["addEventListener", "addInfrontEventObserver", "createBindings", "destroy", "modify", "newBuildUI", "newInit", "pause", "resume"]
related_types: ["WTK.TradingWidgetBase", "WTK.OrdersWidget", "WTK.PositionsWidget", "WTK.TradesWidget", "WTK.CommonListUISharedFunctions", "Utils.InfrontUtil.IArrayBinding", "Utils.InfrontUtil.ArrayBindingObserver", "Utils.InfrontUtil.RowFactory"]
reference_count: 13
references: ["WTK.WidgetSubscriptions", "WTK.WidgetOptions", "WTK.TradingWidgetBase", "WTK.TradingTableWidgetOptions", "WTK.WidgetBase", "WTK.InfrontWidget", "WTK.OrdersWidget", "WTK.PositionsWidget", "WTK.TradesWidget", "WTK.CommonListUISharedFunctions", "Utils.InfrontUtil.IArrayBinding", "Utils.InfrontUtil.ArrayBindingObserver", "Utils.InfrontUtil.RowFactory"]
---

# TradingTableWidgetBaseAbstract

TradingTableWidgetBase class extending TradingWidgetBase class.

Options can be configured with TradingTableWidgetOptions.

#### See

TradingTableWidgetOptions | WidgetBase | TradingWidgetBase | [InfrontWidget](./WTK.InfrontWidget.md)

#### Hierarchy ([View Summary](../type-hierarchy.md#WTK.TradingTableWidgetBase))

- TradingWidgetBase

  - TradingTableWidgetBase

    - OrdersWidget
    - PositionsWidget
    - TradesWidget

#### Implements

- [CommonListUISharedFunctions](./WTK.CommonListUISharedFunctions.md)
- [IArrayBinding](../Utils/Utils.InfrontUtil.IArrayBinding.md)
- [ArrayBindingObserver](../Utils/Utils.InfrontUtil.ArrayBindingObserver.md)
- [RowFactory](../Utils/Utils.InfrontUtil.RowFactory.md)

### Properties

#### `Protected` subscribes

```ts
subscribes: WidgetSubscriptions
```

Add fields and instruments to subscribe, will unsubscribe and clear on this.unsubscribe()

Inherited from TradingWidgetBase.subscribes

#### `Protected` unbinds

```ts
unbinds: (() => void)[] = []
```

All unbind functions added here will be executed during this.removeBindings()

Inherited from TradingWidgetBase.unbinds

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

Inherited from TradingWidgetBase.addEventListener

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

Inherited from TradingWidgetBase.addInfrontEventObserver

#### `Protected` createBindings

```ts
createBindings(): void
```

Do bindings here

##### Returns void

Inherited from TradingWidgetBase.createBindings

#### destroy

```ts
destroy(): void
```

Destroys this widget. You must call this before removing the widget from the Page to avoid memory leaks and make
sure the corresponding data is unsubscribed from.

##### Returns void

Inherited from TradingWidgetBase.destroy

#### modify

```ts
modify(options: Partial<WidgetOptions>): void
```

Modify the options for this widget.

##### Parameters

- options: Partial<WidgetOptions>

##### Returns void

Inherited from TradingWidgetBase.modify

#### `Protected` newBuildUI

```ts
newBuildUI(): void
```

Responsible for creating DOM and bindings

##### Returns void

Overrides TradingWidgetBase.newBuildUI

#### `Protected` newInit

```ts
newInit(): void
```

Should do property initialization/resets.

##### Returns void

Inherited from TradingWidgetBase.newInit

#### pause

```ts
pause(): void
```

Stop this widget. Calling stop will unsubscribe all data, but will not remove the widget from the ui or the data currently contained in it.

##### Returns void

Inherited from TradingWidgetBase.pause

#### resume

```ts
resume(): void
```

Starts this widget if previously stopped. You do not need to call this if you haven't called pause(), widgets are
automatically started on creation.

##### Returns void

Inherited from TradingWidgetBase.resume
