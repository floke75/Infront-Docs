---
title: "PriipsDataServicesRiskvaluatorMacroeconomicScenariosMacroeconomicScenario"
qualified_name: "SDK.InfrontSDK.PortfolioRisk.PriipsDataServicesRiskvaluatorMacroeconomicScenariosMacroeconomicScenario"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.PortfolioRisk"
group: "PortfolioRisk"
nav_path: "SDK > InfrontSDK > Other > PortfolioRisk > PriipsDataServicesRiskvaluatorMacroeconomicScenariosMacroeconomicScenario"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.PortfolioRisk.PriipsDataServicesRiskvaluatorMacroeconomicScenariosMacroeconomicScenario.html"
defines: ["PriipsDataServicesRiskvaluatorMacroeconomicScenariosMacroeconomicScenario"]
member_count: 10
members: ["globalMarketValue", "globalMarketVariation", "interestRateCurve", "interestRateCurveTimeToMaturities", "longTermInterestRateVariation", "portfolioValue", "portfolioVariation", "shortTermInterestRateVariation", "volatility", "volatilityVariation"]
member_groups:
  "Properties": ["globalMarketValue", "globalMarketVariation", "interestRateCurve", "interestRateCurveTimeToMaturities", "longTermInterestRateVariation", "portfolioValue", "portfolioVariation", "shortTermInterestRateVariation", "volatility", "volatilityVariation"]
---

# PriipsDataServicesRiskvaluatorMacroeconomicScenariosMacroeconomicScenario

#### Remarks

API Schema ID: dev.infrontfinance.priips.data.services.riskvaluator.MacroeconomicScenarios_MacroeconomicScenario

```ts
interface PriipsDataServicesRiskvaluatorMacroeconomicScenariosMacroeconomicScenario {
    globalMarketValue: number;
    globalMarketVariation: number;
    interestRateCurve: readonly number[];
    interestRateCurveTimeToMaturities: readonly number[];
    longTermInterestRateVariation: number;
    portfolioValue: number;
    portfolioVariation: number;
    shortTermInterestRateVariation: number;
    volatility: number;
    volatilityVariation: number;
}
```

### Properties

#### `Readonly` globalMarketValue

```ts
globalMarketValue: number
```

The resulting global market value

##### Remarks

Format: double

#### `Readonly` globalMarketVariation

```ts
globalMarketVariation: number
```

Global market variation, in unit notation

##### Remarks

Format: double

#### `Readonly` interestRateCurve

```ts
interestRateCurve: readonly number[]
```

The resulting interest rate in the given scenario

#### `Readonly` interestRateCurveTimeToMaturities

```ts
interestRateCurveTimeToMaturities: readonly number[]
```

The corresponding pillars

#### `Readonly` longTermInterestRateVariation

```ts
longTermInterestRateVariation: number
```

Portfolio variation, in unit notation

##### Remarks

Format: double

#### `Readonly` portfolioValue

```ts
portfolioValue: number
```

The resulting portfolio value

##### Remarks

Format: double

#### `Readonly` portfolioVariation

```ts
portfolioVariation: number
```

Portfolio variation, in unit notation

##### Remarks

Format: double

#### `Readonly` shortTermInterestRateVariation

```ts
shortTermInterestRateVariation: number
```

Short term interest rate variation, in unit notation

##### Remarks

Format: double

#### `Readonly` volatility

```ts
volatility: number
```

The resulting volatility

##### Remarks

Format: double

#### `Readonly` volatilityVariation

```ts
volatilityVariation: number
```

Volatility variation, in unit notation

##### Remarks

Format: double
