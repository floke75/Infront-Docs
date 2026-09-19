---
title: "HeatmapWidget"
qualified_name: "WTK.HeatmapWidget"
kind: class
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "WTK"
group: "Widgets"
nav_path: "WTK > Widgets > HeatmapWidget"
source_url: "https://docs.infrontfinance.com/docs/classes/WTK.HeatmapWidget.html"
defines: ["HeatmapWidget"]
member_count: 14
members: ["subscribes", "unbinds", "addEventListener", "addInfrontEventObserver", "createBindings", "destroy", "modify", "newBuildUI", "newInit", "newSubscribe", "pause", "resetColumns", "resume", "saveColumns"]
member_groups:
  "Properties": ["subscribes", "unbinds"]
  "Methods": ["addEventListener", "addInfrontEventObserver", "createBindings", "destroy", "modify", "newBuildUI", "newInit", "newSubscribe", "pause", "resetColumns", "resume", "saveColumns"]
related_types: ["WTK.CommonListWidgetBase", "WTK.InfrontWidget", "Utils.InfrontUtil.RowFactory", "Utils.InfrontUtil.ArrayBindingObserver"]
reference_count: 8
references: ["WTK.WidgetSubscriptions", "WTK.WidgetOptions", "WTK.CommonListWidgetBase", "WTK.HeatmapWidgetOptions", "WTK.WidgetBase", "WTK.InfrontWidget", "Utils.InfrontUtil.RowFactory", "Utils.InfrontUtil.ArrayBindingObserver"]
---

# HeatmapWidget

HeatmapWidget class extending CommonListWidgetBase class.

`InfrontWidget = Infront.heatmapWidget(target, [options]);`

Two-dimensional visual representation of data using colors, when the colors all represent different values.

Options can be configured with HeatmapWidgetOptions.

#### Example

```ts
// This configuration creates a list of all your alerts.
<script type="text/javascript">
    var opts = new Infront.HeatmapWidgetOptions();
    opts.feed = 17921;
    opts.id = "myHeatmapWidget3000";
    opts.sortable = true;
    opts.enableChangeStatusColors = true;
    opts.showFilters = false;
    opts.mode = 0;
    opts.useChains = true;
    opts.chains = [
        {
            "feed": 15,
            "name": "NAS100_MANUAL",
            "description": "Nasdaq 100"
        }, {
            "feed": 26,
            "name": "DAX",
            "description": "DAX Constituents"
        }
    ];
    widget = infront.heatmapWidget("#heatmap", opts);
</script>
...
<div id="heatmap"></div>
```

#### See

HeatmapWidgetOptions | WidgetBase | CommonListWidgetBase | [InfrontWidget](./WTK.InfrontWidget.md)

#### Hierarchy ([View Summary](../type-hierarchy.md#WTK.HeatmapWidget))

- CommonListWidgetBase

  - HeatmapWidget

#### Implements

- [InfrontWidget](./WTK.InfrontWidget.md)
- [RowFactory](../Utils/Utils.InfrontUtil.RowFactory.md)
- [ArrayBindingObserver](../Utils/Utils.InfrontUtil.ArrayBindingObserver.md)
- Controller

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

Implementation of [InfrontWidget](./WTK.InfrontWidget.md).[destroy](./WTK.InfrontWidget.md#destroy)

Inherited from CommonListWidgetBase.destroy

#### modify

```ts
modify(options: Partial<WidgetOptions>): void
```

Modify the options for this widget.

##### Parameters

- options: Partial<WidgetOptions>

##### Returns void

Implementation of [InfrontWidget](./WTK.InfrontWidget.md).[modify](./WTK.InfrontWidget.md#modify)

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

Implementation of [InfrontWidget](./WTK.InfrontWidget.md).[pause](./WTK.InfrontWidget.md#pause)

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

Implementation of [InfrontWidget](./WTK.InfrontWidget.md).[resume](./WTK.InfrontWidget.md#resume)

Inherited from CommonListWidgetBase.resume

#### saveColumns

```ts
saveColumns(): void
```

saveColumns

##### Returns void

Inherited from CommonListWidgetBase.saveColumns
