---
title: "HistoricalOverviewWidget"
qualified_name: "WTK.HistoricalOverviewWidget"
kind: class
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "WTK"
group: "Widgets"
nav_path: "WTK > Widgets > HistoricalOverviewWidget"
source_url: "https://docs.infrontfinance.com/docs/classes/WTK.HistoricalOverviewWidget.html"
defines: ["HistoricalOverviewWidget"]
member_count: 10
members: ["subscribes", "unbinds", "addEventListener", "addInfrontEventObserver", "createBindings", "destroy", "newBuildUI", "pause", "receiveMessage", "resume"]
member_groups:
  "Properties": ["subscribes", "unbinds"]
  "Methods": ["addEventListener", "addInfrontEventObserver", "createBindings", "destroy", "newBuildUI", "pause", "receiveMessage", "resume"]
related_types: ["WTK.SingleInstrumentWidgetBase"]
reference_count: 5
references: ["WTK.WidgetSubscriptions", "WTK.SingleInstrumentWidgetBase", "WTK.HistoricalOverviewWidgetOptions", "WTK.WidgetBase", "WTK.InfrontWidget"]
---

# HistoricalOverviewWidget

HistoricalOverviewWidget class extending SingleInstrumentWidgetBase class.

`InfrontWidget = Infront.historicalOverviewWidget(target, [options]);`

Shows up to five configurable historical values, as well as a year high/low bar.

historicFields and barPeriod uses the following constants:

- `InfrontConstants.HistoricalPeriods.ONE_WEEK`
- `InfrontConstants.HistoricalPeriods.ONE_MONTH`
- `InfrontConstants.HistoricalPeriods.THREE_MONTH`
- `InfrontConstants.HistoricalPeriods.SIX_MONTH`
- `InfrontConstants.HistoricalPeriods.ONE_YEAR`
- `InfrontConstants.HistoricalPeriods.TWO_YEAR`
- `InfrontConstants.HistoricalPeriods.THREE_YEAR`
- `InfrontConstants.HistoricalPeriods.FIVE_YEAR`
- `InfrontConstants.HistoricalPeriods.YTD`
- `InfrontConstants.HistoricalTotalPeriods.TOTAL_ONE_WEEK`
- `InfrontConstants.HistoricalTotalPeriods.TOTAL_ONE_MONTH`
- `InfrontConstants.HistoricalTotalPeriods.TOTAL_THREE_MONTH`
- `InfrontConstants.HistoricalTotalPeriods.TOTAL_SIX_MONTH`
- `InfrontConstants.HistoricalTotalPeriods.TOTAL_ONE_YEAR`
- `InfrontConstants.HistoricalTotalPeriods.TOTAL_TWO_YEAR`
- `InfrontConstants.HistoricalTotalPeriods.TOTAL_THREE_YEAR`
- `InfrontConstants.HistoricalTotalPeriods.TOTAL_FIVE_YEAR`
- `InfrontConstants.HistoricalTotalPeriods.TOTAL_YTD`

Options can be configured with HistoricalOverviewWidgetOptions.

#### Example

```ts
<script type="text/javascript">
    var opts = new Infront.HistoricalOverviewWidgetOptions();
    opts.instrument = new Infront.Instrument(2088, "SP500");
    opts.barPeriod = InfrontConstants.HistoricalPeriodes.ONE_WEEK;
    opts.historicFields = [
    	   InfrontConstants.HistoricalPeriodes.ONE_WEEK,
        InfrontConstants.HistoricalPeriodes.ONE_MONTH,
        InfrontConstants.HistoricalPeriodes.THREE_MONTH,
        InfrontConstants.HistoricalPeriodes.SIX_MONTH,
        InfrontConstants.HistoricalPeriodes.ONE_YEAR
    ];
    infront.historicalOverviewWidget("#historical", opts);
</script>
...
<div id="historical"></div>
```

#### See

HistoricalOverviewWidgetOptions | WidgetBase | SingleInstrumentWidgetBase | [InfrontWidget](./WTK.InfrontWidget.md)

#### Hierarchy ([View Summary](../type-hierarchy.md#WTK.HistoricalOverviewWidget))

- SingleInstrumentWidgetBase

  - HistoricalOverviewWidget

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
