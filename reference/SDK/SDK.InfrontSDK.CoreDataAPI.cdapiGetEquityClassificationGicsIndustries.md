---
title: "cdapiGetEquityClassificationGicsIndustries"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.cdapiGetEquityClassificationGicsIndustries"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > cdapiGetEquityClassificationGicsIndustries"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.CoreDataAPI.cdapiGetEquityClassificationGicsIndustries.html"
defines: ["cdapiGetEquityClassificationGicsIndustries"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiGetEquityClassificationGicsIndustriesOptions", "SDK.InfrontSDK.CoreDataAPI.CdapiEquityGicsIndustriesData", "SDK.InfrontSDK.TypedDataRequest"]
---

# cdapiGetEquityClassificationGicsIndustries

```ts
cdapiGetEquityClassificationGicsIndustries(
    options: CdapiGetEquityClassificationGicsIndustriesOptions,
    onSuccess?: CoreDataRequestSuccessCallback<CdapiEquityGicsIndustriesData>,
    onError?: CoreDataRequestErrorCallback<CdapiEquityGicsIndustriesData>,
): TypedDataRequest<CoreDataResponseArray<CdapiEquityGicsIndustriesData>>
```

ListClassificationGicsIndustries retrieves gics industries.

Calls GET /equity/classification/gics/industries

#### Parameters

- options: [CdapiGetEquityClassificationGicsIndustriesOptions](./SDK.InfrontSDK.CoreDataAPI.CdapiGetEquityClassificationGicsIndustriesOptions.md)
- `Optional` onSuccess: CoreDataRequestSuccessCallback<[CdapiEquityGicsIndustriesData](./SDK.InfrontSDK.CoreDataAPI.CdapiEquityGicsIndustriesData.md)>
- `Optional` onError: CoreDataRequestErrorCallback<[CdapiEquityGicsIndustriesData](./SDK.InfrontSDK.CoreDataAPI.CdapiEquityGicsIndustriesData.md)>

#### Returns [TypedDataRequest](./SDK.InfrontSDK.TypedDataRequest.md)<CoreDataResponseArray<[CdapiEquityGicsIndustriesData](./SDK.InfrontSDK.CoreDataAPI.CdapiEquityGicsIndustriesData.md)>>

#### Remarks

CDAPI Operation ID: EquityService_ListClassificationGicsIndustries
