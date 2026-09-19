---
title: "PriipsDataServicesRiskvaluatorPositionDistributionRequest"
qualified_name: "SDK.InfrontSDK.PortfolioRisk.PriipsDataServicesRiskvaluatorPositionDistributionRequest"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.PortfolioRisk"
group: "PortfolioRisk"
nav_path: "SDK > InfrontSDK > Other > PortfolioRisk > PriipsDataServicesRiskvaluatorPositionDistributionRequest"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.PortfolioRisk.PriipsDataServicesRiskvaluatorPositionDistributionRequest.html"
defines: ["PriipsDataServicesRiskvaluatorPositionDistributionRequest"]
member_count: 3
members: ["numberOfBins", "position", "valuationDatetime"]
member_groups:
  "Properties": ["numberOfBins", "position", "valuationDatetime"]
related_types: ["SDK.InfrontSDK.PortfolioRisk.PriipsPostRiskV1PositionDistributionOptions"]
reference_count: 2
references: ["SDK.InfrontSDK.PortfolioRisk.PriipsDataServicesRiskvaluatorPortfolioPositionID", "SDK.InfrontSDK.PortfolioRisk.PriipsPostRiskV1PositionDistributionOptions"]
---

# PriipsDataServicesRiskvaluatorPositionDistributionRequest

#### Remarks

API Schema ID: dev.infrontfinance.priips.data.services.riskvaluator.PositionDistributionRequest

```ts
interface PriipsDataServicesRiskvaluatorPositionDistributionRequest {
    numberOfBins: number;
    position: PriipsDataServicesRiskvaluatorPortfolioPositionID;
    valuationDatetime: string;
}
```

#### Hierarchy ([View Summary](../type-hierarchy.md#SDK.InfrontSDK.PortfolioRisk.PriipsDataServicesRiskvaluatorPositionDistributionRequest))

- PriipsDataServicesRiskvaluatorPositionDistributionRequest

  - PriipsPostRiskV1PositionDistributionOptions

### Properties

#### `Readonly` numberOfBins

```ts
numberOfBins: number
```

The number of bins to be generated, if zero the distribution the best number of bins
for the visualization will be automatically determined

##### Remarks

Format: int32

#### `Readonly` position

```ts
position: PriipsDataServicesRiskvaluatorPortfolioPositionID
```

Position in a portfolio to obtain values for

#### `Readonly` valuationDatetime

```ts
valuationDatetime: string
```

timestamp for the position distribution valuation

##### Remarks

Format: date-time
