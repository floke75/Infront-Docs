---
title: "cdapiGetFundBenchmarks"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.cdapiGetFundBenchmarks"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > cdapiGetFundBenchmarks"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.CoreDataAPI.cdapiGetFundBenchmarks.html"
defines: ["cdapiGetFundBenchmarks"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiGetFundBenchmarksOptions", "SDK.InfrontSDK.CoreDataAPI.CdapiFundBenchmarksData", "SDK.InfrontSDK.TypedDataRequest"]
---

# cdapiGetFundBenchmarks

```ts
cdapiGetFundBenchmarks(
    options: CdapiGetFundBenchmarksOptions,
    onSuccess?: CoreDataRequestSuccessCallback<CdapiFundBenchmarksData>,
    onError?: CoreDataRequestErrorCallback<CdapiFundBenchmarksData>,
): TypedDataRequest<CoreDataResponseArray<CdapiFundBenchmarksData>>
```

ListBenchmarks retrieves a list of benchmarks.

Calls GET /fund/benchmarks

#### Parameters

- options: [CdapiGetFundBenchmarksOptions](./SDK.InfrontSDK.CoreDataAPI.CdapiGetFundBenchmarksOptions.md)
- `Optional` onSuccess: CoreDataRequestSuccessCallback<[CdapiFundBenchmarksData](./SDK.InfrontSDK.CoreDataAPI.CdapiFundBenchmarksData.md)>
- `Optional` onError: CoreDataRequestErrorCallback<[CdapiFundBenchmarksData](./SDK.InfrontSDK.CoreDataAPI.CdapiFundBenchmarksData.md)>

#### Returns [TypedDataRequest](./SDK.InfrontSDK.TypedDataRequest.md)<CoreDataResponseArray<[CdapiFundBenchmarksData](./SDK.InfrontSDK.CoreDataAPI.CdapiFundBenchmarksData.md)>>

#### Remarks

CDAPI Operation ID: FundService_ListBenchmarks
