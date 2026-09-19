---
title: "PriipsDataServicesRiskvaluatorPortfolioScenarioResponse"
qualified_name: "SDK.InfrontSDK.PortfolioRisk.PriipsDataServicesRiskvaluatorPortfolioScenarioResponse"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.PortfolioRisk"
group: "PortfolioRisk"
nav_path: "SDK > InfrontSDK > Other > PortfolioRisk > PriipsDataServicesRiskvaluatorPortfolioScenarioResponse"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.PortfolioRisk.PriipsDataServicesRiskvaluatorPortfolioScenarioResponse.html"
defines: ["PriipsDataServicesRiskvaluatorPortfolioScenarioResponse"]
member_count: 4
members: ["moderateScenario", "optimisticScenario", "pessimisticScenario", "stressScenario"]
member_groups:
  "Properties": ["moderateScenario", "optimisticScenario", "pessimisticScenario", "stressScenario"]
reference_count: 1
references: ["SDK.InfrontSDK.PortfolioRisk.PriipsDataServicesRiskvaluatorScenario"]
---

# PriipsDataServicesRiskvaluatorPortfolioScenarioResponse

Request for optimistic, pessimistic, moderate and stress scenarios

#### Remarks

API Schema ID: dev.infrontfinance.priips.data.services.riskvaluator.PortfolioScenarioResponse

```ts
interface PriipsDataServicesRiskvaluatorPortfolioScenarioResponse {
    moderateScenario: PriipsDataServicesRiskvaluatorScenario;
    optimisticScenario: PriipsDataServicesRiskvaluatorScenario;
    pessimisticScenario: PriipsDataServicesRiskvaluatorScenario;
    stressScenario: PriipsDataServicesRiskvaluatorScenario;
}
```

### Properties

#### `Readonly` moderateScenario

```ts
moderateScenario: PriipsDataServicesRiskvaluatorScenario
```

Moderate scenario

#### `Readonly` optimisticScenario

```ts
optimisticScenario: PriipsDataServicesRiskvaluatorScenario
```

Optimistic scenario

#### `Readonly` pessimisticScenario

```ts
pessimisticScenario: PriipsDataServicesRiskvaluatorScenario
```

Pessimistic scenario

#### `Readonly` stressScenario

```ts
stressScenario: PriipsDataServicesRiskvaluatorScenario
```

Stress scenario
