---
title: "cdapiGetFundCompositionTypes"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.cdapiGetFundCompositionTypes"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > cdapiGetFundCompositionTypes"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.CoreDataAPI.cdapiGetFundCompositionTypes.html"
defines: ["cdapiGetFundCompositionTypes"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiGetFundCompositionTypesOptions", "SDK.InfrontSDK.CoreDataAPI.CdapiFundCompositionTypeData", "SDK.InfrontSDK.TypedDataRequest"]
---

# cdapiGetFundCompositionTypes

```ts
cdapiGetFundCompositionTypes(
    options: CdapiGetFundCompositionTypesOptions,
    onSuccess?: CoreDataRequestSuccessCallback<CdapiFundCompositionTypeData>,
    onError?: CoreDataRequestErrorCallback<CdapiFundCompositionTypeData>,
): TypedDataRequest<CoreDataResponseArray<CdapiFundCompositionTypeData>>
```

ListCompositionTypes

Calls GET /fund/composition/types

#### Parameters

- options: [CdapiGetFundCompositionTypesOptions](./SDK.InfrontSDK.CoreDataAPI.CdapiGetFundCompositionTypesOptions.md)
- `Optional` onSuccess: CoreDataRequestSuccessCallback<[CdapiFundCompositionTypeData](./SDK.InfrontSDK.CoreDataAPI.CdapiFundCompositionTypeData.md)>
- `Optional` onError: CoreDataRequestErrorCallback<[CdapiFundCompositionTypeData](./SDK.InfrontSDK.CoreDataAPI.CdapiFundCompositionTypeData.md)>

#### Returns [TypedDataRequest](./SDK.InfrontSDK.TypedDataRequest.md)<CoreDataResponseArray<[CdapiFundCompositionTypeData](./SDK.InfrontSDK.CoreDataAPI.CdapiFundCompositionTypeData.md)>>

#### Remarks

CDAPI Operation ID: FundService_ListCompositionTypes
