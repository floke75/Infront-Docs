---
title: "CdapiEquityCompanyEstimateTaxonomy"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiEquityCompanyEstimateTaxonomy"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiEquityCompanyEstimateTaxonomy"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiEquityCompanyEstimateTaxonomy.html"
defines: ["CdapiEquityCompanyEstimateTaxonomy"]
member_count: 3
members: ["_meta", "figures", "name"]
member_groups:
  "Properties": ["_meta", "figures", "name"]
reference_count: 2
references: ["SDK.InfrontSDK.CoreDataAPI.BasedefEntityMeta", "SDK.InfrontSDK.CoreDataAPI.CdapiEquityCompanyEstimateFigure"]
---

# CdapiEquityCompanyEstimateTaxonomy

Taxonomy groups estimated figures under a named financial statement.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.equity.CompanyEstimate_Taxonomy

```ts
interface CdapiEquityCompanyEstimateTaxonomy {
    _meta: BasedefEntityMeta;
    figures: readonly CdapiEquityCompanyEstimateFigure[];
    name: string;
}
```

### Properties

#### `Readonly` _meta

```ts
_meta: BasedefEntityMeta
```

Entity metadata.

#### `Readonly` figures

```ts
figures: readonly CdapiEquityCompanyEstimateFigure[]
```

Ordered list of estimated figures.

#### `Readonly` name

```ts
name: string
```

Name of the financial statement.
