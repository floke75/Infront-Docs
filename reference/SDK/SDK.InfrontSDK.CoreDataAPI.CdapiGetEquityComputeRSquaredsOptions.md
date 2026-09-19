---
title: "CdapiGetEquityComputeRSquaredsOptions"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiGetEquityComputeRSquaredsOptions"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiGetEquityComputeRSquaredsOptions"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiGetEquityComputeRSquaredsOptions.html"
defines: ["CdapiGetEquityComputeRSquaredsOptions"]
member_count: 5
members: ["end_date?", "onData?", "onError?", "onFinally?", "start_date?"]
member_groups:
  "Properties": ["end_date?", "onData?", "onError?", "onFinally?", "start_date?"]
related_types: ["SDK.InfrontSDK.CoreDataAPI.AnalyticscalculationsRSquaredResult"]
reference_count: 2
references: ["SDK.InfrontSDK.CoreDataAPI.AnalyticscalculationsRSquaredResult", "SDK.InfrontSDK.CoreDataAPI.cdapiGetEquityComputeRSquareds"]
---

# CdapiGetEquityComputeRSquaredsOptions

Request options for [cdapiGetEquityComputeRSquareds](./SDK.InfrontSDK.CoreDataAPI.cdapiGetEquityComputeRSquareds.md)

```ts
interface CdapiGetEquityComputeRSquaredsOptions {
    end_date?: string;
    onData?: CoreDataRequestSuccessCallback<
        AnalyticscalculationsRSquaredResult,
    >;
    onError?: CoreDataRequestErrorCallback<AnalyticscalculationsRSquaredResult>;
    onFinally?: CoreDataRequestFinallyCallback<
        AnalyticscalculationsRSquaredResult,
    >;
    start_date?: string;
}
```

#### Hierarchy

- CdapiCommonRequestOptions<AnalyticscalculationsRSquaredResult>

  - CdapiGetEquityComputeRSquaredsOptions

### Properties

#### `Optional` ` Readonly`end_date

```ts
end_date?: string
```

ISO-8601 format YYYY-MM-DD.

#### `Optional` onData

```ts
onData?: CoreDataRequestSuccessCallback<AnalyticscalculationsRSquaredResult>
```

A callback called when a data request has completed succesfully.

Inherited from Infront.CdapiCommonRequestOptions.onData

#### `Optional` onError

```ts
onError?: CoreDataRequestErrorCallback<AnalyticscalculationsRSquaredResult>
```

A callback called when an error occurred trying to make the request.

Inherited from Infront.CdapiCommonRequestOptions.onError

#### `Optional` onFinally

```ts
onFinally?: CoreDataRequestFinallyCallback<AnalyticscalculationsRSquaredResult>
```

A callback called when the request is finished, either because data was received,
error occurred, or the request was aborted/unsubscribed.

Inherited from Infront.CdapiCommonRequestOptions.onFinally

#### `Optional` ` Readonly`start_date

```ts
start_date?: string
```

ISO-8601 format YYYY-MM-DD.
