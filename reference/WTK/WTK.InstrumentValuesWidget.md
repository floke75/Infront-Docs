---
title: "InstrumentValuesWidget"
qualified_name: "WTK.InstrumentValuesWidget"
kind: class
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "WTK"
group: "Widgets"
nav_path: "WTK > Widgets > InstrumentValuesWidget"
source_url: "https://docs.infrontfinance.com/docs/classes/WTK.InstrumentValuesWidget.html"
defines: ["InstrumentValuesWidget"]
member_count: 11
members: ["subscribes", "unbinds", "addEventListener", "addInfrontEventObserver", "createBindings", "destroy", "newBuildUI", "newSubscribe", "pause", "receiveMessage", "resume"]
member_groups:
  "Properties": ["subscribes", "unbinds"]
  "Methods": ["addEventListener", "addInfrontEventObserver", "createBindings", "destroy", "newBuildUI", "newSubscribe", "pause", "receiveMessage", "resume"]
related_types: ["WTK.SingleInstrumentWidgetBase"]
reference_count: 5
references: ["WTK.WidgetSubscriptions", "WTK.SingleInstrumentWidgetBase", "WTK.InstrumentValuesWidgetOptions", "WTK.WidgetBase", "WTK.InfrontWidget"]
---

# InstrumentValuesWidget

InstrumentValuesWidget class extending SingleInstrumentWidgetBase class.

`InfrontWidget = Infront.instrumentValuesWidget(target, [options]);`

Also called "Multiple values widget".

Shows an array of fields for a given instrument.

Options can be configured with InstrumentValuesWidgetOptions.

#### Example

```ts
// This configuration show a multiple values widget for a given instrument.
<script type="text/javascript">
    var opts = new Infront.InstrumentValuesWidgetOptions();
    opts.widgetTitle = "DNB Private Equity retail B";
    opts.instrument = new Infront.Instrument(18197, "0P00009FQ5");
    opts.layout = Infront.MultipleValuesWidgetLayout.VERTICAL;
    opts.fields = ["FULL_NAME", "CURRENCY", "SEGMENT", "DATE"];

    infront.instrumentValuesWidget("#instrumentValues", opts);
</script>
...
<div id=instrumentValues""></div>
```

#### See

InstrumentValuesWidgetOptions | WidgetBase | SingleInstrumentWidgetBase | [InfrontWidget](./WTK.InfrontWidget.md)

#### Hierarchy ([View Summary](../type-hierarchy.md#WTK.InstrumentValuesWidget))

- SingleInstrumentWidgetBase

  - InstrumentValuesWidget

#### Implements

- TradingChannelObserver

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

#### destroy

```ts
destroy(): void
```

Destroys this widget. You must call this before removing the widget from the Page to avoid memory leaks and make
sure the corresponding data is unsubscribed from.

##### Returns void

Inherited from SingleInstrumentWidgetBase.destroy

#### `Protected` newBuildUI

```ts
newBuildUI(): void
```

Responsible for creating DOM and bindings

##### Returns void

Inherited from SingleInstrumentWidgetBase.newBuildUI

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

Inherited from SingleInstrumentWidgetBase.receiveMessage

#### resume

```ts
resume(): void
```

Starts this widget if previously stopped. You do not need to call this if you haven't called pause(), widgets are
automatically started on creation.

##### Returns void

Inherited from SingleInstrumentWidgetBase.resume
