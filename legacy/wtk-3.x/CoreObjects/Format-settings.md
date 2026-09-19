---
title: "Format settings"
kind: legacy-widget
page_type: legacy-reference
product: "Infront Web Toolkit"
library_version: "3.x"
status: "legacy — superseded by the 4.x docs in ../../reference; Infront's own banner says this site is no longer updated"
legacy_page: "CoreObjects"
widget_id: "Format-settings"
option_count: 11
options: ["useBrowserFormatting", "decimalSeparator", "thousandsSeparator", "useKiloMegaFormat", "kilo", "mega", "dateFormat", "longDateFormat", "dayMonthTimeFormat", "dateTimeFormat", "timeFormat"]
source_url: "https://doc.infrontfinance.com/v3/CoreObjects#Format-settings"
---

# Format settings

It is possible to change numbers, date and time formatting by using the utility object InfrontUtil.formatSettings.
This object does not need to be initialized. It can be accessed after initializing the toolkit.

```javascript
InfrontUtil.formatSettings.useBrowserFormatting = false;
```

### Formatting options

### `useBrowserFormatting`

- **Type:** `boolean`
- **Default:** `true`

Use this option to use browser formatting settings as a default.

### `decimalSeparator`

- **Type:** `string`
- **Default:** `browserDecimalSeparator`

### `thousandsSeparator`

- **Type:** `string`
- **Default:** `browserThousandsSeparator`

### `useKiloMegaFormat`

- **Type:** `boolean`
- **Default:** `true`

Show numbers in thousand (k) or in million (m). Use [kilo](https://doc.infrontfinance.com/v3/CoreObjects#format-kilo) or [mega](https://doc.infrontfinance.com/v3/CoreObjects#format-mega) property to customize it.

### `kilo`

- **Type:** `string`
- **Default:** `k`

Customize (thousand) symbol in large numbers.

### `mega`

- **Type:** `string`
- **Default:** `m`

Customize (million) symbol in large numbers.

### `dateFormat`

- **Type:** `string`
- **Default:** `DD.MM.YY`

### `longDateFormat`

- **Type:** `string`
- **Default:** `DD MMM YYYY`

### `dayMonthTimeFormat`

- **Type:** `string`
- **Default:** `MMM d HH:mm:ss`

### `dateTimeFormat`

- **Type:** `string`
- **Default:** `DD.MM.YY HH:mm:ss`

### `timeFormat`

- **Type:** `string`
- **Default:** `HH:mm:ss`

### Formatting methods

```javascript
function formatNumber(val: number, decimals: number): string
function formatPercent(val: number, decimals: number = 2): string
function formatAndShorten(val: number): string
function formatDate(date: Date): string
function formatStandardTimestamp(date: Date, seconds: boolean = true): string
function formatDateTime(date: Date, format: string): string
```
