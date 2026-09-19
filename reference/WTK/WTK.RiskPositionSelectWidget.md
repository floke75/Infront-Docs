---
title: "RiskPositionSelectWidgetBeta"
qualified_name: "WTK.RiskPositionSelectWidget"
kind: class
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "WTK"
group: "Risk Widgets"
nav_path: "WTK > Risk Widgets > RiskPositionSelectWidget"
source_url: "https://docs.infrontfinance.com/docs/classes/WTK.RiskPositionSelectWidget.html"
defines: ["RiskPositionSelectWidget"]
member_count: 44
members: ["constructor", "componentRef", "element", "infront", "infrontUI", "isInitialised", "linkChannels", "options", "optionsProxy", "storage", "suppressComponentUpdate", "widgetState", "widgetTitle", "accepts", "addEventListener", "addInfrontEventObserver", "canReceiveMessage", "clearStoredValue", "createOptions", "destroy", "getSelection", "getStoredValue", "handleWidgetTitle", "hasOptionChanged", "isDropDownOpen", "isResizeable", "link", "modify", "mountComponent", "onDestroy", "onOptionsChanged", "partialOptions", "pause", "receiveMessage", "removeAllStorage", "resizeWidget", "resume", "setInstrument", "setWidgetState", "store", "toggleDropDown", "unlink", "unregisterAllEvents", "validateOptions"]
member_groups:
  "Constructors": ["constructor"]
  "Properties": ["componentRef", "element", "infront", "infrontUI", "isInitialised", "linkChannels", "options", "optionsProxy", "storage", "suppressComponentUpdate", "widgetState", "widgetTitle"]
  "Methods": ["accepts", "addEventListener", "addInfrontEventObserver", "canReceiveMessage", "clearStoredValue", "createOptions", "destroy", "getSelection", "getStoredValue", "handleWidgetTitle", "hasOptionChanged", "isDropDownOpen", "isResizeable", "link", "modify", "mountComponent", "onDestroy", "onOptionsChanged", "partialOptions", "pause", "receiveMessage", "removeAllStorage", "resizeWidget", "resume", "setInstrument", "setWidgetState", "store", "toggleDropDown", "unlink", "unregisterAllEvents", "validateOptions"]
related_types: ["WTK.RiskPositionSelectWidgetOptions", "WTK.StaticSvelteInfrontWidgetComponent"]
reference_count: 6
references: ["WTK.UI", "WTK.RiskPositionSelectWidgetOptions", "WTK.WidgetState", "SDK.InfrontSDK.PortfolioRisk.RiskListPosition", "SDK.InfrontSDK.SymbolId", "WTK.StaticSvelteInfrontWidgetComponent"]
---

# RiskPositionSelectWidgetBeta

RiskPositionSelectWidget class extending SvelteWidgetBase class.

A dropdown to select a position for selected portfolio. The list of positions is loaded from the IQ risk backend.

Options can be configured with RiskPositionSelectWidgetOptions.

#### Example

```ts
<script type="text/javascript">
    widget = infront.widget(RiskPositionSelectWidget, "#targetId", {
        // options
    });
</script>
...
<div id="targetId"></div>
```

or

```ts
<script type="text/javascript">
    widget = infront.riskPositionSelectWidget("#targetId", {
        // options
    });

</script>
...
<div id="targetId"></div>
```

#### See

RiskPositionSelectWidgetOptions | SvelteWidgetBase

#### Hierarchy

- SvelteSingleInstrumentWidgetBase<RiskPositionSelectWidgetOptions>

  - RiskPositionSelectWidget

#### Implements

- [StaticSvelteInfrontWidgetComponent](./WTK.StaticSvelteInfrontWidgetComponent.md)<typeof RiskPositionSelectWidget>

### Constructors

#### constructor

```ts
new RiskPositionSelectWidget(
    parentElement: HTMLElement,
    infrontUI: UI,
    options: Partial<RiskPositionSelectWidgetOptions>,
): RiskPositionSelectWidget
```

Beta

##### Parameters

- parentElement: HTMLElement
- infrontUI: UI
- options: Partial<RiskPositionSelectWidgetOptions>

##### Returns RiskPositionSelectWidget

Overrides SvelteSingleInstrumentWidgetBase<RiskPositionSelectWidgetOptions>.constructor

### Properties

#### `Protected` ` Beta`componentRef

```ts
componentRef: UWidgetInstance
```

Implementation of StaticSvelteInfrontWidgetComponent.componentRef

Inherited from SvelteSingleInstrumentWidgetBase.componentRef

#### `Readonly` ` Beta`element

```ts
element: HTMLElement
```

Implementation of StaticSvelteInfrontWidgetComponent.element

Inherited from SvelteSingleInstrumentWidgetBase.element

#### `Protected` ` Beta`infront

```ts
infront: Model
```

Implementation of StaticSvelteInfrontWidgetComponent.infront

Inherited from SvelteSingleInstrumentWidgetBase.infront

#### `Protected` ` Beta`infrontUI

```ts
infrontUI: UI
```

Implementation of StaticSvelteInfrontWidgetComponent.infrontUI

Inherited from SvelteSingleInstrumentWidgetBase.infrontUI

#### `Protected` ` Beta`isInitialised

```ts
isInitialised: boolean = false
```

Implementation of StaticSvelteInfrontWidgetComponent.isInitialised

Inherited from SvelteSingleInstrumentWidgetBase.isInitialised

#### `Protected` ` Beta`linkChannels

```ts
linkChannels: number[]
```

Implementation of StaticSvelteInfrontWidgetComponent.linkChannels

Inherited from SvelteSingleInstrumentWidgetBase.linkChannels

#### `Beta` options

```ts
options: Readonly<TWidgetOptions>
```

Implementation of StaticSvelteInfrontWidgetComponent.options

Inherited from SvelteSingleInstrumentWidgetBase.options

#### `Protected` ` Beta`optionsProxy

```ts
optionsProxy: OptionsStore<RiskPositionSelectWidgetOptions>
```

Implementation of StaticSvelteInfrontWidgetComponent.optionsProxy

Inherited from SvelteSingleInstrumentWidgetBase.optionsProxy

#### `Protected` ` Beta`storage

```ts
storage: WidgetStorage
```

Implementation of StaticSvelteInfrontWidgetComponent.storage

Inherited from SvelteSingleInstrumentWidgetBase.storage

#### `Protected` ` Beta`suppressComponentUpdate

```ts
suppressComponentUpdate: boolean = false
```

Implementation of StaticSvelteInfrontWidgetComponent.suppressComponentUpdate

Inherited from SvelteSingleInstrumentWidgetBase.suppressComponentUpdate

#### `Protected` ` Beta`widgetState

```ts
widgetState: WidgetState
```

Implementation of StaticSvelteInfrontWidgetComponent.widgetState

Inherited from SvelteSingleInstrumentWidgetBase.widgetState

#### `Protected` ` Beta`widgetTitle

```ts
widgetTitle: string
```

Implementation of StaticSvelteInfrontWidgetComponent.widgetTitle

Inherited from SvelteSingleInstrumentWidgetBase.widgetTitle

### Methods

#### accepts

```ts
accepts(): string[]
```

Beta

##### Returns string[]

Implementation of StaticSvelteInfrontWidgetComponent.accepts

Overrides SvelteSingleInstrumentWidgetBase.accepts

#### `Protected` addEventListener

```ts
addEventListener(
    element: HTMLElement,
    event: string,
    callback: (event: Event) => void,
): void
```

Beta

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

Beta

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

Beta

Hook to indicate whether the widget handles incoming InterLibraryLink messages.

##### Returns boolean

Implementation of StaticSvelteInfrontWidgetComponent.canReceiveMessage

Inherited from SvelteSingleInstrumentWidgetBase.canReceiveMessage

#### `Protected` clearStoredValue

```ts
clearStoredValue(key: string): void
```

Beta

##### Parameters

- key: string

##### Returns void

Implementation of StaticSvelteInfrontWidgetComponent.clearStoredValue

Inherited from SvelteSingleInstrumentWidgetBase.clearStoredValue

#### `Protected` createOptions

```ts
createOptions(
    options: Partial<RiskPositionSelectWidgetOptions>,
): RiskPositionSelectWidgetOptions
```

Beta

##### Parameters

- options: Partial<RiskPositionSelectWidgetOptions>

##### Returns RiskPositionSelectWidgetOptions

Implementation of StaticSvelteInfrontWidgetComponent.createOptions

Overrides SvelteSingleInstrumentWidgetBase.createOptions

#### destroy

```ts
destroy(): void
```

Beta

Destroys this widget. You must call this before removing the widget from the Page to avoid memory leaks and make
sure the corresponding data is unsubscribed from.

##### Returns void

Implementation of StaticSvelteInfrontWidgetComponent.destroy

Inherited from SvelteSingleInstrumentWidgetBase.destroy

#### getSelection

```ts
getSelection(): RiskListPosition
```

Beta

##### Returns [RiskListPosition](../SDK/SDK.InfrontSDK.PortfolioRisk.RiskListPosition.md)

Implementation of StaticSvelteInfrontWidgetComponent.getSelection

#### `Protected` getStoredValue

```ts
getStoredValue(key: string): unknown
```

Beta

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

Beta

Handle the widgetTitle option

##### Returns boolean

Implementation of StaticSvelteInfrontWidgetComponent.handleWidgetTitle

Inherited from SvelteSingleInstrumentWidgetBase.handleWidgetTitle

#### `Protected` hasOptionChanged

```ts
hasOptionChanged(prop: string, oldValue: unknown, newValue: unknown): boolean
```

Beta

Hook to determine if an option value has changed

##### Parameters

- prop: string
- oldValue: unknown
- newValue: unknown

##### Returns boolean

Implementation of StaticSvelteInfrontWidgetComponent.hasOptionChanged

Inherited from SvelteSingleInstrumentWidgetBase.hasOptionChanged

#### isDropDownOpen

```ts
isDropDownOpen(): boolean
```

Beta

##### Returns boolean

Implementation of StaticSvelteInfrontWidgetComponent.isDropDownOpen

#### isResizeable

```ts
isResizeable(): boolean
```

Beta

##### Returns boolean

Implementation of StaticSvelteInfrontWidgetComponent.isResizeable

Inherited from SvelteSingleInstrumentWidgetBase.isResizeable

#### link

```ts
link(target: Target): void
```

Beta

##### Parameters

- target: Target

##### Returns void

Implementation of StaticSvelteInfrontWidgetComponent.link

Inherited from SvelteSingleInstrumentWidgetBase.link

#### modify

```ts
modify(options: Partial<TWidgetOptions>): boolean
```

Beta

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
    options: RiskPositionSelectWidgetOptions,
    widgetFn: SvelteWidgetFn<
        RiskPositionSelectWidgetOptions,
        Record<string, any>,
    >,
): void
```

Beta

Hook to handle mounting of the template component; called before the widget is marked as initialized.
When you override `mountComponent`, you must call ` super.mountComponent()` to ensure the widget is marked
as initialized and the `widgetStateCallback` is called with ` WidgetState.Initialized`, otherwise the widget
will not be properly initialized and may not function correctly.

##### Parameters

- element: HTMLElement
- infrontUI: UI
- options: RiskPositionSelectWidgetOptions
- widgetFn: SvelteWidgetFn<RiskPositionSelectWidgetOptions, Record<string, any>>

##### Returns void

Implementation of StaticSvelteInfrontWidgetComponent.mountComponent

Inherited from SvelteSingleInstrumentWidgetBase.mountComponent

#### `Protected` onDestroy

```ts
onDestroy(): void
```

Beta

##### Returns void

Implementation of StaticSvelteInfrontWidgetComponent.onDestroy

Inherited from SvelteSingleInstrumentWidgetBase.onDestroy

#### `Protected` onOptionsChanged

```ts
onOptionsChanged(changes: SimpleChanges): void
```

Beta

Hook called when options have changed when calling modify()

##### Parameters

- changes: SimpleChanges

##### Returns void

Implementation of StaticSvelteInfrontWidgetComponent.onOptionsChanged

Inherited from SvelteSingleInstrumentWidgetBase.onOptionsChanged

#### `Protected` partialOptions

```ts
partialOptions(options: Partial<TWidgetOptions>): Partial<TWidgetOptions>
```

Beta

Hook to strip unwanted, or migrate old options

##### Parameters

- options: Partial<TWidgetOptions>

##### Returns Partial<TWidgetOptions>

Implementation of StaticSvelteInfrontWidgetComponent.partialOptions

Inherited from SvelteSingleInstrumentWidgetBase.partialOptions

#### pause

```ts
pause(): void
```

Beta

##### Returns void

Implementation of StaticSvelteInfrontWidgetComponent.pause

Inherited from SvelteSingleInstrumentWidgetBase.pause

#### receiveMessage

```ts
receiveMessage(msg: Message): void
```

Beta

##### Parameters

- msg: Message

##### Returns void

Implementation of StaticSvelteInfrontWidgetComponent.receiveMessage

Overrides SvelteSingleInstrumentWidgetBase.receiveMessage

#### removeAllStorage

```ts
removeAllStorage(): void
```

Beta

##### Returns void

Implementation of StaticSvelteInfrontWidgetComponent.removeAllStorage

Inherited from SvelteSingleInstrumentWidgetBase.removeAllStorage

#### resizeWidget

```ts
resizeWidget(): void
```

Beta

##### Returns void

Implementation of StaticSvelteInfrontWidgetComponent.resizeWidget

Inherited from SvelteSingleInstrumentWidgetBase.resizeWidget

#### resume

```ts
resume(): void
```

Beta

##### Returns void

Implementation of StaticSvelteInfrontWidgetComponent.resume

Inherited from SvelteSingleInstrumentWidgetBase.resume

#### setInstrument

```ts
setInstrument(instrument: SymbolId): boolean
```

Beta

##### Parameters

- instrument: [SymbolId](../SDK/SDK.InfrontSDK.SymbolId.md)

##### Returns boolean

Implementation of StaticSvelteInfrontWidgetComponent.setInstrument

Inherited from SvelteSingleInstrumentWidgetBase.setInstrument

#### `Protected` setWidgetState

```ts
setWidgetState(state: WidgetState): void
```

Beta

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

Beta

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

#### toggleDropDown

```ts
toggleDropDown(state?: boolean): void
```

Beta

##### Parameters

- `Optional` state: boolean

##### Returns void

Implementation of StaticSvelteInfrontWidgetComponent.toggleDropDown

#### unlink

```ts
unlink(target: Target): void
```

Beta

##### Parameters

- target: Target

##### Returns void

Implementation of StaticSvelteInfrontWidgetComponent.unlink

Inherited from SvelteSingleInstrumentWidgetBase.unlink

#### `Protected` unregisterAllEvents

```ts
unregisterAllEvents(): void
```

Beta

##### Returns void

Implementation of StaticSvelteInfrontWidgetComponent.unregisterAllEvents

Inherited from SvelteSingleInstrumentWidgetBase.unregisterAllEvents

#### `Protected` validateOptions

```ts
validateOptions(options: RiskPositionSelectWidgetOptions): void
```

Beta

Hook to validate the options object

##### Parameters

- options: RiskPositionSelectWidgetOptions

##### Returns void

Implementation of StaticSvelteInfrontWidgetComponent.validateOptions

Inherited from SvelteSingleInstrumentWidgetBase.validateOptions
