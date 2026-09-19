---
title: "AlgoItem"
qualified_name: "SDK.InfrontSDK.Trading.AlgoItem"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.Trading"
group: "Trading"
nav_path: "SDK > InfrontSDK > Other > Trading > Trading > AlgoItem"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.Trading.AlgoItem.html"
defines: ["AlgoItem"]
member_count: 8
members: ["brokerId", "description", "id", "label", "markets?", "params", "properties", "userId"]
member_groups:
  "Properties": ["brokerId", "description", "id", "label", "markets?", "params", "properties", "userId"]
reference_count: 3
references: ["SDK.InfrontSDK.Trading.AlgoParamItem", "SDK.InfrontSDK.Trading.AlgoProperty", "SDK.InfrontSDK.Trading.MarketProperties"]
---

# AlgoItem

Output interface for all data contained in an algoItem

#### See

MarketProperties | MarketProperties.getAlgorithms

```ts
interface AlgoItem {
    brokerId: string;
    description: string;
    id: string;
    label: string;
    markets?: string[];
    params: AlgoParamItem[];
    properties: AlgoProperty[];
    userId: string;
}
```

### Properties

#### brokerId

```ts
brokerId: string
```

The broker id used for the algo.

#### description

```ts
description: string
```

Description of the algo.

#### id

```ts
id: string
```

The id used when referring to the algo when inserting / modifying an order.

#### label

```ts
label: string
```

Display label for the algo.

#### `Optional` markets

```ts
markets?: string[]
```

If specified, the algo is only applicable to the markets listed

#### params

```ts
params: AlgoParamItem[]
```

Array of parameters for the algo.

#### properties

```ts
properties: AlgoProperty[]
```

Algo specific properties.

##### See

[AlgoProperty](./SDK.InfrontSDK.Trading.AlgoProperty.md)

#### userId

```ts
userId: string
```

The user id used for the algo.
