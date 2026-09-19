---
title: "OrderData"
qualified_name: "SDK.InfrontSDK.Trading.OrderData"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.Trading"
group: "Trading"
nav_path: "SDK > InfrontSDK > Other > Trading > Trading > OrderData"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.Trading.OrderData.html"
defines: ["OrderData"]
member_count: 16
members: ["activeOrder?", "algoId?", "algoParams?", "buyOrSell?", "comment?", "customerReference?", "customFields?", "kidReadStatus?", "openVolume?", "orderType?", "price?", "settlementDate?", "settlementType?", "symbolId", "validUntil?", "volume"]
member_groups:
  "Properties": ["activeOrder?", "algoId?", "algoParams?", "buyOrSell?", "comment?", "customerReference?", "customFields?", "kidReadStatus?", "openVolume?", "orderType?", "price?", "settlementDate?", "settlementType?", "symbolId", "validUntil?", "volume"]
reference_count: 4
references: ["SDK.InfrontSDK.Trading.FieldData", "SDK.InfrontSDK.SymbolId", "SDK.InfrontSDK.Trading.OrderEntryAction", "SDK.InfrontSDK.Trading.orderEntry"]
---

# OrderData

Container for [OrderEntryAction.InsertOrder](./SDK.InfrontSDK.Trading.OrderEntryAction.md#insertorder) and [OrderEntryAction.ModifyOrder](./SDK.InfrontSDK.Trading.OrderEntryAction.md#modifyorder) data

#### See

[orderEntry](./SDK.InfrontSDK.Trading.orderEntry.md)
*

```ts
interface OrderData {
    activeOrder?: boolean;
    algoId?: string;
    algoParams?: FieldData[];
    buyOrSell?: BuyOrSell;
    comment?: string;
    customerReference?: string;
    customFields?: FieldData[];
    kidReadStatus?: boolean;
    openVolume?: number;
    orderType?: OrderType;
    price?: number;
    settlementDate?: Date;
    settlementType?: SettleType;
    symbolId: SymbolId;
    validUntil?: any;
    volume: number;
}
```

### Properties

#### `Optional` activeOrder

```ts
activeOrder?: boolean
```

If set to false, the order is inserted as an inactive order. Defaults to true

#### `Optional` algoId

```ts
algoId?: string
```

Optional id for algo orders

#### `Optional` algoParams

```ts
algoParams?: FieldData[]
```

Parameters for algo orders

#### `Optional` buyOrSell

```ts
buyOrSell?: BuyOrSell
```

The order position on an insert order request

#### `Optional` comment

```ts
comment?: string
```

Optional comment field

#### `Optional` customerReference

```ts
customerReference?: string
```

Customer reference field used to log the user id of all users that have made changes to the order.

#### `Optional` customFields

```ts
customFields?: FieldData[]
```

Optional custom fields for the order

#### `Optional` kidReadStatus

```ts
kidReadStatus?: boolean
```

User confirmation about reading the key information document (KID) before placing an order

#### `Optional` openVolume

```ts
openVolume?: number
```

Optional open volume for the order

#### `Optional` orderType

```ts
orderType?: OrderType
```

The order type on an insert order request

#### `Optional` price

```ts
price?: number
```

The buy or sell price if the orderType supports a price

#### `Optional` settlementDate

```ts
settlementDate?: Date
```

The settlement date for the order.

#### `Optional` settlementType

```ts
settlementType?: SettleType
```

The settlement type for the order.

#### symbolId

```ts
symbolId: SymbolId
```

The id for the symbol in the order.

#### `Optional` validUntil

```ts
validUntil?: any
```

Optional validity of the order

#### volume

```ts
volume: number
```

The order volume
