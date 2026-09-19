---
title: "CdapiEquityCompanyEstimateOutlook"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiEquityCompanyEstimateOutlook"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiEquityCompanyEstimateOutlook"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiEquityCompanyEstimateOutlook.html"
defines: ["CdapiEquityCompanyEstimateOutlook"]
member_count: 14
members: ["average_code", "buy", "date", "hold", "id", "mean", "no_opinion", "number_of_analysts", "score", "sell", "source", "strong_buy", "strong_sell", "type_code"]
member_groups:
  "Properties": ["average_code", "buy", "date", "hold", "id", "mean", "no_opinion", "number_of_analysts", "score", "sell", "source", "strong_buy", "strong_sell", "type_code"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiEquityCompanyEstimateOutlookAverageCode", "SDK.InfrontSDK.CoreDataAPI.CdapiEquityCompanyEstimateOutlookSource", "SDK.InfrontSDK.CoreDataAPI.CdapiEquityCompanyEstimateOutlookTypeCode"]
---

# CdapiEquityCompanyEstimateOutlook

Outlook holds the consensus analyst recommendation distribution for an issuer.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.equity.CompanyEstimate_Outlook

```ts
interface CdapiEquityCompanyEstimateOutlook {
    average_code: CdapiEquityCompanyEstimateOutlookAverageCode;
    buy: number;
    date: string;
    hold: number;
    id: number;
    mean: number;
    no_opinion: number;
    number_of_analysts: number;
    score: number;
    sell: number;
    source: CdapiEquityCompanyEstimateOutlookSource;
    strong_buy: number;
    strong_sell: number;
    type_code: CdapiEquityCompanyEstimateOutlookTypeCode;
}
```

### Properties

#### `Readonly` average_code

```ts
average_code: CdapiEquityCompanyEstimateOutlookAverageCode
```

Aggregated recommendation code (STRONG_BUY ... STRONG_SELL). Sources: INFRONT, STANDARD_AND_POORS.

##### Remarks

Format: enum

#### `Readonly` buy

```ts
buy: number
```

Number of analysts with a buy recommendation. Sources: INFRONT, STANDARD_AND_POORS.

##### Remarks

Format: int32

#### `Readonly` date

```ts
date: string
```

Date of this outlook snapshot. ISO-8601 recommended. Source: STANDARD_AND_POORS.

#### `Readonly` hold

```ts
hold: number
```

Number of analysts with a hold recommendation. Sources: INFRONT, STANDARD_AND_POORS.

##### Remarks

Format: int32

#### `Readonly` id

```ts
id: number
```

Internal unique identifier for this outlook record. Sources: INFRONT, STANDARD_AND_POORS.

##### Remarks

Format: int64

#### `Readonly` mean

```ts
mean: number
```

Mean (average) numeric recommendation score. Source: STANDARD_AND_POORS.

##### Remarks

Format: double

#### `Readonly` no_opinion

```ts
no_opinion: number
```

Number of analysts with no opinion / not rated. Source: STANDARD_AND_POORS.

##### Remarks

Format: int32

#### `Readonly` number_of_analysts

```ts
number_of_analysts: number
```

Total number of analysts contributing to this outlook. Sources: INFRONT, STANDARD_AND_POORS.

##### Remarks

Format: int32

#### `Readonly` score

```ts
score: number
```

Numeric consensus score (e.g. 1.0 = strong buy, 5.0 = strong sell). Sources: INFRONT, STANDARD_AND_POORS.

##### Remarks

Format: double

#### `Readonly` sell

```ts
sell: number
```

Number of analysts with a sell recommendation. Sources: INFRONT, STANDARD_AND_POORS.

##### Remarks

Format: int32

#### `Readonly` source

```ts
source: CdapiEquityCompanyEstimateOutlookSource
```

Data source for this outlook entry.

##### Remarks

Format: enum

#### `Readonly` strong_buy

```ts
strong_buy: number
```

Number of analysts with a strong buy recommendation. Sources: INFRONT, STANDARD_AND_POORS.

##### Remarks

Format: int32

#### `Readonly` strong_sell

```ts
strong_sell: number
```

Number of analysts with a strong sell recommendation. Sources: INFRONT, STANDARD_AND_POORS.

##### Remarks

Format: int32

#### `Readonly` type_code

```ts
type_code: CdapiEquityCompanyEstimateOutlookTypeCode
```

Look-back period type for this snapshot. Sources: INFRONT, STANDARD_AND_POORS.

##### Remarks

Format: enum
