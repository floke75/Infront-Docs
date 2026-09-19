---
title: "cdapiGetCommonFeeds"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.cdapiGetCommonFeeds"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > cdapiGetCommonFeeds"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.CoreDataAPI.cdapiGetCommonFeeds.html"
defines: ["cdapiGetCommonFeeds"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiGetCommonFeedsOptions", "SDK.InfrontSDK.CoreDataAPI.CdapiCommonFeedsData", "SDK.InfrontSDK.TypedDataRequest"]
---

# cdapiGetCommonFeeds

```ts
cdapiGetCommonFeeds(
    options: CdapiGetCommonFeedsOptions,
    onSuccess?: CoreDataRequestSuccessCallback<CdapiCommonFeedsData>,
    onError?: CoreDataRequestErrorCallback<CdapiCommonFeedsData>,
): TypedDataRequest<CoreDataResponseArray<CdapiCommonFeedsData>>
```

ListFeeds retrieves Feeds.

Calls GET /common/feeds

#### Parameters

- options: [CdapiGetCommonFeedsOptions](./SDK.InfrontSDK.CoreDataAPI.CdapiGetCommonFeedsOptions.md)
- `Optional` onSuccess: CoreDataRequestSuccessCallback<[CdapiCommonFeedsData](./SDK.InfrontSDK.CoreDataAPI.CdapiCommonFeedsData.md)>
- `Optional` onError: CoreDataRequestErrorCallback<[CdapiCommonFeedsData](./SDK.InfrontSDK.CoreDataAPI.CdapiCommonFeedsData.md)>

#### Returns [TypedDataRequest](./SDK.InfrontSDK.TypedDataRequest.md)<CoreDataResponseArray<[CdapiCommonFeedsData](./SDK.InfrontSDK.CoreDataAPI.CdapiCommonFeedsData.md)>>

#### Remarks

CDAPI Operation ID: CommonService_ListFeeds
