---
title: "PriipsDataServicesRiskvaluatorPositionRiskFiguresResponseStructuredProductRiskFigures"
qualified_name: "SDK.InfrontSDK.PortfolioRisk.PriipsDataServicesRiskvaluatorPositionRiskFiguresResponseStructuredProductRiskFigures"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.PortfolioRisk"
group: "PortfolioRisk"
nav_path: "SDK > InfrontSDK > Other > PortfolioRisk > PriipsDataServicesRiskvaluatorPositionRiskFiguresResponseStructuredProductRiskFigures"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.PortfolioRisk.PriipsDataServicesRiskvaluatorPositionRiskFiguresResponseStructuredProductRiskFigures.html"
defines: ["PriipsDataServicesRiskvaluatorPositionRiskFiguresResponseStructuredProductRiskFigures"]
member_count: 2
members: ["fixedIncomeSensitivities", "greeks"]
member_groups:
  "Properties": ["fixedIncomeSensitivities", "greeks"]
reference_count: 2
references: ["SDK.InfrontSDK.PortfolioRisk.PriipsDataRiskfiguresFixedIncomeSensitivities", "SDK.InfrontSDK.PortfolioRisk.PriipsDataRiskfiguresGreeks"]
---

# PriipsDataServicesRiskvaluatorPositionRiskFiguresResponseStructuredProductRiskFigures

#### Remarks

API Schema ID: dev.infrontfinance.priips.data.services.riskvaluator.PositionRiskFiguresResponse_StructuredProductRiskFigures

```ts
interface PriipsDataServicesRiskvaluatorPositionRiskFiguresResponseStructuredProductRiskFigures {
    fixedIncomeSensitivities: PriipsDataRiskfiguresFixedIncomeSensitivities;
    greeks: PriipsDataRiskfiguresGreeks;
}
```

### Properties

#### `Readonly` fixedIncomeSensitivities

```ts
fixedIncomeSensitivities: PriipsDataRiskfiguresFixedIncomeSensitivities
```

The fixed income sensitivities for products like convertible bonds

#### `Readonly` greeks

```ts
greeks: PriipsDataRiskfiguresGreeks
```

The greeks
