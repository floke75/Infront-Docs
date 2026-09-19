---
title: "cdapiGetCommonIssuerSubSectors"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.cdapiGetCommonIssuerSubSectors"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > cdapiGetCommonIssuerSubSectors"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.CoreDataAPI.cdapiGetCommonIssuerSubSectors.html"
defines: ["cdapiGetCommonIssuerSubSectors"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiGetCommonIssuerSubSectorsOptions", "SDK.InfrontSDK.CoreDataAPI.CdapiCommonIssuerSubSectorData", "SDK.InfrontSDK.TypedDataRequest"]
---

# cdapiGetCommonIssuerSubSectors

```ts
cdapiGetCommonIssuerSubSectors(
    options: CdapiGetCommonIssuerSubSectorsOptions,
    onSuccess?: CoreDataRequestSuccessCallback<CdapiCommonIssuerSubSectorData>,
    onError?: CoreDataRequestErrorCallback<CdapiCommonIssuerSubSectorData>,
): TypedDataRequest<CoreDataResponseArray<CdapiCommonIssuerSubSectorData>>
```

ListIssuerSubSectors retrieves issuer sub-sector.

Calls GET /common/issuer/sub-sectors

#### Parameters

- options: [CdapiGetCommonIssuerSubSectorsOptions](./SDK.InfrontSDK.CoreDataAPI.CdapiGetCommonIssuerSubSectorsOptions.md)
- `Optional` onSuccess: CoreDataRequestSuccessCallback<[CdapiCommonIssuerSubSectorData](./SDK.InfrontSDK.CoreDataAPI.CdapiCommonIssuerSubSectorData.md)>
- `Optional` onError: CoreDataRequestErrorCallback<[CdapiCommonIssuerSubSectorData](./SDK.InfrontSDK.CoreDataAPI.CdapiCommonIssuerSubSectorData.md)>

#### Returns [TypedDataRequest](./SDK.InfrontSDK.TypedDataRequest.md)<CoreDataResponseArray<[CdapiCommonIssuerSubSectorData](./SDK.InfrontSDK.CoreDataAPI.CdapiCommonIssuerSubSectorData.md)>>

#### Remarks

CDAPI Operation ID: CommonService_ListIssuerSubSectors
