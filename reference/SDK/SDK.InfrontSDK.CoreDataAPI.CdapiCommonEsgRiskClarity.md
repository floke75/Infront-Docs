---
title: "CdapiCommonEsgRiskClarity"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiCommonEsgRiskClarity"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiCommonEsgRiskClarity"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiCommonEsgRiskClarity.html"
defines: ["CdapiCommonEsgRiskClarity"]
member_count: 28
members: ["_meta", "community_and_society", "corporate_ethics_and_behavior", "corporate_governance", "csr_and_governance_for_sustainability", "customers_and_products", "emissions", "employees", "environmental", "environmental_footprint_of_products", "environmental_footprint_of_supply_chain", "environmental_governance_and_processes", "governance", "governance_emissions", "governance_environmental_externalities", "governance_formal_institutions", "governance_human_capital", "governance_informal_institutions", "governance_physical_capital", "governance_resource_use", "governance_stability", "governance_technology", "partnerships_memberships_awards_and_certifications", "resource_use", "social", "source", "suppliers", "total"]
member_groups:
  "Properties": ["_meta", "community_and_society", "corporate_ethics_and_behavior", "corporate_governance", "csr_and_governance_for_sustainability", "customers_and_products", "emissions", "employees", "environmental", "environmental_footprint_of_products", "environmental_footprint_of_supply_chain", "environmental_governance_and_processes", "governance", "governance_emissions", "governance_environmental_externalities", "governance_formal_institutions", "governance_human_capital", "governance_informal_institutions", "governance_physical_capital", "governance_resource_use", "governance_stability", "governance_technology", "partnerships_memberships_awards_and_certifications", "resource_use", "social", "source", "suppliers", "total"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.BasedefEntityMeta", "SDK.InfrontSDK.CoreDataAPI.CdapiCommonEsgRiskClarityData", "SDK.InfrontSDK.CoreDataAPI.CdapiCommonEsgRiskClaritySource"]
---

# CdapiCommonEsgRiskClarity

EsgRiskClarity holds ESG risk scores at multiple granularity levels from Clarity AI.
Available at three request levels:
level1 = total score only
level2 = environmental, social, governance dimensions
level3 = all detailed sub-dimension scores
Source: CLARITY.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.common.EsgRiskClarity

```ts
interface CdapiCommonEsgRiskClarity {
    _meta: BasedefEntityMeta;
    community_and_society: CdapiCommonEsgRiskClarityData;
    corporate_ethics_and_behavior: CdapiCommonEsgRiskClarityData;
    corporate_governance: CdapiCommonEsgRiskClarityData;
    csr_and_governance_for_sustainability: CdapiCommonEsgRiskClarityData;
    customers_and_products: CdapiCommonEsgRiskClarityData;
    emissions: CdapiCommonEsgRiskClarityData;
    employees: CdapiCommonEsgRiskClarityData;
    environmental: CdapiCommonEsgRiskClarityData;
    environmental_footprint_of_products: CdapiCommonEsgRiskClarityData;
    environmental_footprint_of_supply_chain: CdapiCommonEsgRiskClarityData;
    environmental_governance_and_processes: CdapiCommonEsgRiskClarityData;
    governance: CdapiCommonEsgRiskClarityData;
    governance_emissions: CdapiCommonEsgRiskClarityData;
    governance_environmental_externalities: CdapiCommonEsgRiskClarityData;
    governance_formal_institutions: CdapiCommonEsgRiskClarityData;
    governance_human_capital: CdapiCommonEsgRiskClarityData;
    governance_informal_institutions: CdapiCommonEsgRiskClarityData;
    governance_physical_capital: CdapiCommonEsgRiskClarityData;
    governance_resource_use: CdapiCommonEsgRiskClarityData;
    governance_stability: CdapiCommonEsgRiskClarityData;
    governance_technology: CdapiCommonEsgRiskClarityData;
    partnerships_memberships_awards_and_certifications: CdapiCommonEsgRiskClarityData;
    resource_use: CdapiCommonEsgRiskClarityData;
    social: CdapiCommonEsgRiskClarityData;
    source: CdapiCommonEsgRiskClaritySource;
    suppliers: CdapiCommonEsgRiskClarityData;
    total: CdapiCommonEsgRiskClarityData;
}
```

### Properties

#### `Readonly` _meta

```ts
_meta: BasedefEntityMeta
```

Entity metadata (creation time, update time, version, etc.).

#### `Readonly` community_and_society

```ts
community_and_society: CdapiCommonEsgRiskClarityData
```

Community and society sub-dimension — local impact, community engagement.

#### `Readonly` corporate_ethics_and_behavior

```ts
corporate_ethics_and_behavior: CdapiCommonEsgRiskClarityData
```

Corporate ethics and behaviour sub-dimension.

#### `Readonly` corporate_governance

```ts
corporate_governance: CdapiCommonEsgRiskClarityData
```

Corporate governance sub-dimension — board composition, shareholder rights.

#### `Readonly` csr_and_governance_for_sustainability

```ts
csr_and_governance_for_sustainability: CdapiCommonEsgRiskClarityData
```

CSR and governance for sustainability.

#### `Readonly` customers_and_products

```ts
customers_and_products: CdapiCommonEsgRiskClarityData
```

Customers and products sub-dimension — product safety, data privacy.

#### `Readonly` emissions

```ts
emissions: CdapiCommonEsgRiskClarityData
```

Emissions sub-dimension — GHG and other emissions output.

#### `Readonly` employees

```ts
employees: CdapiCommonEsgRiskClarityData
```

Employees sub-dimension — workforce, health & safety, diversity.

#### `Readonly` environmental

```ts
environmental: CdapiCommonEsgRiskClarityData
```

Environmental pillar score.

#### `Readonly` environmental_footprint_of_products

```ts
environmental_footprint_of_products: CdapiCommonEsgRiskClarityData
```

Environmental footprint of products.

#### `Readonly` environmental_footprint_of_supply_chain

```ts
environmental_footprint_of_supply_chain: CdapiCommonEsgRiskClarityData
```

Environmental footprint of the supply chain.

#### `Readonly` environmental_governance_and_processes

```ts
environmental_governance_and_processes: CdapiCommonEsgRiskClarityData
```

Environmental governance and processes.

#### `Readonly` governance

```ts
governance: CdapiCommonEsgRiskClarityData
```

Governance pillar score.

#### `Readonly` governance_emissions

```ts
governance_emissions: CdapiCommonEsgRiskClarityData
```

Governance of emissions.

#### `Readonly` governance_environmental_externalities

```ts
governance_environmental_externalities: CdapiCommonEsgRiskClarityData
```

Governance of environmental externalities.

#### `Readonly` governance_formal_institutions

```ts
governance_formal_institutions: CdapiCommonEsgRiskClarityData
```

Governance by formal institutions — regulatory compliance.

#### `Readonly` governance_human_capital

```ts
governance_human_capital: CdapiCommonEsgRiskClarityData
```

Governance of human capital.

#### `Readonly` governance_informal_institutions

```ts
governance_informal_institutions: CdapiCommonEsgRiskClarityData
```

Governance by informal institutions — cultural norms, voluntary standards.

#### `Readonly` governance_physical_capital

```ts
governance_physical_capital: CdapiCommonEsgRiskClarityData
```

Governance of physical capital.

#### `Readonly` governance_resource_use

```ts
governance_resource_use: CdapiCommonEsgRiskClarityData
```

Governance of resource use.

#### `Readonly` governance_stability

```ts
governance_stability: CdapiCommonEsgRiskClarityData
```

Governance stability — political and regulatory stability exposure.

#### `Readonly` governance_technology

```ts
governance_technology: CdapiCommonEsgRiskClarityData
```

Governance of technology — IT security, data governance.

#### `Readonly` partnerships_memberships_awards_and_certifications

```ts
partnerships_memberships_awards_and_certifications: CdapiCommonEsgRiskClarityData
```

Partnerships, memberships, awards and certifications.

#### `Readonly` resource_use

```ts
resource_use: CdapiCommonEsgRiskClarityData
```

Resource use sub-dimension — efficiency and impact of resource consumption.

#### `Readonly` social

```ts
social: CdapiCommonEsgRiskClarityData
```

Social pillar score.

#### `Readonly` source

```ts
source: CdapiCommonEsgRiskClaritySource
```

##### Remarks

Format: enum

#### `Readonly` suppliers

```ts
suppliers: CdapiCommonEsgRiskClarityData
```

Suppliers sub-dimension — supply chain labour standards and ESG compliance.

#### `Readonly` total

```ts
total: CdapiCommonEsgRiskClarityData
```

Total ESG risk score across all three pillars.
