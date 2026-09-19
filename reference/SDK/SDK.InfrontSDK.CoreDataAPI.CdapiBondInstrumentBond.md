---
title: "CdapiBondInstrumentBond"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiBondInstrumentBond"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiBondInstrumentBond"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiBondInstrumentBond.html"
defines: ["CdapiBondInstrumentBond"]
member_count: 59
members: ["_meta", "benchmark", "bond_seniority", "business_day_convention", "call_put_option", "coupon", "coupon_date", "coupon_date_1", "coupon_date_2", "coupon_date_3", "coupon_date_4", "coupon_type", "depot_currency_code", "development_goal", "first_coupon_date", "first_interest_rate_date", "first_interest_rate_period_start_date", "id", "interest_rate", "interest_rate_calculation_method", "interest_rate_date", "interest_rate_day", "interest_rate_fixing", "interest_rate_month", "interest_rate_pa", "interest_rate_period", "interest_rate_period_count", "interest_rate_spread", "interest_rate_type", "is_call_option", "is_put_option", "is_subordinate", "issuing_country_code", "issuing_currency_code", "issuing_date", "issuing_price", "issuing_volume", "last_coupon_date", "last_interest_rate_date", "maturity_date", "minimum_traded_unit", "minimum_traded_volume", "next_coupon_date", "nominal_value", "outstanding_amount", "percentage_dependence", "redemption_price", "redemption_type", "reference_interest_rate", "reference_interest_rate_maturity", "reference_interest_rate_period", "reference_interest_rate_period_count", "reference_interest_rate_wkn", "settlement_currency_code", "source", "special_debitor_redemption", "special_redemption", "status", "with_holding_tax"]
member_groups:
  "Properties": ["_meta", "benchmark", "bond_seniority", "business_day_convention", "call_put_option", "coupon", "coupon_date", "coupon_date_1", "coupon_date_2", "coupon_date_3", "coupon_date_4", "coupon_type", "depot_currency_code", "development_goal", "first_coupon_date", "first_interest_rate_date", "first_interest_rate_period_start_date", "id", "interest_rate", "interest_rate_calculation_method", "interest_rate_date", "interest_rate_day", "interest_rate_fixing", "interest_rate_month", "interest_rate_pa", "interest_rate_period", "interest_rate_period_count", "interest_rate_spread", "interest_rate_type", "is_call_option", "is_put_option", "is_subordinate", "issuing_country_code", "issuing_currency_code", "issuing_date", "issuing_price", "issuing_volume", "last_coupon_date", "last_interest_rate_date", "maturity_date", "minimum_traded_unit", "minimum_traded_volume", "next_coupon_date", "nominal_value", "outstanding_amount", "percentage_dependence", "redemption_price", "redemption_type", "reference_interest_rate", "reference_interest_rate_maturity", "reference_interest_rate_period", "reference_interest_rate_period_count", "reference_interest_rate_wkn", "settlement_currency_code", "source", "special_debitor_redemption", "special_redemption", "status", "with_holding_tax"]
reference_count: 20
references: ["SDK.InfrontSDK.CoreDataAPI.BasedefEntityMeta", "SDK.InfrontSDK.CoreDataAPI.CdapiBondBenchmark", "SDK.InfrontSDK.CoreDataAPI.CdapiBondBondSeniority", "SDK.InfrontSDK.CoreDataAPI.CdapiBondBusinessDayConvention", "SDK.InfrontSDK.CoreDataAPI.CdapiBondInstrumentBondCallPutOption", "SDK.InfrontSDK.CoreDataAPI.CdapiBondCouponType", "SDK.InfrontSDK.CoreDataAPI.CdapiBondDevelopmentGoal", "SDK.InfrontSDK.CoreDataAPI.CdapiBondInterestRateCalculationMethod", "SDK.InfrontSDK.CoreDataAPI.CdapiBondInterestRateMonth", "SDK.InfrontSDK.CoreDataAPI.CdapiBondInterestRatePA", "SDK.InfrontSDK.CoreDataAPI.CdapiBondInterestRatePeriod", "SDK.InfrontSDK.CoreDataAPI.CdapiBondInterestRateType", "SDK.InfrontSDK.CoreDataAPI.CdapiBondRedemptionType", "SDK.InfrontSDK.CoreDataAPI.CdapiBondReferenceInterestRate", "SDK.InfrontSDK.CoreDataAPI.CdapiBondReferenceInterestRateMaturity", "SDK.InfrontSDK.CoreDataAPI.CdapiBondReferenceInterestRatePeriod", "SDK.InfrontSDK.CoreDataAPI.CdapiBondInstrumentBondSource", "SDK.InfrontSDK.CoreDataAPI.CdapiBondSpecialDebitorRedemption", "SDK.InfrontSDK.CoreDataAPI.CdapiBondSpecialRedemption", "SDK.InfrontSDK.CoreDataAPI.CdapiBondInstrumentBondStatus"]
---

# CdapiBondInstrumentBond

InstrumentBond represents the master data for a bond instrument.
A bond is a fixed-income debt security in which the issuer owes the holder a debt
and is obliged to pay interest (coupon) and repay the principal at maturity.
It can also be used as a lightweight descriptor when only the id field is populated.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.bond.InstrumentBond

```ts
interface CdapiBondInstrumentBond {
    _meta: BasedefEntityMeta;
    benchmark: CdapiBondBenchmark;
    bond_seniority: CdapiBondBondSeniority;
    business_day_convention: CdapiBondBusinessDayConvention;
    call_put_option: readonly CdapiBondInstrumentBondCallPutOption[];
    coupon: number;
    coupon_date: string;
    coupon_date_1: string;
    coupon_date_2: string;
    coupon_date_3: string;
    coupon_date_4: string;
    coupon_type: CdapiBondCouponType;
    depot_currency_code: string;
    development_goal: CdapiBondDevelopmentGoal;
    first_coupon_date: string;
    first_interest_rate_date: string;
    first_interest_rate_period_start_date: string;
    id: number;
    interest_rate: number;
    interest_rate_calculation_method: CdapiBondInterestRateCalculationMethod;
    interest_rate_date: string;
    interest_rate_day: string;
    interest_rate_fixing: number;
    interest_rate_month: CdapiBondInterestRateMonth;
    interest_rate_pa: CdapiBondInterestRatePA;
    interest_rate_period: CdapiBondInterestRatePeriod;
    interest_rate_period_count: number;
    interest_rate_spread: number;
    interest_rate_type: CdapiBondInterestRateType;
    is_call_option: boolean;
    is_put_option: boolean;
    is_subordinate: boolean;
    issuing_country_code: string;
    issuing_currency_code: string;
    issuing_date: string;
    issuing_price: number;
    issuing_volume: number;
    last_coupon_date: string;
    last_interest_rate_date: string;
    maturity_date: string;
    minimum_traded_unit: number;
    minimum_traded_volume: number;
    next_coupon_date: string;
    nominal_value: number;
    outstanding_amount: number;
    percentage_dependence: number;
    redemption_price: number;
    redemption_type: CdapiBondRedemptionType;
    reference_interest_rate: CdapiBondReferenceInterestRate;
    reference_interest_rate_maturity: CdapiBondReferenceInterestRateMaturity;
    reference_interest_rate_period: CdapiBondReferenceInterestRatePeriod;
    reference_interest_rate_period_count: number;
    reference_interest_rate_wkn: string;
    settlement_currency_code: string;
    source: CdapiBondInstrumentBondSource;
    special_debitor_redemption: CdapiBondSpecialDebitorRedemption;
    special_redemption: CdapiBondSpecialRedemption;
    status: CdapiBondInstrumentBondStatus;
    with_holding_tax: number;
}
```

### Properties

#### `Readonly` _meta

```ts
_meta: BasedefEntityMeta
```

Entity metadata (creation time, update time, version, etc.).
Defined externally in dev/infrontfinance/basedef/message.proto.

#### `Readonly` benchmark

```ts
benchmark: CdapiBondBenchmark
```

Benchmark reference for the bond. Source: EDI only.

#### `Readonly` bond_seniority

```ts
bond_seniority: CdapiBondBondSeniority
```

Seniority ranking of the bond in the issuer's capital structure. Source: EDI.

#### `Readonly` business_day_convention

```ts
business_day_convention: CdapiBondBusinessDayConvention
```

Business day convention applied when a payment date falls on a non-business day. Source: EDI.

#### `Readonly` call_put_option

```ts
call_put_option: readonly CdapiBondInstrumentBondCallPutOption[]
```

List of embedded call and/or put options on this bond. Source: EDI.

#### `Readonly` coupon

```ts
coupon: number
```

Coupon rate of the bond. Sources: EDI, XID.

##### Remarks

Format: double

#### `Readonly` coupon_date

```ts
coupon_date: string
```

Date on which the coupon is paid. ISO-8601 recommended. Sources: WM, XID.

#### `Readonly` coupon_date_1

```ts
coupon_date_1: string
```

First additional coupon date. Source: EDI only.

#### `Readonly` coupon_date_2

```ts
coupon_date_2: string
```

Second additional coupon date. Source: EDI only.

#### `Readonly` coupon_date_3

```ts
coupon_date_3: string
```

Third additional coupon date. Source: EDI only.

#### `Readonly` coupon_date_4

```ts
coupon_date_4: string
```

Fourth additional coupon date. Source: EDI only.

#### `Readonly` coupon_type

```ts
coupon_type: CdapiBondCouponType
```

Type of the coupon structure (e.g. fixed, floating, zero). Sources: EDI, XID.

#### `Readonly` depot_currency_code

```ts
depot_currency_code: string
```

Currency in which the bond is denominated for custody / depot purposes. Sources: EDI, WM.

#### `Readonly` development_goal

```ts
development_goal: CdapiBondDevelopmentGoal
```

Development goal classification (e.g. green bond, social bond). Source: EDI.

#### `Readonly` first_coupon_date

```ts
first_coupon_date: string
```

Date of the first coupon payment. ISO-8601 recommended. Sources: EDI, WM, XID.

#### `Readonly` first_interest_rate_date

```ts
first_interest_rate_date: string
```

Date from which the current interest rate (field 35) is valid. Source: WM (WM field ID 1689).

#### `Readonly` first_interest_rate_period_start_date

```ts
first_interest_rate_period_start_date: string
```

Start date of the first interest payment period (for fixed income securities). Source: WM.

#### `Readonly` id

```ts
id: number
```

Internal unique identifier for this instrument.
Note: int64 is not currently supported here — tracked for future migration.

##### Remarks

Format: int32

#### `Readonly` interest_rate

```ts
interest_rate: number
```

Current applicable interest rate (coupon rate for fixed bonds, reset rate for floaters). Sources: EDI, WM, XID.

##### Remarks

Format: double

#### `Readonly` interest_rate_calculation_method

```ts
interest_rate_calculation_method: CdapiBondInterestRateCalculationMethod
```

Method used to calculate interest (e.g. actual/360, 30/360). Sources: EDI, WM, XID.

#### `Readonly` interest_rate_date

```ts
interest_rate_date: string
```

Date on which the latest interest coupon rate was applied. Source: EDI.

#### `Readonly` interest_rate_day

```ts
interest_rate_day: string
```

Day convention used for interest rate calculations. Source: WM.

#### `Readonly` interest_rate_fixing

```ts
interest_rate_fixing: number
```

Interest rate determination / fixing method. Source: WM.

##### Remarks

Format: int32

#### `Readonly` interest_rate_month

```ts
interest_rate_month: CdapiBondInterestRateMonth
```

Month in which interest is paid. Source: WM only.

#### `Readonly` interest_rate_pa

```ts
interest_rate_pa: CdapiBondInterestRatePA
```

Interest rate per annum classification. Source: WM only.

#### `Readonly` interest_rate_period

```ts
interest_rate_period: CdapiBondInterestRatePeriod
```

Frequency / period of interest payments (e.g. annual, semi-annual). Sources: EDI, XID.

#### `Readonly` interest_rate_period_count

```ts
interest_rate_period_count: number
```

Maximum number of coupon payments per year.
Determined by counting records within the same year. Maximum value is 4.
Securities with monthly frequency are not present in the database. Source: XID only.

##### Remarks

Format: int32

#### `Readonly` interest_rate_spread

```ts
interest_rate_spread: number
```

Spread to be added to or deducted from the reference index rate. Sources: EDI, XID.

##### Remarks

Format: double

#### `Readonly` interest_rate_type

```ts
interest_rate_type: CdapiBondInterestRateType
```

Type of interest rate (e.g. fixed, floating, stepped). Sources: EDI, XID.

#### `Readonly` is_call_option

```ts
is_call_option: boolean
```

If true, the issuer has the right to redeem the bond early (call option). Sources: EDI, XID.

#### `Readonly` is_put_option

```ts
is_put_option: boolean
```

If true, the holder has the right to demand early repayment (put option). Sources: EDI, XID.

#### `Readonly` is_subordinate

```ts
is_subordinate: boolean
```

If true, the bond is a subordinated debt instrument (lower priority in liquidation). Sources: EDI, WM, XID.

#### `Readonly` issuing_country_code

```ts
issuing_country_code: string
```

ISO 3166-1 alpha-2 country code of the issuing country. Sources: EDI, XID.

#### `Readonly` issuing_currency_code

```ts
issuing_currency_code: string
```

ISO 4217 currency code in which the bond was issued. Sources: EDI, WM, XID.

#### `Readonly` issuing_date

```ts
issuing_date: string
```

Date the bond was issued. ISO-8601 format recommended. Sources: EDI, WM, XID.

#### `Readonly` issuing_price

```ts
issuing_price: number
```

Price at which the bond was originally issued. Sources: EDI, WM, XID.

##### Remarks

Format: double

#### `Readonly` issuing_volume

```ts
issuing_volume: number
```

Total nominal issuing volume (absolute amount). Sources: EDI, WM, XID.
Note: int64 is not currently working for this field — tracked for future migration.

##### Remarks

Format: int32

#### `Readonly` last_coupon_date

```ts
last_coupon_date: string
```

Date of the last coupon payment before maturity. ISO-8601 recommended. Sources: EDI, WM, XID.

#### `Readonly` last_interest_rate_date

```ts
last_interest_rate_date: string
```

Date until which the current interest rate (field 35) is valid. Source: WM (WM field ID 1690).

#### `Readonly` maturity_date

```ts
maturity_date: string
```

Maturity date — date on which the principal is repaid. ISO-8601 recommended. Sources: EDI, WM, XID.

#### `Readonly` minimum_traded_unit

```ts
minimum_traded_unit: number
```

Minimum tradeable unit (lot size) of the bond. Sources: EDI, WM, XID.

##### Remarks

Format: double

#### `Readonly` minimum_traded_volume

```ts
minimum_traded_volume: number
```

Minimum tradeable volume (absolute amount). Sources: EDI, WM, XID.

##### Remarks

Format: int32

#### `Readonly` next_coupon_date

```ts
next_coupon_date: string
```

Date of the next upcoming coupon payment. Source: EDI only.

#### `Readonly` nominal_value

```ts
nominal_value: number
```

Outstanding nominal sum bearing interest, applicable to fixed-interest bonds. Sources: EDI, WM, XID.

##### Remarks

Format: double

#### `Readonly` outstanding_amount

```ts
outstanding_amount: number
```

Total outstanding face value of all bonds in this series based on denomination. Sources: EDI, XID.

##### Remarks

Format: double

#### `Readonly` percentage_dependence

```ts
percentage_dependence: number
```

Percentage of the reference rate used for interest calculation. Source: WM.
Note: defined as int in the table schema but stored as double here.

##### Remarks

Format: double

#### `Readonly` redemption_price

```ts
redemption_price: number
```

Price at which the bond will be redeemed at maturity. Sources: EDI, WM, XID.

##### Remarks

Format: double

#### `Readonly` redemption_type

```ts
redemption_type: CdapiBondRedemptionType
```

Redemption type defining how the principal is repaid at maturity. Sources: EDI, WM, XID.

#### `Readonly` reference_interest_rate

```ts
reference_interest_rate: CdapiBondReferenceInterestRate
```

Reference interest rate used as a benchmark for floating-rate bonds. Source: WM only.

#### `Readonly` reference_interest_rate_maturity

```ts
reference_interest_rate_maturity: CdapiBondReferenceInterestRateMaturity
```

Maturity of the reference interest rate (e.g. 3-month, 6-month). Sources: EDI, WM.

#### `Readonly` reference_interest_rate_period

```ts
reference_interest_rate_period: CdapiBondReferenceInterestRatePeriod
```

Period of the reference interest rate (e.g. daily, monthly). Source: WM only.

#### `Readonly` reference_interest_rate_period_count

```ts
reference_interest_rate_period_count: number
```

Number of days/weeks/months/years (as defined by reference_interest_rate_period)
of the maturity for the instrument on which the interest_rate depends. Source: WM only.

##### Remarks

Format: int32

#### `Readonly` reference_interest_rate_wkn

```ts
reference_interest_rate_wkn: string
```

WKN (German security identifier) of the reference interest rate instrument. Source: WM.

#### `Readonly` settlement_currency_code

```ts
settlement_currency_code: string
```

ISO 4217 currency code used for settlement. Sources: EDI, WM, XID.

#### `Readonly` source

```ts
source: CdapiBondInstrumentBondSource
```

Data source for this bond record (WM, EDI, or XID).

##### Remarks

Format: enum

#### `Readonly` special_debitor_redemption

```ts
special_debitor_redemption: CdapiBondSpecialDebitorRedemption
```

Special debtor redemption classification. Source: WM only.

#### `Readonly` special_redemption

```ts
special_redemption: CdapiBondSpecialRedemption
```

Special redemption classification. Source: WM only.

#### `Readonly` status

```ts
status: CdapiBondInstrumentBondStatus
```

Current lifecycle status of the bond (ACTIVE, INACTIVE, DEFAULT). Source: EDI only.

##### Remarks

Format: enum

#### `Readonly` with_holding_tax

```ts
with_holding_tax: number
```

Withholding tax rate applicable to the bond. Source: WM.
Note: defined as int in the table schema but stored as double here.

##### Remarks

Format: double
