---
title: "cdapiGetEquityClassificationGicsSectors"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.cdapiGetEquityClassificationGicsSectors"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > cdapiGetEquityClassificationGicsSectors"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.CoreDataAPI.cdapiGetEquityClassificationGicsSectors.html"
defines: ["cdapiGetEquityClassificationGicsSectors"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiGetEquityClassificationGicsSectorsOptions", "SDK.InfrontSDK.CoreDataAPI.CdapiEquityGicsSectorsData", "SDK.InfrontSDK.TypedDataRequest"]
---

# cdapiGetEquityClassificationGicsSectors

```ts
cdapiGetEquityClassificationGicsSectors(
    options: CdapiGetEquityClassificationGicsSectorsOptions,
    onSuccess?: CoreDataRequestSuccessCallback<CdapiEquityGicsSectorsData>,
    onError?: CoreDataRequestErrorCallback<CdapiEquityGicsSectorsData>,
): TypedDataRequest<CoreDataResponseArray<CdapiEquityGicsSectorsData>>
```

ListClassificationGicsSectors retrieves gics sectors.

Calls GET /equity/classification/gics/sectors

#### Parameters

- options: [CdapiGetEquityClassificationGicsSectorsOptions](./SDK.InfrontSDK.CoreDataAPI.CdapiGetEquityClassificationGicsSectorsOptions.md)
- `Optional` onSuccess: CoreDataRequestSuccessCallback<[CdapiEquityGicsSectorsData](./SDK.InfrontSDK.CoreDataAPI.CdapiEquityGicsSectorsData.md)>
- `Optional` onError: CoreDataRequestErrorCallback<[CdapiEquityGicsSectorsData](./SDK.InfrontSDK.CoreDataAPI.CdapiEquityGicsSectorsData.md)>

#### Returns [TypedDataRequest](./SDK.InfrontSDK.TypedDataRequest.md)<CoreDataResponseArray<[CdapiEquityGicsSectorsData](./SDK.InfrontSDK.CoreDataAPI.CdapiEquityGicsSectorsData.md)>>

#### Remarks

CDAPI Operation ID: EquityService_ListClassificationGicsSectors
