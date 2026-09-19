---
title: "BrokerstatsWidget"
qualified_name: "WTK.BrokerstatsWidget"
kind: class
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "WTK"
group: "Widgets"
nav_path: "WTK > Widgets > BrokerstatsWidget"
source_url: "https://docs.infrontfinance.com/docs/classes/WTK.BrokerstatsWidget.html"
defines: ["BrokerstatsWidget"]
member_count: 14
members: ["subscribes", "unbinds", "addEventListener", "addInfrontEventObserver", "createBindings", "destroy", "newBuildUI", "newInit", "newSubscribe", "pause", "receiveMessage", "resetColumns", "resume", "saveColumns"]
member_groups:
  "Properties": ["subscribes", "unbinds"]
  "Methods": ["addEventListener", "addInfrontEventObserver", "createBindings", "destroy", "newBuildUI", "newInit", "newSubscribe", "pause", "receiveMessage", "resetColumns", "resume", "saveColumns"]
related_types: ["WTK.CommonListWidgetBase", "Utils.InfrontUtil.RowFactory"]
reference_count: 6
references: ["WTK.WidgetSubscriptions", "WTK.CommonListWidgetBase", "WTK.BrokerstatsWidgetOptions", "WTK.WidgetBase", "WTK.InfrontWidget", "Utils.InfrontUtil.RowFactory"]
---

# BrokerstatsWidget

BrokerstatsWidget class extending CommonListWidgetBase class.

`InfrontWidget = Infront.brokerstatsWidget(target, [options]);`

The broker statistics widget shows a table of broker statistics for a feed, an instrument or a specific broker.

Options can be configured with BrokerstatsWidgetOptions.

#### Example

```ts
<script type="text/javascript">
    var opts = new Infront.BrokerstatsWidgetOptions();
    opts.instrument = new Infront.Infront.Instrument(100, "NOKIA");
    opts.columns = ["NAME", "FULLNAME", "BUY_VALUE", "SELL_VALUE", "TOTAL_VALUE"];
    opts.period = InfrontConstants.BrokerStatsPeriodes.INTRADAY;
    opts.sortable = true;
    opts.defaultSortedColumn = 4;
    opts.enablePeriodSelector = true;
    infront.brokerstatsWidget("#bstats", opts);
</script>
...
<div id="bstats"></div>
```

#### See

BrokerstatsWidgetOptions | WidgetBase | CommonListWidgetBase | [InfrontWidget](./WTK.InfrontWidget.md)

#### Hierarchy ([View Summary](../type-hierarchy.md#WTK.BrokerstatsWidget))

- CommonListWidgetBase

  - BrokerstatsWidget

#### Implements

- [RowFactory](../Utils/Utils.InfrontUtil.RowFactory.md)
- Target

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

Inherited from CommonListWidgetBase.newSubscribe

#### pause

```ts
pause(): void
```

Stop this widget. Calling stop will unsubscribe all data, but will not remove the widget from the ui or the data currently contained in it.

##### Returns void

Inherited from CommonListWidgetBase.pause

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
