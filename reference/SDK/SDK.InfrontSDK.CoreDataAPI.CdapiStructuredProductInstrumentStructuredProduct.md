---
title: "CdapiStructuredProductInstrumentStructuredProduct"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiStructuredProductInstrumentStructuredProduct"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiStructuredProductInstrumentStructuredProduct"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiStructuredProductInstrumentStructuredProduct.html"
defines: ["CdapiStructuredProductInstrumentStructuredProduct"]
member_count: 42
members: ["_meta", "basic_type", "business_day_convention_type", "day_count_method_type", "effective_from_date", "exercise_type_code", "final_valuation_date", "has_issuer_termination_right", "id", "initial_fixing", "is_active", "is_automatic_exercisable", "is_currency_hedged", "is_private_placement", "is_rolling", "issuing_currency_code", "issuing_date", "issuing_price", "issuing_price_rate", "issuing_value_date", "issuing_volume", "legal_security_type", "marketing_product_name_issuer", "maturity_date", "official_product_name_issuer", "party", "payment", "payment_date", "product_description_url", "product_name_issuer", "quotation_type", "redemption_date", "settlement_type", "source", "start_of_exercise_period_date", "strike_price", "subscription_ratio", "type_code", "underlying_category_name", "underlying_currency_code", "underlying_name", "underlying_reference_price"]
member_groups:
  "Properties": ["_meta", "basic_type", "business_day_convention_type", "day_count_method_type", "effective_from_date", "exercise_type_code", "final_valuation_date", "has_issuer_termination_right", "id", "initial_fixing", "is_active", "is_automatic_exercisable", "is_currency_hedged", "is_private_placement", "is_rolling", "issuing_currency_code", "issuing_date", "issuing_price", "issuing_price_rate", "issuing_value_date", "issuing_volume", "legal_security_type", "marketing_product_name_issuer", "maturity_date", "official_product_name_issuer", "party", "payment", "payment_date", "product_description_url", "product_name_issuer", "quotation_type", "redemption_date", "settlement_type", "source", "start_of_exercise_period_date", "strike_price", "subscription_ratio", "type_code", "underlying_category_name", "underlying_currency_code", "underlying_name", "underlying_reference_price"]
reference_count: 8
references: ["SDK.InfrontSDK.CoreDataAPI.BasedefEntityMeta", "SDK.InfrontSDK.CoreDataAPI.CdapiStructuredProductDictionary", "SDK.InfrontSDK.CoreDataAPI.CdapiStructuredProductInstrumentStructuredProductExerciseTypeCode", "SDK.InfrontSDK.CoreDataAPI.CdapiStructuredProductInstrumentStructuredProductInitialFixing", "SDK.InfrontSDK.CoreDataAPI.CdapiStructuredProductInstrumentStructuredProductParty", "SDK.InfrontSDK.CoreDataAPI.CdapiStructuredProductInstrumentStructuredProductPayment", "SDK.InfrontSDK.CoreDataAPI.CdapiStructuredProductInstrumentStructuredProductSource", "SDK.InfrontSDK.CoreDataAPI.CdapiStructuredProductInstrumentStructuredProductTypeCode"]
---

# CdapiStructuredProductInstrumentStructuredProduct

InstrumentStructuredProduct represents the master data for a structured product instrument.
Structured products are pre-packaged investments linked to an underlying asset
(equity, index, commodity, FX, etc.) with defined risk/return profiles.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.structured_product.InstrumentStructuredProduct

```ts
interface CdapiStructuredProductInstrumentStructuredProduct {
    _meta: BasedefEntityMeta;
    basic_type: CdapiStructuredProductDictionary;
    business_day_convention_type: CdapiStructuredProductDictionary;
    day_count_method_type: CdapiStructuredProductDictionary;
    effective_from_date: string;
    exercise_type_code: CdapiStructuredProductInstrumentStructuredProductExerciseTypeCode;
    final_valuation_date: string;
    has_issuer_termination_right: boolean;
    id: string;
    initial_fixing: readonly CdapiStructuredProductInstrumentStructuredProductInitialFixing[];
    is_active: boolean;
    is_automatic_exercisable: boolean;
    is_currency_hedged: boolean;
    is_private_placement: boolean;
    is_rolling: boolean;
    issuing_currency_code: string;
    issuing_date: string;
    issuing_price: number;
    issuing_price_rate: number;
    issuing_value_date: string;
    issuing_volume: number;
    legal_security_type: CdapiStructuredProductDictionary;
    marketing_product_name_issuer: string;
    maturity_date: string;
    official_product_name_issuer: string;
    party: readonly CdapiStructuredProductInstrumentStructuredProductParty[];
    payment: readonly CdapiStructuredProductInstrumentStructuredProductPayment[];
    payment_date: string;
    product_description_url: string;
    product_name_issuer: string;
    quotation_type: CdapiStructuredProductDictionary;
    redemption_date: string;
    settlement_type: CdapiStructuredProductDictionary;
    source: CdapiStructuredProductInstrumentStructuredProductSource;
    start_of_exercise_period_date: string;
    strike_price: number;
    subscription_ratio: number;
    type_code: CdapiStructuredProductInstrumentStructuredProductTypeCode;
    underlying_category_name: string;
    underlying_currency_code: string;
    underlying_name: string;
    underlying_reference_price: number;
}
```

### Properties

#### `Readonly` _meta

```ts
_meta: BasedefEntityMeta
```

Entity metadata (creation time, update time, version, etc.).

#### `Readonly` basic_type

```ts
basic_type: CdapiStructuredProductDictionary
```

Basic product type classification according to the SIX taxonomy.
Source: SIX.

#### `Readonly` business_day_convention_type

```ts
business_day_convention_type: CdapiStructuredProductDictionary
```

Business day convention applied when a payment date falls on a non-business day.
Source: SIX.

#### `Readonly` day_count_method_type

```ts
day_count_method_type: CdapiStructuredProductDictionary
```

Day count convention used for interest calculations (e.g. "ACT/360", "30/360").
Source: SIX.

#### `Readonly` effective_from_date

```ts
effective_from_date: string
```

Date from which the product terms become effective. ISO-8601 recommended.
Source: SIX.

#### `Readonly` exercise_type_code

```ts
exercise_type_code: CdapiStructuredProductInstrumentStructuredProductExerciseTypeCode
```

Type of exercise right (AMERICAN, EUROPEAN, BERMUDAN, or OTHER).
Sources: GENERAL, STG.

##### Remarks

Format: enum

#### `Readonly` final_valuation_date

```ts
final_valuation_date: string
```

Date on which the final valuation of the underlying is performed. ISO-8601 recommended.
Source: STG.

#### `Readonly` has_issuer_termination_right

```ts
has_issuer_termination_right: boolean
```

If true, the issuer has the contractual right to terminate the product early.
Source: STG.

#### `Readonly` id

```ts
id: string
```

Internal unique identifier for this instrument.

#### `Readonly` initial_fixing

```ts
initial_fixing: readonly CdapiStructuredProductInstrumentStructuredProductInitialFixing[]
```

List of initial fixing dates and reference prices for the underlying.
Source: SIX.

#### `Readonly` is_active

```ts
is_active: boolean
```

If true, the product is currently active and available for trading.
Source: STG.

#### `Readonly` is_automatic_exercisable

```ts
is_automatic_exercisable: boolean
```

If true, the product is automatically exercised at expiry if in-the-money.
Source: STG.

#### `Readonly` is_currency_hedged

```ts
is_currency_hedged: boolean
```

If true, the product includes a currency hedge to reduce FX risk for the investor.
Source: STG.

#### `Readonly` is_private_placement

```ts
is_private_placement: boolean
```

If true, the product is a private placement and not publicly distributed.
Source: STG.

#### `Readonly` is_rolling

```ts
is_rolling: boolean
```

If true, the product automatically rolls its exposure to a new series at expiry.
Source: STG.

#### `Readonly` issuing_currency_code

```ts
issuing_currency_code: string
```

ISO 4217 currency code in which the product was issued.
Source: STG.

#### `Readonly` issuing_date

```ts
issuing_date: string
```

Date the product was issued. ISO-8601 recommended.
Source: SIX.

#### `Readonly` issuing_price

```ts
issuing_price: number
```

Price at which the product was originally issued.
Source: STG.

##### Remarks

Format: double

#### `Readonly` issuing_price_rate

```ts
issuing_price_rate: number
```

Issue price expressed as a rate / percentage of nominal value.
Source: SIX.

##### Remarks

Format: double

#### `Readonly` issuing_value_date

```ts
issuing_value_date: string
```

Value date of the issuance. ISO-8601 recommended.
Source: STG.

#### `Readonly` issuing_volume

```ts
issuing_volume: number
```

Total nominal issuing volume.
Source: STG.

##### Remarks

Format: int64

#### `Readonly` legal_security_type

```ts
legal_security_type: CdapiStructuredProductDictionary
```

Legal security type classification under applicable regulations.
Source: SIX.

#### `Readonly` marketing_product_name_issuer

```ts
marketing_product_name_issuer: string
```

Marketing / commercial product name used by the issuer in investor communications.
Source: STG.

#### `Readonly` maturity_date

```ts
maturity_date: string
```

Maturity date of the product. ISO-8601 recommended.
Source: XID.

#### `Readonly` official_product_name_issuer

```ts
official_product_name_issuer: string
```

Official product name as designated by the issuer for regulatory purposes.
Source: STG.

#### `Readonly` party

```ts
party: readonly CdapiStructuredProductInstrumentStructuredProductParty[]
```

List of parties involved in the product (issuer, guarantor, etc.).
Source: SIX.

#### `Readonly` payment

```ts
payment: readonly CdapiStructuredProductInstrumentStructuredProductPayment[]
```

List of scheduled income / coupon payments on this product.
Source: SIX.

#### `Readonly` payment_date

```ts
payment_date: string
```

Date on which payment is made at maturity or exercise. ISO-8601 recommended.
Source: STG.

#### `Readonly` product_description_url

```ts
product_description_url: string
```

URL pointing to the official product description page or factsheet.
Source: SIX.

#### `Readonly` product_name_issuer

```ts
product_name_issuer: string
```

Product name as provided by the issuer.
Sources: GENERAL, STG.

#### `Readonly` quotation_type

```ts
quotation_type: CdapiStructuredProductDictionary
```

Quotation type defining how the product price is expressed (e.g. "PERCENT", "ABSOLUTE").
Sources: STG, SIX.

#### `Readonly` redemption_date

```ts
redemption_date: string
```

Date on which the product is redeemed / matures. ISO-8601 recommended.
Source: SIX.

#### `Readonly` settlement_type

```ts
settlement_type: CdapiStructuredProductDictionary
```

Settlement type defining how the product is settled at expiry (e.g. "CASH", "PHYSICAL").
Source: STG.

#### `Readonly` source

```ts
source: CdapiStructuredProductInstrumentStructuredProductSource
```

Data source for this record (GENERAL, STG, SIX, or XID).

##### Remarks

Format: enum

#### `Readonly` start_of_exercise_period_date

```ts
start_of_exercise_period_date: string
```

Start date of the exercise period. ISO-8601 recommended.
Source: STG.

#### `Readonly` strike_price

```ts
strike_price: number
```

Strike price of the product — the reference level for payoff calculations.
Sources: GENERAL, XID.

##### Remarks

Format: double

#### `Readonly` subscription_ratio

```ts
subscription_ratio: number
```

Subscription ratio — number of product units required to acquire one unit of the underlying.
Source: GENERAL.

##### Remarks

Format: double

#### `Readonly` type_code

```ts
type_code: CdapiStructuredProductInstrumentStructuredProductTypeCode
```

Direction of the product: RISE (bullish) or FALL (bearish).
Sources: GENERAL, STG.

##### Remarks

Format: enum

#### `Readonly` underlying_category_name

```ts
underlying_category_name: string
```

Category name of the underlying asset (e.g. "Equity", "Index", "Commodity").
Source: XID.

#### `Readonly` underlying_currency_code

```ts
underlying_currency_code: string
```

ISO 4217 currency code of the underlying asset (e.g. "EUR", "USD").
Sources: GENERAL, SIX.

#### `Readonly` underlying_name

```ts
underlying_name: string
```

Display name of the underlying asset (e.g. "Apple Inc.", "DAX").
Source: SIX.

#### `Readonly` underlying_reference_price

```ts
underlying_reference_price: number
```

Reference price of the underlying asset at the time the product was structured.
Source: GENERAL.

##### Remarks

Format: double
