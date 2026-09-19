---
title: "cdapiPostFundBenchmarks"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.cdapiPostFundBenchmarks"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > cdapiPostFundBenchmarks"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.CoreDataAPI.cdapiPostFundBenchmarks.html"
defines: ["cdapiPostFundBenchmarks"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiPostFundBenchmarksOptions", "SDK.InfrontSDK.CoreDataAPI.CdapiFundBenchmarksData", "SDK.InfrontSDK.TypedDataRequest"]
---

# cdapiPostFundBenchmarks

```ts
cdapiPostFundBenchmarks(
    options: CdapiPostFundBenchmarksOptions,
    onSuccess?: CoreDataRequestSuccessCallback<CdapiFundBenchmarksData>,
    onError?: CoreDataRequestErrorCallback<CdapiFundBenchmarksData>,
): TypedDataRequest<CoreDataResponseArray<CdapiFundBenchmarksData>>
```

ListBenchmarks retrieves a list of benchmarks.

Calls POST /fund/benchmarks

#### Parameters

- options: [CdapiPostFundBenchmarksOptions](./SDK.InfrontSDK.CoreDataAPI.CdapiPostFundBenchmarksOptions.md)
- `Optional` onSuccess: CoreDataRequestSuccessCallback<[CdapiFundBenchmarksData](./SDK.InfrontSDK.CoreDataAPI.CdapiFundBenchmarksData.md)>
- `Optional` onError: CoreDataRequestErrorCallback<[CdapiFundBenchmarksData](./SDK.InfrontSDK.CoreDataAPI.CdapiFundBenchmarksData.md)>

#### Returns [TypedDataRequest](./SDK.InfrontSDK.TypedDataRequest.md)<CoreDataResponseArray<[CdapiFundBenchmarksData](./SDK.InfrontSDK.CoreDataAPI.CdapiFundBenchmarksData.md)>>

#### Remarks

CDAPI Operation ID: FundService_ListBenchmarks_2
