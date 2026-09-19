---
title: "PriipsPostRiskV1ValueAtRiskOptions"
qualified_name: "SDK.InfrontSDK.PortfolioRisk.PriipsPostRiskV1ValueAtRiskOptions"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.PortfolioRisk"
group: "PortfolioRisk"
nav_path: "SDK > InfrontSDK > Other > PortfolioRisk > PriipsPostRiskV1ValueAtRiskOptions"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.PortfolioRisk.PriipsPostRiskV1ValueAtRiskOptions.html"
defines: ["PriipsPostRiskV1ValueAtRiskOptions"]
member_count: 5
members: ["portfolioId", "valuationDatetime", "onData?", "onError?", "onFinally?"]
member_groups:
  "Properties": ["portfolioId", "valuationDatetime"]
  "Methods": ["onData?", "onError?", "onFinally?"]
related_types: ["SDK.InfrontSDK.PortfolioRisk.PriipsPostRiskV1ValueAtRiskResponse", "SDK.InfrontSDK.PortfolioRisk.PriipsDataServicesRiskvaluatorValueAtRiskRequest"]
reference_count: 4
references: ["SDK.InfrontSDK.PortfolioRisk.PriipsPostRiskV1ValueAtRiskResponse", "SDK.InfrontSDK.DataRequest", "SDK.InfrontSDK.PortfolioRisk.priipsPostRiskV1ValueAtRisk", "SDK.InfrontSDK.PortfolioRisk.PriipsDataServicesRiskvaluatorValueAtRiskRequest"]
---

# PriipsPostRiskV1ValueAtRiskOptions

Request options for [priipsPostRiskV1ValueAtRisk](./SDK.InfrontSDK.PortfolioRisk.priipsPostRiskV1ValueAtRisk.md)

```ts
interface PriipsPostRiskV1ValueAtRiskOptions {
    portfolioId: string;
    valuationDatetime: string;
    onData?(
        data: readonly PriipsPostRiskV1ValueAtRiskResponse[],
        response: PortfolioRiskResponse<PriipsPostRiskV1ValueAtRiskResponse>,
    ): void | DataRequest | readonly DataRequest[];
    onError?(
        error: PortfolioRiskResponseError,
        response: PortfolioRiskResponse<PriipsPostRiskV1ValueAtRiskResponse>,
    ): void | DataRequest | readonly DataRequest[];
    onFinally?(
        response: PortfolioRiskResponse<PriipsPostRiskV1ValueAtRiskResponse>,
    ): void | DataRequest | readonly DataRequest[];
}
```

#### Hierarchy ([View Summary](../type-hierarchy.md#SDK.InfrontSDK.PortfolioRisk.PriipsPostRiskV1ValueAtRiskOptions))

- PortfolioRiskCommonRequestOptions<PriipsPostRiskV1ValueAtRiskResponse>
- PriipsDataServicesRiskvaluatorValueAtRiskRequest

  - PriipsPostRiskV1ValueAtRiskOptions

### Properties

#### `Readonly` portfolioId

```ts
portfolioId: string
```

Identifier for the portfolio

Inherited from PriipsDataServicesRiskvaluatorValueAtRiskRequest.portfolioId

#### `Readonly` valuationDatetime

```ts
valuationDatetime: string
```

timestamp for the value at risk valuation

##### Remarks

Format: date-time

Inherited from PriipsDataServicesRiskvaluatorValueAtRiskRequest.valuationDatetime

### Methods

#### `Optional` onData

```ts
onData?(
    data: readonly PriipsPostRiskV1ValueAtRiskResponse[],
    response: PortfolioRiskResponse<PriipsPostRiskV1ValueAtRiskResponse>,
): void | DataRequest | readonly DataRequest[]
```

A callback called when a data request has completed succesfully.

##### Parameters

- data: readonly PriipsPostRiskV1ValueAtRiskResponse[]
- response: PortfolioRiskResponse<PriipsPostRiskV1ValueAtRiskResponse>

##### Returns void | [DataRequest](./SDK.InfrontSDK.DataRequest.md) | readonly [DataRequest](./SDK.InfrontSDK.DataRequest.md)[]

Inherited from Infront.PortfolioRiskCommonRequestOptions.onData

#### `Optional` onError

```ts
onError?(
    error: PortfolioRiskResponseError,
    response: PortfolioRiskResponse<PriipsPostRiskV1ValueAtRiskResponse>,
): void | DataRequest | readonly DataRequest[]
```

A callback called when an error occurred trying to make the request.

##### Parameters

- error: PortfolioRiskResponseError
- response: PortfolioRiskResponse<PriipsPostRiskV1ValueAtRiskResponse>

##### Returns void | [DataRequest](./SDK.InfrontSDK.DataRequest.md) | readonly [DataRequest](./SDK.InfrontSDK.DataRequest.md)[]

Inherited from Infront.PortfolioRiskCommonRequestOptions.onError

#### `Optional` onFinally

```ts
onFinally?(
    response: PortfolioRiskResponse<PriipsPostRiskV1ValueAtRiskResponse>,
): void | DataRequest | readonly DataRequest[]
```

A callback called when the request is finished, either because data was received,
error occurred, or the request was aborted/unsubscribed.

##### Parameters

- response: PortfolioRiskResponse<PriipsPostRiskV1ValueAtRiskResponse>

##### Returns void | [DataRequest](./SDK.InfrontSDK.DataRequest.md) | readonly [DataRequest](./SDK.InfrontSDK.DataRequest.md)[]

Inherited from Infront.PortfolioRiskCommonRequestOptions.onFinally
