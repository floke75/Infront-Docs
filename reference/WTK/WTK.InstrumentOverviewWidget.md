---
title: "InstrumentOverviewWidget"
qualified_name: "WTK.InstrumentOverviewWidget"
kind: class
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "WTK"
group: "Widgets"
nav_path: "WTK > Widgets > InstrumentOverviewWidget"
source_url: "https://docs.infrontfinance.com/docs/classes/WTK.InstrumentOverviewWidget.html"
defines: ["InstrumentOverviewWidget"]
member_count: 10
members: ["subscribes", "unbinds", "addEventListener", "addInfrontEventObserver", "createBindings", "newBuildUI", "newSubscribe", "pause", "receiveMessage", "resume"]
member_groups:
  "Properties": ["subscribes", "unbinds"]
  "Methods": ["addEventListener", "addInfrontEventObserver", "createBindings", "newBuildUI", "newSubscribe", "pause", "receiveMessage", "resume"]
related_types: ["WTK.SingleInstrumentWidgetBase", "WTK.InfrontWidget"]
reference_count: 5
references: ["WTK.WidgetSubscriptions", "WTK.SingleInstrumentWidgetBase", "WTK.InstrumentOverviewWidgetOptions", "WTK.WidgetBase", "WTK.InfrontWidget"]
---

# InstrumentOverviewWidget

InstrumentOverviewWidget class extending SingleInstrumentWidgetBase class.

`InfrontWidget = Infront.instrumentOverviewWidget(target, [options]);`

The Infront.Instrument Overview Widget displays instrument information in one of four available layouts
(default, historic, mini, miniextended) with content also depending on the instrument type.
The main available parts that can be displayed by the widget depending on the chosen layout is
price and performance data, performance bar, performance of constituents (for indexes) and
historical period performances.

Options can be configured with InstrumentOverviewWidgetOptions.

#### Example

```ts
<script type="text/javascript">
    const opts = new Infront.InstrumentOverviewWidgetOptions();
    opts.instrument = new Infront.Infront.Instrument(17921, "VOLV B");
    const widget = infront.instrumentOverviewWidget("#instrument-overview", opts);
</script>
...
<div id="instrument-overview"></div>
```

#### See

InstrumentOverviewWidgetOptions | WidgetBase | SingleInstrumentWidgetBase | [InfrontWidget](./WTK.InfrontWidget.md)

#### Hierarchy ([View Summary](../type-hierarchy.md#WTK.InstrumentOverviewWidget))

- SingleInstrumentWidgetBase

  - InstrumentOverviewWidget

#### Implements

- [InfrontWidget](./WTK.InfrontWidget.md)
- Target

### Properties

#### `Protected` subscribes

```ts
subscribes: WidgetSubscriptions
```

Add fields and instruments to subscribe, will unsubscribe and clear on this.unsubscribe()

Inherited from SingleInstrumentWidgetBase.subscribes

#### `Protected` unbinds

```ts
unbinds: (() => void)[] = []
```

All unbind functions added here will be executed during this.removeBindings()

Inherited from SingleInstrumentWidgetBase.unbinds

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

Inherited from SingleInstrumentWidgetBase.addEventListener

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

Inherited from SingleInstrumentWidgetBase.addInfrontEventObserver

#### `Protected` createBindings

```ts
createBindings(): void
```

Do bindings here

##### Returns void

Inherited from SingleInstrumentWidgetBase.createBindings

#### `Protected` newBuildUI

```ts
newBuildUI(): void
```

Responsible for creating DOM and bindings

##### Returns void

Overrides SingleInstrumentWidgetBase.newBuildUI

#### `Protected` newSubscribe

```ts
newSubscribe(): void
```

Do subscribes here

##### Returns void

Inherited from SingleInstrumentWidgetBase.newSubscribe

#### pause

```ts
pause(): void
```

Stop this widget. Calling stop will unsubscribe all data, but will not remove the widget from the ui or the data currently contained in it.

##### Returns void

Implementation of [InfrontWidget](./WTK.InfrontWidget.md).[pause](./WTK.InfrontWidget.md#pause)

Inherited from SingleInstrumentWidgetBase.pause

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

Inherited from SingleInstrumentWidgetBase.receiveMessage

#### resume

```ts
resume(): void
```

Starts this widget if previously stopped. You do not need to call this if you haven't called pause(), widgets are
automatically started on creation.

##### Returns void

Implementation of [InfrontWidget](./WTK.InfrontWidget.md).[resume](./WTK.InfrontWidget.md#resume)

Inherited from SingleInstrumentWidgetBase.resume
