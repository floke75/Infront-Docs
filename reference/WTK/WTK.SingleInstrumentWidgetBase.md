---
title: "SingleInstrumentWidgetBase<T>Abstract"
qualified_name: "WTK.SingleInstrumentWidgetBase"
kind: class
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "WTK"
group: "Base Widgets"
nav_path: "WTK > Base Widgets > SingleInstrumentWidgetBase"
source_url: "https://docs.infrontfinance.com/docs/classes/WTK.SingleInstrumentWidgetBase.html"
defines: ["SingleInstrumentWidgetBase"]
member_count: 12
members: ["subscribes", "unbinds", "addEventListener", "addInfrontEventObserver", "createBindings", "destroy", "newBuildUI", "newInit", "newSubscribe", "pause", "receiveMessage", "resume"]
member_groups:
  "Properties": ["subscribes", "unbinds"]
  "Methods": ["addEventListener", "addInfrontEventObserver", "createBindings", "destroy", "newBuildUI", "newInit", "newSubscribe", "pause", "receiveMessage", "resume"]
related_types: ["WTK.WidgetBase", "WTK.AlertWidget", "WTK.CompanyDescriptionWidget", "WTK.CompanyFundamentalsWidget", "WTK.DocumentsWidget", "WTK.FocusWidget", "WTK.FundAllocationWidget", "WTK.FundRiskLevelWidget", "WTK.HistoricalOverviewWidget", "WTK.HistoryWidget", "WTK.IndexOverviewWidget", "WTK.InstrumentOverviewWidget", "WTK.IntradayTradesSimpleWidget", "WTK.InstrumentValuesWidget", "WTK.OrderbookWidget", "WTK.ValuePairWidget", "WTK.ValueWidget"]
reference_count: 20
references: ["WTK.WidgetSubscriptions", "WTK.WidgetBase", "WTK.SingleInstrumentWidgetOptions", "WTK.InfrontWidget", "WTK.AlertWidget", "WTK.CompanyDescriptionWidget", "WTK.CompanyFundamentalsWidget", "WTK.DocumentsWidget", "WTK.FocusWidget", "WTK.FundAllocationWidget", "WTK.FundRiskLevelWidget", "WTK.HistoricalOverviewWidget", "WTK.HistoryWidget", "WTK.IndexOverviewWidget", "WTK.InstrumentOverviewWidget", "WTK.IntradayTradesSimpleWidget", "WTK.InstrumentValuesWidget", "WTK.OrderbookWidget", "WTK.ValuePairWidget", "WTK.ValueWidget"]
---

# SingleInstrumentWidgetBase<T>Abstract

SingleInstrumentWidgetBase class extending WidgetBase class.

Options can be configured with SingleInstrumentWidgetOptions.

#### See

SingleInstrumentWidgetOptions | WidgetBase | [InfrontWidget](./WTK.InfrontWidget.md)

#### Type Parameters

- T extends SingleInstrumentWidgetOptions = SingleInstrumentWidgetOptions

#### Hierarchy ([View Summary](../type-hierarchy.md#WTK.SingleInstrumentWidgetBase))

- WidgetBase

  - SingleInstrumentWidgetBase

    - AlertWidget
    - CompanyDescriptionWidget
    - CompanyFundamentalsWidget
    - DocumentsWidget
    - FocusWidget
    - FundAllocationWidget
    - FundRiskLevelWidget
    - HistoricalOverviewWidget
    - HistoryWidget
    - IndexOverviewWidget
    - InstrumentOverviewWidget
    - IntradayTradesSimpleWidget
    - InstrumentValuesWidget
    - OrderbookWidget
    - ValuePairWidget
    - ValueWidget

#### Implements

- Target

### Properties

#### `Protected` subscribes

```ts
subscribes: WidgetSubscriptions
```

Add fields and instruments to subscribe, will unsubscribe and clear on this.unsubscribe()

Inherited from WidgetBase.subscribes

#### `Protected` unbinds

```ts
unbinds: (() => void)[] = []
```

All unbind functions added here will be executed during this.removeBindings()

Inherited from WidgetBase.unbinds

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

Inherited from WidgetBase.addEventListener

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

Inherited from WidgetBase.addInfrontEventObserver

#### `Protected` createBindings

```ts
createBindings(): void
```

Do bindings here

##### Returns void

Inherited from WidgetBase.createBindings

#### destroy

```ts
destroy(): void
```

Destroys this widget. You must call this before removing the widget from the Page to avoid memory leaks and make
sure the corresponding data is unsubscribed from.

##### Returns void

Inherited from WidgetBase.destroy

#### `Protected` newBuildUI

```ts
newBuildUI(): void
```

Responsible for creating DOM and bindings

##### Returns void

Inherited from WidgetBase.newBuildUI

#### `Protected` newInit

```ts
newInit(): void
```

Should do property initialization/resets.

##### Returns void

Overrides WidgetBase.newInit

#### `Protected` newSubscribe

```ts
newSubscribe(): void
```

Do subscribes here

##### Returns void

Overrides WidgetBase.newSubscribe

#### pause

```ts
pause(): void
```

Stop this widget. Calling stop will unsubscribe all data, but will not remove the widget from the ui or the data currently contained in it.

##### Returns void

Inherited from WidgetBase.pause

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

Inherited from WidgetBase.resume
