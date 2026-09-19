---
title: "PriipsDataServicesRiskvaluatorRiskReturnContributionsRequest"
qualified_name: "SDK.InfrontSDK.PortfolioRisk.PriipsDataServicesRiskvaluatorRiskReturnContributionsRequest"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.PortfolioRisk"
group: "PortfolioRisk"
nav_path: "SDK > InfrontSDK > Other > PortfolioRisk > PriipsDataServicesRiskvaluatorRiskReturnContributionsRequest"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.PortfolioRisk.PriipsDataServicesRiskvaluatorRiskReturnContributionsRequest.html"
defines: ["PriipsDataServicesRiskvaluatorRiskReturnContributionsRequest"]
member_count: 2
members: ["portfolioId", "valuationDatetime"]
member_groups:
  "Properties": ["portfolioId", "valuationDatetime"]
related_types: ["SDK.InfrontSDK.PortfolioRisk.PriipsPostRiskV1RiskReturnContributionsOptions"]
reference_count: 1
references: ["SDK.InfrontSDK.PortfolioRisk.PriipsPostRiskV1RiskReturnContributionsOptions"]
---

# PriipsDataServicesRiskvaluatorRiskReturnContributionsRequest

#### Remarks

API Schema ID: dev.infrontfinance.priips.data.services.riskvaluator.RiskReturnContributionsRequest

```ts
interface PriipsDataServicesRiskvaluatorRiskReturnContributionsRequest {
    portfolioId: string;
    valuationDatetime: string;
}
```

#### Hierarchy ([View Summary](../type-hierarchy.md#SDK.InfrontSDK.PortfolioRisk.PriipsDataServicesRiskvaluatorRiskReturnContributionsRequest))

- PriipsDataServicesRiskvaluatorRiskReturnContributionsRequest

  - PriipsPostRiskV1RiskReturnContributionsOptions

### Properties

#### `Readonly` portfolioId

```ts
portfolioId: string
```

Identifier of the portfolio

#### `Readonly` valuationDatetime

```ts
valuationDatetime: string
```

timestamp for the portfolio valuation

##### Remarks

Format: date-time
