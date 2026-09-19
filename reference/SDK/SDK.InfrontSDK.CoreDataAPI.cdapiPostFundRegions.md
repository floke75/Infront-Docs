---
title: "cdapiPostFundRegions"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.cdapiPostFundRegions"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > cdapiPostFundRegions"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.CoreDataAPI.cdapiPostFundRegions.html"
defines: ["cdapiPostFundRegions"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiPostFundRegionsOptions", "SDK.InfrontSDK.CoreDataAPI.CdapiFundRegionsData", "SDK.InfrontSDK.TypedDataRequest"]
---

# cdapiPostFundRegions

```ts
cdapiPostFundRegions(
    options: CdapiPostFundRegionsOptions,
    onSuccess?: CoreDataRequestSuccessCallback<CdapiFundRegionsData>,
    onError?: CoreDataRequestErrorCallback<CdapiFundRegionsData>,
): TypedDataRequest<CoreDataResponseArray<CdapiFundRegionsData>>
```

ListRegions

Calls POST /fund/regions

#### Parameters

- options: [CdapiPostFundRegionsOptions](./SDK.InfrontSDK.CoreDataAPI.CdapiPostFundRegionsOptions.md)
- `Optional` onSuccess: CoreDataRequestSuccessCallback<[CdapiFundRegionsData](./SDK.InfrontSDK.CoreDataAPI.CdapiFundRegionsData.md)>
- `Optional` onError: CoreDataRequestErrorCallback<[CdapiFundRegionsData](./SDK.InfrontSDK.CoreDataAPI.CdapiFundRegionsData.md)>

#### Returns [TypedDataRequest](./SDK.InfrontSDK.TypedDataRequest.md)<CoreDataResponseArray<[CdapiFundRegionsData](./SDK.InfrontSDK.CoreDataAPI.CdapiFundRegionsData.md)>>

#### Remarks

CDAPI Operation ID: FundService_ListRegions_2
