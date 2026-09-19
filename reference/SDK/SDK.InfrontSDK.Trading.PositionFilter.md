---
title: "PositionFilter"
qualified_name: "SDK.InfrontSDK.Trading.PositionFilter"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.Trading"
group: "Trading"
nav_path: "SDK > InfrontSDK > Other > Trading > Trading > PositionFilter"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.Trading.PositionFilter.html"
defines: ["PositionFilter"]
member_count: 7
members: ["excludeMarkets?", "excludeSymbolSubTypes?", "excludeSymbolTypes?", "includeMarkets?", "includePositionTypes?", "includeSymbolSubTypes?", "includeSymbolTypes?"]
member_groups:
  "Properties": ["excludeMarkets?", "excludeSymbolSubTypes?", "excludeSymbolTypes?", "includeMarkets?", "includePositionTypes?", "includeSymbolSubTypes?", "includeSymbolTypes?"]
reference_count: 4
references: ["SDK.InfrontSDK.SymbolSubType", "SDK.InfrontSDK.SymbolType", "SDK.InfrontSDK.Trading.PositionType", "SDK.InfrontSDK.Trading.PortfolioData"]
---

# PositionFilter

Filter for including or excluding position items from positions method on PortfolioData

#### See

PortfolioData

```ts
interface PositionFilter {
    excludeMarkets?: string | string[];
    excludeSymbolSubTypes?: SymbolSubType | SymbolSubType[];
    excludeSymbolTypes?: SymbolType | SymbolType[];
    includeMarkets?: string | string[];
    includePositionTypes?: PositionType | PositionType[];
    includeSymbolSubTypes?: SymbolSubType | SymbolSubType[];
    includeSymbolTypes?: SymbolType | SymbolType[];
}
```

### Properties

#### `Optional` excludeMarkets

```ts
excludeMarkets?: string | string[]
```

Markets to be excluded from the response. Can be a string or an array of strings.

#### `Optional` excludeSymbolSubTypes

```ts
excludeSymbolSubTypes?: SymbolSubType | SymbolSubType[]
```

Symbol sub types to be excluded from the response. Can be a string or an array of strings.

#### `Optional` excludeSymbolTypes

```ts
excludeSymbolTypes?: SymbolType | SymbolType[]
```

Symbol types to be excluded from the response. Can be a string or an array of strings.

#### `Optional` includeMarkets

```ts
includeMarkets?: string | string[]
```

Markets to be included in the response. Can be a string or an array of strings.

#### `Optional` includePositionTypes

```ts
includePositionTypes?: PositionType | PositionType[]
```

Position types to be included in the response. Can be a string or an array of strings.

#### `Optional` includeSymbolSubTypes

```ts
includeSymbolSubTypes?: SymbolSubType | SymbolSubType[]
```

Symbol sub types to be included in the response. Can be a string or an array of strings.

#### `Optional` includeSymbolTypes

```ts
includeSymbolTypes?: SymbolType | SymbolType[]
```

Symbol types to be included in the response. Can be a string or an array of strings.
