---
title: "CdapiCommonEetEutaxData"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiCommonEetEutaxData"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiCommonEetEutaxData"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiCommonEetEutaxData.html"
defines: ["CdapiCommonEetEutaxData"]
member_count: 1
members: ["value"]
member_groups:
  "Properties": ["value"]
---

# CdapiCommonEetEutaxData

Data holds a single EU Taxonomy metric value and metadata qualifier.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.common.EetEutax_Data

```ts
interface CdapiCommonEetEutaxData {
    value: number;
}
```

### Properties

#### `Readonly` value

```ts
value: number
```

Value as a decimal percentage (e.g. 0.35 = 35%).

##### Remarks

Format: double
