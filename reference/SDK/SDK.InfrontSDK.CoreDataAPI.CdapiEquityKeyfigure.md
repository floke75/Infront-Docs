---
title: "CdapiEquityKeyfigure"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiEquityKeyfigure"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiEquityKeyfigure"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiEquityKeyfigure.html"
defines: ["CdapiEquityKeyfigure"]
member_count: 20
members: ["_meta", "bookvalue_per_share", "cashflow_per_share", "currency_code", "dividend", "dividend_date", "dividend_yield", "earnings_growth", "earnings_per_share", "id", "market_capitalization", "outstanding_shares", "price_bookvalue_ratio", "price_cashflow_ratio", "price_earnings_ratio", "price_sales_ratio", "sales_per_share", "share_class_capitalization", "share_class_outstanding_shares", "source"]
member_groups:
  "Properties": ["_meta", "bookvalue_per_share", "cashflow_per_share", "currency_code", "dividend", "dividend_date", "dividend_yield", "earnings_growth", "earnings_per_share", "id", "market_capitalization", "outstanding_shares", "price_bookvalue_ratio", "price_cashflow_ratio", "price_earnings_ratio", "price_sales_ratio", "sales_per_share", "share_class_capitalization", "share_class_outstanding_shares", "source"]
reference_count: 2
references: ["SDK.InfrontSDK.CoreDataAPI.BasedefEntityMeta", "SDK.InfrontSDK.CoreDataAPI.CdapiEquityKeyfigureSource"]
---

# CdapiEquityKeyfigure

Keyfigure holds listing-level equity key figures.
Available for sources EDI and INFRONT.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.equity.Keyfigure

```ts
interface CdapiEquityKeyfigure {
    _meta: BasedefEntityMeta;
    bookvalue_per_share: number;
    cashflow_per_share: number;
    currency_code: string;
    dividend: number;
    dividend_date: string;
    dividend_yield: number;
    earnings_growth: number;
    earnings_per_share: number;
    id: string;
    market_capitalization: number;
    outstanding_shares: number;
    price_bookvalue_ratio: number;
    price_cashflow_ratio: number;
    price_earnings_ratio: number;
    price_sales_ratio: number;
    sales_per_share: number;
    share_class_capitalization: number;
    share_class_outstanding_shares: number;
    source: CdapiEquityKeyfigureSource;
}
```

### Properties

#### `Readonly` _meta

```ts
_meta: BasedefEntityMeta
```

Entity metadata (creation time, update time, version, etc.).

#### `Readonly` bookvalue_per_share

```ts
bookvalue_per_share: number
```

Book value per share — total equity divided by shares outstanding. Source: INFRONT only.

##### Remarks

Format: double

#### `Readonly` cashflow_per_share

```ts
cashflow_per_share: number
```

Cash flow per share — operating cash flow divided by shares outstanding. Source: INFRONT only.

##### Remarks

Format: double

#### `Readonly` currency_code

```ts
currency_code: string
```

ISO 4217 currency code in which all key figures are denominated.

#### `Readonly` dividend

```ts
dividend: number
```

Dividend per share paid in the most recent fiscal year. Sources: INFRONT, WM.

##### Remarks

Format: double

#### `Readonly` dividend_date

```ts
dividend_date: string
```

Date of the most recent dividend payment. ISO-8601 recommended. Source: WM.

#### `Readonly` dividend_yield

```ts
dividend_yield: number
```

Dividend yield — annual dividend per share divided by the current share price. Source: INFRONT only.

##### Remarks

Format: double

#### `Readonly` earnings_growth

```ts
earnings_growth: number
```

Earnings growth — year-on-year percentage change in earnings per share. Source: INFRONT only.

##### Remarks

Format: double

#### `Readonly` earnings_per_share

```ts
earnings_per_share: number
```

Earnings per share (EPS) — net income attributable to each outstanding share. Source: INFRONT only.

##### Remarks

Format: double

#### `Readonly` id

```ts
id: string
```

Internal unique identifier for this record (= listing_id).

#### `Readonly` market_capitalization

```ts
market_capitalization: number
```

Total market capitalisation across all share classes of the company. Sources: EDI, INFRONT.

##### Remarks

Format: int64

#### `Readonly` outstanding_shares

```ts
outstanding_shares: number
```

Total number of shares outstanding across all share classes of the company. Sources: EDI, INFRONT.

##### Remarks

Format: int64

#### `Readonly` price_bookvalue_ratio

```ts
price_bookvalue_ratio: number
```

Price-to-book value ratio (P/B) — share price divided by book value per share. Source: INFRONT only.

##### Remarks

Format: double

#### `Readonly` price_cashflow_ratio

```ts
price_cashflow_ratio: number
```

Price-to-cash-flow ratio (P/CF) — market capitalisation divided by operating cash flow. Source: INFRONT only.

##### Remarks

Format: double

#### `Readonly` price_earnings_ratio

```ts
price_earnings_ratio: number
```

Price-to-earnings ratio (P/E) — share price divided by earnings per share. Source: INFRONT only.

##### Remarks

Format: double

#### `Readonly` price_sales_ratio

```ts
price_sales_ratio: number
```

Price-to-sales ratio (P/S) — market capitalisation divided by total net sales. Source: INFRONT only.

##### Remarks

Format: double

#### `Readonly` sales_per_share

```ts
sales_per_share: number
```

Sales (revenue) per share — total net sales divided by shares outstanding. Source: INFRONT only.

##### Remarks

Format: double

#### `Readonly` share_class_capitalization

```ts
share_class_capitalization: number
```

Market capitalisation for this specific share class (price × share_class_outstanding_shares). Sources: EDI, INFRONT.

##### Remarks

Format: int64

#### `Readonly` share_class_outstanding_shares

```ts
share_class_outstanding_shares: number
```

Number of shares outstanding for this specific share class. Sources: EDI, INFRONT.

##### Remarks

Format: int64

#### `Readonly` source

```ts
source: CdapiEquityKeyfigureSource
```

Data source for these key figures.

##### Remarks

Format: enum
