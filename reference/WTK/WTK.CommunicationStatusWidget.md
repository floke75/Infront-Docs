---
title: "CommunicationStatusWidget"
qualified_name: "WTK.CommunicationStatusWidget"
kind: class
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "WTK"
group: "Widgets"
nav_path: "WTK > Widgets > CommunicationStatusWidget"
source_url: "https://docs.infrontfinance.com/docs/classes/WTK.CommunicationStatusWidget.html"
defines: ["CommunicationStatusWidget"]
member_count: 14
members: ["subscribes", "unbinds", "addEventListener", "addInfrontEventObserver", "createBindings", "destroy", "modify", "newBuildUI", "newInit", "newSubscribe", "pause", "resetColumns", "resume", "saveColumns"]
member_groups:
  "Properties": ["subscribes", "unbinds"]
  "Methods": ["addEventListener", "addInfrontEventObserver", "createBindings", "destroy", "modify", "newBuildUI", "newInit", "newSubscribe", "pause", "resetColumns", "resume", "saveColumns"]
related_types: ["WTK.CommonListWidgetBase", "Utils.InfrontUtil.RowFactory"]
reference_count: 7
references: ["WTK.WidgetSubscriptions", "WTK.WidgetOptions", "WTK.CommonListWidgetBase", "WTK.CommunicationStatusWidgetOptions", "WTK.WidgetBase", "WTK.InfrontWidget", "Utils.InfrontUtil.RowFactory"]
---

# CommunicationStatusWidget

CommunicationStatusWidget class extending CommonListWidgetBase class.

`InfrontWidget = Infront.communicationStatus(target, [options]);`

This widget displays a list of connection states.

Options can be configured with CommunicationStatusWidgetOptions.

#### Example

```ts
<script type="text/javascript">
    var opts = new Infront.CommunicationStatusWidgetOptions();
    opts.sortable = true;
    widget = infront.communicationStatus("#communicationStatus", opts);
</script>
...
<div id="communicationStatus"></div>
```

#### See

CommunicationStatusWidgetOptions | WidgetBase | CommonListWidgetBase | [InfrontWidget](./WTK.InfrontWidget.md)

#### Hierarchy ([View Summary](../type-hierarchy.md#WTK.CommunicationStatusWidget))

- CommonListWidgetBase

  - CommunicationStatusWidget

#### Implements

- [RowFactory](../Utils/Utils.InfrontUtil.RowFactory.md)

### Properties

#### `Protected` subscribes

```ts
subscribes: WidgetSubscriptions
```

Add fields and instruments to subscribe, will unsubscribe and clear on this.unsubscribe()

Inherited from CommonListWidgetBase.subscribes

#### `Protected` unbinds

```ts
unbinds: (() => void)[] = []
```

All unbind functions added here will be executed during this.removeBindings()

Inherited from CommonListWidgetBase.unbinds

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

Inherited from CommonListWidgetBase.addEventListener

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

Inherited from CommonListWidgetBase.addInfrontEventObserver

#### `Protected` createBindings

```ts
createBindings(): void
```

Do bindings here

##### Returns void

Inherited from CommonListWidgetBase.createBindings

#### destroy

```ts
destroy(): void
```

Destroys this widget. You must call this before removing the widget from the Page to avoid memory leaks and make
sure the corresponding data is unsubscribed from.

##### Returns void

Inherited from CommonListWidgetBase.destroy

#### modify

```ts
modify(options: Partial<WidgetOptions>): void
```

Modify the options for this widget.

##### Parameters

- options: Partial<WidgetOptions>

##### Returns void

Inherited from CommonListWidgetBase.modify

#### `Protected` newBuildUI

```ts
newBuildUI(): void
```

Responsible for creating DOM and bindings

##### Returns void

Overrides CommonListWidgetBase.newBuildUI

#### `Protected` newInit

```ts
newInit(): void
```

Should do property initialization/resets.

##### Returns void

Overrides CommonListWidgetBase.newInit

#### `Protected` newSubscribe

```ts
newSubscribe(): void
```

Do subscribes here

##### Returns void

Overrides CommonListWidgetBase.newSubscribe

#### pause

```ts
pause(): void
```

Stop this widget. Calling stop will unsubscribe all data, but will not remove the widget from the ui or the data currently contained in it.

##### Returns void

Inherited from CommonListWidgetBase.pause

#### resetColumns

```ts
resetColumns(): void
```

resetColumns

##### Returns void

Inherited from CommonListWidgetBase.resetColumns

#### resume

```ts
resume(): void
```

Starts this widget if previously stopped. You do not need to call this if you haven't called pause(), widgets are
automatically started on creation.

##### Returns void

Inherited from CommonListWidgetBase.resume

#### saveColumns

```ts
saveColumns(): void
```

saveColumns

##### Returns void

Inherited from CommonListWidgetBase.saveColumns
