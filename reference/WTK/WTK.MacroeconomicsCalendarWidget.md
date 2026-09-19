---
title: "MacroeconomicsCalendarWidget"
qualified_name: "WTK.MacroeconomicsCalendarWidget"
kind: class
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "WTK"
group: "Widgets"
nav_path: "WTK > Widgets > MacroeconomicsCalendarWidget"
source_url: "https://docs.infrontfinance.com/docs/classes/WTK.MacroeconomicsCalendarWidget.html"
defines: ["MacroeconomicsCalendarWidget"]
member_count: 15
members: ["addEventListener", "addInfrontEventObserver", "canReceiveMessage", "destroy", "getSourceFeed", "getStoredValue", "handleWidgetTitle", "hasOptionChanged", "modify", "mountComponent", "onOptionsChanged", "partialOptions", "setWidgetState", "store", "validateOptions"]
member_groups:
  "Methods": ["addEventListener", "addInfrontEventObserver", "canReceiveMessage", "destroy", "getSourceFeed", "getStoredValue", "handleWidgetTitle", "hasOptionChanged", "modify", "mountComponent", "onOptionsChanged", "partialOptions", "setWidgetState", "store", "validateOptions"]
related_types: ["WTK.MacroeconomicsCalendarWidgetOptions", "WTK.StaticSvelteInfrontWidgetComponent"]
reference_count: 5
references: ["WTK.UI", "WTK.MacroeconomicsCalendarWidgetOptions", "WTK.WidgetState", "WTK.CountryMultiSelectWidget", "WTK.StaticSvelteInfrontWidgetComponent"]
---

# MacroeconomicsCalendarWidget

MacroeconomicsCalendarWidget — a calendar of macroeconomic events sourced
from the Trading Economics Calendar feed (feed `1049`).

`InfrontWidget = infront.macroeconomicsCalendarWidget(target, [options]);`

The widget shows events in an AG-Grid table with the standard Trading
Economics column order (Date, Time, Flag, Symbol, Event, Actual, Expected,
Previous, Importance, Revised, Reference, Category, Alert, Source) and
offers in-widget filtering by date range (with the standard presets and a
date picker), importance, and category.

Country filtering is delegated to a sibling CountryMultiSelectWidget
using `grouping: 'POPULAR_NORDICS'` — wire it up via
[MacroeconomicsCalendarWidget.modify](#modify)`({ countryCodes })` or via
inter-library `LinkType.CountryList`.

#### Example

```ts
<script type="text/javascript">
    const widget = infront.macroeconomicsCalendarWidget(
        '#macroCalendar',
        new Infront.MacroeconomicsCalendarWidgetOptions({
            dateRangePreset: 'UPCOMING_MONTH',
            importances: ['High', 'Medium'],
        }),
    );

    infront.countryMultiSelectWidget('#countries', {
        grouping: 'POPULAR_NORDICS',
        showFlagIcon: true,
        showArrow: true,
        onCountriesSelected: (codes) => widget.modify({ countryCodes: codes }),
    });
</script>

<div id="macroCalendar"></div>
<div id="countries"></div>
```

#### See

MacroeconomicsCalendarWidgetOptions

#### Hierarchy

- SvelteWidgetBase<MacroeconomicsCalendarWidgetOptions>

  - MacroeconomicsCalendarWidget

#### Implements

- [StaticSvelteInfrontWidgetComponent](./WTK.StaticSvelteInfrontWidgetComponent.md)<typeof MacroeconomicsCalendarWidget>

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

Inherited from SvelteWidgetBase.addEventListener

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

Inherited from SvelteWidgetBase.addInfrontEventObserver

#### `Protected` canReceiveMessage

```ts
canReceiveMessage(): boolean
```

Hook to indicate whether the widget handles incoming InterLibraryLink messages.

##### Returns boolean

Implementation of StaticSvelteInfrontWidgetComponent.canReceiveMessage

Inherited from SvelteWidgetBase.canReceiveMessage

#### destroy

```ts
destroy(): void
```

Destroys this widget. You must call this before removing the widget from the Page to avoid memory leaks and make
sure the corresponding data is unsubscribed from.

##### Returns void

Implementation of StaticSvelteInfrontWidgetComponent.destroy

Inherited from SvelteWidgetBase.destroy

#### getSourceFeed

```ts
getSourceFeed(): number
```

Returns the calendar feed number this widget is currently querying.

##### Returns number

Implementation of StaticSvelteInfrontWidgetComponent.getSourceFeed

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

Inherited from SvelteWidgetBase.getStoredValue

#### `Protected` handleWidgetTitle

```ts
handleWidgetTitle(): boolean
```

Handle the widgetTitle option

##### Returns boolean

Implementation of StaticSvelteInfrontWidgetComponent.handleWidgetTitle

Inherited from SvelteWidgetBase.handleWidgetTitle

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

Inherited from SvelteWidgetBase.hasOptionChanged

#### modify

```ts
modify(options: Partial<TWidgetOptions>): boolean
```

Updates a widget's options

##### Parameters

- options: Partial<TWidgetOptions>

##### Returns boolean

Implementation of StaticSvelteInfrontWidgetComponent.modify

Inherited from SvelteWidgetBase.modify

#### `Protected` mountComponent

```ts
mountComponent(
    element: HTMLElement,
    infrontUI: UI,
    options: MacroeconomicsCalendarWidgetOptions,
    widgetFn: SvelteWidgetFn<
        MacroeconomicsCalendarWidgetOptions,
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
- options: MacroeconomicsCalendarWidgetOptions
- widgetFn: SvelteWidgetFn<MacroeconomicsCalendarWidgetOptions, Record<string, any>>

##### Returns void

Implementation of StaticSvelteInfrontWidgetComponent.mountComponent

Inherited from SvelteWidgetBase.mountComponent

#### `Protected` onOptionsChanged

```ts
onOptionsChanged(changes: SimpleChanges): void
```

Hook called when options have changed when calling modify()

##### Parameters

- changes: SimpleChanges

##### Returns void

Implementation of StaticSvelteInfrontWidgetComponent.onOptionsChanged

Inherited from SvelteWidgetBase.onOptionsChanged

#### `Protected` partialOptions

```ts
partialOptions(options: Partial<TWidgetOptions>): Partial<TWidgetOptions>
```

Hook to strip unwanted, or migrate old options

##### Parameters

- options: Partial<TWidgetOptions>

##### Returns Partial<TWidgetOptions>

Implementation of StaticSvelteInfrontWidgetComponent.partialOptions

Inherited from SvelteWidgetBase.partialOptions

#### `Protected` setWidgetState

```ts
setWidgetState(state: WidgetState): void
```

Updates the widget's state, and call any registered callback

##### Parameters

- state: [WidgetState](./WTK.WidgetState.md)

##### Returns void

Implementation of StaticSvelteInfrontWidgetComponent.setWidgetState

Inherited from SvelteWidgetBase.setWidgetState

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

Inherited from SvelteWidgetBase.store

#### `Protected` validateOptions

```ts
validateOptions(options: MacroeconomicsCalendarWidgetOptions): void
```

Hook to validate the options object

##### Parameters

- options: MacroeconomicsCalendarWidgetOptions

##### Returns void

Implementation of StaticSvelteInfrontWidgetComponent.validateOptions

Inherited from SvelteWidgetBase.validateOptions
