---
title: "InstrumentOverviewWidgetOptions"
qualified_name: "WTK.InstrumentOverviewWidgetOptions"
kind: class
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "WTK"
group: "Widget Options"
nav_path: "WTK > Widget Options > InstrumentOverviewWidgetOptions"
source_url: "https://docs.infrontfinance.com/docs/classes/WTK.InstrumentOverviewWidgetOptions.html"
defines: ["InstrumentOverviewWidgetOptions"]
member_count: 30
members: ["hasContentCallback", "id", "linkChannels", "navButton", "navButtonClicked", "noContentPlaceholder?", "onChanges?", "persistState", "popupContainer?", "resetPopupPosition?", "showSearchWidget", "storageType", "streaming", "useOriginal", "usePerfectScrollbar", "widgetStateCallback", "widgetTitle", "historicFields", "historicViewLabel", "layout", "mainField", "onClick", "selectedPeriod", "showConstituentsIfAvailable", "showFullName", "visualBarValues", "content", "decimals", "defaultContent", "instrument"]
member_groups:
  "Widget Options": ["hasContentCallback", "id", "linkChannels", "navButton", "navButtonClicked", "noContentPlaceholder?", "onChanges?", "persistState", "popupContainer?", "resetPopupPosition?", "showSearchWidget", "storageType", "streaming", "useOriginal", "usePerfectScrollbar", "widgetStateCallback", "widgetTitle"]
  "InstrumentOverviewWidget": ["historicFields", "historicViewLabel", "layout", "mainField", "onClick", "selectedPeriod", "showConstituentsIfAvailable", "showFullName", "visualBarValues"]
  "SingleInstrumentWidget": ["content", "decimals", "defaultContent", "instrument"]
related_types: ["WTK.SingleInstrumentWidgetOptions"]
reference_count: 10
references: ["WTK.WidgetNavButtonType", "WTK.WidgetPopupParent", "WTK.WidgetState", "WTK.InstrumentOverviewPeriod", "WTK.InstrumentOverviewLayout", "WTK.DisplayFieldType", "WTK.SingleInstrumentWidgetOptions", "WTK.InstrumentOverviewWidget", "WTK.WidgetOptions", "WTK.InfrontWidget"]
---

# InstrumentOverviewWidgetOptions

InstrumentOverviewWidgetOptions class extending SingleInstrumentWidgetOptions class.

Set options for the InstrumentOverviewWidget.

#### See

InstrumentOverviewWidget | WidgetOptions | SingleInstrumentWidgetOptions

#### Hierarchy ([View Summary](../type-hierarchy.md#WTK.InstrumentOverviewWidgetOptions))

- SingleInstrumentWidgetOptions

  - InstrumentOverviewWidgetOptions

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

Inherited from SingleInstrumentWidgetOptions.hasContentCallback

#### id

```ts
id: string = null
```

ID for this widget.

Must be unique for this site, as it is used for session- and persistent state storage.

##### Default Value

`null`

Inherited from SingleInstrumentWidgetOptions.id

#### linkChannels

```ts
linkChannels: number | number[]
```

If set, auto linking will be enabled on this widget for the specified channels.

##### Default Value

`undefined`

Inherited from SingleInstrumentWidgetOptions.linkChannels

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

Inherited from SingleInstrumentWidgetOptions.navButton

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

Inherited from SingleInstrumentWidgetOptions.navButtonClicked

#### `Optional` noContentPlaceholder

```ts
noContentPlaceholder?: string | HTMLElement
```

The placeholder content to display when there's no content.

##### Default Value

`undefined`

Inherited from SingleInstrumentWidgetOptions.noContentPlaceholder

#### `Optional` onChanges

```ts
onChanges?: (changes: SimpleChanges) => void
```

Callback invoked whenever one or more options change via [InfrontWidget.modify](./WTK.InfrontWidget.md#modify).

Each key in the SimpleChanges map is the name of a changed property,
with `previousValue` and ` currentValue` available on the entry.

##### Default Value

`undefined`

Inherited from SingleInstrumentWidgetOptions.onChanges

#### persistState

```ts
persistState: boolean = true
```

Used if implementing persisting storage, set to `false` to prevent storage for this widget.

If `true`, persistence of data through WidgetStorage is enabled.

##### Default Value

`true`

Inherited from SingleInstrumentWidgetOptions.persistState

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

Inherited from SingleInstrumentWidgetOptions.popupContainer

#### `Optional` resetPopupPosition

```ts
resetPopupPosition?: boolean
```

When set to `true` there will be no positioning style added to the popup.

##### Default Value

`undefined`

Inherited from SingleInstrumentWidgetOptions.resetPopupPosition

#### showSearchWidget

```ts
showSearchWidget: boolean = false
```

If `true` it will display a search bar on the top of instrument based widgets.

##### Default Value

`false`

Inherited from SingleInstrumentWidgetOptions.showSearchWidget

#### storageType

```ts
storageType: any = null
```

Used if implementing persisting storage, can be used to set special storage objects like global storage.

Optional parameter that helps implementors route storage-calls to different targets.

##### Default Value

`null`

Inherited from SingleInstrumentWidgetOptions.storageType

#### streaming

```ts
streaming: boolean = true
```

Enable / disable streaming of data.

##### Default Value

`true`

Inherited from SingleInstrumentWidgetOptions.streaming

#### useOriginal

```ts
useOriginal: boolean = false
```

If `true` options object will not be copied before using.

##### Default Value

`false`

Inherited from SingleInstrumentWidgetOptions.useOriginal

#### usePerfectScrollbar

```ts
usePerfectScrollbar: boolean
```

Enable / disable usage of "Perfect Scrollbar".

##### Default Value

`undefined`

Inherited from SingleInstrumentWidgetOptions.usePerfectScrollbar

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

Inherited from SingleInstrumentWidgetOptions.widgetStateCallback

#### widgetTitle

```ts
widgetTitle: string
```

Title shown on the top of the widget. Will work on most widgets, but not all.

It can either be a key for the language-dictionary, or a text you want directly inserted as a header.

Set to `null` to hide title element

##### Default Value

`undefined`

Inherited from SingleInstrumentWidgetOptions.widgetTitle

### InstrumentOverviewWidget

#### historicFields

```ts
historicFields: InstrumentOverviewPeriod[] = ...
```

Determines which periods will be included in the historical period performances.

Possible values are: "LAST_VALID" | "CHANGE" | "PCT_CHANGE"

##### See

[InstrumentOverviewPeriod](./WTK.InstrumentOverviewPeriod.md)

##### Default Value

`['1D', '1W', '1M', '3M', 'YTD']`

#### historicViewLabel

```ts
historicViewLabel: boolean = false
```

Shows or hides the instrument name as the main label when using the 'historic' layout.

##### Default Value

`false`

#### layout

```ts
layout: InstrumentOverviewLayout = 'default'
```

Choose between four available layouts: 'default', 'historic', 'mini', 'miniextended'.

##### See

[InstrumentOverviewLayout](./WTK.InstrumentOverviewLayout.md)

##### Default Value

`'default'`

#### mainField

```ts
mainField: DisplayFieldType = ...
```

Determines which field will be the main field displayed with a larger font in the widget.

Possible values are: "LAST_VALID" | "CHANGE" | "PCT_CHANGE"

##### See

[DisplayFieldType](./WTK.DisplayFieldType.md)

##### Default Value

`'LAST_VALID'`

#### onClick

```ts
onClick: (instrument: Instrument) => void
```

Callback that is triggered when clicking on instrument overview.

##### Type Declaration

- (instrument: Instrument): void

  ##### Parameters

  - instrument: Instrument

  ##### Returns void

##### Default Value

`undefined`

#### selectedPeriod

```ts
selectedPeriod: InstrumentOverviewPeriod
```

Sets which time period in the historicFields collection that will be selected when the widget is initialized.

If selectedPeriod is not supplied the first item in the historicFields collection will be selected in the widget.

##### See

[InstrumentOverviewPeriod](./WTK.InstrumentOverviewPeriod.md)

##### Default Value

`undefined`

#### showConstituentsIfAvailable

```ts
showConstituentsIfAvailable: boolean = true
```

Indexes can be shown with either a constituents bar displaying the number of constituents
which are up, down or unchanged, or a performance bar.

Use [showConstituentsIfAvailable](#showconstituentsifavailable) = `false` to show a performance bar instead of a constituents bar for instruments that has constituents.

##### Default Value

`true`

#### showFullName

```ts
showFullName: boolean = true
```

Show full name.

##### Default Value

`true`

#### visualBarValues

```ts
visualBarValues: boolean = true
```

Show or hide instrument price values above the performance bar.

##### Default Value

`true`

### SingleInstrumentWidget

#### content

```ts
content: SymbolContentEnum = Infront.defaultSymbolContent
```

Content.

##### See

Infront.SymbolContentEnum

##### Default Value

`Infront.SymbolContentEnum.StaticData | Infront.SymbolContentEnum.Basic`

Inherited from SingleInstrumentWidgetOptions.content

#### decimals

```ts
decimals: number = null
```

Displays decimal instead of integer.

##### Default Value

`null`

Inherited from SingleInstrumentWidgetOptions.decimals

#### defaultContent

```ts
defaultContent: any
```

Default content.

##### Default Value

`undefined`

Inherited from SingleInstrumentWidgetOptions.defaultContent

#### instrument

```ts
instrument: Instrument
```

Sets instrument for the widget.

##### See

Infront.Instrument

##### Default Value

`undefined`

Inherited from SingleInstrumentWidgetOptions.instrument
