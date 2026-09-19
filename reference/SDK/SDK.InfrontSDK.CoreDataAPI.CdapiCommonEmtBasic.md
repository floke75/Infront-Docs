---
title: "CdapiCommonEmtBasic"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiCommonEmtBasic"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiCommonEmtBasic"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiCommonEmtBasic.html"
defines: ["CdapiCommonEmtBasic"]
member_count: 33
members: ["_meta", "currency_code", "ex_post_cost_calculation_basis_italy", "file_generation_timestamp", "general_reference_date", "guarantor_name", "has_data_reporting_ex_ante", "has_data_reporting_ex_post", "has_data_reporting_target_market", "has_distribution_of_cash", "has_performance_fee", "id", "identifying_data", "is_fund_share_class_without_retrocession", "is_leveraged_financial_instrument_or_contingent_liability_instrument", "is_maybe_terminated_early", "manufacturer_email", "manufacturer_lei", "manufacturer_name", "manufacturer_product_governance_process", "maturity_date", "name", "producer_email", "producer_lei", "producer_name", "product_category_or_nature", "product_type", "source", "structured_securities_product_category_or_nature", "structured_securities_quotation", "type_notional_or_item_based", "type_of_identification_code_for_the_financial_instrument", "version"]
member_groups:
  "Properties": ["_meta", "currency_code", "ex_post_cost_calculation_basis_italy", "file_generation_timestamp", "general_reference_date", "guarantor_name", "has_data_reporting_ex_ante", "has_data_reporting_ex_post", "has_data_reporting_target_market", "has_distribution_of_cash", "has_performance_fee", "id", "identifying_data", "is_fund_share_class_without_retrocession", "is_leveraged_financial_instrument_or_contingent_liability_instrument", "is_maybe_terminated_early", "manufacturer_email", "manufacturer_lei", "manufacturer_name", "manufacturer_product_governance_process", "maturity_date", "name", "producer_email", "producer_lei", "producer_name", "product_category_or_nature", "product_type", "source", "structured_securities_product_category_or_nature", "structured_securities_quotation", "type_notional_or_item_based", "type_of_identification_code_for_the_financial_instrument", "version"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.BasedefEntityMeta", "SDK.InfrontSDK.CoreDataAPI.CdapiCommonDictionary", "SDK.InfrontSDK.CoreDataAPI.CdapiCommonEmtBasicSource"]
---

# CdapiCommonEmtBasic

EmtBasic holds EMT (European MiFID Template) basic product data.
The EMT is the industry standard for transmitting MiFID II target market and
cost data between manufacturers and distributors. Source: INFRONT.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.common.EmtBasic

```ts
interface CdapiCommonEmtBasic {
    _meta: BasedefEntityMeta;
    currency_code: string;
    ex_post_cost_calculation_basis_italy: string;
    file_generation_timestamp: string;
    general_reference_date: string;
    guarantor_name: string;
    has_data_reporting_ex_ante: boolean;
    has_data_reporting_ex_post: boolean;
    has_data_reporting_target_market: boolean;
    has_distribution_of_cash: boolean;
    has_performance_fee: boolean;
    id: number;
    identifying_data: string;
    is_fund_share_class_without_retrocession: boolean;
    is_leveraged_financial_instrument_or_contingent_liability_instrument: boolean;
    is_maybe_terminated_early: boolean;
    manufacturer_email: string;
    manufacturer_lei: string;
    manufacturer_name: string;
    manufacturer_product_governance_process: CdapiCommonDictionary;
    maturity_date: string;
    name: string;
    producer_email: string;
    producer_lei: string;
    producer_name: string;
    product_category_or_nature: string;
    product_type: CdapiCommonDictionary;
    source: CdapiCommonEmtBasicSource;
    structured_securities_product_category_or_nature: number;
    structured_securities_quotation: string;
    type_notional_or_item_based: string;
    type_of_identification_code_for_the_financial_instrument: CdapiCommonDictionary;
    version: string;
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

EMT 00040: ISO 4217 currency code.

#### `Readonly` ex_post_cost_calculation_basis_italy

```ts
ex_post_cost_calculation_basis_italy: string
```

EMT 00120: Ex-post cost calculation basis for the Italian market.

#### `Readonly` file_generation_timestamp

```ts
file_generation_timestamp: string
```

EMT 00005: File generation timestamp. Note: not in Infront's EMT implementation.

#### `Readonly` general_reference_date

```ts
general_reference_date: string
```

EMT 00050: General reference date. ISO-8601 recommended.

#### `Readonly` guarantor_name

```ts
guarantor_name: string
```

EMT 00080: Legal name of the guarantor (if applicable).

#### `Readonly` has_data_reporting_ex_ante

```ts
has_data_reporting_ex_ante: boolean
```

EMT 00007: If true, this record contains ex-ante cost data.

#### `Readonly` has_data_reporting_ex_post

```ts
has_data_reporting_ex_post: boolean
```

EMT 00008: If true, this record contains ex-post cost data.

#### `Readonly` has_data_reporting_target_market

```ts
has_data_reporting_target_market: boolean
```

EMT 00006: If true, this record contains target market data.

#### `Readonly` has_distribution_of_cash

```ts
has_distribution_of_cash: boolean
```

EMT 00047: If true, income is distributed in cash. Note: not in Infront's EMT implementation.

#### `Readonly` has_performance_fee

```ts
has_performance_fee: boolean
```

EMT 00045: If true, a performance fee is charged. Note: not in Infront's EMT implementation.

#### `Readonly` id

```ts
id: number
```

##### Remarks

Format: int32

#### `Readonly` identifying_data

```ts
identifying_data: string
```

EMT 00010: Identifying data (e.g. ISIN).

#### `Readonly` is_fund_share_class_without_retrocession

```ts
is_fund_share_class_without_retrocession: boolean
```

EMT 00110: If true, this is a clean share class (without retrocession/trailer fee).

#### `Readonly` is_leveraged_financial_instrument_or_contingent_liability_instrument

```ts
is_leveraged_financial_instrument_or_contingent_liability_instrument: boolean
```

EMT 00100: If true, the instrument is leveraged or a contingent liability instrument
(e.g. CFD, spread bet) requiring enhanced risk warnings.

#### `Readonly` is_maybe_terminated_early

```ts
is_maybe_terminated_early: boolean
```

EMT 00067: If true, may be terminated early by the issuer or market events.
Note: not present in Infront's EMT implementation.

#### `Readonly` manufacturer_email

```ts
manufacturer_email: string
```

EMT 00074: Email address of the manufacturer.

#### `Readonly` manufacturer_lei

```ts
manufacturer_lei: string
```

EMT 00073: LEI of the manufacturer. Note: not in Infront's EMT implementation.

#### `Readonly` manufacturer_name

```ts
manufacturer_name: string
```

EMT 00070: Legal name of the product manufacturer.

#### `Readonly` manufacturer_product_governance_process

```ts
manufacturer_product_governance_process: CdapiCommonDictionary
```

EMT 00075: Manufacturer's product governance process.

#### `Readonly` maturity_date

```ts
maturity_date: string
```

EMT 00065: Maturity date. ISO-8601 recommended.

#### `Readonly` name

```ts
name: string
```

EMT 00030: Full name of the financial instrument.

#### `Readonly` producer_email

```ts
producer_email: string
```

EMT 00004: Email address of the EMT data producer.

#### `Readonly` producer_lei

```ts
producer_lei: string
```

EMT 00003: EMT producer LEI. Note: not in Infront's EMT implementation.

#### `Readonly` producer_name

```ts
producer_name: string
```

EMT 00002: EMT producer name. Note: not in Infront's EMT implementation.

#### `Readonly` product_category_or_nature

```ts
product_category_or_nature: string
```

EMT 00090: General product category or nature description.

#### `Readonly` product_type

```ts
product_type: CdapiCommonDictionary
```

EMT 00060: MiFID II product type classification.

#### `Readonly` source

```ts
source: CdapiCommonEmtBasicSource
```

##### Remarks

Format: enum

#### `Readonly` structured_securities_product_category_or_nature

```ts
structured_securities_product_category_or_nature: number
```

EMT 00095: Structured securities product category code (numeric).

##### Remarks

Format: int32

#### `Readonly` structured_securities_quotation

```ts
structured_securities_quotation: string
```

EMT 00096: Quotation method for structured securities (e.g. "PERCENT", "ABSOLUTE").

#### `Readonly` type_notional_or_item_based

```ts
type_notional_or_item_based: string
```

EMT 00085: Whether the instrument is notional-based or item-based.

#### `Readonly` type_of_identification_code_for_the_financial_instrument

```ts
type_of_identification_code_for_the_financial_instrument: CdapiCommonDictionary
```

EMT 00020: Type of identification code used (e.g. ISIN, VALOR).

#### `Readonly` version

```ts
version: string
```

EMT 00001: EMT template version number.
