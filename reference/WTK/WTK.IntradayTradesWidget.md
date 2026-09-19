---
title: "IntradayTradesWidget"
qualified_name: "WTK.IntradayTradesWidget"
kind: class
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "WTK"
group: "Widgets"
nav_path: "WTK > Widgets > IntradayTradesWidget"
source_url: "https://docs.infrontfinance.com/docs/classes/WTK.IntradayTradesWidget.html"
defines: ["IntradayTradesWidget"]
member_count: 15
members: ["subscribes", "unbinds", "addEventListener", "addInfrontEventObserver", "createBindings", "destroy", "modify", "newBuildUI", "newInit", "newSubscribe", "pause", "receiveMessage", "resetColumns", "resume", "saveColumns"]
member_groups:
  "Properties": ["subscribes", "unbinds"]
  "Methods": ["addEventListener", "addInfrontEventObserver", "createBindings", "destroy", "modify", "newBuildUI", "newInit", "newSubscribe", "pause", "receiveMessage", "resetColumns", "resume", "saveColumns"]
related_types: ["WTK.CommonListWidgetBase", "Utils.InfrontUtil.RowFactory"]
reference_count: 7
references: ["WTK.WidgetSubscriptions", "WTK.WidgetOptions", "WTK.CommonListWidgetBase", "WTK.IntradayTradesWidgetOptions", "WTK.WidgetBase", "WTK.InfrontWidget", "Utils.InfrontUtil.RowFactory"]
---

# IntradayTradesWidget

IntradayTradesWidget class extending CommonListWidgetBase class.

`InfrontWidget = Infront.intradayTradesWidget(target, [options]);`

Shows the latest trades of a given instrument.

Options can be configured with IntradayTradesWidgetOptions.

#### Example

```ts
<script type="text/javascript">
  var opts = new Infront.IntradayTradesWidgetOptions();
  opts.instrument = new Infront.Infront.Instrument(100, "NRE1V")
  opts.pageItems = 20;
  opts.paging = false;
  opts.columns = [
    {
      name: "TIME",
      className: "cell-text-left"
    },
    "VOLUME",
    {
      name: "BUYER",
      className: "cell-text-center"
    },
    {
      name: "SELLER",
      className: "cell-text-center"
    },
    "LAST",
  ];

  infront.intradayTradesWidget("#intradaytrades", opts);
</script>
...
<div id="intradaytrades"></div>
```

#### See

IntradayTradesWidgetOptions | WidgetBase | CommonListWidgetBase | [InfrontWidget](./WTK.InfrontWidget.md)

#### Hierarchy ([View Summary](../type-hierarchy.md#WTK.IntradayTradesWidget))

- CommonListWidgetBase

  - IntradayTradesWidget

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

Overrides CommonListWidgetBase.createBindings

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
