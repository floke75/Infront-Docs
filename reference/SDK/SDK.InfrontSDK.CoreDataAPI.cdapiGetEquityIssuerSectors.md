---
title: "cdapiGetEquityIssuerSectors"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.cdapiGetEquityIssuerSectors"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > cdapiGetEquityIssuerSectors"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.CoreDataAPI.cdapiGetEquityIssuerSectors.html"
defines: ["cdapiGetEquityIssuerSectors"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiGetEquityIssuerSectorsOptions", "SDK.InfrontSDK.CoreDataAPI.CdapiEquityIssuerSectorData", "SDK.InfrontSDK.TypedDataRequest"]
---

# cdapiGetEquityIssuerSectors

```ts
cdapiGetEquityIssuerSectors(
    options: CdapiGetEquityIssuerSectorsOptions,
    onSuccess?: CoreDataRequestSuccessCallback<CdapiEquityIssuerSectorData>,
    onError?: CoreDataRequestErrorCallback<CdapiEquityIssuerSectorData>,
): TypedDataRequest<CoreDataResponseArray<CdapiEquityIssuerSectorData>>
```

ListIssuerSectors retrieves issuer sector.

Calls GET /equity/issuer/sectors

#### Parameters

- options: [CdapiGetEquityIssuerSectorsOptions](./SDK.InfrontSDK.CoreDataAPI.CdapiGetEquityIssuerSectorsOptions.md)
- `Optional` onSuccess: CoreDataRequestSuccessCallback<[CdapiEquityIssuerSectorData](./SDK.InfrontSDK.CoreDataAPI.CdapiEquityIssuerSectorData.md)>
- `Optional` onError: CoreDataRequestErrorCallback<[CdapiEquityIssuerSectorData](./SDK.InfrontSDK.CoreDataAPI.CdapiEquityIssuerSectorData.md)>

#### Returns [TypedDataRequest](./SDK.InfrontSDK.TypedDataRequest.md)<CoreDataResponseArray<[CdapiEquityIssuerSectorData](./SDK.InfrontSDK.CoreDataAPI.CdapiEquityIssuerSectorData.md)>>

#### Remarks

CDAPI Operation ID: EquityService_ListIssuerSectors
