---
title: "PriipsDataServicesRiskvaluatorMacroeconomicScenariosRequest"
qualified_name: "SDK.InfrontSDK.PortfolioRisk.PriipsDataServicesRiskvaluatorMacroeconomicScenariosRequest"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.PortfolioRisk"
group: "PortfolioRisk"
nav_path: "SDK > InfrontSDK > Other > PortfolioRisk > PriipsDataServicesRiskvaluatorMacroeconomicScenariosRequest"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.PortfolioRisk.PriipsDataServicesRiskvaluatorMacroeconomicScenariosRequest.html"
defines: ["PriipsDataServicesRiskvaluatorMacroeconomicScenariosRequest"]
member_count: 6
members: ["globalMarketProxy", "interestRate", "portfolioId", "scenarioAggregation", "valuationDatetime", "volatilityProxy"]
member_groups:
  "Properties": ["globalMarketProxy", "interestRate", "portfolioId", "scenarioAggregation", "valuationDatetime", "volatilityProxy"]
related_types: ["SDK.InfrontSDK.PortfolioRisk.PriipsPostRiskV1MacroeconomicScenariosOptions"]
reference_count: 4
references: ["SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticBasket", "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticIdentifier", "SDK.InfrontSDK.PortfolioRisk.PriipsDataServicesRiskvaluatorMacroeconomicScenariosRequestScenarioAggregation", "SDK.InfrontSDK.PortfolioRisk.PriipsPostRiskV1MacroeconomicScenariosOptions"]
---

# PriipsDataServicesRiskvaluatorMacroeconomicScenariosRequest

#### Remarks

API Schema ID: dev.infrontfinance.priips.data.services.riskvaluator.MacroeconomicScenariosRequest

```ts
interface PriipsDataServicesRiskvaluatorMacroeconomicScenariosRequest {
    globalMarketProxy: PriipsDataStaticBasket;
    interestRate: PriipsDataStaticIdentifier;
    portfolioId: string;
    scenarioAggregation: PriipsDataServicesRiskvaluatorMacroeconomicScenariosRequestScenarioAggregation;
    valuationDatetime: string;
    volatilityProxy: PriipsDataStaticBasket;
}
```

#### Hierarchy ([View Summary](../type-hierarchy.md#SDK.InfrontSDK.PortfolioRisk.PriipsDataServicesRiskvaluatorMacroeconomicScenariosRequest))

- PriipsDataServicesRiskvaluatorMacroeconomicScenariosRequest

  - PriipsPostRiskV1MacroeconomicScenariosOptions

### Properties

#### `Readonly` globalMarketProxy

```ts
globalMarketProxy: PriipsDataStaticBasket
```

The global market economy proxy. It can be a basket of multiple underlyings with a given weights to simulate
different definition of the market economy

#### `Readonly` interestRate

```ts
interestRate: PriipsDataStaticIdentifier
```

The interest rate identifier used to compute the interest rate scenarios

#### `Readonly` portfolioId

```ts
portfolioId: string
```

Identifier of the portfolio

#### `Readonly` scenarioAggregation

```ts
scenarioAggregation: PriipsDataServicesRiskvaluatorMacroeconomicScenariosRequestScenarioAggregation
```

##### Remarks

Format: enum

#### `Readonly` valuationDatetime

```ts
valuationDatetime: string
```

timestamp for the portfolio valuation

##### Remarks

Format: date-time

#### `Readonly` volatilityProxy

```ts
volatilityProxy: PriipsDataStaticBasket
```

The volatility proxy
