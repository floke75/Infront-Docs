---
title: "PriipsDataServicesRiskvaluatorPositionRiskFiguresResponseBondRiskFigures"
qualified_name: "SDK.InfrontSDK.PortfolioRisk.PriipsDataServicesRiskvaluatorPositionRiskFiguresResponseBondRiskFigures"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.PortfolioRisk"
group: "PortfolioRisk"
nav_path: "SDK > InfrontSDK > Other > PortfolioRisk > PriipsDataServicesRiskvaluatorPositionRiskFiguresResponseBondRiskFigures"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.PortfolioRisk.PriipsDataServicesRiskvaluatorPositionRiskFiguresResponseBondRiskFigures.html"
defines: ["PriipsDataServicesRiskvaluatorPositionRiskFiguresResponseBondRiskFigures"]
member_count: 2
members: ["fixedIncomeSensitivities", "greeks"]
member_groups:
  "Properties": ["fixedIncomeSensitivities", "greeks"]
reference_count: 2
references: ["SDK.InfrontSDK.PortfolioRisk.PriipsDataRiskfiguresFixedIncomeSensitivities", "SDK.InfrontSDK.PortfolioRisk.PriipsDataRiskfiguresGreeks"]
---

# PriipsDataServicesRiskvaluatorPositionRiskFiguresResponseBondRiskFigures

#### Remarks

API Schema ID: dev.infrontfinance.priips.data.services.riskvaluator.PositionRiskFiguresResponse_BondRiskFigures

```ts
interface PriipsDataServicesRiskvaluatorPositionRiskFiguresResponseBondRiskFigures {
    fixedIncomeSensitivities: PriipsDataRiskfiguresFixedIncomeSensitivities;
    greeks: PriipsDataRiskfiguresGreeks;
}
```

### Properties

#### `Readonly` fixedIncomeSensitivities

```ts
fixedIncomeSensitivities: PriipsDataRiskfiguresFixedIncomeSensitivities
```

The sensitivity corresponding to the fixed-income components of the product

#### `Readonly` greeks

```ts
greeks: PriipsDataRiskfiguresGreeks
```

Greeks for the bonds (only theta, and rho and the interest rate will be filled)
