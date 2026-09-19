---
title: "CdapiGetCommonTechnicalAnalysisOptions"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiGetCommonTechnicalAnalysisOptions"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiGetCommonTechnicalAnalysisOptions"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiGetCommonTechnicalAnalysisOptions.html"
defines: ["CdapiGetCommonTechnicalAnalysisOptions"]
member_count: 4
members: ["onData?", "onError?", "onFinally?", "source?"]
member_groups:
  "Properties": ["onData?", "onError?", "onFinally?", "source?"]
related_types: ["SDK.InfrontSDK.CoreDataAPI.CdapiCommonTechnicalAnalysisData"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiCommonTechnicalAnalysisData", "SDK.InfrontSDK.CoreDataAPI.CdapiGetCommonTechnicalAnalysisOptionsSource", "SDK.InfrontSDK.CoreDataAPI.cdapiGetCommonTechnicalAnalysis"]
---

# CdapiGetCommonTechnicalAnalysisOptions

Request options for [cdapiGetCommonTechnicalAnalysis](./SDK.InfrontSDK.CoreDataAPI.cdapiGetCommonTechnicalAnalysis.md)

```ts
interface CdapiGetCommonTechnicalAnalysisOptions {
    onData?: CoreDataRequestSuccessCallback<
        CdapiCommonTechnicalAnalysisData,
    >;
    onError?: CoreDataRequestErrorCallback<CdapiCommonTechnicalAnalysisData>;
    onFinally?: CoreDataRequestFinallyCallback<
        CdapiCommonTechnicalAnalysisData,
    >;
    source?: CdapiGetCommonTechnicalAnalysisOptionsSource;
}
```

#### Hierarchy

- CdapiCommonRequestOptions<CdapiCommonTechnicalAnalysisData>

  - CdapiGetCommonTechnicalAnalysisOptions

### Properties

#### `Optional` onData

```ts
onData?: CoreDataRequestSuccessCallback<CdapiCommonTechnicalAnalysisData>
```

A callback called when a data request has completed succesfully.

Inherited from Infront.CdapiCommonRequestOptions.onData

#### `Optional` onError

```ts
onError?: CoreDataRequestErrorCallback<CdapiCommonTechnicalAnalysisData>
```

A callback called when an error occurred trying to make the request.

Inherited from Infront.CdapiCommonRequestOptions.onError

#### `Optional` onFinally

```ts
onFinally?: CoreDataRequestFinallyCallback<CdapiCommonTechnicalAnalysisData>
```

A callback called when the request is finished, either because data was received,
error occurred, or the request was aborted/unsubscribed.

Inherited from Infront.CdapiCommonRequestOptions.onFinally

#### `Optional` ` Readonly`source

```ts
source?: CdapiGetCommonTechnicalAnalysisOptionsSource
```

the source of the data
