---
title: "CdapiDerivativeListingFuture"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiDerivativeListingFuture"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiDerivativeListingFuture"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiDerivativeListingFuture.html"
defines: ["CdapiDerivativeListingFuture"]
member_count: 16
members: ["_meta", "contract_size", "contract_size_unit", "contract_value", "contract_volume", "id", "initial_margin", "maturity_date", "pricing_unit", "prisma_margin_initial", "prisma_margin_initial_cash", "tick_size", "tick_value", "tick_value_unit", "trading_month", "valuta_code"]
member_groups:
  "Properties": ["_meta", "contract_size", "contract_size_unit", "contract_value", "contract_volume", "id", "initial_margin", "maturity_date", "pricing_unit", "prisma_margin_initial", "prisma_margin_initial_cash", "tick_size", "tick_value", "tick_value_unit", "trading_month", "valuta_code"]
reference_count: 1
references: ["SDK.InfrontSDK.CoreDataAPI.BasedefEntityMeta"]
---

# CdapiDerivativeListingFuture

ListingFuture represents the listing-level data for a futures contract.
A future is a standardised agreement to buy or sell an underlying asset
at a predetermined price on a specific date.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.derivative.ListingFuture

```ts
interface CdapiDerivativeListingFuture {
    _meta: BasedefEntityMeta;
    contract_size: number;
    contract_size_unit: string;
    contract_value: number;
    contract_volume: number;
    id: string;
    initial_margin: number;
    maturity_date: string;
    pricing_unit: string;
    prisma_margin_initial: number;
    prisma_margin_initial_cash: number;
    tick_size: number;
    tick_value: number;
    tick_value_unit: string;
    trading_month: string;
    valuta_code: string;
}
```

### Properties

#### `Readonly` _meta

```ts
_meta: BasedefEntityMeta
```

Entity metadata (creation time, update time, version, etc.).
Defined externally in dev/infrontfinance/basedef/message.proto.

#### `Readonly` contract_size

```ts
contract_size: number
```

Number of units of the underlying asset covered by one contract.

##### Remarks

Format: double

#### `Readonly` contract_size_unit

```ts
contract_size_unit: string
```

Unit of the contract size (e.g. "barrels", "troy oz", "bushels").

#### `Readonly` contract_value

```ts
contract_value: number
```

Monetary value corresponding to a one-point change of the underlying instrument.
Used for futures and options traded at Deutsche Börse.
Examples: DAX future = EUR 25, TecDAX future = EUR 10.

##### Remarks

Format: double

#### `Readonly` contract_volume

```ts
contract_volume: number
```

Total volume of contracts outstanding or traded.

##### Remarks

Format: int64

#### `Readonly` id

```ts
id: string
```

Internal unique identifier for this listing.

#### `Readonly` initial_margin

```ts
initial_margin: number
```

Initial margin required to open a position in this contract.

##### Remarks

Format: double

#### `Readonly` maturity_date

```ts
maturity_date: string
```

Expiry / delivery date of the futures contract. ISO-8601 format recommended.

#### `Readonly` pricing_unit

```ts
pricing_unit: string
```

Unit in which the contract is priced (e.g. "EUR/MWh", "USD/barrel").

#### `Readonly` prisma_margin_initial

```ts
prisma_margin_initial: number
```

PRISMA initial margin rate as a decimal (e.g. 0.01146 = 1.146%).
PRISMA is Deutsche Börse's portfolio-based risk margin methodology.

##### Remarks

Format: double

#### `Readonly` prisma_margin_initial_cash

```ts
prisma_margin_initial_cash: number
```

PRISMA initial margin expressed as a cash amount in the contract currency.

##### Remarks

Format: double

#### `Readonly` tick_size

```ts
tick_size: number
```

Minimum price movement (tick) of the contract.

##### Remarks

Format: double

#### `Readonly` tick_value

```ts
tick_value: number
```

Monetary value of one tick movement.

##### Remarks

Format: double

#### `Readonly` tick_value_unit

```ts
tick_value_unit: string
```

Currency or unit in which the tick value is expressed (e.g. "EUR", "USD").

#### `Readonly` trading_month

```ts
trading_month: string
```

Trading month expressed as a date. ISO-8601 format recommended (e.g. "2024-12-01").

#### `Readonly` valuta_code

```ts
valuta_code: string
```

Code used to determine the settlement value date (valuta) of the contract.
