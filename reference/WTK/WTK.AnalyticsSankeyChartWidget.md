---
title: "AnalyticsSankeyChartWidget"
qualified_name: "WTK.AnalyticsSankeyChartWidget"
kind: class
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "WTK"
group: "Analytics Widgets"
nav_path: "WTK > Analytics Widgets > AnalyticsSankeyChartWidget"
source_url: "https://docs.infrontfinance.com/docs/classes/WTK.AnalyticsSankeyChartWidget.html"
defines: ["AnalyticsSankeyChartWidget"]
member_count: 14
members: ["addEventListener", "addInfrontEventObserver", "canReceiveMessage", "destroy", "getStoredValue", "handleWidgetTitle", "hasOptionChanged", "modify", "mountComponent", "onOptionsChanged", "partialOptions", "setWidgetState", "store", "validateOptions"]
member_groups:
  "Methods": ["addEventListener", "addInfrontEventObserver", "canReceiveMessage", "destroy", "getStoredValue", "handleWidgetTitle", "hasOptionChanged", "modify", "mountComponent", "onOptionsChanged", "partialOptions", "setWidgetState", "store", "validateOptions"]
related_types: ["WTK.AnalyticsSankeyChartWidgetOptions"]
reference_count: 5
references: ["WTK.UI", "WTK.AnalyticsSankeyChartWidgetOptions", "WTK.WidgetState", "WTK.WidgetBase", "WTK.InfrontWidget"]
---

# AnalyticsSankeyChartWidget

AnalyticsSankeyChartWidget class extending SvelteSingleInstrumentWidgetBase class.

`InfrontWidget = infront.analyticsSankeyChartWidget(target, [options]);`

This widget presents a Sankey diagram that visually maps the flow of cash within a company, *
starting from Revenue and ending at Net Income.

The chart highlights how revenue is allocated across various expense categories, taxes, and operational costs, *
offering a clear, intuitive picture of financial situation of the coampany.

Options can be configured with AnalyticsSankeyChartWidgetOptions.

#### Example

```ts
// This configuration creates a window to display the analytics sankey chart widget.
<script type="text/javascript">
    var opts = new Infront.AnalyticsSankeyChartWidgetOptions();
    opts.instrument = { ticker: 'BMW', feed: 26 };

    widget = infront.analyticsSankeyChartWidget("#AnalyticsSankeyChartWidget, opts);
</script>
...
<div id="AnalyticsSankeyChartWidget"></div>
```

#### See

AnalyticsSankeyChartWidgetOptions | WidgetBase | SvelteSingleInstrumentWidgetBase | [InfrontWidget](./WTK.InfrontWidget.md)

#### Hierarchy

- SvelteSingleInstrumentWidgetBase<AnalyticsSankeyChartWidgetOptions>

  - AnalyticsSankeyChartWidget

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

Inherited from SvelteSingleInstrumentWidgetBase.addInfrontEventObserver

#### `Protected` canReceiveMessage

```ts
canReceiveMessage(): boolean
```

Hook to indicate whether the widget handles incoming InterLibraryLink messages.

##### Returns boolean

Inherited from SvelteSingleInstrumentWidgetBase.canReceiveMessage

#### destroy

```ts
destroy(): void
```

Destroys this widget. You must call this before removing the widget from the Page to avoid memory leaks and make
sure the corresponding data is unsubscribed from.

##### Returns void

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

Inherited from SvelteSingleInstrumentWidgetBase.getStoredValue

#### `Protected` handleWidgetTitle

```ts
handleWidgetTitle(): boolean
```

Handle the widgetTitle option

##### Returns boolean

Inherited from SvelteSingleInstrumentWidgetBase.handleWidgetTitle

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

Inherited from SvelteSingleInstrumentWidgetBase.hasOptionChanged

#### modify

```ts
modify(options: Partial<TWidgetOptions>): boolean
```

Updates a widget's options

##### Parameters

- options: Partial<TWidgetOptions>

##### Returns boolean

Inherited from SvelteSingleInstrumentWidgetBase.modify

#### `Protected` mountComponent

```ts
mountComponent(
    element: HTMLElement,
    infrontUI: UI,
    options: AnalyticsSankeyChartWidgetOptions,
    widgetFn: SvelteWidgetFn<
        AnalyticsSankeyChartWidgetOptions,
        Record<string, any>,
    >,
): void
```

Hook to handle mounting of the template component; called before the widget is marked as initialized.
When you override `mountComponent`, you must call ` super.mountComponent()` to ensure the widget is marked
as initialized and the `widgetStateCallback` is called with ` WidgetState.Initialized`, otherwise the widget
will not be properly initialized and may not function correctly.

##### Parameters

- element: HTMLElement
- infrontUI: UI
- options: AnalyticsSankeyChartWidgetOptions
- widgetFn: SvelteWidgetFn<AnalyticsSankeyChartWidgetOptions, Record<string, any>>

##### Returns void

Inherited from SvelteSingleInstrumentWidgetBase.mountComponent

#### `Protected` onOptionsChanged

```ts
onOptionsChanged(changes: SimpleChanges): void
```

Hook called when options have changed when calling modify()

##### Parameters

- changes: SimpleChanges

##### Returns void

Inherited from SvelteSingleInstrumentWidgetBase.onOptionsChanged

#### `Protected` partialOptions

```ts
partialOptions(options: Partial<TWidgetOptions>): Partial<TWidgetOptions>
```

Hook to strip unwanted, or migrate old options

##### Parameters

- options: Partial<TWidgetOptions>

##### Returns Partial<TWidgetOptions>

Inherited from SvelteSingleInstrumentWidgetBase.partialOptions

#### `Protected` setWidgetState

```ts
setWidgetState(state: WidgetState): void
```

Updates the widget's state, and call any registered callback

##### Parameters

- state: [WidgetState](./WTK.WidgetState.md)

##### Returns void

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

Inherited from SvelteSingleInstrumentWidgetBase.store

#### `Protected` validateOptions

```ts
validateOptions(options: AnalyticsSankeyChartWidgetOptions): void
```

Hook to validate the options object

##### Parameters

- options: AnalyticsSankeyChartWidgetOptions

##### Returns void

Inherited from SvelteSingleInstrumentWidgetBase.validateOptions
