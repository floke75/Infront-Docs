---
title: "CdapiEquityCompanyOutstandingShares"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiEquityCompanyOutstandingShares"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiEquityCompanyOutstandingShares"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiEquityCompanyOutstandingShares.html"
defines: ["CdapiEquityCompanyOutstandingShares"]
member_count: 8
members: ["date", "id", "instrument_id", "issuer_id", "outstanding_shares", "primary_listing_id", "share_class_outstanding_shares", "source"]
member_groups:
  "Properties": ["date", "id", "instrument_id", "issuer_id", "outstanding_shares", "primary_listing_id", "share_class_outstanding_shares", "source"]
reference_count: 1
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiEquityCompanyOutstandingSharesSource"]
---

# CdapiEquityCompanyOutstandingShares

CompanyOutstandingShares holds historical outstanding share counts for a company,
broken down by share class and at company level.
Available for sources INFRONT and MORNINGSTAR.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.equity.CompanyOutstandingShares

```ts
interface CdapiEquityCompanyOutstandingShares {
    date: string;
    id: number;
    instrument_id: string;
    issuer_id: string;
    outstanding_shares: number;
    primary_listing_id: string;
    share_class_outstanding_shares: number;
    source: CdapiEquityCompanyOutstandingSharesSource;
}
```

### Properties

#### `Readonly` date

```ts
date: string
```

Date as of which the share counts are valid. ISO-8601 recommended.

#### `Readonly` id

```ts
id: number
```

Internal unique identifier for this record.

##### Remarks

Format: int32

#### `Readonly` instrument_id

```ts
instrument_id: string
```

Instrument identifier for the specific share class.

#### `Readonly` issuer_id

```ts
issuer_id: string
```

Issuer identifier this record belongs to.

#### `Readonly` outstanding_shares

```ts
outstanding_shares: number
```

Total outstanding shares at company level (all share classes combined).

##### Remarks

Format: int64

#### `Readonly` primary_listing_id

```ts
primary_listing_id: string
```

Primary listing identifier for the share class.

#### `Readonly` share_class_outstanding_shares

```ts
share_class_outstanding_shares: number
```

Outstanding shares for this specific share class only.

##### Remarks

Format: int64

#### `Readonly` source

```ts
source: CdapiEquityCompanyOutstandingSharesSource
```

Data source for this record.

##### Remarks

Format: enum
