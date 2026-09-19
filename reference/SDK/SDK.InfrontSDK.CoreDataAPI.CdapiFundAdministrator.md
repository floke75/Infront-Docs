---
title: "CdapiFundAdministrator"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiFundAdministrator"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiFundAdministrator"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiFundAdministrator.html"
defines: ["CdapiFundAdministrator"]
member_count: 22
members: ["_meta", "address", "address_de", "address_en", "address_fr", "address_nl", "city", "city_de", "city_en", "city_fr", "city_nl", "email", "id", "lei", "name", "name_de", "name_en", "name_fr", "name_nl", "phone", "postal_code", "website"]
member_groups:
  "Properties": ["_meta", "address", "address_de", "address_en", "address_fr", "address_nl", "city", "city_de", "city_en", "city_fr", "city_nl", "email", "id", "lei", "name", "name_de", "name_en", "name_fr", "name_nl", "phone", "postal_code", "website"]
reference_count: 1
references: ["SDK.InfrontSDK.CoreDataAPI.BasedefEntityMeta"]
---

# CdapiFundAdministrator

Administrator holds the fund administration company data.
The administrator is responsible for the day-to-day administration of the fund
(e.g. NAV calculation, shareholder register, regulatory reporting).

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.fund.Administrator

```ts
interface CdapiFundAdministrator {
    _meta: BasedefEntityMeta;
    address: string;
    address_de: string;
    address_en: string;
    address_fr: string;
    address_nl: string;
    city: string;
    city_de: string;
    city_en: string;
    city_fr: string;
    city_nl: string;
    email: string;
    id: number;
    lei: string;
    name: string;
    name_de: string;
    name_en: string;
    name_fr: string;
    name_nl: string;
    phone: string;
    postal_code: string;
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

Registered office address (default language).

#### `Readonly` address_de

```ts
address_de: string
```

Registered office address in German.

#### `Readonly` address_en

```ts
address_en: string
```

Registered office address in English.

#### `Readonly` address_fr

```ts
address_fr: string
```

Registered office address in French.

#### `Readonly` address_nl

```ts
address_nl: string
```

Registered office address in Dutch.

#### `Readonly` city

```ts
city: string
```

City of the registered address (default language).

#### `Readonly` city_de

```ts
city_de: string
```

City in German.

#### `Readonly` city_en

```ts
city_en: string
```

City in English.

#### `Readonly` city_fr

```ts
city_fr: string
```

City in French.

#### `Readonly` city_nl

```ts
city_nl: string
```

City in Dutch.

#### `Readonly` email

```ts
email: string
```

Contact email address.

#### `Readonly` id

```ts
id: number
```

Internal unique identifier for this administrator.

##### Remarks

Format: int32

#### `Readonly` lei

```ts
lei: string
```

Legal Entity Identifier (LEI) of the administrator — ISO 17442.

#### `Readonly` name

```ts
name: string
```

Default language legal name of the administrator.

#### `Readonly` name_de

```ts
name_de: string
```

German legal name.

#### `Readonly` name_en

```ts
name_en: string
```

English legal name.

#### `Readonly` name_fr

```ts
name_fr: string
```

French legal name.

#### `Readonly` name_nl

```ts
name_nl: string
```

Dutch legal name.

#### `Readonly` phone

```ts
phone: string
```

Contact phone number.

#### `Readonly` postal_code

```ts
postal_code: string
```

Postal code of the registered address.

#### `Readonly` website

```ts
website: string
```

Official website URL.
