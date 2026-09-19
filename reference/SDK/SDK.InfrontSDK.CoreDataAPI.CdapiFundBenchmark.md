---
title: "CdapiFundBenchmark"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiFundBenchmark"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiFundBenchmark"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiFundBenchmark.html"
defines: ["CdapiFundBenchmark"]
member_count: 9
members: ["_meta", "currency_code", "id", "listing_id", "name", "name_de", "name_en", "name_fr", "name_nl"]
member_groups:
  "Properties": ["_meta", "currency_code", "id", "listing_id", "name", "name_de", "name_en", "name_fr", "name_nl"]
reference_count: 1
references: ["SDK.InfrontSDK.CoreDataAPI.BasedefEntityMeta"]
---

# CdapiFundBenchmark

Benchmark holds the reference benchmark index information for a fund.
The benchmark is used for performance comparison and tracking error calculation.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.fund.Benchmark

```ts
interface CdapiFundBenchmark {
    _meta: BasedefEntityMeta;
    currency_code: string;
    id: number;
    listing_id: string;
    name: string;
    name_de: string;
    name_en: string;
    name_fr: string;
    name_nl: string;
}
```

### Properties

#### `Readonly` _meta

```ts
_meta: BasedefEntityMeta
```

Entity metadata (creation time, update time, version, etc.).

#### `Readonly` currency_code

```ts
currency_code: string
```

ISO 4217 currency code in which the benchmark is denominated.

#### `Readonly` id

```ts
id: number
```

Internal unique identifier for this benchmark.

##### Remarks

Format: int32

#### `Readonly` listing_id

```ts
listing_id: string
```

CDAPI listing ID of the benchmark index instrument — links to the Listing entity.

#### `Readonly` name

```ts
name: string
```

Default language benchmark name.

#### `Readonly` name_de

```ts
name_de: string
```

German benchmark name.

#### `Readonly` name_en

```ts
name_en: string
```

English benchmark name.

#### `Readonly` name_fr

```ts
name_fr: string
```

French benchmark name.

#### `Readonly` name_nl

```ts
name_nl: string
```

Dutch benchmark name.
