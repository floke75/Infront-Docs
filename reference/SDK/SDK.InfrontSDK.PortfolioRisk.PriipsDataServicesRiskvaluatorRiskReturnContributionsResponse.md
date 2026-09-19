---
title: "PriipsDataServicesRiskvaluatorRiskReturnContributionsResponse"
qualified_name: "SDK.InfrontSDK.PortfolioRisk.PriipsDataServicesRiskvaluatorRiskReturnContributionsResponse"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.PortfolioRisk"
group: "PortfolioRisk"
nav_path: "SDK > InfrontSDK > Other > PortfolioRisk > PriipsDataServicesRiskvaluatorRiskReturnContributionsResponse"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.PortfolioRisk.PriipsDataServicesRiskvaluatorRiskReturnContributionsResponse.html"
defines: ["PriipsDataServicesRiskvaluatorRiskReturnContributionsResponse"]
member_count: 3
members: ["positionIds", "returnContribution", "riskContribution"]
member_groups:
  "Properties": ["positionIds", "returnContribution", "riskContribution"]
---

# PriipsDataServicesRiskvaluatorRiskReturnContributionsResponse

#### Remarks

API Schema ID: dev.infrontfinance.priips.data.services.riskvaluator.RiskReturnContributionsResponse

```ts
interface PriipsDataServicesRiskvaluatorRiskReturnContributionsResponse {
    positionIds: readonly string[];
    returnContribution: readonly number[];
    riskContribution: readonly number[];
}
```

### Properties

#### `Readonly` positionIds

```ts
positionIds: readonly string[]
```

Identifiers of the positions in the same order

#### `Readonly` returnContribution

```ts
returnContribution: readonly number[]
```

Return contribution of all portfolio positions, ordered by position's index in the portfolio

#### `Readonly` riskContribution

```ts
riskContribution: readonly number[]
```

Risk contribution of all portfolio positions, ordered by position's index in the portfolio
