---
title: "cdapiGetCommonAttributeConfigSources"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.cdapiGetCommonAttributeConfigSources"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > cdapiGetCommonAttributeConfigSources"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.CoreDataAPI.cdapiGetCommonAttributeConfigSources.html"
defines: ["cdapiGetCommonAttributeConfigSources"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiGetCommonAttributeConfigSourcesOptions", "SDK.InfrontSDK.CoreDataAPI.CdapiCommonAttributeConfigsData", "SDK.InfrontSDK.TypedDataRequest"]
---

# cdapiGetCommonAttributeConfigSources

```ts
cdapiGetCommonAttributeConfigSources(
    options: CdapiGetCommonAttributeConfigSourcesOptions,
    onSuccess?: CoreDataRequestSuccessCallback<CdapiCommonAttributeConfigsData>,
    onError?: CoreDataRequestErrorCallback<CdapiCommonAttributeConfigsData>,
): TypedDataRequest<CoreDataResponseArray<CdapiCommonAttributeConfigsData>>
```

ListAttributeConfigSources retrieves AttributeConfigs.

Calls GET /common/attribute-config-sources

#### Parameters

- options: [CdapiGetCommonAttributeConfigSourcesOptions](./SDK.InfrontSDK.CoreDataAPI.CdapiGetCommonAttributeConfigSourcesOptions.md)
- `Optional` onSuccess: CoreDataRequestSuccessCallback<[CdapiCommonAttributeConfigsData](./SDK.InfrontSDK.CoreDataAPI.CdapiCommonAttributeConfigsData.md)>
- `Optional` onError: CoreDataRequestErrorCallback<[CdapiCommonAttributeConfigsData](./SDK.InfrontSDK.CoreDataAPI.CdapiCommonAttributeConfigsData.md)>

#### Returns [TypedDataRequest](./SDK.InfrontSDK.TypedDataRequest.md)<CoreDataResponseArray<[CdapiCommonAttributeConfigsData](./SDK.InfrontSDK.CoreDataAPI.CdapiCommonAttributeConfigsData.md)>>

#### Remarks

CDAPI Operation ID: CommonService_ListAttributeConfigSources
