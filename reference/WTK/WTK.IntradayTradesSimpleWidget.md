---
title: "IntradayTradesSimpleWidget"
qualified_name: "WTK.IntradayTradesSimpleWidget"
kind: class
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "WTK"
group: "Widgets"
nav_path: "WTK > Widgets > IntradayTradesSimpleWidget"
source_url: "https://docs.infrontfinance.com/docs/classes/WTK.IntradayTradesSimpleWidget.html"
defines: ["IntradayTradesSimpleWidget"]
member_count: 10
members: ["subscribes", "unbinds", "addEventListener", "addInfrontEventObserver", "createBindings", "destroy", "newBuildUI", "pause", "receiveMessage", "resume"]
member_groups:
  "Properties": ["subscribes", "unbinds"]
  "Methods": ["addEventListener", "addInfrontEventObserver", "createBindings", "destroy", "newBuildUI", "pause", "receiveMessage", "resume"]
related_types: ["WTK.SingleInstrumentWidgetBase", "Utils.InfrontUtil.ArrayBindingObserver"]
reference_count: 6
references: ["WTK.WidgetSubscriptions", "WTK.SingleInstrumentWidgetBase", "WTK.IntradayTradesSimpleWidgetOptions", "WTK.WidgetBase", "WTK.InfrontWidget", "Utils.InfrontUtil.ArrayBindingObserver"]
---

# IntradayTradesSimpleWidget

IntradayTradesSimpleWidget class extending SingleInstrumentWidgetBase class.

`InfrontWidget = Infront.intradayTradesSimpleWidget(target, [options]);`

Shows the latest trades of a given instrument.

Options can be configured with IntradayTradesSimpleWidgetOptions.

#### Example

```ts
<script type="text/javascript">
    var opts = new Infront.IntradayTradesSimpleWidgetOptions();
    opts.instrument = { "feed": 2008, "ticker": "UG" };
    opts.pageItems = 10;
    opts.tickerInHeader = true;
    opts.showColumnsHeaders = true;
    opts.showBuyerAndSeller = true;

    infront.intradayTradesSimpleWidget("#intradaytradessimple", opts);
</script>
...
<div id="intradaytradessimple"></div>
```

#### See

IntradayTradesSimpleWidgetOptions | WidgetBase | SingleInstrumentWidgetBase | [InfrontWidget](./WTK.InfrontWidget.md)

#### Hierarchy ([View Summary](../type-hierarchy.md#WTK.IntradayTradesSimpleWidget))

- SingleInstrumentWidgetBase

  - IntradayTradesSimpleWidget

#### Implements

- Controller
- [ArrayBindingObserver](../Utils/Utils.InfrontUtil.ArrayBindingObserver.md)

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
