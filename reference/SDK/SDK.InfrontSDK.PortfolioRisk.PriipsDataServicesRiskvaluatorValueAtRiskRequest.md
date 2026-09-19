---
title: "PriipsDataServicesRiskvaluatorValueAtRiskRequest"
qualified_name: "SDK.InfrontSDK.PortfolioRisk.PriipsDataServicesRiskvaluatorValueAtRiskRequest"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.PortfolioRisk"
group: "PortfolioRisk"
nav_path: "SDK > InfrontSDK > Other > PortfolioRisk > PriipsDataServicesRiskvaluatorValueAtRiskRequest"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.PortfolioRisk.PriipsDataServicesRiskvaluatorValueAtRiskRequest.html"
defines: ["PriipsDataServicesRiskvaluatorValueAtRiskRequest"]
member_count: 2
members: ["portfolioId", "valuationDatetime"]
member_groups:
  "Properties": ["portfolioId", "valuationDatetime"]
related_types: ["SDK.InfrontSDK.PortfolioRisk.PriipsPostRiskV1ValueAtRiskOptions"]
reference_count: 1
references: ["SDK.InfrontSDK.PortfolioRisk.PriipsPostRiskV1ValueAtRiskOptions"]
---

# PriipsDataServicesRiskvaluatorValueAtRiskRequest

#### Remarks

API Schema ID: dev.infrontfinance.priips.data.services.riskvaluator.ValueAtRiskRequest

```ts
interface PriipsDataServicesRiskvaluatorValueAtRiskRequest {
    portfolioId: string;
    valuationDatetime: string;
}
```

#### Hierarchy ([View Summary](../type-hierarchy.md#SDK.InfrontSDK.PortfolioRisk.PriipsDataServicesRiskvaluatorValueAtRiskRequest))

- PriipsDataServicesRiskvaluatorValueAtRiskRequest

  - PriipsPostRiskV1ValueAtRiskOptions

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

timestamp for the value at risk valuation

##### Remarks

Format: date-time
