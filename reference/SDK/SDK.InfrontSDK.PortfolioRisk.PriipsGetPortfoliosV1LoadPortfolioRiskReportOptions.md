---
title: "PriipsGetPortfoliosV1LoadPortfolioRiskReportOptions"
qualified_name: "SDK.InfrontSDK.PortfolioRisk.PriipsGetPortfoliosV1LoadPortfolioRiskReportOptions"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.PortfolioRisk"
group: "PortfolioRisk"
nav_path: "SDK > InfrontSDK > Other > PortfolioRisk > PriipsGetPortfoliosV1LoadPortfolioRiskReportOptions"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.PortfolioRisk.PriipsGetPortfoliosV1LoadPortfolioRiskReportOptions.html"
defines: ["PriipsGetPortfoliosV1LoadPortfolioRiskReportOptions"]
member_count: 5
members: ["portfolioId?", "valuationDatetime?", "onData?", "onError?", "onFinally?"]
member_groups:
  "Properties": ["portfolioId?", "valuationDatetime?"]
  "Methods": ["onData?", "onError?", "onFinally?"]
related_types: ["SDK.InfrontSDK.PortfolioRisk.PriipsGetPortfoliosV1LoadPortfolioRiskReportResponse"]
reference_count: 3
references: ["SDK.InfrontSDK.PortfolioRisk.PriipsGetPortfoliosV1LoadPortfolioRiskReportResponse", "SDK.InfrontSDK.DataRequest", "SDK.InfrontSDK.PortfolioRisk.priipsGetPortfoliosV1LoadPortfolioRiskReport"]
---

# PriipsGetPortfoliosV1LoadPortfolioRiskReportOptions

Request options for [priipsGetPortfoliosV1LoadPortfolioRiskReport](./SDK.InfrontSDK.PortfolioRisk.priipsGetPortfoliosV1LoadPortfolioRiskReport.md)

```ts
interface PriipsGetPortfoliosV1LoadPortfolioRiskReportOptions {
    portfolioId?: string;
    valuationDatetime?: string;
    onData?(
        data: readonly PriipsGetPortfoliosV1LoadPortfolioRiskReportResponse[],
        response: PortfolioRiskResponse<
            PriipsGetPortfoliosV1LoadPortfolioRiskReportResponse,
        >,
    ): void
    | DataRequest
    | readonly DataRequest[];
    onError?(
        error: PortfolioRiskResponseError,
        response: PortfolioRiskResponse<
            PriipsGetPortfoliosV1LoadPortfolioRiskReportResponse,
        >,
    ): void
    | DataRequest
    | readonly DataRequest[];
    onFinally?(
        response: PortfolioRiskResponse<
            PriipsGetPortfoliosV1LoadPortfolioRiskReportResponse,
        >,
    ): void
    | DataRequest
    | readonly DataRequest[];
}
```

#### Hierarchy

- PortfolioRiskCommonRequestOptions<    PriipsGetPortfoliosV1LoadPortfolioRiskReportResponse,>

  - PriipsGetPortfoliosV1LoadPortfolioRiskReportOptions

### Properties

#### `Optional` ` Readonly`portfolioId

```ts
portfolioId?: string
```

Internal unique identifier of the portfolio

#### `Optional` ` Readonly`valuationDatetime

```ts
valuationDatetime?: string
```

timestamp for the portfolio report valuation

### Methods

#### `Optional` onData

```ts
onData?(
    data: readonly PriipsGetPortfoliosV1LoadPortfolioRiskReportResponse[],
    response: PortfolioRiskResponse<
        PriipsGetPortfoliosV1LoadPortfolioRiskReportResponse,
    >,
): void
| DataRequest
| readonly DataRequest[]
```

A callback called when a data request has completed succesfully.

##### Parameters

- data: readonly PriipsGetPortfoliosV1LoadPortfolioRiskReportResponse[]
- response: PortfolioRiskResponse<PriipsGetPortfoliosV1LoadPortfolioRiskReportResponse>

##### Returns void | [DataRequest](./SDK.InfrontSDK.DataRequest.md) | readonly [DataRequest](./SDK.InfrontSDK.DataRequest.md)[]

Inherited from Infront.PortfolioRiskCommonRequestOptions.onData

#### `Optional` onError

```ts
onError?(
    error: PortfolioRiskResponseError,
    response: PortfolioRiskResponse<
        PriipsGetPortfoliosV1LoadPortfolioRiskReportResponse,
    >,
): void
| DataRequest
| readonly DataRequest[]
```

A callback called when an error occurred trying to make the request.

##### Parameters

- error: PortfolioRiskResponseError
- response: PortfolioRiskResponse<PriipsGetPortfoliosV1LoadPortfolioRiskReportResponse>

##### Returns void | [DataRequest](./SDK.InfrontSDK.DataRequest.md) | readonly [DataRequest](./SDK.InfrontSDK.DataRequest.md)[]

Inherited from Infront.PortfolioRiskCommonRequestOptions.onError

#### `Optional` onFinally

```ts
onFinally?(
    response: PortfolioRiskResponse<
        PriipsGetPortfoliosV1LoadPortfolioRiskReportResponse,
    >,
): void
| DataRequest
| readonly DataRequest[]
```

A callback called when the request is finished, either because data was received,
error occurred, or the request was aborted/unsubscribed.

##### Parameters

- response: PortfolioRiskResponse<PriipsGetPortfoliosV1LoadPortfolioRiskReportResponse>

##### Returns void | [DataRequest](./SDK.InfrontSDK.DataRequest.md) | readonly [DataRequest](./SDK.InfrontSDK.DataRequest.md)[]

Inherited from Infront.PortfolioRiskCommonRequestOptions.onFinally
