---
title: "FocusWidget"
qualified_name: "WTK.FocusWidget"
kind: class
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "WTK"
group: "Widgets"
nav_path: "WTK > Widgets > FocusWidget"
source_url: "https://docs.infrontfinance.com/docs/classes/WTK.FocusWidget.html"
defines: ["FocusWidget"]
member_count: 11
members: ["subscribes", "unbinds", "addEventListener", "addInfrontEventObserver", "createBindings", "destroy", "newBuildUI", "newSubscribe", "pause", "receiveMessage", "resume"]
member_groups:
  "Properties": ["subscribes", "unbinds"]
  "Methods": ["addEventListener", "addInfrontEventObserver", "createBindings", "destroy", "newBuildUI", "newSubscribe", "pause", "receiveMessage", "resume"]
related_types: ["WTK.SingleInstrumentWidgetBase", "WTK.InfrontWidget"]
reference_count: 5
references: ["WTK.WidgetSubscriptions", "WTK.SingleInstrumentWidgetBase", "WTK.FocusWidgetOptions", "WTK.WidgetBase", "WTK.InfrontWidget"]
---

# FocusWidget

FocusWidget class extending SingleInstrumentWidgetBase class.

`InfrontWidget = Infront.focusWidget(target, [options]);`

The focus window gives the user a quick overview of one specific instrument.

The bottom row is a change indicator that displays the current trend based on last price.
The right part of the window consists of a range panel, with values in both ends displaying
today’s high and low. An arrow indicates where the price is with respect to high/low.

Options can be configured with FocusWidgetOptions.

#### Example

```ts
<script type="text/javascript">
    var opts = new Infront.FocusWidgetOptions();
    opts.instrument = new Infront.Instrument(2008, "UG");
    infront.focusWidget("#focus", opts);
</script>
...
<div id="focus"></div>
```

#### See

FocusWidgetOptions | WidgetBase | SingleInstrumentWidgetBase | [InfrontWidget](./WTK.InfrontWidget.md)

#### Hierarchy ([View Summary](../type-hierarchy.md#WTK.FocusWidget))

- SingleInstrumentWidgetBase

  - FocusWidget

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

#### destroy

```ts
destroy(): void
```

Destroys this widget. You must call this before removing the widget from the Page to avoid memory leaks and make
sure the corresponding data is unsubscribed from.

##### Returns void

Implementation of [InfrontWidget](./WTK.InfrontWidget.md).[destroy](./WTK.InfrontWidget.md#destroy)

Inherited from SingleInstrumentWidgetBase.destroy

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
