---
title: "PortfolioRiskManager"
qualified_name: "SDK.InfrontSDK.PortfolioRisk.PortfolioRiskManager"
kind: class
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.PortfolioRisk"
group: "PortfolioRisk"
nav_path: "SDK > InfrontSDK > Other > PortfolioRisk > PortfolioRiskManager"
source_url: "https://docs.infrontfinance.com/docs/classes/SDK.InfrontSDK.PortfolioRisk.PortfolioRiskManager.html"
defines: ["PortfolioRiskManager"]
member_count: 17
members: ["clonePortfolio", "deletePortfolio", "getMacroeconomicScenarios", "getPortfolioComposition", "getPortfolioCompositionHistory", "getPortfolioScenarios", "getPositionDistribution", "getPositionRiskFigures", "getPositionScatterPlot", "getRiskReturnContributions", "getRiskStoreId", "getValueAtRisk", "getValueAtRiskHistory", "listPortfolios", "loadPortfolio", "renameRiskListPortfolioProps", "storePortfolio"]
member_groups:
  "Methods": ["clonePortfolio", "deletePortfolio", "getMacroeconomicScenarios", "getPortfolioComposition", "getPortfolioCompositionHistory", "getPortfolioScenarios", "getPositionDistribution", "getPositionRiskFigures", "getPositionScatterPlot", "getRiskReturnContributions", "getRiskStoreId", "getValueAtRisk", "getValueAtRiskHistory", "listPortfolios", "loadPortfolio", "renameRiskListPortfolioProps", "storePortfolio"]
reference_count: 19
references: ["SDK.InfrontSDK.PortfolioRisk.PortfoliosCloneOptions", "SDK.InfrontSDK.DataRequest", "SDK.InfrontSDK.PortfolioRisk.PortfoliosDeleteOptions", "SDK.InfrontSDK.PortfolioRisk.MacroeconomicScenariosOptions", "SDK.InfrontSDK.PortfolioRisk.PortfolioCompositionOptions", "SDK.InfrontSDK.PortfolioRisk.PortfolioCompositionHistoryOptions", "SDK.InfrontSDK.PortfolioRisk.PortfolioScenariosOptions", "SDK.InfrontSDK.PortfolioRisk.PositionDistributionOptions", "SDK.InfrontSDK.PortfolioRisk.PositionRiskFiguresOptions", "SDK.InfrontSDK.PortfolioRisk.PositionScatterPlotOptions", "SDK.InfrontSDK.PortfolioRisk.RiskReturnContributionsOptions", "SDK.InfrontSDK.PortfolioRisk.RiskClientInfo", "SDK.InfrontSDK.PortfolioRisk.ValueAtRiskOptions", "SDK.InfrontSDK.PortfolioRisk.ValueAtRiskHistoryOptions", "SDK.InfrontSDK.PortfolioRisk.PortfoliosListOptions", "SDK.InfrontSDK.PortfolioRisk.PortfoliosLoadOptions", "SDK.InfrontSDK.PortfolioRisk.PriipsGetPortfoliosV1ListResponse", "SDK.InfrontSDK.PortfolioRisk.RiskListPortfolio", "SDK.InfrontSDK.PortfolioRisk.PortfoliosStoreOptions"]
---

# PortfolioRiskManager

Portfolio Risk Manager

#### Param: model

Infront.model

#### Param: provider

system specific implementation of an InfrontSDK.PortfolioRisk.PortfolioRiskProvider

### Methods

#### clonePortfolio

```ts
clonePortfolio(options: PortfoliosCloneOptions): DataRequest
```

Clone a single portfolio stored in Risk backend.

The modifier string can be used to create a new and modified instance of same portfolio in Risk backend.

The Risk backend identifier (storeId) is retrieved from portfolio of the hosting application.

##### Parameters

- options: [PortfoliosCloneOptions](./SDK.InfrontSDK.PortfolioRisk.PortfoliosCloneOptions.md)

##### Returns [DataRequest](./SDK.InfrontSDK.DataRequest.md)

an InfrontSDK.DataRequest which, onData callback will provide nothing back.

#### deletePortfolio

```ts
deletePortfolio(options: PortfoliosDeleteOptions): DataRequest
```

Delete a single portfolio stored in Risk backend.

FIXME: the following is most likely not true in the future. Delete will then always delete portfolio and its modifier-ed portfolios.
The modifier string can be used to delete only a specific portfolio in Risk backend.
Without modifier all portfolios with provided identifier will be deleted, including all its modifier versions.

The Risk backend identifier (storeId) is retrieved from portfolio of the hosting application.

##### Parameters

- options: [PortfoliosDeleteOptions](./SDK.InfrontSDK.PortfolioRisk.PortfoliosDeleteOptions.md)

##### Returns [DataRequest](./SDK.InfrontSDK.DataRequest.md)

an InfrontSDK.DataRequest which, onData callback will provide nothing back.

#### getMacroeconomicScenarios

```ts
getMacroeconomicScenarios(options: MacroeconomicScenariosOptions): DataRequest
```

Get the IQ Risk Macroeconomic Scenarios

##### Parameters

- options: [MacroeconomicScenariosOptions](./SDK.InfrontSDK.PortfolioRisk.MacroeconomicScenariosOptions.md)

##### Returns [DataRequest](./SDK.InfrontSDK.DataRequest.md)

#### getPortfolioComposition

```ts
getPortfolioComposition(options: PortfolioCompositionOptions): DataRequest
```

Get the IQ Risk - Portfolio Composition.

##### Parameters

- options: [PortfolioCompositionOptions](./SDK.InfrontSDK.PortfolioRisk.PortfolioCompositionOptions.md)

##### Returns [DataRequest](./SDK.InfrontSDK.DataRequest.md)

#### getPortfolioCompositionHistory

```ts
getPortfolioCompositionHistory(
    options: PortfolioCompositionHistoryOptions,
): DataRequest
```

Get the IQ Risk - Portfolio Composition History.

##### Parameters

- options: [PortfolioCompositionHistoryOptions](./SDK.InfrontSDK.PortfolioRisk.PortfolioCompositionHistoryOptions.md)

##### Returns [DataRequest](./SDK.InfrontSDK.DataRequest.md)

#### getPortfolioScenarios

```ts
getPortfolioScenarios(options: PortfolioScenariosOptions): DataRequest
```

Get the IQ Risk Portfolio Scenarios

##### Parameters

- options: [PortfolioScenariosOptions](./SDK.InfrontSDK.PortfolioRisk.PortfolioScenariosOptions.md)

##### Returns [DataRequest](./SDK.InfrontSDK.DataRequest.md)

#### getPositionDistribution

```ts
getPositionDistribution(options: PositionDistributionOptions): DataRequest
```

Get the IQ Risk - Position Distribution.

##### Parameters

- options: [PositionDistributionOptions](./SDK.InfrontSDK.PortfolioRisk.PositionDistributionOptions.md)

##### Returns [DataRequest](./SDK.InfrontSDK.DataRequest.md)

#### getPositionRiskFigures

```ts
getPositionRiskFigures(options: PositionRiskFiguresOptions): DataRequest
```

Get the IQ Risk - Position Risk Figures.

##### Parameters

- options: [PositionRiskFiguresOptions](./SDK.InfrontSDK.PortfolioRisk.PositionRiskFiguresOptions.md)

##### Returns [DataRequest](./SDK.InfrontSDK.DataRequest.md)

#### getPositionScatterPlot

```ts
getPositionScatterPlot(options: PositionScatterPlotOptions): DataRequest
```

Get the IQ Risk Position Scatter Plot.

##### Parameters

- options: [PositionScatterPlotOptions](./SDK.InfrontSDK.PortfolioRisk.PositionScatterPlotOptions.md)

##### Returns [DataRequest](./SDK.InfrontSDK.DataRequest.md)

#### getRiskReturnContributions

```ts
getRiskReturnContributions(options: RiskReturnContributionsOptions): DataRequest
```

Get the IQ Risk Return Contributions.

##### Parameters

- options: [RiskReturnContributionsOptions](./SDK.InfrontSDK.PortfolioRisk.RiskReturnContributionsOptions.md)

##### Returns [DataRequest](./SDK.InfrontSDK.DataRequest.md)

#### getRiskStoreId

```ts
getRiskStoreId(riskClientInfo: RiskClientInfo): string
```

Get the storeId (portfolioId in the Risk backend) for a clientId (portfolioId in the hosting application).

##### Parameters

- riskClientInfo: [RiskClientInfo](./SDK.InfrontSDK.PortfolioRisk.RiskClientInfo.md)

  the portfolio identifier used in the hosting application

##### Returns string

- storeId used to identify portfolio in Risk backend

#### getValueAtRisk

```ts
getValueAtRisk(options: ValueAtRiskOptions): DataRequest
```

Get the IQ Risk Value at Risk of the portfolio.

##### Parameters

- options: [ValueAtRiskOptions](./SDK.InfrontSDK.PortfolioRisk.ValueAtRiskOptions.md)

##### Returns [DataRequest](./SDK.InfrontSDK.DataRequest.md)

#### getValueAtRiskHistory

```ts
getValueAtRiskHistory(options: ValueAtRiskHistoryOptions): DataRequest
```

Get the IQ Risk Value at Risk History of the portfolio.

##### Parameters

- options: [ValueAtRiskHistoryOptions](./SDK.InfrontSDK.PortfolioRisk.ValueAtRiskHistoryOptions.md)

##### Returns [DataRequest](./SDK.InfrontSDK.DataRequest.md)

#### listPortfolios

```ts
listPortfolios(options: PortfoliosListOptions): DataRequest
```

Load a single portfolio as stored in Risk backend.

The Risk backend identifier (storeId) is retrieved from portfolio of the hosting application.

##### Parameters

- options: [PortfoliosListOptions](./SDK.InfrontSDK.PortfolioRisk.PortfoliosListOptions.md)

##### Returns [DataRequest](./SDK.InfrontSDK.DataRequest.md)

an InfrontSDK.DataRequest which, onData callback will provide the portfolio as stored in Risk backend.

#### loadPortfolio

```ts
loadPortfolio(options: PortfoliosLoadOptions): DataRequest
```

Load a single portfolio as stored in Risk backend.

The Risk backend identifier (storeId) is retrieved from portfolio of the hosting application.

##### Parameters

- options: [PortfoliosLoadOptions](./SDK.InfrontSDK.PortfolioRisk.PortfoliosLoadOptions.md)

##### Returns [DataRequest](./SDK.InfrontSDK.DataRequest.md)

an InfrontSDK.DataRequest which, onData callback will provide the portfolio as stored in Risk backend.

#### renameRiskListPortfolioProps

```ts
renameRiskListPortfolioProps(
    rawData: PriipsGetPortfoliosV1ListResponse[],
): RiskListPortfolio[]
```

Re-wire the property names of rawData from risk /list endpoint to names we understand in sdk and wtk.

##### Parameters

- rawData: [PriipsGetPortfoliosV1ListResponse](./SDK.InfrontSDK.PortfolioRisk.PriipsGetPortfoliosV1ListResponse.md)[]

  list data as received by risk backend

##### Returns [RiskListPortfolio](./SDK.InfrontSDK.PortfolioRisk.RiskListPortfolio.md)[]

- list data with correct property names

#### storePortfolio

```ts
storePortfolio(options: PortfoliosStoreOptions): DataRequest
```

Store a specific portfolio into the Risk backend.

The modifier string can be used to create new, modified instance of same portfolio in Risk backend.

##### Parameters

- options: [PortfoliosStoreOptions](./SDK.InfrontSDK.PortfolioRisk.PortfoliosStoreOptions.md)

##### Returns [DataRequest](./SDK.InfrontSDK.DataRequest.md)

an InfrontSDK.DataRequest which, onData callback will provide the portfolioId (aka storeId) as stored in Risk backend.
