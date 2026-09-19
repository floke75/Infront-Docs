---
title: "DocumentsWidget"
qualified_name: "WTK.DocumentsWidget"
kind: class
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "WTK"
group: "Widgets"
nav_path: "WTK > Widgets > DocumentsWidget"
source_url: "https://docs.infrontfinance.com/docs/classes/WTK.DocumentsWidget.html"
defines: ["DocumentsWidget"]
member_count: 10
members: ["options", "subscribes", "unbinds", "addEventListener", "addInfrontEventObserver", "createBindings", "destroy", "newBuildUI", "pause", "resume"]
member_groups:
  "Properties": ["options", "subscribes", "unbinds"]
  "Methods": ["addEventListener", "addInfrontEventObserver", "createBindings", "destroy", "newBuildUI", "pause", "resume"]
related_types: ["WTK.SingleInstrumentWidgetBase"]
reference_count: 5
references: ["WTK.DocumentsWidgetOptions", "WTK.WidgetSubscriptions", "WTK.SingleInstrumentWidgetBase", "WTK.WidgetBase", "WTK.InfrontWidget"]
---

# DocumentsWidget

DocumentsWidget class extending SingleInstrumentWidgetBase class.

`InfrontWidget = Infront.documentsWidget(target, [options]);`

List all available regulatory documents for the selected instrument.

Options can be configured with DocumentsWidgetOptions.

#### Example

```ts
// This configuration creates a list of all available regulatory documents.
<script type="text/javascript">
    var opts = new Infront.DocumentsWidgetOptions();
    opts.instrument = new Infront.Instrument(2358, "HJUF");
    opts.group = "language";
    infront.documentsWidget("#documents", opts);
</script>
...
<div id="documents"></div>
```

#### See

DocumentsWidgetOptions | WidgetBase | SingleInstrumentWidgetBase | [InfrontWidget](./WTK.InfrontWidget.md)

#### Hierarchy ([View Summary](../type-hierarchy.md#WTK.DocumentsWidget))

- SingleInstrumentWidgetBase

  - DocumentsWidget

#### Implements

- Target

### Properties

#### `Protected` options

```ts
options: DocumentsWidgetOptions
```

Options clone.

Overrides SingleInstrumentWidgetBase.options

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

Overrides SingleInstrumentWidgetBase.newBuildUI

#### pause

```ts
pause(): void
```

Stop this widget. Calling stop will unsubscribe all data, but will not remove the widget from the ui or the data currently contained in it.

##### Returns void

Inherited from SingleInstrumentWidgetBase.pause

#### resume

```ts
resume(): void
```

Starts this widget if previously stopped. You do not need to call this if you haven't called pause(), widgets are
automatically started on creation.

##### Returns void

Inherited from SingleInstrumentWidgetBase.resume
