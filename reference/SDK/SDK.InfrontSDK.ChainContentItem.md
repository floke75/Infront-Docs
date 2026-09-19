---
title: "ChainContentItem"
qualified_name: "SDK.InfrontSDK.ChainContentItem"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK"
group: "Other"
nav_path: "SDK > InfrontSDK > Other > ChainContentItem"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.ChainContentItem.html"
defines: ["ChainContentItem"]
member_count: 9
members: ["currency", "exchangeSymbol", "feed", "feedInfo", "fullname", "isin", "symbolSubType", "symbolType", "ticker"]
member_groups:
  "Properties": ["currency", "exchangeSymbol", "feed", "feedInfo", "fullname", "isin", "symbolSubType", "symbolType", "ticker"]
reference_count: 3
references: ["SDK.InfrontSDK.FeedInfo", "SDK.InfrontSDK.SymbolSubType", "SDK.InfrontSDK.SymbolType"]
---

# ChainContentItem

```ts
interface ChainContentItem {
    currency: string;
    exchangeSymbol: string;
    feed: number;
    feedInfo: FeedInfo;
    fullname: string;
    isin: string;
    symbolSubType: SymbolSubType;
    symbolType: SymbolType;
    ticker: string;
}
```

### Properties

#### currency

```ts
currency: string
```

Instrument currency

#### exchangeSymbol

```ts
exchangeSymbol: string
```

Optional exchange symbol name

#### feed

```ts
feed: number
```

Feed number

#### feedInfo

```ts
feedInfo: FeedInfo
```

Feed info

#### fullname

```ts
fullname: string
```

Instrument full name

#### isin

```ts
isin: string
```

Instrument ISIN

#### symbolSubType

```ts
symbolSubType: SymbolSubType
```

Optional symbol sub type

#### symbolType

```ts
symbolType: SymbolType
```

Symbol type

#### ticker

```ts
ticker: string
```

Symbol ticker
