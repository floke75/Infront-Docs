---
title: "PriipsDataStaticCreditLinks"
qualified_name: "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticCreditLinks"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.PortfolioRisk"
group: "PortfolioRisk"
nav_path: "SDK > InfrontSDK > Other > PortfolioRisk > PriipsDataStaticCreditLinks"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticCreditLinks.html"
defines: ["PriipsDataStaticCreditLinks"]
member_count: 5
members: ["attachmentPoint", "creditEventTrigger", "creditLink", "detachmentPoint", "recoveryRate"]
member_groups:
  "Properties": ["attachmentPoint", "creditEventTrigger", "creditLink", "detachmentPoint", "recoveryRate"]
reference_count: 1
references: ["SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticCreditLink"]
---

# PriipsDataStaticCreditLinks

CreditLinks describes a set of credit link entities/issuers and the attributes for credit events. Such a credit event is
usually when an entity defaults. Credit links are usually used together with a bond to describe a credit-linked note. A
credit-linked note pays at the maturity the bond notional if no credit event occured. For each credit event that occured the
bond notional will be reduced by a specific amount.
However, the RTS do not provide a specific handling for credit-linked notes. Hence, usually we do not simulate the credit
events but ignore the credit links in the calculation.
INTERNAL: (We had a swedish customer once (SEB) who prefered the so-called swedish-model for the calculation,
INTERNAL: and in model we considered the credit links. Now they are only used to be printed on templates.)

#### Remarks

API Schema ID: dev.infrontfinance.priips.data.static.CreditLinks

```ts
interface PriipsDataStaticCreditLinks {
    attachmentPoint: number;
    creditEventTrigger: number;
    creditLink: readonly PriipsDataStaticCreditLink[];
    detachmentPoint: number;
    recoveryRate: number;
}
```

### Properties

#### `Readonly` attachmentPoint

```ts
attachmentPoint: number
```

Lower bound of the risk level, i.e. the point at which the tranch begins to suffer losses

##### Remarks

Format: int32

#### `Readonly` creditEventTrigger

```ts
creditEventTrigger: number
```

Probably how many credit events happened in the past

##### Remarks

Format: int32

#### `Readonly` creditLink

```ts
creditLink: readonly PriipsDataStaticCreditLink[]
```

List of credit link issuers / entities

#### `Readonly` detachmentPoint

```ts
detachmentPoint: number
```

Upper bound of the risk level, i.e. the point at which the tranch stops to suffer losses

##### Remarks

Format: int32

#### `Readonly` recoveryRate

```ts
recoveryRate: number
```

All-in-all recovery rate of the credit links

##### Remarks

Format: double
