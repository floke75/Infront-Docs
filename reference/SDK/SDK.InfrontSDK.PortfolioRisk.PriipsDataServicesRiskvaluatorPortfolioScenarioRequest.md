---
title: "PriipsDataServicesRiskvaluatorPortfolioScenarioRequest"
qualified_name: "SDK.InfrontSDK.PortfolioRisk.PriipsDataServicesRiskvaluatorPortfolioScenarioRequest"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.PortfolioRisk"
group: "PortfolioRisk"
nav_path: "SDK > InfrontSDK > Other > PortfolioRisk > PriipsDataServicesRiskvaluatorPortfolioScenarioRequest"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.PortfolioRisk.PriipsDataServicesRiskvaluatorPortfolioScenarioRequest.html"
defines: ["PriipsDataServicesRiskvaluatorPortfolioScenarioRequest"]
member_count: 3
members: ["portfolioId", "scenarioQuantiles", "valuationDatetime"]
member_groups:
  "Properties": ["portfolioId", "scenarioQuantiles", "valuationDatetime"]
related_types: ["SDK.InfrontSDK.PortfolioRisk.PriipsPostRiskV1PortfolioScenariosOptions"]
reference_count: 1
references: ["SDK.InfrontSDK.PortfolioRisk.PriipsPostRiskV1PortfolioScenariosOptions"]
---

# PriipsDataServicesRiskvaluatorPortfolioScenarioRequest

#### Remarks

API Schema ID: dev.infrontfinance.priips.data.services.riskvaluator.PortfolioScenarioRequest

```ts
interface PriipsDataServicesRiskvaluatorPortfolioScenarioRequest {
    portfolioId: string;
    scenarioQuantiles: readonly number[];
    valuationDatetime: string;
}
```

#### Hierarchy ([View Summary](../type-hierarchy.md#SDK.InfrontSDK.PortfolioRisk.PriipsDataServicesRiskvaluatorPortfolioScenarioRequest))

- PriipsDataServicesRiskvaluatorPortfolioScenarioRequest

  - PriipsPostRiskV1PortfolioScenariosOptions

### Properties

#### `Readonly` portfolioId

```ts
portfolioId: string
```

Identifier for the portfolio

#### `Readonly` scenarioQuantiles

```ts
scenarioQuantiles: readonly number[]
```

The list of quantiles to be used, four numbers each less than one

#### `Readonly` valuationDatetime

```ts
valuationDatetime: string
```

timestamp for the portfolio scenario valuation

##### Remarks

Format: date-time
