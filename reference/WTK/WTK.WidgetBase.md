---
title: "WidgetBaseAbstract"
qualified_name: "WTK.WidgetBase"
kind: class
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "WTK"
group: "Base Widgets"
nav_path: "WTK > Base Widgets > WidgetBase"
source_url: "https://docs.infrontfinance.com/docs/classes/WTK.WidgetBase.html"
defines: ["WidgetBase"]
member_count: 12
members: ["subscribes", "unbinds", "addEventListener", "addInfrontEventObserver", "createBindings", "destroy", "modify", "newBuildUI", "newInit", "newSubscribe", "pause", "resume"]
member_groups:
  "Properties": ["subscribes", "unbinds"]
  "Methods": ["addEventListener", "addInfrontEventObserver", "createBindings", "destroy", "modify", "newBuildUI", "newInit", "newSubscribe", "pause", "resume"]
related_types: ["WTK.ChartWidget", "WTK.AlertListWidget", "WTK.ColumnChooserWidget", "WTK.FinancialCalendarWidget", "WTK.FundAllocationPieChartWidget", "WTK.NewsListWidget", "WTK.NewsReaderWidget", "WTK.StatusWidget", "WTK.TopEntitiesWidget", "WTK.MyListsWidget", "WTK.CommonListWidgetBase", "WTK.SingleInstrumentWidgetBase", "WTK.TradingWidgetBase", "WTK.InfrontWidget"]
reference_count: 16
references: ["WTK.WidgetSubscriptions", "WTK.WidgetOptions", "WTK.SingleInstrumentWidgetBase", "WTK.ChartWidget", "WTK.AlertListWidget", "WTK.ColumnChooserWidget", "WTK.FinancialCalendarWidget", "WTK.FundAllocationPieChartWidget", "WTK.NewsListWidget", "WTK.NewsReaderWidget", "WTK.StatusWidget", "WTK.TopEntitiesWidget", "WTK.MyListsWidget", "WTK.CommonListWidgetBase", "WTK.TradingWidgetBase", "WTK.InfrontWidget"]
---

# WidgetBaseAbstract

WidgetBase class.

`InfrontWidget = Infront.widget(target, [options]);`

Base-class for all Widgets.

#### target

- Type: String or HTMLElement

An identifier for the target element. If a string it will be interpreted as an element id.

#### options

- Type: object

A map of configuration-options.

#### See

WidgetOptions | SingleInstrumentWidgetBase

#### Hierarchy ([View Summary](../type-hierarchy.md#WTK.WidgetBase))

- WidgetBase

  - ChartWidget
  - AlertListWidget
  - ColumnChooserWidget
  - FinancialCalendarWidget
  - FundAllocationPieChartWidget
  - NewsListWidget
  - NewsReaderWidget
  - StatusWidget
  - TopEntitiesWidget
  - MyListsWidget
  - CommonListWidgetBase
  - SingleInstrumentWidgetBase
  - TradingWidgetBase

#### Implements

- [InfrontWidget](./WTK.InfrontWidget.md)

### Properties

#### `Protected` subscribes

```ts
subscribes: WidgetSubscriptions
```

Add fields and instruments to subscribe, will unsubscribe and clear on this.unsubscribe()

#### `Protected` unbinds

```ts
unbinds: (() => void)[] = []
```

All unbind functions added here will be executed during this.removeBindings()

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

#### `Protected` createBindings

```ts
createBindings(): void
```

Do bindings here

##### Returns void

#### destroy

```ts
destroy(): void
```

Destroys this widget. You must call this before removing the widget from the Page to avoid memory leaks and make
sure the corresponding data is unsubscribed from.

##### Returns void

Implementation of [InfrontWidget](./WTK.InfrontWidget.md).[destroy](./WTK.InfrontWidget.md#destroy)

#### modify

```ts
modify(options: Partial<WidgetOptions>): void
```

Modify the options for this widget.

##### Parameters

- options: Partial<WidgetOptions>

##### Returns void

Implementation of [InfrontWidget](./WTK.InfrontWidget.md).[modify](./WTK.InfrontWidget.md#modify)

#### `Protected` newBuildUI

```ts
newBuildUI(): void
```

Responsible for creating DOM and bindings

##### Returns void

#### `Protected` newInit

```ts
newInit(): void
```

Should do property initialization/resets.

##### Returns void

#### `Protected` newSubscribe

```ts
newSubscribe(): void
```

Do subscribes here

##### Returns void

#### pause

```ts
pause(): void
```

Stop this widget. Calling stop will unsubscribe all data, but will not remove the widget from the ui or the data currently contained in it.

##### Returns void

Implementation of [InfrontWidget](./WTK.InfrontWidget.md).[pause](./WTK.InfrontWidget.md#pause)

#### resume

```ts
resume(): void
```

Starts this widget if previously stopped. You do not need to call this if you haven't called pause(), widgets are
automatically started on creation.

##### Returns void

Implementation of [InfrontWidget](./WTK.InfrontWidget.md).[resume](./WTK.InfrontWidget.md#resume)
