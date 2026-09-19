---
title: "PriipsDataServicesRiskvaluatorPortfolioPositionID"
qualified_name: "SDK.InfrontSDK.PortfolioRisk.PriipsDataServicesRiskvaluatorPortfolioPositionID"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.PortfolioRisk"
group: "PortfolioRisk"
nav_path: "SDK > InfrontSDK > Other > PortfolioRisk > PriipsDataServicesRiskvaluatorPortfolioPositionID"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.PortfolioRisk.PriipsDataServicesRiskvaluatorPortfolioPositionID.html"
defines: ["PriipsDataServicesRiskvaluatorPortfolioPositionID"]
member_count: 3
members: ["portfolioId", "positionId", "positionIndex"]
member_groups:
  "Properties": ["portfolioId", "positionId", "positionIndex"]
---

# PriipsDataServicesRiskvaluatorPortfolioPositionID

#### Remarks

API Schema ID: dev.infrontfinance.priips.data.services.riskvaluator.PortfolioPositionID

```ts
interface PriipsDataServicesRiskvaluatorPortfolioPositionID {
    portfolioId: string;
    positionId: string;
    positionIndex: number;
}
```

### Properties

#### `Readonly` portfolioId

```ts
portfolioId: string
```

Identifier for the portfolio

#### `Readonly` positionId

```ts
positionId: string
```

ID of the position in the portfolio.

#### `Readonly` positionIndex

```ts
positionIndex: number
```

Index of the position in the portfolio. Deprecated, use position_id.

##### Remarks

Format: int32
