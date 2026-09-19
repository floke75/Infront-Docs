---
title: "CdapiMacroListingMacro"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiMacroListingMacro"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiMacroListingMacro"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiMacroListingMacro.html"
defines: ["CdapiMacroListingMacro"]
member_count: 10
members: ["announced_number", "category", "country_code", "expected_number", "id", "name", "previous_number", "source", "timestamp", "unit"]
member_groups:
  "Properties": ["announced_number", "category", "country_code", "expected_number", "id", "name", "previous_number", "source", "timestamp", "unit"]
reference_count: 2
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiMacroListingMacroDictionary", "SDK.InfrontSDK.CoreDataAPI.CdapiMacroListingMacroSource"]
---

# CdapiMacroListingMacro

ListingMacro represents a macroeconomic indicator or economic data release.
It can also be used as a lightweight descriptor when only the id field is populated.
Examples: GDP growth rate, inflation (CPI), unemployment rate, PMI.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.macro.ListingMacro

```ts
interface CdapiMacroListingMacro {
    announced_number: number;
    category: CdapiMacroListingMacroDictionary;
    country_code: string;
    expected_number: number;
    id: string;
    name: string;
    previous_number: number;
    source: CdapiMacroListingMacroSource;
    timestamp: string;
    unit: string;
}
```

### Properties

#### `Readonly` announced_number

```ts
announced_number: number
```

Officially announced / actual value from the most recent release.

##### Remarks

Format: double

#### `Readonly` category

```ts
category: CdapiMacroListingMacroDictionary
```

Category classification of the macro indicator. See nested Dictionary message.

#### `Readonly` country_code

```ts
country_code: string
```

ISO 3166-1 alpha-2 country code of the reporting country (e.g. "US", "DE").

#### `Readonly` expected_number

```ts
expected_number: number
```

Consensus forecast / expected value for the upcoming release.

##### Remarks

Format: double

#### `Readonly` id

```ts
id: string
```

Internal unique identifier for this listing.

#### `Readonly` name

```ts
name: string
```

Source-specific display name of the indicator (e.g. "United States GDP Growth Rate").

#### `Readonly` previous_number

```ts
previous_number: number
```

Previously released / prior period value of the indicator.

##### Remarks

Format: double

#### `Readonly` source

```ts
source: CdapiMacroListingMacroSource
```

Data source for this macro indicator (currently TRADING_ECONOMICS only).

##### Remarks

Format: enum

#### `Readonly` timestamp

```ts
timestamp: string
```

Timestamp of the announced value release. ISO-8601 format recommended (e.g. "2024-01-31T13:30:00Z").

#### `Readonly` unit

```ts
unit: string
```

Unit in which the indicator value is expressed (e.g. "%", "bln USD", "index points").
