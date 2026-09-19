---
title: "cdapiGetFxrateCrossrates"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.cdapiGetFxrateCrossrates"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > cdapiGetFxrateCrossrates"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.CoreDataAPI.cdapiGetFxrateCrossrates.html"
defines: ["cdapiGetFxrateCrossrates"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiGetFxrateCrossratesOptions", "SDK.InfrontSDK.CoreDataAPI.CdapiFxrateCrossrateData", "SDK.InfrontSDK.TypedDataRequest"]
---

# cdapiGetFxrateCrossrates

```ts
cdapiGetFxrateCrossrates(
    options: CdapiGetFxrateCrossratesOptions,
    onSuccess?: CoreDataRequestSuccessCallback<CdapiFxrateCrossrateData>,
    onError?: CoreDataRequestErrorCallback<CdapiFxrateCrossrateData>,
): TypedDataRequest<CoreDataResponseArray<CdapiFxrateCrossrateData>>
```

ListCrossrates retrieves Listings that could be filtered by various
attributes.

Calls GET /fxrate/crossrates

#### Parameters

- options: [CdapiGetFxrateCrossratesOptions](./SDK.InfrontSDK.CoreDataAPI.CdapiGetFxrateCrossratesOptions.md)
- `Optional` onSuccess: CoreDataRequestSuccessCallback<[CdapiFxrateCrossrateData](./SDK.InfrontSDK.CoreDataAPI.CdapiFxrateCrossrateData.md)>
- `Optional` onError: CoreDataRequestErrorCallback<[CdapiFxrateCrossrateData](./SDK.InfrontSDK.CoreDataAPI.CdapiFxrateCrossrateData.md)>

#### Returns [TypedDataRequest](./SDK.InfrontSDK.TypedDataRequest.md)<CoreDataResponseArray<[CdapiFxrateCrossrateData](./SDK.InfrontSDK.CoreDataAPI.CdapiFxrateCrossrateData.md)>>

#### Remarks

CDAPI Operation ID: FxrateService_ListCrossrates
