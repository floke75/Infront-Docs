---
title: "cdapiGetEquityAdvisors"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.cdapiGetEquityAdvisors"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > cdapiGetEquityAdvisors"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.CoreDataAPI.cdapiGetEquityAdvisors.html"
defines: ["cdapiGetEquityAdvisors"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiGetEquityAdvisorsOptions", "SDK.InfrontSDK.CoreDataAPI.CdapiEquityAdvisorsData", "SDK.InfrontSDK.TypedDataRequest"]
---

# cdapiGetEquityAdvisors

```ts
cdapiGetEquityAdvisors(
    options: CdapiGetEquityAdvisorsOptions,
    onSuccess?: CoreDataRequestSuccessCallback<CdapiEquityAdvisorsData>,
    onError?: CoreDataRequestErrorCallback<CdapiEquityAdvisorsData>,
): TypedDataRequest<CoreDataResponseArray<CdapiEquityAdvisorsData>>
```

ListAdvisors retrieves company-data (basic, position, shareholder)

Calls GET /equity/advisors

#### Parameters

- options: [CdapiGetEquityAdvisorsOptions](./SDK.InfrontSDK.CoreDataAPI.CdapiGetEquityAdvisorsOptions.md)
- `Optional` onSuccess: CoreDataRequestSuccessCallback<[CdapiEquityAdvisorsData](./SDK.InfrontSDK.CoreDataAPI.CdapiEquityAdvisorsData.md)>
- `Optional` onError: CoreDataRequestErrorCallback<[CdapiEquityAdvisorsData](./SDK.InfrontSDK.CoreDataAPI.CdapiEquityAdvisorsData.md)>

#### Returns [TypedDataRequest](./SDK.InfrontSDK.TypedDataRequest.md)<CoreDataResponseArray<[CdapiEquityAdvisorsData](./SDK.InfrontSDK.CoreDataAPI.CdapiEquityAdvisorsData.md)>>

#### Remarks

CDAPI Operation ID: EquityService_ListAdvisors
