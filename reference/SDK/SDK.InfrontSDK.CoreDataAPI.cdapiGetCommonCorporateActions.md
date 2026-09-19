---
title: "cdapiGetCommonCorporateActions"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.cdapiGetCommonCorporateActions"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > cdapiGetCommonCorporateActions"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.CoreDataAPI.cdapiGetCommonCorporateActions.html"
defines: ["cdapiGetCommonCorporateActions"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiGetCommonCorporateActionsOptions", "SDK.InfrontSDK.CoreDataAPI.CdapiCommonListCorporateActionsData", "SDK.InfrontSDK.TypedDataRequest"]
---

# cdapiGetCommonCorporateActions

```ts
cdapiGetCommonCorporateActions(
    options: CdapiGetCommonCorporateActionsOptions,
    onSuccess?: CoreDataRequestSuccessCallback<
        CdapiCommonListCorporateActionsData,
    >,
    onError?: CoreDataRequestErrorCallback<CdapiCommonListCorporateActionsData>,
): TypedDataRequest<
    CoreDataResponseArray<CdapiCommonListCorporateActionsData>,
>
```

ListCorporateActions retrieves corporate actions. Different sources have different focus, coverage and scope. In parallel to corporate actions there is also calendar data from sources S&P and Infront available on DataManager Request/Response via service events/information.

Calls GET /common/corporate-actions

#### Parameters

- options: [CdapiGetCommonCorporateActionsOptions](./SDK.InfrontSDK.CoreDataAPI.CdapiGetCommonCorporateActionsOptions.md)
- `Optional` onSuccess: CoreDataRequestSuccessCallback<[CdapiCommonListCorporateActionsData](./SDK.InfrontSDK.CoreDataAPI.CdapiCommonListCorporateActionsData.md)>
- `Optional` onError: CoreDataRequestErrorCallback<[CdapiCommonListCorporateActionsData](./SDK.InfrontSDK.CoreDataAPI.CdapiCommonListCorporateActionsData.md)>

#### Returns [TypedDataRequest](./SDK.InfrontSDK.TypedDataRequest.md)<CoreDataResponseArray<[CdapiCommonListCorporateActionsData](./SDK.InfrontSDK.CoreDataAPI.CdapiCommonListCorporateActionsData.md)>>

#### Remarks

CDAPI Operation ID: CommonService_ListCorporateActions
