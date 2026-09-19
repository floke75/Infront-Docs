---
title: "FundRiskLevelWidget"
qualified_name: "WTK.FundRiskLevelWidget"
kind: class
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "WTK"
group: "Widgets"
nav_path: "WTK > Widgets > FundRiskLevelWidget"
source_url: "https://docs.infrontfinance.com/docs/classes/WTK.FundRiskLevelWidget.html"
defines: ["FundRiskLevelWidget"]
member_count: 12
members: ["subscribes", "unbinds", "addEventListener", "addInfrontEventObserver", "createBindings", "destroy", "newBuildUI", "newInit", "newSubscribe", "pause", "receiveMessage", "resume"]
member_groups:
  "Properties": ["subscribes", "unbinds"]
  "Methods": ["addEventListener", "addInfrontEventObserver", "createBindings", "destroy", "newBuildUI", "newInit", "newSubscribe", "pause", "receiveMessage", "resume"]
related_types: ["WTK.SingleInstrumentWidgetBase"]
reference_count: 5
references: ["WTK.WidgetSubscriptions", "WTK.SingleInstrumentWidgetBase", "WTK.FundRiskLevelWidgetOptions", "WTK.WidgetBase", "WTK.InfrontWidget"]
---

# FundRiskLevelWidget

FundRiskLevelWidget class extending SingleInstrumentWidgetBase class.

`InfrontWidget = Infront.fundRiskLevelWidget(target, [options]);`

The risk level widget shows the risk rating of a fund.

Options can be configured with FundRiskLevelWidgetOptions.

#### Example

```ts
<script type="text/javascript">
    var opts = new Infront.FundRiskLevelWidgetOptions();
    opts.instrument = new Infront.Instrument(17935, "0P00000AO2");
    infront.fundRiskLevelWidget("#fundRiskLevel", opts);
</script>
...
<div id="fundRiskLevelWidget"></div>
```

#### See

FundRiskLevelWidgetOptions | WidgetBase | SingleInstrumentWidgetBase | [InfrontWidget](./WTK.InfrontWidget.md)

#### Hierarchy ([View Summary](../type-hierarchy.md#WTK.FundRiskLevelWidget))

- SingleInstrumentWidgetBase

  - FundRiskLevelWidget

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

Overrides SingleInstrumentWidgetBase.newBuildUI

#### `Protected` newInit

```ts
newInit(): void
```

Should do property initialization/resets.

##### Returns void

Inherited from SingleInstrumentWidgetBase.newInit

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
