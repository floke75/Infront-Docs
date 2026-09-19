---
title: "CdapiFundPeerGroupInstrument"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiFundPeerGroupInstrument"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiFundPeerGroupInstrument"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiFundPeerGroupInstrument.html"
defines: ["CdapiFundPeerGroupInstrument"]
member_count: 4
members: ["_meta", "id", "source", "total_expense_ratio"]
member_groups:
  "Properties": ["_meta", "id", "source", "total_expense_ratio"]
reference_count: 2
references: ["SDK.InfrontSDK.CoreDataAPI.BasedefEntityMeta", "SDK.InfrontSDK.CoreDataAPI.CdapiFundPeerGroupInstrumentSource"]
---

# CdapiFundPeerGroupInstrument

PeerGroupInstrument holds fund peer group key figures at instrument (share class) level.
Used to benchmark a fund's costs against its peer group average.
Source: INFRONT.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.fund.PeerGroupInstrument

```ts
interface CdapiFundPeerGroupInstrument {
    _meta: BasedefEntityMeta;
    id: string;
    source: CdapiFundPeerGroupInstrumentSource;
    total_expense_ratio: number;
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

Internal unique identifier for this record (= instrument_id).

#### `Readonly` source

```ts
source: CdapiFundPeerGroupInstrumentSource
```

Data source — reuses Instrument.Source enum.

##### Remarks

Format: enum

#### `Readonly` total_expense_ratio

```ts
total_expense_ratio: number
```

Peer group average Total Expense Ratio (TER) — used to compare this fund's costs
against similar funds in the same peer group.

##### Remarks

Format: double
