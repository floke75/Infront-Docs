---
title: "PriipsDataServicesRiskvaluatorPositionDistributionResponse"
qualified_name: "SDK.InfrontSDK.PortfolioRisk.PriipsDataServicesRiskvaluatorPositionDistributionResponse"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.PortfolioRisk"
group: "PortfolioRisk"
nav_path: "SDK > InfrontSDK > Other > PortfolioRisk > PriipsDataServicesRiskvaluatorPositionDistributionResponse"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.PortfolioRisk.PriipsDataServicesRiskvaluatorPositionDistributionResponse.html"
defines: ["PriipsDataServicesRiskvaluatorPositionDistributionResponse"]
member_count: 2
members: ["binEdges", "distribution"]
member_groups:
  "Properties": ["binEdges", "distribution"]
---

# PriipsDataServicesRiskvaluatorPositionDistributionResponse

#### Remarks

API Schema ID: dev.infrontfinance.priips.data.services.riskvaluator.PositionDistributionResponse

```ts
interface PriipsDataServicesRiskvaluatorPositionDistributionResponse {
    binEdges: readonly number[];
    distribution: readonly number[];
}
```

### Properties

#### `Readonly` binEdges

```ts
binEdges: readonly number[]
```

Edges of all bins to paint. Length is length of distribution plus 1 for the last edge.

#### `Readonly` distribution

```ts
distribution: readonly number[]
```

Counts of events per bin. The first entry in this array is the count of the bin between the first and second edge,
the second one between the second and third edge, and so forth.
