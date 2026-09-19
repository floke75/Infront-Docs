---
title: "TradingChannelData"
qualified_name: "SDK.InfrontSDK.Trading.TradingChannelData"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.Trading"
group: "Trading"
nav_path: "SDK > InfrontSDK > Other > Trading > Trading > TradingChannelData"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.Trading.TradingChannelData.html"
defines: ["TradingChannelData"]
member_count: 3
members: ["done", "observe", "setActivePortfolio"]
member_groups:
  "Methods": ["done", "observe", "setActivePortfolio"]
reference_count: 2
references: ["SDK.InfrontSDK.Trading.ChannelObserver", "SDK.InfrontSDK.Unbind"]
---

# TradingChannelData

Output interface for a trading channel

```ts
interface TradingChannelData {
    done(): void;
    observe(observer: ChannelObserver): Unbind;
    setActivePortfolio(portfolioName: string): void;
}
```

### Methods

#### done

```ts
done(): void
```

Disconnect from a trading channel and remove observer from the callback list.

##### Returns void

#### observe

```ts
observe(observer: ChannelObserver): Unbind
```

Observer channel events. See ChannelObserver for available event callbacks.

##### Parameters

- observer: ChannelObserver

##### Returns Unbind

#### setActivePortfolio

```ts
setActivePortfolio(portfolioName: string): void
```

Set the active portfolio for the trading channel.
All connected observers will immediately be notified with the
ChannelObserver.onActivePortfolioChanged callback, and later with the
ChannelObserver.onActivePortfolioReady callback when all portfolio data has been received.

##### Parameters

- portfolioName: string

##### Returns void
