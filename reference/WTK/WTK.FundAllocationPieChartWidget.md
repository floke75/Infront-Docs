---
title: "FundAllocationPieChartWidget"
qualified_name: "WTK.FundAllocationPieChartWidget"
kind: class
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "WTK"
group: "Widgets"
nav_path: "WTK > Widgets > FundAllocationPieChartWidget"
source_url: "https://docs.infrontfinance.com/docs/classes/WTK.FundAllocationPieChartWidget.html"
defines: ["FundAllocationPieChartWidget"]
member_count: 12
members: ["subscribes", "unbinds", "addEventListener", "addInfrontEventObserver", "createBindings", "destroy", "modify", "newBuildUI", "newInit", "newSubscribe", "pause", "resume"]
member_groups:
  "Properties": ["subscribes", "unbinds"]
  "Methods": ["addEventListener", "addInfrontEventObserver", "createBindings", "destroy", "modify", "newBuildUI", "newInit", "newSubscribe", "pause", "resume"]
related_types: ["WTK.WidgetBase", "Utils.InfrontUtil.Binding"]
reference_count: 6
references: ["WTK.WidgetSubscriptions", "WTK.WidgetOptions", "WTK.WidgetBase", "WTK.FundAllocationPieChartWidgetOptions", "WTK.InfrontWidget", "Utils.InfrontUtil.Binding"]
---

# FundAllocationPieChartWidget

FundAllocationPieChartWidget class extending WidgetBase class.

`InfrontWidget = Infront.fundAllocationPieChartWidget(target, [options]);`

The fund allocation pie chart widget gives the user a graphical representation of the county,
asset or sector allocation of one or more funds.

If more than one allocation weighes less than 2%, they will be grouped as "others".

Options can be configured with FundAllocationPieChartWidgetOptions.

#### Example

```ts
<script type="text/javascript">
    var fundPieOpts = new Infront.FundAllocationPieChartWidgetOptions();
    fundPieOpts.instruments = [new Infront.Instrument(18197, "0P00009FQ5"), new Infront.Instrument(2260, "0P00009FQA")];
    fundPieOpts.allocationType = "Country";
    fundPieOpts.innerSize = "33%";
    fundPieOpts.legend = true;
    infront.fundAllocationPieChartWidget("#fundAllocationPie", fundPieOpts);
</script>
...
<div id="fundAllocationPie"></div>
```

#### See

FundAllocationPieChartWidgetOptions | WidgetBase | [InfrontWidget](./WTK.InfrontWidget.md)

#### Hierarchy ([View Summary](../type-hierarchy.md#WTK.FundAllocationPieChartWidget))

- WidgetBase

  - FundAllocationPieChartWidget

#### Implements

- [Binding](../Utils/Utils.InfrontUtil.Binding.md)

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

Overrides WidgetBase.createBindings

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

Overrides WidgetBase.newSubscribe

#### pause

```ts
pause(): void
```

Stop this widget. Calling stop will unsubscribe all data, but will not remove the widget from the ui or the data currently contained in it.

##### Returns void

Inherited from WidgetBase.pause

#### resume

```ts
resume(): void
```

Starts this widget if previously stopped. You do not need to call this if you haven't called pause(), widgets are
automatically started on creation.

##### Returns void

Inherited from WidgetBase.resume
