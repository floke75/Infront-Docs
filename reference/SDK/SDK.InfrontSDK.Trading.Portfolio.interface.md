---
title: "Portfolio"
qualified_name: "SDK.InfrontSDK.Trading.Portfolio"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.Trading"
group: "Trading"
nav_path: "SDK > InfrontSDK > Other > Trading > Trading > Portfolio"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.Trading.Portfolio.html"
defines: ["Portfolio"]
member_count: 7
members: ["description", "displayName", "fullName", "name", "portfolioType", "tradingPower?", "tradingPowerCurrency?"]
member_groups:
  "Properties": ["description", "displayName", "fullName", "name", "portfolioType", "tradingPower?", "tradingPowerCurrency?"]
reference_count: 4
references: ["SDK.InfrontSDK.Trading.PortfolioType", "SDK.InfrontSDK.Trading.portfolio", "SDK.InfrontSDK.Trading.PortfolioOptions", "SDK.InfrontSDK.Trading.portfolioList"]
---

# Portfolio

> Not the same page as [`portfolio`](./SDK.InfrontSDK.Trading.portfolio.md), the function — the names differ only in case.

output interface for name, description and type of portfolio.
An array of Portfolio is returned from the [portfolio](./SDK.InfrontSDK.Trading.portfolio.md) request with PortfolioAction.Portfolios

#### See

PortfolioOptions

```ts
interface Portfolio {
    description: string;
    displayName: string;
    fullName: string;
    name: string;
    portfolioType: PortfolioType;
    tradingPower?: number;
    tradingPowerCurrency?: string;
}
```

### Properties

#### description

```ts
description: string
```

Additional description of the portfolio

#### displayName

```ts
displayName: string
```

Field used for displaying the portfolio name.

#### fullName

```ts
fullName: string
```

Long portfolio name including name and description

#### name

```ts
name: string
```

Short name of the portfolio

#### portfolioType

```ts
portfolioType: PortfolioType
```

Type of portfolio. Note: Currently only Equity portfolios are supported by the API

#### `Optional` tradingPower

```ts
tradingPower?: number
```

Trading power for the portfolio. Optionally included for a [portfolioList](./SDK.InfrontSDK.Trading.portfolioList.md) if specified in the request.

#### `Optional` tradingPowerCurrency

```ts
tradingPowerCurrency?: string
```

Trading power currency for the portfolio. Optionally included for a [portfolioList](./SDK.InfrontSDK.Trading.portfolioList.md) if specified in the request.
