---
title: "PortfolioItem"
qualified_name: "SDK.InfrontSDK.Trading.PortfolioItem"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.Trading"
group: "Trading"
nav_path: "SDK > InfrontSDK > Other > Trading > Trading > PortfolioItem"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.Trading.PortfolioItem.html"
defines: ["PortfolioItem"]
member_count: 6
members: ["get", "symbolId", "symbolIdObservable", "key", "metadata", "observe"]
member_groups:
  "Properties": ["get", "symbolId", "symbolIdObservable"]
  "Methods": ["key", "metadata", "observe"]
reference_count: 7
references: ["SDK.InfrontSDK.SymbolField", "SDK.InfrontSDK.TradingField", "SDK.InfrontSDK.SymbolId", "Utils.InfrontUtil.Observable", "SDK.InfrontSDK.Unbind", "SDK.InfrontSDK.Trading.PortfolioData", "Utils.InfrontUtil.Binding"]
---

# PortfolioItem

Output interface for data from a PortfolioItem (position, order, trade, or net trade).

#### See

PortfolioData

```ts
interface PortfolioItem {
    get: (
        field: SymbolField | TradingField,
        valueCallback?: (value: any) => void,
    ) => any;
    symbolId: SymbolId;
    symbolIdObservable: Observable<SymbolId>;
    key(): string;
    metadata(): object;
    observe(
        field: SymbolField | TradingField,
        callback: (val: any) => void,
    ): Unbind;
}
```

### Properties

#### get

```ts
get: (
    field: SymbolField | TradingField,
    valueCallback?: (value: any) => void,
) => any
```

Returns the specified field value. If the field is a symbol field, the value is returned from the symbol.

#### symbolId

```ts
symbolId: SymbolId
```

The SymbolId for the item.

#### symbolIdObservable

```ts
symbolIdObservable: Observable<SymbolId>
```

The SymbolId Observable for the item.

### Methods

#### key

```ts
key(): string
```

Return a unique key for the item.

##### Returns string

#### metadata

```ts
metadata(): object
```

Return object with main data in a presentable format.

##### Returns object

#### observe

```ts
observe(field: SymbolField | TradingField, callback: (val: any) => void): Unbind
```

Observe position field changes. Output could be a simple callback or InfrontUtil.Binding.

##### Parameters

- field: [SymbolField](./SDK.InfrontSDK.SymbolField.md) | [TradingField](./SDK.InfrontSDK.TradingField.md)
- callback: (val: any) => void

##### Returns Unbind
