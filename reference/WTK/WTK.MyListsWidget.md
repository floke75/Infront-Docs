---
title: "MyListsWidget"
qualified_name: "WTK.MyListsWidget"
kind: class
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "WTK"
group: "Widgets"
nav_path: "WTK > Widgets > MyListsWidget"
source_url: "https://docs.infrontfinance.com/docs/classes/WTK.MyListsWidget.html"
defines: ["MyListsWidget"]
member_count: 9
members: ["subscribes", "unbinds", "addEventListener", "addInfrontEventObserver", "createBindings", "destroy", "newBuildUI", "newInit", "newSubscribe"]
member_groups:
  "Properties": ["subscribes", "unbinds"]
  "Methods": ["addEventListener", "addInfrontEventObserver", "createBindings", "destroy", "newBuildUI", "newInit", "newSubscribe"]
related_types: ["WTK.WidgetBase", "Utils.InfrontUtil.IArrayBinding"]
reference_count: 5
references: ["WTK.WidgetSubscriptions", "WTK.WidgetBase", "WTK.MyListsWidgetOptions", "WTK.InfrontWidget", "Utils.InfrontUtil.IArrayBinding"]
---

# MyListsWidget

MyListsWidget class extending WidgetBase class.

`InfrontWidget = Infront.myListsWidget(target, [options]);`

"My lists" is also known as "Infront.Watchlist".

The My lists widget displays a range a of customised lists across one or more tables (tabbed).
The lists are made and maintained by the user.

Options can be configured with MyListsWidgetOptions.

#### Example

```ts
// This configuration shows two tabs with four fields each,
// sorted descending by the second column
<script type="text/javascript">
    var opts = new Infront.MyListsWidgetOptions();
    opts.sortable = true;
    opts.defaultSortedColumn = 2;
    opts.defaultSortOrder = Infront.SortOrder.Desc;
    opts.columns = ["TICKER", "CURRENCY", "LAST", "PCT_CHANGE", "YTD_CHANGE"];
    opts.tabs = [{
        id:"overview",
        label:"Overview",
        columns:["TICKER", "CURRENCY", "LAST"]
    },{
        id: "performance",
        label: "Performance",
        columns: ["TICKER", "YTD_CHANGE", "PCT_CHANGE"]
    }];
    infront.myListsWidget("#my-lists", opts);
</script>
...
<div id="my-lists"></div>
```

#### See

MyListsWidgetOptions | WidgetBase | [InfrontWidget](./WTK.InfrontWidget.md)

#### Hierarchy ([View Summary](../type-hierarchy.md#WTK.MyListsWidget))

- WidgetBase

  - MyListsWidget

#### Implements

- [IArrayBinding](../Utils/Utils.InfrontUtil.IArrayBinding.md)

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

Overrides WidgetBase.newSubscribe
