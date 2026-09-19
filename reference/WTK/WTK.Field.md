---
title: "FieldAbstract"
qualified_name: "WTK.Field"
kind: class
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "WTK"
group: "Core Objects"
nav_path: "WTK > Core Objects > Field"
source_url: "https://docs.infrontfinance.com/docs/classes/WTK.Field.html"
defines: ["Field"]
member_count: 42
members: ["allowZero", "blinkDuration", "blinkType", "className?", "compute", "computeFields", "content", "currency", "dataType", "decimals?", "fieldClassName", "flag", "footer", "footerStrategy?", "genericClass", "heading", "headingHover?", "hidden", "highlightChange", "hover?", "hoverTooltip?", "languageHandler", "name", "onClick", "shorten", "showExtra", "sortable", "sortDirection", "sortUsingOriginalValue", "source", "sourceField", "specificClass", "targetCurrency", "toggleExpanded", "translate?", "type", "url", "weight?", "locale", "createValueBinding", "getValueFromObject", "objectHasValue"]
member_groups:
  "ColumnConfig": ["allowZero", "blinkDuration", "blinkType", "className?", "compute", "computeFields", "content", "currency", "dataType", "decimals?", "fieldClassName", "flag", "footer", "footerStrategy?", "genericClass", "heading", "headingHover?", "hidden", "highlightChange", "hover?", "hoverTooltip?", "languageHandler", "name", "onClick", "shorten", "showExtra", "sortable", "sortDirection", "sortUsingOriginalValue", "source", "sourceField", "specificClass", "targetCurrency", "toggleExpanded", "translate?", "type", "url", "weight?"]
  "Other": ["locale", "createValueBinding", "getValueFromObject", "objectHasValue"]
reference_count: 9
references: ["WTK.BlinkDuration", "WTK.BlinkType", "Utils.InfrontUtil.Observable", "WTK.DataType", "WTK.Language", "WTK.FieldSource", "WTK.FieldType", "Utils.InfrontUtil.Binding", "WTK.CommonListOptions"]
---

# FieldAbstract

Field class - Define the Column configuration.

#### Example

```ts
<script type="text/javascript">
    // This example shows a list of OSEBX constituents, demonstrating
    // most of the parameters you can use when specifying columns.
    infront.chainViewer("#table", {
        chains: [{
            feed: 18177,
            name: "OSEBX",
            description: "OSEBX Constituents"
        }],
        enableSearch: false,
        sortable: true,
        columns: [
            // Ticker with custom heading, hover-text and
            // an onClick-event that performs a Google-search.
            {
                name: "TICKER",
                heading: "Infront.Symbol",
                hover: "FULL_NAME",
                onClick: function(rowId, value) {
                    var query = value.replace(" ", "+");
                    window.open("http://www.google.com/search?q=" + query, "_blank");
                }
            },
            // Last with custom class for emphasis.
            {
                name:"LAST",
                className: "emphasizeLast"
            },
            // Normal change & Percent change
            "CHANGE",
            "PCT_CHANGE",
            // Percent change with translate-function that
            // turns it into a column of up/down arrows.
            {
                name: "PCT_CHANGE",
                heading: "",
                sortable: false,
                className: "pctChangeArrow",
                translate: function(rowId, value) {
                    if( value == 0 ) {
                        return "";
                    } else {
                        var base = "//software.infrontservices.com/wtk/themes/";
                        var image = "indicator-arrow-" + (value > 0 ? "up" : "down") + ".png";
                        return "<img src=\"" + base + image + "\" />";
                    }
                }
            },
            //Normal bid & ask
            "BID",
            "ASK",
            // Custom computed column "MID" that computes the mid-price
            // between BID and ASK.
            {
                name: "MID",
                heading: "Mid",
                type: Field.kComputedType,
                computeFields: ["BID", "ASK"],
                compute: function(rowId, args) {
                    return (args[0] + args[1]) / 2;
                }
            },
            "HIGH",
            "LOW",
            // Hidden full name.
            {
                name: "FULL_NAME",
                hidden: true
            }
        ]
    });
</script>
```

### ColumnConfig

#### allowZero

```ts
allowZero: boolean
```

Allows to print a zero-value if datatype is numeric and its value is zero.

##### Default Value

`undefined`

#### blinkDuration

```ts
blinkDuration: BlinkDuration = BlinkDuration.Default
```

Blink duration.

##### See

[BlinkDuration](./WTK.BlinkDuration.md)

##### Default Value

`Infront.BlinkDuration.Default`

#### blinkType

```ts
blinkType: BlinkType
```

This property will activate blink-animation used to indicate a value has changed.

If it is assigned, the field will be given the class `cell-update-up` or ` cell-update-down` if blinkType is ` BlinkType.UpDown`
or the class `cell-update-neutral` if blinkType is ` BlinkType.Neutral`.

Valid values are:

- `BlinkType.Neutral`
- `BlinkType.UpDown`
- `BlinkType.None`

Default is field-specific.

##### See

[BlinkType](./WTK.BlinkType.md)

##### Default Value

`undefined`

#### `Optional` className

```ts
className?: string
```

Lets you specify a className (for styling or other purposes) that will be assigned to every cell in this column (including the heading).

##### Default Value

`undefined`

#### compute

```ts
compute: (item: any, args: any[], instrument: any) => any
```

The function that performs the computation for this column.

The function should take two arguments, rowId and args.

In the args array comes the values of the columns you specified in computeFields.

The framework assumes the result of a compute-field is numeric and formats it as a decimal number.

If you wish to format it another way you need to provide a translate-function.

Only required if [Field.type](#type) is `FieldType.Computed`, else ignored.

##### Type Declaration

- (item: any, args: any[], instrument: any): any

  ##### Parameters

  - item: any
  - args: any[]
  - instrument: any

  ##### Returns any

##### Example

```ts
// calculates the mid-price
computeFields: ["BID", "ASK"],
compute: function (rowId, args) { return (args[0] + args[1])/2; }
```

##### See

[FieldType](./WTK.FieldType.md)

##### Default Value

`undefined`

#### computeFields

```ts
computeFields: Field[]
```

For a computed column, this is where you specify which columns (or rather the values)
should be sent as arguments to the computation-function (see below).

Only required if [Field.type](#type) is `FieldType.Computed`, else ignored.

##### See

[Field](#) | [FieldType](./WTK.FieldType.md)

##### Default Value

`undefined`

#### content

```ts
content:
    | InjectableContent
    | (
        (
            item: any,
            instrument?: Instrument,
            element?: HTMLElement,
            decimals?: number | Observable<any>,
            registerUnbind?: RegisterUnbind,
        ) => InjectableContent
    )
```

Whatever content you wish to show in a custom column.

Can either be a string for static content, or a function to generate it.

If you specify a function, it should take one parameter, rowId, which is different for each widget.

If the list is a list of instruments (stocks, bonds, ETFs, etc.), this is the instrument itself.

The function may return any valid HTML, which is inserted unaltered into the cell.

Only required if [Field.type](#type) is `FieldType.Custom`, else ignored.

You can register an unbind/unsubscribe by using the `registerUnbind` callback. For compatibility, the
callback argument is optional, but all built-in WTK components will provide one.

##### See

Infront.Instrument | [FieldType](./WTK.FieldType.md)

##### Default Value

`undefined`

#### currency

```ts
currency: string
```

Currency code to convert the value to, ex "USD" or "EUR".

Only required if [Field.type](#type) is `FieldType.Converted`, else ignored.

##### See

[FieldType](./WTK.FieldType.md)

##### Default Value

`undefined`

#### dataType

```ts
dataType: DataType = DataType.Text
```

Field-specific The data-type parameter can be set to adjust how the field is formatted.

##### See

[DataType](./WTK.DataType.md)

##### Default Value

`DataType.Text`

#### `Optional` decimals

```ts
decimals?: number
```

Number of decimals to show.

Default is market-specific.

##### Default Value

`undefined`

#### fieldClassName

```ts
fieldClassName: string
```

Field class name.

##### Default Value

`undefined`

#### flag

```ts
flag: boolean | "COUNTRY_OF_INCORPORATION" | "FEED_COUNTRY" | "COUNTRY"
```

Flag.

##### Default Value

`undefined`

#### footer

```ts
footer: any
```

What kind of value you want in the footer field for this column.

Currently only supports "sum".

##### Remarks

Only trading/portfolio widgets supports footer fields.

m for millions, k for thousands, etc.

##### Default Value

`undefined`

#### `Optional` footerStrategy

```ts
footerStrategy?: ComputationStrategy
```

Which strategy to use for summing when taking empty cells into consideration.

##### Default Value

`undefined`

#### genericClass

```ts
genericClass: string
```

Generic class.

##### Default Value

`undefined`

#### heading

```ts
heading: string
```

If you want to specify a custom heading for this column you can do so here.

Every standard column has a standard heading text, so you usually don’t need to do this for standard columns.

If you want to change column headers across your site you should create a custom language-dictionary and install it in the library.

This property is mainly for one-off changes.

##### Default Value

`undefined`

#### `Optional` headingHover

```ts
headingHover?: string
```

Text to show when hovering over a column heading.

##### Default Value

`undefined`

#### hidden

```ts
hidden: boolean
```

If `true`, this column will never be visible.

##### Default Value

`undefined`

#### highlightChange

```ts
highlightChange: boolean
```

Set to `true` if this column is a column showing change over some period of time (absolute or percentage).

This enables it to have red/green (or similar) color based on the sign of its value.

If `true`, the field will be given the class ` cell-status-positive` if it has a positive value, or ` cell-status-negative` if it is negative.

Default is field-specific.

##### Default Value

`undefined`

#### `Optional` hover

```ts
hover?: Field
```

If you specify the name of another column, you get that columns value as a tool-tip when you hover over cells in this column.

##### Example

```ts
// Shows full name if you hover over ticker.
name: "TICKER",
hover: "FULL_NAME"
```

##### Default Value

`undefined`

#### `Optional` hoverTooltip

```ts
hoverTooltip?: (tdEl: HTMLElement, data: any, columnId: Field | Column) => any
```

Reference to a column name with the content you want to show.

##### Type Declaration

- (tdEl: HTMLElement, data: any, columnId: Field | Column): any

  ##### Parameters

  - tdEl: HTMLElement
  - data: any
  - columnId: Field | Column

  ##### Returns any

##### See

Column | [Field](#)

##### Default Value

`undefined`

#### languageHandler

```ts
languageHandler: Language
```

Infront language handler.

##### See

Language

##### Default Value

`undefined`

#### name

```ts
name: string = ''
```

Every column needs a name.

For standard columns this is the same string you would have entered in directly in the array if you didn’t want advanced configuring.

For custom columns you can make up your own, but it must not collide with any official column-name.
To avoid this you should use an app-/site-specific prefix.

##### Default Value

`''`

#### onClick

```ts
onClick: (
    lineId: any,
    value: any,
    extras: {
        dataItem?: BaseDataItem;
        instrument?: Instrument;
        target?: HTMLElement;
    },
) => void
```

onClick-event for this column.

##### Type Declaration

- (lineId: any,    value: any,    extras: {        dataItem?: BaseDataItem;        instrument?: Instrument;        target?: HTMLElement;    },): void

  ##### Parameters

  - lineId: any
  - value: any
  - extras: { dataItem?: BaseDataItem; instrument?: Instrument; target?: HTMLElement }

  ##### Returns void

##### See

Infront.Instrument | Infront.BaseDataItem

##### Default Value

`undefined`

#### shorten

```ts
shorten: boolean
```

If `true`, numbers will be formatted with "k" or "m" instead of last last 3 or 6 digits.

m for million, k for thousands, etc.

##### Default Value

`undefined`

#### showExtra

```ts
showExtra: boolean
```

If `true` and no [Field.onClick](#onclick) event is set, this shows the extra-information popup for this row.

Also see the CommonListOptions.extraColumns widget-property.

##### Default Value

`undefined`

#### sortable

```ts
sortable: boolean = true
```

If `true`, sorting is enabled for this column.

##### Default Value

`true`

#### sortDirection

```ts
sortDirection: Observable
```

Sorting direction.

##### Default Value

`undefined`

#### sortUsingOriginalValue

```ts
sortUsingOriginalValue: boolean = false
```

This property will be used only when [Field.translate](#translate) property has been used.

This allow to specify which value should be used to sort the column.

If this property is `true` then the column will be sorted based on the original value before translation.

##### Default Value

`false`

#### source

```ts
source: FieldSource
```

Source.

##### See

[FieldSource](./WTK.FieldSource.md)

##### Default Value

`undefined`

#### sourceField

```ts
sourceField: Field
```

Name of the column that this one will currency convert.

Only required if [Field.type](#type) is `FieldType.Converted`, else ignored.

##### See

[Field](#) | [FieldType](./WTK.FieldType.md)

##### Default Value

`undefined`

#### specificClass

```ts
specificClass: string
```

Specific class.

##### Default Value

`undefined`

#### targetCurrency

```ts
targetCurrency: string
```

Field value will be converted to the currency specified in this option. For example: "USD" or "EUR".

##### Default Value

`undefined`

#### toggleExpanded

```ts
toggleExpanded: boolean
```

Toggle expanded.

##### Default Value

`undefined`

#### `Optional` translate

```ts
translate?: (item: any, itemFieldValue: any) => string
```

Lets you format the cells value yourself.

The supplied function should take two arguments, the rowId and the cells value in its raw format (usually a number).

It may return any valid HTML, which is inserted unaltered into the cell.

##### Type Declaration

- (item: any, itemFieldValue: any): string

  ##### Parameters

  - item: any
  - itemFieldValue: any

  ##### Returns string

##### Default Value

`undefined`

#### type

```ts
type: FieldType = FieldType.Normal
```

The type of column.

You only need to specify this if are creating a custom or computed column.

Valid values are:

- `FieldType.Normal`
- `FieldType.Custom`
- `FieldType.Computed`
- `FieldType.Converted`

##### See

[FieldType](./WTK.FieldType.md)

##### Default Value

`FieldType.Normal`

#### url

```ts
url: string
```

The target URL when the user clicks link.

Only required if [Field.type](#type) is "link", else ignored.

##### See

[FieldType](./WTK.FieldType.md)

##### Default Value

`undefined`

##### Deprecated

#### `Optional` weight

```ts
weight?: string
```

If footer is "average", the average will be weighted against the contents of this column.

##### Default Value

`undefined`

### Other

#### locale

```ts
locale: string
```

Localized version of the field. This could be used with a limited number of fields. Only translated fields supplied by data provider(s) are available.

The value must be alpha-2 encoded.

#### createValueBinding

```ts
createValueBinding(
    rowId: any,
    element: HTMLElement,
    field: string,
    decimals: number,
    allowZero?: boolean,
): Binding
```

Creates the proper binding based on the columns dataType, or a TranslatedBinding if the column contains
a translate-function.

##### Parameters

- rowId: any
- element: HTMLElement
- field: string
- decimals: number
- `Optional` allowZero: boolean

##### Returns [Binding](../Utils/Utils.InfrontUtil.Binding.md)

```ts
createValueBinding(
    rowId: any,
    element: HTMLElement,
    field: string,
    decimals: Observable,
    allowZero?: boolean,
): Binding
```

Creates the proper binding based on the columns dataType, or a TranslatedBinding if the column contains
a translate-function.

##### Parameters

- rowId: any
- element: HTMLElement
- field: string
- decimals: Observable
- `Optional` allowZero: boolean

##### Returns [Binding](../Utils/Utils.InfrontUtil.Binding.md)

#### getValueFromObject

```ts
getValueFromObject(obj: object): any
```

Extracts a value represented by this column from an object (typically a response-message)

##### Parameters

- obj: object

##### Returns any

#### objectHasValue

```ts
objectHasValue(obj: object): boolean
```

Returns true if obj contains a value identified by this Column-object.

##### Parameters

- obj: object

##### Returns boolean
