---
title: "PriipsDataServicesRiskvaluatorValueAtRiskHistoryRequest"
qualified_name: "SDK.InfrontSDK.PortfolioRisk.PriipsDataServicesRiskvaluatorValueAtRiskHistoryRequest"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.PortfolioRisk"
group: "PortfolioRisk"
nav_path: "SDK > InfrontSDK > Other > PortfolioRisk > PriipsDataServicesRiskvaluatorValueAtRiskHistoryRequest"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.PortfolioRisk.PriipsDataServicesRiskvaluatorValueAtRiskHistoryRequest.html"
defines: ["PriipsDataServicesRiskvaluatorValueAtRiskHistoryRequest"]
member_count: 3
members: ["fromDatetime", "portfolioId", "toDatetime"]
member_groups:
  "Properties": ["fromDatetime", "portfolioId", "toDatetime"]
related_types: ["SDK.InfrontSDK.PortfolioRisk.PriipsPostRiskV1ValueAtRiskHistoryOptions"]
reference_count: 1
references: ["SDK.InfrontSDK.PortfolioRisk.PriipsPostRiskV1ValueAtRiskHistoryOptions"]
---

# PriipsDataServicesRiskvaluatorValueAtRiskHistoryRequest

#### Remarks

API Schema ID: dev.infrontfinance.priips.data.services.riskvaluator.ValueAtRiskHistoryRequest

```ts
interface PriipsDataServicesRiskvaluatorValueAtRiskHistoryRequest {
    fromDatetime: string;
    portfolioId: string;
    toDatetime: string;
}
```

#### Hierarchy ([View Summary](../type-hierarchy.md#SDK.InfrontSDK.PortfolioRisk.PriipsDataServicesRiskvaluatorValueAtRiskHistoryRequest))

- PriipsDataServicesRiskvaluatorValueAtRiskHistoryRequest

  - PriipsPostRiskV1ValueAtRiskHistoryOptions

### Properties

#### `Readonly` fromDatetime

```ts
fromDatetime: string
```

timestamp for the start var portfolio valuation.

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

timestamp for the end var portfolio valuation.

##### Remarks

Format: date-time
