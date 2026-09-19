---
title: "RiskReturnContributionWidgetOptions"
qualified_name: "WTK.RiskReturnContributionWidgetOptions"
kind: class
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "WTK"
group: "Widget Options"
nav_path: "WTK > Widget Options > RiskReturnContributionWidgetOptions"
source_url: "https://docs.infrontfinance.com/docs/classes/WTK.RiskReturnContributionWidgetOptions.html"
defines: ["RiskReturnContributionWidgetOptions"]
member_count: 32
members: ["instrument?", "decimals", "hasContentCallback", "id", "linkChannels", "navButton", "navButtonClicked", "noContentPlaceholder?", "onChanges?", "persistState", "popupContainer?", "resetPopupPosition?", "showSearchWidget", "storageType", "streaming", "useOriginal", "usePerfectScrollbar", "widgetStateCallback", "widgetTitle", "barSizes", "colors", "compositionType", "group", "labelLong", "labelShort", "portfolioId", "portfolioSource", "showCompositionType", "showLegend", "showTitle", "sort", "valuationDatetime"]
member_groups:
  "Base Widgets": ["instrument?"]
  "Widget Options": ["decimals", "hasContentCallback", "id", "linkChannels", "navButton", "navButtonClicked", "noContentPlaceholder?", "onChanges?", "persistState", "popupContainer?", "resetPopupPosition?", "showSearchWidget", "storageType", "streaming", "useOriginal", "usePerfectScrollbar", "widgetStateCallback", "widgetTitle"]
  "RiskReturnContributionWidget": ["barSizes", "colors", "compositionType", "group", "labelLong", "labelShort", "portfolioId", "portfolioSource", "showCompositionType", "showLegend", "showTitle", "sort", "valuationDatetime"]
reference_count: 8
references: ["SDK.InfrontSDK.SymbolId", "WTK.WidgetDecimals", "WTK.WidgetNavButtonType", "WTK.WidgetPopupParent", "WTK.WidgetState", "WTK.RiskReturnContributionWidget", "WTK.SvelteWidgetOptions", "WTK.InfrontWidget"]
---

# RiskReturnContributionWidgetOptions

RiskReturnContributionWidgetOptions class extending SvelteSingleInstrumentWidgetBaseOptions class.

Set Options for the RiskReturnContributionWidget.

#### See

RiskReturnContributionWidget | SvelteWidgetOptions | SvelteSingleInstrumentWidgetBaseOptions

#### Hierarchy

- SvelteSingleInstrumentWidgetBaseOptions

  - RiskReturnContributionWidgetOptions

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

### RiskReturnContributionWidget

#### barSizes

```ts
barSizes: number[] = undefined
```

Define sizes in px for (height of) the Contribution bars.

- first size is for "Risk Contribution"
- second size is for "Return Contribution"

If no sizes are set, the bar sizes will be taken from CSS classes:

- cell-risk-return-contribution-bars__risk-bar
- cell-risk-return-contribution-bars__return-bar

##### Default Value

`undefined`

#### colors

```ts
colors: string[]
```

Define colors for the Contribution bars.

- first color is for "Risk Contribution"
- second color is for "Return Contribution"

Or set colors by css-variables:

- --wtk-risk-return-contribution-options-bar-risk-color
- --wtk-risk-return-contribution-options-bar-return-color

##### Default Value

`['#F2564D', '#3498DB']` - default set by failover

#### compositionType

```ts
compositionType: CompositionType = 'POSITIONS'
```

Groups contribution rows by the given composition type instead of showing individual positions.
Contributions are summed per group; for GICS types (SECTOR/INDUSTRY_GROUP/INDUSTRY/SUB_INDUSTRY)
sector weights are applied proportionally.

##### Default Value

`'POSITIONS'`

#### group

```ts
group:
    | "TYPE"
    | "LARGEST_LOSS"
    | "SMALLEST_LOSS"
    | "LARGEST_GAIN"
    | "SMALLEST_GAIN"
```

Group contributions by provided grouping option.

The default value of `undefined` means unsorted / default order.

##### Default Value

`undefined`

#### labelLong

```ts
labelLong: ContributionLabelField = 'name'
```

Which field from the contribution row to show in the long (bottom) label per bar.
The value is hidden when it equals the short label value.

##### Default Value

`'name'`

#### labelShort

```ts
labelShort: ContributionLabelField = 'shortName'
```

Which field from the contribution row to show in the short (top) label per bar.

##### Default Value

`'shortName'`

#### portfolioId

```ts
portfolioId: string | number
```

Identifier for the portfolio.

##### Default Value

`undefined`

#### portfolioSource

```ts
portfolioSource: string
```

Source of the portfolio.

This string can be freely chosen inside the application, but a provider with same source must be configured
in `new Infront.UI(options)` like this example for sources 'wtk' and 'mock':

```typescript
portfolioRiskProviders: {
   wtk: new InfrontSDK.PortfolioRisk.PortfolioRiskWtkProvider(),
   mock: new InfrontSDK.PortfolioRisk.PortfolioRiskMockProvider(),
},
```

##### Default Value

`undefined`

#### showCompositionType

```ts
showCompositionType: boolean = true
```

Show or hide the current composition type label next to the title.

##### Default Value

`true`

#### showLegend

```ts
showLegend: boolean = true
```

Whether or not show the legend.

##### Default Value

`true`

#### showTitle

```ts
showTitle: boolean = true
```

Show or hide the widget title.

##### Default Value

`true`

#### sort

```ts
sort: "HIGHEST_RISK" | "HIGHEST_RETURN" | "LOWEST_RISK" | "LOWEST_RETURN"
```

Sort contributions by provided sorting option.

The default value of `undefined` means unsorted / default order.

##### Default Value

`undefined`

#### valuationDatetime

```ts
valuationDatetime: Date
```

Timestamp for the portfolio composition valuation.

The default value of `undefined` may change in the future, for now it is not valid!

##### Default Value

`undefined`
