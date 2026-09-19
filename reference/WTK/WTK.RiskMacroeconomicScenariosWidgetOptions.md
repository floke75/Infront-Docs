---
title: "RiskMacroeconomicScenariosWidgetOptions"
qualified_name: "WTK.RiskMacroeconomicScenariosWidgetOptions"
kind: class
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "WTK"
group: "Widget Options"
nav_path: "WTK > Widget Options > RiskMacroeconomicScenariosWidgetOptions"
source_url: "https://docs.infrontfinance.com/docs/classes/WTK.RiskMacroeconomicScenariosWidgetOptions.html"
defines: ["RiskMacroeconomicScenariosWidgetOptions"]
member_count: 37
members: ["instrument?", "decimals", "hasContentCallback", "id", "linkChannels", "navButton", "navButtonClicked", "noContentPlaceholder?", "onChanges?", "persistState", "popupContainer?", "resetPopupPosition?", "showSearchWidget", "storageType", "streaming", "useOriginal", "usePerfectScrollbar", "widgetStateCallback", "widgetTitle", "chartHeight?", "chartType", "chartWidth?", "colors", "globalMarketCurrency", "portfolioId", "portfolioSource", "scenarioAggregation", "scenarioTypes", "showLegend", "showTitle", "showTooltip", "spacingBottom", "spacingLeft", "spacingRight", "spacingTop", "valuationDatetime", "volatilityCurrency"]
member_groups:
  "Base Widgets": ["instrument?"]
  "Widget Options": ["decimals", "hasContentCallback", "id", "linkChannels", "navButton", "navButtonClicked", "noContentPlaceholder?", "onChanges?", "persistState", "popupContainer?", "resetPopupPosition?", "showSearchWidget", "storageType", "streaming", "useOriginal", "usePerfectScrollbar", "widgetStateCallback", "widgetTitle"]
  "RiskMacroeconomicScenariosWidget": ["chartHeight?", "chartType", "chartWidth?", "colors", "globalMarketCurrency", "portfolioId", "portfolioSource", "scenarioAggregation", "scenarioTypes", "showLegend", "showTitle", "showTooltip", "spacingBottom", "spacingLeft", "spacingRight", "spacingTop", "valuationDatetime", "volatilityCurrency"]
reference_count: 10
references: ["SDK.InfrontSDK.SymbolId", "WTK.WidgetDecimals", "WTK.WidgetNavButtonType", "WTK.WidgetPopupParent", "WTK.WidgetState", "SDK.InfrontSDK.PortfolioRisk.PriipsDataServicesRiskvaluatorMacroeconomicScenariosRequestScenarioAggregation", "WTK.RiskMacroeconomicScenariosWidget", "WTK.SvelteWidgetOptions", "WTK.InfrontWidget", "WTK.ChartType"]
---

# RiskMacroeconomicScenariosWidgetOptions

RiskMacroeconomicScenariosWidgetOptions class extending SvelteSingleInstrumentWidgetBaseOptions class.

Set Options for the RiskMacroeconomicScenariosWidget.

#### See

RiskMacroeconomicScenariosWidget | SvelteWidgetOptions | SvelteSingleInstrumentWidgetBaseOptions

#### Hierarchy

- SvelteSingleInstrumentWidgetBaseOptions

  - RiskMacroeconomicScenariosWidgetOptions

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

### RiskMacroeconomicScenariosWidget

#### `Optional` chartHeight

```ts
chartHeight?: string | number
```

Set the chart height.

##### Default Value

```ts
undefined
```

#### chartType

```ts
chartType: ChartType = 'GLOBAL_MARKET_SCENARIOS'
```

Which simulation data to show in the chart.

Possible values from [ChartType](./WTK.ChartType.md):

- 'GLOBAL_MARKET_SCENARIOS'
- 'LONG_TERM_INTEREST_RATE_SCENARIOS'
- 'SHORT_TERM_INTEREST_RATE_SCENARIOS'
- 'VOLATILITY_SCENARIOS'

##### Default Value

`'GLOBAL_MARKET_BEHAVIOR'`

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
colors: string[]
```

Define colors for the different chart series lines.

Or set colors by css-variable: --wtk-risk-macroeconomic-scenarios-options-color-list
which should define a list of comma-separated colors.

##### Default Value

`'#ED561B', '#FF9F40', '#36A2EB', '#50B432'` - default set by failover

#### globalMarketCurrency

```ts
globalMarketCurrency: string
```

The basket ISO3 currency for the global market economy proxy.

If set to `undefined` the DEFAULT_BASKET_CURRENCY is used.

##### Default Value

`undefined`

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

#### scenarioAggregation

```ts
scenarioAggregation: PriipsDataServicesRiskvaluatorMacroeconomicScenariosRequestScenarioAggregation = 'AVERAGE_PATHS'
```

Scenario Aggregation.

Possible values are defined in ScenarioAggregation:

- 'SINGLE_SCENARIO'
- 'AVERAGE_PATHS'
- 'INTERPOLATE_QUANTILES'

##### Default Value

`'AVERAGE_PATHS'`

#### scenarioTypes

```ts
scenarioTypes: ScenarioType[] = ...
```

Which simulation data to show in the chart.

Possible values from ScenarioType:

- 'STRESS'
- 'PESSIMISTIC'
- 'MODERATE'
- 'OPTIMISTIC'

A value of `undefined` means all scenario types are shown.

##### Default Value

`all scenarios`

#### showLegend

```ts
showLegend: boolean = true
```

Show or hide legend on the chart.

##### Default Value

`true`

#### showTitle

```ts
showTitle: boolean = true
```

Show or hide the widget title.

##### Default Value

`true`

#### showTooltip

```ts
showTooltip: boolean = true
```

Show or hide tooltip on the chart.

##### Default Value

`true`

#### spacingBottom

```ts
spacingBottom: number = 15
```

Spacing from chart to bottom edge of container.

##### Default Value

`15`

#### spacingLeft

```ts
spacingLeft: number = 0
```

Spacing from chart to left edge of container.

##### Default Value

`0`

#### spacingRight

```ts
spacingRight: number = 0
```

Spacing from chart to right edge of container.

##### Default Value

`0`

#### spacingTop

```ts
spacingTop: number = 10
```

Spacing from chart to top edge of container.

##### Default Value

`0`

#### valuationDatetime

```ts
valuationDatetime: Date
```

Timestamp for the portfolio composition valuation.

The default value of `undefined` may change in the future, for now it is not valid!

##### Default Value

`undefined`

#### volatilityCurrency

```ts
volatilityCurrency: string
```

The basket ISO3 currency for the volatility proxy.

If set to `undefined` the default DEFAULT_BASKET_CURRENCY is used.

##### Default Value

`undefined`
