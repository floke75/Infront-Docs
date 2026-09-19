---
title: "IndexOverviewWidgetOptions"
qualified_name: "WTK.IndexOverviewWidgetOptions"
kind: class
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "WTK"
group: "Widget Options"
nav_path: "WTK > Widget Options > IndexOverviewWidgetOptions"
source_url: "https://docs.infrontfinance.com/docs/classes/WTK.IndexOverviewWidgetOptions.html"
defines: ["IndexOverviewWidgetOptions"]
member_count: 27
members: ["hasContentCallback", "id", "linkChannels", "navButton", "navButtonClicked", "noContentPlaceholder?", "onChanges?", "persistState", "popupContainer?", "resetPopupPosition?", "showSearchWidget", "storageType", "streaming", "useOriginal", "usePerfectScrollbar", "widgetStateCallback", "widgetTitle", "historicColor", "historicFields", "layout", "onClick", "primaryValue", "showFullName", "content", "decimals", "defaultContent", "instrument"]
member_groups:
  "Widget Options": ["hasContentCallback", "id", "linkChannels", "navButton", "navButtonClicked", "noContentPlaceholder?", "onChanges?", "persistState", "popupContainer?", "resetPopupPosition?", "showSearchWidget", "storageType", "streaming", "useOriginal", "usePerfectScrollbar", "widgetStateCallback", "widgetTitle"]
  "IndexOverviewWidget": ["historicColor", "historicFields", "layout", "onClick", "primaryValue", "showFullName"]
  "SingleInstrumentWidget": ["content", "decimals", "defaultContent", "instrument"]
related_types: ["WTK.SingleInstrumentWidgetOptions"]
reference_count: 8
references: ["WTK.WidgetNavButtonType", "WTK.WidgetPopupParent", "WTK.WidgetState", "WTK.InstrumentOverviewWidgetLayout", "WTK.SingleInstrumentWidgetOptions", "WTK.IndexOverviewWidget", "WTK.WidgetOptions", "WTK.InfrontWidget"]
---

# IndexOverviewWidgetOptions

IndexOverviewWidgetOptions class extending SingleInstrumentWidgetOptions class.

Set options for the IndexOverviewWidget.

#### See

IndexOverviewWidget | WidgetOptions | SingleInstrumentWidgetOptions

#### Hierarchy ([View Summary](../type-hierarchy.md#WTK.IndexOverviewWidgetOptions))

- SingleInstrumentWidgetOptions

  - IndexOverviewWidgetOptions

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

### IndexOverviewWidget

#### historicColor

```ts
historicColor: boolean = true
```

Shows different color for historic values.

##### Default Value

`true`

#### historicFields

```ts
historicFields: string[] = ...
```

Which periods to show for historic performance.

You can specify up to 4 values (any additional values will be ignored).

Possible values are:

- `InfrontConstants.HistoricalPeriods.ONE_WEEK`
- `InfrontConstants.HistoricalPeriods.ONE_MONTH`
- `InfrontConstants.HistoricalPeriods.THREE_MONTH`
- `InfrontConstants.HistoricalPeriods.SIX_MONTH`
- `InfrontConstants.HistoricalPeriods.ONE_YEAR`
- `InfrontConstants.HistoricalPeriods.TWO_YEAR`
- `InfrontConstants.HistoricalPeriods.THREE_YEAR`
- `InfrontConstants.HistoricalPeriods.FIVE_YEAR`
- `InfrontConstants.HistoricalPeriods.YTD`

##### See

InfrontConstants.HistoricalPeriods

##### Default Value

`[InfrontConstants.HistoricalPeriods.ONE_MONTH, InfrontConstants.HistoricalPeriods.THREE_MONTH, InfrontConstants.HistoricalPeriods.SIX_MONTH, InfrontConstants.HistoricalPeriods.YTD]`

#### layout

```ts
layout: InstrumentOverviewWidgetLayout = InstrumentOverviewWidgetLayout.STANDARD
```

Layout.

##### See

[InstrumentOverviewWidgetLayout](./WTK.InstrumentOverviewWidgetLayout.md)

##### Default Value

`InstrumentOverviewWidgetLayout.STANDARD`

#### onClick

```ts
onClick: (instrument: Instrument) => void
```

Callback that is triggered when clicking on index overview.

##### Type Declaration

- (instrument: Instrument): void

  ##### Parameters

  - instrument: Instrument

  ##### Returns void

##### Default Value

`undefined`

#### primaryValue

```ts
primaryValue: string = InfrontConstants.Fields.LAST
```

Which field to show as the highlighted value to the right of the ticker.

Allowed values are:

- `'LAST'` (The Last value of the index shown with an arrow showing if the index is up or down)
- `'PCT_CHANGE'` (Percent change. No arrow is shown with this value)

##### See

InfrontConstants.Fields

##### Default Value

`'LAST'`

#### showFullName

```ts
showFullName: boolean = true
```

Set true if you wish to display full name of instrument.

Only relevant if [layout](#layout) == `'MINI'`

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
