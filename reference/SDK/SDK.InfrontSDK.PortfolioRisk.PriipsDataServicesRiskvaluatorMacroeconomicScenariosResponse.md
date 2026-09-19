---
title: "PriipsDataServicesRiskvaluatorMacroeconomicScenariosResponse"
qualified_name: "SDK.InfrontSDK.PortfolioRisk.PriipsDataServicesRiskvaluatorMacroeconomicScenariosResponse"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.PortfolioRisk"
group: "PortfolioRisk"
nav_path: "SDK > InfrontSDK > Other > PortfolioRisk > PriipsDataServicesRiskvaluatorMacroeconomicScenariosResponse"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.PortfolioRisk.PriipsDataServicesRiskvaluatorMacroeconomicScenariosResponse.html"
defines: ["PriipsDataServicesRiskvaluatorMacroeconomicScenariosResponse"]
member_count: 5
members: ["currentScenario", "globalMarketScenarios", "longTermInterestRateScenarios", "shortTermInterestRateScenarios", "volatilityScenarios"]
member_groups:
  "Properties": ["currentScenario", "globalMarketScenarios", "longTermInterestRateScenarios", "shortTermInterestRateScenarios", "volatilityScenarios"]
reference_count: 2
references: ["SDK.InfrontSDK.PortfolioRisk.PriipsDataServicesRiskvaluatorMacroeconomicScenariosMacroeconomicScenario", "SDK.InfrontSDK.PortfolioRisk.PriipsDataServicesRiskvaluatorMacroeconomicScenarios"]
---

# PriipsDataServicesRiskvaluatorMacroeconomicScenariosResponse

#### Remarks

API Schema ID: dev.infrontfinance.priips.data.services.riskvaluator.MacroeconomicScenariosResponse

```ts
interface PriipsDataServicesRiskvaluatorMacroeconomicScenariosResponse {
    currentScenario: PriipsDataServicesRiskvaluatorMacroeconomicScenariosMacroeconomicScenario;
    globalMarketScenarios: PriipsDataServicesRiskvaluatorMacroeconomicScenarios;
    longTermInterestRateScenarios: PriipsDataServicesRiskvaluatorMacroeconomicScenarios;
    shortTermInterestRateScenarios: PriipsDataServicesRiskvaluatorMacroeconomicScenarios;
    volatilityScenarios: PriipsDataServicesRiskvaluatorMacroeconomicScenarios;
}
```

### Properties

#### `Readonly` currentScenario

```ts
currentScenario: PriipsDataServicesRiskvaluatorMacroeconomicScenariosMacroeconomicScenario
```

The current macroeconomic situation

#### `Readonly` globalMarketScenarios

```ts
globalMarketScenarios: PriipsDataServicesRiskvaluatorMacroeconomicScenarios
```

The macroeconomic scenarios resulting from sorting the simulated portfolio payoffs accordingly to the payoff
of the requested global market proxy

#### `Readonly` longTermInterestRateScenarios

```ts
longTermInterestRateScenarios: PriipsDataServicesRiskvaluatorMacroeconomicScenarios
```

The macroeconomic scenarios resulting from sorting the simulated portfolio payoffs accordingly to the payoff
of the requested interest rate curve at long term

#### `Readonly` shortTermInterestRateScenarios

```ts
shortTermInterestRateScenarios: PriipsDataServicesRiskvaluatorMacroeconomicScenarios
```

The macroeconomic scenarios resulting from sorting the simulated portfolio payoffs accordingly to the payoff
of the requested interest rate curve at short term

#### `Readonly` volatilityScenarios

```ts
volatilityScenarios: PriipsDataServicesRiskvaluatorMacroeconomicScenarios
```

The macroeconomic scenarios resulting from sorting the simulated portfolio payoffs accordingly to the payoff
of the requested volatility proxy
