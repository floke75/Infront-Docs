---
title: "InstrumentSingleValueWidget"
qualified_name: "WTK.InstrumentSingleValueWidget"
kind: class
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "WTK"
group: "Widgets"
nav_path: "WTK > Widgets > InstrumentSingleValueWidget"
source_url: "https://docs.infrontfinance.com/docs/classes/WTK.InstrumentSingleValueWidget.html"
defines: ["InstrumentSingleValueWidget"]
member_count: 11
members: ["subscribes", "unbinds", "addEventListener", "addInfrontEventObserver", "createBindings", "destroy", "newBuildUI", "newSubscribe", "pause", "receiveMessage", "resume"]
member_groups:
  "Properties": ["subscribes", "unbinds"]
  "Methods": ["addEventListener", "addInfrontEventObserver", "createBindings", "destroy", "newBuildUI", "newSubscribe", "pause", "receiveMessage", "resume"]
related_types: ["WTK.ValueWidget"]
reference_count: 5
references: ["WTK.WidgetSubscriptions", "WTK.ValueWidget", "WTK.InstrumentSingleValueWidgetOptions", "WTK.WidgetBase", "WTK.InfrontWidget"]
---

# InstrumentSingleValueWidget

InstrumentSingleValueWidget class extending ValueWidget class.

`InfrontWidget = Infront.instrumentSingleValueWidget(target, [options]);`

Displays single instrument ticker, price and changes

Options can be configured with InstrumentSingleValueWidgetOptions.

#### Example

```ts
<script type="text/javascript">
    var svopts = new Infront.InstrumentSingleValueWidgetOptions();
    svopts.decimals = 2;
    svopts.instrument = new Infront.Instrument(18177, "OSEBX");
    svopts.name = "LAST";
    infront.instrumentSingleValueWidget("#last-oslo", svopts);
</script>
...
<div id="last-oslo"></div>
```

#### See

InstrumentSingleValueWidgetOptions | WidgetBase | ValueWidget | [InfrontWidget](./WTK.InfrontWidget.md)

#### Hierarchy ([View Summary](../type-hierarchy.md#WTK.InstrumentSingleValueWidget))

- ValueWidget

  - InstrumentSingleValueWidget

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

#### `Protected` newBuildUI

```ts
newBuildUI(): void
```

Responsible for creating DOM and bindings

##### Returns void

Inherited from ValueWidget.newBuildUI

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
