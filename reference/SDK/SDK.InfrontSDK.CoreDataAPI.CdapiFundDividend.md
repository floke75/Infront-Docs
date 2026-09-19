---
title: "CdapiFundDividend"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiFundDividend"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiFundDividend"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiFundDividend.html"
defines: ["CdapiFundDividend"]
member_count: 7
members: ["_meta", "currency_code", "date", "id", "payment_date", "sequence_number", "value"]
member_groups:
  "Properties": ["_meta", "currency_code", "date", "id", "payment_date", "sequence_number", "value"]
reference_count: 1
references: ["SDK.InfrontSDK.CoreDataAPI.BasedefEntityMeta"]
---

# CdapiFundDividend

Dividend holds a single dividend distribution record for a fund share class.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.fund.Dividend

```ts
interface CdapiFundDividend {
    _meta: BasedefEntityMeta;
    currency_code: string;
    date: string;
    id: number;
    payment_date: string;
    sequence_number: number;
    value: number;
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

ISO 4217 alpha-3 currency code in which the dividend is paid.

#### `Readonly` date

```ts
date: string
```

Ex-dividend date — the cut-off date for eligibility to receive this dividend.
ISO-8601 recommended.

#### `Readonly` id

```ts
id: number
```

Internal unique identifier for this dividend record.

##### Remarks

Format: int32

#### `Readonly` payment_date

```ts
payment_date: string
```

Payment date — the date on which the dividend is actually paid to shareholders.
ISO-8601 recommended.

#### `Readonly` sequence_number

```ts
sequence_number: number
```

Sequence number — used to order multiple dividends paid within the same period.

##### Remarks

Format: int32

#### `Readonly` value

```ts
value: number
```

Gross dividend value per share in the fund's currency.

##### Remarks

Format: double
