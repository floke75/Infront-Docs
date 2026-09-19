---
title: "cdapiGetCommonAttributeConfigs"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.cdapiGetCommonAttributeConfigs"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > cdapiGetCommonAttributeConfigs"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.CoreDataAPI.cdapiGetCommonAttributeConfigs.html"
defines: ["cdapiGetCommonAttributeConfigs"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiGetCommonAttributeConfigsOptions", "SDK.InfrontSDK.CoreDataAPI.CdapiCommonAttributeConfigsData", "SDK.InfrontSDK.TypedDataRequest"]
---

# cdapiGetCommonAttributeConfigs

```ts
cdapiGetCommonAttributeConfigs(
    options: CdapiGetCommonAttributeConfigsOptions,
    onSuccess?: CoreDataRequestSuccessCallback<CdapiCommonAttributeConfigsData>,
    onError?: CoreDataRequestErrorCallback<CdapiCommonAttributeConfigsData>,
): TypedDataRequest<CoreDataResponseArray<CdapiCommonAttributeConfigsData>>
```

ListAttributeConfigs retrieves AttributeConfigs.

Calls GET /common/attribute-configs

#### Parameters

- options: [CdapiGetCommonAttributeConfigsOptions](./SDK.InfrontSDK.CoreDataAPI.CdapiGetCommonAttributeConfigsOptions.md)
- `Optional` onSuccess: CoreDataRequestSuccessCallback<[CdapiCommonAttributeConfigsData](./SDK.InfrontSDK.CoreDataAPI.CdapiCommonAttributeConfigsData.md)>
- `Optional` onError: CoreDataRequestErrorCallback<[CdapiCommonAttributeConfigsData](./SDK.InfrontSDK.CoreDataAPI.CdapiCommonAttributeConfigsData.md)>

#### Returns [TypedDataRequest](./SDK.InfrontSDK.TypedDataRequest.md)<CoreDataResponseArray<[CdapiCommonAttributeConfigsData](./SDK.InfrontSDK.CoreDataAPI.CdapiCommonAttributeConfigsData.md)>>

#### Remarks

CDAPI Operation ID: CommonService_ListAttributeConfigs
