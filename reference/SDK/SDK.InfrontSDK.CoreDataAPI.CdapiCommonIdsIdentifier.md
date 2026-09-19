---
title: "CdapiCommonIdsIdentifier"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiCommonIdsIdentifier"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiCommonIdsIdentifier"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiCommonIdsIdentifier.html"
defines: ["CdapiCommonIdsIdentifier"]
member_count: 3
members: ["ids_feed_code", "ids_feed_number", "ids_ticker"]
member_groups:
  "Properties": ["ids_feed_code", "ids_feed_number", "ids_ticker"]
---

# CdapiCommonIdsIdentifier

IdsIdentifier holds the composite IDS feed-level identifier for a market data source.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.common.IdsIdentifier

```ts
interface CdapiCommonIdsIdentifier {
    ids_feed_code: string;
    ids_feed_number: number;
    ids_ticker: string;
}
```

### Properties

#### `Readonly` ids_feed_code

```ts
ids_feed_code: string
```

IDS feed code — human-readable code linked to the ids_feed_number (Infront data universe).

#### `Readonly` ids_feed_number

```ts
ids_feed_number: number
```

Numeric IDS feed number identifying the exchange or data source.

##### Remarks

Format: int32

#### `Readonly` ids_ticker

```ts
ids_ticker: string
```

IDS ticker symbol identifying the instrument on the feed.
