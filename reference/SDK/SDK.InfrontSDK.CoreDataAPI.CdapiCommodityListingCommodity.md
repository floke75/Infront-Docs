---
title: "CdapiCommodityListingCommodity"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiCommodityListingCommodity"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiCommodityListingCommodity"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiCommodityListingCommodity.html"
defines: ["CdapiCommodityListingCommodity"]
member_count: 2
members: ["id", "maturity"]
member_groups:
  "Properties": ["id", "maturity"]
---

# CdapiCommodityListingCommodity

ListingCommodity represents a tradable commodity listing.
It can also be used as a lightweight descriptor when only the id field is populated.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.commodity.ListingCommodity

```ts
interface CdapiCommodityListingCommodity {
    id: string;
    maturity: string;
}
```

### Properties

#### `Readonly` id

```ts
id: string
```

Internal unique identifier for this listing.

#### `Readonly` maturity

```ts
maturity: string
```

Maturity information as provided by the London Metal Exchange (LME).
Represents the prompt date — the date on which delivery of the metal takes place.
ISO-8601 format recommended (e.g. "2024-03-15").
