---
title: "cdapiGetFundListings"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.cdapiGetFundListings"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > cdapiGetFundListings"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.CoreDataAPI.cdapiGetFundListings.html"
defines: ["cdapiGetFundListings"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiGetFundListingsOptions", "SDK.InfrontSDK.CoreDataAPI.CdapiFundListingsData", "SDK.InfrontSDK.TypedDataRequest"]
---

# cdapiGetFundListings

```ts
cdapiGetFundListings(
    options: CdapiGetFundListingsOptions,
    onSuccess?: CoreDataRequestSuccessCallback<CdapiFundListingsData>,
    onError?: CoreDataRequestErrorCallback<CdapiFundListingsData>,
): TypedDataRequest<CoreDataResponseArray<CdapiFundListingsData>>
```

ListListings

Calls GET /fund/listings

#### Parameters

- options: [CdapiGetFundListingsOptions](./SDK.InfrontSDK.CoreDataAPI.CdapiGetFundListingsOptions.md)
- `Optional` onSuccess: CoreDataRequestSuccessCallback<[CdapiFundListingsData](./SDK.InfrontSDK.CoreDataAPI.CdapiFundListingsData.md)>
- `Optional` onError: CoreDataRequestErrorCallback<[CdapiFundListingsData](./SDK.InfrontSDK.CoreDataAPI.CdapiFundListingsData.md)>

#### Returns [TypedDataRequest](./SDK.InfrontSDK.TypedDataRequest.md)<CoreDataResponseArray<[CdapiFundListingsData](./SDK.InfrontSDK.CoreDataAPI.CdapiFundListingsData.md)>>

#### Remarks

CDAPI Operation ID: FundService_ListListings
