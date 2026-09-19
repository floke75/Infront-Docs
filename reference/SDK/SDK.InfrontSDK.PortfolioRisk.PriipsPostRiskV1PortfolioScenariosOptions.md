---
title: "PriipsPostRiskV1PortfolioScenariosOptions"
qualified_name: "SDK.InfrontSDK.PortfolioRisk.PriipsPostRiskV1PortfolioScenariosOptions"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.PortfolioRisk"
group: "PortfolioRisk"
nav_path: "SDK > InfrontSDK > Other > PortfolioRisk > PriipsPostRiskV1PortfolioScenariosOptions"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.PortfolioRisk.PriipsPostRiskV1PortfolioScenariosOptions.html"
defines: ["PriipsPostRiskV1PortfolioScenariosOptions"]
member_count: 6
members: ["portfolioId", "scenarioQuantiles", "valuationDatetime", "onData?", "onError?", "onFinally?"]
member_groups:
  "Properties": ["portfolioId", "scenarioQuantiles", "valuationDatetime"]
  "Methods": ["onData?", "onError?", "onFinally?"]
related_types: ["SDK.InfrontSDK.PortfolioRisk.PriipsPostRiskV1PortfolioScenariosResponse", "SDK.InfrontSDK.PortfolioRisk.PriipsDataServicesRiskvaluatorPortfolioScenarioRequest"]
reference_count: 4
references: ["SDK.InfrontSDK.PortfolioRisk.PriipsPostRiskV1PortfolioScenariosResponse", "SDK.InfrontSDK.DataRequest", "SDK.InfrontSDK.PortfolioRisk.priipsPostRiskV1PortfolioScenarios", "SDK.InfrontSDK.PortfolioRisk.PriipsDataServicesRiskvaluatorPortfolioScenarioRequest"]
---

# PriipsPostRiskV1PortfolioScenariosOptions

Request options for [priipsPostRiskV1PortfolioScenarios](./SDK.InfrontSDK.PortfolioRisk.priipsPostRiskV1PortfolioScenarios.md)

```ts
interface PriipsPostRiskV1PortfolioScenariosOptions {
    portfolioId: string;
    scenarioQuantiles: readonly number[];
    valuationDatetime: string;
    onData?(
        data: readonly PriipsPostRiskV1PortfolioScenariosResponse[],
        response: PortfolioRiskResponse<
            PriipsPostRiskV1PortfolioScenariosResponse,
        >,
    ): void
    | DataRequest
    | readonly DataRequest[];
    onError?(
        error: PortfolioRiskResponseError,
        response: PortfolioRiskResponse<
            PriipsPostRiskV1PortfolioScenariosResponse,
        >,
    ): void
    | DataRequest
    | readonly DataRequest[];
    onFinally?(
        response: PortfolioRiskResponse<
            PriipsPostRiskV1PortfolioScenariosResponse,
        >,
    ): void
    | DataRequest
    | readonly DataRequest[];
}
```

#### Hierarchy ([View Summary](../type-hierarchy.md#SDK.InfrontSDK.PortfolioRisk.PriipsPostRiskV1PortfolioScenariosOptions))

- PortfolioRiskCommonRequestOptions<PriipsPostRiskV1PortfolioScenariosResponse>
- PriipsDataServicesRiskvaluatorPortfolioScenarioRequest

  - PriipsPostRiskV1PortfolioScenariosOptions

### Properties

#### `Readonly` portfolioId

```ts
portfolioId: string
```

Identifier for the portfolio

Inherited from PriipsDataServicesRiskvaluatorPortfolioScenarioRequest.portfolioId

#### `Readonly` scenarioQuantiles

```ts
scenarioQuantiles: readonly number[]
```

The list of quantiles to be used, four numbers each less than one

Inherited from PriipsDataServicesRiskvaluatorPortfolioScenarioRequest.scenarioQuantiles

#### `Readonly` valuationDatetime

```ts
valuationDatetime: string
```

timestamp for the portfolio scenario valuation

##### Remarks

Format: date-time

Inherited from PriipsDataServicesRiskvaluatorPortfolioScenarioRequest.valuationDatetime

### Methods

#### `Optional` onData

```ts
onData?(
    data: readonly PriipsPostRiskV1PortfolioScenariosResponse[],
    response: PortfolioRiskResponse<PriipsPostRiskV1PortfolioScenariosResponse>,
): void | DataRequest | readonly DataRequest[]
```

A callback called when a data request has completed succesfully.

##### Parameters

- data: readonly PriipsPostRiskV1PortfolioScenariosResponse[]
- response: PortfolioRiskResponse<PriipsPostRiskV1PortfolioScenariosResponse>

##### Returns void | [DataRequest](./SDK.InfrontSDK.DataRequest.md) | readonly [DataRequest](./SDK.InfrontSDK.DataRequest.md)[]

Inherited from Infront.PortfolioRiskCommonRequestOptions.onData

#### `Optional` onError

```ts
onError?(
    error: PortfolioRiskResponseError,
    response: PortfolioRiskResponse<PriipsPostRiskV1PortfolioScenariosResponse>,
): void | DataRequest | readonly DataRequest[]
```

A callback called when an error occurred trying to make the request.

##### Parameters

- error: PortfolioRiskResponseError
- response: PortfolioRiskResponse<PriipsPostRiskV1PortfolioScenariosResponse>

##### Returns void | [DataRequest](./SDK.InfrontSDK.DataRequest.md) | readonly [DataRequest](./SDK.InfrontSDK.DataRequest.md)[]

Inherited from Infront.PortfolioRiskCommonRequestOptions.onError

#### `Optional` onFinally

```ts
onFinally?(
    response: PortfolioRiskResponse<
        PriipsPostRiskV1PortfolioScenariosResponse,
    >,
): void
| DataRequest
| readonly DataRequest[]
```

A callback called when the request is finished, either because data was received,
error occurred, or the request was aborted/unsubscribed.

##### Parameters

- response: PortfolioRiskResponse<PriipsPostRiskV1PortfolioScenariosResponse>

##### Returns void | [DataRequest](./SDK.InfrontSDK.DataRequest.md) | readonly [DataRequest](./SDK.InfrontSDK.DataRequest.md)[]

Inherited from Infront.PortfolioRiskCommonRequestOptions.onFinally
