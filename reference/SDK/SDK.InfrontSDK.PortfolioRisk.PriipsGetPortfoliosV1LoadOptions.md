---
title: "PriipsGetPortfoliosV1LoadOptions"
qualified_name: "SDK.InfrontSDK.PortfolioRisk.PriipsGetPortfoliosV1LoadOptions"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.PortfolioRisk"
group: "PortfolioRisk"
nav_path: "SDK > InfrontSDK > Other > PortfolioRisk > PriipsGetPortfoliosV1LoadOptions"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.PortfolioRisk.PriipsGetPortfoliosV1LoadOptions.html"
defines: ["PriipsGetPortfoliosV1LoadOptions"]
member_count: 4
members: ["portfolioId?", "onData?", "onError?", "onFinally?"]
member_groups:
  "Properties": ["portfolioId?"]
  "Methods": ["onData?", "onError?", "onFinally?"]
related_types: ["SDK.InfrontSDK.PortfolioRisk.PriipsGetPortfoliosV1LoadResponse"]
reference_count: 3
references: ["SDK.InfrontSDK.PortfolioRisk.PriipsGetPortfoliosV1LoadResponse", "SDK.InfrontSDK.DataRequest", "SDK.InfrontSDK.PortfolioRisk.priipsGetPortfoliosV1Load"]
---

# PriipsGetPortfoliosV1LoadOptions

Request options for [priipsGetPortfoliosV1Load](./SDK.InfrontSDK.PortfolioRisk.priipsGetPortfoliosV1Load.md)

```ts
interface PriipsGetPortfoliosV1LoadOptions {
    portfolioId?: string;
    onData?(
        data: readonly PriipsGetPortfoliosV1LoadResponse[],
        response: PortfolioRiskResponse<PriipsGetPortfoliosV1LoadResponse>,
    ): void | DataRequest | readonly DataRequest[];
    onError?(
        error: PortfolioRiskResponseError,
        response: PortfolioRiskResponse<PriipsGetPortfoliosV1LoadResponse>,
    ): void | DataRequest | readonly DataRequest[];
    onFinally?(
        response: PortfolioRiskResponse<PriipsGetPortfoliosV1LoadResponse>,
    ): void | DataRequest | readonly DataRequest[];
}
```

#### Hierarchy

- PortfolioRiskCommonRequestOptions<PriipsGetPortfoliosV1LoadResponse>

  - PriipsGetPortfoliosV1LoadOptions

### Properties

#### `Optional` ` Readonly`portfolioId

```ts
portfolioId?: string
```

Internal unique identifier of the newly stored portfolio.

### Methods

#### `Optional` onData

```ts
onData?(
    data: readonly PriipsGetPortfoliosV1LoadResponse[],
    response: PortfolioRiskResponse<PriipsGetPortfoliosV1LoadResponse>,
): void | DataRequest | readonly DataRequest[]
```

A callback called when a data request has completed succesfully.

##### Parameters

- data: readonly PriipsGetPortfoliosV1LoadResponse[]
- response: PortfolioRiskResponse<PriipsGetPortfoliosV1LoadResponse>

##### Returns void | [DataRequest](./SDK.InfrontSDK.DataRequest.md) | readonly [DataRequest](./SDK.InfrontSDK.DataRequest.md)[]

Inherited from Infront.PortfolioRiskCommonRequestOptions.onData

#### `Optional` onError

```ts
onError?(
    error: PortfolioRiskResponseError,
    response: PortfolioRiskResponse<PriipsGetPortfoliosV1LoadResponse>,
): void | DataRequest | readonly DataRequest[]
```

A callback called when an error occurred trying to make the request.

##### Parameters

- error: PortfolioRiskResponseError
- response: PortfolioRiskResponse<PriipsGetPortfoliosV1LoadResponse>

##### Returns void | [DataRequest](./SDK.InfrontSDK.DataRequest.md) | readonly [DataRequest](./SDK.InfrontSDK.DataRequest.md)[]

Inherited from Infront.PortfolioRiskCommonRequestOptions.onError

#### `Optional` onFinally

```ts
onFinally?(
    response: PortfolioRiskResponse<PriipsGetPortfoliosV1LoadResponse>,
): void | DataRequest | readonly DataRequest[]
```

A callback called when the request is finished, either because data was received,
error occurred, or the request was aborted/unsubscribed.

##### Parameters

- response: PortfolioRiskResponse<PriipsGetPortfoliosV1LoadResponse>

##### Returns void | [DataRequest](./SDK.InfrontSDK.DataRequest.md) | readonly [DataRequest](./SDK.InfrontSDK.DataRequest.md)[]

Inherited from Infront.PortfolioRiskCommonRequestOptions.onFinally
