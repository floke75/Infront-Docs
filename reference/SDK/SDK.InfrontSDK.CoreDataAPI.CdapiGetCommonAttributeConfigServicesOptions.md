---
title: "CdapiGetCommonAttributeConfigServicesOptions"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiGetCommonAttributeConfigServicesOptions"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiGetCommonAttributeConfigServicesOptions"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiGetCommonAttributeConfigServicesOptions.html"
defines: ["CdapiGetCommonAttributeConfigServicesOptions"]
member_count: 4
members: ["onData?", "onError?", "onFinally?", "sort?"]
member_groups:
  "Properties": ["onData?", "onError?", "onFinally?", "sort?"]
related_types: ["SDK.InfrontSDK.CoreDataAPI.CdapiCommonAttributeConfigsData"]
reference_count: 4
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiCommonAttributeConfigsData", "SDK.InfrontSDK.CoreDataAPI.CdapiSortField", "SDK.InfrontSDK.CoreDataAPI.CdapiGetCommonAttributeConfigServicesSortField", "SDK.InfrontSDK.CoreDataAPI.cdapiGetCommonAttributeConfigServices"]
---

# CdapiGetCommonAttributeConfigServicesOptions

Request options for [cdapiGetCommonAttributeConfigServices](./SDK.InfrontSDK.CoreDataAPI.cdapiGetCommonAttributeConfigServices.md)

```ts
interface CdapiGetCommonAttributeConfigServicesOptions {
    onData?: CoreDataRequestSuccessCallback<CdapiCommonAttributeConfigsData>;
    onError?: CoreDataRequestErrorCallback<CdapiCommonAttributeConfigsData>;
    onFinally?: CoreDataRequestFinallyCallback<CdapiCommonAttributeConfigsData>;
    sort?:
        | CdapiSortField<CdapiGetCommonAttributeConfigServicesSortField>
        | readonly CdapiSortField<CdapiGetCommonAttributeConfigServicesSortField>[];
}
```

#### Hierarchy

- CdapiCommonRequestOptions<CdapiCommonAttributeConfigsData>

  - CdapiGetCommonAttributeConfigServicesOptions

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
    | CdapiSortField<CdapiGetCommonAttributeConfigServicesSortField>
    | readonly CdapiSortField<CdapiGetCommonAttributeConfigServicesSortField>[]
```

use repeated field to apply sorting.
'+' at the beginning of the string sorts ASC,
'-' at the beginning of the string sorts DESC.
Sortable fields:

- attribute_config.path, attribute_config.ids_tag, attribute_config.field_id, attribute_config.field_name
