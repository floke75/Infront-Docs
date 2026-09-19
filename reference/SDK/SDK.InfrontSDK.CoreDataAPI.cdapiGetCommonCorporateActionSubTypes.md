---
title: "cdapiGetCommonCorporateActionSubTypes"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.cdapiGetCommonCorporateActionSubTypes"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > cdapiGetCommonCorporateActionSubTypes"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.CoreDataAPI.cdapiGetCommonCorporateActionSubTypes.html"
defines: ["cdapiGetCommonCorporateActionSubTypes"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiGetCommonCorporateActionSubTypesOptions", "SDK.InfrontSDK.CoreDataAPI.CdapiCommonListCorporateActionSubTypesData", "SDK.InfrontSDK.TypedDataRequest"]
---

# cdapiGetCommonCorporateActionSubTypes

```ts
cdapiGetCommonCorporateActionSubTypes(
    options: CdapiGetCommonCorporateActionSubTypesOptions,
    onSuccess?: CoreDataRequestSuccessCallback<
        CdapiCommonListCorporateActionSubTypesData,
    >,
    onError?: CoreDataRequestErrorCallback<
        CdapiCommonListCorporateActionSubTypesData,
    >,
): TypedDataRequest<
    CoreDataResponseArray<CdapiCommonListCorporateActionSubTypesData>,
>
```

ListCorporateActionSubTypes retrieves sub_types of corporate actions.

Calls GET /common/corporate-action/sub-types

#### Parameters

- options: [CdapiGetCommonCorporateActionSubTypesOptions](./SDK.InfrontSDK.CoreDataAPI.CdapiGetCommonCorporateActionSubTypesOptions.md)
- `Optional` onSuccess: CoreDataRequestSuccessCallback<[CdapiCommonListCorporateActionSubTypesData](./SDK.InfrontSDK.CoreDataAPI.CdapiCommonListCorporateActionSubTypesData.md)>
- `Optional` onError: CoreDataRequestErrorCallback<[CdapiCommonListCorporateActionSubTypesData](./SDK.InfrontSDK.CoreDataAPI.CdapiCommonListCorporateActionSubTypesData.md)>

#### Returns [TypedDataRequest](./SDK.InfrontSDK.TypedDataRequest.md)<
CoreDataResponseArray<[CdapiCommonListCorporateActionSubTypesData](./SDK.InfrontSDK.CoreDataAPI.CdapiCommonListCorporateActionSubTypesData.md)>,
>

#### Remarks

CDAPI Operation ID: CommonService_ListCorporateActionSubTypes
