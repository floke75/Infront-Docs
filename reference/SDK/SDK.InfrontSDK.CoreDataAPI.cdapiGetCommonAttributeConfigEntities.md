---
title: "cdapiGetCommonAttributeConfigEntities"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.cdapiGetCommonAttributeConfigEntities"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > cdapiGetCommonAttributeConfigEntities"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.CoreDataAPI.cdapiGetCommonAttributeConfigEntities.html"
defines: ["cdapiGetCommonAttributeConfigEntities"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiGetCommonAttributeConfigEntitiesOptions", "SDK.InfrontSDK.CoreDataAPI.CdapiCommonAttributeConfigsData", "SDK.InfrontSDK.TypedDataRequest"]
---

# cdapiGetCommonAttributeConfigEntities

```ts
cdapiGetCommonAttributeConfigEntities(
    options: CdapiGetCommonAttributeConfigEntitiesOptions,
    onSuccess?: CoreDataRequestSuccessCallback<CdapiCommonAttributeConfigsData>,
    onError?: CoreDataRequestErrorCallback<CdapiCommonAttributeConfigsData>,
): TypedDataRequest<CoreDataResponseArray<CdapiCommonAttributeConfigsData>>
```

ListAttributeConfigEntities retrieves AttributeConfigs.

Calls GET /common/attribute-config-entities

#### Parameters

- options: [CdapiGetCommonAttributeConfigEntitiesOptions](./SDK.InfrontSDK.CoreDataAPI.CdapiGetCommonAttributeConfigEntitiesOptions.md)
- `Optional` onSuccess: CoreDataRequestSuccessCallback<[CdapiCommonAttributeConfigsData](./SDK.InfrontSDK.CoreDataAPI.CdapiCommonAttributeConfigsData.md)>
- `Optional` onError: CoreDataRequestErrorCallback<[CdapiCommonAttributeConfigsData](./SDK.InfrontSDK.CoreDataAPI.CdapiCommonAttributeConfigsData.md)>

#### Returns [TypedDataRequest](./SDK.InfrontSDK.TypedDataRequest.md)<CoreDataResponseArray<[CdapiCommonAttributeConfigsData](./SDK.InfrontSDK.CoreDataAPI.CdapiCommonAttributeConfigsData.md)>>

#### Remarks

CDAPI Operation ID: CommonService_ListAttributeConfigEntities
