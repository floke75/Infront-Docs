---
title: "PriipsDataServicesRiskvaluatorSimulationParameters"
qualified_name: "SDK.InfrontSDK.PortfolioRisk.PriipsDataServicesRiskvaluatorSimulationParameters"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.PortfolioRisk"
group: "PortfolioRisk"
nav_path: "SDK > InfrontSDK > Other > PortfolioRisk > PriipsDataServicesRiskvaluatorSimulationParameters"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.PortfolioRisk.PriipsDataServicesRiskvaluatorSimulationParameters.html"
defines: ["PriipsDataServicesRiskvaluatorSimulationParameters"]
member_count: 6
members: ["historicalDataParameter", "interestRateSimulationParameter", "nestedPaths", "simulationDays", "simulationModel", "simulationPaths"]
member_groups:
  "Properties": ["historicalDataParameter", "interestRateSimulationParameter", "nestedPaths", "simulationDays", "simulationModel", "simulationPaths"]
reference_count: 3
references: ["SDK.InfrontSDK.PortfolioRisk.PriipsDataServicesRiskvaluatorHistoricalDataParameter", "SDK.InfrontSDK.PortfolioRisk.PriipsDataServicesRiskvaluatorInterestRateSimulationParameters", "SDK.InfrontSDK.PortfolioRisk.PriipsDataServicesRiskvaluatorSimulationParametersSimulationModel"]
---

# PriipsDataServicesRiskvaluatorSimulationParameters

#### Remarks

API Schema ID: dev.infrontfinance.priips.data.services.riskvaluator.SimulationParameters

```ts
interface PriipsDataServicesRiskvaluatorSimulationParameters {
    historicalDataParameter: PriipsDataServicesRiskvaluatorHistoricalDataParameter;
    interestRateSimulationParameter: PriipsDataServicesRiskvaluatorInterestRateSimulationParameters;
    nestedPaths: number;
    simulationDays: number;
    simulationModel: PriipsDataServicesRiskvaluatorSimulationParametersSimulationModel;
    simulationPaths: number;
}
```

### Properties

#### `Readonly` historicalDataParameter

```ts
historicalDataParameter: PriipsDataServicesRiskvaluatorHistoricalDataParameter
```

The parameters defining the historical data used for the portfolio evaluation

#### `Readonly` interestRateSimulationParameter

```ts
interestRateSimulationParameter: PriipsDataServicesRiskvaluatorInterestRateSimulationParameters
```

The parameters used for the simulation of interest rate curves

#### `Readonly` nestedPaths

```ts
nestedPaths: number
```

Number of nested paths used in the simulation for structured products

##### Remarks

Format: int32

#### `Readonly` simulationDays

```ts
simulationDays: number
```

Number of simulation days

##### Remarks

Format: int32

#### `Readonly` simulationModel

```ts
simulationModel: PriipsDataServicesRiskvaluatorSimulationParametersSimulationModel
```

The simulation model

##### Remarks

Format: enum

#### `Readonly` simulationPaths

```ts
simulationPaths: number
```

Number of paths used in the Monte Carlo simulation

##### Remarks

Format: int32
