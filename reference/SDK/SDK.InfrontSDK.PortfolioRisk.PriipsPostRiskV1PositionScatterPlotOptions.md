---
title: "PriipsPostRiskV1PositionScatterPlotOptions"
qualified_name: "SDK.InfrontSDK.PortfolioRisk.PriipsPostRiskV1PositionScatterPlotOptions"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.PortfolioRisk"
group: "PortfolioRisk"
nav_path: "SDK > InfrontSDK > Other > PortfolioRisk > PriipsPostRiskV1PositionScatterPlotOptions"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.PortfolioRisk.PriipsPostRiskV1PositionScatterPlotOptions.html"
defines: ["PriipsPostRiskV1PositionScatterPlotOptions"]
member_count: 6
members: ["numberOfPoints", "position", "valuationDatetime", "onData?", "onError?", "onFinally?"]
member_groups:
  "Properties": ["numberOfPoints", "position", "valuationDatetime"]
  "Methods": ["onData?", "onError?", "onFinally?"]
related_types: ["SDK.InfrontSDK.PortfolioRisk.PriipsPostRiskV1PositionScatterPlotResponse", "SDK.InfrontSDK.PortfolioRisk.PriipsDataServicesRiskvaluatorPositionScatterPlotRequest"]
reference_count: 5
references: ["SDK.InfrontSDK.PortfolioRisk.PriipsDataServicesRiskvaluatorPortfolioPositionID", "SDK.InfrontSDK.PortfolioRisk.PriipsPostRiskV1PositionScatterPlotResponse", "SDK.InfrontSDK.DataRequest", "SDK.InfrontSDK.PortfolioRisk.priipsPostRiskV1PositionScatterPlot", "SDK.InfrontSDK.PortfolioRisk.PriipsDataServicesRiskvaluatorPositionScatterPlotRequest"]
---

# PriipsPostRiskV1PositionScatterPlotOptions

Request options for [priipsPostRiskV1PositionScatterPlot](./SDK.InfrontSDK.PortfolioRisk.priipsPostRiskV1PositionScatterPlot.md)

```ts
interface PriipsPostRiskV1PositionScatterPlotOptions {
    numberOfPoints: number;
    position: PriipsDataServicesRiskvaluatorPortfolioPositionID;
    valuationDatetime: string;
    onData?(
        data: readonly PriipsPostRiskV1PositionScatterPlotResponse[],
        response: PortfolioRiskResponse<
            PriipsPostRiskV1PositionScatterPlotResponse,
        >,
    ): void
    | DataRequest
    | readonly DataRequest[];
    onError?(
        error: PortfolioRiskResponseError,
        response: PortfolioRiskResponse<
            PriipsPostRiskV1PositionScatterPlotResponse,
        >,
    ): void
    | DataRequest
    | readonly DataRequest[];
    onFinally?(
        response: PortfolioRiskResponse<
            PriipsPostRiskV1PositionScatterPlotResponse,
        >,
    ): void
    | DataRequest
    | readonly DataRequest[];
}
```

#### Hierarchy ([View Summary](../type-hierarchy.md#SDK.InfrontSDK.PortfolioRisk.PriipsPostRiskV1PositionScatterPlotOptions))

- PortfolioRiskCommonRequestOptions<PriipsPostRiskV1PositionScatterPlotResponse>
- PriipsDataServicesRiskvaluatorPositionScatterPlotRequest

  - PriipsPostRiskV1PositionScatterPlotOptions

### Properties

#### `Readonly` numberOfPoints

```ts
numberOfPoints: number
```

If less than the number of simulated scenarios, a downsampling will be applied

##### Remarks

Format: int32

Inherited from PriipsDataServicesRiskvaluatorPositionScatterPlotRequest.numberOfPoints

#### `Readonly` position

```ts
position: PriipsDataServicesRiskvaluatorPortfolioPositionID
```

Position on the x-axis to be shown together with the portfolio value

Inherited from PriipsDataServicesRiskvaluatorPositionScatterPlotRequest.position

#### `Readonly` valuationDatetime

```ts
valuationDatetime: string
```

timestamp for the position scatter plot valuation

##### Remarks

Format: date-time

Inherited from PriipsDataServicesRiskvaluatorPositionScatterPlotRequest.valuationDatetime

### Methods

#### `Optional` onData

```ts
onData?(
    data: readonly PriipsPostRiskV1PositionScatterPlotResponse[],
    response: PortfolioRiskResponse<
        PriipsPostRiskV1PositionScatterPlotResponse,
    >,
): void
| DataRequest
| readonly DataRequest[]
```

A callback called when a data request has completed succesfully.

##### Parameters

- data: readonly PriipsPostRiskV1PositionScatterPlotResponse[]
- response: PortfolioRiskResponse<PriipsPostRiskV1PositionScatterPlotResponse>

##### Returns void | [DataRequest](./SDK.InfrontSDK.DataRequest.md) | readonly [DataRequest](./SDK.InfrontSDK.DataRequest.md)[]

Inherited from Infront.PortfolioRiskCommonRequestOptions.onData

#### `Optional` onError

```ts
onError?(
    error: PortfolioRiskResponseError,
    response: PortfolioRiskResponse<
        PriipsPostRiskV1PositionScatterPlotResponse,
    >,
): void
| DataRequest
| readonly DataRequest[]
```

A callback called when an error occurred trying to make the request.

##### Parameters

- error: PortfolioRiskResponseError
- response: PortfolioRiskResponse<PriipsPostRiskV1PositionScatterPlotResponse>

##### Returns void | [DataRequest](./SDK.InfrontSDK.DataRequest.md) | readonly [DataRequest](./SDK.InfrontSDK.DataRequest.md)[]

Inherited from Infront.PortfolioRiskCommonRequestOptions.onError

#### `Optional` onFinally

```ts
onFinally?(
    response: PortfolioRiskResponse<
        PriipsPostRiskV1PositionScatterPlotResponse,
    >,
): void
| DataRequest
| readonly DataRequest[]
```

A callback called when the request is finished, either because data was received,
error occurred, or the request was aborted/unsubscribed.

##### Parameters

- response: PortfolioRiskResponse<PriipsPostRiskV1PositionScatterPlotResponse>

##### Returns void | [DataRequest](./SDK.InfrontSDK.DataRequest.md) | readonly [DataRequest](./SDK.InfrontSDK.DataRequest.md)[]

Inherited from Infront.PortfolioRiskCommonRequestOptions.onFinally
