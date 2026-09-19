---
title: "CdapiEquityInstrumentEquity"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiEquityInstrumentEquity"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiEquityInstrumentEquity"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiEquityInstrumentEquity.html"
defines: ["CdapiEquityInstrumentEquity"]
member_count: 7
members: ["_meta", "id", "outstanding_shares", "outstanding_shares_date", "source", "vote_per_share", "voting"]
member_groups:
  "Properties": ["_meta", "id", "outstanding_shares", "outstanding_shares_date", "source", "vote_per_share", "voting"]
reference_count: 2
references: ["SDK.InfrontSDK.CoreDataAPI.BasedefEntityMeta", "SDK.InfrontSDK.CoreDataAPI.CdapiEquityInstrumentEquitySource"]
---

# CdapiEquityInstrumentEquity

InstrumentEquity represents the master data for an equity (stock) instrument.
Source: EDI.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.equity.InstrumentEquity

```ts
interface CdapiEquityInstrumentEquity {
    _meta: BasedefEntityMeta;
    id: string;
    outstanding_shares: number;
    outstanding_shares_date: string;
    source: CdapiEquityInstrumentEquitySource;
    vote_per_share: number;
    voting: string;
}
```

### Properties

#### `Readonly` _meta

```ts
_meta: BasedefEntityMeta
```

Entity metadata (creation time, update time, version, etc.).

#### `Readonly` id

```ts
id: string
```

Internal unique identifier for this instrument (= instrument_id).

#### `Readonly` outstanding_shares

```ts
outstanding_shares: number
```

Total number of shares issued and currently held by all shareholders,
including restricted shares held by the company's officers and insiders.

##### Remarks

Format: int64

#### `Readonly` outstanding_shares_date

```ts
outstanding_shares_date: string
```

Date as of which the outstanding_shares figure is valid. ISO-8601 recommended.

#### `Readonly` source

```ts
source: CdapiEquityInstrumentEquitySource
```

Data source for this equity instrument record.

##### Remarks

Format: enum

#### `Readonly` vote_per_share

```ts
vote_per_share: number
```

Number of votes per share — may differ from 1 for shares with multiple or fractional voting rights.

##### Remarks

Format: double

#### `Readonly` voting

```ts
voting: string
```

Voting rights classification for this share class (e.g. "VOTING", "NON_VOTING").
