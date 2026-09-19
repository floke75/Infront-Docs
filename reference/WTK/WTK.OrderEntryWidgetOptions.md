---
title: "OrderEntryWidgetOptions"
qualified_name: "WTK.OrderEntryWidgetOptions"
kind: class
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "WTK"
group: "Widget Options"
nav_path: "WTK > Widget Options > OrderEntryWidgetOptions"
source_url: "https://docs.infrontfinance.com/docs/classes/WTK.OrderEntryWidgetOptions.html"
defines: ["OrderEntryWidgetOptions"]
member_count: 84
members: ["decimals", "hasContentCallback", "id", "linkChannels", "navButton", "navButtonClicked", "noContentPlaceholder?", "onChanges?", "persistState", "popupContainer?", "resetPopupPosition?", "showSearchWidget", "storageType", "streaming", "useOriginal", "usePerfectScrollbar", "widgetStateCallback", "widgetTitle", "advancedOptionsCallback", "advancedOptionsCreated", "advancedPaneMode", "afterConfirmButtons", "algoId", "algoOrderFieldsSelectionInMain", "autoFillPrice", "autoSelectAfterTab", "availableFeeds", "closeCallback", "closeOnComplete", "compactMode", "confirmation", "customKidMidCalculation", "customKidMidUrlParameter", "disableDeleteOnModify", "enableTickButtons", "fillIndicativePrice", "flexMode", "hiddenCustomFields", "initialPortfolio", "initialPrice", "initialSettlementDate", "initialSettlementType", "initialVolume", "instrument", "instrumentInfoCallback", "keepInstrumentOnNew", "kidLinkDefinition", "layout", "limitOrderFieldsSelectionInMain", "modifyOrderId", "modifyPortfolio", "onBeforeUpdateUI", "onInstrumentChanged", "onInstrumentChanging", "onOrderTypeChanged", "onOrderTypeChanging", "onTranslate", "onValidityChanged", "orderStatusChangeCallback", "overrideAndHideLimitOrderFields", "persistValidityDate", "portfolioChangedCallback", "portfolioMode", "portfolioSelectOptions", "portfolioSelectorMode", "rememberPrice", "rememberVolume", "searchBoxOptions?", "searchTickersOnly", "setMaxDate", "showAlgosInSeparateTab", "showDropdownForSinglePortfolio", "showSettlementTypeDropdown", "sortOrderTypes", "staticOrderTypesConfig", "tabbedTypes", "tabIndexMap", "valueColumns", "verboseConfirmation", "hasInstrument", "clickToLogin", "hasTradingContentCallback", "rememberCanceledLogin", "tradingLoginCallback"]
member_groups:
  "Widget Options": ["decimals", "hasContentCallback", "id", "linkChannels", "navButton", "navButtonClicked", "noContentPlaceholder?", "onChanges?", "persistState", "popupContainer?", "resetPopupPosition?", "showSearchWidget", "storageType", "streaming", "useOriginal", "usePerfectScrollbar", "widgetStateCallback", "widgetTitle"]
  "OrderEntryWidget": ["advancedOptionsCallback", "advancedOptionsCreated", "advancedPaneMode", "afterConfirmButtons", "algoId", "algoOrderFieldsSelectionInMain", "autoFillPrice", "autoSelectAfterTab", "availableFeeds", "closeCallback", "closeOnComplete", "compactMode", "confirmation", "customKidMidCalculation", "customKidMidUrlParameter", "disableDeleteOnModify", "enableTickButtons", "fillIndicativePrice", "flexMode", "hiddenCustomFields", "initialPortfolio", "initialPrice", "initialSettlementDate", "initialSettlementType", "initialVolume", "instrument", "instrumentInfoCallback", "keepInstrumentOnNew", "kidLinkDefinition", "layout", "limitOrderFieldsSelectionInMain", "modifyOrderId", "modifyPortfolio", "onBeforeUpdateUI", "onInstrumentChanged", "onInstrumentChanging", "onOrderTypeChanged", "onOrderTypeChanging", "onTranslate", "onValidityChanged", "orderStatusChangeCallback", "overrideAndHideLimitOrderFields", "persistValidityDate", "portfolioChangedCallback", "portfolioMode", "portfolioSelectOptions", "portfolioSelectorMode", "rememberPrice", "rememberVolume", "searchBoxOptions?", "searchTickersOnly", "setMaxDate", "showAlgosInSeparateTab", "showDropdownForSinglePortfolio", "showSettlementTypeDropdown", "sortOrderTypes", "staticOrderTypesConfig", "tabbedTypes", "tabIndexMap", "valueColumns", "verboseConfirmation", "hasInstrument"]
  "TradingWidget": ["clickToLogin", "hasTradingContentCallback", "rememberCanceledLogin", "tradingLoginCallback"]
related_types: ["WTK.TradingWidgetOptions"]
reference_count: 20
references: ["WTK.WidgetDecimals", "WTK.WidgetNavButtonType", "WTK.WidgetPopupParent", "WTK.WidgetState", "WTK.AdvancedPaneMode", "WTK.OrderEntryButton", "WTK.KidDefinition", "WTK.OrderEntryLayout", "WTK.OrderEntryLimitField", "WTK.OrderEntryState", "WTK.OrderEntryLimitOrderFieldConfig", "WTK.PortfolioSelectMode", "WTK.PortfolioSelectorMode", "WTK.OrderTypeConfig", "WTK.TabIndexMap", "WTK.Field", "WTK.TradingWidgetOptions", "WTK.OrderEntryWidget", "WTK.WidgetOptions", "WTK.InfrontWidget"]
---

# OrderEntryWidgetOptions

OrderEntryWidgetOptions class extending TradingWidgetOptions class.

Set options for the OrderEntryWidget.

#### See

OrderEntryWidget | WidgetOptions | TradingWidgetOptions

#### Hierarchy ([View Summary](../type-hierarchy.md#WTK.OrderEntryWidgetOptions))

- TradingWidgetOptions

  - OrderEntryWidgetOptions

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

Inherited from TradingWidgetOptions.decimals

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

Inherited from TradingWidgetOptions.hasContentCallback

#### id

```ts
id: string = null
```

ID for this widget.

Must be unique for this site, as it is used for session- and persistent state storage.

##### Default Value

`null`

Inherited from TradingWidgetOptions.id

#### linkChannels

```ts
linkChannels: number | number[]
```

If set, auto linking will be enabled on this widget for the specified channels.

##### Default Value

`undefined`

Inherited from TradingWidgetOptions.linkChannels

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

Inherited from TradingWidgetOptions.navButton

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

Inherited from TradingWidgetOptions.navButtonClicked

#### `Optional` noContentPlaceholder

```ts
noContentPlaceholder?: string | HTMLElement
```

The placeholder content to display when there's no content.

##### Default Value

`undefined`

Inherited from TradingWidgetOptions.noContentPlaceholder

#### `Optional` onChanges

```ts
onChanges?: (changes: SimpleChanges) => void
```

Callback invoked whenever one or more options change via [InfrontWidget.modify](./WTK.InfrontWidget.md#modify).

Each key in the SimpleChanges map is the name of a changed property,
with `previousValue` and ` currentValue` available on the entry.

##### Default Value

`undefined`

Inherited from TradingWidgetOptions.onChanges

#### persistState

```ts
persistState: boolean = true
```

Used if implementing persisting storage, set to `false` to prevent storage for this widget.

If `true`, persistence of data through WidgetStorage is enabled.

##### Default Value

`true`

Inherited from TradingWidgetOptions.persistState

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

Inherited from TradingWidgetOptions.popupContainer

#### `Optional` resetPopupPosition

```ts
resetPopupPosition?: boolean
```

When set to `true` there will be no positioning style added to the popup.

##### Default Value

`undefined`

Inherited from TradingWidgetOptions.resetPopupPosition

#### showSearchWidget

```ts
showSearchWidget: boolean = false
```

If `true` it will display a search bar on the top of instrument based widgets.

##### Default Value

`false`

Inherited from TradingWidgetOptions.showSearchWidget

#### storageType

```ts
storageType: any = null
```

Used if implementing persisting storage, can be used to set special storage objects like global storage.

Optional parameter that helps implementors route storage-calls to different targets.

##### Default Value

`null`

Inherited from TradingWidgetOptions.storageType

#### streaming

```ts
streaming: boolean = true
```

Enable / disable streaming of data.

##### Default Value

`true`

Inherited from TradingWidgetOptions.streaming

#### useOriginal

```ts
useOriginal: boolean = false
```

If `true` options object will not be copied before using.

##### Default Value

`false`

Inherited from TradingWidgetOptions.useOriginal

#### usePerfectScrollbar

```ts
usePerfectScrollbar: boolean
```

Enable / disable usage of "Perfect Scrollbar".

##### Default Value

`undefined`

Inherited from TradingWidgetOptions.usePerfectScrollbar

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

Inherited from TradingWidgetOptions.widgetStateCallback

#### widgetTitle

```ts
widgetTitle: string
```

Title shown on the top of the widget. Will work on most widgets, but not all.

It can either be a key for the language-dictionary, or a text you want directly inserted as a header.

Set to `null` to hide title element

##### Default Value

`undefined`

Inherited from TradingWidgetOptions.widgetTitle

### OrderEntryWidget

#### advancedOptionsCallback

```ts
advancedOptionsCallback: (showAdvanced: boolean) => void
```

Function to be called when the [advanced pane mode](#advancedpanemode) is turned on / off.

##### Type Declaration

- (showAdvanced: boolean): void

  ##### Parameters

  - showAdvanced: boolean

  ##### Returns void

##### See

[advancedPaneMode](#advancedpanemode) | [advancedOptionsCreated](#advancedoptionscreated)

##### Default Value

`undefined`

#### advancedOptionsCreated

```ts
advancedOptionsCreated: (element: HTMLElement) => void
```

Callback that is triggered when widget is initialized and returns advanced panel element.

##### Type Declaration

- (element: HTMLElement): void

  ##### Parameters

  - element: HTMLElement

  ##### Returns void

##### See

[advancedPaneMode](#advancedpanemode) | [advancedOptionsCallback](#advancedoptionscallback)

##### Default Value

`undefined`

#### advancedPaneMode

```ts
advancedPaneMode: AdvancedPaneMode = AdvancedPaneMode.toggle
```

Advanced pane mode.

##### See

[AdvancedPaneMode](./WTK.AdvancedPaneMode.md)

##### Default Value

`AdvancedPaneMode.toggle`

#### afterConfirmButtons

```ts
afterConfirmButtons: OrderEntryButton[]
```

After confirm buttons.

##### See

[OrderEntryButton](./WTK.OrderEntryButton.md)

##### Default Value

`undefined`

#### algoId

```ts
algoId: string = ''
```

Optional initial algo.

##### Default Value

`''`

#### algoOrderFieldsSelectionInMain

```ts
algoOrderFieldsSelectionInMain: string[] = undefined
```

Algo order-fields selection in main.

##### Default Value

`undefined`

#### autoFillPrice

```ts
autoFillPrice: boolean = false
```

Auto fill price input when instrument changed after search.

##### Default Value

`false`

#### autoSelectAfterTab

```ts
autoSelectAfterTab: boolean = false
```

Auto-select after tab.

##### Default Value

`false`

#### availableFeeds

```ts
availableFeeds: number[]
```

Optional list of feed numbers to restrict the ticker search to restrict the search to instruments that can be traded.

##### Default Value

`undefined`

#### closeCallback

```ts
closeCallback: () => void
```

Function to be called when the close button is clicked.

##### Type Declaration

- (): void

  ##### Returns void

##### Default Value

`undefined`

#### closeOnComplete

```ts
closeOnComplete: boolean = false
```

Close the order entry widget when the order is inserted.

##### Default Value

`false`

#### compactMode

```ts
compactMode: boolean = false
```

If `true` it will create tabbed order-entry widget.

##### Default Value

`false`

#### confirmation

```ts
confirmation: boolean = true
```

If `true`, let the user review the order data before the order is inserted.

##### Default Value

`true`

#### customKidMidCalculation

```ts
customKidMidCalculation: (feedNu: number, mic: string) => string
```

Callback that is triggered by custom KID mid calculation.

##### Type Declaration

- (feedNu: number, mic: string): string

  ##### Parameters

  - feedNu: number
  - mic: string

  ##### Returns string

##### Default Value

`undefined`

#### customKidMidUrlParameter

```ts
customKidMidUrlParameter: string = null
```

Sets custom KID Mid URL parameter

##### Default Value

`null`

#### disableDeleteOnModify

```ts
disableDeleteOnModify: boolean
```

Disable delete on modify.

##### Default Value

`undefined`

#### enableTickButtons

```ts
enableTickButtons: boolean = false
```

Enable tick buttons.

##### Default Value

`false`

#### fillIndicativePrice

```ts
fillIndicativePrice: boolean = false
```

Using this option will fill the price field with indicative last closing price if the last price is null (for example before market opens).

Works only if [autoFillPrice](#autofillprice) is set to `true`.

##### Default Value

`false`

#### flexMode

```ts
flexMode: boolean = false
```

Enable flex-mode.

##### Default Value

`false`

#### hiddenCustomFields

```ts
hiddenCustomFields: any[]
```

Hidden custom fields.

##### Default Value

`undefined`

#### initialPortfolio

```ts
initialPortfolio: string
```

Initial portfolio.

##### Default Value

`undefined`

#### initialPrice

```ts
initialPrice: any
```

Pre-populate the price field.

##### Default Value

`undefined`

#### initialSettlementDate

```ts
initialSettlementDate: Date = null
```

Pre-populate settlement date.

##### Default Value

`null`

#### initialSettlementType

```ts
initialSettlementType: SettleType = Infront.SettleType.Undefined
```

Pre-populate settlement type.

##### Default Value

`Infront.SettleType.Undefined`

#### initialVolume

```ts
initialVolume: number
```

Pre-populate the volume field.

##### Default Value

`undefined`

#### instrument

```ts
instrument: Instrument
```

Pre-populate ticker field with specified instrument.

##### See

Infront.Instrument

##### Default Value

`undefined`

#### instrumentInfoCallback

```ts
instrumentInfoCallback: (showInstrumentInfo: boolean) => void
```

Function to be called when a symbol search is complete.

##### Type Declaration

- (showInstrumentInfo: boolean): void

  ##### Parameters

  - showInstrumentInfo: boolean

  ##### Returns void

##### Default Value

`undefined`

#### keepInstrumentOnNew

```ts
keepInstrumentOnNew: boolean = true
```

Keeps instrument on new order-entry.

##### Default Value

`false`

#### kidLinkDefinition

```ts
kidLinkDefinition: KidDefinition = null
```

Sets definition of Key Information Document (KIID).

##### See

KidDefinition

##### Default Value

`null`

#### layout

```ts
layout: OrderEntryLayout = OrderEntryLayout.standard
```

Order-entry layout.

##### See

[OrderEntryLayout](./WTK.OrderEntryLayout.md)

##### Default Value

`OrderEntryLayout.standard`

#### limitOrderFieldsSelectionInMain

```ts
limitOrderFieldsSelectionInMain: OrderEntryLimitField[] = undefined
```

Limit order-fields selection in main.

##### See

[OrderEntryLimitField](./WTK.OrderEntryLimitField.md)

##### Default Value

`undefined`

#### modifyOrderId

```ts
modifyOrderId: number = 0
```

Order id of order to modify.

##### Default Value

`0`

#### modifyPortfolio

```ts
modifyPortfolio: string = ''
```

Name of portfolio.

##### Default Value

`''`

#### onBeforeUpdateUI

```ts
onBeforeUpdateUI: (
    instrument: Instrument,
    market: string,
    orderType: string,
    options: OrderEntryWidgetOptions,
) => void
```

Callback fired before updateUI.

##### Type Declaration

- (instrument: Instrument,    market: string,    orderType: string,    options: OrderEntryWidgetOptions,): void

  ##### Parameters

  - instrument: Instrument
  - market: string
  - orderType: string
  - options: OrderEntryWidgetOptions

  ##### Returns void

##### Default Value

`undefined`

#### onInstrumentChanged

```ts
onInstrumentChanged: (instrument: Instrument) => void
```

Callback on instrument changed.

##### Type Declaration

- (instrument: Instrument): void

  ##### Parameters

  - instrument: Instrument

  ##### Returns void

##### Default Value

`undefined`

#### onInstrumentChanging

```ts
onInstrumentChanging: (instrument: Instrument) => void
```

Callback on instrument changing.

##### Type Declaration

- (instrument: Instrument): void

  ##### Parameters

  - instrument: Instrument

  ##### Returns void

##### Default Value

`undefined`

#### onOrderTypeChanged

```ts
onOrderTypeChanged: (order: InsertOrderOptions) => void
```

Callback on order-type changed.

##### Type Declaration

- (order: InsertOrderOptions): void

  ##### Parameters

  - order: InsertOrderOptions

  ##### Returns void

##### Default Value

`undefined`

#### onOrderTypeChanging

```ts
onOrderTypeChanging: (order: InsertOrderOptions) => void
```

Callback on order-type changing.

##### Type Declaration

- (order: InsertOrderOptions): void

  ##### Parameters

  - order: InsertOrderOptions

  ##### Returns void

##### Default Value

`undefined`

#### onTranslate

```ts
onTranslate: (message: string) => string
```

Callback that allows trading messages to be translated before they are displayed.

##### Type Declaration

- (message: string): string

  ##### Parameters

  - message: string

  ##### Returns string

##### Default Value

`undefined`

#### onValidityChanged

```ts
onValidityChanged: (validityType: string) => boolean
```

This method is called when user changes validity.
Return true if the open volume field should be hidden for the selected validity.

##### Type Declaration

- (validityType: string): boolean

  ##### Parameters

  - validityType: string

  ##### Returns boolean

##### Default Value

`undefined`

#### orderStatusChangeCallback

```ts
orderStatusChangeCallback: (state: OrderEntryState) => void
```

Function to be called when order status gets changed in the widget.

Argument state is type enum:

- `OrderEntryState.DATA_ENTRY`
- `OrderEntryState.CONFIRM`
- `OrderEntryState.MODIFY`
- `OrderEntryState.SUCCESS`
- `OrderEntryState.ERROR`
- `OrderEntryState.RISK_ERROR`

##### Type Declaration

- (state: OrderEntryState): void

  ##### Parameters

  - state: [OrderEntryState](./WTK.OrderEntryState.md)

  ##### Returns void

##### See

[OrderEntryState](./WTK.OrderEntryState.md)

##### Default Value

`undefined`

#### overrideAndHideLimitOrderFields

```ts
overrideAndHideLimitOrderFields: (
    OrderEntryLimitOrderFieldConfig
    | OrderEntryLimitField
)[]
```

Override and hide limit-order fields.

##### See

[OrderEntryLimitField](./WTK.OrderEntryLimitField.md) | OrderEntryLimitOrderFieldConfig

##### Default Value

`undefined`

#### persistValidityDate

```ts
persistValidityDate: boolean = false
```

Keeps the validity date value when widget’s options are being modified.

##### Default Value

`false`

#### portfolioChangedCallback

```ts
portfolioChangedCallback: (portfolio: Portfolio) => void
```

Function to be called when the active portfolio is changed.

##### Type Declaration

- (portfolio: Portfolio): void

  ##### Parameters

  - portfolio: Portfolio

  ##### Returns void

##### See

Infront.Portfolio

##### Default Value

`undefined`

#### portfolioMode

```ts
portfolioMode: PortfolioSelectMode = PortfolioSelectMode.select
```

Sets portfolio mode.

Available options are: 'select', 'info', 'hidden'

##### See

[PortfolioSelectMode](./WTK.PortfolioSelectMode.md)

##### Default Value

`'select'`

#### portfolioSelectOptions

```ts
portfolioSelectOptions: PortfolioSelectWidgetOptions = null
```

Defins portfolio select options.

##### Default Value

`null`

#### portfolioSelectorMode

```ts
portfolioSelectorMode: PortfolioSelectorMode = PortfolioSelectorMode.name
```

Sets how to display portfolio in portfolio selector.

Available options are: 'name', 'fullName' and 'nameFullName'

##### See

[PortfolioSelectorMode](./WTK.PortfolioSelectorMode.md)

##### Default Value

`'name'`

#### rememberPrice

```ts
rememberPrice: boolean = false
```

Store locally the value of volume input when instrument changed after search.

##### Default Value

`false`

#### rememberVolume

```ts
rememberVolume: boolean = false
```

Store locally the value of volume input when instrument changed after search.

##### Default Value

`false`

#### `Optional` searchBoxOptions

```ts
searchBoxOptions?: Partial<SearchDetailedOptions>
```

Search-box options.

##### See

SearchDetailedOptions

##### Default Value

`undefined`

#### searchTickersOnly

```ts
searchTickersOnly: boolean = false
```

Restrict symbol search to search only for ticker codes.

##### Default Value

`false`

#### setMaxDate

```ts
setMaxDate: boolean = false
```

Set maximum date.

##### Default Value

`false`

#### showAlgosInSeparateTab

```ts
showAlgosInSeparateTab: boolean = false
```

Swap algos in separate tab.

##### Default Value

`false`

#### showDropdownForSinglePortfolio

```ts
showDropdownForSinglePortfolio: boolean = false
```

When set to `true`, portfolio dropdown will always be displayed, even if user has just a single portfolio.

##### Default Value

`false`

#### showSettlementTypeDropdown

```ts
showSettlementTypeDropdown: boolean = false
```

Shows the Settlement Type Dropdown when set to true.

##### Default Value

`false`

#### sortOrderTypes

```ts
sortOrderTypes: OrderType[] = undefined
```

Allows you to sort order types by specifying it in array. If order type is not specified in the array it will be added to the end of the list.

##### See

Infront.OrderType

##### Default Value

`undefined`

#### staticOrderTypesConfig

```ts
staticOrderTypesConfig: OrderTypeConfig[] = undefined
```

Static order-types configuration.

##### See

[OrderTypeConfig](./WTK.OrderTypeConfig.md)

##### Default Value

`undefined`

#### tabbedTypes

```ts
tabbedTypes: boolean = false
```

Tabbed types.

##### Default Value

`false`

#### tabIndexMap

```ts
tabIndexMap: TabIndexMap = {}
```

Defines values of tabIndex for widget elements.

Available keys and corresponding types:

- `inputSearch: number`
- `inputVolume: number`
- `buttonVolumeUp: number`
- `buttonVolumeDown: number`
- `inputPrice: number`
- `buttonPriceUp: number`
- `buttonPriceDown: number`
- `buttonToggleAdvanced: number`
- `mainSelectPortfolio: number`
- `advancedSelectOrderType: number`
- `advancedSelectStrategy: number`
- `advancedInputDate: number`
- `advancedCheckboxActive: number`
- `advancedButtonActive: number`
- `advancedInputOpenVolume: number`
- `advancedCustomFields: { [key: string]: number}`
- `buttonNew: number`
- `buttonBuy: number`
- `buttonSell: number`
- `buttonModify: number`
- `buttonConfirm: number`
- `buttonCancel: number`
- `buttonDelete: number`
- `buttonClose: number`
- `buttonCustom: number[]`
- `mainButtonActive: number`
- `mainCheckboxActive: number`
- `mainInputOpenVolume: number`
- `mainSelectValidityDate: number`
- `mainSelectValidityTime: number`
- `mainSelectValidityType: number`

##### See

[TabIndexMap](./WTK.TabIndexMap.md)

##### Default Value

`{}`

#### valueColumns

```ts
valueColumns: Field[] = undefined
```

Infront.Value columns.

##### See

Field

##### Default Value

`undefined`

#### verboseConfirmation

```ts
verboseConfirmation: boolean = false
```

When set to `true`, confirm button will have more detailed label indicating
if it is confirmation for buy/sell order when adding new order
and modify buy/modify sell when modifying order.

##### Default Value

`false`

#### hasInstrument

```ts
hasInstrument(): boolean
```

Checks order-entry for containing a valid instrument containing feed and ticker.

##### Returns boolean

### TradingWidget

#### clickToLogin

```ts
clickToLogin: boolean = false
```

Option for deciding if the widget should show the trading Infront.login when clicked on, if the user isn’t Infront.logged in to trading.

##### Default Value

`false`

Inherited from TradingWidgetOptions.clickToLogin

#### hasTradingContentCallback

```ts
hasTradingContentCallback: (hasTradingContent: boolean, item?: any) => void
```

Callback that indicates that trading content has been received.

##### Type Declaration

- (hasTradingContent: boolean, item?: any): void

  ##### Parameters

  - hasTradingContent: boolean
  - `Optional` item: any

  ##### Returns void

##### Default Value

`undefined`

Inherited from TradingWidgetOptions.hasTradingContentCallback

#### rememberCanceledLogin

```ts
rememberCanceledLogin: boolean = false
```

Remembers that Infront.login is canceled, ensures you wont be Infront.logged in

##### Default Value

`false`

Inherited from TradingWidgetOptions.rememberCanceledLogin

#### tradingLoginCallback

```ts
tradingLoginCallback: (didLogin: boolean, item?: any) => void = null
```

Callback that indicates that the user has Infront.logged in to trading.

##### Type Declaration

- (didLogin: boolean, item?: any): void

  ##### Parameters

  - didLogin: boolean
  - `Optional` item: any

  ##### Returns void

##### Default Value

`null`

Inherited from TradingWidgetOptions.tradingLoginCallback
