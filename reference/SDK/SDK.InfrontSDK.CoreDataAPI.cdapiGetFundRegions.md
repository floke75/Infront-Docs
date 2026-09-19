---
title: "cdapiGetFundRegions"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.cdapiGetFundRegions"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > cdapiGetFundRegions"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.CoreDataAPI.cdapiGetFundRegions.html"
defines: ["cdapiGetFundRegions"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiGetFundRegionsOptions", "SDK.InfrontSDK.CoreDataAPI.CdapiFundRegionsData", "SDK.InfrontSDK.TypedDataRequest"]
---

# cdapiGetFundRegions

```ts
cdapiGetFundRegions(
    options: CdapiGetFundRegionsOptions,
    onSuccess?: CoreDataRequestSuccessCallback<CdapiFundRegionsData>,
    onError?: CoreDataRequestErrorCallback<CdapiFundRegionsData>,
): TypedDataRequest<CoreDataResponseArray<CdapiFundRegionsData>>
```

ListRegions

Calls GET /fund/regions

#### Parameters

- options: [CdapiGetFundRegionsOptions](./SDK.InfrontSDK.CoreDataAPI.CdapiGetFundRegionsOptions.md)
- `Optional` onSuccess: CoreDataRequestSuccessCallback<[CdapiFundRegionsData](./SDK.InfrontSDK.CoreDataAPI.CdapiFundRegionsData.md)>
- `Optional` onError: CoreDataRequestErrorCallback<[CdapiFundRegionsData](./SDK.InfrontSDK.CoreDataAPI.CdapiFundRegionsData.md)>

#### Returns [TypedDataRequest](./SDK.InfrontSDK.TypedDataRequest.md)<CoreDataResponseArray<[CdapiFundRegionsData](./SDK.InfrontSDK.CoreDataAPI.CdapiFundRegionsData.md)>>

#### Remarks

CDAPI Operation ID: FundService_ListRegions
