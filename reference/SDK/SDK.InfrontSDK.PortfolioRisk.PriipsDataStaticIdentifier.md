---
title: "PriipsDataStaticIdentifier"
qualified_name: "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticIdentifier"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.PortfolioRisk"
group: "PortfolioRisk"
nav_path: "SDK > InfrontSDK > Other > PortfolioRisk > PriipsDataStaticIdentifier"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticIdentifier.html"
defines: ["PriipsDataStaticIdentifier"]
member_count: 13
members: ["aut", "bloomberg", "ch", "cusip", "customIssuerId", "deu", "edgId", "idsFeedNumber", "idsTicker", "isin", "reuters", "swx", "vwd"]
member_groups:
  "Properties": ["aut", "bloomberg", "ch", "cusip", "customIssuerId", "deu", "edgId", "idsFeedNumber", "idsTicker", "isin", "reuters", "swx", "vwd"]
---

# PriipsDataStaticIdentifier

Identifier information on the product's identifier.

#### Remarks

API Schema ID: dev.infrontfinance.priips.data.static.Identifier

```ts
interface PriipsDataStaticIdentifier {
    aut: string;
    bloomberg: string;
    ch: string;
    cusip: string;
    customIssuerId: string;
    deu: string;
    edgId: number;
    idsFeedNumber: number;
    idsTicker: string;
    isin: string;
    reuters: string;
    swx: string;
    vwd: string;
}
```

### Properties

#### `Readonly` aut

```ts
aut: string
```

Austrian identifier.

#### `Readonly` bloomberg

```ts
bloomberg: string
```

Bloomberg ticker.

#### `Readonly` ch

```ts
ch: string
```

Swiss identifier (valor number).

#### `Readonly` cusip

```ts
cusip: string
```

CUSIP identifier (U.S. Committee on Uniform Security Identification Procedures)

#### `Readonly` customIssuerId

```ts
customIssuerId: string
```

Customer-specific instrument identifier.

#### `Readonly` deu

```ts
deu: string
```

German identifier (Wertpapierkennummer, WKN).

#### `Readonly` edgId

```ts
edgId: number
```

INTERNAL: IQ ID, used for underlyings.

##### Remarks

Format: int32

#### `Readonly` idsFeedNumber

```ts
idsFeedNumber: number
```

Corresponding infront ids_feed_number

##### Remarks

Format: int32

#### `Readonly` idsTicker

```ts
idsTicker: string
```

Infront ids ticker

#### `Readonly` isin

```ts
isin: string
```

ISIN (International Security Identification).

#### `Readonly` reuters

```ts
reuters: string
```

Reuters/RIC ticker.

#### `Readonly` swx

```ts
swx: string
```

SIX Swiss Exchange identifier

#### `Readonly` vwd

```ts
vwd: string
```

vwd Ticker.
