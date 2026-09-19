---
title: "CdapiCommonEetEutaxEutaxFields"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiCommonEetEutaxEutaxFields"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiCommonEetEutaxEutaxFields"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiCommonEetEutaxEutaxFields.html"
defines: ["CdapiCommonEetEutaxEutaxFields"]
member_count: 4
members: ["total_aligned", "total_contribution", "total_dnsh", "total_social_safeguard"]
member_groups:
  "Properties": ["total_aligned", "total_contribution", "total_dnsh", "total_social_safeguard"]
reference_count: 1
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiCommonEetEutaxData"]
---

# CdapiCommonEetEutaxEutaxFields

EutaxFields holds the full set of EU Taxonomy alignment metrics for one financial metric dimension.
Stages: eligible → contribution → DNSH-compliant → socially safeguarded → aligned.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.common.EetEutax_EutaxFields

```ts
interface CdapiCommonEetEutaxEutaxFields {
    total_aligned: CdapiCommonEetEutaxData;
    total_contribution: CdapiCommonEetEutaxData;
    total_dnsh: CdapiCommonEetEutaxData;
    total_social_safeguard: CdapiCommonEetEutaxData;
}
```

### Properties

#### `Readonly` total_aligned

```ts
total_aligned: CdapiCommonEetEutaxData
```

% fully EU Taxonomy-aligned (contribution + DNSH + social safeguards).

#### `Readonly` total_contribution

```ts
total_contribution: CdapiCommonEetEutaxData
```

% contributing to EU Taxonomy environmental objectives.

#### `Readonly` total_dnsh

```ts
total_dnsh: CdapiCommonEetEutaxData
```

% passing the Do No Significant Harm (DNSH) criteria.

#### `Readonly` total_social_safeguard

```ts
total_social_safeguard: CdapiCommonEetEutaxData
```

% meeting minimum social safeguards.
