---
title: "PriipsDataRiskfiguresFixedIncomeSensitivities"
qualified_name: "SDK.InfrontSDK.PortfolioRisk.PriipsDataRiskfiguresFixedIncomeSensitivities"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.PortfolioRisk"
group: "PortfolioRisk"
nav_path: "SDK > InfrontSDK > Other > PortfolioRisk > PriipsDataRiskfiguresFixedIncomeSensitivities"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.PortfolioRisk.PriipsDataRiskfiguresFixedIncomeSensitivities.html"
defines: ["PriipsDataRiskfiguresFixedIncomeSensitivities"]
member_count: 10
members: ["convexity", "creditSpread", "currentCoupon", "dollarValueOfABasisPoint", "firstCallDate", "iqLiquidityScore", "macaulayDuration", "modifiedDuration", "ratings", "yieldToMaturity"]
member_groups:
  "Properties": ["convexity", "creditSpread", "currentCoupon", "dollarValueOfABasisPoint", "firstCallDate", "iqLiquidityScore", "macaulayDuration", "modifiedDuration", "ratings", "yieldToMaturity"]
reference_count: 1
references: ["SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticCreditAssessment"]
---

# PriipsDataRiskfiguresFixedIncomeSensitivities

Risk figures for fixed income instruments

#### Remarks

API Schema ID: dev.infrontfinance.priips.data.riskfigures.FixedIncomeSensitivities

```ts
interface PriipsDataRiskfiguresFixedIncomeSensitivities {
    convexity: number;
    creditSpread: number;
    currentCoupon: number;
    dollarValueOfABasisPoint: number;
    firstCallDate: string;
    iqLiquidityScore: number;
    macaulayDuration: number;
    modifiedDuration: number;
    ratings: readonly PriipsDataStaticCreditAssessment[];
    yieldToMaturity: number;
}
```

### Properties

#### `Readonly` convexity

```ts
convexity: number
```

The convexity

##### Remarks

Format: double

#### `Readonly` creditSpread

```ts
creditSpread: number
```

The credit spread

##### Remarks

Format: double

#### `Readonly` currentCoupon

```ts
currentCoupon: number
```

The current coupon

##### Remarks

Format: double

#### `Readonly` dollarValueOfABasisPoint

```ts
dollarValueOfABasisPoint: number
```

The Dollar Value of a Basis Point

##### Remarks

Format: double

#### `Readonly` firstCallDate

```ts
firstCallDate: string
```

The first call date, filled for callable bond

#### `Readonly` iqLiquidityScore

```ts
iqLiquidityScore: number
```

The IQ liquidity score of the bond

##### Remarks

Format: int32

#### `Readonly` macaulayDuration

```ts
macaulayDuration: number
```

The macaulay duration

##### Remarks

Format: double

#### `Readonly` modifiedDuration

```ts
modifiedDuration: number
```

The modified duration

##### Remarks

Format: double

#### `Readonly` ratings

```ts
ratings: readonly PriipsDataStaticCreditAssessment[]
```

The ratings

#### `Readonly` yieldToMaturity

```ts
yieldToMaturity: number
```

The yield to maturity

##### Remarks

Format: double
