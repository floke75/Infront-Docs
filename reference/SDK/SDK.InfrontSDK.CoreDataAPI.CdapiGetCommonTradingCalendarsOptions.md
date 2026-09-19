---
title: "CdapiGetCommonTradingCalendarsOptions"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiGetCommonTradingCalendarsOptions"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiGetCommonTradingCalendarsOptions"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiGetCommonTradingCalendarsOptions.html"
defines: ["CdapiGetCommonTradingCalendarsOptions"]
member_count: 3
members: ["onData?", "onError?", "onFinally?"]
member_groups:
  "Properties": ["onData?", "onError?", "onFinally?"]
related_types: ["SDK.InfrontSDK.CoreDataAPI.CdapiCommonTradingCalendarsData"]
reference_count: 2
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiCommonTradingCalendarsData", "SDK.InfrontSDK.CoreDataAPI.cdapiGetCommonTradingCalendars"]
---

# CdapiGetCommonTradingCalendarsOptions

Request options for [cdapiGetCommonTradingCalendars](./SDK.InfrontSDK.CoreDataAPI.cdapiGetCommonTradingCalendars.md)

```ts
interface CdapiGetCommonTradingCalendarsOptions {
    onData?: CoreDataRequestSuccessCallback<CdapiCommonTradingCalendarsData>;
    onError?: CoreDataRequestErrorCallback<CdapiCommonTradingCalendarsData>;
    onFinally?: CoreDataRequestFinallyCallback<CdapiCommonTradingCalendarsData>;
}
```

#### Hierarchy

- CdapiCommonRequestOptions<CdapiCommonTradingCalendarsData>

  - CdapiGetCommonTradingCalendarsOptions

### Properties

#### `Optional` onData

```ts
onData?: CoreDataRequestSuccessCallback<CdapiCommonTradingCalendarsData>
```

A callback called when a data request has completed succesfully.

Inherited from Infront.CdapiCommonRequestOptions.onData

#### `Optional` onError

```ts
onError?: CoreDataRequestErrorCallback<CdapiCommonTradingCalendarsData>
```

A callback called when an error occurred trying to make the request.

Inherited from Infront.CdapiCommonRequestOptions.onError

#### `Optional` onFinally

```ts
onFinally?: CoreDataRequestFinallyCallback<CdapiCommonTradingCalendarsData>
```

A callback called when the request is finished, either because data was received,
error occurred, or the request was aborted/unsubscribed.

Inherited from Infront.CdapiCommonRequestOptions.onFinally
