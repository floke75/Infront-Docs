---
title: "CdapiGetFundCompositionTypesOptions"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiGetFundCompositionTypesOptions"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiGetFundCompositionTypesOptions"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiGetFundCompositionTypesOptions.html"
defines: ["CdapiGetFundCompositionTypesOptions"]
member_count: 3
members: ["onData?", "onError?", "onFinally?"]
member_groups:
  "Properties": ["onData?", "onError?", "onFinally?"]
related_types: ["SDK.InfrontSDK.CoreDataAPI.CdapiFundCompositionTypeData"]
reference_count: 2
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiFundCompositionTypeData", "SDK.InfrontSDK.CoreDataAPI.cdapiGetFundCompositionTypes"]
---

# CdapiGetFundCompositionTypesOptions

Request options for [cdapiGetFundCompositionTypes](./SDK.InfrontSDK.CoreDataAPI.cdapiGetFundCompositionTypes.md)

```ts
interface CdapiGetFundCompositionTypesOptions {
    onData?: CoreDataRequestSuccessCallback<CdapiFundCompositionTypeData>;
    onError?: CoreDataRequestErrorCallback<CdapiFundCompositionTypeData>;
    onFinally?: CoreDataRequestFinallyCallback<CdapiFundCompositionTypeData>;
}
```

#### Hierarchy

- CdapiCommonRequestOptions<CdapiFundCompositionTypeData>

  - CdapiGetFundCompositionTypesOptions

### Properties

#### `Optional` onData

```ts
onData?: CoreDataRequestSuccessCallback<CdapiFundCompositionTypeData>
```

A callback called when a data request has completed succesfully.

Inherited from Infront.CdapiCommonRequestOptions.onData

#### `Optional` onError

```ts
onError?: CoreDataRequestErrorCallback<CdapiFundCompositionTypeData>
```

A callback called when an error occurred trying to make the request.

Inherited from Infront.CdapiCommonRequestOptions.onError

#### `Optional` onFinally

```ts
onFinally?: CoreDataRequestFinallyCallback<CdapiFundCompositionTypeData>
```

A callback called when the request is finished, either because data was received,
error occurred, or the request was aborted/unsubscribed.

Inherited from Infront.CdapiCommonRequestOptions.onFinally
