---
title: "CdapiCommonEmtTargetMarketKnowledgeAndExperience"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiCommonEmtTargetMarketKnowledgeAndExperience"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiCommonEmtTargetMarketKnowledgeAndExperience"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiCommonEmtTargetMarketKnowledgeAndExperience.html"
defines: ["CdapiCommonEmtTargetMarketKnowledgeAndExperience"]
member_count: 4
members: ["advanced_investor", "basic_investor", "expert_investor_germany", "informed_investor"]
member_groups:
  "Properties": ["advanced_investor", "basic_investor", "expert_investor_germany", "informed_investor"]
---

# CdapiCommonEmtTargetMarketKnowledgeAndExperience

KnowledgeAndExperience classifies the investor knowledge level required.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.common.EmtTargetMarket_KnowledgeAndExperience

```ts
interface CdapiCommonEmtTargetMarketKnowledgeAndExperience {
    advanced_investor: string;
    basic_investor: string;
    expert_investor_germany: string;
    informed_investor: string;
}
```

### Properties

#### `Readonly` advanced_investor

```ts
advanced_investor: string
```

EMT 02030: Advanced investor.

#### `Readonly` basic_investor

```ts
basic_investor: string
```

EMT 02010: Basic investor.

#### `Readonly` expert_investor_germany

```ts
expert_investor_germany: string
```

EMT 02040: Expert investor (Germany-specific classification).

#### `Readonly` informed_investor

```ts
informed_investor: string
```

EMT 02020: Informed investor.
