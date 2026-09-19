---
title: "CdapiFundInstrument"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiFundInstrument"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiFundInstrument"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiFundInstrument.html"
defines: ["CdapiFundInstrument"]
member_count: 60
members: ["_meta", "actual_entry_fee", "actual_exit_fee", "actual_management_costs", "changing_costs", "country_of_registration", "custodian_fee", "dividend_frequency", "earnings_equation", "etf_replication_level", "etf_replication_level_de", "etf_replication_level_en", "etf_replication_level_fr", "etf_replication_level_nl", "etf_replication_type_code", "foundation_date", "has_pension_plan", "has_savings_plan", "hedged_currency_code", "id", "initial_price", "investment_policy_kiid", "investment_policy_kiid_de", "investment_policy_kiid_en", "investment_policy_kiid_fr", "investment_policy_kiid_nl", "is_distribution", "is_etf", "is_etf_replication", "is_german_as_fund", "is_german_riester_fund", "is_german_vl_fund", "is_institutional", "maximum_entry_fee", "maximum_exit_fee", "maximum_management_costs", "minimum_order_currency_code", "minimum_order_incremental", "minimum_order_initial", "name", "name_de", "name_en", "name_fr", "name_nl", "name_short", "name_short_de", "name_short_en", "name_short_fr", "name_short_nl", "ongoing_charges", "ongoing_charges_date", "performance_fee", "source", "sri", "sri_date", "srri", "srri_date", "total_expense_ratio", "total_expense_ratio_date", "volume"]
member_groups:
  "Properties": ["_meta", "actual_entry_fee", "actual_exit_fee", "actual_management_costs", "changing_costs", "country_of_registration", "custodian_fee", "dividend_frequency", "earnings_equation", "etf_replication_level", "etf_replication_level_de", "etf_replication_level_en", "etf_replication_level_fr", "etf_replication_level_nl", "etf_replication_type_code", "foundation_date", "has_pension_plan", "has_savings_plan", "hedged_currency_code", "id", "initial_price", "investment_policy_kiid", "investment_policy_kiid_de", "investment_policy_kiid_en", "investment_policy_kiid_fr", "investment_policy_kiid_nl", "is_distribution", "is_etf", "is_etf_replication", "is_german_as_fund", "is_german_riester_fund", "is_german_vl_fund", "is_institutional", "maximum_entry_fee", "maximum_exit_fee", "maximum_management_costs", "minimum_order_currency_code", "minimum_order_incremental", "minimum_order_initial", "name", "name_de", "name_en", "name_fr", "name_nl", "name_short", "name_short_de", "name_short_en", "name_short_fr", "name_short_nl", "ongoing_charges", "ongoing_charges_date", "performance_fee", "source", "sri", "sri_date", "srri", "srri_date", "total_expense_ratio", "total_expense_ratio_date", "volume"]
reference_count: 4
references: ["SDK.InfrontSDK.CoreDataAPI.BasedefEntityMeta", "SDK.InfrontSDK.CoreDataAPI.CdapiFundDictionary", "SDK.InfrontSDK.CoreDataAPI.CdapiFundInstrumentSource", "SDK.InfrontSDK.CoreDataAPI.CdapiFundInstrumentVolume"]
---

# CdapiFundInstrument

Instrument holds fund share class instrument data.
A fund instrument represents a specific share class within a compartment.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.fund.Instrument

```ts
interface CdapiFundInstrument {
    _meta: BasedefEntityMeta;
    actual_entry_fee: number;
    actual_exit_fee: number;
    actual_management_costs: number;
    changing_costs: number;
    country_of_registration: readonly string[];
    custodian_fee: number;
    dividend_frequency: CdapiFundDictionary;
    earnings_equation: number;
    etf_replication_level: string;
    etf_replication_level_de: string;
    etf_replication_level_en: string;
    etf_replication_level_fr: string;
    etf_replication_level_nl: string;
    etf_replication_type_code: string;
    foundation_date: string;
    has_pension_plan: boolean;
    has_savings_plan: boolean;
    hedged_currency_code: string;
    id: number;
    initial_price: number;
    investment_policy_kiid: string;
    investment_policy_kiid_de: string;
    investment_policy_kiid_en: string;
    investment_policy_kiid_fr: string;
    investment_policy_kiid_nl: string;
    is_distribution: boolean;
    is_etf: boolean;
    is_etf_replication: boolean;
    is_german_as_fund: boolean;
    is_german_riester_fund: boolean;
    is_german_vl_fund: boolean;
    is_institutional: boolean;
    maximum_entry_fee: number;
    maximum_exit_fee: number;
    maximum_management_costs: number;
    minimum_order_currency_code: string;
    minimum_order_incremental: number;
    minimum_order_initial: number;
    name: string;
    name_de: string;
    name_en: string;
    name_fr: string;
    name_nl: string;
    name_short: string;
    name_short_de: string;
    name_short_en: string;
    name_short_fr: string;
    name_short_nl: string;
    ongoing_charges: number;
    ongoing_charges_date: string;
    performance_fee: number;
    source: CdapiFundInstrumentSource;
    sri: number;
    sri_date: string;
    srri: number;
    srri_date: string;
    total_expense_ratio: number;
    total_expense_ratio_date: string;
    volume: CdapiFundInstrumentVolume;
}
```

### Properties

#### `Readonly` _meta

```ts
_meta: BasedefEntityMeta
```

Entity metadata (creation time, update time, version, etc.).

#### `Readonly` actual_entry_fee

```ts
actual_entry_fee: number
```

Actual entry fee currently charged to investors as a % of the invested amount.

##### Remarks

Format: double

#### `Readonly` actual_exit_fee

```ts
actual_exit_fee: number
```

Actual exit fee currently charged when redeeming shares.

##### Remarks

Format: double

#### `Readonly` actual_management_costs

```ts
actual_management_costs: number
```

Actual management fee charged for portfolio management, expressed as % per year.

##### Remarks

Format: double

#### `Readonly` changing_costs

```ts
changing_costs: number
```

Switching/exchange fee — cost charged when switching between share classes
within the same fund family.

##### Remarks

Format: double

#### `Readonly` country_of_registration

```ts
country_of_registration: readonly string[]
```

List of countries in which the fund is registered for distribution.
ISO 3166-1 alpha-2 codes. Equivalent to the admittance field on Instrument.

#### `Readonly` custodian_fee

```ts
custodian_fee: number
```

Custodian / depositary fee — annual charge for safekeeping the fund's assets.

##### Remarks

Format: double

#### `Readonly` dividend_frequency

```ts
dividend_frequency: CdapiFundDictionary
```

Dividend distribution frequency (e.g. "Annual", "Quarterly", "Monthly").

#### `Readonly` earnings_equation

```ts
earnings_equation: number
```

Earnings equation — a fund-specific factor used in certain tax calculations
(e.g. the German Vorabpauschale calculation basis).

##### Remarks

Format: double

#### `Readonly` etf_replication_level

```ts
etf_replication_level: string
```

ETF replication level — describes whether the ETF is fully replicated or uses sampling
(e.g. "Full Replication", "Optimised Sampling"). Default language.

#### `Readonly` etf_replication_level_de

```ts
etf_replication_level_de: string
```

ETF replication level in German.

#### `Readonly` etf_replication_level_en

```ts
etf_replication_level_en: string
```

ETF replication level in English.

#### `Readonly` etf_replication_level_fr

```ts
etf_replication_level_fr: string
```

ETF replication level in French.

#### `Readonly` etf_replication_level_nl

```ts
etf_replication_level_nl: string
```

ETF replication level in Dutch.

#### `Readonly` etf_replication_type_code

```ts
etf_replication_type_code: string
```

ETF replication type code — distinguishes between physical replication methods
(e.g. "FULL" = full replication, "SAMPLE" = optimised sampling, "SWAP" = synthetic/swap-based).

#### `Readonly` foundation_date

```ts
foundation_date: string
```

Fund foundation / inception date. ISO-8601 recommended.

#### `Readonly` has_pension_plan

```ts
has_pension_plan: boolean
```

If true, the fund is eligible as a pension plan vehicle.

#### `Readonly` has_savings_plan

```ts
has_savings_plan: boolean
```

If true, the fund offers a regular savings plan (periodic investment).

#### `Readonly` hedged_currency_code

```ts
hedged_currency_code: string
```

ISO 4217 currency code of the currency-hedged variant of this share class.
Only set for currency-hedged share classes (e.g. a EUR-hedged class of a USD fund).

#### `Readonly` id

```ts
id: number
```

Internal unique identifier for this fund instrument / share class.

##### Remarks

Format: int32

#### `Readonly` initial_price

```ts
initial_price: number
```

Initial offering price (first NAV) at fund launch.

##### Remarks

Format: double

#### `Readonly` investment_policy_kiid

```ts
investment_policy_kiid: string
```

Investment policy as stated in the KIID/KID document (default language).

#### `Readonly` investment_policy_kiid_de

```ts
investment_policy_kiid_de: string
```

Investment policy from KIID in German.

#### `Readonly` investment_policy_kiid_en

```ts
investment_policy_kiid_en: string
```

Investment policy from KIID in English.

#### `Readonly` investment_policy_kiid_fr

```ts
investment_policy_kiid_fr: string
```

Investment policy from KIID in French.

#### `Readonly` investment_policy_kiid_nl

```ts
investment_policy_kiid_nl: string
```

Investment policy from KIID in Dutch.

#### `Readonly` is_distribution

```ts
is_distribution: boolean
```

If true, the fund distributes income to shareholders (distributing share class).
If false, income is reinvested (accumulating share class).

#### `Readonly` is_etf

```ts
is_etf: boolean
```

If true, the fund is an Exchange-Traded Fund (ETF).

#### `Readonly` is_etf_replication

```ts
is_etf_replication: boolean
```

If true, the fund replicates its index physically or synthetically (ETF replication).
True whenever etf_replication_type_code is set.

#### `Readonly` is_german_as_fund

```ts
is_german_as_fund: boolean
```

If true, the fund qualifies as a German AS Fund (Altersvorsorge-Sondervermögen).

#### `Readonly` is_german_riester_fund

```ts
is_german_riester_fund: boolean
```

If true, the fund is eligible for German Riester-Rente (state-subsidised pension).

#### `Readonly` is_german_vl_fund

```ts
is_german_vl_fund: boolean
```

If true, the fund qualifies as a German VL Fund (vermögenswirksame Leistungen —
eligible for employer-sponsored savings benefits).

#### `Readonly` is_institutional

```ts
is_institutional: boolean
```

If true, the fund is restricted to institutional investors (not available to retail).

#### `Readonly` maximum_entry_fee

```ts
maximum_entry_fee: number
```

Maximum permissible entry fee as defined in the fund prospectus.

##### Remarks

Format: double

#### `Readonly` maximum_exit_fee

```ts
maximum_exit_fee: number
```

Maximum permissible exit fee as defined in the fund prospectus.

##### Remarks

Format: double

#### `Readonly` maximum_management_costs

```ts
maximum_management_costs: number
```

Maximum permissible management fee as defined in the fund prospectus.

##### Remarks

Format: double

#### `Readonly` minimum_order_currency_code

```ts
minimum_order_currency_code: string
```

ISO 4217 currency code in which the minimum initial order amount is expressed.

#### `Readonly` minimum_order_incremental

```ts
minimum_order_incremental: number
```

Minimum incremental order size for subsequent subscriptions (above the initial minimum).

##### Remarks

Format: double

#### `Readonly` minimum_order_initial

```ts
minimum_order_initial: number
```

Minimum initial subscription amount — either in shares or in currency amount.

##### Remarks

Format: double

#### `Readonly` name

```ts
name: string
```

Default language name of the fund share class.

#### `Readonly` name_de

```ts
name_de: string
```

German name.

#### `Readonly` name_en

```ts
name_en: string
```

English name.

#### `Readonly` name_fr

```ts
name_fr: string
```

French name.

#### `Readonly` name_nl

```ts
name_nl: string
```

Dutch name.

#### `Readonly` name_short

```ts
name_short: string
```

Infront internal company code — short identifier for the fund manager.

#### `Readonly` name_short_de

```ts
name_short_de: string
```

Short name in German.

#### `Readonly` name_short_en

```ts
name_short_en: string
```

Short name in English.

#### `Readonly` name_short_fr

```ts
name_short_fr: string
```

Short name in French.

#### `Readonly` name_short_nl

```ts
name_short_nl: string
```

Short name in Dutch.

#### `Readonly` ongoing_charges

```ts
ongoing_charges: number
```

Ongoing Charges Figure (OCF) — the annual cost indicator for UCITS funds as published
in the KIID/KID. Comparable to TER but defined under UCITS regulations.

##### Remarks

Format: double

#### `Readonly` ongoing_charges_date

```ts
ongoing_charges_date: string
```

Date of the ongoing charges figure — either the KIID publication date or the date
provided by the management company / their technical facilitator.

#### `Readonly` performance_fee

```ts
performance_fee: number
```

Performance fee — % of investment gains charged by the manager above a hurdle rate.
Typical for hedge funds and absolute return strategies.

##### Remarks

Format: double

#### `Readonly` source

```ts
source: CdapiFundInstrumentSource
```

Data source for this fund instrument record.

##### Remarks

Format: enum

#### `Readonly` sri

```ts
sri: number
```

SRI (Summary Risk Indicator) as published in the PRIIPs KID — scale 1–7.
Replaces the SRRI for PRIIPs-covered instruments.

##### Remarks

Format: int32

#### `Readonly` sri_date

```ts
sri_date: string
```

Date of the SRI figure. ISO-8601 recommended.

#### `Readonly` srri

```ts
srri: number
```

SRRI (Synthetic Risk and Reward Indicator) as published in the KIID — scale 1–7.
1 = lowest expected risk and return; 7 = highest expected risk and return.

##### Remarks

Format: int32

#### `Readonly` srri_date

```ts
srri_date: string
```

Date of the SRRI figure. ISO-8601 recommended.

#### `Readonly` total_expense_ratio

```ts
total_expense_ratio: number
```

Total Expense Ratio (TER) — total annual costs of the fund expressed as a % of AUM.
Includes management fee, administration, custody, and other operational costs.

##### Remarks

Format: double

#### `Readonly` total_expense_ratio_date

```ts
total_expense_ratio_date: string
```

Date of the most recent TER figure. ISO-8601 recommended.

#### `Readonly` volume

```ts
volume: CdapiFundInstrumentVolume
```

Total net assets (AUM) of this share class / instrument.
