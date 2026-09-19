---
title: "CdapiCommonEetSustainabilityProductInformationData"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiCommonEetSustainabilityProductInformationData"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiCommonEetSustainabilityProductInformationData"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiCommonEetSustainabilityProductInformationData.html"
defines: ["CdapiCommonEetSustainabilityProductInformationData"]
member_count: 2
members: ["minimum_share", "reported_share"]
member_groups:
  "Properties": ["minimum_share", "reported_share"]
---

# CdapiCommonEetSustainabilityProductInformationData

Data holds minimum (planned) and last-reported share percentages for one investment category.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.common.EetSustainabilityProductInformation_Data

```ts
interface CdapiCommonEetSustainabilityProductInformationData {
    minimum_share: number;
    reported_share: number;
}
```

### Properties

#### `Readonly` minimum_share

```ts
minimum_share: number
```

Minimum/planned share as a decimal (e.g. 0.20 = 20%).

##### Remarks

Format: double

#### `Readonly` reported_share

```ts
reported_share: number
```

Last reported actual share.

##### Remarks

Format: double
