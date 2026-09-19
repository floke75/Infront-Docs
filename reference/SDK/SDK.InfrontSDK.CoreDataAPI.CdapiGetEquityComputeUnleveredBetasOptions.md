---
title: "CdapiGetEquityComputeUnleveredBetasOptions"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiGetEquityComputeUnleveredBetasOptions"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiGetEquityComputeUnleveredBetasOptions"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiGetEquityComputeUnleveredBetasOptions.html"
defines: ["CdapiGetEquityComputeUnleveredBetasOptions"]
member_count: 6
members: ["end_date?", "frequency_code?", "onData?", "onError?", "onFinally?", "start_date?"]
member_groups:
  "Properties": ["end_date?", "frequency_code?", "onData?", "onError?", "onFinally?", "start_date?"]
related_types: ["SDK.InfrontSDK.CoreDataAPI.AnalyticscalculationsUnleveredBetaResult"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiGetEquityComputeUnleveredBetasOptionsFrequencyCode", "SDK.InfrontSDK.CoreDataAPI.AnalyticscalculationsUnleveredBetaResult", "SDK.InfrontSDK.CoreDataAPI.cdapiGetEquityComputeUnleveredBetas"]
---

# CdapiGetEquityComputeUnleveredBetasOptions

Request options for [cdapiGetEquityComputeUnleveredBetas](./SDK.InfrontSDK.CoreDataAPI.cdapiGetEquityComputeUnleveredBetas.md)

```ts
interface CdapiGetEquityComputeUnleveredBetasOptions {
    end_date?: string;
    frequency_code?: CdapiGetEquityComputeUnleveredBetasOptionsFrequencyCode;
    onData?: CoreDataRequestSuccessCallback<
        AnalyticscalculationsUnleveredBetaResult,
    >;
    onError?: CoreDataRequestErrorCallback<
        AnalyticscalculationsUnleveredBetaResult,
    >;
    onFinally?: CoreDataRequestFinallyCallback<
        AnalyticscalculationsUnleveredBetaResult,
    >;
    start_date?: string;
}
```

#### Hierarchy

- CdapiCommonRequestOptions<AnalyticscalculationsUnleveredBetaResult>

  - CdapiGetEquityComputeUnleveredBetasOptions

### Properties

#### `Optional` ` Readonly`end_date

```ts
end_date?: string
```

ISO-8601 format YYYY-MM-DD.

#### `Optional` ` Readonly`frequency_code

```ts
frequency_code?: CdapiGetEquityComputeUnleveredBetasOptionsFrequencyCode
```

see Frequency

#### `Optional` onData

```ts
onData?: CoreDataRequestSuccessCallback<
    AnalyticscalculationsUnleveredBetaResult,
>
```

A callback called when a data request has completed succesfully.

Inherited from Infront.CdapiCommonRequestOptions.onData

#### `Optional` onError

```ts
onError?: CoreDataRequestErrorCallback<AnalyticscalculationsUnleveredBetaResult>
```

A callback called when an error occurred trying to make the request.

Inherited from Infront.CdapiCommonRequestOptions.onError

#### `Optional` onFinally

```ts
onFinally?: CoreDataRequestFinallyCallback<
    AnalyticscalculationsUnleveredBetaResult,
>
```

A callback called when the request is finished, either because data was received,
error occurred, or the request was aborted/unsubscribed.

Inherited from Infront.CdapiCommonRequestOptions.onFinally

#### `Optional` ` Readonly`start_date

```ts
start_date?: string
```

ISO-8601 format YYYY-MM-DD.
