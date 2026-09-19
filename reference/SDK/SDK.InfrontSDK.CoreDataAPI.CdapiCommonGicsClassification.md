---
title: "CdapiCommonGicsClassification"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiCommonGicsClassification"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiCommonGicsClassification"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiCommonGicsClassification.html"
defines: ["CdapiCommonGicsClassification"]
member_count: 4
members: ["industry", "industry_group", "sector", "sub_industry"]
member_groups:
  "Properties": ["industry", "industry_group", "sector", "sub_industry"]
reference_count: 1
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiCommonGicsClassificationData"]
---

# CdapiCommonGicsClassification

GicsClassification holds the GICS (Global Industry Classification Standard) hierarchy.
GICS has four levels: Sector → Industry Group → Industry → Sub-Industry.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.common.GicsClassification

```ts
interface CdapiCommonGicsClassification {
    industry: CdapiCommonGicsClassificationData;
    industry_group: CdapiCommonGicsClassificationData;
    sector: CdapiCommonGicsClassificationData;
    sub_industry: CdapiCommonGicsClassificationData;
}
```

### Properties

#### `Readonly` industry

```ts
industry: CdapiCommonGicsClassificationData
```

GICS Industry — third level (74 industries, e.g. "Software").

#### `Readonly` industry_group

```ts
industry_group: CdapiCommonGicsClassificationData
```

GICS Industry Group — second level (25 groups, e.g. "Software & Services").

#### `Readonly` sector

```ts
sector: CdapiCommonGicsClassificationData
```

GICS Sector — broadest level (11 sectors, e.g. "Information Technology").

#### `Readonly` sub_industry

```ts
sub_industry: CdapiCommonGicsClassificationData
```

GICS Sub-Industry — most granular level (163 sub-industries, e.g. "Application Software").
