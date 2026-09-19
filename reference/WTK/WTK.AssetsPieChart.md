---
title: "AssetsPieChart"
qualified_name: "WTK.AssetsPieChart"
kind: class
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "WTK"
group: "Trading Widgets"
nav_path: "WTK > Trading Widgets > AssetsPieChart"
source_url: "https://docs.infrontfinance.com/docs/classes/WTK.AssetsPieChart.html"
defines: ["AssetsPieChart"]
member_count: 12
members: ["subscribes", "unbinds", "addEventListener", "addInfrontEventObserver", "createBindings", "destroy", "modify", "newBuildUI", "newInit", "newSubscribe", "pause", "resume"]
member_groups:
  "Properties": ["subscribes", "unbinds"]
  "Methods": ["addEventListener", "addInfrontEventObserver", "createBindings", "destroy", "modify", "newBuildUI", "newInit", "newSubscribe", "pause", "resume"]
related_types: ["WTK.TradingWidgetBase", "Utils.InfrontUtil.IArrayBinding"]
reference_count: 7
references: ["WTK.WidgetSubscriptions", "WTK.WidgetOptions", "WTK.TradingWidgetBase", "WTK.AssetsPieChartOptions", "WTK.WidgetBase", "WTK.InfrontWidget", "Utils.InfrontUtil.IArrayBinding"]
---

# AssetsPieChart

AssetsPieChart class extending TradingWidgetBase class.

`InfrontWidget = InfrontUI.assetsPieChart(target, [options]);`

Displays a pie chart of a portfolio’s holdings.

Chart widgets requires the Highcharts JavaScript library to function.
They also require a height (width optional) to be set via CSS.

Options can be configured with AssetsPieChartOptions.

#### Example

```ts
<script type="text/javascript">
    var opts = new Infront.AssetsPieChartOptions();
    infrontUI.assetsPieChart("#pieChart", opts);
</script>
...
<div id="pieChart"></div>
```

#### See

AssetsPieChartOptions | WidgetBase | TradingWidgetBase | [InfrontWidget](./WTK.InfrontWidget.md)

#### Hierarchy ([View Summary](../type-hierarchy.md#WTK.AssetsPieChart))

- TradingWidgetBase

  - AssetsPieChart

#### Implements

- [IArrayBinding](../Utils/Utils.InfrontUtil.IArrayBinding.md)

### Properties

#### `Protected` subscribes

```ts
subscribes: WidgetSubscriptions
```

Add fields and instruments to subscribe, will unsubscribe and clear on this.unsubscribe()

Inherited from TradingWidgetBase.subscribes

#### `Protected` unbinds

```ts
unbinds: (() => void)[] = []
```

All unbind functions added here will be executed during this.removeBindings()

Inherited from TradingWidgetBase.unbinds

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

Inherited from TradingWidgetBase.addEventListener

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

Inherited from TradingWidgetBase.addInfrontEventObserver

#### `Protected` createBindings

```ts
createBindings(): void
```

Do bindings here

##### Returns void

Inherited from TradingWidgetBase.createBindings

#### destroy

```ts
destroy(): void
```

Destroys this widget. You must call this before removing the widget from the Page to avoid memory leaks and make
sure the corresponding data is unsubscribed from.

##### Returns void

Inherited from TradingWidgetBase.destroy

#### modify

```ts
modify(options: Partial<WidgetOptions>): void
```

Modify the options for this widget.

##### Parameters

- options: Partial<WidgetOptions>

##### Returns void

Inherited from TradingWidgetBase.modify

#### `Protected` newBuildUI

```ts
newBuildUI(): void
```

Responsible for creating DOM and bindings

##### Returns void

Inherited from TradingWidgetBase.newBuildUI

#### `Protected` newInit

```ts
newInit(): void
```

Should do property initialization/resets.

##### Returns void

Inherited from TradingWidgetBase.newInit

#### `Protected` newSubscribe

```ts
newSubscribe(): void
```

Do subscribes here

##### Returns void

Inherited from TradingWidgetBase.newSubscribe

#### pause

```ts
pause(): void
```

Stop this widget. Calling stop will unsubscribe all data, but will not remove the widget from the ui or the data currently contained in it.

##### Returns void

Inherited from TradingWidgetBase.pause

#### resume

```ts
resume(): void
```

Starts this widget if previously stopped. You do not need to call this if you haven't called pause(), widgets are
automatically started on creation.

##### Returns void

Inherited from TradingWidgetBase.resume
