---
title: "PriipsDataServicesRiskvaluatorPortfolioRiskFiguresRequest"
qualified_name: "SDK.InfrontSDK.PortfolioRisk.PriipsDataServicesRiskvaluatorPortfolioRiskFiguresRequest"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.PortfolioRisk"
group: "PortfolioRisk"
nav_path: "SDK > InfrontSDK > Other > PortfolioRisk > PriipsDataServicesRiskvaluatorPortfolioRiskFiguresRequest"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.PortfolioRisk.PriipsDataServicesRiskvaluatorPortfolioRiskFiguresRequest.html"
defines: ["PriipsDataServicesRiskvaluatorPortfolioRiskFiguresRequest"]
member_count: 2
members: ["portfolioId", "valuationDatetime"]
member_groups:
  "Properties": ["portfolioId", "valuationDatetime"]
related_types: ["SDK.InfrontSDK.PortfolioRisk.PriipsPostRiskV1PortfolioRiskFiguresOptions"]
reference_count: 1
references: ["SDK.InfrontSDK.PortfolioRisk.PriipsPostRiskV1PortfolioRiskFiguresOptions"]
---

# PriipsDataServicesRiskvaluatorPortfolioRiskFiguresRequest

#### Remarks

API Schema ID: dev.infrontfinance.priips.data.services.riskvaluator.PortfolioRiskFiguresRequest

```ts
interface PriipsDataServicesRiskvaluatorPortfolioRiskFiguresRequest {
    portfolioId: string;
    valuationDatetime: string;
}
```

#### Hierarchy ([View Summary](../type-hierarchy.md#SDK.InfrontSDK.PortfolioRisk.PriipsDataServicesRiskvaluatorPortfolioRiskFiguresRequest))

- PriipsDataServicesRiskvaluatorPortfolioRiskFiguresRequest

  - PriipsPostRiskV1PortfolioRiskFiguresOptions

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
