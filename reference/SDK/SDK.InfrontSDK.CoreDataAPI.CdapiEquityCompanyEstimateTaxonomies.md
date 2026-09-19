---
title: "CdapiEquityCompanyEstimateTaxonomies"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiEquityCompanyEstimateTaxonomies"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiEquityCompanyEstimateTaxonomies"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiEquityCompanyEstimateTaxonomies.html"
defines: ["CdapiEquityCompanyEstimateTaxonomies"]
member_count: 5
members: ["balance_sheet", "cash_flow_statement", "estimate", "income_statement", "period_kpi"]
member_groups:
  "Properties": ["balance_sheet", "cash_flow_statement", "estimate", "income_statement", "period_kpi"]
reference_count: 1
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiEquityCompanyEstimateTaxonomy"]
---

# CdapiEquityCompanyEstimateTaxonomies

Taxonomies groups all estimate taxonomy sections for one response.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.equity.CompanyEstimate_Taxonomies

```ts
interface CdapiEquityCompanyEstimateTaxonomies {
    balance_sheet: CdapiEquityCompanyEstimateTaxonomy;
    cash_flow_statement: CdapiEquityCompanyEstimateTaxonomy;
    estimate: CdapiEquityCompanyEstimateTaxonomy;
    income_statement: CdapiEquityCompanyEstimateTaxonomy;
    period_kpi: CdapiEquityCompanyEstimateTaxonomy;
}
```

### Properties

#### `Readonly` balance_sheet

```ts
balance_sheet: CdapiEquityCompanyEstimateTaxonomy
```

Balance sheet estimates.

#### `Readonly` cash_flow_statement

```ts
cash_flow_statement: CdapiEquityCompanyEstimateTaxonomy
```

Cash flow statement estimates.

#### `Readonly` estimate

```ts
estimate: CdapiEquityCompanyEstimateTaxonomy
```

Estimate taxonomy group — populated when estimate data is requested;
other taxonomy groups are empty when this is set.

#### `Readonly` income_statement

```ts
income_statement: CdapiEquityCompanyEstimateTaxonomy
```

Income statement estimates.

#### `Readonly` period_kpi

```ts
period_kpi: CdapiEquityCompanyEstimateTaxonomy
```

Period KPI estimates.
