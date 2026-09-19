---
title: "OrderEntryWidgetV2"
qualified_name: "WTK.OrderEntryWidgetV2"
kind: class
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "WTK"
group: "Trading Widgets"
nav_path: "WTK > Trading Widgets > OrderEntryWidgetV2"
source_url: "https://docs.infrontfinance.com/docs/classes/WTK.OrderEntryWidgetV2.html"
defines: ["OrderEntryWidgetV2"]
member_count: 16
members: ["addEventListener", "addInfrontEventObserver", "canReceiveMessage", "destroy", "getStoredValue", "handleWidgetTitle", "hasOptionChanged", "modify", "mountComponent", "onOptionsChanged", "partialOptions", "setComponentProp", "setWidgetState", "store", "triggerOrderAction", "validateOptions"]
member_groups:
  "Methods": ["addEventListener", "addInfrontEventObserver", "canReceiveMessage", "destroy", "getStoredValue", "handleWidgetTitle", "hasOptionChanged", "modify", "mountComponent", "onOptionsChanged", "partialOptions", "setComponentProp", "setWidgetState", "store", "triggerOrderAction", "validateOptions"]
related_types: ["WTK.OrderEntryWidgetV2Options", "WTK.StaticSvelteInfrontWidgetComponent"]
reference_count: 7
references: ["WTK.UI", "WTK.OrderEntryWidgetV2Options", "WTK.WidgetState", "WTK.OrderAction", "WTK.WidgetBase", "WTK.InfrontWidget", "WTK.StaticSvelteInfrontWidgetComponent"]
---

# OrderEntryWidgetV2

OrderEntryWidget class extending SvelteSingleInstrumentWidgetBase class.

`InfrontWidget = infront.orderEntryWidgetV2(target, [options]);`

The OrderEntryWidget is a highly customizable widget for managing orders. It allows users to create, modify, and manage orders with a variety of options and configurations divided into sections. Each section can represent different aspects of the order entry process, such as instrument selection, order details, and confirmation dialogs.

Options can be configured with OrderEntryWidgetOptions.

#### Example

```ts
<script type="text/javascript">
    var opts = new Infront.OrderEntryWidgetOptions( {
               id: 'DemoOrderEntryWidget',
               instrument: { feed: 15, ticker: 'AAPL' },
               sections: [
                   { id: 'instrument-selector', title: 'Instrument Section', type: 'instrument', groups: [
                       { id: 'instrument-group', components: [
                           { id: 'test', type: 'text', label: 'Text Input Test', value: 'Test Value',
                               onChange: v => console.log('Instrument changed to:', v) },
                           { id: 'test2', type: 'text', label: 'Text Readonly Test', readonly: true }
                       ]}
                   ]},
                   { id: 'custom-section1', title: 'Custom Section 1', type: 'custom', groups: [
                       { id: 'customGroup1', components: [
                           { id: 'test3', type: 'text', label: 'Text Input Test', value: 'Test Value',
                               onChange: v => console.log('Custom1 changed to:', v) },
                           { id: 'test4', type: 'text', label: 'Text Readonly Test', value: 'Readonly Value', readonly: true }
                       ]}
                   ]},
                   { id: 'custom-section2', title: 'Custom Section 2', type: 'custom', groups: [
                       { id: 'customGroup2', components: [
                           { id: 'test5', type: 'text', label: 'Text Input Test', value: 'Test Value',
                               onChange: v => console.log('Custom2 changed to:', v) },
                           { id: 'test6', type: 'text', label: 'Text Readonly Test', readonly: true }
                       ]}
                   ]}
               ],
               events(name, data) {
                   const out = document.getElementById('DisplayEvents');
                   out.textContent += `${name}: ${JSON.stringify(data)}\n`;
               },
           });

    widget = infront.orderEntryWidgetV2("OrderEntryWidget", opts);
</script>
...
<div id="OrderEntryWidget"></div>
```

#### See

OrderEntryWidgetOptions | WidgetBase | SvelteSingleInstrumentWidgetBase | [InfrontWidget](./WTK.InfrontWidget.md)

#### Hierarchy

- SvelteSingleInstrumentWidgetBase<OrderEntryWidgetV2Options>

  - OrderEntryWidgetV2

#### Implements

- [StaticSvelteInfrontWidgetComponent](./WTK.StaticSvelteInfrontWidgetComponent.md)<typeof OrderEntryWidgetV2>

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

Implementation of StaticSvelteInfrontWidgetComponent.hasOptionChanged

Inherited from SvelteSingleInstrumentWidgetBase.hasOptionChanged

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
    options: OrderEntryWidgetV2Options,
    widgetFn: SvelteWidgetFn<OrderEntryWidgetV2Options, Record<string, any>>,
): void
```

Hook to handle mounting of the template component; called before the widget is marked as initialized.
When you override `mountComponent`, you must call ` super.mountComponent()` to ensure the widget is marked
as initialized and the `widgetStateCallback` is called with ` WidgetState.Initialized`, otherwise the widget
will not be properly initialized and may not function correctly.

##### Parameters

- element: HTMLElement
- infrontUI: UI
- options: OrderEntryWidgetV2Options
- widgetFn: SvelteWidgetFn<OrderEntryWidgetV2Options, Record<string, any>>

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

Inherited from SvelteSingleInstrumentWidgetBase.onOptionsChanged

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

#### setComponentProp

```ts
setComponentProp(componentId: string, key: string, value: any): void
```

Programmatically set a property on a component.

##### Parameters

- componentId: string

  The id of the component.
- key: string

  The property key to set (e.g. 'value', 'enabled', 'visible', 'readonly', 'label', 'className').
- value: any

  The value to set.

##### Returns void

Implementation of StaticSvelteInfrontWidgetComponent.setComponentProp

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

#### triggerOrderAction

```ts
triggerOrderAction(action: OrderAction, id?: string): void
```

Programmatically trigger an order action as if an orderAction button was clicked.

##### Parameters

- action: [OrderAction](./WTK.OrderAction.md)

  The action to trigger.
- id: string = 'userTriggeredOrderAction'

  Optional id of the action event trigger, will be published as info in the events callback.

##### Returns void

Implementation of StaticSvelteInfrontWidgetComponent.triggerOrderAction

#### `Protected` validateOptions

```ts
validateOptions(options: OrderEntryWidgetV2Options): void
```

Hook to validate the options object

##### Parameters

- options: OrderEntryWidgetV2Options

##### Returns void

Implementation of StaticSvelteInfrontWidgetComponent.validateOptions

Inherited from SvelteSingleInstrumentWidgetBase.validateOptions
