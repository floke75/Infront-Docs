---
title: "PriipsDataServicesRiskvaluatorPortfolioCompositionRequest"
qualified_name: "SDK.InfrontSDK.PortfolioRisk.PriipsDataServicesRiskvaluatorPortfolioCompositionRequest"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.PortfolioRisk"
group: "PortfolioRisk"
nav_path: "SDK > InfrontSDK > Other > PortfolioRisk > PriipsDataServicesRiskvaluatorPortfolioCompositionRequest"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.PortfolioRisk.PriipsDataServicesRiskvaluatorPortfolioCompositionRequest.html"
defines: ["PriipsDataServicesRiskvaluatorPortfolioCompositionRequest"]
member_count: 2
members: ["portfolioId", "valuationDatetime"]
member_groups:
  "Properties": ["portfolioId", "valuationDatetime"]
related_types: ["SDK.InfrontSDK.PortfolioRisk.PriipsPostRiskV1PortfolioCompositionOptions"]
reference_count: 1
references: ["SDK.InfrontSDK.PortfolioRisk.PriipsPostRiskV1PortfolioCompositionOptions"]
---

# PriipsDataServicesRiskvaluatorPortfolioCompositionRequest

#### Remarks

API Schema ID: dev.infrontfinance.priips.data.services.riskvaluator.PortfolioCompositionRequest

```ts
interface PriipsDataServicesRiskvaluatorPortfolioCompositionRequest {
    portfolioId: string;
    valuationDatetime: string;
}
```

#### Hierarchy ([View Summary](../type-hierarchy.md#SDK.InfrontSDK.PortfolioRisk.PriipsDataServicesRiskvaluatorPortfolioCompositionRequest))

- PriipsDataServicesRiskvaluatorPortfolioCompositionRequest

  - PriipsPostRiskV1PortfolioCompositionOptions

### Properties

#### `Readonly` portfolioId

```ts
portfolioId: string
```

Identifier for the portfolio

#### `Readonly` valuationDatetime

```ts
valuationDatetime: string
```

timestamp for the portfolio composition valuation

##### Remarks

Format: date-time
