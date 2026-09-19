---
title: "FormatSettings"
qualified_name: "Utils.InfrontUtil.FormatSettings"
kind: class
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "Utils"
namespace: "Utils.InfrontUtil"
group: "InfrontUtil"
nav_path: "Utils > InfrontUtil > FormatSettings"
source_url: "https://docs.infrontfinance.com/docs/classes/Utils.InfrontUtil.FormatSettings.html"
defines: ["FormatSettings"]
member_count: 17
members: ["allowZero", "dateTimeFormat", "dayMonthTimeFormat", "decimalSeparator", "emptyValuePlaceholder", "kilo", "longDateFormat", "mega", "thousandsSeparator", "timeFormat", "useBrowserFormatting", "useKiloMegaFormat", "usePerfectScrollbar", "dateFormat", "reverseStringSorting", "convertStringToDate", "stringIsValidDate"]
member_groups:
  "FormatSettings": ["allowZero", "dateTimeFormat", "dayMonthTimeFormat", "decimalSeparator", "emptyValuePlaceholder", "kilo", "longDateFormat", "mega", "thousandsSeparator", "timeFormat", "useBrowserFormatting", "useKiloMegaFormat", "usePerfectScrollbar", "dateFormat"]
  "Other": ["reverseStringSorting", "convertStringToDate", "stringIsValidDate"]
---

# FormatSettings

Format settings

`InfrontUtil.formatSettings.useBrowserFormatting = false;`

It is possible to change numbers, date and time formatting by using the utility object InfrontUtil.formatSettings.

This object does not need to be initialized. It can be accessed after initializing the toolkit.

#### Example

```ts
function formatNumber(val: number, decimals: number): string
function formatPercent(val: number, decimals: number = 2): string
function formatAndShorten(val: number): string
function formatDate(date: Date): string
function formatStandardTimestamp(date: Date, seconds: boolean = true): string
function formatDateTime(date: Date, format: string): string
```

### FormatSettings

#### allowZero

```ts
allowZero: boolean = true
```

Allow zero as empty value.

##### Default Value

`true`

#### dateTimeFormat

```ts
dateTimeFormat: string = defaultDateTimeFormat
```

##### Default Value

`'DD.MM.YY HH:mm:ss'`

#### dayMonthTimeFormat

```ts
dayMonthTimeFormat: string = defaultDayMonthTimeFormat
```

##### Default Value

`'MMM d HH:mm:ss'`

#### decimalSeparator

```ts
decimalSeparator: string
```

The decimal separator.

##### Default Value

`separator taken from browser`

#### emptyValuePlaceholder

```ts
emptyValuePlaceholder: string = '-'
```

Placeholder for empty values.

##### Default Value

`'-'`

#### kilo

```ts
kilo: string
```

Customize (thousand) symbol in large numbers.

##### Default Value

`'k'`

#### longDateFormat

```ts
longDateFormat: string = defaultLongDateFormat
```

##### Default Value

`'DD MMM YYYY'`

#### mega

```ts
mega: string
```

Customize (million) symbol in large numbers.

##### Default Value

`'m'`

#### thousandsSeparator

```ts
thousandsSeparator: string
```

The thousands separator.

##### Default Value

`separator taken from browser`

#### timeFormat

```ts
timeFormat: string = defaultTimeFormat
```

##### Default Value

`'HH:mm:ss'`

#### useBrowserFormatting

```ts
useBrowserFormatting: boolean | "use-intl"
```

Use this option to use browser formatting settings as a default.

- `true` (default): use the browser locale to derive decimal and thousands separators.
- `false`: use manually set ` decimalSeparator` / ` thousandsSeparator`.
- `'use-intl'`: derive separators from the WTK ` language` option via ` Intl.NumberFormat`
  (overrides browser locale). Requires `language` to be set on the toolkit options.

##### Default Value

`true`

#### useKiloMegaFormat

```ts
useKiloMegaFormat: boolean
```

Show numbers in thousand (k) or in million (m). Use kilo or mega property to customize it.

##### Default Value

`undefined`

#### usePerfectScrollbar

```ts
usePerfectScrollbar: boolean = true
```

Replace native browser scrollbars with "PerfectScrollbar".

##### Default Value

`true`

#### dateFormat

```ts
get dateFormat(): string
```

##### Returns string

##### Default Value

`'DD.MM.YY'`

```ts
set dateFormat(dateFormat: string): void
```

##### Parameters

- dateFormat: string

##### Returns void

### Other

#### reverseStringSorting

```ts
reverseStringSorting: boolean = true
```

When comparing strings, should the sorting be reversed (e.g. Z-A instead of A-Z).
This is enabled by default, as it is more intuitive for users when sorting strings in a table (e.g. when sorting a column ascending, you would expect to see Z at the top and A at the bottom).

#### convertStringToDate

```ts
convertStringToDate(input: string): Date
```

converts a string which passes the dateFormatRegExp into a date

##### Parameters

- input: string

  (The input string to be converted)

##### Returns Date

(the date of the result of the conversion)

#### stringIsValidDate

```ts
stringIsValidDate(input: string): boolean
```

checks if the provided string passes the dateFormatRegExp (date validation)

##### Parameters

- input: string

##### Returns boolean

boolean (valid date, not a valid date)
