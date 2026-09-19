---
title: "CdapiStructuredProductInstrumentCertificate"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiStructuredProductInstrumentCertificate"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiStructuredProductInstrumentCertificate"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiStructuredProductInstrumentCertificate.html"
defines: ["CdapiStructuredProductInstrumentCertificate"]
member_count: 16
members: ["_meta", "annual_income_rate", "first_payment_date", "has_management_fee", "id", "income_interval", "income_interval_type", "interest_from_date", "interest_rate_calculation_method", "is_capital_protected", "is_rolling", "management_fee", "nominal_value", "rolling_frequency", "rolling_strategy", "source"]
member_groups:
  "Properties": ["_meta", "annual_income_rate", "first_payment_date", "has_management_fee", "id", "income_interval", "income_interval_type", "interest_from_date", "interest_rate_calculation_method", "is_capital_protected", "is_rolling", "management_fee", "nominal_value", "rolling_frequency", "rolling_strategy", "source"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.BasedefEntityMeta", "SDK.InfrontSDK.CoreDataAPI.CdapiStructuredProductDictionary", "SDK.InfrontSDK.CoreDataAPI.CdapiStructuredProductInstrumentCertificateSource"]
---

# CdapiStructuredProductInstrumentCertificate

InstrumentCertificate represents master data specific to certificate instruments,
extending the general structured product model with certificate-specific attributes.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.structured_product.InstrumentCertificate

```ts
interface CdapiStructuredProductInstrumentCertificate {
    _meta: BasedefEntityMeta;
    annual_income_rate: number;
    first_payment_date: string;
    has_management_fee: boolean;
    id: string;
    income_interval: number;
    income_interval_type: CdapiStructuredProductDictionary;
    interest_from_date: string;
    interest_rate_calculation_method: CdapiStructuredProductDictionary;
    is_capital_protected: boolean;
    is_rolling: boolean;
    management_fee: number;
    nominal_value: number;
    rolling_frequency: CdapiStructuredProductDictionary;
    rolling_strategy: CdapiStructuredProductDictionary;
    source: CdapiStructuredProductInstrumentCertificateSource;
}
```

### Properties

#### `Readonly` _meta

```ts
_meta: BasedefEntityMeta
```

Entity metadata (creation time, update time, version, etc.).

#### `Readonly` annual_income_rate

```ts
annual_income_rate: number
```

Annual income rate as an integer (e.g. 500 = 5.00%). Source: SIX.

##### Remarks

Format: int32

#### `Readonly` first_payment_date

```ts
first_payment_date: string
```

Date of the first income payment. ISO-8601 recommended. Source: SIX.

#### `Readonly` has_management_fee

```ts
has_management_fee: boolean
```

If true, a management fee is charged on this certificate. Source: STG.

#### `Readonly` id

```ts
id: string
```

Internal unique identifier for this instrument.

#### `Readonly` income_interval

```ts
income_interval: number
```

Number of intervals between income payments (e.g. 1 for annual, 2 for semi-annual). Source: SIX.

##### Remarks

Format: int32

#### `Readonly` income_interval_type

```ts
income_interval_type: CdapiStructuredProductDictionary
```

Type defining the interval between income payments (e.g. "ANNUAL", "SEMI_ANNUAL"). Source: SIX.

#### `Readonly` interest_from_date

```ts
interest_from_date: string
```

Date from which interest starts accruing. ISO-8601 recommended. Source: SIX.

#### `Readonly` interest_rate_calculation_method

```ts
interest_rate_calculation_method: CdapiStructuredProductDictionary
```

Interest rate calculation method (e.g. "ACT/365", "30/360"). Source: STG.

#### `Readonly` is_capital_protected

```ts
is_capital_protected: boolean
```

If true, the certificate guarantees return of capital at maturity. Source: STG.

#### `Readonly` is_rolling

```ts
is_rolling: boolean
```

If true, the certificate automatically rolls into the next series at expiry. Source: STG.

#### `Readonly` management_fee

```ts
management_fee: number
```

Annual management fee expressed as a basis points integer (e.g. 50 = 0.50%). Source: STG.

##### Remarks

Format: int64

#### `Readonly` nominal_value

```ts
nominal_value: number
```

Nominal value of the certificate (face value per unit). Source: STG.

##### Remarks

Format: int64

#### `Readonly` rolling_frequency

```ts
rolling_frequency: CdapiStructuredProductDictionary
```

Frequency at which the certificate rolls over (e.g. "MONTHLY", "QUARTERLY"). Source: STG.

#### `Readonly` rolling_strategy

```ts
rolling_strategy: CdapiStructuredProductDictionary
```

Rolling strategy defining how the roll-over is executed. Source: STG.

#### `Readonly` source

```ts
source: CdapiStructuredProductInstrumentCertificateSource
```

Data source for this record (shares the Source enum with InstrumentStructuredProduct).

##### Remarks

Format: enum
