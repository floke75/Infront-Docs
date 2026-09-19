---
title: "cdapiGetEquityIssuers"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.cdapiGetEquityIssuers"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > cdapiGetEquityIssuers"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.CoreDataAPI.cdapiGetEquityIssuers.html"
defines: ["cdapiGetEquityIssuers"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiGetEquityIssuersOptions", "SDK.InfrontSDK.CoreDataAPI.CdapiEquityIssuersData", "SDK.InfrontSDK.TypedDataRequest"]
---

# cdapiGetEquityIssuers

```ts
cdapiGetEquityIssuers(
    options: CdapiGetEquityIssuersOptions,
    onSuccess?: CoreDataRequestSuccessCallback<CdapiEquityIssuersData>,
    onError?: CoreDataRequestErrorCallback<CdapiEquityIssuersData>,
): TypedDataRequest<CoreDataResponseArray<CdapiEquityIssuersData>>
```

ListIssuers retrieves Issuers.

Calls GET /equity/issuers

#### Parameters

- options: [CdapiGetEquityIssuersOptions](./SDK.InfrontSDK.CoreDataAPI.CdapiGetEquityIssuersOptions.md)
- `Optional` onSuccess: CoreDataRequestSuccessCallback<[CdapiEquityIssuersData](./SDK.InfrontSDK.CoreDataAPI.CdapiEquityIssuersData.md)>
- `Optional` onError: CoreDataRequestErrorCallback<[CdapiEquityIssuersData](./SDK.InfrontSDK.CoreDataAPI.CdapiEquityIssuersData.md)>

#### Returns [TypedDataRequest](./SDK.InfrontSDK.TypedDataRequest.md)<CoreDataResponseArray<[CdapiEquityIssuersData](./SDK.InfrontSDK.CoreDataAPI.CdapiEquityIssuersData.md)>>

#### Remarks

CDAPI Operation ID: EquityService_ListIssuers
