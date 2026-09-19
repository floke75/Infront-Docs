---
title: "RiskPortfolioSensitivitiesWidgetAlpha"
qualified_name: "WTK.RiskPortfolioSensitivitiesWidget"
kind: class
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "WTK"
group: "Risk Widgets"
nav_path: "WTK > Risk Widgets > RiskPortfolioSensitivitiesWidget"
source_url: "https://docs.infrontfinance.com/docs/classes/WTK.RiskPortfolioSensitivitiesWidget.html"
defines: ["RiskPortfolioSensitivitiesWidget"]
member_count: 41
members: ["constructor", "componentRef", "element", "infront", "infrontUI", "isInitialised", "linkChannels", "options", "optionsProxy", "storage", "suppressComponentUpdate", "widgetState", "widgetTitle", "accepts", "addEventListener", "addInfrontEventObserver", "canReceiveMessage", "clearStoredValue", "createOptions", "destroy", "getStoredValue", "handleWidgetTitle", "hasOptionChanged", "isResizeable", "link", "modify", "mountComponent", "onDestroy", "onOptionsChanged", "partialOptions", "pause", "receiveMessage", "removeAllStorage", "resizeWidget", "resume", "setInstrument", "setWidgetState", "store", "unlink", "unregisterAllEvents", "validateOptions"]
member_groups:
  "Constructors": ["constructor"]
  "Properties": ["componentRef", "element", "infront", "infrontUI", "isInitialised", "linkChannels", "options", "optionsProxy", "storage", "suppressComponentUpdate", "widgetState", "widgetTitle"]
  "Methods": ["accepts", "addEventListener", "addInfrontEventObserver", "canReceiveMessage", "clearStoredValue", "createOptions", "destroy", "getStoredValue", "handleWidgetTitle", "hasOptionChanged", "isResizeable", "link", "modify", "mountComponent", "onDestroy", "onOptionsChanged", "partialOptions", "pause", "receiveMessage", "removeAllStorage", "resizeWidget", "resume", "setInstrument", "setWidgetState", "store", "unlink", "unregisterAllEvents", "validateOptions"]
related_types: ["WTK.RiskPortfolioSensitivitiesWidgetOptions"]
reference_count: 6
references: ["WTK.UI", "WTK.RiskPortfolioSensitivitiesWidgetOptions", "WTK.WidgetState", "SDK.InfrontSDK.SymbolId", "WTK.WidgetBase", "WTK.InfrontWidget"]
---

# RiskPortfolioSensitivitiesWidgetAlpha

RiskPortfolioSensitivitiesWidget class extending SvelteSingleInstrumentWidgetBase class.

`InfrontWidget = infront.riskPortfolioSensitivitiesWidget(target, [options]);`

The RiskPortfolioSensitivities widget shows a line chart with the sensitivity of the portfolio value with respect to changes of a selected portfolio position.

This means that the investor can see how the portfolio value changes if e.g. the selected position changes by 0.5% and hence has a positive or negative correlation with the portfolio.

Options can be configured with RiskPortfolioSensitivitiesWidgetOptions.

#### Example

```ts
<script type="text/javascript">
    var opts = new Infront.RiskPortfolioSensitivitiesWidgetOptions({
        portfolioSource: 'wtk',
        portfolioId: '123456',
        fromDate: new Data('2025-01-01'),
        toDate: new Date(),
    });

    widget = infront.riskPortfolioSensitivitiesWidget("RiskPortfolioSensitivitiesWidget", opts);
</script>
...
<div id="RiskPortfolioSensitivitiesWidget"></div>
```

#### See

RiskPortfolioSensitivitiesWidgetOptions | WidgetBase | SvelteSingleInstrumentWidgetBase | [InfrontWidget](./WTK.InfrontWidget.md)

#### Hierarchy

- SvelteSingleInstrumentWidgetBase<RiskPortfolioSensitivitiesWidgetOptions>

  - RiskPortfolioSensitivitiesWidget

### Constructors

#### constructor

```ts
new RiskPortfolioSensitivitiesWidget(
    parentElement: HTMLElement,
    infrontUI: UI,
    options: Partial<RiskPortfolioSensitivitiesWidgetOptions>,
): RiskPortfolioSensitivitiesWidget
```

Alpha

##### Parameters

- parentElement: HTMLElement
- infrontUI: UI
- options: Partial<RiskPortfolioSensitivitiesWidgetOptions>

##### Returns RiskPortfolioSensitivitiesWidget

Overrides SvelteSingleInstrumentWidgetBase<RiskPortfolioSensitivitiesWidgetOptions>.constructor

### Properties

#### `Protected` ` Alpha`componentRef

```ts
componentRef: UWidgetInstance
```

Inherited from SvelteSingleInstrumentWidgetBase.componentRef

#### `Readonly` ` Alpha`element

```ts
element: HTMLElement
```

Inherited from SvelteSingleInstrumentWidgetBase.element

#### `Protected` ` Alpha`infront

```ts
infront: Model
```

Inherited from SvelteSingleInstrumentWidgetBase.infront

#### `Protected` ` Alpha`infrontUI

```ts
infrontUI: UI
```

Inherited from SvelteSingleInstrumentWidgetBase.infrontUI

#### `Protected` ` Alpha`isInitialised

```ts
isInitialised: boolean = false
```

Inherited from SvelteSingleInstrumentWidgetBase.isInitialised

#### `Protected` ` Alpha`linkChannels

```ts
linkChannels: number[]
```

Inherited from SvelteSingleInstrumentWidgetBase.linkChannels

#### `Alpha` options

```ts
options: Readonly<TWidgetOptions>
```

Inherited from SvelteSingleInstrumentWidgetBase.options

#### `Protected` ` Alpha`optionsProxy

```ts
optionsProxy: OptionsStore<RiskPortfolioSensitivitiesWidgetOptions>
```

Inherited from SvelteSingleInstrumentWidgetBase.optionsProxy

#### `Protected` ` Alpha`storage

```ts
storage: WidgetStorage
```

Inherited from SvelteSingleInstrumentWidgetBase.storage

#### `Protected` ` Alpha`suppressComponentUpdate

```ts
suppressComponentUpdate: boolean = false
```

Inherited from SvelteSingleInstrumentWidgetBase.suppressComponentUpdate

#### `Protected` ` Alpha`widgetState

```ts
widgetState: WidgetState
```

Inherited from SvelteSingleInstrumentWidgetBase.widgetState

#### `Protected` ` Alpha`widgetTitle

```ts
widgetTitle: string
```

Inherited from SvelteSingleInstrumentWidgetBase.widgetTitle

### Methods

#### accepts

```ts
accepts(): string[]
```

Alpha

##### Returns string[]

Overrides SvelteSingleInstrumentWidgetBase.accepts

#### `Protected` addEventListener

```ts
addEventListener(
    element: HTMLElement,
    event: string,
    callback: (event: Event) => void,
): void
```

Alpha

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

Alpha

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

Alpha

Hook to indicate whether the widget handles incoming InterLibraryLink messages.

##### Returns boolean

Inherited from SvelteSingleInstrumentWidgetBase.canReceiveMessage

#### `Protected` clearStoredValue

```ts
clearStoredValue(key: string): void
```

Alpha

##### Parameters

- key: string

##### Returns void

Inherited from SvelteSingleInstrumentWidgetBase.clearStoredValue

#### `Protected` createOptions

```ts
createOptions(
    options: Partial<RiskPortfolioSensitivitiesWidgetOptions>,
): RiskPortfolioSensitivitiesWidgetOptions
```

Alpha

##### Parameters

- options: Partial<RiskPortfolioSensitivitiesWidgetOptions>

##### Returns RiskPortfolioSensitivitiesWidgetOptions

Overrides SvelteSingleInstrumentWidgetBase.createOptions

#### destroy

```ts
destroy(): void
```

Alpha

Destroys this widget. You must call this before removing the widget from the Page to avoid memory leaks and make
sure the corresponding data is unsubscribed from.

##### Returns void

Inherited from SvelteSingleInstrumentWidgetBase.destroy

#### `Protected` getStoredValue

```ts
getStoredValue(key: string): unknown
```

Alpha

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

Alpha

Handle the widgetTitle option

##### Returns boolean

Inherited from SvelteSingleInstrumentWidgetBase.handleWidgetTitle

#### `Protected` hasOptionChanged

```ts
hasOptionChanged(prop: string, oldValue: unknown, newValue: unknown): boolean
```

Alpha

Hook to determine if an option value has changed

##### Parameters

- prop: string
- oldValue: unknown
- newValue: unknown

##### Returns boolean

Inherited from SvelteSingleInstrumentWidgetBase.hasOptionChanged

#### isResizeable

```ts
isResizeable(): boolean
```

Alpha

##### Returns boolean

Inherited from SvelteSingleInstrumentWidgetBase.isResizeable

#### link

```ts
link(target: Target): void
```

Alpha

##### Parameters

- target: Target

##### Returns void

Inherited from SvelteSingleInstrumentWidgetBase.link

#### modify

```ts
modify(options: Partial<TWidgetOptions>): boolean
```

Alpha

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
    options: RiskPortfolioSensitivitiesWidgetOptions,
    widgetFn: SvelteWidgetFn<
        RiskPortfolioSensitivitiesWidgetOptions,
        Record<string, any>,
    >,
): void
```

Alpha

Hook to handle mounting of the template component; called before the widget is marked as initialized.
When you override `mountComponent`, you must call ` super.mountComponent()` to ensure the widget is marked
as initialized and the `widgetStateCallback` is called with ` WidgetState.Initialized`, otherwise the widget
will not be properly initialized and may not function correctly.

##### Parameters

- element: HTMLElement
- infrontUI: UI
- options: RiskPortfolioSensitivitiesWidgetOptions
- widgetFn: SvelteWidgetFn<RiskPortfolioSensitivitiesWidgetOptions, Record<string, any>>

##### Returns void

Inherited from SvelteSingleInstrumentWidgetBase.mountComponent

#### `Protected` onDestroy

```ts
onDestroy(): void
```

Alpha

##### Returns void

Inherited from SvelteSingleInstrumentWidgetBase.onDestroy

#### `Protected` onOptionsChanged

```ts
onOptionsChanged(changes: SimpleChanges): void
```

Alpha

Hook called when options have changed when calling modify()

##### Parameters

- changes: SimpleChanges

##### Returns void

Inherited from SvelteSingleInstrumentWidgetBase.onOptionsChanged

#### `Protected` partialOptions

```ts
partialOptions(options: Partial<TWidgetOptions>): Partial<TWidgetOptions>
```

Alpha

Hook to strip unwanted, or migrate old options

##### Parameters

- options: Partial<TWidgetOptions>

##### Returns Partial<TWidgetOptions>

Inherited from SvelteSingleInstrumentWidgetBase.partialOptions

#### pause

```ts
pause(): void
```

Alpha

##### Returns void

Inherited from SvelteSingleInstrumentWidgetBase.pause

#### receiveMessage

```ts
receiveMessage(msg: Message): void
```

Alpha

##### Parameters

- msg: Message

##### Returns void

Overrides SvelteSingleInstrumentWidgetBase.receiveMessage

#### removeAllStorage

```ts
removeAllStorage(): void
```

Alpha

##### Returns void

Inherited from SvelteSingleInstrumentWidgetBase.removeAllStorage

#### resizeWidget

```ts
resizeWidget(): void
```

Alpha

##### Returns void

Inherited from SvelteSingleInstrumentWidgetBase.resizeWidget

#### resume

```ts
resume(): void
```

Alpha

##### Returns void

Inherited from SvelteSingleInstrumentWidgetBase.resume

#### setInstrument

```ts
setInstrument(instrument: SymbolId): boolean
```

Alpha

##### Parameters

- instrument: [SymbolId](../SDK/SDK.InfrontSDK.SymbolId.md)

##### Returns boolean

Inherited from SvelteSingleInstrumentWidgetBase.setInstrument

#### `Protected` setWidgetState

```ts
setWidgetState(state: WidgetState): void
```

Alpha

Updates the widget's state, and call any registered callback

##### Parameters

- state: [WidgetState](./WTK.WidgetState.md)

##### Returns void

Inherited from SvelteSingleInstrumentWidgetBase.setWidgetState

#### `Protected` store

```ts
store(key: string, val: unknown): void
```

Alpha

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

#### unlink

```ts
unlink(target: Target): void
```

Alpha

##### Parameters

- target: Target

##### Returns void

Inherited from SvelteSingleInstrumentWidgetBase.unlink

#### `Protected` unregisterAllEvents

```ts
unregisterAllEvents(): void
```

Alpha

##### Returns void

Inherited from SvelteSingleInstrumentWidgetBase.unregisterAllEvents

#### `Protected` validateOptions

```ts
validateOptions(options: RiskPortfolioSensitivitiesWidgetOptions): void
```

Alpha

Hook to validate the options object

##### Parameters

- options: RiskPortfolioSensitivitiesWidgetOptions

##### Returns void

Inherited from SvelteSingleInstrumentWidgetBase.validateOptions
