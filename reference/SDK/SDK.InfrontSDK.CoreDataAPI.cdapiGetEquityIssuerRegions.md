---
title: "cdapiGetEquityIssuerRegions"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.cdapiGetEquityIssuerRegions"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > cdapiGetEquityIssuerRegions"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.CoreDataAPI.cdapiGetEquityIssuerRegions.html"
defines: ["cdapiGetEquityIssuerRegions"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiGetEquityIssuerRegionsOptions", "SDK.InfrontSDK.CoreDataAPI.CdapiCommonIssuerRegionsData", "SDK.InfrontSDK.TypedDataRequest"]
---

# cdapiGetEquityIssuerRegions

```ts
cdapiGetEquityIssuerRegions(
    options: CdapiGetEquityIssuerRegionsOptions,
    onSuccess?: CoreDataRequestSuccessCallback<CdapiCommonIssuerRegionsData>,
    onError?: CoreDataRequestErrorCallback<CdapiCommonIssuerRegionsData>,
): TypedDataRequest<CoreDataResponseArray<CdapiCommonIssuerRegionsData>>
```

ListIssuerRegions retrieves issuer region.

Calls GET /equity/issuer/regions

#### Parameters

- options: [CdapiGetEquityIssuerRegionsOptions](./SDK.InfrontSDK.CoreDataAPI.CdapiGetEquityIssuerRegionsOptions.md)
- `Optional` onSuccess: CoreDataRequestSuccessCallback<[CdapiCommonIssuerRegionsData](./SDK.InfrontSDK.CoreDataAPI.CdapiCommonIssuerRegionsData.md)>
- `Optional` onError: CoreDataRequestErrorCallback<[CdapiCommonIssuerRegionsData](./SDK.InfrontSDK.CoreDataAPI.CdapiCommonIssuerRegionsData.md)>

#### Returns [TypedDataRequest](./SDK.InfrontSDK.TypedDataRequest.md)<CoreDataResponseArray<[CdapiCommonIssuerRegionsData](./SDK.InfrontSDK.CoreDataAPI.CdapiCommonIssuerRegionsData.md)>>

#### Remarks

CDAPI Operation ID: EquityService_ListIssuerRegions
