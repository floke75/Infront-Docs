---
title: "FundAllocationPieChartWidgetOptions"
qualified_name: "WTK.FundAllocationPieChartWidgetOptions"
kind: class
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "WTK"
group: "Widget Options"
nav_path: "WTK > Widget Options > FundAllocationPieChartWidgetOptions"
source_url: "https://docs.infrontfinance.com/docs/classes/WTK.FundAllocationPieChartWidgetOptions.html"
defines: ["FundAllocationPieChartWidgetOptions"]
member_count: 38
members: ["decimals", "hasContentCallback", "id", "linkChannels", "navButton", "navButtonClicked", "noContentPlaceholder?", "onChanges?", "persistState", "popupContainer?", "resetPopupPosition?", "showSearchWidget", "storageType", "streaming", "useOriginal", "usePerfectScrollbar", "widgetStateCallback", "widgetTitle", "allocationType", "alpha", "animation", "beta", "borderColor", "borderWidth", "colors", "depth", "enable3d", "enableLabels", "fontFamily", "innerSize", "instruments", "legend", "legendLabelColor", "legendMaxHeight", "spacingBottom", "spacingLeft", "spacingRight", "spacingTop"]
member_groups:
  "Widget Options": ["decimals", "hasContentCallback", "id", "linkChannels", "navButton", "navButtonClicked", "noContentPlaceholder?", "onChanges?", "persistState", "popupContainer?", "resetPopupPosition?", "showSearchWidget", "storageType", "streaming", "useOriginal", "usePerfectScrollbar", "widgetStateCallback", "widgetTitle"]
  "FundAllocationPieChartWidget": ["allocationType", "alpha", "animation", "beta", "borderColor", "borderWidth", "colors", "depth", "enable3d", "enableLabels", "fontFamily", "innerSize", "instruments", "legend", "legendLabelColor", "legendMaxHeight", "spacingBottom", "spacingLeft", "spacingRight", "spacingTop"]
related_types: ["WTK.WidgetOptions"]
reference_count: 7
references: ["WTK.WidgetDecimals", "WTK.WidgetNavButtonType", "WTK.WidgetPopupParent", "WTK.WidgetState", "WTK.WidgetOptions", "WTK.FundAllocationPieChartWidget", "WTK.InfrontWidget"]
---

# FundAllocationPieChartWidgetOptions

FundAllocationPieChartWidgetOptions class extending WidgetOptions class.

Set options for the FundAllocationPieChartWidget.

#### See

FundAllocationPieChartWidget | WidgetOptions

#### Hierarchy ([View Summary](../type-hierarchy.md#WTK.FundAllocationPieChartWidgetOptions))

- WidgetOptions

  - FundAllocationPieChartWidgetOptions

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

Inherited from WidgetOptions.decimals

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

Inherited from WidgetOptions.hasContentCallback

#### id

```ts
id: string = null
```

ID for this widget.

Must be unique for this site, as it is used for session- and persistent state storage.

##### Default Value

`null`

Inherited from WidgetOptions.id

#### linkChannels

```ts
linkChannels: number | number[]
```

If set, auto linking will be enabled on this widget for the specified channels.

##### Default Value

`undefined`

Inherited from WidgetOptions.linkChannels

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

Inherited from WidgetOptions.navButton

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

Inherited from WidgetOptions.navButtonClicked

#### `Optional` noContentPlaceholder

```ts
noContentPlaceholder?: string | HTMLElement
```

The placeholder content to display when there's no content.

##### Default Value

`undefined`

Inherited from WidgetOptions.noContentPlaceholder

#### `Optional` onChanges

```ts
onChanges?: (changes: SimpleChanges) => void
```

Callback invoked whenever one or more options change via [InfrontWidget.modify](./WTK.InfrontWidget.md#modify).

Each key in the SimpleChanges map is the name of a changed property,
with `previousValue` and ` currentValue` available on the entry.

##### Default Value

`undefined`

Inherited from WidgetOptions.onChanges

#### persistState

```ts
persistState: boolean = true
```

Used if implementing persisting storage, set to `false` to prevent storage for this widget.

If `true`, persistence of data through WidgetStorage is enabled.

##### Default Value

`true`

Inherited from WidgetOptions.persistState

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

Inherited from WidgetOptions.popupContainer

#### `Optional` resetPopupPosition

```ts
resetPopupPosition?: boolean
```

When set to `true` there will be no positioning style added to the popup.

##### Default Value

`undefined`

Inherited from WidgetOptions.resetPopupPosition

#### showSearchWidget

```ts
showSearchWidget: boolean = false
```

If `true` it will display a search bar on the top of instrument based widgets.

##### Default Value

`false`

Inherited from WidgetOptions.showSearchWidget

#### storageType

```ts
storageType: any = null
```

Used if implementing persisting storage, can be used to set special storage objects like global storage.

Optional parameter that helps implementors route storage-calls to different targets.

##### Default Value

`null`

Inherited from WidgetOptions.storageType

#### streaming

```ts
streaming: boolean = true
```

Enable / disable streaming of data.

##### Default Value

`true`

Inherited from WidgetOptions.streaming

#### useOriginal

```ts
useOriginal: boolean = false
```

If `true` options object will not be copied before using.

##### Default Value

`false`

Inherited from WidgetOptions.useOriginal

#### usePerfectScrollbar

```ts
usePerfectScrollbar: boolean
```

Enable / disable usage of "Perfect Scrollbar".

##### Default Value

`undefined`

Inherited from WidgetOptions.usePerfectScrollbar

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

Inherited from WidgetOptions.widgetStateCallback

#### widgetTitle

```ts
widgetTitle: string
```

Title shown on the top of the widget. Will work on most widgets, but not all.

It can either be a key for the language-dictionary, or a text you want directly inserted as a header.

Set to `null` to hide title element

##### Default Value

`undefined`

Inherited from WidgetOptions.widgetTitle

### FundAllocationPieChartWidget

#### allocationType

```ts
allocationType: "Country" | "Asset" | "Sector"
```

Type of allocation to group displayed funds holdings by.

Usage: `"Country" | "Asset" | "Sector"`

##### See

Infront.Instrument

##### Default Value

`undefined`

#### alpha

```ts
alpha: number = 45
```

Rotate chart around its x-axis ([enable3d](#enable3d) must be `true`).

##### Default Value

`45`

#### animation

```ts
animation: boolean = true
```

Shows animations.

##### Default Value

`true`

#### beta

```ts
beta: number = 0
```

Rotate chart around its y-axis ([enable3d](#enable3d) must be `true`).

##### Default Value

`0`

#### borderColor

```ts
borderColor: string = '#001b26'
```

Hex color (e.g `'#ff00ff'`) to use for chart borders.

##### Default Value

`'#001b26'`

#### borderWidth

```ts
borderWidth: number = 2
```

Border width, in pixels.

##### Default Value

`2`

#### colors

```ts
colors: string[] = ...
```

Hex colors (e.g `'#ff00ff'`) to use for chart series.

##### Default Value

`['#31c0ba', '#66a2e0', '#9d50a3', '#c35551', '#d3ae5e', '#e8e774', '#85d465', '#cccccc']`

#### depth

```ts
depth: number = 40
```

The depth/thickness of a 3d chart ([enable3d](#enable3d) must be `true`).

##### Default Value

`40`

#### enable3d

```ts
enable3d: boolean = false
```

Show chart as 3d.

##### Default Value

`false`

#### enableLabels

```ts
enableLabels: boolean = false
```

Show or hide labels on the chart.

##### Default Value

`false`

#### fontFamily

```ts
fontFamily: string = 'Arial, sans-serif'
```

Sets font of the chart.

##### Default Value

`"Arial, sans-serif"`

#### innerSize

```ts
innerSize: string = '0%'
```

Sets inner size of the chart.

##### Default Value

`"0%"`

#### instruments

```ts
instruments: Instrument[] = []
```

Array of instruments/funds to visualize in the pie chart.

##### See

Infront.Instrument

##### Default Value

`[]`

#### legend

```ts
legend: boolean = false
```

Show or hide legend on the chart.

##### Default Value

`false`

#### legendLabelColor

```ts
legendLabelColor: string = '#999'
```

Sets legend label color.

##### Default Value

`"#999"`

#### legendMaxHeight

```ts
legendMaxHeight: number
```

Sets legend maximum height.

##### Default Value

`undefined`

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
