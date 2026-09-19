---
title: "CdapiCommonEetManufacturer"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiCommonEetManufacturer"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiCommonEetManufacturer"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiCommonEetManufacturer.html"
defines: ["CdapiCommonEetManufacturer"]
member_count: 26
members: ["_meta", "code", "eet_version", "email", "file_generation_date", "general_reference_date", "id", "identification_type_code", "is_data_for_idd_reporting", "is_data_for_mifid_reporting", "is_data_for_sfdr_entity_level_reporting", "is_data_for_sfdr_periodic_reporting", "is_data_for_sfdr_pre_contractual_reporting", "is_pri_or_prb_compliant", "is_pri_or_prb_like", "is_pri_or_prb_signatory", "name", "other_commitments", "pri_notation", "pri_notation_percentage", "producer_email", "producer_lei", "producer_name", "source", "stewardship", "website_information_stewardship_and_engagement"]
member_groups:
  "Properties": ["_meta", "code", "eet_version", "email", "file_generation_date", "general_reference_date", "id", "identification_type_code", "is_data_for_idd_reporting", "is_data_for_mifid_reporting", "is_data_for_sfdr_entity_level_reporting", "is_data_for_sfdr_periodic_reporting", "is_data_for_sfdr_pre_contractual_reporting", "is_pri_or_prb_compliant", "is_pri_or_prb_like", "is_pri_or_prb_signatory", "name", "other_commitments", "pri_notation", "pri_notation_percentage", "producer_email", "producer_lei", "producer_name", "source", "stewardship", "website_information_stewardship_and_engagement"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.BasedefEntityMeta", "SDK.InfrontSDK.CoreDataAPI.CdapiCommonDictionary", "SDK.InfrontSDK.CoreDataAPI.CdapiCommonEetManufacturerSource"]
---

# CdapiCommonEetManufacturer

EetManufacturer holds EET (European ESG Template) manufacturer / fund company data.
The EET is the industry standard for ESG product data exchange from manufacturers
to distributors under MiFID II / IDD sustainability disclosure requirements.
Source: INFRONT.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.common.EetManufacturer

```ts
interface CdapiCommonEetManufacturer {
    _meta: BasedefEntityMeta;
    code: string;
    eet_version: string;
    email: string;
    file_generation_date: string;
    general_reference_date: string;
    id: string;
    identification_type_code: string;
    is_data_for_idd_reporting: boolean;
    is_data_for_mifid_reporting: boolean;
    is_data_for_sfdr_entity_level_reporting: boolean;
    is_data_for_sfdr_periodic_reporting: boolean;
    is_data_for_sfdr_pre_contractual_reporting: boolean;
    is_pri_or_prb_compliant: boolean;
    is_pri_or_prb_like: boolean;
    is_pri_or_prb_signatory: boolean;
    name: string;
    other_commitments: readonly CdapiCommonDictionary[];
    pri_notation: string;
    pri_notation_percentage: number;
    producer_email: string;
    producer_lei: string;
    producer_name: string;
    source: CdapiCommonEetManufacturerSource;
    stewardship: readonly CdapiCommonDictionary[];
    website_information_stewardship_and_engagement: string;
}
```

### Properties

#### `Readonly` _meta

```ts
_meta: BasedefEntityMeta
```

Entity metadata (creation time, update time, version, etc.).

#### `Readonly` code

```ts
code: string
```

EET 10020: Manufacturer's identification code (value per identification_type_code).

#### `Readonly` eet_version

```ts
eet_version: string
```

EET 00010: EET template version used.

#### `Readonly` email

```ts
email: string
```

EET 10030: Contact email address of the manufacturer.

#### `Readonly` file_generation_date

```ts
file_generation_date: string
```

EET 00050: Date and time the EET file was generated. ISO-8601 recommended.

#### `Readonly` general_reference_date

```ts
general_reference_date: string
```

EET 10040: Reference date for the general data fields. ISO-8601 recommended.

#### `Readonly` id

```ts
id: string
```

Internal unique identifier.

#### `Readonly` identification_type_code

```ts
identification_type_code: string
```

EET 10010: Type code of the manufacturer's identification (e.g. LEI, ISIN).

#### `Readonly` is_data_for_idd_reporting

```ts
is_data_for_idd_reporting: boolean
```

EET 00100: If true, data is intended for IDD (Insurance Distribution Directive) reporting.

#### `Readonly` is_data_for_mifid_reporting

```ts
is_data_for_mifid_reporting: boolean
```

EET 00090: If true, data is intended for MiFID II reporting.

#### `Readonly` is_data_for_sfdr_entity_level_reporting

```ts
is_data_for_sfdr_entity_level_reporting: boolean
```

EET 00080: If true, data is intended for SFDR entity-level reporting.

#### `Readonly` is_data_for_sfdr_periodic_reporting

```ts
is_data_for_sfdr_periodic_reporting: boolean
```

EET 00070: If true, data is intended for SFDR periodic reporting.

#### `Readonly` is_data_for_sfdr_pre_contractual_reporting

```ts
is_data_for_sfdr_pre_contractual_reporting: boolean
```

EET 00060: If true, data is intended for SFDR pre-contractual reporting (Art. 6/8/9).

#### `Readonly` is_pri_or_prb_compliant

```ts
is_pri_or_prb_compliant: boolean
```

EET 11020: If true, the manufacturer is fully PRI/PRB compliant.

#### `Readonly` is_pri_or_prb_like

```ts
is_pri_or_prb_like: boolean
```

EET 11030: If true, the manufacturer applies PRI/PRB-like principles without being a signatory.

#### `Readonly` is_pri_or_prb_signatory

```ts
is_pri_or_prb_signatory: boolean
```

EET 11000: If true, the manufacturer is a PRI (Principles for Responsible Investment)
or PRB (Principles for Responsible Banking) signatory.

#### `Readonly` name

```ts
name: string
```

EET 10000: Legal name of the manufacturer / fund management company.

#### `Readonly` other_commitments

```ts
other_commitments: readonly CdapiCommonDictionary[]
```

EET 11040: Other ESG commitments made by the manufacturer.

#### `Readonly` pri_notation

```ts
pri_notation: string
```

EET 11010: PRI notation — the specific PRI assessment score or label.

#### `Readonly` pri_notation_percentage

```ts
pri_notation_percentage: number
```

EET 11011: Percentage score of the manufacturer's PRI notation.

##### Remarks

Format: double

#### `Readonly` producer_email

```ts
producer_email: string
```

EET 00040: Email of the EET data producer.

#### `Readonly` producer_lei

```ts
producer_lei: string
```

EET 00030: LEI of the EET data producer.

#### `Readonly` producer_name

```ts
producer_name: string
```

EET 00020: Name of the EET data producer (entity submitting the template).

#### `Readonly` source

```ts
source: CdapiCommonEetManufacturerSource
```

##### Remarks

Format: enum

#### `Readonly` stewardship

```ts
stewardship: readonly CdapiCommonDictionary[]
```

EET 12000: Stewardship codes the manufacturer has signed. Moved from field 23.

#### `Readonly` website_information_stewardship_and_engagement

```ts
website_information_stewardship_and_engagement: string
```

EET 13000: URL to information on the manufacturer's stewardship and engagement activities.
