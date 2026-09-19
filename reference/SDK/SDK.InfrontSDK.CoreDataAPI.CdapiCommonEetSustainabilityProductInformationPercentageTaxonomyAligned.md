---
title: "CdapiCommonEetSustainabilityProductInformationPercentageTaxonomyAligned"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiCommonEetSustainabilityProductInformationPercentageTaxonomyAligned"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiCommonEetSustainabilityProductInformationPercentageTaxonomyAligned"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiCommonEetSustainabilityProductInformationPercentageTaxonomyAligned.html"
defines: ["CdapiCommonEetSustainabilityProductInformationPercentageTaxonomyAligned"]
member_count: 6
members: ["excluding_sovereign_capex", "excluding_sovereign_opex", "excluding_sovereign_revenue", "including_sovereign_capex", "including_sovereign_opex", "including_sovereign_revenue"]
member_groups:
  "Properties": ["excluding_sovereign_capex", "excluding_sovereign_opex", "excluding_sovereign_revenue", "including_sovereign_capex", "including_sovereign_opex", "including_sovereign_revenue"]
---

# CdapiCommonEetSustainabilityProductInformationPercentageTaxonomyAligned

PercentageTaxonomyAligned holds EU Taxonomy alignment % broken down by
sovereign bond inclusion/exclusion and financial metric (Revenue/CapEx/OpEx).

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.common.EetSustainabilityProductInformation_PercentageTaxonomyAligned

```ts
interface CdapiCommonEetSustainabilityProductInformationPercentageTaxonomyAligned {
    excluding_sovereign_capex: number;
    excluding_sovereign_opex: number;
    excluding_sovereign_revenue: number;
    including_sovereign_capex: number;
    including_sovereign_opex: number;
    including_sovereign_revenue: number;
}
```

### Properties

#### `Readonly` excluding_sovereign_capex

```ts
excluding_sovereign_capex: number
```

##### Remarks

Format: double

#### `Readonly` excluding_sovereign_opex

```ts
excluding_sovereign_opex: number
```

##### Remarks

Format: double

#### `Readonly` excluding_sovereign_revenue

```ts
excluding_sovereign_revenue: number
```

##### Remarks

Format: double

#### `Readonly` including_sovereign_capex

```ts
including_sovereign_capex: number
```

##### Remarks

Format: double

#### `Readonly` including_sovereign_opex

```ts
including_sovereign_opex: number
```

##### Remarks

Format: double

#### `Readonly` including_sovereign_revenue

```ts
including_sovereign_revenue: number
```

##### Remarks

Format: double
