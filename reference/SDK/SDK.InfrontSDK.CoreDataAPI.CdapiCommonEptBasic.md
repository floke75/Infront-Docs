---
title: "CdapiCommonEptBasic"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiCommonEptBasic"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiCommonEptBasic"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiCommonEptBasic.html"
defines: ["CdapiCommonEptBasic"]
member_count: 23
members: ["file_generation_timestamp", "fund_cic_code", "has_additional_information_structured_products", "has_data_reporting_additional_requirements_german_multi_option_products", "has_data_reporting_costs", "has_data_reporting_narratives", "is_an_autocallable_product", "portfolio_guarantor_name", "portfolio_identifying_data", "portfolio_manufacturer_email", "portfolio_manufacturer_group_name", "portfolio_manufacturer_lei", "portfolio_manufacturer_name", "portfolio_name", "portfolio_priips_category", "priips_kid_web_address", "producer_email", "producer_name", "reference_date", "reference_language", "share_class_currency_code", "source", "type_of_identification_code_for_the_fund_share_or_portfolio"]
member_groups:
  "Properties": ["file_generation_timestamp", "fund_cic_code", "has_additional_information_structured_products", "has_data_reporting_additional_requirements_german_multi_option_products", "has_data_reporting_costs", "has_data_reporting_narratives", "is_an_autocallable_product", "portfolio_guarantor_name", "portfolio_identifying_data", "portfolio_manufacturer_email", "portfolio_manufacturer_group_name", "portfolio_manufacturer_lei", "portfolio_manufacturer_name", "portfolio_name", "portfolio_priips_category", "priips_kid_web_address", "producer_email", "producer_name", "reference_date", "reference_language", "share_class_currency_code", "source", "type_of_identification_code_for_the_fund_share_or_portfolio"]
reference_count: 2
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiCommonEptBasicSource", "SDK.InfrontSDK.CoreDataAPI.CdapiCommonDictionary"]
---

# CdapiCommonEptBasic

EptBasic holds EPT (European PRIIPs Template) basic product information.
The EPT is the industry standard for delivering PRIIPs KID data from fund manufacturers
to insurance distributors under the PRIIPs Regulation.
Source: INFRONT.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.common.EptBasic

```ts
interface CdapiCommonEptBasic {
    file_generation_timestamp: string;
    fund_cic_code: string;
    has_additional_information_structured_products: boolean;
    has_data_reporting_additional_requirements_german_multi_option_products: boolean;
    has_data_reporting_costs: boolean;
    has_data_reporting_narratives: boolean;
    is_an_autocallable_product: boolean;
    portfolio_guarantor_name: string;
    portfolio_identifying_data: string;
    portfolio_manufacturer_email: string;
    portfolio_manufacturer_group_name: string;
    portfolio_manufacturer_lei: string;
    portfolio_manufacturer_name: string;
    portfolio_name: string;
    portfolio_priips_category: number;
    priips_kid_web_address: string;
    producer_email: string;
    producer_name: string;
    reference_date: string;
    reference_language: string;
    share_class_currency_code: string;
    source: CdapiCommonEptBasicSource;
    type_of_identification_code_for_the_fund_share_or_portfolio: CdapiCommonDictionary;
}
```

### Properties

#### `Readonly` file_generation_timestamp

```ts
file_generation_timestamp: string
```

EPT 00005: File generation timestamp. ISO-8601 recommended.

#### `Readonly` fund_cic_code

```ts
fund_cic_code: string
```

EPT 00090: CIC code (Complementary Identification Code) of the fund — used in Solvency II.

#### `Readonly` has_additional_information_structured_products

```ts
has_additional_information_structured_products: boolean
```

EPT 00009: If true, this record contains additional structured product information.

#### `Readonly` has_data_reporting_additional_requirements_german_multi_option_products

```ts
has_data_reporting_additional_requirements_german_multi_option_products: boolean
```

EPT 00008: If true, this record contains additional data for German multi-option products (MOPs).

#### `Readonly` has_data_reporting_costs

```ts
has_data_reporting_costs: boolean
```

EPT 00007: If true, this record contains cost data.

#### `Readonly` has_data_reporting_narratives

```ts
has_data_reporting_narratives: boolean
```

EPT 00006: If true, this record contains narrative data (scenarios, performance text).

#### `Readonly` is_an_autocallable_product

```ts
is_an_autocallable_product: boolean
```

EPT 00110: If true, the product is autocallable — redeems automatically if the underlying
reaches a predefined level.

#### `Readonly` portfolio_guarantor_name

```ts
portfolio_guarantor_name: string
```

EPT 00020: Legal name of the guarantor (if applicable).

#### `Readonly` portfolio_identifying_data

```ts
portfolio_identifying_data: string
```

EPT 00030: Identifying data for the fund share or portfolio (e.g. ISIN).

#### `Readonly` portfolio_manufacturer_email

```ts
portfolio_manufacturer_email: string
```

EPT 00017: Email of the portfolio manufacturer.

#### `Readonly` portfolio_manufacturer_group_name

```ts
portfolio_manufacturer_group_name: string
```

EPT 00015: Group name of the portfolio manufacturer.

#### `Readonly` portfolio_manufacturer_lei

```ts
portfolio_manufacturer_lei: string
```

EPT 00016: LEI of the portfolio manufacturer.

#### `Readonly` portfolio_manufacturer_name

```ts
portfolio_manufacturer_name: string
```

EPT 00010: Legal name of the portfolio manufacturer (fund management company).

#### `Readonly` portfolio_name

```ts
portfolio_name: string
```

EPT 00050: Name of the fund share class or portfolio.

#### `Readonly` portfolio_priips_category

```ts
portfolio_priips_category: number
```

EPT 00080: PRIIPs product category (1–4 per PRIIPs Regulation Annex II).

##### Remarks

Format: int32

#### `Readonly` priips_kid_web_address

```ts
priips_kid_web_address: string
```

EPT 00075: Web address where the PRIIPs KID can be downloaded.

#### `Readonly` producer_email

```ts
producer_email: string
```

EPT 00004: Email of the EPT data producer.

#### `Readonly` producer_name

```ts
producer_name: string
```

EPT 00002: Name of the EPT data producer.

#### `Readonly` reference_date

```ts
reference_date: string
```

EPT 00070: PRIIPs KID publication date. ISO-8601 recommended.

#### `Readonly` reference_language

```ts
reference_language: string
```

EPT 00120: Reference language of the PRIIPs KID (ISO 639-1 language code).

#### `Readonly` share_class_currency_code

```ts
share_class_currency_code: string
```

EPT 00060: ISO 4217 currency code of the portfolio or share class.

#### `Readonly` source

```ts
source: CdapiCommonEptBasicSource
```

##### Remarks

Format: enum

#### `Readonly` type_of_identification_code_for_the_fund_share_or_portfolio

```ts
type_of_identification_code_for_the_fund_share_or_portfolio: CdapiCommonDictionary
```

EPT 00040: Type of identification code used for the fund share or portfolio.
