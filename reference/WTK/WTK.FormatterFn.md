---
title: "FormatterFn<TValue>"
qualified_name: "WTK.FormatterFn"
kind: type-alias
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "WTK"
group: "Other"
nav_path: "WTK > Other > FormatterFn"
source_url: "https://docs.infrontfinance.com/docs/types/WTK.FormatterFn.html"
defines: ["FormatterFn"]
reference_count: 2
references: ["SDK.InfrontSDK.SymbolData", "SDK.InfrontSDK.Trading.PortfolioItem"]
---

# FormatterFn<TValue>

```ts
FormatterFn: (
    value: TValue,
    symbolDataLike?: SymbolData | PortfolioItem,
) => string
```

FormatterFn

#### Type Parameters

- TValue = unknown

#### Type Declaration

- (value: TValue, symbolDataLike?: SymbolData | PortfolioItem): string

  #### Parameters

  - value: [TValue](#tvalue)
  - `Optional` symbolDataLike: [SymbolData](../SDK/SDK.InfrontSDK.SymbolData.md) | [PortfolioItem](../SDK/SDK.InfrontSDK.Trading.PortfolioItem.md)

  #### Returns string
