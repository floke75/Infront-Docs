---
title: "PriipsGetPortfoliosV1LoadHistoryOptions"
qualified_name: "SDK.InfrontSDK.PortfolioRisk.PriipsGetPortfoliosV1LoadHistoryOptions"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.PortfolioRisk"
group: "PortfolioRisk"
nav_path: "SDK > InfrontSDK > Other > PortfolioRisk > PriipsGetPortfoliosV1LoadHistoryOptions"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.PortfolioRisk.PriipsGetPortfoliosV1LoadHistoryOptions.html"
defines: ["PriipsGetPortfoliosV1LoadHistoryOptions"]
member_count: 6
members: ["fromTimestamp?", "portfolioId?", "toTimestamp?", "onData?", "onError?", "onFinally?"]
member_groups:
  "Properties": ["fromTimestamp?", "portfolioId?", "toTimestamp?"]
  "Methods": ["onData?", "onError?", "onFinally?"]
related_types: ["SDK.InfrontSDK.PortfolioRisk.PriipsGetPortfoliosV1LoadHistoryResponse"]
reference_count: 3
references: ["SDK.InfrontSDK.PortfolioRisk.PriipsGetPortfoliosV1LoadHistoryResponse", "SDK.InfrontSDK.DataRequest", "SDK.InfrontSDK.PortfolioRisk.priipsGetPortfoliosV1LoadHistory"]
---

# PriipsGetPortfoliosV1LoadHistoryOptions

Request options for [priipsGetPortfoliosV1LoadHistory](./SDK.InfrontSDK.PortfolioRisk.priipsGetPortfoliosV1LoadHistory.md)

```ts
interface PriipsGetPortfoliosV1LoadHistoryOptions {
    fromTimestamp?: string;
    portfolioId?: string;
    toTimestamp?: string;
    onData?(
        data: readonly PriipsGetPortfoliosV1LoadHistoryResponse[],
        response: PortfolioRiskResponse<PriipsGetPortfoliosV1LoadHistoryResponse>,
    ): void | DataRequest | readonly DataRequest[];
    onError?(
        error: PortfolioRiskResponseError,
        response: PortfolioRiskResponse<PriipsGetPortfoliosV1LoadHistoryResponse>,
    ): void | DataRequest | readonly DataRequest[];
    onFinally?(
        response: PortfolioRiskResponse<
            PriipsGetPortfoliosV1LoadHistoryResponse,
        >,
    ): void
    | DataRequest
    | readonly DataRequest[];
}
```

#### Hierarchy

- PortfolioRiskCommonRequestOptions<PriipsGetPortfoliosV1LoadHistoryResponse>

  - PriipsGetPortfoliosV1LoadHistoryOptions

### Properties

#### `Optional` ` Readonly`fromTimestamp

```ts
fromTimestamp?: string
```

The starting datetime

#### `Optional` ` Readonly`portfolioId

```ts
portfolioId?: string
```

the portfolio id for which we are requesting the list

#### `Optional` ` Readonly`toTimestamp

```ts
toTimestamp?: string
```

The ending datetime

### Methods

#### `Optional` onData

```ts
onData?(
    data: readonly PriipsGetPortfoliosV1LoadHistoryResponse[],
    response: PortfolioRiskResponse<PriipsGetPortfoliosV1LoadHistoryResponse>,
): void | DataRequest | readonly DataRequest[]
```

A callback called when a data request has completed succesfully.

##### Parameters

- data: readonly PriipsGetPortfoliosV1LoadHistoryResponse[]
- response: PortfolioRiskResponse<PriipsGetPortfoliosV1LoadHistoryResponse>

##### Returns void | [DataRequest](./SDK.InfrontSDK.DataRequest.md) | readonly [DataRequest](./SDK.InfrontSDK.DataRequest.md)[]

Inherited from Infront.PortfolioRiskCommonRequestOptions.onData

#### `Optional` onError

```ts
onError?(
    error: PortfolioRiskResponseError,
    response: PortfolioRiskResponse<PriipsGetPortfoliosV1LoadHistoryResponse>,
): void | DataRequest | readonly DataRequest[]
```

A callback called when an error occurred trying to make the request.

##### Parameters

- error: PortfolioRiskResponseError
- response: PortfolioRiskResponse<PriipsGetPortfoliosV1LoadHistoryResponse>

##### Returns void | [DataRequest](./SDK.InfrontSDK.DataRequest.md) | readonly [DataRequest](./SDK.InfrontSDK.DataRequest.md)[]

Inherited from Infront.PortfolioRiskCommonRequestOptions.onError

#### `Optional` onFinally

```ts
onFinally?(
    response: PortfolioRiskResponse<
        PriipsGetPortfoliosV1LoadHistoryResponse,
    >,
): void
| DataRequest
| readonly DataRequest[]
```

A callback called when the request is finished, either because data was received,
error occurred, or the request was aborted/unsubscribed.

##### Parameters

- response: PortfolioRiskResponse<PriipsGetPortfoliosV1LoadHistoryResponse>

##### Returns void | [DataRequest](./SDK.InfrontSDK.DataRequest.md) | readonly [DataRequest](./SDK.InfrontSDK.DataRequest.md)[]

Inherited from Infront.PortfolioRiskCommonRequestOptions.onFinally
