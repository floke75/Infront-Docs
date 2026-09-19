---
title: "CdapiCommonListingMic"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiCommonListingMic"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiCommonListingMic"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiCommonListingMic.html"
defines: ["CdapiCommonListingMic"]
member_count: 2
members: ["operating", "segment"]
member_groups:
  "Properties": ["operating", "segment"]
reference_count: 1
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiCommonMicDetail"]
---

# CdapiCommonListingMic

Mic holds the ISO 10383 Market Identifier Codes for this listing.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.common.Listing_Mic

```ts
interface CdapiCommonListingMic {
    operating: CdapiCommonMicDetail;
    segment: CdapiCommonMicDetail;
}
```

### Properties

#### `Readonly` operating

```ts
operating: CdapiCommonMicDetail
```

Operating MIC — identifies the entity operating the market infrastructure.

#### `Readonly` segment

```ts
segment: CdapiCommonMicDetail
```

Segment MIC — identifies the trading segment within the venue.
