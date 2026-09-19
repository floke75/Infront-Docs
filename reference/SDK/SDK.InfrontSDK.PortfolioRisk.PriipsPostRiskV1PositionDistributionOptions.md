---
title: "PriipsPostRiskV1PositionDistributionOptions"
qualified_name: "SDK.InfrontSDK.PortfolioRisk.PriipsPostRiskV1PositionDistributionOptions"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.PortfolioRisk"
group: "PortfolioRisk"
nav_path: "SDK > InfrontSDK > Other > PortfolioRisk > PriipsPostRiskV1PositionDistributionOptions"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.PortfolioRisk.PriipsPostRiskV1PositionDistributionOptions.html"
defines: ["PriipsPostRiskV1PositionDistributionOptions"]
member_count: 6
members: ["numberOfBins", "position", "valuationDatetime", "onData?", "onError?", "onFinally?"]
member_groups:
  "Properties": ["numberOfBins", "position", "valuationDatetime"]
  "Methods": ["onData?", "onError?", "onFinally?"]
related_types: ["SDK.InfrontSDK.PortfolioRisk.PriipsPostRiskV1PositionDistributionResponse", "SDK.InfrontSDK.PortfolioRisk.PriipsDataServicesRiskvaluatorPositionDistributionRequest"]
reference_count: 5
references: ["SDK.InfrontSDK.PortfolioRisk.PriipsDataServicesRiskvaluatorPortfolioPositionID", "SDK.InfrontSDK.PortfolioRisk.PriipsPostRiskV1PositionDistributionResponse", "SDK.InfrontSDK.DataRequest", "SDK.InfrontSDK.PortfolioRisk.priipsPostRiskV1PositionDistribution", "SDK.InfrontSDK.PortfolioRisk.PriipsDataServicesRiskvaluatorPositionDistributionRequest"]
---

# PriipsPostRiskV1PositionDistributionOptions

Request options for [priipsPostRiskV1PositionDistribution](./SDK.InfrontSDK.PortfolioRisk.priipsPostRiskV1PositionDistribution.md)

```ts
interface PriipsPostRiskV1PositionDistributionOptions {
    numberOfBins: number;
    position: PriipsDataServicesRiskvaluatorPortfolioPositionID;
    valuationDatetime: string;
    onData?(
        data: readonly PriipsPostRiskV1PositionDistributionResponse[],
        response: PortfolioRiskResponse<
            PriipsPostRiskV1PositionDistributionResponse,
        >,
    ): void
    | DataRequest
    | readonly DataRequest[];
    onError?(
        error: PortfolioRiskResponseError,
        response: PortfolioRiskResponse<
            PriipsPostRiskV1PositionDistributionResponse,
        >,
    ): void
    | DataRequest
    | readonly DataRequest[];
    onFinally?(
        response: PortfolioRiskResponse<
            PriipsPostRiskV1PositionDistributionResponse,
        >,
    ): void
    | DataRequest
    | readonly DataRequest[];
}
```

#### Hierarchy ([View Summary](../type-hierarchy.md#SDK.InfrontSDK.PortfolioRisk.PriipsPostRiskV1PositionDistributionOptions))

- PortfolioRiskCommonRequestOptions<PriipsPostRiskV1PositionDistributionResponse>
- PriipsDataServicesRiskvaluatorPositionDistributionRequest

  - PriipsPostRiskV1PositionDistributionOptions

### Properties

#### `Readonly` numberOfBins

```ts
numberOfBins: number
```

The number of bins to be generated, if zero the distribution the best number of bins
for the visualization will be automatically determined

##### Remarks

Format: int32

Inherited from PriipsDataServicesRiskvaluatorPositionDistributionRequest.numberOfBins

#### `Readonly` position

```ts
position: PriipsDataServicesRiskvaluatorPortfolioPositionID
```

Position in a portfolio to obtain values for

Inherited from PriipsDataServicesRiskvaluatorPositionDistributionRequest.position

#### `Readonly` valuationDatetime

```ts
valuationDatetime: string
```

timestamp for the position distribution valuation

##### Remarks

Format: date-time

Inherited from PriipsDataServicesRiskvaluatorPositionDistributionRequest.valuationDatetime

### Methods

#### `Optional` onData

```ts
onData?(
    data: readonly PriipsPostRiskV1PositionDistributionResponse[],
    response: PortfolioRiskResponse<
        PriipsPostRiskV1PositionDistributionResponse,
    >,
): void
| DataRequest
| readonly DataRequest[]
```

A callback called when a data request has completed succesfully.

##### Parameters

- data: readonly PriipsPostRiskV1PositionDistributionResponse[]
- response: PortfolioRiskResponse<PriipsPostRiskV1PositionDistributionResponse>

##### Returns void | [DataRequest](./SDK.InfrontSDK.DataRequest.md) | readonly [DataRequest](./SDK.InfrontSDK.DataRequest.md)[]

Inherited from Infront.PortfolioRiskCommonRequestOptions.onData

#### `Optional` onError

```ts
onError?(
    error: PortfolioRiskResponseError,
    response: PortfolioRiskResponse<
        PriipsPostRiskV1PositionDistributionResponse,
    >,
): void
| DataRequest
| readonly DataRequest[]
```

A callback called when an error occurred trying to make the request.

##### Parameters

- error: PortfolioRiskResponseError
- response: PortfolioRiskResponse<PriipsPostRiskV1PositionDistributionResponse>

##### Returns void | [DataRequest](./SDK.InfrontSDK.DataRequest.md) | readonly [DataRequest](./SDK.InfrontSDK.DataRequest.md)[]

Inherited from Infront.PortfolioRiskCommonRequestOptions.onError

#### `Optional` onFinally

```ts
onFinally?(
    response: PortfolioRiskResponse<
        PriipsPostRiskV1PositionDistributionResponse,
    >,
): void
| DataRequest
| readonly DataRequest[]
```

A callback called when the request is finished, either because data was received,
error occurred, or the request was aborted/unsubscribed.

##### Parameters

- response: PortfolioRiskResponse<PriipsPostRiskV1PositionDistributionResponse>

##### Returns void | [DataRequest](./SDK.InfrontSDK.DataRequest.md) | readonly [DataRequest](./SDK.InfrontSDK.DataRequest.md)[]

Inherited from Infront.PortfolioRiskCommonRequestOptions.onFinally
