---
title: "PriipsDataServicesRiskvaluatorScenario"
qualified_name: "SDK.InfrontSDK.PortfolioRisk.PriipsDataServicesRiskvaluatorScenario"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.PortfolioRisk"
group: "PortfolioRisk"
nav_path: "SDK > InfrontSDK > Other > PortfolioRisk > PriipsDataServicesRiskvaluatorScenario"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.PortfolioRisk.PriipsDataServicesRiskvaluatorScenario.html"
defines: ["PriipsDataServicesRiskvaluatorScenario"]
member_count: 4
members: ["portfolioValue", "positionIds", "positionValues", "simulatedPath"]
member_groups:
  "Properties": ["portfolioValue", "positionIds", "positionValues", "simulatedPath"]
reference_count: 1
references: ["SDK.InfrontSDK.PortfolioRisk.PriipsDataServicesRiskvaluatorPath"]
---

# PriipsDataServicesRiskvaluatorScenario

#### Remarks

API Schema ID: dev.infrontfinance.priips.data.services.riskvaluator.Scenario

```ts
interface PriipsDataServicesRiskvaluatorScenario {
    portfolioValue: number;
    positionIds: readonly string[];
    positionValues: readonly number[];
    simulatedPath: PriipsDataServicesRiskvaluatorPath;
}
```

### Properties

#### `Readonly` portfolioValue

```ts
portfolioValue: number
```

The portfolio value

##### Remarks

Format: double

#### `Readonly` positionIds

```ts
positionIds: readonly string[]
```

Identifiers of the positions in the same order

#### `Readonly` positionValues

```ts
positionValues: readonly number[]
```

The payoff of the positions

#### `Readonly` simulatedPath

```ts
simulatedPath: PriipsDataServicesRiskvaluatorPath
```

The final simulated path
