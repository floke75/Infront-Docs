---
title: "symbolData"
qualified_name: "SDK.InfrontSDK.symbolData"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK"
group: "Symbols"
nav_path: "SDK > InfrontSDK > Symbols > symbolData"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.symbolData.html"
defines: ["symbolData"]
reference_count: 3
references: ["SDK.InfrontSDK.SymbolId", "SDK.InfrontSDK.SymbolDataOptions", "SDK.InfrontSDK.TypedDataRequest"]
---

# symbolData

> Not the same page as [`SymbolData`](./SDK.InfrontSDK.SymbolData.interface.md), the interface — the names differ only in case.

```ts
symbolData<T extends SymbolId | SymbolId[] = SymbolId>(
    options: SymbolDataOptions<T>,
): TypedDataRequest<SymbolDataType<T>>
```

Request for symbol data. The level of details can be managed by [SymbolDataOptions.content](./SDK.InfrontSDK.SymbolDataOptions.md#content) option.

#### Type Parameters

- T extends [SymbolId](./SDK.InfrontSDK.SymbolId.md) | [SymbolId](./SDK.InfrontSDK.SymbolId.md)[] = [SymbolId](./SDK.InfrontSDK.SymbolId.md)

#### Parameters

- options: [SymbolDataOptions](./SDK.InfrontSDK.SymbolDataOptions.md)<[T](#symboldatat)>

#### Returns [TypedDataRequest](./SDK.InfrontSDK.TypedDataRequest.md)<SymbolDataType<[T](#symboldatat)>>

Unsubscribe function. To unsubscribe symbol data updates, call the return function.

#### See

[SymbolDataOptions](./SDK.InfrontSDK.SymbolDataOptions.md)
