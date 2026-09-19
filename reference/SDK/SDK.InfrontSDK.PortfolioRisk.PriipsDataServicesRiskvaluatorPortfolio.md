---
title: "PriipsDataServicesRiskvaluatorPortfolio"
qualified_name: "SDK.InfrontSDK.PortfolioRisk.PriipsDataServicesRiskvaluatorPortfolio"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.PortfolioRisk"
group: "PortfolioRisk"
nav_path: "SDK > InfrontSDK > Other > PortfolioRisk > PriipsDataServicesRiskvaluatorPortfolio"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.PortfolioRisk.PriipsDataServicesRiskvaluatorPortfolio.html"
defines: ["PriipsDataServicesRiskvaluatorPortfolio"]
member_count: 8
members: ["benchmarkUnderlyings", "historicalDataParameter", "pricingParameters", "referencePrices", "riskFiguresCalculationParameters", "simulationModel", "simulationParameters", "varCalculationParameters"]
member_groups:
  "Properties": ["benchmarkUnderlyings", "historicalDataParameter", "pricingParameters", "referencePrices", "riskFiguresCalculationParameters", "simulationModel", "simulationParameters", "varCalculationParameters"]
reference_count: 8
references: ["SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticIdentifier", "SDK.InfrontSDK.PortfolioRisk.PriipsDataServicesRiskvaluatorHistoricalDataParameter", "SDK.InfrontSDK.PortfolioRisk.PriipsDataServicesRiskvaluatorProductPricingParameter", "SDK.InfrontSDK.PortfolioRisk.PriipsDataCalculationQuotes", "SDK.InfrontSDK.PortfolioRisk.PriipsDataServicesRiskvaluatorRiskFiguresCalculationParameters", "SDK.InfrontSDK.PortfolioRisk.PriipsDataServicesRiskvaluatorPortfolioSimulationModel", "SDK.InfrontSDK.PortfolioRisk.PriipsDataServicesRiskvaluatorSimulationParameters", "SDK.InfrontSDK.PortfolioRisk.PriipsDataServicesRiskvaluatorVaRCalculationParameters"]
---

# PriipsDataServicesRiskvaluatorPortfolio

Portfolio encodes a portfolio composition and metadata.
Based on PortfolioValuationRequest which is used in the Quant valuation service internally.

#### Remarks

API Schema ID: dev.infrontfinance.priips.data.services.riskvaluator.Portfolio

```ts
interface PriipsDataServicesRiskvaluatorPortfolio {
    benchmarkUnderlyings: readonly PriipsDataStaticIdentifier[];
    historicalDataParameter: PriipsDataServicesRiskvaluatorHistoricalDataParameter;
    pricingParameters: readonly PriipsDataServicesRiskvaluatorProductPricingParameter[];
    referencePrices: readonly PriipsDataCalculationQuotes[];
    riskFiguresCalculationParameters: PriipsDataServicesRiskvaluatorRiskFiguresCalculationParameters;
    simulationModel: PriipsDataServicesRiskvaluatorPortfolioSimulationModel;
    simulationParameters: PriipsDataServicesRiskvaluatorSimulationParameters;
    varCalculationParameters: PriipsDataServicesRiskvaluatorVaRCalculationParameters;
}
```

### Properties

#### `Readonly` benchmarkUnderlyings

```ts
benchmarkUnderlyings: readonly PriipsDataStaticIdentifier[]
```

The list of benchmark underlying to be simulated together with the portfolio

#### `Readonly` historicalDataParameter

```ts
historicalDataParameter: PriipsDataServicesRiskvaluatorHistoricalDataParameter
```

The parameters defining the historical data used for the portfolio evaluation

#### `Readonly` pricingParameters

```ts
pricingParameters: readonly PriipsDataServicesRiskvaluatorProductPricingParameter[]
```

the parameters for the pricing of individual portfolio positions

#### `Readonly` referencePrices

```ts
referencePrices: readonly PriipsDataCalculationQuotes[]
```

Reference prices for the portfolio positions for the given valuation date. If no reference price for a
position is given, the Quotes object will be empty (can be identified by a zero timestamp).

#### `Readonly` riskFiguresCalculationParameters

```ts
riskFiguresCalculationParameters: PriipsDataServicesRiskvaluatorRiskFiguresCalculationParameters
```

The parameters used to compute the risk figures of the portfolio
and individual positions within

#### `Readonly` simulationModel

```ts
simulationModel: PriipsDataServicesRiskvaluatorPortfolioSimulationModel
```

The simulation model

##### Remarks

Format: enum

#### `Readonly` simulationParameters

```ts
simulationParameters: PriipsDataServicesRiskvaluatorSimulationParameters
```

The parameters for the simulations

#### `Readonly` varCalculationParameters

```ts
varCalculationParameters: PriipsDataServicesRiskvaluatorVaRCalculationParameters
```

The parameters for the VaR calculation
