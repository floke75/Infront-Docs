---
title: "cdapiGetBondBenchmarks"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.cdapiGetBondBenchmarks"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > cdapiGetBondBenchmarks"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.CoreDataAPI.cdapiGetBondBenchmarks.html"
defines: ["cdapiGetBondBenchmarks"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiGetBondBenchmarksOptions", "SDK.InfrontSDK.CoreDataAPI.CdapiBondBenchmarksData", "SDK.InfrontSDK.TypedDataRequest"]
---

# cdapiGetBondBenchmarks

```ts
cdapiGetBondBenchmarks(
    options: CdapiGetBondBenchmarksOptions,
    onSuccess?: CoreDataRequestSuccessCallback<CdapiBondBenchmarksData>,
    onError?: CoreDataRequestErrorCallback<CdapiBondBenchmarksData>,
): TypedDataRequest<CoreDataResponseArray<CdapiBondBenchmarksData>>
```

ListBenchmarks retrieves benchmarks that could be filtered by various
attributes. available for source: EDI

Calls GET /bond/benchmarks

#### Parameters

- options: [CdapiGetBondBenchmarksOptions](./SDK.InfrontSDK.CoreDataAPI.CdapiGetBondBenchmarksOptions.md)
- `Optional` onSuccess: CoreDataRequestSuccessCallback<[CdapiBondBenchmarksData](./SDK.InfrontSDK.CoreDataAPI.CdapiBondBenchmarksData.md)>
- `Optional` onError: CoreDataRequestErrorCallback<[CdapiBondBenchmarksData](./SDK.InfrontSDK.CoreDataAPI.CdapiBondBenchmarksData.md)>

#### Returns [TypedDataRequest](./SDK.InfrontSDK.TypedDataRequest.md)<CoreDataResponseArray<[CdapiBondBenchmarksData](./SDK.InfrontSDK.CoreDataAPI.CdapiBondBenchmarksData.md)>>

#### Remarks

CDAPI Operation ID: BondService_ListBenchmarks
