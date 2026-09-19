---
title: "cdapiGetEquityIssuerSubSectors"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.cdapiGetEquityIssuerSubSectors"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > cdapiGetEquityIssuerSubSectors"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.CoreDataAPI.cdapiGetEquityIssuerSubSectors.html"
defines: ["cdapiGetEquityIssuerSubSectors"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiGetEquityIssuerSubSectorsOptions", "SDK.InfrontSDK.CoreDataAPI.CdapiEquityIssuerSubSectorData", "SDK.InfrontSDK.TypedDataRequest"]
---

# cdapiGetEquityIssuerSubSectors

```ts
cdapiGetEquityIssuerSubSectors(
    options: CdapiGetEquityIssuerSubSectorsOptions,
    onSuccess?: CoreDataRequestSuccessCallback<CdapiEquityIssuerSubSectorData>,
    onError?: CoreDataRequestErrorCallback<CdapiEquityIssuerSubSectorData>,
): TypedDataRequest<CoreDataResponseArray<CdapiEquityIssuerSubSectorData>>
```

ListIssuerSubSectors retrieves issuer sub-sector.

Calls GET /equity/issuer/sub-sectors

#### Parameters

- options: [CdapiGetEquityIssuerSubSectorsOptions](./SDK.InfrontSDK.CoreDataAPI.CdapiGetEquityIssuerSubSectorsOptions.md)
- `Optional` onSuccess: CoreDataRequestSuccessCallback<[CdapiEquityIssuerSubSectorData](./SDK.InfrontSDK.CoreDataAPI.CdapiEquityIssuerSubSectorData.md)>
- `Optional` onError: CoreDataRequestErrorCallback<[CdapiEquityIssuerSubSectorData](./SDK.InfrontSDK.CoreDataAPI.CdapiEquityIssuerSubSectorData.md)>

#### Returns [TypedDataRequest](./SDK.InfrontSDK.TypedDataRequest.md)<CoreDataResponseArray<[CdapiEquityIssuerSubSectorData](./SDK.InfrontSDK.CoreDataAPI.CdapiEquityIssuerSubSectorData.md)>>

#### Remarks

CDAPI Operation ID: EquityService_ListIssuerSubSectors
