---
title: "CdapiGetCommonFieldTemplatesOptions"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiGetCommonFieldTemplatesOptions"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiGetCommonFieldTemplatesOptions"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiGetCommonFieldTemplatesOptions.html"
defines: ["CdapiGetCommonFieldTemplatesOptions"]
member_count: 3
members: ["onData?", "onError?", "onFinally?"]
member_groups:
  "Properties": ["onData?", "onError?", "onFinally?"]
related_types: ["SDK.InfrontSDK.CoreDataAPI.CdapiCommonListFieldTemplatesData"]
reference_count: 2
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiCommonListFieldTemplatesData", "SDK.InfrontSDK.CoreDataAPI.cdapiGetCommonFieldTemplates"]
---

# CdapiGetCommonFieldTemplatesOptions

Request options for [cdapiGetCommonFieldTemplates](./SDK.InfrontSDK.CoreDataAPI.cdapiGetCommonFieldTemplates.md)

```ts
interface CdapiGetCommonFieldTemplatesOptions {
    onData?: CoreDataRequestSuccessCallback<
        CdapiCommonListFieldTemplatesData,
    >;
    onError?: CoreDataRequestErrorCallback<CdapiCommonListFieldTemplatesData>;
    onFinally?: CoreDataRequestFinallyCallback<
        CdapiCommonListFieldTemplatesData,
    >;
}
```

#### Hierarchy

- CdapiCommonRequestOptions<CdapiCommonListFieldTemplatesData>

  - CdapiGetCommonFieldTemplatesOptions

### Properties

#### `Optional` onData

```ts
onData?: CoreDataRequestSuccessCallback<CdapiCommonListFieldTemplatesData>
```

A callback called when a data request has completed succesfully.

Inherited from Infront.CdapiCommonRequestOptions.onData

#### `Optional` onError

```ts
onError?: CoreDataRequestErrorCallback<CdapiCommonListFieldTemplatesData>
```

A callback called when an error occurred trying to make the request.

Inherited from Infront.CdapiCommonRequestOptions.onError

#### `Optional` onFinally

```ts
onFinally?: CoreDataRequestFinallyCallback<CdapiCommonListFieldTemplatesData>
```

A callback called when the request is finished, either because data was received,
error occurred, or the request was aborted/unsubscribed.

Inherited from Infront.CdapiCommonRequestOptions.onFinally
