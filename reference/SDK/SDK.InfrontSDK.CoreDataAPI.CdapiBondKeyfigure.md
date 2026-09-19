---
title: "CdapiBondKeyfigure"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiBondKeyfigure"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiBondKeyfigure"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiBondKeyfigure.html"
defines: ["CdapiBondKeyfigure"]
member_count: 67
members: ["_meta", "accrued_interest", "accrued_tax", "asset_swap_spread", "asset_swap_spread_ask_price", "asset_swap_spread_bid_price", "asset_swap_spread_mid_price", "calculation_price", "calculation_price_ask_price", "calculation_price_bid_price", "calculation_price_mid_price", "calculation_timestamp", "convexity", "convexity_ask_price", "convexity_bid_price", "convexity_mid_price", "current_yield", "current_yield_ask_price", "current_yield_bid_price", "current_yield_mid_price", "dirty_price", "dirty_price_ask_price", "dirty_price_bid_price", "dirty_price_mid_price", "government_spread", "government_spread_ask_price", "government_spread_bid_price", "government_spread_mid_price", "id", "interpolated_spread", "interpolated_spread_ask_price", "interpolated_spread_bid_price", "interpolated_spread_mid_price", "macaulay_duration", "macaulay_duration_365", "macaulay_duration_365_ask_price", "macaulay_duration_365_bid_price", "macaulay_duration_365_mid_price", "macaulay_duration_ask_price", "macaulay_duration_bid_price", "macaulay_duration_mid_price", "modified_duration", "modified_duration_ask_price", "modified_duration_bid_price", "modified_duration_mid_price", "net_yield", "net_yield_ask_price", "net_yield_bid_price", "net_yield_mid_price", "option_adjusted_spread", "option_adjusted_spread_ask_price", "option_adjusted_spread_bid_price", "option_adjusted_spread_mid_price", "residual_maturity_365", "source", "volatility", "volatility_ask_price", "volatility_bid_price", "volatility_mid_price", "yield_to_maturity", "yield_to_maturity_ask_price", "yield_to_maturity_bid_price", "yield_to_maturity_mid_price", "zero_volatility_spread", "zero_volatility_spread_ask_price", "zero_volatility_spread_bid_price", "zero_volatility_spread_mid_price"]
member_groups:
  "Properties": ["_meta", "accrued_interest", "accrued_tax", "asset_swap_spread", "asset_swap_spread_ask_price", "asset_swap_spread_bid_price", "asset_swap_spread_mid_price", "calculation_price", "calculation_price_ask_price", "calculation_price_bid_price", "calculation_price_mid_price", "calculation_timestamp", "convexity", "convexity_ask_price", "convexity_bid_price", "convexity_mid_price", "current_yield", "current_yield_ask_price", "current_yield_bid_price", "current_yield_mid_price", "dirty_price", "dirty_price_ask_price", "dirty_price_bid_price", "dirty_price_mid_price", "government_spread", "government_spread_ask_price", "government_spread_bid_price", "government_spread_mid_price", "id", "interpolated_spread", "interpolated_spread_ask_price", "interpolated_spread_bid_price", "interpolated_spread_mid_price", "macaulay_duration", "macaulay_duration_365", "macaulay_duration_365_ask_price", "macaulay_duration_365_bid_price", "macaulay_duration_365_mid_price", "macaulay_duration_ask_price", "macaulay_duration_bid_price", "macaulay_duration_mid_price", "modified_duration", "modified_duration_ask_price", "modified_duration_bid_price", "modified_duration_mid_price", "net_yield", "net_yield_ask_price", "net_yield_bid_price", "net_yield_mid_price", "option_adjusted_spread", "option_adjusted_spread_ask_price", "option_adjusted_spread_bid_price", "option_adjusted_spread_mid_price", "residual_maturity_365", "source", "volatility", "volatility_ask_price", "volatility_bid_price", "volatility_mid_price", "yield_to_maturity", "yield_to_maturity_ask_price", "yield_to_maturity_bid_price", "yield_to_maturity_mid_price", "zero_volatility_spread", "zero_volatility_spread_ask_price", "zero_volatility_spread_bid_price", "zero_volatility_spread_mid_price"]
reference_count: 2
references: ["SDK.InfrontSDK.CoreDataAPI.BasedefEntityMeta", "SDK.InfrontSDK.CoreDataAPI.CdapiBondKeyfigureSource"]
---

# CdapiBondKeyfigure

Keyfigure holds bond-specific analytical key figures calculated by WM Datenservice.
All figures are calculated based on three price inputs: last (mid), bid, and ask.
Fields without a price suffix use the last/mid price as the calculation basis.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.bond.Keyfigure

```ts
interface CdapiBondKeyfigure {
    _meta: BasedefEntityMeta;
    accrued_interest: number;
    accrued_tax: number;
    asset_swap_spread: number;
    asset_swap_spread_ask_price: number;
    asset_swap_spread_bid_price: number;
    asset_swap_spread_mid_price: number;
    calculation_price: number;
    calculation_price_ask_price: number;
    calculation_price_bid_price: number;
    calculation_price_mid_price: number;
    calculation_timestamp: string;
    convexity: number;
    convexity_ask_price: number;
    convexity_bid_price: number;
    convexity_mid_price: number;
    current_yield: number;
    current_yield_ask_price: number;
    current_yield_bid_price: number;
    current_yield_mid_price: number;
    dirty_price: number;
    dirty_price_ask_price: number;
    dirty_price_bid_price: number;
    dirty_price_mid_price: number;
    government_spread: number;
    government_spread_ask_price: number;
    government_spread_bid_price: number;
    government_spread_mid_price: number;
    id: string;
    interpolated_spread: number;
    interpolated_spread_ask_price: number;
    interpolated_spread_bid_price: number;
    interpolated_spread_mid_price: number;
    macaulay_duration: number;
    macaulay_duration_365: string;
    macaulay_duration_365_ask_price: string;
    macaulay_duration_365_bid_price: string;
    macaulay_duration_365_mid_price: string;
    macaulay_duration_ask_price: number;
    macaulay_duration_bid_price: number;
    macaulay_duration_mid_price: number;
    modified_duration: number;
    modified_duration_ask_price: number;
    modified_duration_bid_price: number;
    modified_duration_mid_price: number;
    net_yield: number;
    net_yield_ask_price: number;
    net_yield_bid_price: number;
    net_yield_mid_price: number;
    option_adjusted_spread: number;
    option_adjusted_spread_ask_price: number;
    option_adjusted_spread_bid_price: number;
    option_adjusted_spread_mid_price: number;
    residual_maturity_365: string;
    source: CdapiBondKeyfigureSource;
    volatility: number;
    volatility_ask_price: number;
    volatility_bid_price: number;
    volatility_mid_price: number;
    yield_to_maturity: number;
    yield_to_maturity_ask_price: number;
    yield_to_maturity_bid_price: number;
    yield_to_maturity_mid_price: number;
    zero_volatility_spread: number;
    zero_volatility_spread_ask_price: number;
    zero_volatility_spread_bid_price: number;
    zero_volatility_spread_mid_price: number;
}
```

### Properties

#### `Readonly` _meta

```ts
_meta: BasedefEntityMeta
```

Entity metadata (creation time, update time, version, etc.).

#### `Readonly` accrued_interest

```ts
accrued_interest: number
```

Accrued interest — interest amount accrued since the last coupon payment. Source: WM.

##### Remarks

Format: double

#### `Readonly` accrued_tax

```ts
accrued_tax: number
```

Accrued tax — tax amount accrued on the bond since issuance. Source: WM.

##### Remarks

Format: double

#### `Readonly` asset_swap_spread

```ts
asset_swap_spread: number
```

Asset swap spread — par spread to swap bond cash flows into money market rates (mid price). Source: WM.

##### Remarks

Format: double

#### `Readonly` asset_swap_spread_ask_price

```ts
asset_swap_spread_ask_price: number
```

Asset swap spread calculated using the ask price. Source: WM.

##### Remarks

Format: double

#### `Readonly` asset_swap_spread_bid_price

```ts
asset_swap_spread_bid_price: number
```

Asset swap spread calculated using the bid price. Source: WM.

##### Remarks

Format: double

#### `Readonly` asset_swap_spread_mid_price

```ts
asset_swap_spread_mid_price: number
```

Asset swap spread calculated using the mid price. Source: WM.

##### Remarks

Format: double

#### `Readonly` calculation_price

```ts
calculation_price: number
```

Bond price used as the basis for key figure calculations (mid price). Source: WM.

##### Remarks

Format: double

#### `Readonly` calculation_price_ask_price

```ts
calculation_price_ask_price: number
```

Calculation price (ask price basis). Source: WM.

##### Remarks

Format: double

#### `Readonly` calculation_price_bid_price

```ts
calculation_price_bid_price: number
```

Calculation price (bid price basis). Source: WM.

##### Remarks

Format: double

#### `Readonly` calculation_price_mid_price

```ts
calculation_price_mid_price: number
```

Calculation price (mid price basis). Source: WM.

##### Remarks

Format: double

#### `Readonly` calculation_timestamp

```ts
calculation_timestamp: string
```

Timestamp at which the key figures were calculated. ISO-8601 recommended. Source: WM.

#### `Readonly` convexity

```ts
convexity: number
```

Convexity — second-order interest rate sensitivity (mid price). Source: WM.

##### Remarks

Format: double

#### `Readonly` convexity_ask_price

```ts
convexity_ask_price: number
```

Convexity calculated using the ask price. Source: WM.

##### Remarks

Format: double

#### `Readonly` convexity_bid_price

```ts
convexity_bid_price: number
```

Convexity calculated using the bid price. Source: WM.

##### Remarks

Format: double

#### `Readonly` convexity_mid_price

```ts
convexity_mid_price: number
```

Convexity calculated using the mid price. Source: WM.

##### Remarks

Format: double

#### `Readonly` current_yield

```ts
current_yield: number
```

Current yield — short-term expected return based on coupon and current price (mid price). Source: WM.

##### Remarks

Format: double

#### `Readonly` current_yield_ask_price

```ts
current_yield_ask_price: number
```

Current yield calculated using the ask price. Source: WM.

##### Remarks

Format: double

#### `Readonly` current_yield_bid_price

```ts
current_yield_bid_price: number
```

Current yield calculated using the bid price. Source: WM.

##### Remarks

Format: double

#### `Readonly` current_yield_mid_price

```ts
current_yield_mid_price: number
```

Current yield calculated using the mid price. Source: WM.

##### Remarks

Format: double

#### `Readonly` dirty_price

```ts
dirty_price: number
```

Dirty price — bond price including accrued interest (mid price). Source: WM.

##### Remarks

Format: double

#### `Readonly` dirty_price_ask_price

```ts
dirty_price_ask_price: number
```

Dirty price calculated using the ask price. Source: WM.

##### Remarks

Format: double

#### `Readonly` dirty_price_bid_price

```ts
dirty_price_bid_price: number
```

Dirty price calculated using the bid price. Source: WM.

##### Remarks

Format: double

#### `Readonly` dirty_price_mid_price

```ts
dirty_price_mid_price: number
```

Dirty price calculated using the mid price. Source: WM.

##### Remarks

Format: double

#### `Readonly` government_spread

```ts
government_spread: number
```

Government spread — spread between yield to maturity and the equivalent government bond yield (mid price). Source: WM.

##### Remarks

Format: double

#### `Readonly` government_spread_ask_price

```ts
government_spread_ask_price: number
```

Government spread calculated using the ask price. Source: WM.

##### Remarks

Format: double

#### `Readonly` government_spread_bid_price

```ts
government_spread_bid_price: number
```

Government spread calculated using the bid price. Source: WM.

##### Remarks

Format: double

#### `Readonly` government_spread_mid_price

```ts
government_spread_mid_price: number
```

Government spread calculated using the mid price. Source: WM.

##### Remarks

Format: double

#### `Readonly` id

```ts
id: string
```

Internal unique identifier, corresponds to the vwd_key of the instrument.

#### `Readonly` interpolated_spread

```ts
interpolated_spread: number
```

Interpolated spread — spread between yield to maturity and the interpolated swap rate (mid price). Source: WM.

##### Remarks

Format: double

#### `Readonly` interpolated_spread_ask_price

```ts
interpolated_spread_ask_price: number
```

Interpolated spread calculated using the ask price. Source: WM.

##### Remarks

Format: double

#### `Readonly` interpolated_spread_bid_price

```ts
interpolated_spread_bid_price: number
```

Interpolated spread calculated using the bid price. Source: WM.

##### Remarks

Format: double

#### `Readonly` interpolated_spread_mid_price

```ts
interpolated_spread_mid_price: number
```

Interpolated spread calculated using the mid price. Source: WM.

##### Remarks

Format: double

#### `Readonly` macaulay_duration

```ts
macaulay_duration: number
```

Macaulay duration — first-order interest rate sensitivity in years (mid price). Source: WM.

##### Remarks

Format: double

#### `Readonly` macaulay_duration_365

```ts
macaulay_duration_365: string
```

Macaulay duration expressed in days (365-day basis, mid price). Source: WM.

#### `Readonly` macaulay_duration_365_ask_price

```ts
macaulay_duration_365_ask_price: string
```

Macaulay duration in days (365-day basis) calculated using the ask price. Source: WM.

#### `Readonly` macaulay_duration_365_bid_price

```ts
macaulay_duration_365_bid_price: string
```

Macaulay duration in days (365-day basis) calculated using the bid price. Source: WM.

#### `Readonly` macaulay_duration_365_mid_price

```ts
macaulay_duration_365_mid_price: string
```

Macaulay duration in days (365-day basis) calculated using the mid price. Source: WM.

#### `Readonly` macaulay_duration_ask_price

```ts
macaulay_duration_ask_price: number
```

Macaulay duration calculated using the ask price. Source: WM.

##### Remarks

Format: double

#### `Readonly` macaulay_duration_bid_price

```ts
macaulay_duration_bid_price: number
```

Macaulay duration calculated using the bid price. Source: WM.

##### Remarks

Format: double

#### `Readonly` macaulay_duration_mid_price

```ts
macaulay_duration_mid_price: number
```

Macaulay duration calculated using the mid price. Source: WM.

##### Remarks

Format: double

#### `Readonly` modified_duration

```ts
modified_duration: number
```

Modified duration — first-order interest rate sensitivity as a percentage (mid price). Source: WM.

##### Remarks

Format: double

#### `Readonly` modified_duration_ask_price

```ts
modified_duration_ask_price: number
```

Modified duration calculated using the ask price. Source: WM.

##### Remarks

Format: double

#### `Readonly` modified_duration_bid_price

```ts
modified_duration_bid_price: number
```

Modified duration calculated using the bid price. Source: WM.

##### Remarks

Format: double

#### `Readonly` modified_duration_mid_price

```ts
modified_duration_mid_price: number
```

Modified duration calculated using the mid price. Source: WM.

##### Remarks

Format: double

#### `Readonly` net_yield

```ts
net_yield: number
```

Net yield — annualised net return if the bond is held until maturity, after tax (mid price). Source: WM.

##### Remarks

Format: double

#### `Readonly` net_yield_ask_price

```ts
net_yield_ask_price: number
```

Net yield calculated using the ask price. Source: WM.

##### Remarks

Format: double

#### `Readonly` net_yield_bid_price

```ts
net_yield_bid_price: number
```

Net yield calculated using the bid price. Source: WM.

##### Remarks

Format: double

#### `Readonly` net_yield_mid_price

```ts
net_yield_mid_price: number
```

Net yield calculated using the mid price. Source: WM.

##### Remarks

Format: double

#### `Readonly` option_adjusted_spread

```ts
option_adjusted_spread: number
```

Option-adjusted spread (OAS) — parallel yield curve shift to match market price, including optionalities (mid price). Source: WM.

##### Remarks

Format: double

#### `Readonly` option_adjusted_spread_ask_price

```ts
option_adjusted_spread_ask_price: number
```

Option-adjusted spread calculated using the ask price. Source: WM.

##### Remarks

Format: double

#### `Readonly` option_adjusted_spread_bid_price

```ts
option_adjusted_spread_bid_price: number
```

Option-adjusted spread calculated using the bid price. Source: WM.

##### Remarks

Format: double

#### `Readonly` option_adjusted_spread_mid_price

```ts
option_adjusted_spread_mid_price: number
```

Option-adjusted spread calculated using the mid price. Source: WM.

##### Remarks

Format: double

#### `Readonly` residual_maturity_365

```ts
residual_maturity_365: string
```

Remaining time to maturity expressed in days (365-day basis). Source: WM.

#### `Readonly` source

```ts
source: CdapiBondKeyfigureSource
```

Data source for these key figures (currently WM only).

##### Remarks

Format: enum

#### `Readonly` volatility

```ts
volatility: number
```

Volatility — relative price change for a 1-point change in yield (mid price). Source: WM.

##### Remarks

Format: double

#### `Readonly` volatility_ask_price

```ts
volatility_ask_price: number
```

Volatility calculated using the ask price. Source: WM.

##### Remarks

Format: double

#### `Readonly` volatility_bid_price

```ts
volatility_bid_price: number
```

Volatility calculated using the bid price. Source: WM.

##### Remarks

Format: double

#### `Readonly` volatility_mid_price

```ts
volatility_mid_price: number
```

Volatility calculated using the mid price. Source: WM.

##### Remarks

Format: double

#### `Readonly` yield_to_maturity

```ts
yield_to_maturity: number
```

Yield to maturity — annualised return if the bond is held until maturity (mid price). Source: WM.

##### Remarks

Format: double

#### `Readonly` yield_to_maturity_ask_price

```ts
yield_to_maturity_ask_price: number
```

Yield to maturity calculated using the ask price. Source: WM.

##### Remarks

Format: double

#### `Readonly` yield_to_maturity_bid_price

```ts
yield_to_maturity_bid_price: number
```

Yield to maturity calculated using the bid price. Source: WM.

##### Remarks

Format: double

#### `Readonly` yield_to_maturity_mid_price

```ts
yield_to_maturity_mid_price: number
```

Yield to maturity calculated using the mid price. Source: WM.

##### Remarks

Format: double

#### `Readonly` zero_volatility_spread

```ts
zero_volatility_spread: number
```

Zero-volatility spread (Z-spread) — parallel yield curve shift to match market price, excluding optionalities (mid price). Source: WM.

##### Remarks

Format: double

#### `Readonly` zero_volatility_spread_ask_price

```ts
zero_volatility_spread_ask_price: number
```

Zero-volatility spread calculated using the ask price. Source: WM.

##### Remarks

Format: double

#### `Readonly` zero_volatility_spread_bid_price

```ts
zero_volatility_spread_bid_price: number
```

Zero-volatility spread calculated using the bid price. Source: WM.

##### Remarks

Format: double

#### `Readonly` zero_volatility_spread_mid_price

```ts
zero_volatility_spread_mid_price: number
```

Zero-volatility spread calculated using the mid price. Source: WM.

##### Remarks

Format: double
