---
title: "CdapiFundUmbrella"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiFundUmbrella"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiFundUmbrella"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiFundUmbrella.html"
defines: ["CdapiFundUmbrella"]
member_count: 22
members: ["_meta", "book_year_end", "foundation_date", "general_meeting_date", "general_meeting_date_de", "general_meeting_date_en", "general_meeting_date_fr", "general_meeting_date_nl", "id", "is_open", "legal_type_europe", "legal_type_national", "name", "name_de", "name_en", "name_fr", "name_nl", "name_short", "name_short_de", "name_short_en", "name_short_fr", "name_short_nl"]
member_groups:
  "Properties": ["_meta", "book_year_end", "foundation_date", "general_meeting_date", "general_meeting_date_de", "general_meeting_date_en", "general_meeting_date_fr", "general_meeting_date_nl", "id", "is_open", "legal_type_europe", "legal_type_national", "name", "name_de", "name_en", "name_fr", "name_nl", "name_short", "name_short_de", "name_short_en", "name_short_fr", "name_short_nl"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.BasedefEntityMeta", "SDK.InfrontSDK.CoreDataAPI.CdapiFundDictionary", "SDK.InfrontSDK.CoreDataAPI.CdapiFundLegalTypeNational"]
---

# CdapiFundUmbrella

Umbrella holds the umbrella fund structure data.
An umbrella fund is a single legal entity containing multiple sub-funds (compartments),
each with its own investment policy and share classes but sharing common legal overhead.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.fund.Umbrella

```ts
interface CdapiFundUmbrella {
    _meta: BasedefEntityMeta;
    book_year_end: string;
    foundation_date: string;
    general_meeting_date: string;
    general_meeting_date_de: string;
    general_meeting_date_en: string;
    general_meeting_date_fr: string;
    general_meeting_date_nl: string;
    id: number;
    is_open: boolean;
    legal_type_europe: CdapiFundDictionary;
    legal_type_national: CdapiFundLegalTypeNational;
    name: string;
    name_de: string;
    name_en: string;
    name_fr: string;
    name_nl: string;
    name_short: string;
    name_short_de: string;
    name_short_en: string;
    name_short_fr: string;
    name_short_nl: string;
}
```

### Properties

#### `Readonly` _meta

```ts
_meta: BasedefEntityMeta
```

Entity metadata (creation time, update time, version, etc.).

#### `Readonly` book_year_end

```ts
book_year_end: string
```

End date of the fund's financial year (e.g. "31/12"). Used for annual reporting.

#### `Readonly` foundation_date

```ts
foundation_date: string
```

Date on which the umbrella fund was established. ISO-8601 recommended.

#### `Readonly` general_meeting_date

```ts
general_meeting_date: string
```

Date of the next Annual General Meeting (AGM) (default language).

#### `Readonly` general_meeting_date_de

```ts
general_meeting_date_de: string
```

AGM date in German format.

#### `Readonly` general_meeting_date_en

```ts
general_meeting_date_en: string
```

AGM date in English format.

#### `Readonly` general_meeting_date_fr

```ts
general_meeting_date_fr: string
```

AGM date in French format.

#### `Readonly` general_meeting_date_nl

```ts
general_meeting_date_nl: string
```

AGM date in Dutch format.

#### `Readonly` id

```ts
id: number
```

Internal unique identifier for this umbrella fund.

##### Remarks

Format: int32

#### `Readonly` is_open

```ts
is_open: boolean
```

If true, the umbrella fund is open to new investors (open-ended).
If false, the fund is closed to new subscriptions (closed-ended).

#### `Readonly` legal_type_europe

```ts
legal_type_europe: CdapiFundDictionary
```

European legal type — the harmonised European fund legal structure
(e.g. UCITS, AIF, ELTIF).

#### `Readonly` legal_type_national

```ts
legal_type_national: CdapiFundLegalTypeNational
```

National legal type — the legal form of the fund under its country of domicile's law
(e.g. SICAV, FCP, OEIC, Unit Trust).

#### `Readonly` name

```ts
name: string
```

Default language legal name of the umbrella fund.

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

#### `Readonly` name_short

```ts
name_short: string
```

Short name (default language) — often the commonly used marketing name.

#### `Readonly` name_short_de

```ts
name_short_de: string
```

Short name in German.

#### `Readonly` name_short_en

```ts
name_short_en: string
```

Short name in English.

#### `Readonly` name_short_fr

```ts
name_short_fr: string
```

Short name in French.

#### `Readonly` name_short_nl

```ts
name_short_nl: string
```

Short name in Dutch.
