---
title: "PriipsPostRiskV1PositionRiskFiguresOptions"
qualified_name: "SDK.InfrontSDK.PortfolioRisk.PriipsPostRiskV1PositionRiskFiguresOptions"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.PortfolioRisk"
group: "PortfolioRisk"
nav_path: "SDK > InfrontSDK > Other > PortfolioRisk > PriipsPostRiskV1PositionRiskFiguresOptions"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.PortfolioRisk.PriipsPostRiskV1PositionRiskFiguresOptions.html"
defines: ["PriipsPostRiskV1PositionRiskFiguresOptions"]
member_count: 6
members: ["position", "requestedFigures?", "valuationDatetime", "onData?", "onError?", "onFinally?"]
member_groups:
  "Properties": ["position", "requestedFigures?", "valuationDatetime"]
  "Methods": ["onData?", "onError?", "onFinally?"]
related_types: ["SDK.InfrontSDK.PortfolioRisk.PriipsPostRiskV1PositionRiskFiguresResponse", "SDK.InfrontSDK.PortfolioRisk.PriipsDataServicesRiskvaluatorPositionRiskFiguresRequest"]
reference_count: 5
references: ["SDK.InfrontSDK.PortfolioRisk.PriipsDataServicesRiskvaluatorPortfolioPositionID", "SDK.InfrontSDK.PortfolioRisk.PriipsPostRiskV1PositionRiskFiguresResponse", "SDK.InfrontSDK.DataRequest", "SDK.InfrontSDK.PortfolioRisk.priipsPostRiskV1PositionRiskFigures", "SDK.InfrontSDK.PortfolioRisk.PriipsDataServicesRiskvaluatorPositionRiskFiguresRequest"]
---

# PriipsPostRiskV1PositionRiskFiguresOptions

Request options for [priipsPostRiskV1PositionRiskFigures](./SDK.InfrontSDK.PortfolioRisk.priipsPostRiskV1PositionRiskFigures.md)

```ts
interface PriipsPostRiskV1PositionRiskFiguresOptions {
    position: PriipsDataServicesRiskvaluatorPortfolioPositionID;
    requestedFigures?: readonly string[];
    valuationDatetime: string;
    onData?(
        data: readonly PriipsPostRiskV1PositionRiskFiguresResponse[],
        response: PortfolioRiskResponse<
            PriipsPostRiskV1PositionRiskFiguresResponse,
        >,
    ): void
    | DataRequest
    | readonly DataRequest[];
    onError?(
        error: PortfolioRiskResponseError,
        response: PortfolioRiskResponse<
            PriipsPostRiskV1PositionRiskFiguresResponse,
        >,
    ): void
    | DataRequest
    | readonly DataRequest[];
    onFinally?(
        response: PortfolioRiskResponse<
            PriipsPostRiskV1PositionRiskFiguresResponse,
        >,
    ): void
    | DataRequest
    | readonly DataRequest[];
}
```

#### Hierarchy ([View Summary](../type-hierarchy.md#SDK.InfrontSDK.PortfolioRisk.PriipsPostRiskV1PositionRiskFiguresOptions))

- PortfolioRiskCommonRequestOptions<PriipsPostRiskV1PositionRiskFiguresResponse>
- PriipsDataServicesRiskvaluatorPositionRiskFiguresRequest

  - PriipsPostRiskV1PositionRiskFiguresOptions

### Properties

#### `Readonly` position

```ts
position: PriipsDataServicesRiskvaluatorPortfolioPositionID
```

Position in a portfolio to obtain values for

Inherited from PriipsDataServicesRiskvaluatorPositionRiskFiguresRequest.position

#### `Optional` ` Readonly`requestedFigures

```ts
requestedFigures?: readonly string[]
```

the fields we are

Inherited from PriipsDataServicesRiskvaluatorPositionRiskFiguresRequest.requestedFigures

#### `Readonly` valuationDatetime

```ts
valuationDatetime: string
```

timestamp for the portfolio valuation

##### Remarks

Format: date-time

Inherited from PriipsDataServicesRiskvaluatorPositionRiskFiguresRequest.valuationDatetime

### Methods

#### `Optional` onData

```ts
onData?(
    data: readonly PriipsPostRiskV1PositionRiskFiguresResponse[],
    response: PortfolioRiskResponse<
        PriipsPostRiskV1PositionRiskFiguresResponse,
    >,
): void
| DataRequest
| readonly DataRequest[]
```

A callback called when a data request has completed succesfully.

##### Parameters

- data: readonly PriipsPostRiskV1PositionRiskFiguresResponse[]
- response: PortfolioRiskResponse<PriipsPostRiskV1PositionRiskFiguresResponse>

##### Returns void | [DataRequest](./SDK.InfrontSDK.DataRequest.md) | readonly [DataRequest](./SDK.InfrontSDK.DataRequest.md)[]

Inherited from Infront.PortfolioRiskCommonRequestOptions.onData

#### `Optional` onError

```ts
onError?(
    error: PortfolioRiskResponseError,
    response: PortfolioRiskResponse<
        PriipsPostRiskV1PositionRiskFiguresResponse,
    >,
): void
| DataRequest
| readonly DataRequest[]
```

A callback called when an error occurred trying to make the request.

##### Parameters

- error: PortfolioRiskResponseError
- response: PortfolioRiskResponse<PriipsPostRiskV1PositionRiskFiguresResponse>

##### Returns void | [DataRequest](./SDK.InfrontSDK.DataRequest.md) | readonly [DataRequest](./SDK.InfrontSDK.DataRequest.md)[]

Inherited from Infront.PortfolioRiskCommonRequestOptions.onError

#### `Optional` onFinally

```ts
onFinally?(
    response: PortfolioRiskResponse<
        PriipsPostRiskV1PositionRiskFiguresResponse,
    >,
): void
| DataRequest
| readonly DataRequest[]
```

A callback called when the request is finished, either because data was received,
error occurred, or the request was aborted/unsubscribed.

##### Parameters

- response: PortfolioRiskResponse<PriipsPostRiskV1PositionRiskFiguresResponse>

##### Returns void | [DataRequest](./SDK.InfrontSDK.DataRequest.md) | readonly [DataRequest](./SDK.InfrontSDK.DataRequest.md)[]

Inherited from Infront.PortfolioRiskCommonRequestOptions.onFinally
