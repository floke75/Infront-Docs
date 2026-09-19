---
title: "CdapiGetEquityComputeVolatilitiesOptions"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiGetEquityComputeVolatilitiesOptions"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiGetEquityComputeVolatilitiesOptions"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiGetEquityComputeVolatilitiesOptions.html"
defines: ["CdapiGetEquityComputeVolatilitiesOptions"]
member_count: 6
members: ["end_date?", "frequency_code?", "onData?", "onError?", "onFinally?", "start_date?"]
member_groups:
  "Properties": ["end_date?", "frequency_code?", "onData?", "onError?", "onFinally?", "start_date?"]
related_types: ["SDK.InfrontSDK.CoreDataAPI.AnalyticscalculationsVolatilityResult"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiGetEquityComputeVolatilitiesOptionsFrequencyCode", "SDK.InfrontSDK.CoreDataAPI.AnalyticscalculationsVolatilityResult", "SDK.InfrontSDK.CoreDataAPI.cdapiGetEquityComputeVolatilities"]
---

# CdapiGetEquityComputeVolatilitiesOptions

Request options for [cdapiGetEquityComputeVolatilities](./SDK.InfrontSDK.CoreDataAPI.cdapiGetEquityComputeVolatilities.md)

```ts
interface CdapiGetEquityComputeVolatilitiesOptions {
    end_date?: string;
    frequency_code?: CdapiGetEquityComputeVolatilitiesOptionsFrequencyCode;
    onData?: CoreDataRequestSuccessCallback<
        AnalyticscalculationsVolatilityResult,
    >;
    onError?: CoreDataRequestErrorCallback<
        AnalyticscalculationsVolatilityResult,
    >;
    onFinally?: CoreDataRequestFinallyCallback<
        AnalyticscalculationsVolatilityResult,
    >;
    start_date?: string;
}
```

#### Hierarchy

- CdapiCommonRequestOptions<AnalyticscalculationsVolatilityResult>

  - CdapiGetEquityComputeVolatilitiesOptions

### Properties

#### `Optional` ` Readonly`end_date

```ts
end_date?: string
```

ISO-8601 format YYYY-MM-DD.

#### `Optional` ` Readonly`frequency_code

```ts
frequency_code?: CdapiGetEquityComputeVolatilitiesOptionsFrequencyCode
```

see Frequency

#### `Optional` onData

```ts
onData?: CoreDataRequestSuccessCallback<AnalyticscalculationsVolatilityResult>
```

A callback called when a data request has completed succesfully.

Inherited from Infront.CdapiCommonRequestOptions.onData

#### `Optional` onError

```ts
onError?: CoreDataRequestErrorCallback<AnalyticscalculationsVolatilityResult>
```

A callback called when an error occurred trying to make the request.

Inherited from Infront.CdapiCommonRequestOptions.onError

#### `Optional` onFinally

```ts
onFinally?: CoreDataRequestFinallyCallback<
    AnalyticscalculationsVolatilityResult,
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
