---
title: "cdapiGetFundSectors"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.cdapiGetFundSectors"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > cdapiGetFundSectors"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.CoreDataAPI.cdapiGetFundSectors.html"
defines: ["cdapiGetFundSectors"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiGetFundSectorsOptions", "SDK.InfrontSDK.CoreDataAPI.CdapiFundSectorsData", "SDK.InfrontSDK.TypedDataRequest"]
---

# cdapiGetFundSectors

```ts
cdapiGetFundSectors(
    options: CdapiGetFundSectorsOptions,
    onSuccess?: CoreDataRequestSuccessCallback<CdapiFundSectorsData>,
    onError?: CoreDataRequestErrorCallback<CdapiFundSectorsData>,
): TypedDataRequest<CoreDataResponseArray<CdapiFundSectorsData>>
```

ListSectors

Calls GET /fund/sectors

#### Parameters

- options: [CdapiGetFundSectorsOptions](./SDK.InfrontSDK.CoreDataAPI.CdapiGetFundSectorsOptions.md)
- `Optional` onSuccess: CoreDataRequestSuccessCallback<[CdapiFundSectorsData](./SDK.InfrontSDK.CoreDataAPI.CdapiFundSectorsData.md)>
- `Optional` onError: CoreDataRequestErrorCallback<[CdapiFundSectorsData](./SDK.InfrontSDK.CoreDataAPI.CdapiFundSectorsData.md)>

#### Returns [TypedDataRequest](./SDK.InfrontSDK.TypedDataRequest.md)<CoreDataResponseArray<[CdapiFundSectorsData](./SDK.InfrontSDK.CoreDataAPI.CdapiFundSectorsData.md)>>

#### Remarks

CDAPI Operation ID: FundService_ListSectors
