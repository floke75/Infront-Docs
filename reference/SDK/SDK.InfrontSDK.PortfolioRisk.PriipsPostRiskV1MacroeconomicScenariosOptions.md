---
title: "PriipsPostRiskV1MacroeconomicScenariosOptions"
qualified_name: "SDK.InfrontSDK.PortfolioRisk.PriipsPostRiskV1MacroeconomicScenariosOptions"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.PortfolioRisk"
group: "PortfolioRisk"
nav_path: "SDK > InfrontSDK > Other > PortfolioRisk > PriipsPostRiskV1MacroeconomicScenariosOptions"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.PortfolioRisk.PriipsPostRiskV1MacroeconomicScenariosOptions.html"
defines: ["PriipsPostRiskV1MacroeconomicScenariosOptions"]
member_count: 9
members: ["globalMarketProxy", "interestRate", "portfolioId", "scenarioAggregation", "valuationDatetime", "volatilityProxy", "onData?", "onError?", "onFinally?"]
member_groups:
  "Properties": ["globalMarketProxy", "interestRate", "portfolioId", "scenarioAggregation", "valuationDatetime", "volatilityProxy"]
  "Methods": ["onData?", "onError?", "onFinally?"]
related_types: ["SDK.InfrontSDK.PortfolioRisk.PriipsPostRiskV1MacroeconomicScenariosResponse", "SDK.InfrontSDK.PortfolioRisk.PriipsDataServicesRiskvaluatorMacroeconomicScenariosRequest"]
reference_count: 7
references: ["SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticBasket", "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticIdentifier", "SDK.InfrontSDK.PortfolioRisk.PriipsDataServicesRiskvaluatorMacroeconomicScenariosRequestScenarioAggregation", "SDK.InfrontSDK.PortfolioRisk.PriipsPostRiskV1MacroeconomicScenariosResponse", "SDK.InfrontSDK.DataRequest", "SDK.InfrontSDK.PortfolioRisk.priipsPostRiskV1MacroeconomicScenarios", "SDK.InfrontSDK.PortfolioRisk.PriipsDataServicesRiskvaluatorMacroeconomicScenariosRequest"]
---

# PriipsPostRiskV1MacroeconomicScenariosOptions

Request options for [priipsPostRiskV1MacroeconomicScenarios](./SDK.InfrontSDK.PortfolioRisk.priipsPostRiskV1MacroeconomicScenarios.md)

```ts
interface PriipsPostRiskV1MacroeconomicScenariosOptions {
    globalMarketProxy: PriipsDataStaticBasket;
    interestRate: PriipsDataStaticIdentifier;
    portfolioId: string;
    scenarioAggregation: PriipsDataServicesRiskvaluatorMacroeconomicScenariosRequestScenarioAggregation;
    valuationDatetime: string;
    volatilityProxy: PriipsDataStaticBasket;
    onData?(
        data: readonly PriipsPostRiskV1MacroeconomicScenariosResponse[],
        response: PortfolioRiskResponse<
            PriipsPostRiskV1MacroeconomicScenariosResponse,
        >,
    ): void
    | DataRequest
    | readonly DataRequest[];
    onError?(
        error: PortfolioRiskResponseError,
        response: PortfolioRiskResponse<
            PriipsPostRiskV1MacroeconomicScenariosResponse,
        >,
    ): void
    | DataRequest
    | readonly DataRequest[];
    onFinally?(
        response: PortfolioRiskResponse<
            PriipsPostRiskV1MacroeconomicScenariosResponse,
        >,
    ): void
    | DataRequest
    | readonly DataRequest[];
}
```

#### Hierarchy ([View Summary](../type-hierarchy.md#SDK.InfrontSDK.PortfolioRisk.PriipsPostRiskV1MacroeconomicScenariosOptions))

- PortfolioRiskCommonRequestOptions<
  PriipsPostRiskV1MacroeconomicScenariosResponse,
  >
- PriipsDataServicesRiskvaluatorMacroeconomicScenariosRequest

  - PriipsPostRiskV1MacroeconomicScenariosOptions

### Properties

#### `Readonly` globalMarketProxy

```ts
globalMarketProxy: PriipsDataStaticBasket
```

The global market economy proxy. It can be a basket of multiple underlyings with a given weights to simulate
different definition of the market economy

Inherited from PriipsDataServicesRiskvaluatorMacroeconomicScenariosRequest.globalMarketProxy

#### `Readonly` interestRate

```ts
interestRate: PriipsDataStaticIdentifier
```

The interest rate identifier used to compute the interest rate scenarios

Inherited from PriipsDataServicesRiskvaluatorMacroeconomicScenariosRequest.interestRate

#### `Readonly` portfolioId

```ts
portfolioId: string
```

Identifier of the portfolio

Inherited from PriipsDataServicesRiskvaluatorMacroeconomicScenariosRequest.portfolioId

#### `Readonly` scenarioAggregation

```ts
scenarioAggregation: PriipsDataServicesRiskvaluatorMacroeconomicScenariosRequestScenarioAggregation
```

##### Remarks

Format: enum

Inherited from PriipsDataServicesRiskvaluatorMacroeconomicScenariosRequest.scenarioAggregation

#### `Readonly` valuationDatetime

```ts
valuationDatetime: string
```

timestamp for the portfolio valuation

##### Remarks

Format: date-time

Inherited from PriipsDataServicesRiskvaluatorMacroeconomicScenariosRequest.valuationDatetime

#### `Readonly` volatilityProxy

```ts
volatilityProxy: PriipsDataStaticBasket
```

The volatility proxy

Inherited from PriipsDataServicesRiskvaluatorMacroeconomicScenariosRequest.volatilityProxy

### Methods

#### `Optional` onData

```ts
onData?(
    data: readonly PriipsPostRiskV1MacroeconomicScenariosResponse[],
    response: PortfolioRiskResponse<
        PriipsPostRiskV1MacroeconomicScenariosResponse,
    >,
): void
| DataRequest
| readonly DataRequest[]
```

A callback called when a data request has completed succesfully.

##### Parameters

- data: readonly PriipsPostRiskV1MacroeconomicScenariosResponse[]
- response: PortfolioRiskResponse<PriipsPostRiskV1MacroeconomicScenariosResponse>

##### Returns void | [DataRequest](./SDK.InfrontSDK.DataRequest.md) | readonly [DataRequest](./SDK.InfrontSDK.DataRequest.md)[]

Inherited from Infront.PortfolioRiskCommonRequestOptions.onData

#### `Optional` onError

```ts
onError?(
    error: PortfolioRiskResponseError,
    response: PortfolioRiskResponse<
        PriipsPostRiskV1MacroeconomicScenariosResponse,
    >,
): void
| DataRequest
| readonly DataRequest[]
```

A callback called when an error occurred trying to make the request.

##### Parameters

- error: PortfolioRiskResponseError
- response: PortfolioRiskResponse<PriipsPostRiskV1MacroeconomicScenariosResponse>

##### Returns void | [DataRequest](./SDK.InfrontSDK.DataRequest.md) | readonly [DataRequest](./SDK.InfrontSDK.DataRequest.md)[]

Inherited from Infront.PortfolioRiskCommonRequestOptions.onError

#### `Optional` onFinally

```ts
onFinally?(
    response: PortfolioRiskResponse<
        PriipsPostRiskV1MacroeconomicScenariosResponse,
    >,
): void
| DataRequest
| readonly DataRequest[]
```

A callback called when the request is finished, either because data was received,
error occurred, or the request was aborted/unsubscribed.

##### Parameters

- response: PortfolioRiskResponse<PriipsPostRiskV1MacroeconomicScenariosResponse>

##### Returns void | [DataRequest](./SDK.InfrontSDK.DataRequest.md) | readonly [DataRequest](./SDK.InfrontSDK.DataRequest.md)[]

Inherited from Infront.PortfolioRiskCommonRequestOptions.onFinally
