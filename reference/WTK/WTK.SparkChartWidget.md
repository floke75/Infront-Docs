---
title: "SparkChartWidget"
qualified_name: "WTK.SparkChartWidget"
kind: class
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "WTK"
group: "Widgets"
nav_path: "WTK > Widgets > SparkChartWidget"
source_url: "https://docs.infrontfinance.com/docs/classes/WTK.SparkChartWidget.html"
defines: ["SparkChartWidget"]
member_count: 17
members: ["addEventListener", "addInfrontEventObserver", "canReceiveMessage", "destroy", "getStoredValue", "handleWidgetTitle", "hasOptionChanged", "modify", "mountComponent", "onOptionsChanged", "partialOptions", "pause", "resume", "setInstrument", "setWidgetState", "store", "validateOptions"]
member_groups:
  "Methods": ["addEventListener", "addInfrontEventObserver", "canReceiveMessage", "destroy", "getStoredValue", "handleWidgetTitle", "hasOptionChanged", "modify", "mountComponent", "onOptionsChanged", "partialOptions", "pause", "resume", "setInstrument", "setWidgetState", "store", "validateOptions"]
related_types: ["WTK.SparkChartWidgetOptions"]
reference_count: 4
references: ["WTK.UI", "WTK.SparkChartWidgetOptions", "SDK.InfrontSDK.SymbolId", "WTK.WidgetState"]
---

# SparkChartWidget

SparkChartWidget class extending GenericSingleInstrumentWidgetBase.

A compact sparkline chart showing an instrument's price history, or a series
of data points supplied directly. Supports line and area chart types, optional
stepped rendering, and an optional baseline (open, previous close, or a fixed
value) with configurable line, area, and baseline styling.

Options can be configured with SparkChartWidgetOptions.

#### See

SparkChartWidgetOptions

#### Hierarchy

- GenericSingleInstrumentWidgetBase<SparkChartWidgetOptions>

  - SparkChartWidget

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

Inherited from GenericSingleInstrumentWidgetBase.addEventListener

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

Inherited from GenericSingleInstrumentWidgetBase.addInfrontEventObserver

#### `Protected` canReceiveMessage

```ts
canReceiveMessage(): boolean
```

Hook to indicate whether the widget handles incoming InterLibraryLink messages.

##### Returns boolean

Inherited from GenericSingleInstrumentWidgetBase.canReceiveMessage

#### destroy

```ts
destroy(): void
```

Destroys this widget. You must call this before removing the widget from the Page to avoid memory leaks and make
sure the corresponding data is unsubscribed from.

##### Returns void

Inherited from GenericSingleInstrumentWidgetBase.destroy

#### `Protected` getStoredValue

```ts
getStoredValue(key: string): unknown
```

Retrieves a value from the widget's storage, with a return value of `undefined` corresponding to "not set in storage".

Since keys not starting with `#` are considered as having a 1-on-1 correspondence with the widget's options keys,
you should not use this method to access those values, but use the `options` object instead.

##### Parameters

- key: string

##### Returns unknown

Inherited from GenericSingleInstrumentWidgetBase.getStoredValue

#### `Protected` handleWidgetTitle

```ts
handleWidgetTitle(): boolean
```

Handle the widgetTitle option

##### Returns boolean

Inherited from GenericSingleInstrumentWidgetBase.handleWidgetTitle

#### `Protected` hasOptionChanged

```ts
hasOptionChanged(prop: string, oldValue: unknown, newValue: unknown): boolean
```

Hook to determine if an option value has changed

##### Parameters

- prop: string
- oldValue: unknown
- newValue: unknown

##### Returns boolean

Inherited from GenericSingleInstrumentWidgetBase.hasOptionChanged

#### modify

```ts
modify(options: PartialUnion<SparkChartOptions>): boolean
```

Updates a widget's options

##### Parameters

- options: PartialUnion<SparkChartOptions>

##### Returns boolean

Overrides GenericSingleInstrumentWidgetBase.modify

#### `Protected` mountComponent

```ts
mountComponent(
    element: HTMLElement,
    infrontUI: UI,
    options: SparkChartWidgetOptions,
): void
```

Hook to handle mounting of the template component; called before the widget is marked as initialized.
When you override `mountComponent`, you must call ` super.mountComponent()` to ensure the widget is marked
as initialized and the `widgetStateCallback` is called with ` WidgetState.Initialized`, otherwise the widget
will not be properly initialized and may not function correctly.

##### Parameters

- element: HTMLElement
- infrontUI: UI
- options: SparkChartWidgetOptions

##### Returns void

Overrides GenericSingleInstrumentWidgetBase.mountComponent

#### `Protected` onOptionsChanged

```ts
onOptionsChanged(changes: SimpleChanges): void
```

Hook called when options have changed when calling modify()

##### Parameters

- changes: SimpleChanges

##### Returns void

Inherited from GenericSingleInstrumentWidgetBase.onOptionsChanged

#### `Protected` partialOptions

```ts
partialOptions(options: Partial<TWidgetOptions>): Partial<TWidgetOptions>
```

Hook to strip unwanted, or migrate old options

##### Parameters

- options: Partial<TWidgetOptions>

##### Returns Partial<TWidgetOptions>

Inherited from GenericSingleInstrumentWidgetBase.partialOptions

#### pause

```ts
pause(): void
```

Stop this widget. Calling stop will unsubscribe all data, but will not remove the widget from the ui or the data currently contained in it.

##### Returns void

Inherited from GenericSingleInstrumentWidgetBase.pause

#### resume

```ts
resume(): void
```

Starts this widget if previously stopped. You do not need to call this if you haven't called pause(), widgets are
automatically started on creation.

##### Returns void

Inherited from GenericSingleInstrumentWidgetBase.resume

#### setInstrument

```ts
setInstrument(instrument: SymbolId): boolean
```

Changes the instrument for the widget, returning *true* if the instrument was indeed changed.

Will also notify any linked targets of the change by sending an appropriate message.

##### Parameters

- instrument: [SymbolId](../SDK/SDK.InfrontSDK.SymbolId.md)

##### Returns boolean

Inherited from GenericSingleInstrumentWidgetBase.setInstrument

#### `Protected` setWidgetState

```ts
setWidgetState(state: WidgetState): void
```

Updates the widget's state, and call any registered callback

##### Parameters

- state: [WidgetState](./WTK.WidgetState.md)

##### Returns void

Inherited from GenericSingleInstrumentWidgetBase.setWidgetState

#### `Protected` store

```ts
store(key: string, val: unknown): void
```

Stores a value in the widget's storage.

Note that `undefined` is treated as "not set" (which removes the key from storage, like with ` clearStoredValue`),
while `null` is treated as a valid value.

Since keys not starting with `#` are considered as having a 1-on-1 correspondence with the widget's options keys,
you should not use this method to mutate those values, but use the `modify` method to change the options instead,
which will also ensure the new values are properly validated, and trigger the necessary updates in the widget.

##### Parameters

- key: string
- val: unknown

##### Returns void

Inherited from GenericSingleInstrumentWidgetBase.store

#### `Protected` validateOptions

```ts
validateOptions(options: SparkChartWidgetOptions): void
```

Hook to validate the options object

##### Parameters

- options: SparkChartWidgetOptions

##### Returns void

Inherited from GenericSingleInstrumentWidgetBase.validateOptions
