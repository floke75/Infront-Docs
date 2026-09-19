---
title: "CdapiCommonEmtTargetMarketDistributionStrategy"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiCommonEmtTargetMarketDistributionStrategy"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiCommonEmtTargetMarketDistributionStrategy"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiCommonEmtTargetMarketDistributionStrategy.html"
defines: ["CdapiCommonEmtTargetMarketDistributionStrategy"]
member_count: 4
members: ["execution_only", "execution_with_appropriateness_test_or_non_advised_services", "investment_advice", "portfolio_management"]
member_groups:
  "Properties": ["execution_only", "execution_with_appropriateness_test_or_non_advised_services", "investment_advice", "portfolio_management"]
reference_count: 1
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiCommonDictionary"]
---

# CdapiCommonEmtTargetMarketDistributionStrategy

DistributionStrategy defines the sales channels through which the product may be distributed.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.common.EmtTargetMarket_DistributionStrategy

```ts
interface CdapiCommonEmtTargetMarketDistributionStrategy {
    execution_only: CdapiCommonDictionary;
    execution_with_appropriateness_test_or_non_advised_services: CdapiCommonDictionary;
    investment_advice: CdapiCommonDictionary;
    portfolio_management: CdapiCommonDictionary;
}
```

### Properties

#### `Readonly` execution_only

```ts
execution_only: CdapiCommonDictionary
```

EMT 06010: Execution only — no advice, no appropriateness test.

#### `Readonly` execution_with_appropriateness_test_or_non_advised_services

```ts
execution_with_appropriateness_test_or_non_advised_services: CdapiCommonDictionary
```

EMT 06020: Execution with appropriateness test or non-advised services.

#### `Readonly` investment_advice

```ts
investment_advice: CdapiCommonDictionary
```

EMT 06030: Investment advice.

#### `Readonly` portfolio_management

```ts
portfolio_management: CdapiCommonDictionary
```

EMT 06040: Portfolio management — used in discretionary mandates.
