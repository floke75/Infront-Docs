---
title: "PriipsDataStaticCreditLink"
qualified_name: "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticCreditLink"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.PortfolioRisk"
group: "PortfolioRisk"
nav_path: "SDK > InfrontSDK > Other > PortfolioRisk > PriipsDataStaticCreditLink"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticCreditLink.html"
defines: ["PriipsDataStaticCreditLink"]
member_count: 10
members: ["creditLinkIndexId", "debtSeniority", "defaulted", "firmSizeAdjustment", "issuer", "issuerId", "ratings", "recoveryAssumption", "referenceBond", "weight"]
member_groups:
  "Properties": ["creditLinkIndexId", "debtSeniority", "defaulted", "firmSizeAdjustment", "issuer", "issuerId", "ratings", "recoveryAssumption", "referenceBond", "weight"]
reference_count: 3
references: ["SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticCreditLinkDebtSeniority", "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticCreditAssessment", "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticReferenceBond"]
---

# PriipsDataStaticCreditLink

CreditLink contains the issuer/entity of credit links

#### Remarks

API Schema ID: dev.infrontfinance.priips.data.static.CreditLink

```ts
interface PriipsDataStaticCreditLink {
    creditLinkIndexId: number;
    debtSeniority: PriipsDataStaticCreditLinkDebtSeniority;
    defaulted: boolean;
    firmSizeAdjustment: number;
    issuer: string;
    issuerId: number;
    ratings: readonly PriipsDataStaticCreditAssessment[];
    recoveryAssumption: number;
    referenceBond: PriipsDataStaticReferenceBond;
    weight: number;
}
```

### Properties

#### `Readonly` creditLinkIndexId

```ts
creditLinkIndexId: number
```

Index within CreditLinks

##### Remarks

Format: int32

#### `Readonly` debtSeniority

```ts
debtSeniority: PriipsDataStaticCreditLinkDebtSeniority
```

Debt seniority of the issuer

##### Remarks

Format: enum

#### `Readonly` defaulted

```ts
defaulted: boolean
```

True if the issuer is defaulted

#### `Readonly` firmSizeAdjustment

```ts
firmSizeAdjustment: number
```

Firm size, default value is 50

##### Remarks

Format: double

#### `Readonly` issuer

```ts
issuer: string
```

Name of the issuer

#### `Readonly` issuerId

```ts
issuerId: number
```

ID of the issuer

##### Remarks

Format: int32

#### `Readonly` ratings

```ts
ratings: readonly PriipsDataStaticCreditAssessment[]
```

Issuer ratings

#### `Readonly` recoveryAssumption

```ts
recoveryAssumption: number
```

Individual recovery rate of the issuer

##### Remarks

Format: double

#### `Readonly` referenceBond

```ts
referenceBond: PriipsDataStaticReferenceBond
```

Not used

#### `Readonly` weight

```ts
weight: number
```

Multiplier / leverage

##### Remarks

Format: double
