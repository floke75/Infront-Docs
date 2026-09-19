---
title: "CdapiCommonEmtTargetMarketRiskTolerance"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiCommonEmtTargetMarketRiskTolerance"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiCommonEmtTargetMarketRiskTolerance"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiCommonEmtTargetMarketRiskTolerance.html"
defines: ["CdapiCommonEmtTargetMarketRiskTolerance"]
member_count: 5
members: ["internal_methodology_for_non_priips_and_non_ucits", "not_for_investors_with_the_lowest_risk_tolerance_germany", "priips_method", "risk_tolerance_for_non_priips_and_non_ucits_spain", "ucits_method"]
member_groups:
  "Properties": ["internal_methodology_for_non_priips_and_non_ucits", "not_for_investors_with_the_lowest_risk_tolerance_germany", "priips_method", "risk_tolerance_for_non_priips_and_non_ucits_spain", "ucits_method"]
reference_count: 1
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiCommonEmtTargetMarketRiskToleranceNotForInvestorsWithTheLowestRiskToleranceGermany"]
---

# CdapiCommonEmtTargetMarketRiskTolerance

RiskTolerance defines the risk indicator levels compatible with the target investor.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.common.EmtTargetMarket_RiskTolerance

```ts
interface CdapiCommonEmtTargetMarketRiskTolerance {
    internal_methodology_for_non_priips_and_non_ucits: string;
    not_for_investors_with_the_lowest_risk_tolerance_germany: CdapiCommonEmtTargetMarketRiskToleranceNotForInvestorsWithTheLowestRiskToleranceGermany;
    priips_method: number;
    risk_tolerance_for_non_priips_and_non_ucits_spain: number;
    ucits_method: number;
}
```

### Properties

#### `Readonly` internal_methodology_for_non_priips_and_non_ucits

```ts
internal_methodology_for_non_priips_and_non_ucits: string
```

EMT 04030: Internal methodology risk tolerance (non-PRIIPs, non-UCITS).

#### `Readonly` not_for_investors_with_the_lowest_risk_tolerance_germany

```ts
not_for_investors_with_the_lowest_risk_tolerance_germany: CdapiCommonEmtTargetMarketRiskToleranceNotForInvestorsWithTheLowestRiskToleranceGermany
```

EMT 04050: Not suitable for investors with the lowest risk tolerance (Germany).

##### Remarks

Format: enum

#### `Readonly` priips_method

```ts
priips_method: number
```

EMT 04010: PRIIPs SRI scale 1–7.

##### Remarks

Format: int32

#### `Readonly` risk_tolerance_for_non_priips_and_non_ucits_spain

```ts
risk_tolerance_for_non_priips_and_non_ucits_spain: number
```

EMT 04040: Risk tolerance for non-PRIIPs/non-UCITS (Spain).

##### Remarks

Format: int32

#### `Readonly` ucits_method

```ts
ucits_method: number
```

EMT 04020: UCITS SRRI scale 1–7.

##### Remarks

Format: int32
