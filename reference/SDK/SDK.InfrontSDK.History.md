---
title: "History"
qualified_name: "SDK.InfrontSDK.History"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK"
group: "Symbols"
nav_path: "SDK > InfrontSDK > Symbols > History"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.History.html"
defines: ["History"]
member_count: 3
members: ["dividends", "splits", "trades"]
member_groups:
  "Properties": ["dividends", "splits", "trades"]
reference_count: 5
references: ["SDK.InfrontSDK.Dividend", "SDK.InfrontSDK.Split", "SDK.InfrontSDK.TimeSeries", "SDK.InfrontSDK.history", "SDK.InfrontSDK.HistoryOptions"]
---

# History

An interface used to store company history.

#### See

[history](./SDK.InfrontSDK.history.md) | HistoryOptions

```ts
interface History {
    dividends: Dividend[];
    splits: Split[];
    trades: TimeSeries[];
}
```

### Properties

#### dividends

```ts
dividends: Dividend[]
```

Dividends list sorted by date.

#### splits

```ts
splits: Split[]
```

Splits list sorted by date.

#### trades

```ts
trades: TimeSeries[]
```

Trades list sorted by date.
