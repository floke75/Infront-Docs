---
title: "QuoteListWidget"
qualified_name: "WTK.QuoteListWidget"
kind: class
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "WTK"
group: "Widgets"
nav_path: "WTK > Widgets > QuoteListWidget"
source_url: "https://docs.infrontfinance.com/docs/classes/WTK.QuoteListWidget.html"
defines: ["QuoteListWidget"]
member_count: 16
members: ["subscribes", "unbinds", "addEventListener", "addInfrontEventObserver", "createBindings", "destroy", "modify", "newBuildUI", "newInit", "newSubscribe", "pause", "receiveMessage", "resetColumns", "resume", "saveColumns", "setMaxItems"]
member_groups:
  "Properties": ["subscribes", "unbinds"]
  "Methods": ["addEventListener", "addInfrontEventObserver", "createBindings", "destroy", "modify", "newBuildUI", "newInit", "newSubscribe", "pause", "receiveMessage", "resetColumns", "resume", "saveColumns", "setMaxItems"]
related_types: ["WTK.CommonListWidgetBase", "Utils.InfrontUtil.RowFactory", "Utils.InfrontUtil.ArrayBindingObserver"]
reference_count: 8
references: ["WTK.WidgetSubscriptions", "WTK.WidgetOptions", "WTK.CommonListWidgetBase", "WTK.QuoteListWidgetOptions", "WTK.WidgetBase", "WTK.InfrontWidget", "Utils.InfrontUtil.RowFactory", "Utils.InfrontUtil.ArrayBindingObserver"]
---

# QuoteListWidget

QuoteListWidget class extending CommonListWidgetBase class.

`InfrontWidget = Infront.quoteListWidget(target, [options]);`

A generic and highly configurable market data table.

Options can be configured with QuoteListWidgetOptions.

#### Example

```ts
// This is the table layout version of the quotelist
<script type="text/javascript">
    var opts = new Infront.QuoteListWidgetOptions();
    opts.instruments = [
        new Infront.Instrument(6880, "990100P"),
        new Infront.Instrument(20, "DJI"),
        new Infront.Instrument(2087, "COMP"),
        new Infront.Instrument(2088, "SP500"),
        new Infront.Instrument(2018, "UKX")
    ];
    opts.columns = ["FULL_NAME", "CURRENCY", "LAST"];
    infront.quoteList("#quotelist", opts);
</script>
...
<div id="quotelist"></div>
```

#### Example

```ts
// This is the flex layout version of the quotelist
<script type="text/javascript">
    var optsflex = new Infront.QuoteListWidgetOptions();
    optsflex.instruments = opts.instruments;
    optsflex.layout = Infront.ListLayout.DIV;
    optsflex.expandableRows = true;
    optsflex.createExpandRow = function (instrument, element) {
    	   var container = document.createElement("div");
    	   container.setAttribute("style", "width:100%;height:200px");
    	   element.appendChild(container);
    	   var opts = new Infront.FocusWidgetOptions();
    	   opts.instrument = instrument;
    	   var focus = infront.focusWidget(container, opts);
        return function () {
            // If you are using widgets while handling incomplete data
            // it is recommended that you use try catch functions.
            // ALWAYS call destroy methods of widgets used in createExpandRow
            try {
                focus.destroy();
             }
             catch (error) {
                console.log(error);
            }
            // end return function by removing the container
            container.parentElement.removeChild(container);
        };
    }
    infront.quoteList("quotelist-flex", optsflex);
</script>
...
<div id="quotelist-flex"></div>
```

#### See

QuoteListWidgetOptions | WidgetBase | CommonListWidgetBase | [InfrontWidget](./WTK.InfrontWidget.md)

#### Hierarchy ([View Summary](../type-hierarchy.md#WTK.QuoteListWidget))

- CommonListWidgetBase

  - QuoteListWidget

#### Implements

- Controller
- Target
- [RowFactory](../Utils/Utils.InfrontUtil.RowFactory.md)
- [ArrayBindingObserver](../Utils/Utils.InfrontUtil.ArrayBindingObserver.md)

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

#### setMaxItems

```ts
setMaxItems(newMax: number): void
```

set maxItems

##### Parameters

- newMax: number

##### Returns void
