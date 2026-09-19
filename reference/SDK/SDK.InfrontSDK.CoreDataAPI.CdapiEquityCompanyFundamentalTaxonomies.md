---
title: "CdapiEquityCompanyFundamentalTaxonomies"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiEquityCompanyFundamentalTaxonomies"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiEquityCompanyFundamentalTaxonomies"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiEquityCompanyFundamentalTaxonomies.html"
defines: ["CdapiEquityCompanyFundamentalTaxonomies"]
member_count: 5
members: ["balance_sheet", "cash_flow_statement", "income_statement", "period_kpi", "snapshot_kpi"]
member_groups:
  "Properties": ["balance_sheet", "cash_flow_statement", "income_statement", "period_kpi", "snapshot_kpi"]
reference_count: 1
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiEquityCompanyFundamentalTaxonomy"]
---

# CdapiEquityCompanyFundamentalTaxonomies

Taxonomies groups all financial statement taxonomies for one data response.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.equity.CompanyFundamental_Taxonomies

```ts
interface CdapiEquityCompanyFundamentalTaxonomies {
    balance_sheet: CdapiEquityCompanyFundamentalTaxonomy;
    cash_flow_statement: CdapiEquityCompanyFundamentalTaxonomy;
    income_statement: CdapiEquityCompanyFundamentalTaxonomy;
    period_kpi: CdapiEquityCompanyFundamentalTaxonomy;
    snapshot_kpi: CdapiEquityCompanyFundamentalTaxonomy;
}
```

### Properties

#### `Readonly` balance_sheet

```ts
balance_sheet: CdapiEquityCompanyFundamentalTaxonomy
```

Balance sheet figures (assets, liabilities, equity).

#### `Readonly` cash_flow_statement

```ts
cash_flow_statement: CdapiEquityCompanyFundamentalTaxonomy
```

Cash flow statement figures (operating, investing, financing cash flows).

#### `Readonly` income_statement

```ts
income_statement: CdapiEquityCompanyFundamentalTaxonomy
```

Income statement figures (revenue, gross profit, EBIT, net income, etc.).

#### `Readonly` period_kpi

```ts
period_kpi: CdapiEquityCompanyFundamentalTaxonomy
```

Period KPI figures (period-based ratios and metrics).

#### `Readonly` snapshot_kpi

```ts
snapshot_kpi: CdapiEquityCompanyFundamentalTaxonomy
```

Snapshot KPI figures (point-in-time ratios and metrics).
