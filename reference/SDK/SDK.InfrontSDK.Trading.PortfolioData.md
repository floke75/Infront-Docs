---
title: "PortfolioData"
qualified_name: "SDK.InfrontSDK.Trading.PortfolioData"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.Trading"
group: "Other"
nav_path: "SDK > InfrontSDK > Other > Trading > Other > PortfolioData"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.Trading.PortfolioData.html"
defines: ["PortfolioData"]
member_count: 9
members: ["events", "fullName", "name", "netTrades", "orders", "positions", "trades", "unsubscribePortfolio", "observeValue"]
member_groups:
  "Properties": ["events", "fullName", "name", "netTrades", "orders", "positions", "trades", "unsubscribePortfolio"]
  "Methods": ["observeValue"]
reference_count: 10
references: ["SDK.InfrontSDK.FinancialCalendarOptions", "Utils.InfrontUtil.ObservableArray", "SDK.InfrontSDK.CalendarEvent", "SDK.InfrontSDK.Trading.DisposableObservableArray", "SDK.InfrontSDK.Trading.PortfolioFilterFunction", "SDK.InfrontSDK.Trading.OrderState", "SDK.InfrontSDK.Trading.PositionFilter", "SDK.InfrontSDK.Trading.TradesFilter", "SDK.InfrontSDK.Unbind", "Utils.InfrontUtil.Binding"]
---

# PortfolioData

```ts
interface PortfolioData {
    events: (
        options: FinancialCalendarOptions<ObservableArray<CalendarEvent>>,
    ) => void;
    fullName: string;
    name: string;
    netTrades: () => DisposableObservableArray;
    orders: (
        filter?: PortfolioFilterFunction | OrderState | OrderState[],
        daysBack?: number,
    ) => DisposableObservableArray;
    positions: (
        filter?: PositionFilter | PortfolioFilterFunction,
    ) => DisposableObservableArray;
    trades: (
        filter?: PortfolioFilterFunction | TradesFilter,
        daysBack?: number,
    ) => DisposableObservableArray;
    unsubscribePortfolio: () => void;
    observeValue(valueName: string, callback: (val: any) => void): Unbind;
}
```

### Properties

#### events

```ts
events: (
    options: FinancialCalendarOptions<ObservableArray<CalendarEvent>>,
) => void
```

Return an ObservableArray with all calendar events concerning positions in the portfolio.

#### fullName

```ts
fullName: string
```

Return the full name of the portfolio

#### name

```ts
name: string
```

Return the name of the portfolio

#### netTrades

```ts
netTrades: () => DisposableObservableArray
```

Return an ObservableArray with all net trades in the portfolio.

#### orders

```ts
orders: (
    filter?: PortfolioFilterFunction | OrderState | OrderState[],
    daysBack?: number,
) => DisposableObservableArray
```

Return an ObservableArray with all orders in the portfolio.

##### Type Declaration

- (filter?: PortfolioFilterFunction | OrderState | OrderState[],    daysBack?: number,): DisposableObservableArray

  ##### Parameters

  - `Optional` filter: [PortfolioFilterFunction](./SDK.InfrontSDK.Trading.PortfolioFilterFunction.md) | [OrderState](./SDK.InfrontSDK.Trading.OrderState.md) | [OrderState](./SDK.InfrontSDK.Trading.OrderState.md)[]

    [OrderState](./SDK.InfrontSDK.Trading.OrderState.md) | [OrderState[](./SDK.InfrontSDK.Trading.OrderState.md)]
  - `Optional` daysBack: number

    Add historical trades for a number of days if supported by the trading gateway

  ##### Returns [DisposableObservableArray](./SDK.InfrontSDK.Trading.DisposableObservableArray.md)

#### positions

```ts
positions: (
    filter?: PositionFilter | PortfolioFilterFunction,
) => DisposableObservableArray
```

Return an ObservableArray with all positions in the portfolio.

##### Type Declaration

- (filter?: PositionFilter | PortfolioFilterFunction): DisposableObservableArray

  ##### Parameters

  - `Optional` filter: PositionFilter | [PortfolioFilterFunction](./SDK.InfrontSDK.Trading.PortfolioFilterFunction.md)

    PositionFilter

  ##### Returns [DisposableObservableArray](./SDK.InfrontSDK.Trading.DisposableObservableArray.md)

#### trades

```ts
trades: (
    filter?: PortfolioFilterFunction | TradesFilter,
    daysBack?: number,
) => DisposableObservableArray
```

Return an ObservableArray with all trades in the portfolio.

##### Type Declaration

- (filter?: PortfolioFilterFunction | TradesFilter,    daysBack?: number,): DisposableObservableArray

  ##### Parameters

  - `Optional` filter: [PortfolioFilterFunction](./SDK.InfrontSDK.Trading.PortfolioFilterFunction.md) | TradesFilter

    TradesFilter
  - `Optional` daysBack: number

    Add historical trades for a number of days if supported by the trading gateway

  ##### Returns [DisposableObservableArray](./SDK.InfrontSDK.Trading.DisposableObservableArray.md)

#### unsubscribePortfolio

```ts
unsubscribePortfolio: () => void
```

Unsubscribe portfolio and symbol subscriptions.

### Methods

#### observeValue

```ts
observeValue(valueName: string, callback: (val: any) => void): Unbind
```

Observe portfolio field changes. Output could be a simple callback or InfrontUtil.Binding.

##### Parameters

- valueName: string
- callback: (val: any) => void

##### Returns Unbind
