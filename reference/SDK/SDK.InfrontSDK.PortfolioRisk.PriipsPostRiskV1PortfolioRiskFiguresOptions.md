---
title: "PriipsPostRiskV1PortfolioRiskFiguresOptions"
qualified_name: "SDK.InfrontSDK.PortfolioRisk.PriipsPostRiskV1PortfolioRiskFiguresOptions"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.PortfolioRisk"
group: "PortfolioRisk"
nav_path: "SDK > InfrontSDK > Other > PortfolioRisk > PriipsPostRiskV1PortfolioRiskFiguresOptions"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.PortfolioRisk.PriipsPostRiskV1PortfolioRiskFiguresOptions.html"
defines: ["PriipsPostRiskV1PortfolioRiskFiguresOptions"]
member_count: 5
members: ["portfolioId", "valuationDatetime", "onData?", "onError?", "onFinally?"]
member_groups:
  "Properties": ["portfolioId", "valuationDatetime"]
  "Methods": ["onData?", "onError?", "onFinally?"]
related_types: ["SDK.InfrontSDK.PortfolioRisk.PriipsPostRiskV1PortfolioRiskFiguresResponse", "SDK.InfrontSDK.PortfolioRisk.PriipsDataServicesRiskvaluatorPortfolioRiskFiguresRequest"]
reference_count: 4
references: ["SDK.InfrontSDK.PortfolioRisk.PriipsPostRiskV1PortfolioRiskFiguresResponse", "SDK.InfrontSDK.DataRequest", "SDK.InfrontSDK.PortfolioRisk.priipsPostRiskV1PortfolioRiskFigures", "SDK.InfrontSDK.PortfolioRisk.PriipsDataServicesRiskvaluatorPortfolioRiskFiguresRequest"]
---

# PriipsPostRiskV1PortfolioRiskFiguresOptions

Request options for [priipsPostRiskV1PortfolioRiskFigures](./SDK.InfrontSDK.PortfolioRisk.priipsPostRiskV1PortfolioRiskFigures.md)

```ts
interface PriipsPostRiskV1PortfolioRiskFiguresOptions {
    portfolioId: string;
    valuationDatetime: string;
    onData?(
        data: readonly PriipsPostRiskV1PortfolioRiskFiguresResponse[],
        response: PortfolioRiskResponse<
            PriipsPostRiskV1PortfolioRiskFiguresResponse,
        >,
    ): void
    | DataRequest
    | readonly DataRequest[];
    onError?(
        error: PortfolioRiskResponseError,
        response: PortfolioRiskResponse<
            PriipsPostRiskV1PortfolioRiskFiguresResponse,
        >,
    ): void
    | DataRequest
    | readonly DataRequest[];
    onFinally?(
        response: PortfolioRiskResponse<
            PriipsPostRiskV1PortfolioRiskFiguresResponse,
        >,
    ): void
    | DataRequest
    | readonly DataRequest[];
}
```

#### Hierarchy ([View Summary](../type-hierarchy.md#SDK.InfrontSDK.PortfolioRisk.PriipsPostRiskV1PortfolioRiskFiguresOptions))

- PortfolioRiskCommonRequestOptions<PriipsPostRiskV1PortfolioRiskFiguresResponse>
- PriipsDataServicesRiskvaluatorPortfolioRiskFiguresRequest

  - PriipsPostRiskV1PortfolioRiskFiguresOptions

### Properties

#### `Readonly` portfolioId

```ts
portfolioId: string
```

Identifier of the portfolio

Inherited from PriipsDataServicesRiskvaluatorPortfolioRiskFiguresRequest.portfolioId

#### `Readonly` valuationDatetime

```ts
valuationDatetime: string
```

timestamp for the portfolio valuation

##### Remarks

Format: date-time

Inherited from PriipsDataServicesRiskvaluatorPortfolioRiskFiguresRequest.valuationDatetime

### Methods

#### `Optional` onData

```ts
onData?(
    data: readonly PriipsPostRiskV1PortfolioRiskFiguresResponse[],
    response: PortfolioRiskResponse<
        PriipsPostRiskV1PortfolioRiskFiguresResponse,
    >,
): void
| DataRequest
| readonly DataRequest[]
```

A callback called when a data request has completed succesfully.

##### Parameters

- data: readonly PriipsPostRiskV1PortfolioRiskFiguresResponse[]
- response: PortfolioRiskResponse<PriipsPostRiskV1PortfolioRiskFiguresResponse>

##### Returns void | [DataRequest](./SDK.InfrontSDK.DataRequest.md) | readonly [DataRequest](./SDK.InfrontSDK.DataRequest.md)[]

Inherited from Infront.PortfolioRiskCommonRequestOptions.onData

#### `Optional` onError

```ts
onError?(
    error: PortfolioRiskResponseError,
    response: PortfolioRiskResponse<
        PriipsPostRiskV1PortfolioRiskFiguresResponse,
    >,
): void
| DataRequest
| readonly DataRequest[]
```

A callback called when an error occurred trying to make the request.

##### Parameters

- error: PortfolioRiskResponseError
- response: PortfolioRiskResponse<PriipsPostRiskV1PortfolioRiskFiguresResponse>

##### Returns void | [DataRequest](./SDK.InfrontSDK.DataRequest.md) | readonly [DataRequest](./SDK.InfrontSDK.DataRequest.md)[]

Inherited from Infront.PortfolioRiskCommonRequestOptions.onError

#### `Optional` onFinally

```ts
onFinally?(
    response: PortfolioRiskResponse<
        PriipsPostRiskV1PortfolioRiskFiguresResponse,
    >,
): void
| DataRequest
| readonly DataRequest[]
```

A callback called when the request is finished, either because data was received,
error occurred, or the request was aborted/unsubscribed.

##### Parameters

- response: PortfolioRiskResponse<PriipsPostRiskV1PortfolioRiskFiguresResponse>

##### Returns void | [DataRequest](./SDK.InfrontSDK.DataRequest.md) | readonly [DataRequest](./SDK.InfrontSDK.DataRequest.md)[]

Inherited from Infront.PortfolioRiskCommonRequestOptions.onFinally
