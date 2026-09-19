---
title: "SymbolId"
qualified_name: "SDK.InfrontSDK.SymbolId"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK"
group: "Other"
nav_path: "SDK > InfrontSDK > Other > SymbolId"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.SymbolId.html"
defines: ["SymbolId"]
member_count: 10
members: ["companyId?", "currency?", "feed?", "fullName?", "instrumentId?", "isin?", "listingId?", "mic?", "ticker?", "vwdKey?"]
member_groups:
  "Properties": ["companyId?", "currency?", "feed?", "fullName?", "instrumentId?", "isin?", "listingId?", "mic?", "ticker?", "vwdKey?"]
reference_count: 1
references: ["SDK.InfrontSDK.symbolData"]
---

# SymbolId

An interface used to identify a symbol. A symbol can be identified by one of these identifiers:

- Feed and ticker pair.
- ISIN, mic and currency.
- Company ID.
- vwdKey.

#### See

[symbolData](./SDK.InfrontSDK.symbolData.md)

```ts
interface SymbolId {
    companyId?: string;
    currency?: string;
    feed?: number;
    fullName?: string;
    instrumentId?: string;
    isin?: string;
    listingId?: string;
    mic?: string;
    ticker?: string;
    vwdKey?: string;
}
```

### Properties

#### `Optional` companyId

```ts
companyId?: string
```

An internal id used to identify a company. It is actually the cdapi issuer_id.

#### `Optional` currency

```ts
currency?: string
```

Currency used to price the desired symbol. Currency is identified by three-letter alphabetic code and should follow [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).

#### `Optional` feed

```ts
feed?: number
```

A numeric value used to specify market data source.

#### `Optional` fullName

```ts
fullName?: string
```

Optional full name of the symbol.

#### `Optional` instrumentId

```ts
instrumentId?: string
```

An internal cdapi id to identify a symbol, like ticker.

#### `Optional` isin

```ts
isin?: string
```

International Securities Identification Number. This must be used in combination with [SymbolId.mic](#mic) and in some cases [SymbolId.currency](#currency).

#### `Optional` listingId

```ts
listingId?: string
```

An internal cdapi id to identify a symbol, like ticker + feed.

#### `Optional` mic

```ts
mic?: string
```

Market Identifier Code is a four alphanumeric character code.

#### `Optional` ticker

```ts
ticker?: string
```

Unique identifier per feed to identify a symbol. This must be used in combination with [SymbolId.feed](#feed).

#### `Optional` vwdKey

```ts
vwdKey?: string
```

An internal id used by former vwd to identify a symbol.
