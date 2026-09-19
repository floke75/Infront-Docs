---
title: "FinancialCalendarWidget"
qualified_name: "WTK.FinancialCalendarWidget"
kind: class
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "WTK"
group: "Widgets"
nav_path: "WTK > Widgets > FinancialCalendarWidget"
source_url: "https://docs.infrontfinance.com/docs/classes/WTK.FinancialCalendarWidget.html"
defines: ["FinancialCalendarWidget"]
member_count: 12
members: ["subscribes", "unbinds", "addEventListener", "addInfrontEventObserver", "createBindings", "destroy", "newBuildUI", "newInit", "newSubscribe", "pause", "receiveMessage", "resume"]
member_groups:
  "Properties": ["subscribes", "unbinds"]
  "Methods": ["addEventListener", "addInfrontEventObserver", "createBindings", "destroy", "newBuildUI", "newInit", "newSubscribe", "pause", "receiveMessage", "resume"]
related_types: ["WTK.WidgetBase", "WTK.InfrontWidget"]
reference_count: 4
references: ["WTK.WidgetSubscriptions", "WTK.WidgetBase", "WTK.FinancialCalendarWidgetOptions", "WTK.InfrontWidget"]
---

# FinancialCalendarWidget

FinancialCalendarWidget class extending WidgetBase class.

`InfrontWidget = Infront.financialCalendarWidget(target, [options]);`

This widget shows a financial calendar for a given country/feed/instrument (or a set of).

Options can be configured with FinancialCalendarWidgetOptions.

#### Example

```ts
// This configuration shows a financial calendar for Great Britain for the next 6 months.
// Includes paging with 10 items pr page and expanded layout.
<script type="text/javascript">
    var opts = new Infront.FinancialCalendarWidgetOptions();
    opts.countryCodes = ["GB"];
    opts.endDate = InfrontUtil.addMonths(new Date(), 6);
    opts.paging = true;
    opts.layout = Infront.FinancialCalendarLayout.EXPANDED;
    infront.financialCalendarWidget("#financialcal", opts);
</script>
...
<div id="financialcal"></div>
```

#### See

FinancialCalendarWidgetOptions | WidgetBase | [InfrontWidget](./WTK.InfrontWidget.md)

#### Hierarchy ([View Summary](../type-hierarchy.md#WTK.FinancialCalendarWidget))

- WidgetBase

  - FinancialCalendarWidget

#### Implements

- [InfrontWidget](./WTK.InfrontWidget.md)
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

Implementation of [InfrontWidget](./WTK.InfrontWidget.md).[destroy](./WTK.InfrontWidget.md#destroy)

Inherited from WidgetBase.destroy

#### `Protected` newBuildUI

```ts
newBuildUI(): void
```

Responsible for creating DOM and bindings

##### Returns void

Overrides WidgetBase.newBuildUI

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

Inherited from WidgetBase.newSubscribe

#### pause

```ts
pause(): void
```

Stop this widget. Calling stop will unsubscribe all data, but will not remove the widget from the ui or the data currently contained in it.

##### Returns void

Implementation of [InfrontWidget](./WTK.InfrontWidget.md).[pause](./WTK.InfrontWidget.md#pause)

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

Implementation of [InfrontWidget](./WTK.InfrontWidget.md).[resume](./WTK.InfrontWidget.md#resume)

Inherited from WidgetBase.resume
