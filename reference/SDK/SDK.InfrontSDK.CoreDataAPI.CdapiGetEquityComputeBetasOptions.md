---
title: "CdapiGetEquityComputeBetasOptions"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiGetEquityComputeBetasOptions"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiGetEquityComputeBetasOptions"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiGetEquityComputeBetasOptions.html"
defines: ["CdapiGetEquityComputeBetasOptions"]
member_count: 6
members: ["end_date?", "frequency_code?", "onData?", "onError?", "onFinally?", "start_date?"]
member_groups:
  "Properties": ["end_date?", "frequency_code?", "onData?", "onError?", "onFinally?", "start_date?"]
related_types: ["SDK.InfrontSDK.CoreDataAPI.AnalyticscalculationsBetaResult"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiGetEquityComputeBetasOptionsFrequencyCode", "SDK.InfrontSDK.CoreDataAPI.AnalyticscalculationsBetaResult", "SDK.InfrontSDK.CoreDataAPI.cdapiGetEquityComputeBetas"]
---

# CdapiGetEquityComputeBetasOptions

Request options for [cdapiGetEquityComputeBetas](./SDK.InfrontSDK.CoreDataAPI.cdapiGetEquityComputeBetas.md)

```ts
interface CdapiGetEquityComputeBetasOptions {
    end_date?: string;
    frequency_code?: CdapiGetEquityComputeBetasOptionsFrequencyCode;
    onData?: CoreDataRequestSuccessCallback<AnalyticscalculationsBetaResult>;
    onError?: CoreDataRequestErrorCallback<AnalyticscalculationsBetaResult>;
    onFinally?: CoreDataRequestFinallyCallback<AnalyticscalculationsBetaResult>;
    start_date?: string;
}
```

#### Hierarchy

- CdapiCommonRequestOptions<AnalyticscalculationsBetaResult>

  - CdapiGetEquityComputeBetasOptions

### Properties

#### `Optional` ` Readonly`end_date

```ts
end_date?: string
```

ISO-8601 format YYYY-MM-DD.

#### `Optional` ` Readonly`frequency_code

```ts
frequency_code?: CdapiGetEquityComputeBetasOptionsFrequencyCode
```

see Frequency

#### `Optional` onData

```ts
onData?: CoreDataRequestSuccessCallback<AnalyticscalculationsBetaResult>
```

A callback called when a data request has completed succesfully.

Inherited from Infront.CdapiCommonRequestOptions.onData

#### `Optional` onError

```ts
onError?: CoreDataRequestErrorCallback<AnalyticscalculationsBetaResult>
```

A callback called when an error occurred trying to make the request.

Inherited from Infront.CdapiCommonRequestOptions.onError

#### `Optional` onFinally

```ts
onFinally?: CoreDataRequestFinallyCallback<AnalyticscalculationsBetaResult>
```

A callback called when the request is finished, either because data was received,
error occurred, or the request was aborted/unsubscribed.

Inherited from Infront.CdapiCommonRequestOptions.onFinally

#### `Optional` ` Readonly`start_date

```ts
start_date?: string
```

ISO-8601 format YYYY-MM-DD.
