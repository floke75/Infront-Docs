---
title: "AnalyticsTemplatesWidgetOptions"
qualified_name: "WTK.AnalyticsTemplatesWidgetOptions"
kind: class
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "WTK"
group: "Widget Options"
nav_path: "WTK > Widget Options > AnalyticsTemplatesWidgetOptions"
source_url: "https://docs.infrontfinance.com/docs/classes/WTK.AnalyticsTemplatesWidgetOptions.html"
defines: ["AnalyticsTemplatesWidgetOptions"]
member_count: 37
members: ["decimals", "hasContentCallback", "id", "linkChannels", "navButton", "navButtonClicked", "noContentPlaceholder?", "onChanges?", "persistState", "popupContainer?", "resetPopupPosition?", "showSearchWidget", "storageType", "streaming", "useOriginal", "usePerfectScrollbar", "widgetStateCallback", "widgetTitle", "estimatesSource", "favoriteTemplateIds?", "handleCreateBlankTemplate?", "handlePersonalTemplateDelete?", "handlePersonalTemplateEdit?", "handleSaveAsCopy?", "handleTemporaryTemplate?", "isCreateTemplateAllowed", "isDeletePersonalTemplateAllowed", "isEditPersonalTemplateAllowed", "isSaveAsCopyAllowed", "isTempTemplateAllowed", "onFavoriteTemplatesChange?", "onTemplateSelected?", "personalTemplates?", "selectedTemplate?", "showPersonalTemplates", "showTemplatesButtons", "templateType"]
member_groups:
  "Widget Options": ["decimals", "hasContentCallback", "id", "linkChannels", "navButton", "navButtonClicked", "noContentPlaceholder?", "onChanges?", "persistState", "popupContainer?", "resetPopupPosition?", "showSearchWidget", "storageType", "streaming", "useOriginal", "usePerfectScrollbar", "widgetStateCallback", "widgetTitle"]
  "AnalyticsTemplatesWidget": ["estimatesSource", "favoriteTemplateIds?", "handleCreateBlankTemplate?", "handlePersonalTemplateDelete?", "handlePersonalTemplateEdit?", "handleSaveAsCopy?", "handleTemporaryTemplate?", "isCreateTemplateAllowed", "isDeletePersonalTemplateAllowed", "isEditPersonalTemplateAllowed", "isSaveAsCopyAllowed", "isTempTemplateAllowed", "onFavoriteTemplatesChange?", "onTemplateSelected?", "personalTemplates?", "selectedTemplate?", "showPersonalTemplates", "showTemplatesButtons", "templateType"]
related_types: ["WTK.SvelteWidgetOptions"]
reference_count: 8
references: ["WTK.WidgetDecimals", "WTK.WidgetNavButtonType", "WTK.WidgetPopupParent", "WTK.WidgetState", "SDK.InfrontSDK.CoreDataAPI.CdapiEquityCompanyEstimateSource", "WTK.SvelteWidgetOptions", "WTK.AnalyticsTemplatesWidget", "WTK.InfrontWidget"]
---

# AnalyticsTemplatesWidgetOptions

AnalyticsTemplatesWidgetOptions class extending SvelteWidgetOptions class.

Set Options for the AnalyticsTemplatesWidget.

#### See

AnalyticsTemplatesWidget | SvelteWidgetOptions

#### Hierarchy ([View Summary](../type-hierarchy.md#WTK.AnalyticsTemplatesWidgetOptions))

- SvelteWidgetOptions

  - AnalyticsTemplatesWidgetOptions

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

Inherited from SvelteWidgetOptions.popupContainer

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

### AnalyticsTemplatesWidget

#### estimatesSource

```ts
estimatesSource: CdapiEquityCompanyEstimateSource = 'SOURCE_UNSPECIFIED'
```

Set to estimates source if the templates can contain estimates columns.

##### Default Value

`SOURCE_UNSPECIFIED`

#### `Optional` favoriteTemplateIds

```ts
favoriteTemplateIds?: FavoriteTemplateIds
```

List of favorite template IDs. Favorite templates are also shown as buttons next to the dropdown.
IDs have to match the IDs of the templates provided in the `personalTemplates` property.

#### `Optional` handleCreateBlankTemplate

```ts
handleCreateBlankTemplate?: () => void
```

Callback that is called when the user wants to create a new template.
Create a new template has to be handled by the implementer.

##### Default Value

`undefined`

#### `Optional` handlePersonalTemplateDelete

```ts
handlePersonalTemplateDelete?: (template: AnalyticsTemplate) => void
```

Callback that is called when the user wants to delete a template.
Template delete has to be handled by the implementer.

##### Default Value

`undefined`

#### `Optional` handlePersonalTemplateEdit

```ts
handlePersonalTemplateEdit?: (template: AnalyticsTemplate) => void
```

Callback that is called when the user wants to edit a template.
Template edit has to be handled by the implementer.

##### Default Value

`undefined`

#### `Optional` handleSaveAsCopy

```ts
handleSaveAsCopy?: () => void
```

Callback that is called when the user wants to save a template as copy.
Save as copy has to be handled by the implementer.

##### Default Value

`undefined`

#### `Optional` handleTemporaryTemplate

```ts
handleTemporaryTemplate?: () => void
```

Callback that is called when the user clicks on the temporary template button.
Create temporary template has to be handled by the implementer.

##### Default Value

`undefined`

#### isCreateTemplateAllowed

```ts
isCreateTemplateAllowed: boolean = false
```

show the Create Template button

##### Default Value

`false`

#### isDeletePersonalTemplateAllowed

```ts
isDeletePersonalTemplateAllowed: boolean = false
```

show the Delete button for Custom Templates

##### Default Value

`false`

#### isEditPersonalTemplateAllowed

```ts
isEditPersonalTemplateAllowed: boolean = false
```

show the Edit button for Custom Templates

##### Default Value

`false`

#### isSaveAsCopyAllowed

```ts
isSaveAsCopyAllowed: boolean = false
```

show the Save As Copy button

##### Default Value

`false`

#### isTempTemplateAllowed

```ts
isTempTemplateAllowed: boolean = false
```

show the Temporary Template button
When [selectedTemplate](#selectedtemplate) is undefined, Temp Template mode is enabled

##### Default Value

`false`

#### `Optional` onFavoriteTemplatesChange

```ts
onFavoriteTemplatesChange?: (favTemplateIds: FavoriteTemplateIds) => void
```

Callback that is called when the user clicks on the makes a template favourite or unfavourite.
Favorite change has to be handled by the implementer.

##### Default Value

`undefined`

#### `Optional` onTemplateSelected

```ts
onTemplateSelected?: (
    template: AnalyticsTemplate,
    category: AnalyticsTemplateCategoryEnum,
) => void
```

Callback that is called when a template is selected.

##### Default Value

`undefined`

#### `Optional` personalTemplates

```ts
personalTemplates?: readonly AnalyticsTemplate[]
```

List of personal analytics templates to display

##### Default Value

`undefined`

#### `Optional` selectedTemplate

```ts
selectedTemplate?: AnalyticsTemplateDetail
```

ID and Category of the selected template

##### Default Value

`undefined`

#### showPersonalTemplates

```ts
showPersonalTemplates: boolean = false
```

Show or hide the personal templates in the dropdown.

##### Default Value

`false`

#### showTemplatesButtons

```ts
showTemplatesButtons: boolean = false
```

Show or hide the template action buttons

##### Default Value

`false`

#### templateType

```ts
templateType: AnalyticsTemplateTypeEnum = AnalyticsTemplateTypeEnum.SCREENER
```

Type of the analytics template, defines the infront templates to show based on the type and is used for internal handling of the widget.

##### Default Value

`AnalyticsTemplateTypeEnum.SCREENER`
