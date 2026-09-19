---
title: "cdapiGetCommonIssuerSectors"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.cdapiGetCommonIssuerSectors"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > cdapiGetCommonIssuerSectors"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.CoreDataAPI.cdapiGetCommonIssuerSectors.html"
defines: ["cdapiGetCommonIssuerSectors"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiGetCommonIssuerSectorsOptions", "SDK.InfrontSDK.CoreDataAPI.CdapiCommonIssuerSectorData", "SDK.InfrontSDK.TypedDataRequest"]
---

# cdapiGetCommonIssuerSectors

```ts
cdapiGetCommonIssuerSectors(
    options: CdapiGetCommonIssuerSectorsOptions,
    onSuccess?: CoreDataRequestSuccessCallback<CdapiCommonIssuerSectorData>,
    onError?: CoreDataRequestErrorCallback<CdapiCommonIssuerSectorData>,
): TypedDataRequest<CoreDataResponseArray<CdapiCommonIssuerSectorData>>
```

ListIssuerSectors retrieves issuer sector.

Calls GET /common/issuer/sectors

#### Parameters

- options: [CdapiGetCommonIssuerSectorsOptions](./SDK.InfrontSDK.CoreDataAPI.CdapiGetCommonIssuerSectorsOptions.md)
- `Optional` onSuccess: CoreDataRequestSuccessCallback<[CdapiCommonIssuerSectorData](./SDK.InfrontSDK.CoreDataAPI.CdapiCommonIssuerSectorData.md)>
- `Optional` onError: CoreDataRequestErrorCallback<[CdapiCommonIssuerSectorData](./SDK.InfrontSDK.CoreDataAPI.CdapiCommonIssuerSectorData.md)>

#### Returns [TypedDataRequest](./SDK.InfrontSDK.TypedDataRequest.md)<CoreDataResponseArray<[CdapiCommonIssuerSectorData](./SDK.InfrontSDK.CoreDataAPI.CdapiCommonIssuerSectorData.md)>>

#### Remarks

CDAPI Operation ID: CommonService_ListIssuerSectors
