---
title: "CdapiCommonEetOtherEsgBenchmark"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiCommonEetOtherEsgBenchmark"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiCommonEetOtherEsgBenchmark"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiCommonEetOtherEsgBenchmark.html"
defines: ["CdapiCommonEetOtherEsgBenchmark"]
member_count: 2
members: ["has_reference", "name"]
member_groups:
  "Properties": ["has_reference", "name"]
---

# CdapiCommonEetOtherEsgBenchmark

EsgBenchmark holds ESG benchmark reference information.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.common.EetOther_EsgBenchmark

```ts
interface CdapiCommonEetOtherEsgBenchmark {
    has_reference: boolean;
    name: string;
}
```

### Properties

#### `Readonly` has_reference

```ts
has_reference: boolean
```

EET 20370: If true, the product uses a reference ESG benchmark.

#### `Readonly` name

```ts
name: string
```

EET 20380: Name of the reference ESG benchmark.
