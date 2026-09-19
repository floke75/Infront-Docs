---
title: "cdapiGetBondClassificationBondCategories"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.cdapiGetBondClassificationBondCategories"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > cdapiGetBondClassificationBondCategories"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.CoreDataAPI.cdapiGetBondClassificationBondCategories.html"
defines: ["cdapiGetBondClassificationBondCategories"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiGetBondClassificationBondCategoriesOptions", "SDK.InfrontSDK.CoreDataAPI.CdapiBondClassificationBondCategoriesData", "SDK.InfrontSDK.TypedDataRequest"]
---

# cdapiGetBondClassificationBondCategories

```ts
cdapiGetBondClassificationBondCategories(
    options: CdapiGetBondClassificationBondCategoriesOptions,
    onSuccess?: CoreDataRequestSuccessCallback<
        CdapiBondClassificationBondCategoriesData,
    >,
    onError?: CoreDataRequestErrorCallback<
        CdapiBondClassificationBondCategoriesData,
    >,
): TypedDataRequest<
    CoreDataResponseArray<CdapiBondClassificationBondCategoriesData>,
>
```

ListClassificationBondCategories retrieves bond categories that could be filtered by
various attributes. available for source: EDI,XID

Calls GET /bond/classification/bond-categories

#### Parameters

- options: [CdapiGetBondClassificationBondCategoriesOptions](./SDK.InfrontSDK.CoreDataAPI.CdapiGetBondClassificationBondCategoriesOptions.md)
- `Optional` onSuccess: CoreDataRequestSuccessCallback<[CdapiBondClassificationBondCategoriesData](./SDK.InfrontSDK.CoreDataAPI.CdapiBondClassificationBondCategoriesData.md)>
- `Optional` onError: CoreDataRequestErrorCallback<[CdapiBondClassificationBondCategoriesData](./SDK.InfrontSDK.CoreDataAPI.CdapiBondClassificationBondCategoriesData.md)>

#### Returns [TypedDataRequest](./SDK.InfrontSDK.TypedDataRequest.md)<
CoreDataResponseArray<[CdapiBondClassificationBondCategoriesData](./SDK.InfrontSDK.CoreDataAPI.CdapiBondClassificationBondCategoriesData.md)>,
>

#### Remarks

CDAPI Operation ID: BondService_ListClassificationBondCategories
