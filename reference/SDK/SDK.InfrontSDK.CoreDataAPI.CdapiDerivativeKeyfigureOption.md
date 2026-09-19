---
title: "CdapiDerivativeKeyfigureOption"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiDerivativeKeyfigureOption"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiDerivativeKeyfigureOption"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiDerivativeKeyfigureOption.html"
defines: ["CdapiDerivativeKeyfigureOption"]
member_count: 8
members: ["delta", "gamma", "id", "implied_volatility", "last_price", "rho", "theta", "vega"]
member_groups:
  "Properties": ["delta", "gamma", "id", "implied_volatility", "last_price", "rho", "theta", "vega"]
---

# CdapiDerivativeKeyfigureOption

KeyfigureOption holds the key risk figures (Greeks) for an option listing.
All fields are optional as they may not be available for all option types.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.derivative.KeyfigureOption

```ts
interface CdapiDerivativeKeyfigureOption {
    delta: number;
    gamma: number;
    id: string;
    implied_volatility: number;
    last_price: number;
    rho: number;
    theta: number;
    vega: number;
}
```

### Properties

#### `Readonly` delta

```ts
delta: number
```

Delta — sensitivity of the option price to a 1-unit change in the underlying price.
Range: 0 to 1 for calls, -1 to 0 for puts.

##### Remarks

Format: double

#### `Readonly` gamma

```ts
gamma: number
```

Gamma — rate of change of delta per 1-unit change in the underlying price.

##### Remarks

Format: double

#### `Readonly` id

```ts
id: string
```

Internal unique identifier for this listing — links to [ListingOption.id](http://ListingOption.id).

#### `Readonly` implied_volatility

```ts
implied_volatility: number
```

Implied volatility derived from the current market price of the option (as a decimal, e.g. 0.25 = 25%).

##### Remarks

Format: double

#### `Readonly` last_price

```ts
last_price: number
```

Last traded price of the option.

##### Remarks

Format: double

#### `Readonly` rho

```ts
rho: number
```

Rho — sensitivity of the option price to a 1% change in the risk-free interest rate.

##### Remarks

Format: double

#### `Readonly` theta

```ts
theta: number
```

Theta — time decay; change in option price per one day passing, all else equal.

##### Remarks

Format: double

#### `Readonly` vega

```ts
vega: number
```

Vega — sensitivity of the option price to a 1% change in implied volatility.

##### Remarks

Format: double
