---
title: "PriipsPostPortfoliosV1CloneOptions"
qualified_name: "SDK.InfrontSDK.PortfolioRisk.PriipsPostPortfoliosV1CloneOptions"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.PortfolioRisk"
group: "PortfolioRisk"
nav_path: "SDK > InfrontSDK > Other > PortfolioRisk > PriipsPostPortfoliosV1CloneOptions"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.PortfolioRisk.PriipsPostPortfoliosV1CloneOptions.html"
defines: ["PriipsPostPortfoliosV1CloneOptions"]
member_count: 5
members: ["modifier?", "portfolioId?", "onData?", "onError?", "onFinally?"]
member_groups:
  "Properties": ["modifier?", "portfolioId?"]
  "Methods": ["onData?", "onError?", "onFinally?"]
related_types: ["SDK.InfrontSDK.PortfolioRisk.PriipsPostPortfoliosV1CloneResponse"]
reference_count: 3
references: ["SDK.InfrontSDK.PortfolioRisk.PriipsPostPortfoliosV1CloneResponse", "SDK.InfrontSDK.DataRequest", "SDK.InfrontSDK.PortfolioRisk.priipsPostPortfoliosV1Clone"]
---

# PriipsPostPortfoliosV1CloneOptions

Request options for [priipsPostPortfoliosV1Clone](./SDK.InfrontSDK.PortfolioRisk.priipsPostPortfoliosV1Clone.md)

```ts
interface PriipsPostPortfoliosV1CloneOptions {
    modifier?: string;
    portfolioId?: string;
    onData?(
        data: readonly PriipsPostPortfoliosV1CloneResponse[],
        response: PortfolioRiskResponse<PriipsPostPortfoliosV1CloneResponse>,
    ): void | DataRequest | readonly DataRequest[];
    onError?(
        error: PortfolioRiskResponseError,
        response: PortfolioRiskResponse<PriipsPostPortfoliosV1CloneResponse>,
    ): void | DataRequest | readonly DataRequest[];
    onFinally?(
        response: PortfolioRiskResponse<PriipsPostPortfoliosV1CloneResponse>,
    ): void | DataRequest | readonly DataRequest[];
}
```

#### Hierarchy

- PortfolioRiskCommonRequestOptions<PriipsPostPortfoliosV1CloneResponse>

  - PriipsPostPortfoliosV1CloneOptions

### Properties

#### `Optional` ` Readonly`modifier

```ts
modifier?: string
```

The modifier to be added to the cloned portfolio's ID. Groups it hierarchically under the clientID
of this portfolio, allowing for independent modification and deletion.

#### `Optional` ` Readonly`portfolioId

```ts
portfolioId?: string
```

storeID of the portfolio to be cloned.

### Methods

#### `Optional` onData

```ts
onData?(
    data: readonly PriipsPostPortfoliosV1CloneResponse[],
    response: PortfolioRiskResponse<PriipsPostPortfoliosV1CloneResponse>,
): void | DataRequest | readonly DataRequest[]
```

A callback called when a data request has completed succesfully.

##### Parameters

- data: readonly PriipsPostPortfoliosV1CloneResponse[]
- response: PortfolioRiskResponse<PriipsPostPortfoliosV1CloneResponse>

##### Returns void | [DataRequest](./SDK.InfrontSDK.DataRequest.md) | readonly [DataRequest](./SDK.InfrontSDK.DataRequest.md)[]

Inherited from Infront.PortfolioRiskCommonRequestOptions.onData

#### `Optional` onError

```ts
onError?(
    error: PortfolioRiskResponseError,
    response: PortfolioRiskResponse<PriipsPostPortfoliosV1CloneResponse>,
): void | DataRequest | readonly DataRequest[]
```

A callback called when an error occurred trying to make the request.

##### Parameters

- error: PortfolioRiskResponseError
- response: PortfolioRiskResponse<PriipsPostPortfoliosV1CloneResponse>

##### Returns void | [DataRequest](./SDK.InfrontSDK.DataRequest.md) | readonly [DataRequest](./SDK.InfrontSDK.DataRequest.md)[]

Inherited from Infront.PortfolioRiskCommonRequestOptions.onError

#### `Optional` onFinally

```ts
onFinally?(
    response: PortfolioRiskResponse<PriipsPostPortfoliosV1CloneResponse>,
): void | DataRequest | readonly DataRequest[]
```

A callback called when the request is finished, either because data was received,
error occurred, or the request was aborted/unsubscribed.

##### Parameters

- response: PortfolioRiskResponse<PriipsPostPortfoliosV1CloneResponse>

##### Returns void | [DataRequest](./SDK.InfrontSDK.DataRequest.md) | readonly [DataRequest](./SDK.InfrontSDK.DataRequest.md)[]

Inherited from Infront.PortfolioRiskCommonRequestOptions.onFinally
