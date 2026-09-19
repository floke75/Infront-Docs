---
title: "PriipsDataServicesRiskvaluatorProductUniverseResponse"
qualified_name: "SDK.InfrontSDK.PortfolioRisk.PriipsDataServicesRiskvaluatorProductUniverseResponse"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.PortfolioRisk"
group: "PortfolioRisk"
nav_path: "SDK > InfrontSDK > Other > PortfolioRisk > PriipsDataServicesRiskvaluatorProductUniverseResponse"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.PortfolioRisk.PriipsDataServicesRiskvaluatorProductUniverseResponse.html"
defines: ["PriipsDataServicesRiskvaluatorProductUniverseResponse"]
member_count: 1
members: ["products"]
member_groups:
  "Properties": ["products"]
reference_count: 1
references: ["SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticData"]
---

# PriipsDataServicesRiskvaluatorProductUniverseResponse

#### Remarks

API Schema ID: dev.infrontfinance.priips.data.services.riskvaluator.ProductUniverseResponse

```ts
interface PriipsDataServicesRiskvaluatorProductUniverseResponse {
    products: readonly PriipsDataStaticData[];
}
```

### Properties

#### `Readonly` products

```ts
products: readonly PriipsDataStaticData[]
```

The list of all distinct products present in all portfolio of all customers at the requested
timestamp
