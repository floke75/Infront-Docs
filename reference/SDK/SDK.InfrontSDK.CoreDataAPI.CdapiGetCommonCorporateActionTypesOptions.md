---
title: "CdapiGetCommonCorporateActionTypesOptions"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiGetCommonCorporateActionTypesOptions"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiGetCommonCorporateActionTypesOptions"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiGetCommonCorporateActionTypesOptions.html"
defines: ["CdapiGetCommonCorporateActionTypesOptions"]
member_count: 4
members: ["onData?", "onError?", "onFinally?", "source?"]
member_groups:
  "Properties": ["onData?", "onError?", "onFinally?", "source?"]
related_types: ["SDK.InfrontSDK.CoreDataAPI.CdapiCommonListCorporateActionTypesData"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiCommonListCorporateActionTypesData", "SDK.InfrontSDK.CoreDataAPI.CdapiGetCommonCorporateActionTypesOptionsSource", "SDK.InfrontSDK.CoreDataAPI.cdapiGetCommonCorporateActionTypes"]
---

# CdapiGetCommonCorporateActionTypesOptions

Request options for [cdapiGetCommonCorporateActionTypes](./SDK.InfrontSDK.CoreDataAPI.cdapiGetCommonCorporateActionTypes.md)

```ts
interface CdapiGetCommonCorporateActionTypesOptions {
    onData?: CoreDataRequestSuccessCallback<
        CdapiCommonListCorporateActionTypesData,
    >;
    onError?: CoreDataRequestErrorCallback<
        CdapiCommonListCorporateActionTypesData,
    >;
    onFinally?: CoreDataRequestFinallyCallback<
        CdapiCommonListCorporateActionTypesData,
    >;
    source?: CdapiGetCommonCorporateActionTypesOptionsSource;
}
```

#### Hierarchy

- CdapiCommonRequestOptions<CdapiCommonListCorporateActionTypesData>

  - CdapiGetCommonCorporateActionTypesOptions

### Properties

#### `Optional` onData

```ts
onData?: CoreDataRequestSuccessCallback<CdapiCommonListCorporateActionTypesData>
```

A callback called when a data request has completed succesfully.

Inherited from Infront.CdapiCommonRequestOptions.onData

#### `Optional` onError

```ts
onError?: CoreDataRequestErrorCallback<CdapiCommonListCorporateActionTypesData>
```

A callback called when an error occurred trying to make the request.

Inherited from Infront.CdapiCommonRequestOptions.onError

#### `Optional` onFinally

```ts
onFinally?: CoreDataRequestFinallyCallback<
    CdapiCommonListCorporateActionTypesData,
>
```

A callback called when the request is finished, either because data was received,
error occurred, or the request was aborted/unsubscribed.

Inherited from Infront.CdapiCommonRequestOptions.onFinally

#### `Optional` ` Readonly`source

```ts
source?: CdapiGetCommonCorporateActionTypesOptionsSource
```

the source of the data
