---
title: "cdapiGetCommonAttributeConfigServices"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.cdapiGetCommonAttributeConfigServices"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > cdapiGetCommonAttributeConfigServices"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.CoreDataAPI.cdapiGetCommonAttributeConfigServices.html"
defines: ["cdapiGetCommonAttributeConfigServices"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiGetCommonAttributeConfigServicesOptions", "SDK.InfrontSDK.CoreDataAPI.CdapiCommonAttributeConfigsData", "SDK.InfrontSDK.TypedDataRequest"]
---

# cdapiGetCommonAttributeConfigServices

```ts
cdapiGetCommonAttributeConfigServices(
    options: CdapiGetCommonAttributeConfigServicesOptions,
    onSuccess?: CoreDataRequestSuccessCallback<CdapiCommonAttributeConfigsData>,
    onError?: CoreDataRequestErrorCallback<CdapiCommonAttributeConfigsData>,
): TypedDataRequest<CoreDataResponseArray<CdapiCommonAttributeConfigsData>>
```

ListAttributeConfigServices retrieves AttributeConfigs.

Calls GET /common/attribute-config-services

#### Parameters

- options: [CdapiGetCommonAttributeConfigServicesOptions](./SDK.InfrontSDK.CoreDataAPI.CdapiGetCommonAttributeConfigServicesOptions.md)
- `Optional` onSuccess: CoreDataRequestSuccessCallback<[CdapiCommonAttributeConfigsData](./SDK.InfrontSDK.CoreDataAPI.CdapiCommonAttributeConfigsData.md)>
- `Optional` onError: CoreDataRequestErrorCallback<[CdapiCommonAttributeConfigsData](./SDK.InfrontSDK.CoreDataAPI.CdapiCommonAttributeConfigsData.md)>

#### Returns [TypedDataRequest](./SDK.InfrontSDK.TypedDataRequest.md)<CoreDataResponseArray<[CdapiCommonAttributeConfigsData](./SDK.InfrontSDK.CoreDataAPI.CdapiCommonAttributeConfigsData.md)>>

#### Remarks

CDAPI Operation ID: CommonService_ListAttributeConfigServices
