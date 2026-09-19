---
title: "AnalyticsEstimatesBarWidgetOptions"
qualified_name: "WTK.AnalyticsEstimatesBarWidgetOptions"
kind: class
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "WTK"
group: "Widget Options"
nav_path: "WTK > Widget Options > AnalyticsEstimatesBarWidgetOptions"
source_url: "https://docs.infrontfinance.com/docs/classes/WTK.AnalyticsEstimatesBarWidgetOptions.html"
defines: ["AnalyticsEstimatesBarWidgetOptions"]
member_count: 27
members: ["instrument?", "decimals", "hasContentCallback", "id", "linkChannels", "navButton", "navButtonClicked", "noContentPlaceholder?", "onChanges?", "persistState", "popupContainer?", "resetPopupPosition?", "showSearchWidget", "storageType", "streaming", "useOriginal", "usePerfectScrollbar", "widgetStateCallback", "widgetTitle", "configurableEstimatesFields", "estimatesData?", "estimateSource", "reportType?", "showAnalystsBar", "showAverageOutlook", "showExtraInformationIcon", "onShowExtraInformationClicked?"]
member_groups:
  "Base Widgets": ["instrument?"]
  "Widget Options": ["decimals", "hasContentCallback", "id", "linkChannels", "navButton", "navButtonClicked", "noContentPlaceholder?", "onChanges?", "persistState", "popupContainer?", "resetPopupPosition?", "showSearchWidget", "storageType", "streaming", "useOriginal", "usePerfectScrollbar", "widgetStateCallback", "widgetTitle"]
  "AnalyticsEstimatesBarWidget": ["configurableEstimatesFields", "estimatesData?", "estimateSource", "reportType?", "showAnalystsBar", "showAverageOutlook", "showExtraInformationIcon"]
  "Widget": ["onShowExtraInformationClicked?"]
reference_count: 12
references: ["SDK.InfrontSDK.SymbolId", "WTK.WidgetDecimals", "WTK.WidgetNavButtonType", "WTK.WidgetPopupParent", "WTK.WidgetState", "WTK.ConfigurableEstimatesField", "SDK.InfrontSDK.CoreDataAPI.CdapiEquityCompanyEstimatesData", "SDK.InfrontSDK.CoreDataAPI.CdapiGetEquityCompanyEstimatesOptionsEstimateSource", "SDK.InfrontSDK.CoreDataAPI.CdapiGetEquityCompanyEstimatesOptionsReportType", "WTK.AnalyticsEstimatesBarWidget", "WTK.SvelteWidgetOptions", "WTK.InfrontWidget"]
---

# AnalyticsEstimatesBarWidgetOptions

AnalyticsEstimatesBarWidgetOptions class extending SvelteSingleInstrumentWidgetBaseOptions class.

Set Options for the AnalyticsEstimatesBarWidget.

#### See

AnalyticsEstimatesBarWidget | SvelteWidgetOptions | SvelteSingleInstrumentWidgetBaseOptions

#### Hierarchy

- SvelteSingleInstrumentWidgetBaseOptions

  - AnalyticsEstimatesBarWidgetOptions

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

### AnalyticsEstimatesBarWidget

#### configurableEstimatesFields

```ts
configurableEstimatesFields: ConfigurableEstimatesField<
    | "estimate.outlook.date"
    | "estimate.target_price.mean"
    | "estimate.target_price.mean_upside",
>[] = ...
```

Array of estimate fields to be display after the target price (always shown).

##### Default Value

`object`

#### `Optional` estimatesData

```ts
estimatesData?: Writable<CdapiEquityCompanyEstimatesData>
```

Customly provided data

##### Default Value

`undefined`

#### estimateSource

```ts
estimateSource: CdapiGetEquityCompanyEstimatesOptionsEstimateSource = 'INFRONT'
```

The source of the to be requested data.

##### See

[InfrontSDK.CoreDataAPI.CdapiGetEquityCompanyEstimatesOptionsEstimateSource](../SDK/SDK.InfrontSDK.CoreDataAPI.CdapiGetEquityCompanyEstimatesOptionsEstimateSource.md)

##### Default Value

`'INFRONT'`

#### `Optional` reportType

```ts
reportType?: CdapiGetEquityCompanyEstimatesOptionsReportType = 'ANNUAL'
```

The report type of the to be requested data. Either annually or quarterly data.

##### See

[InfrontSDK.CoreDataAPI.CdapiGetEquityCompanyEstimatesOptionsReportType](../SDK/SDK.InfrontSDK.CoreDataAPI.CdapiGetEquityCompanyEstimatesOptionsReportType.md)

##### Default Value

`'ANNUAL'`

#### showAnalystsBar

```ts
showAnalystsBar: boolean = true
```

Flag that indicates whether or not the analystsBar should be shown.

##### Default Value

`true`

#### showAverageOutlook

```ts
showAverageOutlook: boolean = true
```

Flag that indicates whether or not the average outlook should be shown.

##### Default Value

`true`

#### showExtraInformationIcon

```ts
showExtraInformationIcon: boolean = false
```

Flag that indicates whether or not the extra information icon should be shown.

##### Default Value

`false`

### Widget

#### `Optional` onShowExtraInformationClicked

```ts
onShowExtraInformationClicked?: (symbol: SymbolId) => void
```

Callback that is called when the extra information icon is clicked.

The callback receives the instrument on the item that was clicked, as an Infront.Instrument object, as a parameter.

##### Type Declaration

- (symbol: SymbolId): void

  ##### Parameters

  - symbol: [SymbolId](../SDK/SDK.InfrontSDK.SymbolId.md)

  ##### Returns void

##### See

[InfrontSDK.SymbolId](../SDK/SDK.InfrontSDK.SymbolId.md)

##### Default Value

`undefined`
