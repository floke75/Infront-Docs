---
title: "PriipsPostRiskV1RiskReturnContributionsOptions"
qualified_name: "SDK.InfrontSDK.PortfolioRisk.PriipsPostRiskV1RiskReturnContributionsOptions"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.PortfolioRisk"
group: "PortfolioRisk"
nav_path: "SDK > InfrontSDK > Other > PortfolioRisk > PriipsPostRiskV1RiskReturnContributionsOptions"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.PortfolioRisk.PriipsPostRiskV1RiskReturnContributionsOptions.html"
defines: ["PriipsPostRiskV1RiskReturnContributionsOptions"]
member_count: 5
members: ["portfolioId", "valuationDatetime", "onData?", "onError?", "onFinally?"]
member_groups:
  "Properties": ["portfolioId", "valuationDatetime"]
  "Methods": ["onData?", "onError?", "onFinally?"]
related_types: ["SDK.InfrontSDK.PortfolioRisk.PriipsPostRiskV1RiskReturnContributionsResponse", "SDK.InfrontSDK.PortfolioRisk.PriipsDataServicesRiskvaluatorRiskReturnContributionsRequest"]
reference_count: 4
references: ["SDK.InfrontSDK.PortfolioRisk.PriipsPostRiskV1RiskReturnContributionsResponse", "SDK.InfrontSDK.DataRequest", "SDK.InfrontSDK.PortfolioRisk.priipsPostRiskV1RiskReturnContributions", "SDK.InfrontSDK.PortfolioRisk.PriipsDataServicesRiskvaluatorRiskReturnContributionsRequest"]
---

# PriipsPostRiskV1RiskReturnContributionsOptions

Request options for [priipsPostRiskV1RiskReturnContributions](./SDK.InfrontSDK.PortfolioRisk.priipsPostRiskV1RiskReturnContributions.md)

```ts
interface PriipsPostRiskV1RiskReturnContributionsOptions {
    portfolioId: string;
    valuationDatetime: string;
    onData?(
        data: readonly PriipsPostRiskV1RiskReturnContributionsResponse[],
        response: PortfolioRiskResponse<
            PriipsPostRiskV1RiskReturnContributionsResponse,
        >,
    ): void
    | DataRequest
    | readonly DataRequest[];
    onError?(
        error: PortfolioRiskResponseError,
        response: PortfolioRiskResponse<
            PriipsPostRiskV1RiskReturnContributionsResponse,
        >,
    ): void
    | DataRequest
    | readonly DataRequest[];
    onFinally?(
        response: PortfolioRiskResponse<
            PriipsPostRiskV1RiskReturnContributionsResponse,
        >,
    ): void
    | DataRequest
    | readonly DataRequest[];
}
```

#### Hierarchy ([View Summary](../type-hierarchy.md#SDK.InfrontSDK.PortfolioRisk.PriipsPostRiskV1RiskReturnContributionsOptions))

- PortfolioRiskCommonRequestOptions<
  PriipsPostRiskV1RiskReturnContributionsResponse,
  >
- PriipsDataServicesRiskvaluatorRiskReturnContributionsRequest

  - PriipsPostRiskV1RiskReturnContributionsOptions

### Properties

#### `Readonly` portfolioId

```ts
portfolioId: string
```

Identifier of the portfolio

Inherited from PriipsDataServicesRiskvaluatorRiskReturnContributionsRequest.portfolioId

#### `Readonly` valuationDatetime

```ts
valuationDatetime: string
```

timestamp for the portfolio valuation

##### Remarks

Format: date-time

Inherited from PriipsDataServicesRiskvaluatorRiskReturnContributionsRequest.valuationDatetime

### Methods

#### `Optional` onData

```ts
onData?(
    data: readonly PriipsPostRiskV1RiskReturnContributionsResponse[],
    response: PortfolioRiskResponse<
        PriipsPostRiskV1RiskReturnContributionsResponse,
    >,
): void
| DataRequest
| readonly DataRequest[]
```

A callback called when a data request has completed succesfully.

##### Parameters

- data: readonly PriipsPostRiskV1RiskReturnContributionsResponse[]
- response: PortfolioRiskResponse<PriipsPostRiskV1RiskReturnContributionsResponse>

##### Returns void | [DataRequest](./SDK.InfrontSDK.DataRequest.md) | readonly [DataRequest](./SDK.InfrontSDK.DataRequest.md)[]

Inherited from Infront.PortfolioRiskCommonRequestOptions.onData

#### `Optional` onError

```ts
onError?(
    error: PortfolioRiskResponseError,
    response: PortfolioRiskResponse<
        PriipsPostRiskV1RiskReturnContributionsResponse,
    >,
): void
| DataRequest
| readonly DataRequest[]
```

A callback called when an error occurred trying to make the request.

##### Parameters

- error: PortfolioRiskResponseError
- response: PortfolioRiskResponse<PriipsPostRiskV1RiskReturnContributionsResponse>

##### Returns void | [DataRequest](./SDK.InfrontSDK.DataRequest.md) | readonly [DataRequest](./SDK.InfrontSDK.DataRequest.md)[]

Inherited from Infront.PortfolioRiskCommonRequestOptions.onError

#### `Optional` onFinally

```ts
onFinally?(
    response: PortfolioRiskResponse<
        PriipsPostRiskV1RiskReturnContributionsResponse,
    >,
): void
| DataRequest
| readonly DataRequest[]
```

A callback called when the request is finished, either because data was received,
error occurred, or the request was aborted/unsubscribed.

##### Parameters

- response: PortfolioRiskResponse<PriipsPostRiskV1RiskReturnContributionsResponse>

##### Returns void | [DataRequest](./SDK.InfrontSDK.DataRequest.md) | readonly [DataRequest](./SDK.InfrontSDK.DataRequest.md)[]

Inherited from Infront.PortfolioRiskCommonRequestOptions.onFinally
