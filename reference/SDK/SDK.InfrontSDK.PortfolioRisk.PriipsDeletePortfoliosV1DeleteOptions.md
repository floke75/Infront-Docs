---
title: "PriipsDeletePortfoliosV1DeleteOptions"
qualified_name: "SDK.InfrontSDK.PortfolioRisk.PriipsDeletePortfoliosV1DeleteOptions"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.PortfolioRisk"
group: "PortfolioRisk"
nav_path: "SDK > InfrontSDK > Other > PortfolioRisk > PriipsDeletePortfoliosV1DeleteOptions"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.PortfolioRisk.PriipsDeletePortfoliosV1DeleteOptions.html"
defines: ["PriipsDeletePortfoliosV1DeleteOptions"]
member_count: 6
members: ["modifier?", "portfolioClientId?", "source?", "onData?", "onError?", "onFinally?"]
member_groups:
  "Properties": ["modifier?", "portfolioClientId?", "source?"]
  "Methods": ["onData?", "onError?", "onFinally?"]
related_types: ["SDK.InfrontSDK.PortfolioRisk.PriipsDeletePortfoliosV1DeleteResponse"]
reference_count: 3
references: ["SDK.InfrontSDK.PortfolioRisk.PriipsDeletePortfoliosV1DeleteResponse", "SDK.InfrontSDK.DataRequest", "SDK.InfrontSDK.PortfolioRisk.priipsDeletePortfoliosV1Delete"]
---

# PriipsDeletePortfoliosV1DeleteOptions

Request options for [priipsDeletePortfoliosV1Delete](./SDK.InfrontSDK.PortfolioRisk.priipsDeletePortfoliosV1Delete.md)

```ts
interface PriipsDeletePortfoliosV1DeleteOptions {
    modifier?: string;
    portfolioClientId?: string;
    source?: string;
    onData?(
        data: readonly PriipsDeletePortfoliosV1DeleteResponse[],
        response: PortfolioRiskResponse<PriipsDeletePortfoliosV1DeleteResponse>,
    ): void | DataRequest | readonly DataRequest[];
    onError?(
        error: PortfolioRiskResponseError,
        response: PortfolioRiskResponse<PriipsDeletePortfoliosV1DeleteResponse>,
    ): void | DataRequest | readonly DataRequest[];
    onFinally?(
        response: PortfolioRiskResponse<PriipsDeletePortfoliosV1DeleteResponse>,
    ): void | DataRequest | readonly DataRequest[];
}
```

#### Hierarchy

- PortfolioRiskCommonRequestOptions<PriipsDeletePortfoliosV1DeleteResponse>

  - PriipsDeletePortfoliosV1DeleteOptions

### Properties

#### `Optional` ` Readonly`modifier

```ts
modifier?: string
```

The modifier to be added to the portfolio's ID. If set, only this sub-portfolio will
be deleted.

#### `Optional` ` Readonly`portfolioClientId

```ts
portfolioClientId?: string
```

The base portfolio clientID.
(I. e. what was initially sent in [req.portfolio.portfolio.name](http://req.portfolio.portfolio.name) when first calling Store())

#### `Optional` ` Readonly`source

```ts
source?: string
```

The source namespace under which this portfolio is going to be deleted

### Methods

#### `Optional` onData

```ts
onData?(
    data: readonly PriipsDeletePortfoliosV1DeleteResponse[],
    response: PortfolioRiskResponse<PriipsDeletePortfoliosV1DeleteResponse>,
): void | DataRequest | readonly DataRequest[]
```

A callback called when a data request has completed succesfully.

##### Parameters

- data: readonly PriipsDeletePortfoliosV1DeleteResponse[]
- response: PortfolioRiskResponse<PriipsDeletePortfoliosV1DeleteResponse>

##### Returns void | [DataRequest](./SDK.InfrontSDK.DataRequest.md) | readonly [DataRequest](./SDK.InfrontSDK.DataRequest.md)[]

Inherited from Infront.PortfolioRiskCommonRequestOptions.onData

#### `Optional` onError

```ts
onError?(
    error: PortfolioRiskResponseError,
    response: PortfolioRiskResponse<PriipsDeletePortfoliosV1DeleteResponse>,
): void | DataRequest | readonly DataRequest[]
```

A callback called when an error occurred trying to make the request.

##### Parameters

- error: PortfolioRiskResponseError
- response: PortfolioRiskResponse<PriipsDeletePortfoliosV1DeleteResponse>

##### Returns void | [DataRequest](./SDK.InfrontSDK.DataRequest.md) | readonly [DataRequest](./SDK.InfrontSDK.DataRequest.md)[]

Inherited from Infront.PortfolioRiskCommonRequestOptions.onError

#### `Optional` onFinally

```ts
onFinally?(
    response: PortfolioRiskResponse<PriipsDeletePortfoliosV1DeleteResponse>,
): void | DataRequest | readonly DataRequest[]
```

A callback called when the request is finished, either because data was received,
error occurred, or the request was aborted/unsubscribed.

##### Parameters

- response: PortfolioRiskResponse<PriipsDeletePortfoliosV1DeleteResponse>

##### Returns void | [DataRequest](./SDK.InfrontSDK.DataRequest.md) | readonly [DataRequest](./SDK.InfrontSDK.DataRequest.md)[]

Inherited from Infront.PortfolioRiskCommonRequestOptions.onFinally
