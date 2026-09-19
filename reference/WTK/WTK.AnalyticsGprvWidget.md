---
title: "AnalyticsGprvWidget"
qualified_name: "WTK.AnalyticsGprvWidget"
kind: class
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "WTK"
group: "Analytics Widgets"
nav_path: "WTK > Analytics Widgets > AnalyticsGprvWidget"
source_url: "https://docs.infrontfinance.com/docs/classes/WTK.AnalyticsGprvWidget.html"
defines: ["AnalyticsGprvWidget"]
member_count: 13
members: ["addEventListener", "addInfrontEventObserver", "canReceiveMessage", "destroy", "getStoredValue", "handleWidgetTitle", "modify", "mountComponent", "onOptionsChanged", "partialOptions", "setWidgetState", "store", "validateOptions"]
member_groups:
  "Methods": ["addEventListener", "addInfrontEventObserver", "canReceiveMessage", "destroy", "getStoredValue", "handleWidgetTitle", "modify", "mountComponent", "onOptionsChanged", "partialOptions", "setWidgetState", "store", "validateOptions"]
related_types: ["WTK.AnalyticsGprvWidgetOptions", "WTK.StaticSvelteInfrontWidgetComponent"]
reference_count: 7
references: ["WTK.UI", "WTK.AnalyticsGprvWidgetOptions", "WTK.WidgetState", "WTK.WidgetBase", "WTK.SingleInstrumentWidgetBase", "WTK.InfrontWidget", "WTK.StaticSvelteInfrontWidgetComponent"]
---

# AnalyticsGprvWidget

AnalyticsGprvWidget class extending SvelteSingleInstrumentWidgetBase class.

`InfrontWidget = infront.analyticsGprvWidget(target, [options]);`

This widget is used for comparing GPRVs data of a company against its peers (sub-sector)
or another company.

GPRV are score metrics in the categories Growth, Profitability, Risk, Value.

Options can be configured with AnalyticsGprvWidgetOptions.

#### Example

```ts
<script type="text/javascript">
    var opts = new infront.AnalyticsGprvWidgetOptions();
    opts.instrument = { ticker: 'BMW', feed: 26 };

    widget = infront.analyticsGprvWidget("#analyticsGprv", opts);
</script>
...
<div id="analyticsGprv"></div>
```

#### See

AnalyticsGprvWidgetOptions | WidgetBase | SingleInstrumentWidgetBase | [InfrontWidget](./WTK.InfrontWidget.md)

#### Hierarchy

- SvelteSingleInstrumentWidgetBase<AnalyticsGprvWidgetOptions>

  - AnalyticsGprvWidget

#### Implements

- [StaticSvelteInfrontWidgetComponent](./WTK.StaticSvelteInfrontWidgetComponent.md)<typeof AnalyticsGprvWidget>

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

Implementation of StaticSvelteInfrontWidgetComponent.addEventListener

Inherited from SvelteSingleInstrumentWidgetBase.addEventListener

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

Implementation of StaticSvelteInfrontWidgetComponent.addInfrontEventObserver

Inherited from SvelteSingleInstrumentWidgetBase.addInfrontEventObserver

#### `Protected` canReceiveMessage

```ts
canReceiveMessage(): boolean
```

Hook to indicate whether the widget handles incoming InterLibraryLink messages.

##### Returns boolean

Implementation of StaticSvelteInfrontWidgetComponent.canReceiveMessage

Inherited from SvelteSingleInstrumentWidgetBase.canReceiveMessage

#### destroy

```ts
destroy(): void
```

Destroys this widget. You must call this before removing the widget from the Page to avoid memory leaks and make
sure the corresponding data is unsubscribed from.

##### Returns void

Implementation of StaticSvelteInfrontWidgetComponent.destroy

Inherited from SvelteSingleInstrumentWidgetBase.destroy

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

Implementation of StaticSvelteInfrontWidgetComponent.getStoredValue

Inherited from SvelteSingleInstrumentWidgetBase.getStoredValue

#### `Protected` handleWidgetTitle

```ts
handleWidgetTitle(): boolean
```

Handle the widgetTitle option

##### Returns boolean

Implementation of StaticSvelteInfrontWidgetComponent.handleWidgetTitle

Inherited from SvelteSingleInstrumentWidgetBase.handleWidgetTitle

#### modify

```ts
modify(options: Partial<TWidgetOptions>): boolean
```

Updates a widget's options

##### Parameters

- options: Partial<TWidgetOptions>

##### Returns boolean

Implementation of StaticSvelteInfrontWidgetComponent.modify

Inherited from SvelteSingleInstrumentWidgetBase.modify

#### `Protected` mountComponent

```ts
mountComponent(
    element: HTMLElement,
    infrontUI: UI,
    options: AnalyticsGprvWidgetOptions,
    widgetFn: SvelteWidgetFn<AnalyticsGprvWidgetOptions, Record<string, any>>,
): void
```

Hook to handle mounting of the template component; called before the widget is marked as initialized.
When you override `mountComponent`, you must call ` super.mountComponent()` to ensure the widget is marked
as initialized and the `widgetStateCallback` is called with ` WidgetState.Initialized`, otherwise the widget
will not be properly initialized and may not function correctly.

##### Parameters

- element: HTMLElement
- infrontUI: UI
- options: AnalyticsGprvWidgetOptions
- widgetFn: SvelteWidgetFn<AnalyticsGprvWidgetOptions, Record<string, any>>

##### Returns void

Implementation of StaticSvelteInfrontWidgetComponent.mountComponent

Inherited from SvelteSingleInstrumentWidgetBase.mountComponent

#### `Protected` onOptionsChanged

```ts
onOptionsChanged(changes: SimpleChanges): void
```

Hook called when options have changed when calling modify()

##### Parameters

- changes: SimpleChanges

##### Returns void

Implementation of StaticSvelteInfrontWidgetComponent.onOptionsChanged

Overrides SvelteSingleInstrumentWidgetBase.onOptionsChanged

#### `Protected` partialOptions

```ts
partialOptions(options: Partial<TWidgetOptions>): Partial<TWidgetOptions>
```

Hook to strip unwanted, or migrate old options

##### Parameters

- options: Partial<TWidgetOptions>

##### Returns Partial<TWidgetOptions>

Implementation of StaticSvelteInfrontWidgetComponent.partialOptions

Inherited from SvelteSingleInstrumentWidgetBase.partialOptions

#### `Protected` setWidgetState

```ts
setWidgetState(state: WidgetState): void
```

Updates the widget's state, and call any registered callback

##### Parameters

- state: [WidgetState](./WTK.WidgetState.md)

##### Returns void

Implementation of StaticSvelteInfrontWidgetComponent.setWidgetState

Inherited from SvelteSingleInstrumentWidgetBase.setWidgetState

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

Implementation of StaticSvelteInfrontWidgetComponent.store

Inherited from SvelteSingleInstrumentWidgetBase.store

#### `Protected` validateOptions

```ts
validateOptions(options: AnalyticsGprvWidgetOptions): void
```

Hook to validate the options object

##### Parameters

- options: AnalyticsGprvWidgetOptions

##### Returns void

Implementation of StaticSvelteInfrontWidgetComponent.validateOptions

Inherited from SvelteSingleInstrumentWidgetBase.validateOptions
