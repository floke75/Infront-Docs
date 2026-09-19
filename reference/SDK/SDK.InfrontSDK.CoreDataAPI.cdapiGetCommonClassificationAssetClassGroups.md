---
title: "cdapiGetCommonClassificationAssetClassGroups"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.cdapiGetCommonClassificationAssetClassGroups"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > cdapiGetCommonClassificationAssetClassGroups"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.CoreDataAPI.cdapiGetCommonClassificationAssetClassGroups.html"
defines: ["cdapiGetCommonClassificationAssetClassGroups"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiGetCommonClassificationAssetClassGroupsOptions", "SDK.InfrontSDK.CoreDataAPI.CdapiCommonClassificationAssetClassGroupsData", "SDK.InfrontSDK.TypedDataRequest"]
---

# cdapiGetCommonClassificationAssetClassGroups

```ts
cdapiGetCommonClassificationAssetClassGroups(
    options: CdapiGetCommonClassificationAssetClassGroupsOptions,
    onSuccess?: CoreDataRequestSuccessCallback<
        CdapiCommonClassificationAssetClassGroupsData,
    >,
    onError?: CoreDataRequestErrorCallback<
        CdapiCommonClassificationAssetClassGroupsData,
    >,
): TypedDataRequest<
    CoreDataResponseArray<CdapiCommonClassificationAssetClassGroupsData>,
>
```

ListAssetClassGroups retrieves asset class categories that could be filtered by various attributes.

Calls GET /common/classification/asset-class-groups

#### Parameters

- options: [CdapiGetCommonClassificationAssetClassGroupsOptions](./SDK.InfrontSDK.CoreDataAPI.CdapiGetCommonClassificationAssetClassGroupsOptions.md)
- `Optional` onSuccess: CoreDataRequestSuccessCallback<[CdapiCommonClassificationAssetClassGroupsData](./SDK.InfrontSDK.CoreDataAPI.CdapiCommonClassificationAssetClassGroupsData.md)>
- `Optional` onError: CoreDataRequestErrorCallback<[CdapiCommonClassificationAssetClassGroupsData](./SDK.InfrontSDK.CoreDataAPI.CdapiCommonClassificationAssetClassGroupsData.md)>

#### Returns [TypedDataRequest](./SDK.InfrontSDK.TypedDataRequest.md)<
CoreDataResponseArray<[CdapiCommonClassificationAssetClassGroupsData](./SDK.InfrontSDK.CoreDataAPI.CdapiCommonClassificationAssetClassGroupsData.md)>,
>

#### Remarks

CDAPI Operation ID: CommonService_ListClassificationAssetClassGroups
