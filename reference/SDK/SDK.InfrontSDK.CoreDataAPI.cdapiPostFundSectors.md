---
title: "cdapiPostFundSectors"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.cdapiPostFundSectors"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > cdapiPostFundSectors"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.CoreDataAPI.cdapiPostFundSectors.html"
defines: ["cdapiPostFundSectors"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiPostFundSectorsOptions", "SDK.InfrontSDK.CoreDataAPI.CdapiFundSectorsData", "SDK.InfrontSDK.TypedDataRequest"]
---

# cdapiPostFundSectors

```ts
cdapiPostFundSectors(
    options: CdapiPostFundSectorsOptions,
    onSuccess?: CoreDataRequestSuccessCallback<CdapiFundSectorsData>,
    onError?: CoreDataRequestErrorCallback<CdapiFundSectorsData>,
): TypedDataRequest<CoreDataResponseArray<CdapiFundSectorsData>>
```

ListSectors

Calls POST /fund/sectors

#### Parameters

- options: [CdapiPostFundSectorsOptions](./SDK.InfrontSDK.CoreDataAPI.CdapiPostFundSectorsOptions.md)
- `Optional` onSuccess: CoreDataRequestSuccessCallback<[CdapiFundSectorsData](./SDK.InfrontSDK.CoreDataAPI.CdapiFundSectorsData.md)>
- `Optional` onError: CoreDataRequestErrorCallback<[CdapiFundSectorsData](./SDK.InfrontSDK.CoreDataAPI.CdapiFundSectorsData.md)>

#### Returns [TypedDataRequest](./SDK.InfrontSDK.TypedDataRequest.md)<CoreDataResponseArray<[CdapiFundSectorsData](./SDK.InfrontSDK.CoreDataAPI.CdapiFundSectorsData.md)>>

#### Remarks

CDAPI Operation ID: FundService_ListSectors_2
