---
title: "PriipsDataServicesRiskvaluatorPortfolioCompositionHistoryRequest"
qualified_name: "SDK.InfrontSDK.PortfolioRisk.PriipsDataServicesRiskvaluatorPortfolioCompositionHistoryRequest"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.PortfolioRisk"
group: "PortfolioRisk"
nav_path: "SDK > InfrontSDK > Other > PortfolioRisk > PriipsDataServicesRiskvaluatorPortfolioCompositionHistoryRequest"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.PortfolioRisk.PriipsDataServicesRiskvaluatorPortfolioCompositionHistoryRequest.html"
defines: ["PriipsDataServicesRiskvaluatorPortfolioCompositionHistoryRequest"]
member_count: 3
members: ["fromDatetime", "portfolioId", "toDatetime"]
member_groups:
  "Properties": ["fromDatetime", "portfolioId", "toDatetime"]
related_types: ["SDK.InfrontSDK.PortfolioRisk.PriipsPostRiskV1PortfolioCompositionHistoryOptions"]
reference_count: 1
references: ["SDK.InfrontSDK.PortfolioRisk.PriipsPostRiskV1PortfolioCompositionHistoryOptions"]
---

# PriipsDataServicesRiskvaluatorPortfolioCompositionHistoryRequest

#### Remarks

API Schema ID: dev.infrontfinance.priips.data.services.riskvaluator.PortfolioCompositionHistoryRequest

```ts
interface PriipsDataServicesRiskvaluatorPortfolioCompositionHistoryRequest {
    fromDatetime: string;
    portfolioId: string;
    toDatetime: string;
}
```

#### Hierarchy ([View Summary](../type-hierarchy.md#SDK.InfrontSDK.PortfolioRisk.PriipsDataServicesRiskvaluatorPortfolioCompositionHistoryRequest))

- PriipsDataServicesRiskvaluatorPortfolioCompositionHistoryRequest

  - PriipsPostRiskV1PortfolioCompositionHistoryOptions

### Properties

#### `Readonly` fromDatetime

```ts
fromDatetime: string
```

timestamp for the start of the profits and loss portfolio valuation.

##### Remarks

Format: date-time

#### `Readonly` portfolioId

```ts
portfolioId: string
```

Identifier of the portfolio

#### `Readonly` toDatetime

```ts
toDatetime: string
```

timestamp for the end of the profits and loss portfolio valuation.

##### Remarks

Format: date-time
