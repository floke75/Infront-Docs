---
title: "CdapiPostSnapquoteSnapquotesOptions"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiPostSnapquoteSnapquotesOptions"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiPostSnapquoteSnapquotesOptions"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiPostSnapquoteSnapquotesOptions.html"
defines: ["CdapiPostSnapquoteSnapquotesOptions"]
member_count: 4
members: ["fields", "onData?", "onError?", "onFinally?"]
member_groups:
  "Properties": ["fields", "onData?", "onError?", "onFinally?"]
related_types: ["SDK.InfrontSDK.CoreDataAPI.CdapiSnapquoteSnapquoteData", "SDK.InfrontSDK.CoreDataAPI.CdapiSnapquoteListSnapquotesRequest"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiSnapquoteSnapquoteData", "SDK.InfrontSDK.CoreDataAPI.cdapiPostSnapquoteSnapquotes", "SDK.InfrontSDK.CoreDataAPI.CdapiSnapquoteListSnapquotesRequest"]
---

# CdapiPostSnapquoteSnapquotesOptions

Request options for [cdapiPostSnapquoteSnapquotes](./SDK.InfrontSDK.CoreDataAPI.cdapiPostSnapquoteSnapquotes.md)

```ts
interface CdapiPostSnapquoteSnapquotesOptions {
    fields: string;
    onData?: CoreDataRequestSuccessCallback<CdapiSnapquoteSnapquoteData>;
    onError?: CoreDataRequestErrorCallback<CdapiSnapquoteSnapquoteData>;
    onFinally?: CoreDataRequestFinallyCallback<CdapiSnapquoteSnapquoteData>;
}
```

#### Hierarchy ([View Summary](../type-hierarchy.md#SDK.InfrontSDK.CoreDataAPI.CdapiPostSnapquoteSnapquotesOptions))

- CdapiCommonRequestOptions<CdapiSnapquoteSnapquoteData>
- CdapiSnapquoteListSnapquotesRequest

  - CdapiPostSnapquoteSnapquotesOptions

### Properties

#### `Readonly` fields

```ts
fields: string
```

##### Remarks

Format: field-mask

Inherited from CdapiSnapquoteListSnapquotesRequest.fields

#### `Optional` onData

```ts
onData?: CoreDataRequestSuccessCallback<CdapiSnapquoteSnapquoteData>
```

A callback called when a data request has completed succesfully.

Inherited from Infront.CdapiCommonRequestOptions.onData

#### `Optional` onError

```ts
onError?: CoreDataRequestErrorCallback<CdapiSnapquoteSnapquoteData>
```

A callback called when an error occurred trying to make the request.

Inherited from Infront.CdapiCommonRequestOptions.onError

#### `Optional` onFinally

```ts
onFinally?: CoreDataRequestFinallyCallback<CdapiSnapquoteSnapquoteData>
```

A callback called when the request is finished, either because data was received,
error occurred, or the request was aborted/unsubscribed.

Inherited from Infront.CdapiCommonRequestOptions.onFinally
