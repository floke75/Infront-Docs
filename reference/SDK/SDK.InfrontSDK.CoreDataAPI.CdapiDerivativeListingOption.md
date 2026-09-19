---
title: "CdapiDerivativeListingOption"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiDerivativeListingOption"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiDerivativeListingOption"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiDerivativeListingOption.html"
defines: ["CdapiDerivativeListingOption"]
member_count: 16
members: ["_meta", "contract_size", "contract_value", "exercise_type_code", "generation_number", "id", "maturity_category_code", "maturity_date", "original_strike_price", "strike_price", "strike_price_currency_code", "tick_size", "tick_value", "trading_month", "type_code", "version_number"]
member_groups:
  "Properties": ["_meta", "contract_size", "contract_value", "exercise_type_code", "generation_number", "id", "maturity_category_code", "maturity_date", "original_strike_price", "strike_price", "strike_price_currency_code", "tick_size", "tick_value", "trading_month", "type_code", "version_number"]
reference_count: 4
references: ["SDK.InfrontSDK.CoreDataAPI.BasedefEntityMeta", "SDK.InfrontSDK.CoreDataAPI.CdapiDerivativeListingOptionExerciseTypeCode", "SDK.InfrontSDK.CoreDataAPI.CdapiDerivativeListingOptionMaturityCategoryCode", "SDK.InfrontSDK.CoreDataAPI.CdapiDerivativeListingOptionTypeCode"]
---

# CdapiDerivativeListingOption

ListingOption represents the listing-level data for an option contract.
An option grants the holder the right, but not the obligation, to buy or sell
an underlying asset at a specified strike price before or at expiry.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.derivative.ListingOption

```ts
interface CdapiDerivativeListingOption {
    _meta: BasedefEntityMeta;
    contract_size: number;
    contract_value: number;
    exercise_type_code: CdapiDerivativeListingOptionExerciseTypeCode;
    generation_number: string;
    id: string;
    maturity_category_code: CdapiDerivativeListingOptionMaturityCategoryCode;
    maturity_date: string;
    original_strike_price: number;
    strike_price: number;
    strike_price_currency_code: string;
    tick_size: number;
    tick_value: number;
    trading_month: string;
    type_code: CdapiDerivativeListingOptionTypeCode;
    version_number: string;
}
```

### Properties

#### `Readonly` _meta

```ts
_meta: BasedefEntityMeta
```

Entity metadata (creation time, update time, version, etc.).
Defined externally in dev/infrontfinance/basedef/message.proto.

#### `Readonly` contract_size

```ts
contract_size: number
```

Number of units of the underlying asset covered by one contract.

##### Remarks

Format: double

#### `Readonly` contract_value

```ts
contract_value: number
```

Monetary value corresponding to a one-point change of the underlying instrument.
Used for futures and options traded at Deutsche Börse.
Examples: DAX option = EUR 5, TecDAX option = EUR 10.

##### Remarks

Format: double

#### `Readonly` exercise_type_code

```ts
exercise_type_code: CdapiDerivativeListingOptionExerciseTypeCode
```

Defines when the option may be exercised (e.g. AMERICAN, EUROPEAN).

##### Remarks

Format: enum

#### `Readonly` generation_number

```ts
generation_number: string
```

Generation number for EUREX options — identifies the option series generation.

#### `Readonly` id

```ts
id: string
```

Internal unique identifier for this listing.

#### `Readonly` maturity_category_code

```ts
maturity_category_code: CdapiDerivativeListingOptionMaturityCategoryCode
```

Expiry cycle category of the option (daily, weekly, or standard).

##### Remarks

Format: enum

#### `Readonly` maturity_date

```ts
maturity_date: string
```

Expiry date of the option. ISO-8601 format recommended (e.g. "2024-12-20").

#### `Readonly` original_strike_price

```ts
original_strike_price: number
```

Original strike price at the time the option was issued, before any adjustments.

##### Remarks

Format: double

#### `Readonly` strike_price

```ts
strike_price: number
```

Strike price of the option — the price at which the underlying can be bought or sold.

##### Remarks

Format: double

#### `Readonly` strike_price_currency_code

```ts
strike_price_currency_code: string
```

ISO 4217 currency code of the strike price (e.g. "EUR", "USD").

#### `Readonly` tick_size

```ts
tick_size: number
```

Minimum price movement (tick) of the contract.

##### Remarks

Format: double

#### `Readonly` tick_value

```ts
tick_value: number
```

Monetary value of one tick movement.

##### Remarks

Format: double

#### `Readonly` trading_month

```ts
trading_month: string
```

Trading month expressed as a date. ISO-8601 format recommended (e.g. "2024-12-01").

#### `Readonly` type_code

```ts
type_code: CdapiDerivativeListingOptionTypeCode
```

Direction of the option: RISE (call) or FALL (put).

##### Remarks

Format: enum

#### `Readonly` version_number

```ts
version_number: string
```

Version number for EUREX options — identifies the option series version.
