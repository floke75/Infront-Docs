---
title: "cdapiGetCommonClassificationAssetClassCategories"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.cdapiGetCommonClassificationAssetClassCategories"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > cdapiGetCommonClassificationAssetClassCategories"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.CoreDataAPI.cdapiGetCommonClassificationAssetClassCategories.html"
defines: ["cdapiGetCommonClassificationAssetClassCategories"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiGetCommonClassificationAssetClassCategoriesOptions", "SDK.InfrontSDK.CoreDataAPI.CdapiCommonClassificationAssetClassCategoriesData", "SDK.InfrontSDK.TypedDataRequest"]
---

# cdapiGetCommonClassificationAssetClassCategories

```ts
cdapiGetCommonClassificationAssetClassCategories(
    options: CdapiGetCommonClassificationAssetClassCategoriesOptions,
    onSuccess?: CoreDataRequestSuccessCallback<
        CdapiCommonClassificationAssetClassCategoriesData,
    >,
    onError?: CoreDataRequestErrorCallback<
        CdapiCommonClassificationAssetClassCategoriesData,
    >,
): TypedDataRequest<
    CoreDataResponseArray<CdapiCommonClassificationAssetClassCategoriesData>,
>
```

ListAssetClassCategories retrieves asset class categories that could be filtered by various attributes.

Calls GET /common/classification/asset-class-categories

#### Parameters

- options: [CdapiGetCommonClassificationAssetClassCategoriesOptions](./SDK.InfrontSDK.CoreDataAPI.CdapiGetCommonClassificationAssetClassCategoriesOptions.md)
- `Optional` onSuccess: CoreDataRequestSuccessCallback<
  [CdapiCommonClassificationAssetClassCategoriesData](./SDK.InfrontSDK.CoreDataAPI.CdapiCommonClassificationAssetClassCategoriesData.md),
  >
- `Optional` onError: CoreDataRequestErrorCallback<[CdapiCommonClassificationAssetClassCategoriesData](./SDK.InfrontSDK.CoreDataAPI.CdapiCommonClassificationAssetClassCategoriesData.md)>

#### Returns [TypedDataRequest](./SDK.InfrontSDK.TypedDataRequest.md)<
CoreDataResponseArray<[CdapiCommonClassificationAssetClassCategoriesData](./SDK.InfrontSDK.CoreDataAPI.CdapiCommonClassificationAssetClassCategoriesData.md)>,
>

#### Remarks

CDAPI Operation ID: CommonService_ListClassificationAssetClassCategories
