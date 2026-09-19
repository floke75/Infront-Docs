---
title: "CdapiFxrateCrossrate"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiFxrateCrossrate"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiFxrateCrossrate"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiFxrateCrossrate.html"
defines: ["CdapiFxrateCrossrate"]
member_count: 4
members: ["from_currency_code", "price", "timestamp", "to_currency_code"]
member_groups:
  "Properties": ["from_currency_code", "price", "timestamp", "to_currency_code"]
---

# CdapiFxrateCrossrate

Crossrate represents a calculated or published cross exchange rate between two currencies.
A cross rate is derived from two currency pairs that do not involve the domestic currency.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.fxrate.Crossrate

```ts
interface CdapiFxrateCrossrate {
    from_currency_code: string;
    price: number;
    timestamp: string;
    to_currency_code: string;
}
```

### Properties

#### `Readonly` from_currency_code

```ts
from_currency_code: string
```

ISO 4217 currency code of the base (source) currency (e.g. "EUR").

#### `Readonly` price

```ts
price: number
```

Exchange rate: number of to_currency units per one from_currency unit.

##### Remarks

Format: double

#### `Readonly` timestamp

```ts
timestamp: string
```

Timestamp of the rate. ISO-8601 format recommended (e.g. "2024-01-15T14:30:00Z").

#### `Readonly` to_currency_code

```ts
to_currency_code: string
```

ISO 4217 currency code of the quote (target) currency (e.g. "JPY").
