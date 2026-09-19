---
title: "CdapiFxrateInstrumentFxrate"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiFxrateInstrumentFxrate"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiFxrateInstrumentFxrate"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiFxrateInstrumentFxrate.html"
defines: ["CdapiFxrateInstrumentFxrate"]
member_count: 4
members: ["from_currency_code", "id", "price_unit", "to_currency_code"]
member_groups:
  "Properties": ["from_currency_code", "id", "price_unit", "to_currency_code"]
---

# CdapiFxrateInstrumentFxrate

InstrumentFxrate represents a tradable foreign exchange rate instrument.
It can also be used as a lightweight descriptor when only the id field is populated.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.fxrate.InstrumentFxrate

```ts
interface CdapiFxrateInstrumentFxrate {
    from_currency_code: string;
    id: number;
    price_unit: number;
    to_currency_code: string;
}
```

### Properties

#### `Readonly` from_currency_code

```ts
from_currency_code: string
```

ISO 4217 currency code of the base (source) currency (e.g. "EUR").

#### `Readonly` id

```ts
id: number
```

Internal unique identifier for this instrument.

##### Remarks

Format: int32

#### `Readonly` price_unit

```ts
price_unit: number
```

Price unit — the number of base currency units per quote.
Common values: 1, 10, 100. Example: price_unit = 100 means the rate is quoted per 100 units.

##### Remarks

Format: int32

#### `Readonly` to_currency_code

```ts
to_currency_code: string
```

ISO 4217 currency code of the quote (target) currency (e.g. "USD").
