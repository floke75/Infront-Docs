---
title: "AlertListWidget"
qualified_name: "WTK.AlertListWidget"
kind: class
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "WTK"
group: "Widgets"
nav_path: "WTK > Widgets > AlertListWidget"
source_url: "https://docs.infrontfinance.com/docs/classes/WTK.AlertListWidget.html"
defines: ["AlertListWidget"]
member_count: 11
members: ["subscribes", "unbinds", "addEventListener", "addInfrontEventObserver", "createBindings", "destroy", "newBuildUI", "newInit", "newSubscribe", "pause", "resume"]
member_groups:
  "Properties": ["subscribes", "unbinds"]
  "Methods": ["addEventListener", "addInfrontEventObserver", "createBindings", "destroy", "newBuildUI", "newInit", "newSubscribe", "pause", "resume"]
related_types: ["WTK.WidgetBase", "WTK.InfrontWidget", "Utils.InfrontUtil.RowFactory", "Utils.InfrontUtil.ArrayBindingObserver"]
reference_count: 6
references: ["WTK.WidgetSubscriptions", "WTK.WidgetBase", "WTK.AlertListWidgetOptions", "WTK.InfrontWidget", "Utils.InfrontUtil.RowFactory", "Utils.InfrontUtil.ArrayBindingObserver"]
---

# AlertListWidget

AlertListWidget class extending WidgetBase class.

`InfrontWidget = Infront.alertListWidget(target, [options]);`

This widgets shows a list of all the alerts you currently have in our system.

Options can be configured with AlertListWidgetOptions.

#### Example

```ts
// This configuration creates a list of all your alerts.
<script type="text/javascript">
    var opts = new Infront.AlertListWidgetOptions();
    infront.alertListWidget("alertList", opts);
</script>
...
<div id="alertList"></div>
```

#### See

AlertListWidgetOptions | WidgetBase | [InfrontWidget](./WTK.InfrontWidget.md)

#### Hierarchy ([View Summary](../type-hierarchy.md#WTK.AlertListWidget))

- WidgetBase

  - AlertListWidget

#### Implements

- [InfrontWidget](./WTK.InfrontWidget.md)
- Controller
- [RowFactory](../Utils/Utils.InfrontUtil.RowFactory.md)
- [ArrayBindingObserver](../Utils/Utils.InfrontUtil.ArrayBindingObserver.md)

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

Implementation of [InfrontWidget](./WTK.InfrontWidget.md).[pause](./WTK.InfrontWidget.md#pause)

Inherited from WidgetBase.pause

#### resume

```ts
resume(): void
```

Starts this widget if previously stopped. You do not need to call this if you haven't called pause(), widgets are
automatically started on creation.

##### Returns void

Implementation of [InfrontWidget](./WTK.InfrontWidget.md).[resume](./WTK.InfrontWidget.md#resume)

Inherited from WidgetBase.resume
