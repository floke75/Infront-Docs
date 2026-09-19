---
title: "OrderEntryWidget"
qualified_name: "WTK.OrderEntryWidget"
kind: class
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "WTK"
group: "Trading Widgets"
nav_path: "WTK > Trading Widgets > OrderEntryWidget"
source_url: "https://docs.infrontfinance.com/docs/classes/WTK.OrderEntryWidget.html"
defines: ["OrderEntryWidget"]
member_count: 10
members: ["subscribes", "unbinds", "addEventListener", "addInfrontEventObserver", "createBindings", "newBuildUI", "newInit", "pause", "receiveMessage", "resume"]
member_groups:
  "Properties": ["subscribes", "unbinds"]
  "Methods": ["addEventListener", "addInfrontEventObserver", "createBindings", "newBuildUI", "newInit", "pause", "receiveMessage", "resume"]
related_types: ["WTK.TradingWidgetBase", "WTK.OrderEntryManagerObserver"]
reference_count: 6
references: ["WTK.WidgetSubscriptions", "WTK.TradingWidgetBase", "WTK.OrderEntryWidgetOptions", "WTK.WidgetBase", "WTK.InfrontWidget", "WTK.OrderEntryManagerObserver"]
---

# OrderEntryWidget

OrderEntryWidget class extending TradingWidgetBase class.

`InfrontWidget = InfrontUI.orderEntryWidget(target, [options]);`

The Order entry widget works as a popup dialog with several configurable features
including symbol search, input validation and confirmation and a collapsible advanced panel.

#### Example

```ts
<script type="text/javascript">
    var opts = new Infront.OrderEntryWidgetOptions();
    opts.closeCallback = function() {
        hideOrderEntry();
    }
    infront.orderEntryWidget("#orderEntry", opts);
</script>
...
<div id="orderEntry"></div>
```

#### See

OrderEntryWidgetOptions | WidgetBase | TradingWidgetBase | [InfrontWidget](./WTK.InfrontWidget.md)

#### Hierarchy ([View Summary](../type-hierarchy.md#WTK.OrderEntryWidget))

- TradingWidgetBase

  - OrderEntryWidget

#### Implements

- [OrderEntryManagerObserver](./WTK.OrderEntryManagerObserver.md)
- Target
- Controller

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

#### receiveMessage

```ts
receiveMessage(msg: Message): void
```

Target must:

- Handle any message containing a data type returned by accepts()
- Disregard any message not containing a datatype returned by accepts()

##### Parameters

- msg: Message

##### Returns void

Implementation of InterLibraryLink.Target.receiveMessage

#### resume

```ts
resume(): void
```

Starts this widget if previously stopped. You do not need to call this if you haven't called pause(), widgets are
automatically started on creation.

##### Returns void

Inherited from TradingWidgetBase.resume
