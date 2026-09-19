---
title: "CdapiGetFundCurrenciesOptions"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiGetFundCurrenciesOptions"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiGetFundCurrenciesOptions"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiGetFundCurrenciesOptions.html"
defines: ["CdapiGetFundCurrenciesOptions"]
member_count: 3
members: ["onData?", "onError?", "onFinally?"]
member_groups:
  "Properties": ["onData?", "onError?", "onFinally?"]
related_types: ["SDK.InfrontSDK.CoreDataAPI.CdapiCommonCurrenciesData"]
reference_count: 2
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiCommonCurrenciesData", "SDK.InfrontSDK.CoreDataAPI.cdapiGetFundCurrencies"]
---

# CdapiGetFundCurrenciesOptions

Request options for [cdapiGetFundCurrencies](./SDK.InfrontSDK.CoreDataAPI.cdapiGetFundCurrencies.md)

```ts
interface CdapiGetFundCurrenciesOptions {
    onData?: CoreDataRequestSuccessCallback<CdapiCommonCurrenciesData>;
    onError?: CoreDataRequestErrorCallback<CdapiCommonCurrenciesData>;
    onFinally?: CoreDataRequestFinallyCallback<CdapiCommonCurrenciesData>;
}
```

#### Hierarchy

- CdapiCommonRequestOptions<CdapiCommonCurrenciesData>

  - CdapiGetFundCurrenciesOptions

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
