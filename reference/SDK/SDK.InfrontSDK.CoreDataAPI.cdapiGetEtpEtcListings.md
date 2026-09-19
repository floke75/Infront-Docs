---
title: "cdapiGetEtpEtcListings"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.cdapiGetEtpEtcListings"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > cdapiGetEtpEtcListings"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.CoreDataAPI.cdapiGetEtpEtcListings.html"
defines: ["cdapiGetEtpEtcListings"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiGetEtpEtcListingsOptions", "SDK.InfrontSDK.CoreDataAPI.CdapiEtpListingsEtcData", "SDK.InfrontSDK.TypedDataRequest"]
---

# cdapiGetEtpEtcListings

```ts
cdapiGetEtpEtcListings(
    options: CdapiGetEtpEtcListingsOptions,
    onSuccess?: CoreDataRequestSuccessCallback<CdapiEtpListingsEtcData>,
    onError?: CoreDataRequestErrorCallback<CdapiEtpListingsEtcData>,
): TypedDataRequest<CoreDataResponseArray<CdapiEtpListingsEtcData>>
```

ListListings retrieves Listings for ETCs.

Calls GET /etp/etc/listings

#### Parameters

- options: [CdapiGetEtpEtcListingsOptions](./SDK.InfrontSDK.CoreDataAPI.CdapiGetEtpEtcListingsOptions.md)
- `Optional` onSuccess: CoreDataRequestSuccessCallback<[CdapiEtpListingsEtcData](./SDK.InfrontSDK.CoreDataAPI.CdapiEtpListingsEtcData.md)>
- `Optional` onError: CoreDataRequestErrorCallback<[CdapiEtpListingsEtcData](./SDK.InfrontSDK.CoreDataAPI.CdapiEtpListingsEtcData.md)>

#### Returns [TypedDataRequest](./SDK.InfrontSDK.TypedDataRequest.md)<CoreDataResponseArray<[CdapiEtpListingsEtcData](./SDK.InfrontSDK.CoreDataAPI.CdapiEtpListingsEtcData.md)>>

#### Remarks

CDAPI Operation ID: EtcService_ListListings
