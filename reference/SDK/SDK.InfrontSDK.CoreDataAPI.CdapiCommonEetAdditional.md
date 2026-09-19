---
title: "CdapiCommonEetAdditional"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiCommonEetAdditional"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiCommonEetAdditional"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiCommonEetAdditional.html"
defines: ["CdapiCommonEetAdditional"]
member_count: 5
members: ["_meta", "source", "spai", "supplementary", "supplementary_taxonomy"]
member_groups:
  "Properties": ["_meta", "source", "spai", "supplementary", "supplementary_taxonomy"]
reference_count: 5
references: ["SDK.InfrontSDK.CoreDataAPI.BasedefEntityMeta", "SDK.InfrontSDK.CoreDataAPI.CdapiCommonEetAdditionalSource", "SDK.InfrontSDK.CoreDataAPI.CdapiCommonEetAdditionalSpai", "SDK.InfrontSDK.CoreDataAPI.CdapiCommonEetAdditionalSupplementary", "SDK.InfrontSDK.CoreDataAPI.CdapiCommonEetAdditionalSupplementaryTaxonomy"]
---

# CdapiCommonEetAdditional

EetAdditional holds supplementary EET fields covering sustainability risk relevance,
total fund AUM, SPAI (Structured Product Alignment Indicators for SFDR), and
supplementary EU Taxonomy data for fossil gas and nuclear activities.
Source: INFRONT.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.common.EetAdditional

```ts
interface CdapiCommonEetAdditional {
    _meta: BasedefEntityMeta;
    source: CdapiCommonEetAdditionalSource;
    spai: CdapiCommonEetAdditionalSpai;
    supplementary: CdapiCommonEetAdditionalSupplementary;
    supplementary_taxonomy: CdapiCommonEetAdditionalSupplementaryTaxonomy;
}
```

### Properties

#### `Readonly` _meta

```ts
_meta: BasedefEntityMeta
```

Entity metadata (creation time, update time, version, etc.).

#### `Readonly` source

```ts
source: CdapiCommonEetAdditionalSource
```

##### Remarks

Format: enum

#### `Readonly` spai

```ts
spai: CdapiCommonEetAdditionalSpai
```

SPAI — structured product SFDR alignment indicator data.

#### `Readonly` supplementary

```ts
supplementary: CdapiCommonEetAdditionalSupplementary
```

High-level ESG supplementary fields (sustainability risk flag, AUM).

#### `Readonly` supplementary_taxonomy

```ts
supplementary_taxonomy: CdapiCommonEetAdditionalSupplementaryTaxonomy
```

Supplementary EU Taxonomy data for fossil gas and nuclear activities.
