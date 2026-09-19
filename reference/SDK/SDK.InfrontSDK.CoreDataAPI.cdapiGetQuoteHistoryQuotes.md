---
title: "cdapiGetQuoteHistoryQuotes"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.cdapiGetQuoteHistoryQuotes"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > cdapiGetQuoteHistoryQuotes"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.CoreDataAPI.cdapiGetQuoteHistoryQuotes.html"
defines: ["cdapiGetQuoteHistoryQuotes"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiGetQuoteHistoryQuotesOptions", "SDK.InfrontSDK.CoreDataAPI.CdapiQuoteHistoryQuotesData", "SDK.InfrontSDK.TypedDataRequest"]
---

# cdapiGetQuoteHistoryQuotes

```ts
cdapiGetQuoteHistoryQuotes(
    options: CdapiGetQuoteHistoryQuotesOptions,
    onSuccess?: CoreDataRequestSuccessCallback<CdapiQuoteHistoryQuotesData>,
    onError?: CoreDataRequestErrorCallback<CdapiQuoteHistoryQuotesData>,
): TypedDataRequest<CoreDataResponseArray<CdapiQuoteHistoryQuotesData>>
```

search for history quotes. Identifier can be listing_id, vwd_key or ids_identifier

Calls GET /quote/history/quotes

#### Parameters

- options: [CdapiGetQuoteHistoryQuotesOptions](./SDK.InfrontSDK.CoreDataAPI.CdapiGetQuoteHistoryQuotesOptions.md)
- `Optional` onSuccess: CoreDataRequestSuccessCallback<[CdapiQuoteHistoryQuotesData](./SDK.InfrontSDK.CoreDataAPI.CdapiQuoteHistoryQuotesData.md)>
- `Optional` onError: CoreDataRequestErrorCallback<[CdapiQuoteHistoryQuotesData](./SDK.InfrontSDK.CoreDataAPI.CdapiQuoteHistoryQuotesData.md)>

#### Returns [TypedDataRequest](./SDK.InfrontSDK.TypedDataRequest.md)<CoreDataResponseArray<[CdapiQuoteHistoryQuotesData](./SDK.InfrontSDK.CoreDataAPI.CdapiQuoteHistoryQuotesData.md)>>

#### Remarks

CDAPI Operation ID: HistoryQuoteService_ListHistoryQuotes
