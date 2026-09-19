---
title: "CdapiCommonEetSfdrPaiData"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiCommonEetSfdrPaiData"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiCommonEetSfdrPaiData"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiCommonEetSfdrPaiData.html"
defines: ["CdapiCommonEetSfdrPaiData"]
member_count: 7
members: ["coverage", "coverage_date", "date", "eligible_assets", "is_considered", "meta", "value"]
member_groups:
  "Properties": ["coverage", "coverage_date", "date", "eligible_assets", "is_considered", "meta", "value"]
reference_count: 1
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiCommonEetSfdrPaiDataMeta"]
---

# CdapiCommonEetSfdrPaiData

Data holds values for one PAI indicator: consideration flag, value, coverage, and metadata.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.common.EetSfdrPai_Data

```ts
interface CdapiCommonEetSfdrPaiData {
    coverage: number;
    coverage_date: string;
    date: string;
    eligible_assets: number;
    is_considered: boolean;
    meta: CdapiCommonEetSfdrPaiDataMeta;
    value: number;
}
```

### Properties

#### `Readonly` coverage

```ts
coverage: number
```

Portfolio coverage — % of assets for which data is available.

##### Remarks

Format: double

#### `Readonly` coverage_date

```ts
coverage_date: string
```

Reference date for the coverage figure.

#### `Readonly` date

```ts
date: string
```

Reference date for the value. ISO-8601 recommended.

#### `Readonly` eligible_assets

```ts
eligible_assets: number
```

% of assets eligible for this PAI assessment.

##### Remarks

Format: double

#### `Readonly` is_considered

```ts
is_considered: boolean
```

If true, this PAI is considered in the product's investment strategy.

#### `Readonly` meta

```ts
meta: CdapiCommonEetSfdrPaiDataMeta
```

##### Remarks

Format: enum

#### `Readonly` value

```ts
value: number
```

Reported PAI value (unit depends on the specific indicator).

##### Remarks

Format: double
