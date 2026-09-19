---
title: "CdapiCommonListingAdditional"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiCommonListingAdditional"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiCommonListingAdditional"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiCommonListingAdditional.html"
defines: ["CdapiCommonListingAdditional"]
member_count: 6
members: ["_meta", "delisting_date", "id", "ipo_status", "lot_size", "source"]
member_groups:
  "Properties": ["_meta", "delisting_date", "id", "ipo_status", "lot_size", "source"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.BasedefEntityMeta", "SDK.InfrontSDK.CoreDataAPI.CdapiCommonDictionary", "SDK.InfrontSDK.CoreDataAPI.CdapiCommonListingAdditionalSource"]
---

# CdapiCommonListingAdditional

ListingAdditional delivers additional listing-level attributes from a dedicated source.
Sources: EDI, WM, GENERAL.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.common.ListingAdditional

```ts
interface CdapiCommonListingAdditional {
    _meta: BasedefEntityMeta;
    delisting_date: string;
    id: string;
    ipo_status: CdapiCommonDictionary;
    lot_size: number;
    source: CdapiCommonListingAdditionalSource;
}
```

### Properties

#### `Readonly` _meta

```ts
_meta: BasedefEntityMeta
```

Entity metadata (creation time, update time, version, etc.).

#### `Readonly` delisting_date

```ts
delisting_date: string
```

Date on which the listing was removed from trading. ISO-8601 recommended. Sources: EDI, GENERAL.

#### `Readonly` id

```ts
id: string
```

Internal unique identifier for this listing.

#### `Readonly` ipo_status

```ts
ipo_status: CdapiCommonDictionary
```

IPO status classification. Source: WM.

#### `Readonly` lot_size

```ts
lot_size: number
```

Minimum number of shares/units per transaction (lot size). Source: EDI.

##### Remarks

Format: float

#### `Readonly` source

```ts
source: CdapiCommonListingAdditionalSource
```

Data source for this record.

##### Remarks

Format: enum
