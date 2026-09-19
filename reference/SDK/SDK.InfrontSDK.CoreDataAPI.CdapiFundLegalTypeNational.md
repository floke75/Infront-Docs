---
title: "CdapiFundLegalTypeNational"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiFundLegalTypeNational"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiFundLegalTypeNational"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiFundLegalTypeNational.html"
defines: ["CdapiFundLegalTypeNational"]
member_count: 10
members: ["_meta", "country_of_origin_code", "id", "is_insurance_fund", "is_pension_fund", "name", "name_de", "name_en", "name_fr", "name_nl"]
member_groups:
  "Properties": ["_meta", "country_of_origin_code", "id", "is_insurance_fund", "is_pension_fund", "name", "name_de", "name_en", "name_fr", "name_nl"]
reference_count: 1
references: ["SDK.InfrontSDK.CoreDataAPI.BasedefEntityMeta"]
---

# CdapiFundLegalTypeNational

LegalTypeNational holds the national legal form classification of a fund.
Describes the fund's legal structure under the regulations of its country of origin
(e.g. SICAV, FCP, OEIC, Unit Trust).

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.fund.LegalTypeNational

```ts
interface CdapiFundLegalTypeNational {
    _meta: BasedefEntityMeta;
    country_of_origin_code: string;
    id: number;
    is_insurance_fund: boolean;
    is_pension_fund: boolean;
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

#### `Readonly` country_of_origin_code

```ts
country_of_origin_code: string
```

ISO 3166-1 alpha-2 country code of the country where this legal type applies.

#### `Readonly` id

```ts
id: number
```

Internal unique identifier for this legal type.

##### Remarks

Format: int32

#### `Readonly` is_insurance_fund

```ts
is_insurance_fund: boolean
```

If true, this legal type is classified as an insurance fund / insurance-linked vehicle.

#### `Readonly` is_pension_fund

```ts
is_pension_fund: boolean
```

If true, this legal type is classified as a pension fund.

#### `Readonly` name

```ts
name: string
```

Default language name of the legal type.

#### `Readonly` name_de

```ts
name_de: string
```

German name.

#### `Readonly` name_en

```ts
name_en: string
```

English name.

#### `Readonly` name_fr

```ts
name_fr: string
```

French name.

#### `Readonly` name_nl

```ts
name_nl: string
```

Dutch name.
