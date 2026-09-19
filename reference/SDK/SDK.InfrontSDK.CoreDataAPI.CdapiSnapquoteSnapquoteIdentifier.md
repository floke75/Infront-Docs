---
title: "CdapiSnapquoteSnapquoteIdentifier"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiSnapquoteSnapquoteIdentifier"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiSnapquoteSnapquoteIdentifier"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiSnapquoteSnapquoteIdentifier.html"
defines: ["CdapiSnapquoteSnapquoteIdentifier"]
member_count: 4
members: ["ids_feed_number", "ids_ticker", "listing_id", "vwd_key"]
member_groups:
  "Properties": ["ids_feed_number", "ids_ticker", "listing_id", "vwd_key"]
---

# CdapiSnapquoteSnapquoteIdentifier

Identifier holds the composite set of identifiers used to resolve an instrument listing.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.snapquote.Snapquote_Identifier

```ts
interface CdapiSnapquoteSnapquoteIdentifier {
    ids_feed_number: number;
    ids_ticker: string;
    listing_id: string;
    vwd_key: string;
}
```

### Properties

#### `Readonly` ids_feed_number

```ts
ids_feed_number: number
```

IDS feed number. Optional when resolving via other identifiers.

##### Remarks

Format: int32

#### `Readonly` ids_ticker

```ts
ids_ticker: string
```

IDS ticker symbol. Optional when resolving via other identifiers.

#### `Readonly` listing_id

```ts
listing_id: string
```

Internal listing identifier.

#### `Readonly` vwd_key

```ts
vwd_key: string
```

vwd key — legacy identifier used in the vwd data platform.
