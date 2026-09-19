---
title: "CdapiEtpInstrumentEtn"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiEtpInstrumentEtn"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiEtpInstrumentEtn"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiEtpInstrumentEtn.html"
defines: ["CdapiEtpInstrumentEtn"]
member_count: 13
members: ["_meta", "country_of_origin_code", "foundation_date", "id", "is_distribution", "is_replication", "replication_level", "replication_level_de", "replication_level_en", "replication_level_fr", "replication_level_nl", "replication_type_code", "volume"]
member_groups:
  "Properties": ["_meta", "country_of_origin_code", "foundation_date", "id", "is_distribution", "is_replication", "replication_level", "replication_level_de", "replication_level_en", "replication_level_fr", "replication_level_nl", "replication_type_code", "volume"]
reference_count: 2
references: ["SDK.InfrontSDK.CoreDataAPI.BasedefEntityMeta", "SDK.InfrontSDK.CoreDataAPI.CdapiEtpInstrumentEtnVolume"]
---

# CdapiEtpInstrumentEtn

InstrumentEtn represents the master data for an Exchange Traded Note (ETN).
An ETN is an unsecured debt instrument issued by a financial institution
whose returns are linked to a market index or strategy.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.etp.InstrumentEtn

```ts
interface CdapiEtpInstrumentEtn {
    _meta: BasedefEntityMeta;
    country_of_origin_code: string;
    foundation_date: string;
    id: string;
    is_distribution: boolean;
    is_replication: boolean;
    replication_level: string;
    replication_level_de: string;
    replication_level_en: string;
    replication_level_fr: string;
    replication_level_nl: string;
    replication_type_code: string;
    volume: CdapiEtpInstrumentEtnVolume;
}
```

### Properties

#### `Readonly` _meta

```ts
_meta: BasedefEntityMeta
```

Entity metadata (creation time, update time, version, etc.).
Defined externally in dev/infrontfinance/basedef/message.proto.

#### `Readonly` country_of_origin_code

```ts
country_of_origin_code: string
```

ISO 3166-1 alpha-2 country code of the ETN's country of origin (e.g. "DE", "IE").

#### `Readonly` foundation_date

```ts
foundation_date: string
```

Date the ETN was founded / launched. ISO-8601 format recommended.

#### `Readonly` id

```ts
id: string
```

Internal unique identifier for this instrument.

#### `Readonly` is_distribution

```ts
is_distribution: boolean
```

Indicates whether this ETN distributes income (true) or accumulates it (false).

#### `Readonly` is_replication

```ts
is_replication: boolean
```

True when replication_type_code is set; indicates physical or synthetic replication.

#### `Readonly` replication_level

```ts
replication_level: string
```

Indicates whether the ETN is fully replicated or uses sampling.
Possible values depend on the data provider (e.g. "Full Replication", "Sampling").

#### `Readonly` replication_level_de

```ts
replication_level_de: string
```

Localised replication level description — German.

#### `Readonly` replication_level_en

```ts
replication_level_en: string
```

Localised replication level description — English.

#### `Readonly` replication_level_fr

```ts
replication_level_fr: string
```

Localised replication level description — French.

#### `Readonly` replication_level_nl

```ts
replication_level_nl: string
```

Localised replication level description — Dutch.

#### `Readonly` replication_type_code

```ts
replication_type_code: string
```

Code identifying the replication method (e.g. "PHYSICAL", "SYNTHETIC").
is_replication must be true when this field is populated.

#### `Readonly` volume

```ts
volume: CdapiEtpInstrumentEtnVolume
```

Traded volume of the ETN. See nested Volume message for field details.
