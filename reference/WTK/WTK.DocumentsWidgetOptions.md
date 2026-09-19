---
title: "DocumentsWidgetOptions"
qualified_name: "WTK.DocumentsWidgetOptions"
kind: class
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "WTK"
group: "Widget Options"
nav_path: "WTK > Widget Options > DocumentsWidgetOptions"
source_url: "https://docs.infrontfinance.com/docs/classes/WTK.DocumentsWidgetOptions.html"
defines: ["DocumentsWidgetOptions"]
member_count: 38
members: ["hasContentCallback", "id", "linkChannels", "navButton", "navButtonClicked", "noContentPlaceholder?", "onChanges?", "persistState", "popupContainer?", "resetPopupPosition?", "showSearchWidget", "storageType", "streaming", "useOriginal", "usePerfectScrollbar", "widgetStateCallback", "widgetTitle", "defaultCountry", "defaultLanguage", "defaultType", "directPrint", "group", "instrument", "limit", "onLoadDocument", "overrideCountryList", "overrideLanguageList", "showCountriesSelector", "showLanguagesSelector", "showOnlyAvailableCountries", "showOnlyAvailableLanguages", "showOnlyAvailableTypes", "showTypesSelector", "tickerInHeader", "useEmbeddedViewer", "content", "decimals", "defaultContent"]
member_groups:
  "Widget Options": ["hasContentCallback", "id", "linkChannels", "navButton", "navButtonClicked", "noContentPlaceholder?", "onChanges?", "persistState", "popupContainer?", "resetPopupPosition?", "showSearchWidget", "storageType", "streaming", "useOriginal", "usePerfectScrollbar", "widgetStateCallback", "widgetTitle"]
  "DocumentsWidget": ["defaultCountry", "defaultLanguage", "defaultType", "directPrint", "group", "instrument", "limit", "onLoadDocument", "overrideCountryList", "overrideLanguageList", "showCountriesSelector", "showLanguagesSelector", "showOnlyAvailableCountries", "showOnlyAvailableLanguages", "showOnlyAvailableTypes", "showTypesSelector", "tickerInHeader", "useEmbeddedViewer"]
  "SingleInstrumentWidget": ["content", "decimals", "defaultContent"]
related_types: ["WTK.SingleInstrumentWidgetOptions"]
reference_count: 9
references: ["WTK.WidgetNavButtonType", "WTK.WidgetPopupParent", "WTK.WidgetState", "SDK.InfrontSDK.DocumentType", "WTK.DocumentsGroup", "WTK.SingleInstrumentWidgetOptions", "WTK.DocumentsWidget", "WTK.WidgetOptions", "WTK.InfrontWidget"]
---

# DocumentsWidgetOptions

DocumentsWidgetOptions class extending SingleInstrumentWidgetOptions class.

Set options for the regulatory documents widget DocumentsWidget.

#### See

DocumentsWidget | WidgetOptions | SingleInstrumentWidgetOptions

#### Hierarchy ([View Summary](../type-hierarchy.md#WTK.DocumentsWidgetOptions))

- SingleInstrumentWidgetOptions

  - DocumentsWidgetOptions

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

### DocumentsWidget

#### defaultCountry

```ts
defaultCountry: string
```

Set the default selected country in country selector.

The value must be alpha2 encoded. For more check [ISO 3166](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)

##### Default Value

`undefined`

#### defaultLanguage

```ts
defaultLanguage: string
```

Set the default selected language in language selector.

The value must be alpha2 encoded. For more check [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes)

##### Default Value

`undefined`

#### defaultType

```ts
defaultType: DocumentType
```

Set the default selected type in types selector.

The value must be of type [InfrontSDK.DocumentType](../SDK/SDK.InfrontSDK.DocumentType.md).

##### Default Value

`undefined`

#### directPrint

```ts
directPrint: boolean = false
```

Download and print the document directly.

##### Default Value

`false`

#### group

```ts
group: DocumentsGroup = DocumentsGroup.None
```

Group the document list by the passed option. By default all groups are collapsed except the default group.

Default group can be adjusted by setting the default option like [defaultCountry](#defaultcountry), [defaultLanguage](#defaultlanguage) or [defaultType](#defaulttype).
If none of the default options are set, first group will be considered as default.

##### See

[DocumentsGroup](./WTK.DocumentsGroup.md)

##### Default Value

`DocumentsGroup.None`

#### instrument

```ts
instrument: Instrument
```

Instrument id to list all available regulatory documents for. This option is required.

##### Default Value

`undefined`

Overrides SingleInstrumentWidgetOptions.instrument

#### limit

```ts
limit: number = 100
```

Number of documents to list.

##### Default Value

`100`

#### onLoadDocument

```ts
onLoadDocument: (link: string, content: string) => void
```

This will be called when clicking on a document in documents list.

##### Type Declaration

- (link: string, content: string): void

  ##### Parameters

  - link: string
  - content: string

  ##### Returns void

##### Remarks

null values will be passed when an error happened while getting the document.

##### Default Value

`undefined`

#### overrideCountryList

```ts
overrideCountryList: CountryInfo[] = ...
```

Use this option to override country list.

If this option is not assigned country selector will be filled with all available countries sorted alphabetically.

##### Remarks

if the option [showOnlyAvailableCountries](#showonlyavailablecountries) is assigned, this option will not have any effect.

##### See

Infront.CountryInfo

##### Default Value

`huge array`

#### overrideLanguageList

```ts
overrideLanguageList: LanguageInfo[] = ...
```

Use this option to override language list

If this option is not assigned language selector will be filled with all available languages sorted alphabetically.

##### Remarks

if the option [showOnlyAvailableLanguages](#showonlyavailablelanguages) is assigned this option will not have any effect.

##### See

Infront.LanguageInfo

##### Default Value

`huge array`

#### showCountriesSelector

```ts
showCountriesSelector: boolean = true
```

Display country selector to filter documents based on selected country.
If this option is off country filter will be ignored.

##### Default Value

`true`

#### showLanguagesSelector

```ts
showLanguagesSelector: boolean = true
```

Display language selector to filter documents based on selected language.
If this option is off language filter will be ignored.

##### Default Value

`true`

#### showOnlyAvailableCountries

```ts
showOnlyAvailableCountries: boolean
```

Fill country selector with available countries only for the selected instrument.

##### Default Value

`undefined`

#### showOnlyAvailableLanguages

```ts
showOnlyAvailableLanguages: boolean
```

Fill language selector with available languages only for the selected instrument.

##### Default Value

`undefined`

#### showOnlyAvailableTypes

```ts
showOnlyAvailableTypes: boolean
```

Fill type selector with available types only for the selected instrument.

##### Default Value

`undefined`

#### showTypesSelector

```ts
showTypesSelector: boolean = false
```

Display document type selector to filter documents based on selected type.
If this option is off type filter will be ignored.

##### Default Value

`false`

#### tickerInHeader

```ts
tickerInHeader: boolean
```

Display ticker in widget title.

##### Default Value

`undefined`

#### useEmbeddedViewer

```ts
useEmbeddedViewer: boolean = true
```

Disable the default document viewer.

Use this option in combination with [onLoadDocument](#onloaddocument) callback.

##### Default Value

`true`

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
