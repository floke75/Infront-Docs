---
title: "SvelteInstrumentSingleValueWidgetOptions"
qualified_name: "WTK.SvelteInstrumentSingleValueWidgetOptions"
kind: class
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "WTK"
group: "Widget Options"
nav_path: "WTK > Widget Options > SvelteInstrumentSingleValueWidgetOptions"
source_url: "https://docs.infrontfinance.com/docs/classes/WTK.SvelteInstrumentSingleValueWidgetOptions.html"
defines: ["SvelteInstrumentSingleValueWidgetOptions"]
member_count: 36
members: ["instrument?", "decimals", "hasContentCallback", "id", "linkChannels", "navButton", "navButtonClicked", "noContentPlaceholder?", "onChanges?", "persistState", "popupContainer?", "resetPopupPosition?", "showSearchWidget", "storageType", "streaming", "useOriginal", "usePerfectScrollbar", "widgetStateCallback", "widgetTitle", "canRequestData", "CSSClasses?", "data?", "formatter?", "hoverTitle?", "label?", "labelCSSClasses?", "labelValues?", "showDataTitle?", "showLabelTitle?", "subscribe?", "symbolData?", "symbolField", "translateLabel?", "useHTML?", "useWrapperDiv?", "valueCSSClasses?"]
member_groups:
  "Base Widgets": ["instrument?"]
  "Widget Options": ["decimals", "hasContentCallback", "id", "linkChannels", "navButton", "navButtonClicked", "noContentPlaceholder?", "onChanges?", "persistState", "popupContainer?", "resetPopupPosition?", "showSearchWidget", "storageType", "streaming", "useOriginal", "usePerfectScrollbar", "widgetStateCallback", "widgetTitle"]
  "SvelteInstrumentSingleValueWidget": ["canRequestData", "CSSClasses?", "data?", "formatter?", "hoverTitle?", "label?", "labelCSSClasses?", "labelValues?", "showDataTitle?", "showLabelTitle?", "subscribe?", "symbolData?", "symbolField", "translateLabel?", "useHTML?", "useWrapperDiv?", "valueCSSClasses?"]
reference_count: 11
references: ["SDK.InfrontSDK.SymbolId", "WTK.WidgetDecimals", "WTK.WidgetNavButtonType", "WTK.WidgetPopupParent", "WTK.WidgetState", "WTK.FormatterFn", "SDK.InfrontSDK.SymbolData", "SDK.InfrontSDK.SymbolField", "WTK.SvelteInstrumentSingleValueWidget", "WTK.SvelteWidgetOptions", "WTK.InfrontWidget"]
---

# SvelteInstrumentSingleValueWidgetOptions

SvelteInstrumentSingleValueWidgetOptions class extending SvelteSingleInstrumentWidgetBaseOptions class.

Set Options for the SvelteInstrumentSingleValueWidget.

#### See

SvelteInstrumentSingleValueWidget | SvelteWidgetOptions | SvelteSingleInstrumentWidgetBaseOptions

#### Hierarchy

- SvelteSingleInstrumentWidgetBaseOptions

  - SvelteInstrumentSingleValueWidgetOptions

### Base Widgets

#### `Optional` instrument

```ts
instrument?: SymbolId
```

Sets instrument for the widget.

##### See

[InfrontSDK.SymbolId](../SDK/SDK.InfrontSDK.SymbolId.md)

##### Default Value

`undefined`

Inherited from SvelteSingleInstrumentWidgetBaseOptions.instrument

### Widget Options

#### decimals

```ts
decimals: number | WidgetDecimals = WidgetDecimals.INSTRUMENT
```

Set the number or type of decimals to use for normal numbers in the widget.

Available values:

- `WidgetDecimals.FEED`
- `WidgetDecimals.INSTRUMENT`
- `WidgetDecimals.DEFAULT` (usually 2) or a number

##### See

[WidgetDecimals](./WTK.WidgetDecimals.md)

##### Default Value

`Infront.WidgetDecimals.INSTRUMENT`

Inherited from SvelteSingleInstrumentWidgetBaseOptions.decimals

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

Inherited from SvelteSingleInstrumentWidgetBaseOptions.hasContentCallback

#### id

```ts
id: string = null
```

ID for this widget.

Must be unique for this site, as it is used for session- and persistent state storage.

##### Default Value

`null`

Inherited from SvelteSingleInstrumentWidgetBaseOptions.id

#### linkChannels

```ts
linkChannels: number | number[]
```

If set, auto linking will be enabled on this widget for the specified channels.

##### Default Value

`undefined`

Inherited from SvelteSingleInstrumentWidgetBaseOptions.linkChannels

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

Inherited from SvelteSingleInstrumentWidgetBaseOptions.navButton

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

Inherited from SvelteSingleInstrumentWidgetBaseOptions.navButtonClicked

#### `Optional` noContentPlaceholder

```ts
noContentPlaceholder?: string | HTMLElement
```

The placeholder content to display when there's no content.

##### Default Value

`undefined`

Inherited from SvelteSingleInstrumentWidgetBaseOptions.noContentPlaceholder

#### `Optional` onChanges

```ts
onChanges?: (changes: SimpleChanges) => void
```

Callback invoked whenever one or more options change via [InfrontWidget.modify](./WTK.InfrontWidget.md#modify).

Each key in the SimpleChanges map is the name of a changed property,
with `previousValue` and ` currentValue` available on the entry.

##### Default Value

`undefined`

Inherited from SvelteSingleInstrumentWidgetBaseOptions.onChanges

#### persistState

```ts
persistState: boolean = true
```

Used if implementing persisting storage, set to `false` to prevent storage for this widget.

If `true`, persistence of data through WidgetStorage is enabled.

##### Default Value

`true`

Inherited from SvelteSingleInstrumentWidgetBaseOptions.persistState

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

Inherited from SvelteSingleInstrumentWidgetBaseOptions.popupContainer

#### `Optional` resetPopupPosition

```ts
resetPopupPosition?: boolean
```

When set to `true` there will be no positioning style added to the popup.

##### Default Value

`undefined`

Inherited from SvelteSingleInstrumentWidgetBaseOptions.resetPopupPosition

#### showSearchWidget

```ts
showSearchWidget: boolean = false
```

If `true` it will display a search bar on the top of instrument based widgets.

##### Default Value

`false`

Inherited from SvelteSingleInstrumentWidgetBaseOptions.showSearchWidget

#### storageType

```ts
storageType: any = null
```

Used if implementing persisting storage, can be used to set special storage objects like global storage.

Optional parameter that helps implementors route storage-calls to different targets.

##### Default Value

`null`

Inherited from SvelteSingleInstrumentWidgetBaseOptions.storageType

#### streaming

```ts
streaming: boolean = true
```

Enable / disable streaming of data.

##### Default Value

`true`

Inherited from SvelteSingleInstrumentWidgetBaseOptions.streaming

#### useOriginal

```ts
useOriginal: boolean = false
```

If `true` options object will not be copied before using.

##### Default Value

`false`

Inherited from SvelteSingleInstrumentWidgetBaseOptions.useOriginal

#### usePerfectScrollbar

```ts
usePerfectScrollbar: boolean
```

Enable / disable usage of "Perfect Scrollbar".

##### Default Value

`undefined`

Inherited from SvelteSingleInstrumentWidgetBaseOptions.usePerfectScrollbar

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

Inherited from SvelteSingleInstrumentWidgetBaseOptions.widgetStateCallback

#### widgetTitle

```ts
widgetTitle: string
```

Title shown on the top of the widget. Will work on most widgets, but not all.

It can either be a key for the language-dictionary, or a text you want directly inserted as a header.

Set to `null` to hide title element

##### Default Value

`undefined`

Inherited from SvelteSingleInstrumentWidgetBaseOptions.widgetTitle

### SvelteInstrumentSingleValueWidget

#### canRequestData

```ts
canRequestData: boolean = true
```

Flag to indicate whether or not the widget can request data on its own.
Can be used with data or symbolData

##### Default Value

`true`

#### `Optional` CSSClasses

```ts
CSSClasses?: CSSClassOption = ''
```

Fallback/default CSS Classes to be set.
Also accepts a callback with the data value as it's parameter.

##### Default Value

`undefined`

#### `Optional` data

```ts
data?: unknown
```

Customly provided data if canRequestData flag is set to false.

##### Default Value

`undefined`

#### `Optional` formatter

```ts
formatter?: FormatterFn
```

Formatter function for the value.

##### Default Value

`undefined`

#### `Optional` hoverTitle

```ts
hoverTitle?: string
```

Show a custom label title on hover, will always be shown on hover if a value is supplied regardless of showLabelTitle setting.

##### Default Value

`undefined`

#### `Optional` label

```ts
label?: string
```

The label to display before the value.

##### Default Value

`undefined`

#### `Optional` labelCSSClasses

```ts
labelCSSClasses?: CSSClassOption = ''
```

CSS classes to add to the value label.
Also accepts a callback with the data value as it's parameter.

##### Default Value

`undefined`

#### `Optional` labelValues

```ts
labelValues?: object
```

Interpolation values/parameters for a translation.

##### Default Value

`undefined`

#### `Optional` showDataTitle

```ts
showDataTitle?: boolean
```

Flag to enable or disable the value title.

##### Default Value

`undefined`

#### `Optional` showLabelTitle

```ts
showLabelTitle?: boolean
```

Flag to enable or disable the label title.

##### Default Value

`undefined`

#### `Optional` subscribe

```ts
subscribe?: boolean
```

Enables or disables subscribing to the SymbolData request.
When turned on non static data will be updated in the DOM every time there's a server update.

##### Default Value

`undefined`

#### `Optional` symbolData

```ts
symbolData?: SymbolData
```

Customly provided symbolData if canRequestData flag is set to false.
Requires the symbolField to be set as well.

##### Default Value

`undefined`

#### symbolField

```ts
symbolField: SymbolField
```

The SymbolField to display

##### See

[InfrontSDK.SymbolField](../SDK/SDK.InfrontSDK.SymbolField.md)

##### Default Value

`undefined`

#### `Optional` translateLabel

```ts
translateLabel?: boolean
```

Flag to indicate whether or not the label should be translated.

##### Default Value

`undefined`

#### `Optional` useHTML

```ts
useHTML?: boolean
```

Flag to enable or disable HTML value.
Can be used to render HTMLElements when they are expected as the value.

##### Default Value

`undefined`

#### `Optional` useWrapperDiv

```ts
useWrapperDiv?: boolean = true
```

Determines if the component should nest it's content
inside the wrapper div.cell-w-single-value

##### Default Value

`true`

#### `Optional` valueCSSClasses

```ts
valueCSSClasses?: CSSClassOption = ''
```

CSS classes to add to the value element.
Also accepts a callback with the data value as it's parameter.

##### Default Value

`undefined`
