---
title: "PriipsDataServicesRiskvaluatorPositionRiskFiguresRequest"
qualified_name: "SDK.InfrontSDK.PortfolioRisk.PriipsDataServicesRiskvaluatorPositionRiskFiguresRequest"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.PortfolioRisk"
group: "PortfolioRisk"
nav_path: "SDK > InfrontSDK > Other > PortfolioRisk > PriipsDataServicesRiskvaluatorPositionRiskFiguresRequest"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.PortfolioRisk.PriipsDataServicesRiskvaluatorPositionRiskFiguresRequest.html"
defines: ["PriipsDataServicesRiskvaluatorPositionRiskFiguresRequest"]
member_count: 3
members: ["position", "requestedFigures?", "valuationDatetime"]
member_groups:
  "Properties": ["position", "requestedFigures?", "valuationDatetime"]
related_types: ["SDK.InfrontSDK.PortfolioRisk.PriipsPostRiskV1PositionRiskFiguresOptions"]
reference_count: 2
references: ["SDK.InfrontSDK.PortfolioRisk.PriipsDataServicesRiskvaluatorPortfolioPositionID", "SDK.InfrontSDK.PortfolioRisk.PriipsPostRiskV1PositionRiskFiguresOptions"]
---

# PriipsDataServicesRiskvaluatorPositionRiskFiguresRequest

#### Remarks

API Schema ID: dev.infrontfinance.priips.data.services.riskvaluator.PositionRiskFiguresRequest

```ts
interface PriipsDataServicesRiskvaluatorPositionRiskFiguresRequest {
    position: PriipsDataServicesRiskvaluatorPortfolioPositionID;
    requestedFigures?: readonly string[];
    valuationDatetime: string;
}
```

#### Hierarchy ([View Summary](../type-hierarchy.md#SDK.InfrontSDK.PortfolioRisk.PriipsDataServicesRiskvaluatorPositionRiskFiguresRequest))

- PriipsDataServicesRiskvaluatorPositionRiskFiguresRequest

  - PriipsPostRiskV1PositionRiskFiguresOptions

### Properties

#### `Readonly` position

```ts
position: PriipsDataServicesRiskvaluatorPortfolioPositionID
```

Position in a portfolio to obtain values for

#### `Optional` ` Readonly`requestedFigures

```ts
requestedFigures?: readonly string[]
```

the fields we are

#### `Readonly` valuationDatetime

```ts
valuationDatetime: string
```

timestamp for the portfolio valuation

##### Remarks

Format: date-time
