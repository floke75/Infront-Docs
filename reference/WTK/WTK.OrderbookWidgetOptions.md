---
title: "OrderbookWidgetOptions"
qualified_name: "WTK.OrderbookWidgetOptions"
kind: class
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "WTK"
group: "Widget Options"
nav_path: "WTK > Widget Options > OrderbookWidgetOptions"
source_url: "https://docs.infrontfinance.com/docs/classes/WTK.OrderbookWidgetOptions.html"
defines: ["OrderbookWidgetOptions"]
member_count: 33
members: ["hasContentCallback", "id", "linkChannels", "navButton", "navButtonClicked", "noContentPlaceholder?", "onChanges?", "persistState", "popupContainer?", "resetPopupPosition?", "showSearchWidget", "storageType", "useOriginal", "usePerfectScrollbar", "widgetStateCallback", "widgetTitle", "hideOrders", "highlightCrossedPrices", "layout", "levels", "onPriceClick", "onPriceInstrumentClick", "onTickerClick", "showFooter", "showMarket", "streaming", "titleSettings", "volumeBarHeight", "volumeBarLayout", "content", "decimals", "defaultContent", "instrument"]
member_groups:
  "Widget Options": ["hasContentCallback", "id", "linkChannels", "navButton", "navButtonClicked", "noContentPlaceholder?", "onChanges?", "persistState", "popupContainer?", "resetPopupPosition?", "showSearchWidget", "storageType", "useOriginal", "usePerfectScrollbar", "widgetStateCallback", "widgetTitle"]
  "OrderbookWidget": ["hideOrders", "highlightCrossedPrices", "layout", "levels", "onPriceClick", "onPriceInstrumentClick", "onTickerClick", "showFooter", "showMarket", "streaming", "titleSettings", "volumeBarHeight", "volumeBarLayout"]
  "SingleInstrumentWidget": ["content", "decimals", "defaultContent", "instrument"]
related_types: ["WTK.SingleInstrumentWidgetOptions"]
reference_count: 10
references: ["WTK.WidgetNavButtonType", "WTK.WidgetPopupParent", "WTK.WidgetState", "WTK.OrderbookRowLayout", "WTK.OrderBookTitleSettings", "WTK.OrderbookVolumeBarLayout", "WTK.SingleInstrumentWidgetOptions", "WTK.OrderbookWidget", "WTK.WidgetOptions", "WTK.InfrontWidget"]
---

# OrderbookWidgetOptions

OrderbookWidgetOptions class extending SingleInstrumentWidgetOptions class.

Set options for the OrderbookWidget.

#### See

OrderbookWidget | WidgetOptions | SingleInstrumentWidgetOptions

#### Hierarchy ([View Summary](../type-hierarchy.md#WTK.OrderbookWidgetOptions))

- SingleInstrumentWidgetOptions

  - OrderbookWidgetOptions

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

### OrderbookWidget

#### hideOrders

```ts
hideOrders: boolean
```

Hides the "Orders" column.

##### Default Value

`false`

#### highlightCrossedPrices

```ts
highlightCrossedPrices: boolean = false
```

Use this option to highlight crossed prices. This will differentiate between normal crossing and crossing during auction.

User these css variables to customize the colors:
--wtk-order-book-crossing-background-color
--wtk-order-book-auction-background-color

##### Default Value

`false`

#### layout

```ts
layout: OrderbookRowLayout = OrderbookRowLayout.WIDE
```

Sets the type of layout you want for the orderbook rows.

##### See

[OrderbookRowLayout](./WTK.OrderbookRowLayout.md)

##### Default Value

`Infront.OrderbookRowLayout.WIDE`

#### levels

```ts
levels: number = 5
```

The number of rows you want to show in the orderbook.

##### Default Value

`5`

#### onPriceClick

```ts
onPriceClick: (price: number, orderType: string) => void
```

A callback to that will be called when a number in the price-column is clicked.

It is passed the two arguments `price(number)` and ` orderType(string)`.

orderType can be one of:

- `InfrontConstants.OrderType.BID`
- `InfrontConstants.OrderType.ASK`

##### Type Declaration

- (price: number, orderType: string): void

  ##### Parameters

  - price: number
  - orderType: string

  ##### Returns void

##### Default Value

`undefined`

#### onPriceInstrumentClick

```ts
onPriceInstrumentClick: (
    price: number,
    orderType: string,
    instrument: Instrument,
) => void
```

Callback that is triggered when instrument price is clicked.

##### Type Declaration

- (price: number, orderType: string, instrument: Instrument): void

  ##### Parameters

  - price: number
  - orderType: string
  - instrument: Instrument

  ##### Returns void

##### Default Value

`undefined`

#### onTickerClick

```ts
onTickerClick: (instrument: Instrument) => void
```

Callback that is triggered when ticker is clicked.

##### Type Declaration

- (instrument: Instrument): void

  ##### Parameters

  - instrument: Instrument

  ##### Returns void

##### Default Value

`undefined`

#### showFooter

```ts
showFooter: boolean = false
```

Use this option to display footer row that contains total information like Bid/Ask ratio and spread.

##### Default Value

`false`

#### showMarket

```ts
showMarket: boolean = false
```

Use this option to display market.

##### Default Value

`false`

#### streaming

```ts
streaming: boolean = true
```

If enabled, broadcasts data to the widget.

##### Default Value

`true`

Overrides SingleInstrumentWidgetOptions.streaming

#### titleSettings

```ts
titleSettings: OrderBookTitleSettings = ...
```

Use this option to customize orderbook title.

##### Example

```ts
`{ showTicker: [boolean], showAbsoluteChange: [boolean], showPctChange: [boolean] }`
```

##### See

OrderBookTitleSettings

##### Default Value

`new OrderBookTitleSettings()`

#### volumeBarHeight

```ts
volumeBarHeight: string = '12px'
```

Sets the height of the order bar. Requires a value and a unit, eg `'15px'`.

##### Default Value

`'12px'` (compact layout) or `70%` (wide layout)

#### volumeBarLayout

```ts
volumeBarLayout: OrderbookVolumeBarLayout = OrderbookVolumeBarLayout.BackgroundImage
```

Decides how the bars in the orderbook will be rendered in the DOM.

If HtmlElement is used, the bars will be rendered as HTMLDivElement with position absolute.

If BackgroundImage is used, then the bars will be rendered as background-image through css.

##### See

[OrderbookVolumeBarLayout](./WTK.OrderbookVolumeBarLayout.md)

##### Default Value

`OrderbookVolumeBarLayout.BackgroundImage`

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
