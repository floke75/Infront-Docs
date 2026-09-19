---
title: "CdapiGetEquityComputeMarketCapitalizationsOptions"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiGetEquityComputeMarketCapitalizationsOptions"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiGetEquityComputeMarketCapitalizationsOptions"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiGetEquityComputeMarketCapitalizationsOptions.html"
defines: ["CdapiGetEquityComputeMarketCapitalizationsOptions"]
member_count: 5
members: ["end_date?", "onData?", "onError?", "onFinally?", "start_date?"]
member_groups:
  "Properties": ["end_date?", "onData?", "onError?", "onFinally?", "start_date?"]
related_types: ["SDK.InfrontSDK.CoreDataAPI.AnalyticscalculationsMarketCapitalizationResult"]
reference_count: 2
references: ["SDK.InfrontSDK.CoreDataAPI.AnalyticscalculationsMarketCapitalizationResult", "SDK.InfrontSDK.CoreDataAPI.cdapiGetEquityComputeMarketCapitalizations"]
---

# CdapiGetEquityComputeMarketCapitalizationsOptions

Request options for [cdapiGetEquityComputeMarketCapitalizations](./SDK.InfrontSDK.CoreDataAPI.cdapiGetEquityComputeMarketCapitalizations.md)

```ts
interface CdapiGetEquityComputeMarketCapitalizationsOptions {
    end_date?: string;
    onData?: CoreDataRequestSuccessCallback<
        AnalyticscalculationsMarketCapitalizationResult,
    >;
    onError?: CoreDataRequestErrorCallback<
        AnalyticscalculationsMarketCapitalizationResult,
    >;
    onFinally?: CoreDataRequestFinallyCallback<
        AnalyticscalculationsMarketCapitalizationResult,
    >;
    start_date?: string;
}
```

#### Hierarchy

- CdapiCommonRequestOptions<AnalyticscalculationsMarketCapitalizationResult>

  - CdapiGetEquityComputeMarketCapitalizationsOptions

### Properties

#### `Optional` ` Readonly`end_date

```ts
end_date?: string
```

ISO-8601 format YYYY-MM-DD.

#### `Optional` onData

```ts
onData?: CoreDataRequestSuccessCallback<
    AnalyticscalculationsMarketCapitalizationResult,
>
```

A callback called when a data request has completed succesfully.

Inherited from Infront.CdapiCommonRequestOptions.onData

#### `Optional` onError

```ts
onError?: CoreDataRequestErrorCallback<
    AnalyticscalculationsMarketCapitalizationResult,
>
```

A callback called when an error occurred trying to make the request.

Inherited from Infront.CdapiCommonRequestOptions.onError

#### `Optional` onFinally

```ts
onFinally?: CoreDataRequestFinallyCallback<
    AnalyticscalculationsMarketCapitalizationResult,
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
