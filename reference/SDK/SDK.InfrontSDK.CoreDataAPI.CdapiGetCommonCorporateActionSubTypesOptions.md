---
title: "CdapiGetCommonCorporateActionSubTypesOptions"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiGetCommonCorporateActionSubTypesOptions"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiGetCommonCorporateActionSubTypesOptions"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiGetCommonCorporateActionSubTypesOptions.html"
defines: ["CdapiGetCommonCorporateActionSubTypesOptions"]
member_count: 4
members: ["onData?", "onError?", "onFinally?", "source?"]
member_groups:
  "Properties": ["onData?", "onError?", "onFinally?", "source?"]
related_types: ["SDK.InfrontSDK.CoreDataAPI.CdapiCommonListCorporateActionSubTypesData"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiCommonListCorporateActionSubTypesData", "SDK.InfrontSDK.CoreDataAPI.CdapiGetCommonCorporateActionSubTypesOptionsSource", "SDK.InfrontSDK.CoreDataAPI.cdapiGetCommonCorporateActionSubTypes"]
---

# CdapiGetCommonCorporateActionSubTypesOptions

Request options for [cdapiGetCommonCorporateActionSubTypes](./SDK.InfrontSDK.CoreDataAPI.cdapiGetCommonCorporateActionSubTypes.md)

```ts
interface CdapiGetCommonCorporateActionSubTypesOptions {
    onData?: CoreDataRequestSuccessCallback<
        CdapiCommonListCorporateActionSubTypesData,
    >;
    onError?: CoreDataRequestErrorCallback<
        CdapiCommonListCorporateActionSubTypesData,
    >;
    onFinally?: CoreDataRequestFinallyCallback<
        CdapiCommonListCorporateActionSubTypesData,
    >;
    source?: CdapiGetCommonCorporateActionSubTypesOptionsSource;
}
```

#### Hierarchy

- CdapiCommonRequestOptions<CdapiCommonListCorporateActionSubTypesData>

  - CdapiGetCommonCorporateActionSubTypesOptions

### Properties

#### `Optional` onData

```ts
onData?: CoreDataRequestSuccessCallback<
    CdapiCommonListCorporateActionSubTypesData,
>
```

A callback called when a data request has completed succesfully.

Inherited from Infront.CdapiCommonRequestOptions.onData

#### `Optional` onError

```ts
onError?: CoreDataRequestErrorCallback<
    CdapiCommonListCorporateActionSubTypesData,
>
```

A callback called when an error occurred trying to make the request.

Inherited from Infront.CdapiCommonRequestOptions.onError

#### `Optional` onFinally

```ts
onFinally?: CoreDataRequestFinallyCallback<
    CdapiCommonListCorporateActionSubTypesData,
>
```

A callback called when the request is finished, either because data was received,
error occurred, or the request was aborted/unsubscribed.

Inherited from Infront.CdapiCommonRequestOptions.onFinally

#### `Optional` ` Readonly`source

```ts
source?: CdapiGetCommonCorporateActionSubTypesOptionsSource
```

the source of the data
