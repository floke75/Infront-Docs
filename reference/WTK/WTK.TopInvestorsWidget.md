---
title: "TopInvestorsWidget"
qualified_name: "WTK.TopInvestorsWidget"
kind: class
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "WTK"
group: "Widgets"
nav_path: "WTK > Widgets > TopInvestorsWidget"
source_url: "https://docs.infrontfinance.com/docs/classes/WTK.TopInvestorsWidget.html"
defines: ["TopInvestorsWidget"]
member_count: 10
members: ["subscribes", "unbinds", "addEventListener", "addInfrontEventObserver", "createBindings", "newBuildUI", "newInit", "newSubscribe", "pause", "resume"]
member_groups:
  "Properties": ["subscribes", "unbinds"]
  "Methods": ["addEventListener", "addInfrontEventObserver", "createBindings", "newBuildUI", "newInit", "newSubscribe", "pause", "resume"]
related_types: ["WTK.TopEntitiesWidget"]
reference_count: 5
references: ["WTK.WidgetSubscriptions", "WTK.TopEntitiesWidget", "WTK.TopInvestorsWidgetOptions", "WTK.WidgetBase", "WTK.InfrontWidget"]
---

# TopInvestorsWidget

TopInvestorsWidget class extending TopEntitiesWidget class.

`InfrontWidget = Infront.topInvestorsWidget(target, [options]);`

Together with Euronext VPS, Infront provides daily updated data on shareholders showing up to five years’ historical data.

The dataset includes Top 50 Investors in companies listed on the Oslo Stock Exchange and the NOTC marketplace.

Top Investors provides information about the largest stockholders on selected exchanges for a company.

Top Investors combines the number of stocks with the current market price and calculates the market value on each investors portfolio.

Options can be configured with TopInvestorsWidgetOptions.

#### See

TopInvestorsWidgetOptions | WidgetBase | TopEntitiesWidget | [InfrontWidget](./WTK.InfrontWidget.md)

#### Hierarchy ([View Summary](../type-hierarchy.md#WTK.TopInvestorsWidget))

- TopEntitiesWidget

  - TopInvestorsWidget

### Properties

#### `Protected` subscribes

```ts
subscribes: WidgetSubscriptions
```

Add fields and instruments to subscribe, will unsubscribe and clear on this.unsubscribe()

Inherited from TopEntitiesWidget.subscribes

#### `Protected` unbinds

```ts
unbinds: (() => void)[] = []
```

All unbind functions added here will be executed during this.removeBindings()

Inherited from TopEntitiesWidget.unbinds

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

Inherited from TopEntitiesWidget.addEventListener

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

Inherited from TopEntitiesWidget.addInfrontEventObserver

#### `Protected` createBindings

```ts
createBindings(): void
```

Do bindings here

##### Returns void

Inherited from TopEntitiesWidget.createBindings

#### `Protected` newBuildUI

```ts
newBuildUI(): void
```

Responsible for creating DOM and bindings

##### Returns void

Inherited from TopEntitiesWidget.newBuildUI

#### `Protected` newInit

```ts
newInit(): void
```

Should do property initialization/resets.

##### Returns void

Inherited from TopEntitiesWidget.newInit

#### `Protected` newSubscribe

```ts
newSubscribe(): void
```

Do subscribes here

##### Returns void

Inherited from TopEntitiesWidget.newSubscribe

#### pause

```ts
pause(): void
```

Stop this widget. Calling stop will unsubscribe all data, but will not remove the widget from the ui or the data currently contained in it.

##### Returns void

Inherited from TopEntitiesWidget.pause

#### resume

```ts
resume(): void
```

Starts this widget if previously stopped. You do not need to call this if you haven't called pause(), widgets are
automatically started on creation.

##### Returns void

Inherited from TopEntitiesWidget.resume
