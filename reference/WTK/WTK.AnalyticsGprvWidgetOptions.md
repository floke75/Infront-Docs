---
title: "AnalyticsGprvWidgetOptions"
qualified_name: "WTK.AnalyticsGprvWidgetOptions"
kind: class
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "WTK"
group: "Widget Options"
nav_path: "WTK > Widget Options > AnalyticsGprvWidgetOptions"
source_url: "https://docs.infrontfinance.com/docs/classes/WTK.AnalyticsGprvWidgetOptions.html"
defines: ["AnalyticsGprvWidgetOptions"]
member_count: 44
members: ["instrument?", "decimals", "hasContentCallback", "id", "linkChannels", "navButton", "navButtonClicked", "noContentPlaceholder?", "onChanges?", "persistState", "popupContainer?", "resetPopupPosition?", "showSearchWidget", "storageType", "streaming", "useOriginal", "usePerfectScrollbar", "widgetStateCallback", "widgetTitle", "sectorSelectorMode", "chartHeight?", "chartWidth?", "colors", "companySource", "compareInstrument", "legend", "legendLabelColor", "linkChannel?", "ltmSource", "onMetricClicked?", "onSectorSelected?", "onSectorTypeSelected?", "sectorType", "showChart", "showLevel", "showTable", "showThresholdsTable", "spacingBottom", "spacingLeft", "spacingRight", "spacingTop", "tooltip", "constructor", "dropdownDirection"]
member_groups:
  "Base Widgets": ["instrument?"]
  "Widget Options": ["decimals", "hasContentCallback", "id", "linkChannels", "navButton", "navButtonClicked", "noContentPlaceholder?", "onChanges?", "persistState", "popupContainer?", "resetPopupPosition?", "showSearchWidget", "storageType", "streaming", "useOriginal", "usePerfectScrollbar", "widgetStateCallback", "widgetTitle"]
  "AnalyticsGprvScoreCardWidget": ["sectorSelectorMode"]
  "AnalyticsGprvWidget": ["chartHeight?", "chartWidth?", "colors", "companySource", "compareInstrument", "legend", "legendLabelColor", "linkChannel?", "ltmSource", "onMetricClicked?", "onSectorSelected?", "onSectorTypeSelected?", "sectorType", "showChart", "showLevel", "showTable", "showThresholdsTable", "spacingBottom", "spacingLeft", "spacingRight", "spacingTop", "tooltip"]
  "Other": ["constructor", "dropdownDirection"]
reference_count: 12
references: ["SDK.InfrontSDK.SymbolId", "WTK.WidgetDecimals", "WTK.WidgetNavButtonType", "WTK.WidgetPopupParent", "WTK.WidgetState", "SDK.InfrontSDK.CoreDataAPI.CdapiGetEquityIssuersOptionsCompanySource", "SDK.InfrontSDK.CoreDataAPI.CdapiGetEquityIssuersOptionsEquityIssuerKeyfigureSource", "WTK.SubSectorSelection", "WTK.AnalyticsGprvWidget", "WTK.SvelteWidgetOptions", "WTK.InfrontWidget", "WTK.WidgetOptions"]
---

# AnalyticsGprvWidgetOptions

AnalyticsGprvWidgetOptions class extending SvelteSingleInstrumentWidgetBaseOptions class.

Set Options for the AnalyticsGprvWidget.

#### See

AnalyticsGprvWidget | SvelteWidgetOptions | SvelteSingleInstrumentWidgetBaseOptions

#### Hierarchy

- SvelteSingleInstrumentWidgetBaseOptions

  - AnalyticsGprvWidgetOptions

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

### AnalyticsGprvScoreCardWidget

#### sectorSelectorMode

```ts
sectorSelectorMode: "label" | "hidden" | "dropdown" = 'dropdown'
```

Set mode for the sector selector dropdown.

##### Default Value

```ts
dropdown
```

### AnalyticsGprvWidget

#### `Optional` chartHeight

```ts
chartHeight?: string | number
```

Set the chart height.

##### Default Value

```ts
undefined
```

#### `Optional` chartWidth

```ts
chartWidth?: string | number
```

Set the chart width.

##### Default Value

```ts
undefined
```

#### colors

```ts
colors: string[] = ...
```

Define colors for the different chart series.
At the moment GPRV widget uses two series, so two colors should be defined.

If theming is required, colors can be overwritten in CSS by defining the following classes:

```typescript
.spider-series-color-0 {
  color: $theme-orange-color;
}
.spider-series-color-1 {
  color: $theme-blue-color;
}
...
```

##### Default Value

`['#119DDA', '#FBC246']`

#### companySource

```ts
companySource: CdapiGetEquityIssuersOptionsCompanySource = 'INFRONT'
```

The source for company data.

##### Default Value

`'INFRONT'`

#### compareInstrument

```ts
compareInstrument: SymbolId
```

If `compareInstrument` is set, the GPRV data will be compared between
(main-)company of `opt.instrument` and the company of the compare-instrument.

If set to `undefined`, ` opt.instrument` will be compared to its sub-sector (Infront Sector Level 2).

##### Default Value

`undefined`

#### legend

```ts
legend: boolean = true
```

Show or hide legend on the chart.

##### Default Value

`true`

#### legendLabelColor

```ts
legendLabelColor: string = '#fff'
```

Sets label color.

If theming is required, colors can be overwritten in CSS by defining the following classes:

```typescript
 .highcharts-legend-item {
     text {
        fill: $theme-legend-item-color !important;
     }
 }
```

##### Default Value

`'#fff'`

#### `Optional` linkChannel

```ts
linkChannel?: string
```

##### Deprecated

Use WidgetOptions.linkChannels instead.

If specified, the widget will share the selected sectorType with other widgets that have the same linkChannel value.

##### Default Value

`undefined`

#### ltmSource

```ts
ltmSource: CdapiGetEquityIssuersOptionsEquityIssuerKeyfigureSource = 'INFRONT'
```

The source for LTM key figure data.

##### Default Value

`'INFRONT'`

#### `Optional` onMetricClicked

```ts
onMetricClicked?: (element: GprvMetricClick) => void
```

Callback for when a metric in the widget is clicked

#### `Optional` onSectorSelected

```ts
onSectorSelected?: (selection: SubSectorSelection) => void
```

Callback for when the user changed the sector selection.

#### `Optional` onSectorTypeSelected

```ts
onSectorTypeSelected?: (sectorType: GprvSectorType) => void
```

Callback for when the user changed the sectorType.

#### sectorType

```ts
sectorType: GprvSectorType = 'gicsIndustryGroup'
```

The peer sector type.

##### Default Value

`'gicsIndustryGroup'`

#### showChart

```ts
showChart: boolean = true
```

Whether to show the GPRV chart or not.

##### Default Value

`true`

#### showLevel

```ts
showLevel: boolean = true
```

Whether to show the currently selected GICS level or not.

##### Default Value

`true`

#### showTable

```ts
showTable: boolean = true
```

Whether to show the GPRV tables or not.

##### Default Value

`true`

#### showThresholdsTable

```ts
showThresholdsTable: boolean = false
```

The thresholds-table provides an overview for each sub-metric about the used thresholds to calculated the GPRV scores.

If set to `true`, the widget will only display the thresholds-table.
If set to `false` the GPRV chart and GPRV table are shown, according to [AnalyticsGprvWidgetOptions.showChart](#showchart) and [AnalyticsGprvWidgetOptions.showTable](#showtable).

##### Default Value

`false`

#### spacingBottom

```ts
spacingBottom: number = 15
```

Spacing from chart to bottom edge of container.

##### Default Value

`15`

#### spacingLeft

```ts
spacingLeft: number = 10
```

Spacing from chart to left edge of container.

##### Default Value

`10`

#### spacingRight

```ts
spacingRight: number = 10
```

Spacing from chart to right edge of container.

##### Default Value

`10`

#### spacingTop

```ts
spacingTop: number = 10
```

Spacing from chart to top edge of container.

##### Default Value

`10`

#### tooltip

```ts
tooltip: boolean = true
```

Show or hide tooltip on the chart.

##### Default Value

`true`

### Other

#### constructor

```ts
new AnalyticsGprvWidgetOptions(
    initOptions?: Partial<AnalyticsGprvWidgetOptions>,
): AnalyticsGprvWidgetOptions
```

Initializes a new [AnalyticsGprvWidgetOptions](#).
You can optionally specify an init object that specifies
a subset of properties to set on the new options object.

##### Parameters

- `Optional` initOptions: Partial<AnalyticsGprvWidgetOptions>

  The initial property values to set.

##### Returns AnalyticsGprvWidgetOptions

Overrides SvelteSingleInstrumentWidgetBaseOptions.constructor

#### dropdownDirection

```ts
dropdownDirection: "up" | "down" = 'down'
```

Determines the direction of the sectorSelector dropdown when open.

##### Default Value

`down`
