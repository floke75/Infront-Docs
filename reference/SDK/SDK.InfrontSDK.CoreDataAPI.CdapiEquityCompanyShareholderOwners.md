---
title: "CdapiEquityCompanyShareholderOwners"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiEquityCompanyShareholderOwners"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiEquityCompanyShareholderOwners"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiEquityCompanyShareholderOwners.html"
defines: ["CdapiEquityCompanyShareholderOwners"]
member_count: 8
members: ["capital", "investor_country_code_isoalpha_3", "investor_id", "investor_type", "is_private_investor", "name", "shares", "votes"]
member_groups:
  "Properties": ["capital", "investor_country_code_isoalpha_3", "investor_id", "investor_type", "is_private_investor", "name", "shares", "votes"]
---

# CdapiEquityCompanyShareholderOwners

Owners represents a single shareholder entry.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.equity.CompanyShareholder_Owners

```ts
interface CdapiEquityCompanyShareholderOwners {
    capital: number;
    investor_country_code_isoalpha_3: string;
    investor_id: number;
    investor_type: string;
    is_private_investor: boolean;
    name: string;
    shares: number;
    votes: number;
}
```

### Properties

#### `Readonly` capital

```ts
capital: number
```

Ownership percentage (capital stake) as a decimal (e.g. 0.05 = 5%). Sources: INFRONT, EURONEXT_VPS, STANDARD_AND_POORS.

##### Remarks

Format: double

#### `Readonly` investor_country_code_isoalpha_3

```ts
investor_country_code_isoalpha_3: string
```

ISO 3166-1 alpha-3 country code of the investor's location. Source: EURONEXT_VPS only.

#### `Readonly` investor_id

```ts
investor_id: number
```

Internal investor identifier assigned by Euronext VPS. Source: EURONEXT_VPS only.

##### Remarks

Format: uint32

#### `Readonly` investor_type

```ts
investor_type: string
```

Classification of the investor type (e.g. "INSTITUTIONAL", "RETAIL"). Source: EURONEXT_VPS only.
Note: consider migrating to an enum in a future revision.

#### `Readonly` is_private_investor

```ts
is_private_investor: boolean
```

If true, the investor is a private individual rather than an institutional entity. Source: EURONEXT_VPS only.

#### `Readonly` name

```ts
name: string
```

Name of the shareholder. Sources: INFRONT, EURONEXT_VPS, STANDARD_AND_POORS.

#### `Readonly` shares

```ts
shares: number
```

Number of shares held by this shareholder. Sources: INFRONT, EURONEXT_VPS, STANDARD_AND_POORS.

##### Remarks

Format: uint32

#### `Readonly` votes

```ts
votes: number
```

Voting power held by this shareholder as a percentage. Source: INFRONT only.

##### Remarks

Format: double
