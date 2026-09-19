---
title: "CdapiGetInformationEventTypesOptions"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiGetInformationEventTypesOptions"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiGetInformationEventTypesOptions"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiGetInformationEventTypesOptions.html"
defines: ["CdapiGetInformationEventTypesOptions"]
member_count: 4
members: ["onData?", "onError?", "onFinally?", "source?"]
member_groups:
  "Properties": ["onData?", "onError?", "onFinally?", "source?"]
related_types: ["SDK.InfrontSDK.CoreDataAPI.CdapiInformationEventTypesData"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiInformationEventTypesData", "SDK.InfrontSDK.CoreDataAPI.CdapiGetInformationEventTypesOptionsSource", "SDK.InfrontSDK.CoreDataAPI.cdapiGetInformationEventTypes"]
---

# CdapiGetInformationEventTypesOptions

Request options for [cdapiGetInformationEventTypes](./SDK.InfrontSDK.CoreDataAPI.cdapiGetInformationEventTypes.md)

```ts
interface CdapiGetInformationEventTypesOptions {
    onData?: CoreDataRequestSuccessCallback<CdapiInformationEventTypesData>;
    onError?: CoreDataRequestErrorCallback<CdapiInformationEventTypesData>;
    onFinally?: CoreDataRequestFinallyCallback<CdapiInformationEventTypesData>;
    source?: CdapiGetInformationEventTypesOptionsSource;
}
```

#### Hierarchy

- CdapiCommonRequestOptions<CdapiInformationEventTypesData>

  - CdapiGetInformationEventTypesOptions

### Properties

#### `Optional` onData

```ts
onData?: CoreDataRequestSuccessCallback<CdapiInformationEventTypesData>
```

A callback called when a data request has completed succesfully.

Inherited from Infront.CdapiCommonRequestOptions.onData

#### `Optional` onError

```ts
onError?: CoreDataRequestErrorCallback<CdapiInformationEventTypesData>
```

A callback called when an error occurred trying to make the request.

Inherited from Infront.CdapiCommonRequestOptions.onError

#### `Optional` onFinally

```ts
onFinally?: CoreDataRequestFinallyCallback<CdapiInformationEventTypesData>
```

A callback called when the request is finished, either because data was received,
error occurred, or the request was aborted/unsubscribed.

Inherited from Infront.CdapiCommonRequestOptions.onFinally

#### `Optional` ` Readonly`source

```ts
source?: CdapiGetInformationEventTypesOptionsSource
```

the source for the events
