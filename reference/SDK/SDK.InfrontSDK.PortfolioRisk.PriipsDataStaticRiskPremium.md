---
title: "PriipsDataStaticRiskPremium"
qualified_name: "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticRiskPremium"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.PortfolioRisk"
group: "PortfolioRisk"
nav_path: "SDK > InfrontSDK > Other > PortfolioRisk > PriipsDataStaticRiskPremium"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticRiskPremium.html"
defines: ["PriipsDataStaticRiskPremium"]
member_count: 4
members: ["frequency", "numberOfPremiumPayments", "riskPremium", "riskPremiumType"]
member_groups:
  "Properties": ["frequency", "numberOfPremiumPayments", "riskPremium", "riskPremiumType"]
reference_count: 2
references: ["SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticRiskPremiumFrequency", "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticRiskPremiumRiskPremiumType"]
---

# PriipsDataStaticRiskPremium

The type and the amount of the risk premium
paid for life insurances

#### Remarks

API Schema ID: dev.infrontfinance.priips.data.static.RiskPremium

```ts
interface PriipsDataStaticRiskPremium {
    frequency: PriipsDataStaticRiskPremiumFrequency;
    numberOfPremiumPayments: number;
    riskPremium: number;
    riskPremiumType: PriipsDataStaticRiskPremiumRiskPremiumType;
}
```

### Properties

#### `Readonly` frequency

```ts
frequency: PriipsDataStaticRiskPremiumFrequency
```

The frequency of the risk premium

##### Remarks

Format: enum

#### `Readonly` numberOfPremiumPayments

```ts
numberOfPremiumPayments: number
```

If set, the total number of premium payments

##### Remarks

Format: int32

#### `Readonly` riskPremium

```ts
riskPremium: number
```

The amount in percent of the risk premium

##### Remarks

Format: double

#### `Readonly` riskPremiumType

```ts
riskPremiumType: PriipsDataStaticRiskPremiumRiskPremiumType
```

##### Remarks

Format: enum
