---
title: "PriipsPostPortfoliosV1StoreOptions"
qualified_name: "SDK.InfrontSDK.PortfolioRisk.PriipsPostPortfoliosV1StoreOptions"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.PortfolioRisk"
group: "PortfolioRisk"
nav_path: "SDK > InfrontSDK > Other > PortfolioRisk > PriipsPostPortfoliosV1StoreOptions"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.PortfolioRisk.PriipsPostPortfoliosV1StoreOptions.html"
defines: ["PriipsPostPortfoliosV1StoreOptions"]
member_count: 4
members: ["modifier?", "onData?", "onError?", "onFinally?"]
member_groups:
  "Properties": ["modifier?"]
  "Methods": ["onData?", "onError?", "onFinally?"]
related_types: ["SDK.InfrontSDK.PortfolioRisk.PriipsPostPortfoliosV1StoreResponse"]
reference_count: 3
references: ["SDK.InfrontSDK.PortfolioRisk.PriipsPostPortfoliosV1StoreResponse", "SDK.InfrontSDK.DataRequest", "SDK.InfrontSDK.PortfolioRisk.priipsPostPortfoliosV1Store"]
---

# PriipsPostPortfoliosV1StoreOptions

Request options for [priipsPostPortfoliosV1Store](./SDK.InfrontSDK.PortfolioRisk.priipsPostPortfoliosV1Store.md)

```ts
interface PriipsPostPortfoliosV1StoreOptions {
    modifier?: string;
    onData?(
        data: readonly PriipsPostPortfoliosV1StoreResponse[],
        response: PortfolioRiskResponse<PriipsPostPortfoliosV1StoreResponse>,
    ): void | DataRequest | readonly DataRequest[];
    onError?(
        error: PortfolioRiskResponseError,
        response: PortfolioRiskResponse<PriipsPostPortfoliosV1StoreResponse>,
    ): void | DataRequest | readonly DataRequest[];
    onFinally?(
        response: PortfolioRiskResponse<PriipsPostPortfoliosV1StoreResponse>,
    ): void | DataRequest | readonly DataRequest[];
}
```

#### Hierarchy

- PortfolioRiskCommonRequestOptions<PriipsPostPortfoliosV1StoreResponse>

  - PriipsPostPortfoliosV1StoreOptions

### Properties

#### `Optional` ` Readonly`modifier

```ts
modifier?: string
```

Store under the given named modifier, to update a cloned portfolio.

### Methods

#### `Optional` onData

```ts
onData?(
    data: readonly PriipsPostPortfoliosV1StoreResponse[],
    response: PortfolioRiskResponse<PriipsPostPortfoliosV1StoreResponse>,
): void | DataRequest | readonly DataRequest[]
```

A callback called when a data request has completed succesfully.

##### Parameters

- data: readonly PriipsPostPortfoliosV1StoreResponse[]
- response: PortfolioRiskResponse<PriipsPostPortfoliosV1StoreResponse>

##### Returns void | [DataRequest](./SDK.InfrontSDK.DataRequest.md) | readonly [DataRequest](./SDK.InfrontSDK.DataRequest.md)[]

Inherited from Infront.PortfolioRiskCommonRequestOptions.onData

#### `Optional` onError

```ts
onError?(
    error: PortfolioRiskResponseError,
    response: PortfolioRiskResponse<PriipsPostPortfoliosV1StoreResponse>,
): void | DataRequest | readonly DataRequest[]
```

A callback called when an error occurred trying to make the request.

##### Parameters

- error: PortfolioRiskResponseError
- response: PortfolioRiskResponse<PriipsPostPortfoliosV1StoreResponse>

##### Returns void | [DataRequest](./SDK.InfrontSDK.DataRequest.md) | readonly [DataRequest](./SDK.InfrontSDK.DataRequest.md)[]

Inherited from Infront.PortfolioRiskCommonRequestOptions.onError

#### `Optional` onFinally

```ts
onFinally?(
    response: PortfolioRiskResponse<PriipsPostPortfoliosV1StoreResponse>,
): void | DataRequest | readonly DataRequest[]
```

A callback called when the request is finished, either because data was received,
error occurred, or the request was aborted/unsubscribed.

##### Parameters

- response: PortfolioRiskResponse<PriipsPostPortfoliosV1StoreResponse>

##### Returns void | [DataRequest](./SDK.InfrontSDK.DataRequest.md) | readonly [DataRequest](./SDK.InfrontSDK.DataRequest.md)[]

Inherited from Infront.PortfolioRiskCommonRequestOptions.onFinally
