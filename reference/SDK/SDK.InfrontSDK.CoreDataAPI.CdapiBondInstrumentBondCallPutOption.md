---
title: "CdapiBondInstrumentBondCallPutOption"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiBondInstrumentBondCallPutOption"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiBondInstrumentBondCallPutOption"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiBondInstrumentBondCallPutOption.html"
defines: ["CdapiBondInstrumentBondCallPutOption"]
member_count: 14
members: ["currency_code", "exercise_type_code", "from_date", "in_whole_part", "is_formula_based_price", "is_mandatory", "max_notice_days", "min_notice_days", "notice_from_date", "notice_to_date", "price", "price_as_percent", "to_date", "type_code"]
member_groups:
  "Properties": ["currency_code", "exercise_type_code", "from_date", "in_whole_part", "is_formula_based_price", "is_mandatory", "max_notice_days", "min_notice_days", "notice_from_date", "notice_to_date", "price", "price_as_percent", "to_date", "type_code"]
---

# CdapiBondInstrumentBondCallPutOption

CallPutOption represents an embedded early redemption option on the bond.
Call options give the issuer the right to redeem early; put options give
the holder the right to demand early repayment.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.bond.InstrumentBond_CallPutOption

```ts
interface CdapiBondInstrumentBondCallPutOption {
    currency_code: string;
    exercise_type_code: string;
    from_date: string;
    in_whole_part: string;
    is_formula_based_price: boolean;
    is_mandatory: boolean;
    max_notice_days: number;
    min_notice_days: number;
    notice_from_date: string;
    notice_to_date: string;
    price: number;
    price_as_percent: number;
    to_date: string;
    type_code: string;
}
```

### Properties

#### `Readonly` currency_code

```ts
currency_code: string
```

ISO 4217 currency code in which the option price is denominated.

#### `Readonly` exercise_type_code

```ts
exercise_type_code: string
```

Exercise type code (e.g. "AMERICAN", "EUROPEAN") — defines when the option can be exercised.

#### `Readonly` from_date

```ts
from_date: string
```

Start of the period during which the option may be exercised. ISO-8601 recommended.

#### `Readonly` in_whole_part

```ts
in_whole_part: string
```

Indicates whether the redemption is applied to the whole or partial nominal amount.

#### `Readonly` is_formula_based_price

```ts
is_formula_based_price: boolean
```

If true, the redemption price is determined by a formula rather than a fixed value.

#### `Readonly` is_mandatory

```ts
is_mandatory: boolean
```

If true, exercise of the option is mandatory under certain conditions.

#### `Readonly` max_notice_days

```ts
max_notice_days: number
```

Maximum number of calendar days' notice allowed before exercising the option.

##### Remarks

Format: int32

#### `Readonly` min_notice_days

```ts
min_notice_days: number
```

Minimum number of calendar days' notice required before exercising the option.

##### Remarks

Format: int32

#### `Readonly` notice_from_date

```ts
notice_from_date: string
```

Start of the notice period — earliest date by which notice of exercise must be given.

#### `Readonly` notice_to_date

```ts
notice_to_date: string
```

End of the notice period — latest date by which notice of exercise must be given.

#### `Readonly` price

```ts
price: number
```

Absolute redemption price at which the option may be exercised.

##### Remarks

Format: double

#### `Readonly` price_as_percent

```ts
price_as_percent: number
```

Redemption price expressed as a percentage of nominal value (e.g. 102.5 = 102.5%).

##### Remarks

Format: double

#### `Readonly` to_date

```ts
to_date: string
```

End of the period during which the option may be exercised. ISO-8601 recommended.

#### `Readonly` type_code

```ts
type_code: string
```

Type code identifying whether this is a call or put option (e.g. "CALL", "PUT").
