---
title: "CdapiGetCommonAttributeConfigsOptions"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiGetCommonAttributeConfigsOptions"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiGetCommonAttributeConfigsOptions"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiGetCommonAttributeConfigsOptions.html"
defines: ["CdapiGetCommonAttributeConfigsOptions"]
member_count: 4
members: ["onData?", "onError?", "onFinally?", "sort?"]
member_groups:
  "Properties": ["onData?", "onError?", "onFinally?", "sort?"]
related_types: ["SDK.InfrontSDK.CoreDataAPI.CdapiCommonAttributeConfigsData"]
reference_count: 4
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiCommonAttributeConfigsData", "SDK.InfrontSDK.CoreDataAPI.CdapiSortField", "SDK.InfrontSDK.CoreDataAPI.CdapiGetCommonAttributeConfigsSortField", "SDK.InfrontSDK.CoreDataAPI.cdapiGetCommonAttributeConfigs"]
---

# CdapiGetCommonAttributeConfigsOptions

Request options for [cdapiGetCommonAttributeConfigs](./SDK.InfrontSDK.CoreDataAPI.cdapiGetCommonAttributeConfigs.md)

```ts
interface CdapiGetCommonAttributeConfigsOptions {
    onData?: CoreDataRequestSuccessCallback<CdapiCommonAttributeConfigsData>;
    onError?: CoreDataRequestErrorCallback<CdapiCommonAttributeConfigsData>;
    onFinally?: CoreDataRequestFinallyCallback<CdapiCommonAttributeConfigsData>;
    sort?:
        | CdapiSortField<CdapiGetCommonAttributeConfigsSortField>
        | readonly CdapiSortField<CdapiGetCommonAttributeConfigsSortField>[];
}
```

#### Hierarchy

- CdapiCommonRequestOptions<CdapiCommonAttributeConfigsData>

  - CdapiGetCommonAttributeConfigsOptions

### Properties

#### `Optional` onData

```ts
onData?: CoreDataRequestSuccessCallback<CdapiCommonAttributeConfigsData>
```

A callback called when a data request has completed succesfully.

Inherited from Infront.CdapiCommonRequestOptions.onData

#### `Optional` onError

```ts
onError?: CoreDataRequestErrorCallback<CdapiCommonAttributeConfigsData>
```

A callback called when an error occurred trying to make the request.

Inherited from Infront.CdapiCommonRequestOptions.onError

#### `Optional` onFinally

```ts
onFinally?: CoreDataRequestFinallyCallback<CdapiCommonAttributeConfigsData>
```

A callback called when the request is finished, either because data was received,
error occurred, or the request was aborted/unsubscribed.

Inherited from Infront.CdapiCommonRequestOptions.onFinally

#### `Optional` ` Readonly`sort

```ts
sort?:
    | CdapiSortField<CdapiGetCommonAttributeConfigsSortField>
    | readonly CdapiSortField<CdapiGetCommonAttributeConfigsSortField>[]
```

use repeated field to apply sorting.
'+' at the beginning of the string sorts ASC,
'-' at the beginning of the string sorts DESC.
Sortable fields:

- attribute_config.path, attribute_config.ids_tag, attribute_config.field_id, attribute_config.field_name
