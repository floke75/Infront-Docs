---
title: "CdapiEquityCompanyFundamentalTaxonomy"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiEquityCompanyFundamentalTaxonomy"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiEquityCompanyFundamentalTaxonomy"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiEquityCompanyFundamentalTaxonomy.html"
defines: ["CdapiEquityCompanyFundamentalTaxonomy"]
member_count: 3
members: ["_meta", "figures", "name"]
member_groups:
  "Properties": ["_meta", "figures", "name"]
reference_count: 2
references: ["SDK.InfrontSDK.CoreDataAPI.BasedefEntityMeta", "SDK.InfrontSDK.CoreDataAPI.CdapiEquityCompanyFundamentalFigure"]
---

# CdapiEquityCompanyFundamentalTaxonomy

Taxonomy groups a set of financial figures under a named financial statement.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.equity.CompanyFundamental_Taxonomy

```ts
interface CdapiEquityCompanyFundamentalTaxonomy {
    _meta: BasedefEntityMeta;
    figures: readonly CdapiEquityCompanyFundamentalFigure[];
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
figures: readonly CdapiEquityCompanyFundamentalFigure[]
```

Ordered list of financial figures belonging to this statement.

#### `Readonly` name

```ts
name: string
```

Name of the financial statement (e.g. "Income Statement").
