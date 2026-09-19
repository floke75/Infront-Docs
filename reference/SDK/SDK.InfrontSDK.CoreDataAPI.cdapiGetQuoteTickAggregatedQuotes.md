---
title: "cdapiGetQuoteTickAggregatedQuotes"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.cdapiGetQuoteTickAggregatedQuotes"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > cdapiGetQuoteTickAggregatedQuotes"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.CoreDataAPI.cdapiGetQuoteTickAggregatedQuotes.html"
defines: ["cdapiGetQuoteTickAggregatedQuotes"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiGetQuoteTickAggregatedQuotesOptions", "SDK.InfrontSDK.CoreDataAPI.CdapiQuoteTickQuotesAggregatedData", "SDK.InfrontSDK.TypedDataRequest"]
---

# cdapiGetQuoteTickAggregatedQuotes

```ts
cdapiGetQuoteTickAggregatedQuotes(
    options: CdapiGetQuoteTickAggregatedQuotesOptions,
    onSuccess?: CoreDataRequestSuccessCallback<
        CdapiQuoteTickQuotesAggregatedData,
    >,
    onError?: CoreDataRequestErrorCallback<CdapiQuoteTickQuotesAggregatedData>,
): TypedDataRequest<
    CoreDataResponseArray<CdapiQuoteTickQuotesAggregatedData>,
>
```

search for aggregated tick quotes. Identifier can be listing_id, vwd_key or ids_identifier. Default aggregation is one minute.
timestamp needs to be added in ISO 8601 format (YYYY-MM-DDThh:mm:ssZ)

Calls GET /quote/tick/aggregated-quotes

#### Parameters

- options: [CdapiGetQuoteTickAggregatedQuotesOptions](./SDK.InfrontSDK.CoreDataAPI.CdapiGetQuoteTickAggregatedQuotesOptions.md)
- `Optional` onSuccess: CoreDataRequestSuccessCallback<[CdapiQuoteTickQuotesAggregatedData](./SDK.InfrontSDK.CoreDataAPI.CdapiQuoteTickQuotesAggregatedData.md)>
- `Optional` onError: CoreDataRequestErrorCallback<[CdapiQuoteTickQuotesAggregatedData](./SDK.InfrontSDK.CoreDataAPI.CdapiQuoteTickQuotesAggregatedData.md)>

#### Returns [TypedDataRequest](./SDK.InfrontSDK.TypedDataRequest.md)<CoreDataResponseArray<[CdapiQuoteTickQuotesAggregatedData](./SDK.InfrontSDK.CoreDataAPI.CdapiQuoteTickQuotesAggregatedData.md)>>

#### Remarks

CDAPI Operation ID: TickQuoteService_ListTickQuotesAggregated
