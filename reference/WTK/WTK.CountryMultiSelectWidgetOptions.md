---
title: "CountryMultiSelectWidgetOptions"
qualified_name: "WTK.CountryMultiSelectWidgetOptions"
kind: class
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "WTK"
group: "Widget Options"
nav_path: "WTK > Widget Options > CountryMultiSelectWidgetOptions"
source_url: "https://docs.infrontfinance.com/docs/classes/WTK.CountryMultiSelectWidgetOptions.html"
defines: ["CountryMultiSelectWidgetOptions"]
member_count: 40
members: ["decimals", "hasContentCallback", "id", "linkChannels", "navButton", "navButtonClicked", "noContentPlaceholder?", "onChanges?", "persistState", "popupContainer?", "resetPopupPosition?", "showSearchWidget", "storageType", "streaming", "useOriginal", "usePerfectScrollbar", "widgetStateCallback", "widgetTitle", "constructor", "allSelectionLabel?", "companySource", "countryCodes", "defaultLabel?", "disabled", "equitySource", "filterPlaceholder?", "grouping", "hasCompanyData", "limitToCountryCodes", "loadingLabel?", "multipleSelectionLabel?", "onCountriesSelected?", "onReady?", "pinnedCountryCodes", "showArrow", "showCurrentCountryAsLabel", "showFlagIcon", "showLoadingLabel", "singleSelectionLabel?", "source"]
member_groups:
  "Widget Options": ["decimals", "hasContentCallback", "id", "linkChannels", "navButton", "navButtonClicked", "noContentPlaceholder?", "onChanges?", "persistState", "popupContainer?", "resetPopupPosition?", "showSearchWidget", "storageType", "streaming", "useOriginal", "usePerfectScrollbar", "widgetStateCallback", "widgetTitle"]
  "Other": ["constructor", "allSelectionLabel?", "companySource", "countryCodes", "defaultLabel?", "disabled", "equitySource", "filterPlaceholder?", "grouping", "hasCompanyData", "limitToCountryCodes", "loadingLabel?", "multipleSelectionLabel?", "onCountriesSelected?", "onReady?", "pinnedCountryCodes", "showArrow", "showCurrentCountryAsLabel", "showFlagIcon", "showLoadingLabel", "singleSelectionLabel?", "source"]
related_types: ["WTK.SvelteWidgetOptions"]
reference_count: 9
references: ["WTK.WidgetDecimals", "WTK.WidgetNavButtonType", "WTK.WidgetPopupParent", "WTK.WidgetState", "SDK.InfrontSDK.CoreDataAPI.CdapiGetEquityCountriesOptionsCompanySource", "SDK.InfrontSDK.CoreDataAPI.CdapiGetEquityCountriesOptionsEquitySource", "WTK.CountryMultiSelectWidget", "WTK.SvelteWidgetOptions", "WTK.InfrontWidget"]
---

# CountryMultiSelectWidgetOptions

CountryMultiSelectWidgetOptions class extending CountryMultiSelectWidget class.

Set Options for the CountryMultiSelectWidget.

#### See

CountryMultiSelectWidget

#### Hierarchy ([View Summary](../type-hierarchy.md#WTK.CountryMultiSelectWidgetOptions))

- SvelteWidgetOptions

  - CountryMultiSelectWidgetOptions

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

Inherited from SvelteWidgetOptions.decimals

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

Inherited from SvelteWidgetOptions.hasContentCallback

#### id

```ts
id: string = null
```

ID for this widget.

Must be unique for this site, as it is used for session- and persistent state storage.

##### Default Value

`null`

Inherited from SvelteWidgetOptions.id

#### linkChannels

```ts
linkChannels: number | number[]
```

If set, auto linking will be enabled on this widget for the specified channels.

##### Default Value

`undefined`

Inherited from SvelteWidgetOptions.linkChannels

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

Inherited from SvelteWidgetOptions.navButton

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

Inherited from SvelteWidgetOptions.navButtonClicked

#### `Optional` noContentPlaceholder

```ts
noContentPlaceholder?: string | HTMLElement
```

The placeholder content to display when there's no content.

##### Default Value

`undefined`

Inherited from SvelteWidgetOptions.noContentPlaceholder

#### `Optional` onChanges

```ts
onChanges?: (changes: SimpleChanges) => void
```

Callback invoked whenever one or more options change via [InfrontWidget.modify](./WTK.InfrontWidget.md#modify).

Each key in the SimpleChanges map is the name of a changed property,
with `previousValue` and ` currentValue` available on the entry.

##### Default Value

`undefined`

Inherited from SvelteWidgetOptions.onChanges

#### persistState

```ts
persistState: boolean = true
```

Used if implementing persisting storage, set to `false` to prevent storage for this widget.

If `true`, persistence of data through WidgetStorage is enabled.

##### Default Value

`true`

Inherited from SvelteWidgetOptions.persistState

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

Overrides SvelteWidgetOptions.popupContainer

#### `Optional` resetPopupPosition

```ts
resetPopupPosition?: boolean
```

When set to `true` there will be no positioning style added to the popup.

##### Default Value

`undefined`

Inherited from SvelteWidgetOptions.resetPopupPosition

#### showSearchWidget

```ts
showSearchWidget: boolean = false
```

If `true` it will display a search bar on the top of instrument based widgets.

##### Default Value

`false`

Inherited from SvelteWidgetOptions.showSearchWidget

#### storageType

```ts
storageType: any = null
```

Used if implementing persisting storage, can be used to set special storage objects like global storage.

Optional parameter that helps implementors route storage-calls to different targets.

##### Default Value

`null`

Inherited from SvelteWidgetOptions.storageType

#### streaming

```ts
streaming: boolean = true
```

Enable / disable streaming of data.

##### Default Value

`true`

Inherited from SvelteWidgetOptions.streaming

#### useOriginal

```ts
useOriginal: boolean = false
```

If `true` options object will not be copied before using.

##### Default Value

`false`

Inherited from SvelteWidgetOptions.useOriginal

#### usePerfectScrollbar

```ts
usePerfectScrollbar: boolean
```

Enable / disable usage of "Perfect Scrollbar".

##### Default Value

`undefined`

Inherited from SvelteWidgetOptions.usePerfectScrollbar

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

Inherited from SvelteWidgetOptions.widgetStateCallback

#### widgetTitle

```ts
widgetTitle: string
```

Title shown on the top of the widget. Will work on most widgets, but not all.

It can either be a key for the language-dictionary, or a text you want directly inserted as a header.

Set to `null` to hide title element

##### Default Value

`undefined`

Inherited from SvelteWidgetOptions.widgetTitle

### Other

#### constructor

```ts
new CountryMultiSelectWidgetOptions(
    initOptions?: Partial<CountryMultiSelectWidgetOptions>,
): CountryMultiSelectWidgetOptions
```

Initializes a new [CountryMultiSelectWidgetOptions](#).
You can optionally specify an init object that specifies
a subset of properties to set on the new options object.

##### Parameters

- `Optional` initOptions: Partial<CountryMultiSelectWidgetOptions>

  The initial property values to set.

##### Returns CountryMultiSelectWidgetOptions

Overrides SvelteWidgetOptions.constructor

#### `Optional` allSelectionLabel

```ts
allSelectionLabel?: string
```

The button label to show when the user has selected all countries.

Defaults to "All countries".

#### companySource

```ts
companySource: CdapiGetEquityCountriesOptionsCompanySource = 'INFRONT'
```

Indicates whether only countries for countries with company data coverage of a specific source.

Not used for source `BUILTIN`.

##### Default Value

`INFRONT`

#### countryCodes

```ts
countryCodes: string[] = null
```

Which countries to select by default; should be one or more ISO 2-letter country codes.

#### `Optional` defaultLabel

```ts
defaultLabel?: string
```

The default button label to show when the user hasn't selected any particular country yet.

Defaults to "Country".

#### disabled

```ts
disabled: boolean = false
```

Sets the widget to a disabled state, where the user can no longer activate it, and the button element is disabled.
Can be toggled via a call to CountryMultiSelectWidget.modify.

##### Default Value

`false`.

#### equitySource

```ts
equitySource: CdapiGetEquityCountriesOptionsEquitySource = 'SOURCE_UNSPECIFIED'
```

The source for equity data.

Not used for source `BUILTIN`.

##### Default Value

`'SOURCE_UNSPECIFIED'`

#### `Optional` filterPlaceholder

```ts
filterPlaceholder?: string
```

The placeholder text to show in the country name filter text box.

Defaults to "Filter by country".

#### grouping

```ts
grouping: CountryGrouping = 'UNGROUPED'
```

Indicates how the countries should be grouped.

##### Default Value

`'UNGROUPED'`

#### hasCompanyData

```ts
hasCompanyData: boolean = false
```

Indicates whether only countries for countries with company data coverage are returned.

Not used for source `BUILTIN`.

##### Default Value

`false`

#### limitToCountryCodes

```ts
limitToCountryCodes: string[] = null
```

Limit the list of country codes to the ones specified.

#### `Optional` loadingLabel

```ts
loadingLabel?: string
```

The button label to show while the country list is still being loaded.
You can turn this message off by setting [CountryMultiSelectWidgetOptions.showLoadingLabel](#showloadinglabel) to `false`.

Defaults to "(loading...)".

#### `Optional` multipleSelectionLabel

```ts
multipleSelectionLabel?: string
```

The button label to show when the user has selected more than one, but not all countries.

Defaults to "Multiple countries".

#### `Optional` onCountriesSelected

```ts
onCountriesSelected?: (selection: string[]) => void
```

Callback for when the user changed the country selection, or when the
supplied list of countries contains invalid codes or codes that are not all upper case

- in which case you get an updated list with the invalid codes removed, and
  the lower case country codes turned into upper case.

#### `Optional` onReady

```ts
onReady?: () => void
```

Callback when the widget is ready & the country has been loaded.

#### pinnedCountryCodes

```ts
pinnedCountryCodes: string[] = null
```

A list of countries that should always be shown at the top, and not sorted alphabetically.

#### showArrow

```ts
showArrow: boolean = false
```

Indicates whether the dropdown button should show an arrow.

##### Default Value

`false`

#### showCurrentCountryAsLabel

```ts
showCurrentCountryAsLabel: boolean = true
```

Indicates whether to show th currently selected country. If set to `false`,
[CountryMultiSelectWidgetOptions.singleSelectionLabel](#singleselectionlabel) is shown instead.

##### Default Value

`true`

#### showFlagIcon

```ts
showFlagIcon: boolean = false
```

Indicates whether the dropdown button should show a flag icon.

##### Default Value

`false`

#### showLoadingLabel

```ts
showLoadingLabel: boolean = true
```

Indicates whether to show a "loading" label on the opener button
while the country list is still loading, or to use the [CountryMultiSelectWidgetOptions.defaultLabel](#defaultlabel)
instead.

##### Default Value

`true`

#### `Optional` singleSelectionLabel

```ts
singleSelectionLabel?: string
```

The button label to show when the user has selected exactly one country, and
[CountryMultiSelectWidgetOptions.showCurrentCountryAsLabel](#showcurrentcountryaslabel) is set to `false`.

Defaults to "Single country".

#### source

```ts
source: CountrySelectSource = 'BUILTIN'
```

Indicates which source to use for countries.

##### Default Value

`BUILTIN`
