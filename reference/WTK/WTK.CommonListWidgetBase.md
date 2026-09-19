---
title: "CommonListWidgetBaseAbstract"
qualified_name: "WTK.CommonListWidgetBase"
kind: class
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "WTK"
group: "Base Widgets"
nav_path: "WTK > Base Widgets > CommonListWidgetBase"
source_url: "https://docs.infrontfinance.com/docs/classes/WTK.CommonListWidgetBase.html"
defines: ["CommonListWidgetBase"]
member_count: 14
members: ["subscribes", "unbinds", "addEventListener", "addInfrontEventObserver", "createBindings", "destroy", "modify", "newBuildUI", "newInit", "newSubscribe", "pause", "resetColumns", "resume", "saveColumns"]
member_groups:
  "Properties": ["subscribes", "unbinds"]
  "Methods": ["addEventListener", "addInfrontEventObserver", "createBindings", "destroy", "modify", "newBuildUI", "newInit", "newSubscribe", "pause", "resetColumns", "resume", "saveColumns"]
related_types: ["WTK.WidgetBase", "WTK.BrokerstatsWidget", "WTK.CommunicationStatusWidget", "WTK.HeatmapWidget", "WTK.IntradayTradesWidget", "WTK.PutCallWidget", "WTK.QuoteListWidget", "WTK.CommonListUISharedFunctions"]
reference_count: 12
references: ["WTK.WidgetSubscriptions", "WTK.WidgetOptions", "WTK.WidgetBase", "WTK.CommonListOptions", "WTK.InfrontWidget", "WTK.BrokerstatsWidget", "WTK.CommunicationStatusWidget", "WTK.HeatmapWidget", "WTK.IntradayTradesWidget", "WTK.PutCallWidget", "WTK.QuoteListWidget", "WTK.CommonListUISharedFunctions"]
---

# CommonListWidgetBaseAbstract

CommonListWidgetBase class extending WidgetBase class.

Options can be configured with CommonListOptions.

#### See

CommonListOptions | WidgetBase | [InfrontWidget](./WTK.InfrontWidget.md)

#### Hierarchy ([View Summary](../type-hierarchy.md#WTK.CommonListWidgetBase))

- WidgetBase

  - CommonListWidgetBase

    - BrokerstatsWidget
    - CommunicationStatusWidget
    - HeatmapWidget
    - IntradayTradesWidget
    - PutCallWidget
    - QuoteListWidget

#### Implements

- [CommonListUISharedFunctions](./WTK.CommonListUISharedFunctions.md)

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

#### modify

```ts
modify(options: Partial<WidgetOptions>): void
```

Modify the options for this widget.

##### Parameters

- options: Partial<WidgetOptions>

##### Returns void

Inherited from WidgetBase.modify

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

Inherited from WidgetBase.newInit

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

Inherited from WidgetBase.pause

#### resetColumns

```ts
resetColumns(): void
```

resetColumns

##### Returns void

#### resume

```ts
resume(): void
```

Starts this widget if previously stopped. You do not need to call this if you haven't called pause(), widgets are
automatically started on creation.

##### Returns void

Inherited from WidgetBase.resume

#### saveColumns

```ts
saveColumns(): void
```

saveColumns

##### Returns void
