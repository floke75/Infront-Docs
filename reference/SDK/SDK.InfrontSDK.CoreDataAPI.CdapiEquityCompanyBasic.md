---
title: "CdapiEquityCompanyBasic"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiEquityCompanyBasic"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiEquityCompanyBasic"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiEquityCompanyBasic.html"
defines: ["CdapiEquityCompanyBasic"]
member_count: 25
members: ["_meta", "address", "average_number_of_employees", "code", "country_code", "description", "description_da", "description_de", "description_en", "description_es", "description_fi", "description_fr", "description_it", "description_nl", "description_no", "description_sv", "email", "foundation_year", "id", "industry", "name", "number_of_employees", "phone", "source", "website"]
member_groups:
  "Properties": ["_meta", "address", "average_number_of_employees", "code", "country_code", "description", "description_da", "description_de", "description_en", "description_es", "description_fi", "description_fr", "description_it", "description_nl", "description_no", "description_sv", "email", "foundation_year", "id", "industry", "name", "number_of_employees", "phone", "source", "website"]
reference_count: 4
references: ["SDK.InfrontSDK.CoreDataAPI.BasedefEntityMeta", "SDK.InfrontSDK.CoreDataAPI.CdapiEquityCompanyBasicNumberOfEmployees", "SDK.InfrontSDK.CoreDataAPI.CdapiEquityDictionary", "SDK.InfrontSDK.CoreDataAPI.CdapiEquityCompanyBasicSource"]
---

# CdapiEquityCompanyBasic

CompanyBasic holds the general company / issuer profile information.
Available for sources INFRONT, EURONEXT_VPS, MORNINGSTAR, and STANDARD_AND_POORS.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.equity.CompanyBasic

```ts
interface CdapiEquityCompanyBasic {
    _meta: BasedefEntityMeta;
    address: string;
    average_number_of_employees: readonly CdapiEquityCompanyBasicNumberOfEmployees[];
    code: string;
    country_code: string;
    description: string;
    description_da: string;
    description_de: string;
    description_en: string;
    description_es: string;
    description_fi: string;
    description_fr: string;
    description_it: string;
    description_nl: string;
    description_no: string;
    description_sv: string;
    email: string;
    foundation_year: string;
    id: string;
    industry: CdapiEquityDictionary;
    name: string;
    number_of_employees: readonly CdapiEquityCompanyBasicNumberOfEmployees[];
    phone: string;
    source: CdapiEquityCompanyBasicSource;
    website: string;
}
```

### Properties

#### `Readonly` _meta

```ts
_meta: BasedefEntityMeta
```

Entity metadata (creation time, update time, version, etc.).

#### `Readonly` address

```ts
address: string
```

Registered address of the company.

#### `Readonly` average_number_of_employees

```ts
average_number_of_employees: readonly CdapiEquityCompanyBasicNumberOfEmployees[]
```

Historical average headcount snapshots (average employees over a period).

#### `Readonly` code

```ts
code: string
```

Infront internal company code. Source: INFRONT only.

#### `Readonly` country_code

```ts
country_code: string
```

ISO 3166-1 alpha-2 country code of the company's registered country.

#### `Readonly` description

```ts
description: string
```

Company description in the default language (EN unless overridden via language header).

#### `Readonly` description_da

```ts
description_da: string
```

Company description in Danish.

#### `Readonly` description_de

```ts
description_de: string
```

Company description in German.

#### `Readonly` description_en

```ts
description_en: string
```

Company description in English.

#### `Readonly` description_es

```ts
description_es: string
```

Company description in Spanish.

#### `Readonly` description_fi

```ts
description_fi: string
```

Company description in Finnish.

#### `Readonly` description_fr

```ts
description_fr: string
```

Company description in French.

#### `Readonly` description_it

```ts
description_it: string
```

Company description in Italian.

#### `Readonly` description_nl

```ts
description_nl: string
```

Company description in Dutch.

#### `Readonly` description_no

```ts
description_no: string
```

Company description in Norwegian.

#### `Readonly` description_sv

```ts
description_sv: string
```

Company description in Swedish.

#### `Readonly` email

```ts
email: string
```

Company contact email address.

#### `Readonly` foundation_year

```ts
foundation_year: string
```

Year in which the company was founded (string to allow for partial dates).

#### `Readonly` id

```ts
id: string
```

Internal unique identifier for this company (= issuer_id).

#### `Readonly` industry

```ts
industry: CdapiEquityDictionary
```

Industry classification of the company. Source: STANDARD_AND_POORS.

#### `Readonly` name

```ts
name: string
```

Legal company name.

#### `Readonly` number_of_employees

```ts
number_of_employees: readonly CdapiEquityCompanyBasicNumberOfEmployees[]
```

Historical headcount snapshots (full-time employees).

#### `Readonly` phone

```ts
phone: string
```

Company contact phone number.

#### `Readonly` source

```ts
source: CdapiEquityCompanyBasicSource
```

Data source for this company profile.

##### Remarks

Format: enum

#### `Readonly` website

```ts
website: string
```

Company website URL.
