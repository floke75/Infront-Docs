---
title: "CdapiCommonEetExposureData"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiCommonEetExposureData"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiCommonEetExposureData"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiCommonEetExposureData.html"
defines: ["CdapiCommonEetExposureData"]
member_count: 2
members: ["max_revenue", "min_revenue"]
member_groups:
  "Properties": ["max_revenue", "min_revenue"]
---

# CdapiCommonEetExposureData

Data holds exposure flag and optional revenue range for a single activity.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.common.EetExposure_Data

```ts
interface CdapiCommonEetExposureData {
    max_revenue: number;
    min_revenue: number;
}
```

### Properties

#### `Readonly` max_revenue

```ts
max_revenue: number
```

##### Remarks

Format: double

#### `Readonly` min_revenue

```ts
min_revenue: number
```

##### Remarks

Format: double
