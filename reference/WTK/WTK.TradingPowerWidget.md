---
title: "TradingPowerWidget"
qualified_name: "WTK.TradingPowerWidget"
kind: class
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "WTK"
group: "Trading Widgets"
nav_path: "WTK > Trading Widgets > TradingPowerWidget"
source_url: "https://docs.infrontfinance.com/docs/classes/WTK.TradingPowerWidget.html"
defines: ["TradingPowerWidget"]
member_count: 10
members: ["subscribes", "unbinds", "addEventListener", "addInfrontEventObserver", "createBindings", "destroy", "newSubscribe", "pause", "receiveMessage", "resume"]
member_groups:
  "Properties": ["subscribes", "unbinds"]
  "Methods": ["addEventListener", "addInfrontEventObserver", "createBindings", "destroy", "newSubscribe", "pause", "receiveMessage", "resume"]
related_types: ["WTK.ValueWidget"]
reference_count: 5
references: ["WTK.WidgetSubscriptions", "WTK.ValueWidget", "WTK.TradingPowerWidgetOptions", "WTK.WidgetBase", "WTK.InfrontWidget"]
---

# TradingPowerWidget

TradingPowerWidget class extending ValueWidget class.

`InfrontWidget = InfrontUI.tradingPowerWidget(target, [options]);`

Display the positions of the selected portfolios.

Options can be configured with TradingPowerWidgetOptions.

#### Example

```ts
<script type="text/javascript">
    var opts = new Infront.TradingPowerWidgetOptions();
    infrontUI.tradingPowerWidget("#tradingPower", opts);
</script>
...
<div id="tradingPower"></div>
```

#### See

TradingPowerWidgetOptions | WidgetBase | ValueWidget | [InfrontWidget](./WTK.InfrontWidget.md)

#### Hierarchy ([View Summary](../type-hierarchy.md#WTK.TradingPowerWidget))

- ValueWidget

  - TradingPowerWidget

#### Implements

- TradingChannelObserver

### Properties

#### `Protected` subscribes

```ts
subscribes: WidgetSubscriptions
```

Add fields and instruments to subscribe, will unsubscribe and clear on this.unsubscribe()

Inherited from ValueWidget.subscribes

#### `Protected` unbinds

```ts
unbinds: (() => void)[] = []
```

All unbind functions added here will be executed during this.removeBindings()

Inherited from ValueWidget.unbinds

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

Inherited from ValueWidget.addEventListener

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

Inherited from ValueWidget.addInfrontEventObserver

#### `Protected` createBindings

```ts
createBindings(): void
```

Do bindings here

##### Returns void

Inherited from ValueWidget.createBindings

#### destroy

```ts
destroy(): void
```

Destroys this widget. You must call this before removing the widget from the Page to avoid memory leaks and make
sure the corresponding data is unsubscribed from.

##### Returns void

Inherited from ValueWidget.destroy

#### `Protected` newSubscribe

```ts
newSubscribe(): void
```

Do subscribes here

##### Returns void

Inherited from ValueWidget.newSubscribe

#### pause

```ts
pause(): void
```

Stop this widget. Calling stop will unsubscribe all data, but will not remove the widget from the ui or the data currently contained in it.

##### Returns void

Inherited from ValueWidget.pause

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

Inherited from ValueWidget.receiveMessage

#### resume

```ts
resume(): void
```

Starts this widget if previously stopped. You do not need to call this if you haven't called pause(), widgets are
automatically started on creation.

##### Returns void

Inherited from ValueWidget.resume
