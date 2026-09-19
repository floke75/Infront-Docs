---
title: "cdapiGetCommonCorporateActionTypes"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.cdapiGetCommonCorporateActionTypes"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > cdapiGetCommonCorporateActionTypes"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.CoreDataAPI.cdapiGetCommonCorporateActionTypes.html"
defines: ["cdapiGetCommonCorporateActionTypes"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiGetCommonCorporateActionTypesOptions", "SDK.InfrontSDK.CoreDataAPI.CdapiCommonListCorporateActionTypesData", "SDK.InfrontSDK.TypedDataRequest"]
---

# cdapiGetCommonCorporateActionTypes

```ts
cdapiGetCommonCorporateActionTypes(
    options: CdapiGetCommonCorporateActionTypesOptions,
    onSuccess?: CoreDataRequestSuccessCallback<
        CdapiCommonListCorporateActionTypesData,
    >,
    onError?: CoreDataRequestErrorCallback<
        CdapiCommonListCorporateActionTypesData,
    >,
): TypedDataRequest<
    CoreDataResponseArray<CdapiCommonListCorporateActionTypesData>,
>
```

ListCorporateActionTypes retrieves types of corporate actions.

Calls GET /common/corporate-action/types

#### Parameters

- options: [CdapiGetCommonCorporateActionTypesOptions](./SDK.InfrontSDK.CoreDataAPI.CdapiGetCommonCorporateActionTypesOptions.md)
- `Optional` onSuccess: CoreDataRequestSuccessCallback<[CdapiCommonListCorporateActionTypesData](./SDK.InfrontSDK.CoreDataAPI.CdapiCommonListCorporateActionTypesData.md)>
- `Optional` onError: CoreDataRequestErrorCallback<[CdapiCommonListCorporateActionTypesData](./SDK.InfrontSDK.CoreDataAPI.CdapiCommonListCorporateActionTypesData.md)>

#### Returns [TypedDataRequest](./SDK.InfrontSDK.TypedDataRequest.md)<CoreDataResponseArray<[CdapiCommonListCorporateActionTypesData](./SDK.InfrontSDK.CoreDataAPI.CdapiCommonListCorporateActionTypesData.md)>>

#### Remarks

CDAPI Operation ID: CommonService_ListCorporateActionTypes
