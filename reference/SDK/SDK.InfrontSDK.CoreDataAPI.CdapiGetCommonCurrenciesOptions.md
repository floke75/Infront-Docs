---
title: "CdapiGetCommonCurrenciesOptions"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiGetCommonCurrenciesOptions"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiGetCommonCurrenciesOptions"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiGetCommonCurrenciesOptions.html"
defines: ["CdapiGetCommonCurrenciesOptions"]
member_count: 3
members: ["onData?", "onError?", "onFinally?"]
member_groups:
  "Properties": ["onData?", "onError?", "onFinally?"]
related_types: ["SDK.InfrontSDK.CoreDataAPI.CdapiCommonCurrenciesData"]
reference_count: 2
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiCommonCurrenciesData", "SDK.InfrontSDK.CoreDataAPI.cdapiGetCommonCurrencies"]
---

# CdapiGetCommonCurrenciesOptions

Request options for [cdapiGetCommonCurrencies](./SDK.InfrontSDK.CoreDataAPI.cdapiGetCommonCurrencies.md)

```ts
interface CdapiGetCommonCurrenciesOptions {
    onData?: CoreDataRequestSuccessCallback<CdapiCommonCurrenciesData>;
    onError?: CoreDataRequestErrorCallback<CdapiCommonCurrenciesData>;
    onFinally?: CoreDataRequestFinallyCallback<CdapiCommonCurrenciesData>;
}
```

#### Hierarchy

- CdapiCommonRequestOptions<CdapiCommonCurrenciesData>

  - CdapiGetCommonCurrenciesOptions

### Properties

#### `Optional` onData

```ts
onData?: CoreDataRequestSuccessCallback<CdapiCommonCurrenciesData>
```

A callback called when a data request has completed succesfully.

Inherited from Infront.CdapiCommonRequestOptions.onData

#### `Optional` onError

```ts
onError?: CoreDataRequestErrorCallback<CdapiCommonCurrenciesData>
```

A callback called when an error occurred trying to make the request.

Inherited from Infront.CdapiCommonRequestOptions.onError

#### `Optional` onFinally

```ts
onFinally?: CoreDataRequestFinallyCallback<CdapiCommonCurrenciesData>
```

A callback called when the request is finished, either because data was received,
error occurred, or the request was aborted/unsubscribed.

Inherited from Infront.CdapiCommonRequestOptions.onFinally
