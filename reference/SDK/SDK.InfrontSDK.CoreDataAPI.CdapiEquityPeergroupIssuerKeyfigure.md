---
title: "CdapiEquityPeergroupIssuerKeyfigure"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiEquityPeergroupIssuerKeyfigure"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiEquityPeergroupIssuerKeyfigure"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiEquityPeergroupIssuerKeyfigure.html"
defines: ["CdapiEquityPeergroupIssuerKeyfigure"]
member_count: 21
members: ["_meta", "debt_asset_ratio", "debt_ebitda_ratio", "debt_equity_ratio", "dividend_yield", "earnings_before_tax_growth_1_year", "earnings_before_tax_margin", "ebit_margin", "ebitda_margin", "enterprise_value_ebitda_ratio", "gross_profit_growth_1_year", "growth_net_sales", "id", "net_debt_equity_ratio", "net_profit_margin", "net_profit_margin_average_3_year", "net_sales_cagr_3_year", "price_bookvalue_ratio", "price_earnings_ratio", "source", "volatility_3_month"]
member_groups:
  "Properties": ["_meta", "debt_asset_ratio", "debt_ebitda_ratio", "debt_equity_ratio", "dividend_yield", "earnings_before_tax_growth_1_year", "earnings_before_tax_margin", "ebit_margin", "ebitda_margin", "enterprise_value_ebitda_ratio", "gross_profit_growth_1_year", "growth_net_sales", "id", "net_debt_equity_ratio", "net_profit_margin", "net_profit_margin_average_3_year", "net_sales_cagr_3_year", "price_bookvalue_ratio", "price_earnings_ratio", "source", "volatility_3_month"]
reference_count: 2
references: ["SDK.InfrontSDK.CoreDataAPI.BasedefEntityMeta", "SDK.InfrontSDK.CoreDataAPI.CdapiEquityPeergroupIssuerKeyfigureSource"]
---

# CdapiEquityPeergroupIssuerKeyfigure

PeergroupIssuerKeyfigure holds peer-group-averaged key figures for an issuer.
Used to benchmark a company against its industry peers.
Available for source INFRONT.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.equity.PeergroupIssuerKeyfigure

```ts
interface CdapiEquityPeergroupIssuerKeyfigure {
    _meta: BasedefEntityMeta;
    debt_asset_ratio: number;
    debt_ebitda_ratio: number;
    debt_equity_ratio: number;
    dividend_yield: number;
    earnings_before_tax_growth_1_year: number;
    earnings_before_tax_margin: number;
    ebit_margin: number;
    ebitda_margin: number;
    enterprise_value_ebitda_ratio: number;
    gross_profit_growth_1_year: number;
    growth_net_sales: number;
    id: string;
    net_debt_equity_ratio: number;
    net_profit_margin: number;
    net_profit_margin_average_3_year: number;
    net_sales_cagr_3_year: number;
    price_bookvalue_ratio: number;
    price_earnings_ratio: number;
    source: CdapiEquityPeergroupIssuerKeyfigureSource;
    volatility_3_month: number;
}
```

### Properties

#### `Readonly` _meta

```ts
_meta: BasedefEntityMeta
```

Entity metadata (creation time, update time, version, etc.).

#### `Readonly` debt_asset_ratio

```ts
debt_asset_ratio: number
```

Peer group average for debt-to-asset ratio.

##### Remarks

Format: double

#### `Readonly` debt_ebitda_ratio

```ts
debt_ebitda_ratio: number
```

Peer group average for debt-to-EBITDA ratio.

##### Remarks

Format: double

#### `Readonly` debt_equity_ratio

```ts
debt_equity_ratio: number
```

Peer group average for debt-to-equity ratio.

##### Remarks

Format: double

#### `Readonly` dividend_yield

```ts
dividend_yield: number
```

Peer group average for dividend yield.

##### Remarks

Format: double

#### `Readonly` earnings_before_tax_growth_1_year

```ts
earnings_before_tax_growth_1_year: number
```

Peer group average for year-on-year EBT growth.

##### Remarks

Format: double

#### `Readonly` earnings_before_tax_margin

```ts
earnings_before_tax_margin: number
```

Peer group average for EBT margin.

##### Remarks

Format: double

#### `Readonly` ebit_margin

```ts
ebit_margin: number
```

Peer group average for EBIT margin.

##### Remarks

Format: double

#### `Readonly` ebitda_margin

```ts
ebitda_margin: number
```

Peer group average for EBITDA margin.

##### Remarks

Format: double

#### `Readonly` enterprise_value_ebitda_ratio

```ts
enterprise_value_ebitda_ratio: number
```

Peer group average for EV/EBITDA ratio.

##### Remarks

Format: double

#### `Readonly` gross_profit_growth_1_year

```ts
gross_profit_growth_1_year: number
```

Peer group average for year-on-year gross profit growth.

##### Remarks

Format: double

#### `Readonly` growth_net_sales

```ts
growth_net_sales: number
```

Peer group average for net sales growth.

##### Remarks

Format: double

#### `Readonly` id

```ts
id: string
```

Internal unique identifier for this record (= issuer_id).

#### `Readonly` net_debt_equity_ratio

```ts
net_debt_equity_ratio: number
```

Peer group average for net debt-to-equity ratio.

##### Remarks

Format: double

#### `Readonly` net_profit_margin

```ts
net_profit_margin: number
```

Peer group average for net profit margin.

##### Remarks

Format: double

#### `Readonly` net_profit_margin_average_3_year

```ts
net_profit_margin_average_3_year: number
```

Peer group average for 3-year average net profit margin.

##### Remarks

Format: double

#### `Readonly` net_sales_cagr_3_year

```ts
net_sales_cagr_3_year: number
```

Peer group average for 3-year net sales CAGR.

##### Remarks

Format: double

#### `Readonly` price_bookvalue_ratio

```ts
price_bookvalue_ratio: number
```

Peer group average for P/B ratio.

##### Remarks

Format: double

#### `Readonly` price_earnings_ratio

```ts
price_earnings_ratio: number
```

Peer group average for P/E ratio.

##### Remarks

Format: double

#### `Readonly` source

```ts
source: CdapiEquityPeergroupIssuerKeyfigureSource
```

Data source — reuses IssuerKeyfigure.Source enum.

##### Remarks

Format: enum

#### `Readonly` volatility_3_month

```ts
volatility_3_month: number
```

Peer group average for 3-month price volatility.

##### Remarks

Format: double
