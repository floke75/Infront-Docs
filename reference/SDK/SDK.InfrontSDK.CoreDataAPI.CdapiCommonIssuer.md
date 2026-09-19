---
title: "CdapiCommonIssuer"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiCommonIssuer"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiCommonIssuer"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiCommonIssuer.html"
defines: ["CdapiCommonIssuer"]
member_count: 19
members: ["_meta", "city", "company_code", "contact", "country_code", "email", "fax", "id", "lei", "logo", "name", "name_short", "phone", "postal_code", "region_code", "sector", "street", "sub_sector", "website"]
member_groups:
  "Properties": ["_meta", "city", "company_code", "contact", "country_code", "email", "fax", "id", "lei", "logo", "name", "name_short", "phone", "postal_code", "region_code", "sector", "street", "sub_sector", "website"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.BasedefEntityMeta", "SDK.InfrontSDK.CoreDataAPI.CdapiCommonIssuerSector", "SDK.InfrontSDK.CoreDataAPI.CdapiCommonIssuerSubSector"]
---

# CdapiCommonIssuer

Issuer represents the legal entity issuing financial instruments (e.g. a company).
Can be used as a lightweight descriptor when only the id field is populated.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.common.Issuer

```ts
interface CdapiCommonIssuer {
    _meta: BasedefEntityMeta;
    city: string;
    company_code: string;
    contact: string;
    country_code: string;
    email: string;
    fax: string;
    id: string;
    lei: string;
    logo: string;
    name: string;
    name_short: string;
    phone: string;
    postal_code: string;
    region_code: string;
    sector: CdapiCommonIssuerSector;
    street: string;
    sub_sector: CdapiCommonIssuerSubSector;
    website: string;
}
```

### Properties

#### `Readonly` _meta

```ts
_meta: BasedefEntityMeta
```

Entity metadata (creation time, update time, version, etc.).

#### `Readonly` city

```ts
city: string
```

City of the registered address.

#### `Readonly` company_code

```ts
company_code: string
```

Infront internal company code for cross-referencing within the platform.

#### `Readonly` contact

```ts
contact: string
```

Primary contact name.

#### `Readonly` country_code

```ts
country_code: string
```

ISO 3166-1 alpha-2 country code of the registered country.

#### `Readonly` email

```ts
email: string
```

Primary contact email address.

#### `Readonly` fax

```ts
fax: string
```

Primary contact fax number.

#### `Readonly` id

```ts
id: string
```

Internal unique identifier for this issuer.

#### `Readonly` lei

```ts
lei: string
```

Legal Entity Identifier (LEI) per ISO 17442. See [https://www.gleif.org](https://www.gleif.org).

#### `Readonly` logo

```ts
logo: string
```

URL pointing to the issuer's logo image.

#### `Readonly` name

```ts
name: string
```

Legal name of the issuer.

#### `Readonly` name_short

```ts
name_short: string
```

Short form of the issuer name.

#### `Readonly` phone

```ts
phone: string
```

Primary contact phone number.

#### `Readonly` postal_code

```ts
postal_code: string
```

Postal code of the registered address.

#### `Readonly` region_code

```ts
region_code: string
```

Region code grouping the issuer geographically (e.g. "EU" for Europe).

#### `Readonly` sector

```ts
sector: CdapiCommonIssuerSector
```

Primary industry sector.

#### `Readonly` street

```ts
street: string
```

Street address of the registered office.

#### `Readonly` sub_sector

```ts
sub_sector: CdapiCommonIssuerSubSector
```

Granular industry sub-sector.

#### `Readonly` website

```ts
website: string
```

Official website URL.
