---
title: "ChainContent"
qualified_name: "SDK.InfrontSDK.ChainContent"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK"
group: "Other"
nav_path: "SDK > InfrontSDK > Other > ChainContent"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.ChainContent.html"
defines: ["ChainContent"]
member_count: 6
members: ["chainType", "description", "items", "marketActivity", "name", "providerId"]
member_groups:
  "Properties": ["chainType", "description", "items", "marketActivity", "name", "providerId"]
reference_count: 1
references: ["SDK.InfrontSDK.ChainContentItem"]
---

# ChainContent

```ts
interface ChainContent {
    chainType: ChainType;
    description: string;
    items: ChainContentItem[];
    marketActivity: MarketActivityCallback;
    name: string;
    providerId: number;
}
```

### Properties

#### chainType

```ts
chainType: ChainType
```

Type of chain

#### description

```ts
description: string
```

Chain description

#### items

```ts
items: ChainContentItem[]
```

Array of ChainContentItem

#### marketActivity

```ts
marketActivity: MarketActivityCallback
```

Register an observer which will receive a callback when the
market activity for the chain changes.

#### name

```ts
name: string
```

Chain name

#### providerId

```ts
providerId: number
```

Id of the chain provider
