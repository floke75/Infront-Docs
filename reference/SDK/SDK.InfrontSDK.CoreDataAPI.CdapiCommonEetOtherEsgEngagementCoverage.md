---
title: "CdapiCommonEetOtherEsgEngagementCoverage"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiCommonEetOtherEsgEngagementCoverage"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiCommonEetOtherEsgEngagementCoverage"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiCommonEetOtherEsgEngagementCoverage.html"
defines: ["CdapiCommonEetOtherEsgEngagementCoverage"]
member_count: 6
members: ["number_of_eligible_issuers", "number_of_engaged_issuers", "number_of_esg_covered_issuers", "weight_of_eligible_issuers", "weight_of_engaged_issuers", "weight_of_esg_covered_issuers"]
member_groups:
  "Properties": ["number_of_eligible_issuers", "number_of_engaged_issuers", "number_of_esg_covered_issuers", "weight_of_eligible_issuers", "weight_of_engaged_issuers", "weight_of_esg_covered_issuers"]
---

# CdapiCommonEetOtherEsgEngagementCoverage

EsgEngagementCoverage holds metrics on the share of the portfolio subject to ESG engagement.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.common.EetOther_EsgEngagementCoverage

```ts
interface CdapiCommonEetOtherEsgEngagementCoverage {
    number_of_eligible_issuers: number;
    number_of_engaged_issuers: number;
    number_of_esg_covered_issuers: number;
    weight_of_eligible_issuers: number;
    weight_of_engaged_issuers: number;
    weight_of_esg_covered_issuers: number;
}
```

### Properties

#### `Readonly` number_of_eligible_issuers

```ts
number_of_eligible_issuers: number
```

EET 20320: Number of ESG-eligible issuers.

##### Remarks

Format: int32

#### `Readonly` number_of_engaged_issuers

```ts
number_of_engaged_issuers: number
```

EET 20360: Number of issuers actively engaged on ESG topics.

##### Remarks

Format: int32

#### `Readonly` number_of_esg_covered_issuers

```ts
number_of_esg_covered_issuers: number
```

EET 20340: Number of issuers with ESG data available.

##### Remarks

Format: int32

#### `Readonly` weight_of_eligible_issuers

```ts
weight_of_eligible_issuers: number
```

EET 20310: Portfolio weight of ESG-eligible issuers (decimal, e.g. 0.85 = 85%).

##### Remarks

Format: double

#### `Readonly` weight_of_engaged_issuers

```ts
weight_of_engaged_issuers: number
```

EET 20350: Portfolio weight of issuers actively engaged on ESG topics.

##### Remarks

Format: double

#### `Readonly` weight_of_esg_covered_issuers

```ts
weight_of_esg_covered_issuers: number
```

EET 20330: Portfolio weight of issuers with ESG data available.

##### Remarks

Format: double
