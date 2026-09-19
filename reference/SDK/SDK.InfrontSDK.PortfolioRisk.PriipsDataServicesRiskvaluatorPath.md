---
title: "PriipsDataServicesRiskvaluatorPath"
qualified_name: "SDK.InfrontSDK.PortfolioRisk.PriipsDataServicesRiskvaluatorPath"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.PortfolioRisk"
group: "PortfolioRisk"
nav_path: "SDK > InfrontSDK > Other > PortfolioRisk > PriipsDataServicesRiskvaluatorPath"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.PortfolioRisk.PriipsDataServicesRiskvaluatorPath.html"
defines: ["PriipsDataServicesRiskvaluatorPath"]
member_count: 6
members: ["basketValues", "history", "interestRateCurves", "nestedHistories", "productValues", "spreadCurves"]
member_groups:
  "Properties": ["basketValues", "history", "interestRateCurves", "nestedHistories", "productValues", "spreadCurves"]
reference_count: 2
references: ["SDK.InfrontSDK.PortfolioRisk.PriipsDataServicesRiskvaluatorPathHistory", "SDK.InfrontSDK.PortfolioRisk.PriipsDataServicesRiskvaluatorDoubles"]
---

# PriipsDataServicesRiskvaluatorPath

#### Remarks

API Schema ID: dev.infrontfinance.priips.data.services.riskvaluator.Path

```ts
interface PriipsDataServicesRiskvaluatorPath {
    basketValues: readonly number[];
    history: PriipsDataServicesRiskvaluatorPathHistory;
    interestRateCurves: readonly PriipsDataServicesRiskvaluatorDoubles[];
    nestedHistories: readonly PriipsDataServicesRiskvaluatorPathHistory[];
    productValues: readonly number[];
    spreadCurves: readonly PriipsDataServicesRiskvaluatorDoubles[];
}
```

### Properties

#### `Readonly` basketValues

```ts
basketValues: readonly number[]
```

The final simulated value of the baskets

#### `Readonly` history

```ts
history: PriipsDataServicesRiskvaluatorPathHistory
```

The history of the position baskets (stocks, ...), products and interest rates

#### `Readonly` interestRateCurves

```ts
interestRateCurves: readonly PriipsDataServicesRiskvaluatorDoubles[]
```

The final simulated interest rate curves

#### `Readonly` nestedHistories

```ts
nestedHistories: readonly PriipsDataServicesRiskvaluatorPathHistory[]
```

Nested histories

#### `Readonly` productValues

```ts
productValues: readonly number[]
```

The final simulated value of the products

#### `Readonly` spreadCurves

```ts
spreadCurves: readonly PriipsDataServicesRiskvaluatorDoubles[]
```

The final simulated spread curves
