---
title: "cdapiGetEquityClassificationGicsSubIndustries"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.cdapiGetEquityClassificationGicsSubIndustries"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > cdapiGetEquityClassificationGicsSubIndustries"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.CoreDataAPI.cdapiGetEquityClassificationGicsSubIndustries.html"
defines: ["cdapiGetEquityClassificationGicsSubIndustries"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiGetEquityClassificationGicsSubIndustriesOptions", "SDK.InfrontSDK.CoreDataAPI.CdapiEquityGicsSubIndustriesData", "SDK.InfrontSDK.TypedDataRequest"]
---

# cdapiGetEquityClassificationGicsSubIndustries

```ts
cdapiGetEquityClassificationGicsSubIndustries(
    options: CdapiGetEquityClassificationGicsSubIndustriesOptions,
    onSuccess?: CoreDataRequestSuccessCallback<
        CdapiEquityGicsSubIndustriesData,
    >,
    onError?: CoreDataRequestErrorCallback<CdapiEquityGicsSubIndustriesData>,
): TypedDataRequest<CoreDataResponseArray<CdapiEquityGicsSubIndustriesData>>
```

ListClassificationGicsSubIndustries retrieves gics sub-industries.

Calls GET /equity/classification/gics/sub-industries

#### Parameters

- options: [CdapiGetEquityClassificationGicsSubIndustriesOptions](./SDK.InfrontSDK.CoreDataAPI.CdapiGetEquityClassificationGicsSubIndustriesOptions.md)
- `Optional` onSuccess: CoreDataRequestSuccessCallback<[CdapiEquityGicsSubIndustriesData](./SDK.InfrontSDK.CoreDataAPI.CdapiEquityGicsSubIndustriesData.md)>
- `Optional` onError: CoreDataRequestErrorCallback<[CdapiEquityGicsSubIndustriesData](./SDK.InfrontSDK.CoreDataAPI.CdapiEquityGicsSubIndustriesData.md)>

#### Returns [TypedDataRequest](./SDK.InfrontSDK.TypedDataRequest.md)<CoreDataResponseArray<[CdapiEquityGicsSubIndustriesData](./SDK.InfrontSDK.CoreDataAPI.CdapiEquityGicsSubIndustriesData.md)>>

#### Remarks

CDAPI Operation ID: EquityService_ListClassificationGicsSubIndustries
