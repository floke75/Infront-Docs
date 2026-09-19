---
title: "cdapiGetInformationNews"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.cdapiGetInformationNews"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > cdapiGetInformationNews"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.CoreDataAPI.cdapiGetInformationNews.html"
defines: ["cdapiGetInformationNews"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiGetInformationNewsOptions", "SDK.InfrontSDK.CoreDataAPI.CdapiInformationNewsData", "SDK.InfrontSDK.TypedDataRequest"]
---

# cdapiGetInformationNews

```ts
cdapiGetInformationNews(
    options: CdapiGetInformationNewsOptions,
    onSuccess?: CoreDataRequestSuccessCallback<CdapiInformationNewsData>,
    onError?: CoreDataRequestErrorCallback<CdapiInformationNewsData>,
): TypedDataRequest<CoreDataResponseArray<CdapiInformationNewsData>>
```

ListNews retrieves news.

Calls GET /information/news

#### Parameters

- options: [CdapiGetInformationNewsOptions](./SDK.InfrontSDK.CoreDataAPI.CdapiGetInformationNewsOptions.md)
- `Optional` onSuccess: CoreDataRequestSuccessCallback<[CdapiInformationNewsData](./SDK.InfrontSDK.CoreDataAPI.CdapiInformationNewsData.md)>
- `Optional` onError: CoreDataRequestErrorCallback<[CdapiInformationNewsData](./SDK.InfrontSDK.CoreDataAPI.CdapiInformationNewsData.md)>

#### Returns [TypedDataRequest](./SDK.InfrontSDK.TypedDataRequest.md)<CoreDataResponseArray<[CdapiInformationNewsData](./SDK.InfrontSDK.CoreDataAPI.CdapiInformationNewsData.md)>>

#### Remarks

CDAPI Operation ID: NewsService_ListNews
