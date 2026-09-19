---
title: "PositionWidgetOptions"
qualified_name: "WTK.PositionWidgetOptions"
kind: class
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "WTK"
group: "Widget Options"
nav_path: "WTK > Widget Options > PositionWidgetOptions"
source_url: "https://docs.infrontfinance.com/docs/classes/WTK.PositionWidgetOptions.html"
defines: ["PositionWidgetOptions"]
member_count: 40
members: ["hasContentCallback", "id", "linkChannels", "navButton", "navButtonClicked", "noContentPlaceholder?", "onChanges?", "persistState", "popupContainer?", "resetPopupPosition?", "showSearchWidget", "storageType", "streaming", "useOriginal", "usePerfectScrollbar", "widgetStateCallback", "widgetTitle", "instrument", "onClick", "valueName", "decimals", "defaultContent", "allowZero", "blinkDuration", "blinkType", "className?", "column", "compute", "computeFields", "content", "currencyClassName?", "dataItem", "dataType", "enableChangeStatusColors", "hover?", "name", "rootElement", "showCurrency", "translate?", "type?"]
member_groups:
  "Widget Options": ["hasContentCallback", "id", "linkChannels", "navButton", "navButtonClicked", "noContentPlaceholder?", "onChanges?", "persistState", "popupContainer?", "resetPopupPosition?", "showSearchWidget", "storageType", "streaming", "useOriginal", "usePerfectScrollbar", "widgetStateCallback", "widgetTitle"]
  "PositionWidget": ["instrument", "onClick", "valueName"]
  "SingleInstrumentWidget": ["decimals", "defaultContent"]
  "ValueWidget": ["allowZero", "blinkDuration", "blinkType", "className?", "column", "compute", "computeFields", "content", "currencyClassName?", "dataItem", "dataType", "enableChangeStatusColors", "hover?", "name", "rootElement", "showCurrency", "translate?", "type?"]
related_types: ["WTK.ValueWidgetOptions"]
reference_count: 10
references: ["WTK.WidgetNavButtonType", "WTK.WidgetPopupParent", "WTK.WidgetState", "WTK.BlinkDuration", "WTK.BlinkType", "WTK.DataType", "WTK.ValueWidgetOptions", "WTK.PositionWidget", "WTK.WidgetOptions", "WTK.InfrontWidget"]
---

# PositionWidgetOptions

PositionWidgetOptions class extending ValueWidgetOptions class.

Set options for the PositionWidget.

#### See

PositionWidget | WidgetOptions | ValueWidgetOptions

#### Hierarchy ([View Summary](../type-hierarchy.md#WTK.PositionWidgetOptions))

- ValueWidgetOptions

  - PositionWidgetOptions

### Widget Options

#### hasContentCallback

```ts
hasContentCallback: (hasContent: boolean, item?: any) => void = ...
```

Callback that indicates whether the widget has any content.

This can let you easily remove widgets that are empty

##### Type Declaration

- (hasContent: boolean, item?: any): void

  ##### Parameters

  - hasContent: boolean
  - `Optional` item: any

  ##### Returns void

##### Default Value

`undefined`

Inherited from ValueWidgetOptions.hasContentCallback

#### id

```ts
id: string = null
```

ID for this widget.

Must be unique for this site, as it is used for session- and persistent state storage.

##### Default Value

`null`

Inherited from ValueWidgetOptions.id

#### linkChannels

```ts
linkChannels: number | number[]
```

If set, auto linking will be enabled on this widget for the specified channels.

##### Default Value

`undefined`

Inherited from ValueWidgetOptions.linkChannels

#### navButton

```ts
navButton: WidgetNavButtonType = WidgetNavButtonType.NONE
```

Type of navigation-button. Available on most widgets.

Available values:

- `WidgetNavButtonType.NONE`
- `WidgetNavButtonType.EXPAND`
- `WidgetNavButtonType.NAVIGATE`

##### See

[WidgetNavButtonType](./WTK.WidgetNavButtonType.md)

##### Default Value

`Infront.WidgetNavButtonType.NONE`

Inherited from ValueWidgetOptions.navButton

#### navButtonClicked

```ts
navButtonClicked: () => void = ...
```

Callback that indicates whether the navigation button has been clicked.

##### Type Declaration

- (): void

  ##### Returns void

##### Default Value

`undefined`

Inherited from ValueWidgetOptions.navButtonClicked

#### `Optional` noContentPlaceholder

```ts
noContentPlaceholder?: string | HTMLElement
```

The placeholder content to display when there's no content.

##### Default Value

`undefined`

Inherited from ValueWidgetOptions.noContentPlaceholder

#### `Optional` onChanges

```ts
onChanges?: (changes: SimpleChanges) => void
```

Callback invoked whenever one or more options change via [InfrontWidget.modify](./WTK.InfrontWidget.md#modify).

Each key in the SimpleChanges map is the name of a changed property,
with `previousValue` and ` currentValue` available on the entry.

##### Default Value

`undefined`

Inherited from ValueWidgetOptions.onChanges

#### persistState

```ts
persistState: boolean = true
```

Used if implementing persisting storage, set to `false` to prevent storage for this widget.

If `true`, persistence of data through WidgetStorage is enabled.

##### Default Value

`true`

Inherited from ValueWidgetOptions.persistState

#### `Optional` popupContainer

```ts
popupContainer?: string | HTMLElement | WidgetPopupParent
```

Option to set parent element of every popup opened in the widget.

This can take enum value:

- `Infront.WidgetPopupParent.FIRST_PARENT`
- `Infront.WidgetPopupParent.BODY`

If set to `Infront.WidgetPopupParent.FIRST_PARENT` the popup will be added in the DOM right
after the element which trigger popup to show.

When it is set to `Infront.WidgetPopupParent.BODY` the popup will be appended to the body.

When you specify the HTMLElement the popup would be added inside it.
When you specify a string, popup will be appended to the element with specified string as an id.

##### See

[WidgetPopupParent](./WTK.WidgetPopupParent.md)

##### Default Value

`true`

Inherited from ValueWidgetOptions.popupContainer

#### `Optional` resetPopupPosition

```ts
resetPopupPosition?: boolean
```

When set to `true` there will be no positioning style added to the popup.

##### Default Value

`undefined`

Inherited from ValueWidgetOptions.resetPopupPosition

#### showSearchWidget

```ts
showSearchWidget: boolean = false
```

If `true` it will display a search bar on the top of instrument based widgets.

##### Default Value

`false`

Inherited from ValueWidgetOptions.showSearchWidget

#### storageType

```ts
storageType: any = null
```

Used if implementing persisting storage, can be used to set special storage objects like global storage.

Optional parameter that helps implementors route storage-calls to different targets.

##### Default Value

`null`

Inherited from ValueWidgetOptions.storageType

#### streaming

```ts
streaming: boolean = true
```

Enable / disable streaming of data.

##### Default Value

`true`

Inherited from ValueWidgetOptions.streaming

#### useOriginal

```ts
useOriginal: boolean = false
```

If `true` options object will not be copied before using.

##### Default Value

`false`

Inherited from ValueWidgetOptions.useOriginal

#### usePerfectScrollbar

```ts
usePerfectScrollbar: boolean
```

Enable / disable usage of "Perfect Scrollbar".

##### Default Value

`undefined`

Inherited from ValueWidgetOptions.usePerfectScrollbar

#### widgetStateCallback

```ts
widgetStateCallback: (state: WidgetState) => void = ...
```

Callback is called when widget state changes.

Can be one of:

- `Infront.WidgetState.Constructing`
- `Infront.WidgetState.Constructed`
- `Infront.WidgetState.Initializing`
- `Infront.WidgetState.Initialized`
- `Infront.WidgetState.UiBuilt`
- `Infront.WidgetState.Subscribed`
- `Infront.WidgetState.Destroying`

##### Type Declaration

- (state: WidgetState): void

  ##### Parameters

  - state: [WidgetState](./WTK.WidgetState.md)

  ##### Returns void

##### Default Value

`undefined`

Inherited from ValueWidgetOptions.widgetStateCallback

#### widgetTitle

```ts
widgetTitle: string
```

Title shown on the top of the widget. Will work on most widgets, but not all.

It can either be a key for the language-dictionary, or a text you want directly inserted as a header.

Set to `null` to hide title element

##### Default Value

`undefined`

Inherited from ValueWidgetOptions.widgetTitle

### PositionWidget

#### instrument

```ts
instrument: Instrument
```

Infront.Instrument.

##### See

Infront.Instrument

##### Default Value

`undefined`

Overrides ValueWidgetOptions.instrument

#### onClick

```ts
onClick: () => void
```

Callback on click.

##### Type Declaration

- (): void

  ##### Returns void

##### Default Value

`undefined`

Overrides ValueWidgetOptions.onClick

#### valueName

```ts
valueName: string = 'VOLUME'
```

Sets value to show in widget.

##### Default Value

`'VOLUME'`

### SingleInstrumentWidget

#### decimals

```ts
decimals: number = null
```

Displays decimal instead of integer.

##### Default Value

`null`

Inherited from ValueWidgetOptions.decimals

#### defaultContent

```ts
defaultContent: any
```

Default content.

##### Default Value

`undefined`

Inherited from ValueWidgetOptions.defaultContent

### ValueWidget

#### allowZero

```ts
allowZero: boolean
```

Allow zero.

##### Default Value

`undefined`

Inherited from ValueWidgetOptions.allowZero

#### blinkDuration

```ts
blinkDuration: BlinkDuration
```

Blink duration.

##### Default Value

`undefined`

Inherited from ValueWidgetOptions.blinkDuration

#### blinkType

```ts
blinkType: BlinkType
```

Blink type.

##### Default Value

`undefined`

Inherited from ValueWidgetOptions.blinkType

#### `Optional` className

```ts
className?: string
```

A Class-name to add to both header and table-cells of this column.

##### Default Value

`undefined`

Inherited from ValueWidgetOptions.className

#### column

```ts
column: string | object
```

Field of this widget.

##### Default Value

`undefined`

Inherited from ValueWidgetOptions.column

#### compute

```ts
compute: (lineId: any, args: any[]) => any
```

The function doing your computation.

##### Type Declaration

- (lineId: any, args: any[]): any

  ##### Parameters

  - lineId: any
  - args: any[]

  ##### Returns any

##### Remarks

Required if type="computed", ignored else

##### Default Value

`undefined`

Inherited from ValueWidgetOptions.compute

#### computeFields

```ts
computeFields: string[]
```

The fields you want as arguments to your computation-function.

##### Remarks

Required if type="computed", ignored else

##### Default Value

`undefined`

Inherited from ValueWidgetOptions.computeFields

#### content

```ts
content: any
```

Content for custom columns.

##### Remarks

- Can be a `string` or a function: `(instrument: Instrument) => string`
- Required if type is "custom", ignored if not

##### Default Value

`undefined`

Inherited from ValueWidgetOptions.content

#### `Optional` currencyClassName

```ts
currencyClassName?: string
```

A Class-name to add to the currency-part of this widget.

##### Default Value

`undefined`

Inherited from ValueWidgetOptions.currencyClassName

#### dataItem

```ts
dataItem: BaseDataItem
```

Data item.

##### Default Value

`undefined`

Inherited from ValueWidgetOptions.dataItem

#### dataType

```ts
dataType: DataType
```

Data type.

##### Default Value

`undefined`

Inherited from ValueWidgetOptions.dataType

#### enableChangeStatusColors

```ts
enableChangeStatusColors: boolean
```

Enable change status colors.

##### Default Value

`undefined`

Inherited from ValueWidgetOptions.enableChangeStatusColors

#### `Optional` hover

```ts
hover?: string
```

Reference to a column name with the content you want to show.

##### Default Value

`undefined`

Inherited from ValueWidgetOptions.hover

#### name

```ts
name: string
```

The official field-name in All caps, or any (non-official) identifier for custom type.

##### Default Value

`undefined`

Inherited from ValueWidgetOptions.name

#### rootElement

```ts
rootElement: string = 'div'
```

Root element.

##### Default Value

`'div'`

Inherited from ValueWidgetOptions.rootElement

#### showCurrency

```ts
showCurrency: boolean
```

Show currency.

##### Default Value

`undefined`

Inherited from ValueWidgetOptions.showCurrency

#### `Optional` translate

```ts
translate?: (lineId: any, value: any) => string
```

A function to translate the value into any valid HTML that is inserted into the table-cell.

##### Type Declaration

- (lineId: any, value: any): string

  ##### Parameters

  - lineId: any
  - value: any

  ##### Returns string

##### Default Value

`undefined`

Inherited from ValueWidgetOptions.translate

#### `Optional` type

```ts
type?: string
```

Type indicating what form this column should take.

One of the string-constants above. FIXME: what constants?

##### Default Value

`undefined` (normal)

Inherited from ValueWidgetOptions.type
