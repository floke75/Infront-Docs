---
title: "CdapiFundCompartment"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiFundCompartment"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiFundCompartment"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiFundCompartment.html"
defines: ["CdapiFundCompartment"]
member_count: 30
members: ["_meta", "asset_allocation", "base_currency_code", "capital_guaranteed", "duration", "etf_replication_level", "etf_replication_level_de", "etf_replication_level_en", "etf_replication_level_fr", "etf_replication_level_nl", "id", "investment_horizon", "investment_policy_prospectus", "investment_policy_prospectus_de", "investment_policy_prospectus_en", "investment_policy_prospectus_fr", "investment_policy_prospectus_nl", "is_etf", "is_etf_replication", "is_fund_of_funds", "is_hedge_fund", "is_index_fund", "is_security_lending", "is_socially_responsible", "region", "sector", "sfdr", "turnover_ratio", "valuation_frequency", "volume"]
member_groups:
  "Properties": ["_meta", "asset_allocation", "base_currency_code", "capital_guaranteed", "duration", "etf_replication_level", "etf_replication_level_de", "etf_replication_level_en", "etf_replication_level_fr", "etf_replication_level_nl", "id", "investment_horizon", "investment_policy_prospectus", "investment_policy_prospectus_de", "investment_policy_prospectus_en", "investment_policy_prospectus_fr", "investment_policy_prospectus_nl", "is_etf", "is_etf_replication", "is_fund_of_funds", "is_hedge_fund", "is_index_fund", "is_security_lending", "is_socially_responsible", "region", "sector", "sfdr", "turnover_ratio", "valuation_frequency", "volume"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.BasedefEntityMeta", "SDK.InfrontSDK.CoreDataAPI.CdapiFundDictionary", "SDK.InfrontSDK.CoreDataAPI.CdapiFundInstrumentVolume"]
---

# CdapiFundCompartment

Compartment holds sub-fund (compartment) level data within an umbrella fund structure.
A compartment is a legally distinct pool of assets within an umbrella fund,
each with its own investment policy, currency, and share classes.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.fund.Compartment

```ts
interface CdapiFundCompartment {
    _meta: BasedefEntityMeta;
    asset_allocation: CdapiFundDictionary;
    base_currency_code: string;
    capital_guaranteed: number;
    duration: string;
    etf_replication_level: string;
    etf_replication_level_de: string;
    etf_replication_level_en: string;
    etf_replication_level_fr: string;
    etf_replication_level_nl: string;
    id: number;
    investment_horizon: CdapiFundDictionary;
    investment_policy_prospectus: string;
    investment_policy_prospectus_de: string;
    investment_policy_prospectus_en: string;
    investment_policy_prospectus_fr: string;
    investment_policy_prospectus_nl: string;
    is_etf: boolean;
    is_etf_replication: boolean;
    is_fund_of_funds: boolean;
    is_hedge_fund: boolean;
    is_index_fund: boolean;
    is_security_lending: boolean;
    is_socially_responsible: boolean;
    region: CdapiFundDictionary;
    sector: CdapiFundDictionary;
    sfdr: number;
    turnover_ratio: number;
    valuation_frequency: CdapiFundDictionary;
    volume: CdapiFundInstrumentVolume;
}
```

### Properties

#### `Readonly` _meta

```ts
_meta: BasedefEntityMeta
```

Entity metadata (creation time, update time, version, etc.).

#### `Readonly` asset_allocation

```ts
asset_allocation: CdapiFundDictionary
```

Primary asset class allocation (e.g. "Equity", "Fixed Income", "Mixed").

#### `Readonly` base_currency_code

```ts
base_currency_code: string
```

ISO 4217 base currency code of the compartment.

#### `Readonly` capital_guaranteed

```ts
capital_guaranteed: number
```

Amount of capital that is guaranteed in the fund's currency
(e.g. for capital-protected products).

##### Remarks

Format: double

#### `Readonly` duration

```ts
duration: string
```

Duration of the fixed income portfolio (e.g. "3.5" years), as a string to allow
for flexible formatting by the source.

#### `Readonly` etf_replication_level

```ts
etf_replication_level: string
```

Deprecated — moved to the Instrument entity.

#### `Readonly` etf_replication_level_de

```ts
etf_replication_level_de: string
```

Deprecated — moved to the Instrument entity.

#### `Readonly` etf_replication_level_en

```ts
etf_replication_level_en: string
```

Deprecated — moved to the Instrument entity.

#### `Readonly` etf_replication_level_fr

```ts
etf_replication_level_fr: string
```

Deprecated — moved to the Instrument entity.

#### `Readonly` etf_replication_level_nl

```ts
etf_replication_level_nl: string
```

Deprecated — moved to the Instrument entity.

#### `Readonly` id

```ts
id: number
```

Internal unique identifier for this compartment.

##### Remarks

Format: int32

#### `Readonly` investment_horizon

```ts
investment_horizon: CdapiFundDictionary
```

Recommended investment horizon (e.g. "Short Term", "Long Term").

#### `Readonly` investment_policy_prospectus

```ts
investment_policy_prospectus: string
```

Investment policy as stated in the fund's prospectus (default language).

#### `Readonly` investment_policy_prospectus_de

```ts
investment_policy_prospectus_de: string
```

Investment policy from prospectus in German.

#### `Readonly` investment_policy_prospectus_en

```ts
investment_policy_prospectus_en: string
```

Investment policy from prospectus in English.

#### `Readonly` investment_policy_prospectus_fr

```ts
investment_policy_prospectus_fr: string
```

Investment policy from prospectus in French.

#### `Readonly` investment_policy_prospectus_nl

```ts
investment_policy_prospectus_nl: string
```

Investment policy from prospectus in Dutch.

#### `Readonly` is_etf

```ts
is_etf: boolean
```

Deprecated — moved to the Instrument entity.

#### `Readonly` is_etf_replication

```ts
is_etf_replication: boolean
```

Deprecated — moved to the Instrument entity.

#### `Readonly` is_fund_of_funds

```ts
is_fund_of_funds: boolean
```

If true, the fund invests primarily in other funds (fund of funds).

#### `Readonly` is_hedge_fund

```ts
is_hedge_fund: boolean
```

If true, the fund uses hedge fund strategies (e.g. short selling, leverage).

#### `Readonly` is_index_fund

```ts
is_index_fund: boolean
```

If true, the fund tracks an index (passive/index fund).

#### `Readonly` is_security_lending

```ts
is_security_lending: boolean
```

If true, the fund is authorised to lend securities to third parties (securities lending).

#### `Readonly` is_socially_responsible

```ts
is_socially_responsible: boolean
```

If true, the fund applies socially responsible investment (SRI) criteria.

#### `Readonly` region

```ts
region: CdapiFundDictionary
```

Geographic investment region focus (e.g. "Europe", "Global", "Emerging Markets").

#### `Readonly` sector

```ts
sector: CdapiFundDictionary
```

Sector / industry focus of the compartment (e.g. "Technology", "Healthcare").

#### `Readonly` sfdr

```ts
sfdr: number
```

SFDR (Sustainable Finance Disclosure Regulation) article classification:
6 = no sustainability claim, 8 = promotes E/S characteristics, 9 = sustainable investment objective.

##### Remarks

Format: int32

#### `Readonly` turnover_ratio

```ts
turnover_ratio: number
```

Portfolio turnover ratio — total transactions divided by average total net assets.
Indicates how actively the portfolio is managed.

##### Remarks

Format: double

#### `Readonly` valuation_frequency

```ts
valuation_frequency: CdapiFundDictionary
```

Valuation frequency — how often the fund's NAV is calculated and published
(e.g. "Daily", "Weekly").

#### `Readonly` volume

```ts
volume: CdapiFundInstrumentVolume
```

Total net assets (AUM) of this compartment.
