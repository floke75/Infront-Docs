---
title: "CdapiCommonEmtTargetMarketInvestorType"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiCommonEmtTargetMarketInvestorType"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiCommonEmtTargetMarketInvestorType"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiCommonEmtTargetMarketInvestorType.html"
defines: ["CdapiCommonEmtTargetMarketInvestorType"]
member_count: 3
members: ["eligible_counterparty", "professional", "retail"]
member_groups:
  "Properties": ["eligible_counterparty", "professional", "retail"]
---

# CdapiCommonEmtTargetMarketInvestorType

InvestorType classifies the MiFID II client category.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.common.EmtTargetMarket_InvestorType

```ts
interface CdapiCommonEmtTargetMarketInvestorType {
    eligible_counterparty: number;
    professional: string;
    retail: string;
}
```

### Properties

#### `Readonly` eligible_counterparty

```ts
eligible_counterparty: number
```

EMT 01030: Eligible counterparty — banks, insurers, investment firms.

##### Remarks

Format: int32

#### `Readonly` professional

```ts
professional: string
```

EMT 01020: Professional client.

#### `Readonly` retail

```ts
retail: string
```

EMT 01010: Retail client.
