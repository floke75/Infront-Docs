---
title: "IntradayTradesSimpleWidgetOptions"
qualified_name: "WTK.IntradayTradesSimpleWidgetOptions"
kind: class
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "WTK"
group: "Widget Options"
nav_path: "WTK > Widget Options > IntradayTradesSimpleWidgetOptions"
source_url: "https://docs.infrontfinance.com/docs/classes/WTK.IntradayTradesSimpleWidgetOptions.html"
defines: ["IntradayTradesSimpleWidgetOptions"]
member_count: 30
members: ["hasContentCallback", "id", "linkChannels", "navButton", "navButtonClicked", "noContentPlaceholder?", "onChanges?", "persistState", "popupContainer?", "resetPopupPosition?", "showSearchWidget", "storageType", "streaming", "useOriginal", "usePerfectScrollbar", "widgetStateCallback", "widgetTitle", "onPriceClick", "onPriceInstrumentClick", "onTickerClick", "pageItems", "showBuyerAndSeller", "showColumnsHeaders", "showMarket", "showTradeValue", "tickerInHeader", "content", "decimals", "defaultContent", "instrument"]
member_groups:
  "Widget Options": ["hasContentCallback", "id", "linkChannels", "navButton", "navButtonClicked", "noContentPlaceholder?", "onChanges?", "persistState", "popupContainer?", "resetPopupPosition?", "showSearchWidget", "storageType", "streaming", "useOriginal", "usePerfectScrollbar", "widgetStateCallback", "widgetTitle"]
  "IntradayTradesSimpleWidget": ["onPriceClick", "onPriceInstrumentClick", "onTickerClick", "pageItems", "showBuyerAndSeller", "showColumnsHeaders", "showMarket", "showTradeValue", "tickerInHeader"]
  "SingleInstrumentWidget": ["content", "decimals", "defaultContent", "instrument"]
related_types: ["WTK.SingleInstrumentWidgetOptions"]
reference_count: 7
references: ["WTK.WidgetNavButtonType", "WTK.WidgetPopupParent", "WTK.WidgetState", "WTK.SingleInstrumentWidgetOptions", "WTK.IntradayTradesSimpleWidget", "WTK.WidgetOptions", "WTK.InfrontWidget"]
---

# IntradayTradesSimpleWidgetOptions

IntradayTradesSimpleWidgetOptions class extending SingleInstrumentWidgetOptions class.

Set options for the IntradayTradesSimpleWidget.

#### See

IntradayTradesSimpleWidget | WidgetOptions | SingleInstrumentWidgetOptions

#### Hierarchy ([View Summary](../type-hierarchy.md#WTK.IntradayTradesSimpleWidgetOptions))

- SingleInstrumentWidgetOptions

  - IntradayTradesSimpleWidgetOptions

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

### IntradayTradesSimpleWidget

#### onPriceClick

```ts
onPriceClick: (price: number) => void
```

A callback to that will be called when a number in price-column is clicked.

It passes one argument: price(number).

##### Type Declaration

- (price: number): void

  ##### Parameters

  - price: number

  ##### Returns void

##### Default Value

`undefined`

#### onPriceInstrumentClick

```ts
onPriceInstrumentClick: (price: number, instrument: Instrument) => void
```

A callback to that will be called when a number in price-column is clicked.

It passes two arguments: price(number) and instrument(Infront.Instrument).

##### Type Declaration

- (price: number, instrument: Instrument): void

  ##### Parameters

  - price: number
  - instrument: Instrument

  ##### Returns void

##### Default Value

`undefined`

#### onTickerClick

```ts
onTickerClick: (instrument: Instrument) => void
```

A callback to that will be called when title is clicked.

It passes the current instrument(Infront.Instrument).

##### Type Declaration

- (instrument: Instrument): void

  ##### Parameters

  - instrument: Instrument

  ##### Returns void

##### Default Value

`undefined`

#### pageItems

```ts
pageItems: number = 5
```

Sets how many trades that are shown for the instrument.

##### Default Value

`5`

#### showBuyerAndSeller

```ts
showBuyerAndSeller: boolean = true
```

Set this to true to show buyer and seller.

##### Default Value

`true`

#### showColumnsHeaders

```ts
showColumnsHeaders: boolean = true
```

Set this to true to show the columns headers.

##### Default Value

`true`

#### showMarket

```ts
showMarket: boolean = false
```

Set this to true to show market.

##### Default Value

`false`

#### showTradeValue

```ts
showTradeValue: boolean = false
```

Set this to true to show calculated value.

##### Default Value

`false`

#### tickerInHeader

```ts
tickerInHeader: boolean
```

Sets whether the instrument is going to be shown in the title or not.

##### Default Value

`undefined`

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
