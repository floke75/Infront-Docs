---
title: "PriipsPostRiskV1PortfolioCompositionHistoryOptions"
qualified_name: "SDK.InfrontSDK.PortfolioRisk.PriipsPostRiskV1PortfolioCompositionHistoryOptions"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.PortfolioRisk"
group: "PortfolioRisk"
nav_path: "SDK > InfrontSDK > Other > PortfolioRisk > PriipsPostRiskV1PortfolioCompositionHistoryOptions"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.PortfolioRisk.PriipsPostRiskV1PortfolioCompositionHistoryOptions.html"
defines: ["PriipsPostRiskV1PortfolioCompositionHistoryOptions"]
member_count: 6
members: ["fromDatetime", "portfolioId", "toDatetime", "onData?", "onError?", "onFinally?"]
member_groups:
  "Properties": ["fromDatetime", "portfolioId", "toDatetime"]
  "Methods": ["onData?", "onError?", "onFinally?"]
related_types: ["SDK.InfrontSDK.PortfolioRisk.PriipsPostRiskV1PortfolioCompositionHistoryResponse", "SDK.InfrontSDK.PortfolioRisk.PriipsDataServicesRiskvaluatorPortfolioCompositionHistoryRequest"]
reference_count: 4
references: ["SDK.InfrontSDK.PortfolioRisk.PriipsPostRiskV1PortfolioCompositionHistoryResponse", "SDK.InfrontSDK.DataRequest", "SDK.InfrontSDK.PortfolioRisk.priipsPostRiskV1PortfolioCompositionHistory", "SDK.InfrontSDK.PortfolioRisk.PriipsDataServicesRiskvaluatorPortfolioCompositionHistoryRequest"]
---

# PriipsPostRiskV1PortfolioCompositionHistoryOptions

Request options for [priipsPostRiskV1PortfolioCompositionHistory](./SDK.InfrontSDK.PortfolioRisk.priipsPostRiskV1PortfolioCompositionHistory.md)

```ts
interface PriipsPostRiskV1PortfolioCompositionHistoryOptions {
    fromDatetime: string;
    portfolioId: string;
    toDatetime: string;
    onData?(
        data: readonly PriipsPostRiskV1PortfolioCompositionHistoryResponse[],
        response: PortfolioRiskResponse<
            PriipsPostRiskV1PortfolioCompositionHistoryResponse,
        >,
    ): void
    | DataRequest
    | readonly DataRequest[];
    onError?(
        error: PortfolioRiskResponseError,
        response: PortfolioRiskResponse<
            PriipsPostRiskV1PortfolioCompositionHistoryResponse,
        >,
    ): void
    | DataRequest
    | readonly DataRequest[];
    onFinally?(
        response: PortfolioRiskResponse<
            PriipsPostRiskV1PortfolioCompositionHistoryResponse,
        >,
    ): void
    | DataRequest
    | readonly DataRequest[];
}
```

#### Hierarchy ([View Summary](../type-hierarchy.md#SDK.InfrontSDK.PortfolioRisk.PriipsPostRiskV1PortfolioCompositionHistoryOptions))

- PortfolioRiskCommonRequestOptions<
  PriipsPostRiskV1PortfolioCompositionHistoryResponse,
  >
- PriipsDataServicesRiskvaluatorPortfolioCompositionHistoryRequest

  - PriipsPostRiskV1PortfolioCompositionHistoryOptions

### Properties

#### `Readonly` fromDatetime

```ts
fromDatetime: string
```

timestamp for the start of the profits and loss portfolio valuation.

##### Remarks

Format: date-time

Inherited from PriipsDataServicesRiskvaluatorPortfolioCompositionHistoryRequest.fromDatetime

#### `Readonly` portfolioId

```ts
portfolioId: string
```

Identifier of the portfolio

Inherited from PriipsDataServicesRiskvaluatorPortfolioCompositionHistoryRequest.portfolioId

#### `Readonly` toDatetime

```ts
toDatetime: string
```

timestamp for the end of the profits and loss portfolio valuation.

##### Remarks

Format: date-time

Inherited from PriipsDataServicesRiskvaluatorPortfolioCompositionHistoryRequest.toDatetime

### Methods

#### `Optional` onData

```ts
onData?(
    data: readonly PriipsPostRiskV1PortfolioCompositionHistoryResponse[],
    response: PortfolioRiskResponse<
        PriipsPostRiskV1PortfolioCompositionHistoryResponse,
    >,
): void
| DataRequest
| readonly DataRequest[]
```

A callback called when a data request has completed succesfully.

##### Parameters

- data: readonly PriipsPostRiskV1PortfolioCompositionHistoryResponse[]
- response: PortfolioRiskResponse<PriipsPostRiskV1PortfolioCompositionHistoryResponse>

##### Returns void | [DataRequest](./SDK.InfrontSDK.DataRequest.md) | readonly [DataRequest](./SDK.InfrontSDK.DataRequest.md)[]

Inherited from Infront.PortfolioRiskCommonRequestOptions.onData

#### `Optional` onError

```ts
onError?(
    error: PortfolioRiskResponseError,
    response: PortfolioRiskResponse<
        PriipsPostRiskV1PortfolioCompositionHistoryResponse,
    >,
): void
| DataRequest
| readonly DataRequest[]
```

A callback called when an error occurred trying to make the request.

##### Parameters

- error: PortfolioRiskResponseError
- response: PortfolioRiskResponse<PriipsPostRiskV1PortfolioCompositionHistoryResponse>

##### Returns void | [DataRequest](./SDK.InfrontSDK.DataRequest.md) | readonly [DataRequest](./SDK.InfrontSDK.DataRequest.md)[]

Inherited from Infront.PortfolioRiskCommonRequestOptions.onError

#### `Optional` onFinally

```ts
onFinally?(
    response: PortfolioRiskResponse<
        PriipsPostRiskV1PortfolioCompositionHistoryResponse,
    >,
): void
| DataRequest
| readonly DataRequest[]
```

A callback called when the request is finished, either because data was received,
error occurred, or the request was aborted/unsubscribed.

##### Parameters

- response: PortfolioRiskResponse<PriipsPostRiskV1PortfolioCompositionHistoryResponse>

##### Returns void | [DataRequest](./SDK.InfrontSDK.DataRequest.md) | readonly [DataRequest](./SDK.InfrontSDK.DataRequest.md)[]

Inherited from Infront.PortfolioRiskCommonRequestOptions.onFinally
