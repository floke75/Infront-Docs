---
title: "cdapiGetEquityIndustries"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.cdapiGetEquityIndustries"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > cdapiGetEquityIndustries"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.CoreDataAPI.cdapiGetEquityIndustries.html"
defines: ["cdapiGetEquityIndustries"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiGetEquityIndustriesOptions", "SDK.InfrontSDK.CoreDataAPI.CdapiEquityIndustriessData", "SDK.InfrontSDK.TypedDataRequest"]
---

# cdapiGetEquityIndustries

```ts
cdapiGetEquityIndustries(
    options: CdapiGetEquityIndustriesOptions,
    onSuccess?: CoreDataRequestSuccessCallback<CdapiEquityIndustriessData>,
    onError?: CoreDataRequestErrorCallback<CdapiEquityIndustriessData>,
): TypedDataRequest<CoreDataResponseArray<CdapiEquityIndustriessData>>
```

ListIndustries retrieves Industries.

Calls GET /equity/industries

#### Parameters

- options: [CdapiGetEquityIndustriesOptions](./SDK.InfrontSDK.CoreDataAPI.CdapiGetEquityIndustriesOptions.md)
- `Optional` onSuccess: CoreDataRequestSuccessCallback<[CdapiEquityIndustriessData](./SDK.InfrontSDK.CoreDataAPI.CdapiEquityIndustriessData.md)>
- `Optional` onError: CoreDataRequestErrorCallback<[CdapiEquityIndustriessData](./SDK.InfrontSDK.CoreDataAPI.CdapiEquityIndustriessData.md)>

#### Returns [TypedDataRequest](./SDK.InfrontSDK.TypedDataRequest.md)<CoreDataResponseArray<[CdapiEquityIndustriessData](./SDK.InfrontSDK.CoreDataAPI.CdapiEquityIndustriessData.md)>>

#### Remarks

CDAPI Operation ID: EquityService_ListIndustries
