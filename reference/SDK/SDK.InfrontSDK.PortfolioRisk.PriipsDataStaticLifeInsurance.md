---
title: "PriipsDataStaticLifeInsurance"
qualified_name: "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticLifeInsurance"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.PortfolioRisk"
group: "PortfolioRisk"
nav_path: "SDK > InfrontSDK > Other > PortfolioRisk > PriipsDataStaticLifeInsurance"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticLifeInsurance.html"
defines: ["PriipsDataStaticLifeInsurance"]
member_count: 11
members: ["ageOfInsuranceStart", "componentId", "dates", "entryCostOnInvestment", "investmentPremium", "managementCostsOnInvestment", "managementFeesOnFund", "refund", "relatedBasketIds", "riskPremium", "weight"]
member_groups:
  "Properties": ["ageOfInsuranceStart", "componentId", "dates", "entryCostOnInvestment", "investmentPremium", "managementCostsOnInvestment", "managementFeesOnFund", "refund", "relatedBasketIds", "riskPremium", "weight"]
reference_count: 3
references: ["SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticBasicProductDates", "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticInsurancePayment", "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticRiskPremium"]
---

# PriipsDataStaticLifeInsurance

#### Remarks

API Schema ID: dev.infrontfinance.priips.data.static.LifeInsurance

```ts
interface PriipsDataStaticLifeInsurance {
    ageOfInsuranceStart: number;
    componentId: number;
    dates: PriipsDataStaticBasicProductDates;
    entryCostOnInvestment: PriipsDataStaticInsurancePayment;
    investmentPremium: PriipsDataStaticInsurancePayment;
    managementCostsOnInvestment: PriipsDataStaticInsurancePayment;
    managementFeesOnFund: PriipsDataStaticInsurancePayment;
    refund: PriipsDataStaticInsurancePayment;
    relatedBasketIds: readonly number[];
    riskPremium: PriipsDataStaticRiskPremium;
    weight: number;
}
```

### Properties

#### `Readonly` ageOfInsuranceStart

```ts
ageOfInsuranceStart: number
```

Age when we start the life insurance

##### Remarks

Format: double

#### `Readonly` componentId

```ts
componentId: number
```

Component ID for product component

##### Remarks

Format: int32

#### `Readonly` dates

```ts
dates: PriipsDataStaticBasicProductDates
```

The dates of the component

#### `Readonly` entryCostOnInvestment

```ts
entryCostOnInvestment: PriipsDataStaticInsurancePayment
```

Entry costs occurring possibly only the first years
of life of the insurance

#### `Readonly` investmentPremium

```ts
investmentPremium: PriipsDataStaticInsurancePayment
```

The investment premium paid by the customer

#### `Readonly` managementCostsOnInvestment

```ts
managementCostsOnInvestment: PriipsDataStaticInsurancePayment
```

Management costs on the investment

#### `Readonly` managementFeesOnFund

```ts
managementFeesOnFund: PriipsDataStaticInsurancePayment
```

Management costs on fund as absolute value

#### `Readonly` refund

```ts
refund: PriipsDataStaticInsurancePayment
```

The refunds that are paid back on the life insurance

#### `Readonly` relatedBasketIds

```ts
relatedBasketIds: readonly number[]
```

Corresponding underlying basket ID (for now only one basket expected)

#### `Readonly` riskPremium

```ts
riskPremium: PriipsDataStaticRiskPremium
```

The risk premium of the insurance

#### `Readonly` weight

```ts
weight: number
```

Payoff multiplier

##### Remarks

Format: double
