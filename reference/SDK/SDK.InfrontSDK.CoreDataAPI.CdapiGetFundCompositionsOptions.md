---
title: "CdapiGetFundCompositionsOptions"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiGetFundCompositionsOptions"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiGetFundCompositionsOptions"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiGetFundCompositionsOptions.html"
defines: ["CdapiGetFundCompositionsOptions"]
member_count: 3
members: ["onData?", "onError?", "onFinally?"]
member_groups:
  "Properties": ["onData?", "onError?", "onFinally?"]
related_types: ["SDK.InfrontSDK.CoreDataAPI.CdapiFundCompositionData"]
reference_count: 2
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiFundCompositionData", "SDK.InfrontSDK.CoreDataAPI.cdapiGetFundCompositions"]
---

# CdapiGetFundCompositionsOptions

Request options for [cdapiGetFundCompositions](./SDK.InfrontSDK.CoreDataAPI.cdapiGetFundCompositions.md)

```ts
interface CdapiGetFundCompositionsOptions {
    onData?: CoreDataRequestSuccessCallback<CdapiFundCompositionData>;
    onError?: CoreDataRequestErrorCallback<CdapiFundCompositionData>;
    onFinally?: CoreDataRequestFinallyCallback<CdapiFundCompositionData>;
}
```

#### Hierarchy

- CdapiCommonRequestOptions<CdapiFundCompositionData>

  - CdapiGetFundCompositionsOptions

### Properties

#### `Optional` onData

```ts
onData?: CoreDataRequestSuccessCallback<CdapiFundCompositionData>
```

A callback called when a data request has completed succesfully.

Inherited from Infront.CdapiCommonRequestOptions.onData

#### `Optional` onError

```ts
onError?: CoreDataRequestErrorCallback<CdapiFundCompositionData>
```

A callback called when an error occurred trying to make the request.

Inherited from Infront.CdapiCommonRequestOptions.onError

#### `Optional` onFinally

```ts
onFinally?: CoreDataRequestFinallyCallback<CdapiFundCompositionData>
```

A callback called when the request is finished, either because data was received,
error occurred, or the request was aborted/unsubscribed.

Inherited from Infront.CdapiCommonRequestOptions.onFinally
