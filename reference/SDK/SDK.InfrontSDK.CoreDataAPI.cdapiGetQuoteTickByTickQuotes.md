---
title: "cdapiGetQuoteTickByTickQuotes"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.cdapiGetQuoteTickByTickQuotes"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > cdapiGetQuoteTickByTickQuotes"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.CoreDataAPI.cdapiGetQuoteTickByTickQuotes.html"
defines: ["cdapiGetQuoteTickByTickQuotes"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiGetQuoteTickByTickQuotesOptions", "SDK.InfrontSDK.CoreDataAPI.CdapiQuoteTickQuotesByTickData", "SDK.InfrontSDK.TypedDataRequest"]
---

# cdapiGetQuoteTickByTickQuotes

```ts
cdapiGetQuoteTickByTickQuotes(
    options: CdapiGetQuoteTickByTickQuotesOptions,
    onSuccess?: CoreDataRequestSuccessCallback<CdapiQuoteTickQuotesByTickData>,
    onError?: CoreDataRequestErrorCallback<CdapiQuoteTickQuotesByTickData>,
): TypedDataRequest<CoreDataResponseArray<CdapiQuoteTickQuotesByTickData>>
```

search for tick-by-tick quotes. Identifier can be listing_id, vwd_key or ids_identifier.
timestamp needs to be added in ISO 8601 format (YYYY-MM-DDThh:mm:ss.SSSZ)

Calls GET /quote/tick/by-tick-quotes

#### Parameters

- options: [CdapiGetQuoteTickByTickQuotesOptions](./SDK.InfrontSDK.CoreDataAPI.CdapiGetQuoteTickByTickQuotesOptions.md)
- `Optional` onSuccess: CoreDataRequestSuccessCallback<[CdapiQuoteTickQuotesByTickData](./SDK.InfrontSDK.CoreDataAPI.CdapiQuoteTickQuotesByTickData.md)>
- `Optional` onError: CoreDataRequestErrorCallback<[CdapiQuoteTickQuotesByTickData](./SDK.InfrontSDK.CoreDataAPI.CdapiQuoteTickQuotesByTickData.md)>

#### Returns [TypedDataRequest](./SDK.InfrontSDK.TypedDataRequest.md)<CoreDataResponseArray<[CdapiQuoteTickQuotesByTickData](./SDK.InfrontSDK.CoreDataAPI.CdapiQuoteTickQuotesByTickData.md)>>

#### Remarks

CDAPI Operation ID: TickQuoteService_ListTickQuotesByTick
