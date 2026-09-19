---
title: "PriipsGetPortfoliosV1ProductsOptions"
qualified_name: "SDK.InfrontSDK.PortfolioRisk.PriipsGetPortfoliosV1ProductsOptions"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.PortfolioRisk"
group: "PortfolioRisk"
nav_path: "SDK > InfrontSDK > Other > PortfolioRisk > PriipsGetPortfoliosV1ProductsOptions"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.PortfolioRisk.PriipsGetPortfoliosV1ProductsOptions.html"
defines: ["PriipsGetPortfoliosV1ProductsOptions"]
member_count: 4
members: ["requestTimestamp?", "onData?", "onError?", "onFinally?"]
member_groups:
  "Properties": ["requestTimestamp?"]
  "Methods": ["onData?", "onError?", "onFinally?"]
related_types: ["SDK.InfrontSDK.PortfolioRisk.PriipsGetPortfoliosV1ProductsResponse"]
reference_count: 3
references: ["SDK.InfrontSDK.PortfolioRisk.PriipsGetPortfoliosV1ProductsResponse", "SDK.InfrontSDK.DataRequest", "SDK.InfrontSDK.PortfolioRisk.priipsGetPortfoliosV1Products"]
---

# PriipsGetPortfoliosV1ProductsOptions

Request options for [priipsGetPortfoliosV1Products](./SDK.InfrontSDK.PortfolioRisk.priipsGetPortfoliosV1Products.md)

```ts
interface PriipsGetPortfoliosV1ProductsOptions {
    requestTimestamp?: string;
    onData?(
        data: readonly PriipsGetPortfoliosV1ProductsResponse[],
        response: PortfolioRiskResponse<PriipsGetPortfoliosV1ProductsResponse>,
    ): void | DataRequest | readonly DataRequest[];
    onError?(
        error: PortfolioRiskResponseError,
        response: PortfolioRiskResponse<PriipsGetPortfoliosV1ProductsResponse>,
    ): void | DataRequest | readonly DataRequest[];
    onFinally?(
        response: PortfolioRiskResponse<PriipsGetPortfoliosV1ProductsResponse>,
    ): void | DataRequest | readonly DataRequest[];
}
```

#### Hierarchy

- PortfolioRiskCommonRequestOptions<PriipsGetPortfoliosV1ProductsResponse>

  - PriipsGetPortfoliosV1ProductsOptions

### Properties

#### `Optional` ` Readonly`requestTimestamp

```ts
requestTimestamp?: string
```

The point in time where the universe of products has to be generated

### Methods

#### `Optional` onData

```ts
onData?(
    data: readonly PriipsGetPortfoliosV1ProductsResponse[],
    response: PortfolioRiskResponse<PriipsGetPortfoliosV1ProductsResponse>,
): void | DataRequest | readonly DataRequest[]
```

A callback called when a data request has completed succesfully.

##### Parameters

- data: readonly PriipsGetPortfoliosV1ProductsResponse[]
- response: PortfolioRiskResponse<PriipsGetPortfoliosV1ProductsResponse>

##### Returns void | [DataRequest](./SDK.InfrontSDK.DataRequest.md) | readonly [DataRequest](./SDK.InfrontSDK.DataRequest.md)[]

Inherited from Infront.PortfolioRiskCommonRequestOptions.onData

#### `Optional` onError

```ts
onError?(
    error: PortfolioRiskResponseError,
    response: PortfolioRiskResponse<PriipsGetPortfoliosV1ProductsResponse>,
): void | DataRequest | readonly DataRequest[]
```

A callback called when an error occurred trying to make the request.

##### Parameters

- error: PortfolioRiskResponseError
- response: PortfolioRiskResponse<PriipsGetPortfoliosV1ProductsResponse>

##### Returns void | [DataRequest](./SDK.InfrontSDK.DataRequest.md) | readonly [DataRequest](./SDK.InfrontSDK.DataRequest.md)[]

Inherited from Infront.PortfolioRiskCommonRequestOptions.onError

#### `Optional` onFinally

```ts
onFinally?(
    response: PortfolioRiskResponse<PriipsGetPortfoliosV1ProductsResponse>,
): void | DataRequest | readonly DataRequest[]
```

A callback called when the request is finished, either because data was received,
error occurred, or the request was aborted/unsubscribed.

##### Parameters

- response: PortfolioRiskResponse<PriipsGetPortfoliosV1ProductsResponse>

##### Returns void | [DataRequest](./SDK.InfrontSDK.DataRequest.md) | readonly [DataRequest](./SDK.InfrontSDK.DataRequest.md)[]

Inherited from Infront.PortfolioRiskCommonRequestOptions.onFinally
