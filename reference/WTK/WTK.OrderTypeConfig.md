---
title: "OrderTypeConfig"
qualified_name: "WTK.OrderTypeConfig"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "WTK"
group: "Other"
nav_path: "WTK > Other > OrderTypeConfig"
source_url: "https://docs.infrontfinance.com/docs/interfaces/WTK.OrderTypeConfig.html"
defines: ["OrderTypeConfig"]
member_count: 7
members: ["customLayoutNo?", "label", "markets?", "strategyID?", "subStrategies?", "subTypes?", "type?"]
member_groups:
  "Properties": ["customLayoutNo?", "label", "markets?", "strategyID?", "subStrategies?", "subTypes?", "type?"]
---

# OrderTypeConfig

Order type config

```ts
interface OrderTypeConfig {
    customLayoutNo?: number;
    label: string;
    markets?: string[];
    strategyID?: string;
    subStrategies?: { label: string; strategyID: string }[];
    subTypes?: OrderTypeConfig[];
    type?: OrderType;
}
```

### Properties

#### `Optional` customLayoutNo

```ts
customLayoutNo?: number
```

custom layout number

#### label

```ts
label: string
```

label

#### `Optional` markets

```ts
markets?: string[]
```

markets

#### `Optional` strategyID

```ts
strategyID?: string
```

strategy id

#### `Optional` subStrategies

```ts
subStrategies?: { label: string; strategyID: string }[]
```

sub strategies

#### `Optional` subTypes

```ts
subTypes?: OrderTypeConfig[]
```

sub types

#### `Optional` type

```ts
type?: OrderType
```

order type
