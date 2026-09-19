---
title: "SubSectorSelectWidgetOptions"
qualified_name: "WTK.SubSectorSelectWidgetOptions"
kind: class
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "WTK"
group: "Widget Options"
nav_path: "WTK > Widget Options > SubSectorSelectWidgetOptions"
source_url: "https://docs.infrontfinance.com/docs/classes/WTK.SubSectorSelectWidgetOptions.html"
defines: ["SubSectorSelectWidgetOptions"]
member_count: 47
members: ["instrument?", "decimals", "hasContentCallback", "id", "linkChannels", "navButton", "navButtonClicked", "noContentPlaceholder?", "onChanges?", "persistState", "popupContainer?", "resetPopupPosition?", "showSearchWidget", "storageType", "streaming", "useOriginal", "usePerfectScrollbar", "widgetStateCallback", "widgetTitle", "constructor", "allowNullSelection", "allowParentSectorSelection", "closeOnSelect", "defaultLabel?", "disabled", "dropdownDirection", "filterOnCountryCodes", "filterOnRegionCodes", "filterPlaceholder?", "gicsIndustryCode", "gicsIndustryGroupCode", "gicsSectorCode", "gicsSubIndustryCode", "includeCount", "loadingLabel?", "noneLabel?", "onReady?", "onSectorSelected?", "sectorId", "sectorType", "showArrow", "showCurrentSectorAsLabel", "showFactoryIcon", "showFilter", "showLevel", "showLoadingLabel", "subSectorId"]
member_groups:
  "Base Widgets": ["instrument?"]
  "Widget Options": ["decimals", "hasContentCallback", "id", "linkChannels", "navButton", "navButtonClicked", "noContentPlaceholder?", "onChanges?", "persistState", "popupContainer?", "resetPopupPosition?", "showSearchWidget", "storageType", "streaming", "useOriginal", "usePerfectScrollbar", "widgetStateCallback", "widgetTitle"]
  "Other": ["constructor", "allowNullSelection", "allowParentSectorSelection", "closeOnSelect", "defaultLabel?", "disabled", "dropdownDirection", "filterOnCountryCodes", "filterOnRegionCodes", "filterPlaceholder?", "gicsIndustryCode", "gicsIndustryGroupCode", "gicsSectorCode", "gicsSubIndustryCode", "includeCount", "loadingLabel?", "noneLabel?", "onReady?", "onSectorSelected?", "sectorId", "sectorType", "showArrow", "showCurrentSectorAsLabel", "showFactoryIcon", "showFilter", "showLevel", "showLoadingLabel", "subSectorId"]
reference_count: 8
references: ["SDK.InfrontSDK.SymbolId", "WTK.WidgetDecimals", "WTK.WidgetNavButtonType", "WTK.WidgetPopupParent", "WTK.WidgetState", "WTK.SubSectorSelection", "WTK.SubSectorSelectWidget", "WTK.InfrontWidget"]
---

# SubSectorSelectWidgetOptions

SectorMultiSelectWidgetOptions class extending SubSectorSelectWidget class.

Set Options for the SubSectorSelectWidget.

#### See

SubSectorSelectWidget

#### Hierarchy

- SvelteSingleInstrumentWidgetBaseOptions

  - SubSectorSelectWidgetOptions

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
popupContainer?: string | HTMLElement | WidgetPopupParent = WidgetPopupParent.BODY
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

Overrides SvelteSingleInstrumentWidgetBaseOptions.popupContainer

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
new SubSectorSelectWidgetOptions(
    initOptions?: Partial<SubSectorSelectWidgetOptions>,
): SubSectorSelectWidgetOptions
```

Initializes a new [SubSectorSelectWidgetOptions](#).
You can optionally specify an init object that specifies
a subset of properties to set on the new options object.

##### Parameters

- `Optional` initOptions: Partial<SubSectorSelectWidgetOptions>

  The initial property values to set.

##### Returns SubSectorSelectWidgetOptions

Overrides SvelteSingleInstrumentWidgetBaseOptions.constructor

#### allowNullSelection

```ts
allowNullSelection: boolean = true
```

Indicates whether you have a selection for "all/none", or whether you
need to select a (sub)sector.

##### Default Value

`true`

#### allowParentSectorSelection

```ts
allowParentSectorSelection: boolean = true
```

Indicates whether you can select a sector and not just a sub-sector.

##### Default Value

`true`

#### closeOnSelect

```ts
closeOnSelect: boolean = false
```

Indicates whether the dropdown should close when you select a sector.

##### Default Value

`false`

#### `Optional` defaultLabel

```ts
defaultLabel?: string
```

The default button label to show when the user hasn't selected any particular sector yet.

Defaults to "Industry".

#### disabled

```ts
disabled: boolean = false
```

Sets the widget to a disabled state, where the user can no longer activate it, and the button element is disabled.
Can be toggled via a call to SubSectorSelectWidget.modify.

##### Default Value

`false`.

#### dropdownDirection

```ts
dropdownDirection: "up" | "down" = 'down'
```

Determines the direction of the dropdown when open.

##### Default Value

`down`

#### filterOnCountryCodes

```ts
filterOnCountryCodes: string[] = null
```

Indicates whether you want the sectors to be filtered based on issuer countries.

##### Default Value

`null`

#### filterOnRegionCodes

```ts
filterOnRegionCodes: string[] = null
```

Indicates whether you want the sectors to be filtered based on issuer regions.

##### Default Value

`null`

#### `Optional` filterPlaceholder

```ts
filterPlaceholder?: string
```

The placeholder text to show in the sector name filter text box.

Defaults to "Filter by sector".

#### gicsIndustryCode

```ts
gicsIndustryCode: string = null
```

Which GICS industry to select by default. Do not combine with the other sector options.

##### Default Value

`null`

#### gicsIndustryGroupCode

```ts
gicsIndustryGroupCode: string = null
```

Which GICS industry group to select by default. Do not combine with the other sector options.

##### Default Value

`null`

#### gicsSectorCode

```ts
gicsSectorCode: string = null
```

Which GICS sector to select by default. Do not combine with the other sector options.

##### Default Value

`null`

#### gicsSubIndustryCode

```ts
gicsSubIndustryCode: string = null
```

Which GICS sub industry to select by default. Do not combine with the other sector options.

##### Default Value

`null`

#### includeCount

```ts
includeCount: boolean = false
```

Indicates whether you want to show the number of entities inside the sector together with the sector name.

Note that this count is indicative; choosing listings instead of issuers to display, and the choice
of additional filters can give you different numbers of matches.

##### Default Value

`false`

#### `Optional` loadingLabel

```ts
loadingLabel?: string
```

The button label to show while the sector list is still being loaded.
You can turn this message off by setting [SubSectorSelectWidgetOptions.showLoadingLabel](#showloadinglabel) to `false`.

Defaults to "(loading...)".

#### `Optional` noneLabel

```ts
noneLabel?: string
```

The dropdown item label to unselect the sector.

Defaults to "None".

#### `Optional` onReady

```ts
onReady?: () => void
```

Callback when the widget is ready & the sector list has been loaded.

#### `Optional` onSectorSelected

```ts
onSectorSelected?: (selection: SubSectorSelection) => void
```

Callback for when the user changed the sector selection.

#### sectorId

```ts
sectorId: number = null
```

Which sector to select by default. Do not combine with the other sector options.

##### Default Value

`null`

#### sectorType

```ts
sectorType: "GICS" | "INFRONT" = 'INFRONT'
```

Indicates the sector type to show, either the Infront sectors,
or GICS sectors.

#### showArrow

```ts
showArrow: boolean = false
```

Indicates whether the dropdown button should show an arrow.

##### Default Value

`false`

#### showCurrentSectorAsLabel

```ts
showCurrentSectorAsLabel: boolean = true
```

Indicates whether to show the currently selected sector (if only one sub-sector
or a whole main sector is selected. If set to `false`, [SubSectorSelectWidgetOptions.defaultLabel](#defaultlabel)
is shown instead.

##### Default Value

`true`

#### showFactoryIcon

```ts
showFactoryIcon: boolean = false
```

Indicates whether the dropdown button should show a factory icon.

##### Default Value

`false`

#### showFilter

```ts
showFilter: boolean = true
```

Indicates whether you can filter the sectors via a text box.

##### Default Value

`true`

#### showLevel

```ts
showLevel: boolean = true
```

Indicates whether the dropdown button should show the current sector level when in instrument mode.

##### Default Value

`true`

#### showLoadingLabel

```ts
showLoadingLabel: boolean = true
```

Indicates whether to show a "loading" label on the opener button
while the sector list is still loading, or to use the [SubSectorSelectWidgetOptions.defaultLabel](#defaultlabel)
instead.

##### Default Value

`true`

#### subSectorId

```ts
subSectorId: number = null
```

Which sub-sector to select by default. Do not combine with the other sector options.

##### Default Value

`null`
