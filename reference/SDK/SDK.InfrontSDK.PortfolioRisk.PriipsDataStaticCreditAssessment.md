---
title: "PriipsDataStaticCreditAssessment"
qualified_name: "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticCreditAssessment"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.PortfolioRisk"
group: "PortfolioRisk"
nav_path: "SDK > InfrontSDK > Other > PortfolioRisk > PriipsDataStaticCreditAssessment"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticCreditAssessment.html"
defines: ["PriipsDataStaticCreditAssessment"]
member_count: 3
members: ["agency", "assessment", "type"]
member_groups:
  "Properties": ["agency", "assessment", "type"]
reference_count: 2
references: ["SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticCreditAssessmentAgency", "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticCreditAssessmentType"]
---

# PriipsDataStaticCreditAssessment

CreditAssessment describes a rating

#### Remarks

API Schema ID: dev.infrontfinance.priips.data.static.CreditAssessment

```ts
interface PriipsDataStaticCreditAssessment {
    agency: PriipsDataStaticCreditAssessmentAgency;
    assessment: string;
    type: PriipsDataStaticCreditAssessmentType;
}
```

### Properties

#### `Readonly` agency

```ts
agency: PriipsDataStaticCreditAssessmentAgency
```

Agency that provides a rating

##### Remarks

Format: enum

#### `Readonly` assessment

```ts
assessment: string
```

Rating, e.g. AA+, B, etc.

#### `Readonly` type

```ts
type: PriipsDataStaticCreditAssessmentType
```

Type of the rating (i.e. of long-term or short-term for issuer or product)

##### Remarks

Format: enum
