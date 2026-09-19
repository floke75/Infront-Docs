---
title: "CdapiCommonEetOtherNegativeScreeningExclusions"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiCommonEetOtherNegativeScreeningExclusions"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiCommonEetOtherNegativeScreeningExclusions"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiCommonEetOtherNegativeScreeningExclusions.html"
defines: ["CdapiCommonEetOtherNegativeScreeningExclusions"]
member_count: 2
members: ["has_negative_screening_strategy", "link_to_exclusion_policy_and_criteria"]
member_groups:
  "Properties": ["has_negative_screening_strategy", "link_to_exclusion_policy_and_criteria"]
---

# CdapiCommonEetOtherNegativeScreeningExclusions

NegativeScreeningExclusions holds exclusion policy flags and links.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.common.EetOther_NegativeScreeningExclusions

```ts
interface CdapiCommonEetOtherNegativeScreeningExclusions {
    has_negative_screening_strategy: boolean;
    link_to_exclusion_policy_and_criteria: string;
}
```

### Properties

#### `Readonly` has_negative_screening_strategy

```ts
has_negative_screening_strategy: boolean
```

EET 40000: If true, the product applies a negative screening/exclusion strategy.

#### `Readonly` link_to_exclusion_policy_and_criteria

```ts
link_to_exclusion_policy_and_criteria: string
```

EET 40010: URL to the product's exclusion policy documentation.
