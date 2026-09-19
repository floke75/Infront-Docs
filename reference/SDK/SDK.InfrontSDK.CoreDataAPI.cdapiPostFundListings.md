---
title: "cdapiPostFundListings"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.cdapiPostFundListings"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > cdapiPostFundListings"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.CoreDataAPI.cdapiPostFundListings.html"
defines: ["cdapiPostFundListings"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiPostFundListingsOptions", "SDK.InfrontSDK.CoreDataAPI.CdapiFundListingsData", "SDK.InfrontSDK.TypedDataRequest"]
---

# cdapiPostFundListings

```ts
cdapiPostFundListings(
    options: CdapiPostFundListingsOptions,
    onSuccess?: CoreDataRequestSuccessCallback<CdapiFundListingsData>,
    onError?: CoreDataRequestErrorCallback<CdapiFundListingsData>,
): TypedDataRequest<CoreDataResponseArray<CdapiFundListingsData>>
```

ListListings

Calls POST /fund/listings

#### Parameters

- options: [CdapiPostFundListingsOptions](./SDK.InfrontSDK.CoreDataAPI.CdapiPostFundListingsOptions.md)
- `Optional` onSuccess: CoreDataRequestSuccessCallback<[CdapiFundListingsData](./SDK.InfrontSDK.CoreDataAPI.CdapiFundListingsData.md)>
- `Optional` onError: CoreDataRequestErrorCallback<[CdapiFundListingsData](./SDK.InfrontSDK.CoreDataAPI.CdapiFundListingsData.md)>

#### Returns [TypedDataRequest](./SDK.InfrontSDK.TypedDataRequest.md)<CoreDataResponseArray<[CdapiFundListingsData](./SDK.InfrontSDK.CoreDataAPI.CdapiFundListingsData.md)>>

#### Remarks

CDAPI Operation ID: FundService_ListListings_2
