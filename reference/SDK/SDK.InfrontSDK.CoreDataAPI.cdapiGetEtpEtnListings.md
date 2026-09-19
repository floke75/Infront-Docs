---
title: "cdapiGetEtpEtnListings"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.cdapiGetEtpEtnListings"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > cdapiGetEtpEtnListings"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.CoreDataAPI.cdapiGetEtpEtnListings.html"
defines: ["cdapiGetEtpEtnListings"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiGetEtpEtnListingsOptions", "SDK.InfrontSDK.CoreDataAPI.CdapiEtpListingsEtnData", "SDK.InfrontSDK.TypedDataRequest"]
---

# cdapiGetEtpEtnListings

```ts
cdapiGetEtpEtnListings(
    options: CdapiGetEtpEtnListingsOptions,
    onSuccess?: CoreDataRequestSuccessCallback<CdapiEtpListingsEtnData>,
    onError?: CoreDataRequestErrorCallback<CdapiEtpListingsEtnData>,
): TypedDataRequest<CoreDataResponseArray<CdapiEtpListingsEtnData>>
```

ListListings retrieves Listings for ETNs.

Calls GET /etp/etn/listings

#### Parameters

- options: [CdapiGetEtpEtnListingsOptions](./SDK.InfrontSDK.CoreDataAPI.CdapiGetEtpEtnListingsOptions.md)
- `Optional` onSuccess: CoreDataRequestSuccessCallback<[CdapiEtpListingsEtnData](./SDK.InfrontSDK.CoreDataAPI.CdapiEtpListingsEtnData.md)>
- `Optional` onError: CoreDataRequestErrorCallback<[CdapiEtpListingsEtnData](./SDK.InfrontSDK.CoreDataAPI.CdapiEtpListingsEtnData.md)>

#### Returns [TypedDataRequest](./SDK.InfrontSDK.TypedDataRequest.md)<CoreDataResponseArray<[CdapiEtpListingsEtnData](./SDK.InfrontSDK.CoreDataAPI.CdapiEtpListingsEtnData.md)>>

#### Remarks

CDAPI Operation ID: EtnService_ListListings
