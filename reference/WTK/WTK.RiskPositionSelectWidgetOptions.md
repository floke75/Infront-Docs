---
title: "RiskPositionSelectWidgetOptions"
qualified_name: "WTK.RiskPositionSelectWidgetOptions"
kind: class
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "WTK"
group: "Widget Options"
nav_path: "WTK > Widget Options > RiskPositionSelectWidgetOptions"
source_url: "https://docs.infrontfinance.com/docs/classes/WTK.RiskPositionSelectWidgetOptions.html"
defines: ["RiskPositionSelectWidgetOptions"]
member_count: 31
members: ["instrument?", "decimals", "hasContentCallback", "id", "linkChannels", "navButton", "navButtonClicked", "noContentPlaceholder?", "onChanges?", "persistState", "resetPopupPosition?", "showSearchWidget", "storageType", "streaming", "useOriginal", "usePerfectScrollbar", "widgetStateCallback", "widgetTitle", "constructor", "autoSelectFirstItem", "closeOnSelect", "defaultLabel?", "disabled", "loadingLabel?", "onPositionSelected?", "portfolioId", "portfolioSource", "selectedPositionId", "showArrow", "showLoadingLabel", "showSelectedAsLabel"]
member_groups:
  "Base Widgets": ["instrument?"]
  "Widget Options": ["decimals", "hasContentCallback", "id", "linkChannels", "navButton", "navButtonClicked", "noContentPlaceholder?", "onChanges?", "persistState", "resetPopupPosition?", "showSearchWidget", "storageType", "streaming", "useOriginal", "usePerfectScrollbar", "widgetStateCallback", "widgetTitle"]
  "Other": ["constructor"]
  "RiskPositionSelectWidget": ["autoSelectFirstItem", "closeOnSelect", "defaultLabel?", "disabled", "loadingLabel?", "onPositionSelected?", "portfolioId", "portfolioSource", "selectedPositionId", "showArrow", "showLoadingLabel", "showSelectedAsLabel"]
reference_count: 9
references: ["SDK.InfrontSDK.SymbolId", "WTK.WidgetDecimals", "WTK.WidgetNavButtonType", "WTK.WidgetState", "SDK.InfrontSDK.PortfolioRisk.RiskListPosition", "WTK.RiskPositionSelectWidget", "WTK.SvelteWidgetOptions", "WTK.InfrontWidget", "SDK.InfrontSDK.PortfolioRisk.RiskClientInfo"]
---

# RiskPositionSelectWidgetOptions

RiskPositionSelectWidgetOptions class extending SvelteSingleInstrumentWidgetBaseOptions class.

Set Options for the RiskPositionSelectWidget.

#### See

RiskPositionSelectWidget | SvelteWidgetOptions

#### Hierarchy

- SvelteSingleInstrumentWidgetBaseOptions

  - RiskPositionSelectWidgetOptions

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

### Other

#### constructor

```ts
new RiskPositionSelectWidgetOptions(
    initOptions?: Partial<RiskPositionSelectWidgetOptions>,
): RiskPositionSelectWidgetOptions
```

Initializes a new [RiskPositionSelectWidgetOptions](#).
You can optionally specify an init object that specifies
a subset of properties to set on the new options object.

##### Parameters

- `Optional` initOptions: Partial<RiskPositionSelectWidgetOptions>

  The initial property values to set.

##### Returns RiskPositionSelectWidgetOptions

Overrides SvelteSingleInstrumentWidgetBaseOptions.constructor

### RiskPositionSelectWidget

#### autoSelectFirstItem

```ts
autoSelectFirstItem: boolean = false
```

If set to `true` and no position has been selected, the first position in the dropdown list will be selected.

##### Default Value

`false`

#### closeOnSelect

```ts
closeOnSelect: boolean = false
```

Indicates whether the dropdown should close when you select a portfolio.

##### Default Value

`false`

#### `Optional` defaultLabel

```ts
defaultLabel?: string
```

The default button label to show when the user hasn't selected any particular portfolio yet.

Defaults to "Select portfolio".

#### disabled

```ts
disabled: boolean = false
```

Sets the widget to a disabled state, where the user can no longer activate it, and the button element is disabled.
Can be toggled via a call to `RiskPositionSelectWidget`'s ` modify()` call.

##### Default Value

`false`

#### `Optional` loadingLabel

```ts
loadingLabel?: string
```

The button label to show while the portfolio list is still being loaded.
You can turn this message off by setting [RiskPositionSelectWidgetOptions.showLoadingLabel](#showloadinglabel) to `false`.

Defaults to "(loading...)".

#### `Optional` onPositionSelected

```ts
onPositionSelected?: (position: RiskListPosition) => void
```

Called when a portfolio selection changes, and on initial load to notify
of the current selected portfolio.

#### portfolioId

```ts
portfolioId: string | number
```

Identifier for the portfolio.

##### Default Value

`undefined`

#### portfolioSource

```ts
portfolioSource: string = 'wtk'
```

Sets the portfolio-source as required by risk-backend [InfrontSDK.PortfolioRisk.RiskClientInfo](../SDK/SDK.InfrontSDK.PortfolioRisk.RiskClientInfo.md).

A corresponding provider must be configured in `new Infront.UI(options);` like this:

```typescript
portfolioRiskProviders: {
    wtk: new InfrontSDK.PortfolioRisk.PortfolioRiskWtkProvider(),
    mock: new InfrontSDK.PortfolioRisk.PortfolioRiskMockProvider(),
},
```

##### Default Value

`'wtk'`

#### selectedPositionId

```ts
selectedPositionId: string | number
```

Sets the positionId (as defined in the hosting application!) that should be selected by default.

##### Default Value

`undefined`

#### showArrow

```ts
showArrow: boolean = false
```

Indicates whether the dropdown button should show an arrow.

##### Default Value

`false`

#### showLoadingLabel

```ts
showLoadingLabel: boolean = true
```

Indicates whether to show a "loading" label on the opener button
while the portfolio list is still loading, or to use the [RiskPositionSelectWidgetOptions.defaultLabel](#defaultlabel)
instead.

##### Default Value

`true`

#### showSelectedAsLabel

```ts
showSelectedAsLabel: boolean = true
```

Indicates whether to show the currently selected portfolio. If set to `false`,
[RiskPositionSelectWidgetOptions.defaultLabel](#defaultlabel)
is shown instead.

##### Default Value

`true`
