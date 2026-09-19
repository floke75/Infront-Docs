---
title: "PriipsDataRiskfiguresMarketHistoricalRiskFigures"
qualified_name: "SDK.InfrontSDK.PortfolioRisk.PriipsDataRiskfiguresMarketHistoricalRiskFigures"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.PortfolioRisk"
group: "PortfolioRisk"
nav_path: "SDK > InfrontSDK > Other > PortfolioRisk > PriipsDataRiskfiguresMarketHistoricalRiskFigures"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.PortfolioRisk.PriipsDataRiskfiguresMarketHistoricalRiskFigures.html"
defines: ["PriipsDataRiskfiguresMarketHistoricalRiskFigures"]
member_count: 4
members: ["historicalDividendYield", "historicalVolatility", "maximumDrawdown", "yearsOfHistory"]
member_groups:
  "Properties": ["historicalDividendYield", "historicalVolatility", "maximumDrawdown", "yearsOfHistory"]
---

# PriipsDataRiskfiguresMarketHistoricalRiskFigures

Risk figures for generic quoted financial instruments

#### Remarks

API Schema ID: dev.infrontfinance.priips.data.riskfigures.MarketHistoricalRiskFigures

```ts
interface PriipsDataRiskfiguresMarketHistoricalRiskFigures {
    historicalDividendYield: number;
    historicalVolatility: number;
    maximumDrawdown: number;
    yearsOfHistory: number;
}
```

### Properties

#### `Readonly` historicalDividendYield

```ts
historicalDividendYield: number
```

Historical dividend yield

##### Remarks

Format: double

#### `Readonly` historicalVolatility

```ts
historicalVolatility: number
```

The historical volatility

##### Remarks

Format: double

#### `Readonly` maximumDrawdown

```ts
maximumDrawdown: number
```

The maximum drawdown

##### Remarks

Format: double

#### `Readonly` yearsOfHistory

```ts
yearsOfHistory: number
```

The number of years of history

##### Remarks

Format: double
