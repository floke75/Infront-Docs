---
title: "CustomInstrument"
qualified_name: "WTK.CustomInstrument"
kind: class
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "WTK"
group: "Other"
nav_path: "WTK > Other > CustomInstrument"
source_url: "https://docs.infrontfinance.com/docs/classes/WTK.CustomInstrument.html"
defines: ["CustomInstrument"]
member_count: 8
members: ["companyId", "currency", "feed", "isin", "mic", "ticker", "vwdKey", "toString"]
member_groups:
  "Properties": ["companyId", "currency", "feed", "isin", "mic", "ticker", "vwdKey"]
  "Methods": ["toString"]
reference_count: 1
references: ["SDK.InfrontSDK.SymbolId"]
---

# CustomInstrument

CustomInstrument extends the Infront.Instrument.

#### Hierarchy

- Instrument

  - CustomInstrument

### Properties

#### companyId

```ts
companyId: string
```

An internal id used to identify a company. It is actually the cdapi issuer_id.

Inherited from Infront.Instrument.companyId

#### currency

```ts
currency: string
```

Currency used to price the desired symbol. Currency is identified by three-letter alphabetic code and should follow [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).

Inherited from Infront.Instrument.currency

#### feed

```ts
feed: number
```

A numeric value used to specify market data source.

Inherited from Infront.Instrument.feed

#### isin

```ts
isin: string
```

International Securities Identification Number. This must be used in combination with [SymbolId.mic](../SDK/SDK.InfrontSDK.SymbolId.md#mic) and in some cases [SymbolId.currency](../SDK/SDK.InfrontSDK.SymbolId.md#currency).

Inherited from Infront.Instrument.isin

#### mic

```ts
mic: string
```

Market Identifier Code is a four alphanumeric character code.

Inherited from Infront.Instrument.mic

#### ticker

```ts
ticker: string
```

Unique identifier per feed to identify a symbol. This must be used in combination with [SymbolId.feed](../SDK/SDK.InfrontSDK.SymbolId.md#feed).

Inherited from Infront.Instrument.ticker

#### vwdKey

```ts
vwdKey: string
```

An internal id used by former vwd to identify a symbol.

Inherited from Infront.Instrument.vwdKey

### Methods

#### toString

```ts
toString(delimiter?: string): string
```

Returns a string representation of an object.

##### Parameters

- delimiter: string = ':'

##### Returns string

Inherited from Infront.Instrument.toString
