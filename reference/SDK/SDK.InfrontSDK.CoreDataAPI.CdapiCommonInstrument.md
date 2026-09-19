---
title: "CdapiCommonInstrument"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiCommonInstrument"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiCommonInstrument"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiCommonInstrument.html"
defines: ["CdapiCommonInstrument"]
member_count: 10
members: ["_meta", "admittance", "home_trading_venue_code", "id", "isin", "name", "name_short", "nsin", "settlement_currency_code", "share_class_figi"]
member_groups:
  "Properties": ["_meta", "admittance", "home_trading_venue_code", "id", "isin", "name", "name_short", "nsin", "settlement_currency_code", "share_class_figi"]
reference_count: 2
references: ["SDK.InfrontSDK.CoreDataAPI.BasedefEntityMeta", "SDK.InfrontSDK.CoreDataAPI.CdapiCommonInstrumentNsin"]
---

# CdapiCommonInstrument

Instrument represents a tradable financial instrument.
Can be used as a lightweight descriptor when only the id field is populated.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.common.Instrument

```ts
interface CdapiCommonInstrument {
    _meta: BasedefEntityMeta;
    admittance: string;
    home_trading_venue_code: string;
    id: string;
    isin: string;
    name: string;
    name_short: string;
    nsin: CdapiCommonInstrumentNsin;
    settlement_currency_code: string;
    share_class_figi: string;
}
```

### Properties

#### `Readonly` _meta

```ts
_meta: BasedefEntityMeta
```

Entity metadata (creation time, update time, version, etc.).

#### `Readonly` admittance

```ts
admittance: string
```

Countries in which the instrument is admitted to trading, per ISO 3166.

#### `Readonly` home_trading_venue_code

```ts
home_trading_venue_code: string
```

Code identifying the home trading venue(s). Mapped to product identifiers.

#### `Readonly` id

```ts
id: string
```

Internal unique identifier for this instrument.

#### `Readonly` isin

```ts
isin: string
```

International Securities Identification Number (ISIN) — ISO 6166.

#### `Readonly` name

```ts
name: string
```

Full legal name of the instrument.

#### `Readonly` name_short

```ts
name_short: string
```

Short form of the instrument name.

#### `Readonly` nsin

```ts
nsin: CdapiCommonInstrumentNsin
```

National security identification numbers (WKN, VALOR).

#### `Readonly` settlement_currency_code

```ts
settlement_currency_code: string
```

Settlement currency per ISO 4217.

#### `Readonly` share_class_figi

```ts
share_class_figi: string
```

FIGI (Financial Instrument Global Identifier) — open standard unique identifier
for financial instruments (formerly Bloomberg Global Identifier / BBGID).
