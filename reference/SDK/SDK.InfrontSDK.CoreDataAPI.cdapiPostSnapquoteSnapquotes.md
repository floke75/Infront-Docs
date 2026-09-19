---
title: "cdapiPostSnapquoteSnapquotes"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.cdapiPostSnapquoteSnapquotes"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > cdapiPostSnapquoteSnapquotes"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.CoreDataAPI.cdapiPostSnapquoteSnapquotes.html"
defines: ["cdapiPostSnapquoteSnapquotes"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiPostSnapquoteSnapquotesOptions", "SDK.InfrontSDK.CoreDataAPI.CdapiSnapquoteSnapquoteData", "SDK.InfrontSDK.TypedDataRequest"]
---

# cdapiPostSnapquoteSnapquotes

```ts
cdapiPostSnapquoteSnapquotes(
    options: CdapiPostSnapquoteSnapquotesOptions,
    onSuccess?: CoreDataRequestSuccessCallback<CdapiSnapquoteSnapquoteData>,
    onError?: CoreDataRequestErrorCallback<CdapiSnapquoteSnapquoteData>,
): TypedDataRequest<CoreDataResponseArray<CdapiSnapquoteSnapquoteData>>
```

ListSnapquotes retrieves snapquotes from the quote-cache

Calls POST /snapquote/snapquotes

#### Parameters

- options: [CdapiPostSnapquoteSnapquotesOptions](./SDK.InfrontSDK.CoreDataAPI.CdapiPostSnapquoteSnapquotesOptions.md)
- `Optional` onSuccess: CoreDataRequestSuccessCallback<[CdapiSnapquoteSnapquoteData](./SDK.InfrontSDK.CoreDataAPI.CdapiSnapquoteSnapquoteData.md)>
- `Optional` onError: CoreDataRequestErrorCallback<[CdapiSnapquoteSnapquoteData](./SDK.InfrontSDK.CoreDataAPI.CdapiSnapquoteSnapquoteData.md)>

#### Returns [TypedDataRequest](./SDK.InfrontSDK.TypedDataRequest.md)<CoreDataResponseArray<[CdapiSnapquoteSnapquoteData](./SDK.InfrontSDK.CoreDataAPI.CdapiSnapquoteSnapquoteData.md)>>

#### Remarks

CDAPI Operation ID: SnapquoteService_ListSnapquotes
