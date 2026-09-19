---
title: "CdapiGetBondInterestRatePeriodsOptions"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiGetBondInterestRatePeriodsOptions"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiGetBondInterestRatePeriodsOptions"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiGetBondInterestRatePeriodsOptions.html"
defines: ["CdapiGetBondInterestRatePeriodsOptions"]
member_count: 52
members: ["asset_class_category_code?", "asset_class_group_code?", "benchmark_code?", "bond_category_code?", "bond_keyfigure_source?", "bond_source?", "bond_type_code?", "cfi_code?", "chunk_size?", "country_code?", "coupon_type_code?", "currency_code?", "eet_sfdr_pai_source?", "eet_spi_source?", "esg_risk_source?", "id?", "ids_feed_code?", "ids_feed_number?", "ids_ticker?", "instrument_id?", "interest_rate_calculation_method_code?", "interest_rate_month_code?", "interest_rate_pa_code?", "interest_rate_period_code?", "interest_rate_period_count?", "interest_rate_type_code?", "isin?", "issuer_id?", "lei?", "limit?", "listing_id?", "nsin?", "offset?", "onData?", "onError?", "onFinally?", "operating_mic_code?", "preferred_trading_venue_strategy_code?", "rating_source?", "redemption_type_code?", "reference_interest_rate_code?", "reference_interest_rate_maturity_code?", "reference_interest_rate_period_code?", "reference_interest_rate_period_count?", "search_string?", "sector_id?", "segment_mic_code?", "special_debitor_redemption_code?", "special_redemption_code?", "sub_sector_id?", "trading_venue_code?", "vwd_key?"]
member_groups:
  "Properties": ["asset_class_category_code?", "asset_class_group_code?", "benchmark_code?", "bond_category_code?", "bond_keyfigure_source?", "bond_source?", "bond_type_code?", "cfi_code?", "chunk_size?", "country_code?", "coupon_type_code?", "currency_code?", "eet_sfdr_pai_source?", "eet_spi_source?", "esg_risk_source?", "id?", "ids_feed_code?", "ids_feed_number?", "ids_ticker?", "instrument_id?", "interest_rate_calculation_method_code?", "interest_rate_month_code?", "interest_rate_pa_code?", "interest_rate_period_code?", "interest_rate_period_count?", "interest_rate_type_code?", "isin?", "issuer_id?", "lei?", "limit?", "listing_id?", "nsin?", "offset?", "onData?", "onError?", "onFinally?", "operating_mic_code?", "preferred_trading_venue_strategy_code?", "rating_source?", "redemption_type_code?", "reference_interest_rate_code?", "reference_interest_rate_maturity_code?", "reference_interest_rate_period_code?", "reference_interest_rate_period_count?", "search_string?", "sector_id?", "segment_mic_code?", "special_debitor_redemption_code?", "special_redemption_code?", "sub_sector_id?", "trading_venue_code?", "vwd_key?"]
related_types: ["SDK.InfrontSDK.CoreDataAPI.CdapiBondInterestRatePeriodsData"]
reference_count: 9
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiGetBondInterestRatePeriodsOptionsBondKeyfigureSource", "SDK.InfrontSDK.CoreDataAPI.CdapiGetBondInterestRatePeriodsOptionsBondSource", "SDK.InfrontSDK.CoreDataAPI.CdapiGetBondInterestRatePeriodsOptionsEetSfdrPaiSource", "SDK.InfrontSDK.CoreDataAPI.CdapiGetBondInterestRatePeriodsOptionsEetSpiSource", "SDK.InfrontSDK.CoreDataAPI.CdapiGetBondInterestRatePeriodsOptionsEsgRiskSource", "SDK.InfrontSDK.CoreDataAPI.CdapiBondInterestRatePeriodsData", "SDK.InfrontSDK.CoreDataAPI.CdapiGetBondInterestRatePeriodsOptionsPreferredTradingVenueStrategyCode", "SDK.InfrontSDK.CoreDataAPI.CdapiGetBondInterestRatePeriodsOptionsRatingSource", "SDK.InfrontSDK.CoreDataAPI.cdapiGetBondInterestRatePeriods"]
---

# CdapiGetBondInterestRatePeriodsOptions

Request options for [cdapiGetBondInterestRatePeriods](./SDK.InfrontSDK.CoreDataAPI.cdapiGetBondInterestRatePeriods.md)

```ts
interface CdapiGetBondInterestRatePeriodsOptions {
    asset_class_category_code?: string | readonly string[];
    asset_class_group_code?: string | readonly string[];
    benchmark_code?: string | readonly string[];
    bond_category_code?: string | readonly string[];
    bond_keyfigure_source?: CdapiGetBondInterestRatePeriodsOptionsBondKeyfigureSource;
    bond_source?: CdapiGetBondInterestRatePeriodsOptionsBondSource;
    bond_type_code?: string | readonly string[];
    cfi_code?: string | readonly string[];
    chunk_size?: number;
    country_code?: string | readonly string[];
    coupon_type_code?: string | readonly string[];
    currency_code?: string | readonly string[];
    eet_sfdr_pai_source?: CdapiGetBondInterestRatePeriodsOptionsEetSfdrPaiSource;
    eet_spi_source?: CdapiGetBondInterestRatePeriodsOptionsEetSpiSource;
    esg_risk_source?: CdapiGetBondInterestRatePeriodsOptionsEsgRiskSource;
    id?: string | readonly string[];
    ids_feed_code?: string | readonly string[];
    ids_feed_number?: number | readonly number[];
    ids_ticker?: string | readonly string[];
    instrument_id?: string | readonly string[];
    interest_rate_calculation_method_code?: string | readonly string[];
    interest_rate_month_code?: string | readonly string[];
    interest_rate_pa_code?: string | readonly string[];
    interest_rate_period_code?: string | readonly string[];
    interest_rate_period_count?: number | readonly number[];
    interest_rate_type_code?: string | readonly string[];
    isin?: string | readonly string[];
    issuer_id?: string | readonly string[];
    lei?: string | readonly string[];
    limit?: number;
    listing_id?: string | readonly string[];
    nsin?: string | readonly string[];
    offset?: number;
    onData?: CoreDataRequestSuccessCallback<CdapiBondInterestRatePeriodsData>;
    onError?: CoreDataRequestErrorCallback<CdapiBondInterestRatePeriodsData>;
    onFinally?: CoreDataRequestFinallyCallback<
        CdapiBondInterestRatePeriodsData,
    >;
    operating_mic_code?: string
    | readonly string[];
    preferred_trading_venue_strategy_code?: CdapiGetBondInterestRatePeriodsOptionsPreferredTradingVenueStrategyCode;
    rating_source?: CdapiGetBondInterestRatePeriodsOptionsRatingSource;
    redemption_type_code?: string | readonly string[];
    reference_interest_rate_code?: string | readonly string[];
    reference_interest_rate_maturity_code?: string | readonly string[];
    reference_interest_rate_period_code?: string | readonly string[];
    reference_interest_rate_period_count?: string | readonly string[];
    search_string?: string;
    sector_id?: number | readonly number[];
    segment_mic_code?: string | readonly string[];
    special_debitor_redemption_code?: string | readonly string[];
    special_redemption_code?: string | readonly string[];
    sub_sector_id?: number | readonly number[];
    trading_venue_code?: string | readonly string[];
    vwd_key?: string | readonly string[];
}
```

#### Hierarchy

- CdapiCommonRequestOptions<CdapiBondInterestRatePeriodsData>

  - CdapiGetBondInterestRatePeriodsOptions

### Properties

#### `Optional` ` Readonly`asset_class_category_code

```ts
asset_class_category_code?: string | readonly string[]
```

category code of the asset class, e.g. LEVERAGE for leverage products

#### `Optional` ` Readonly`asset_class_group_code

```ts
asset_class_group_code?: string | readonly string[]
```

group code of the asset class, e.g. LEVERAGE_WARR for warrants

#### `Optional` ` Readonly`benchmark_code

```ts
benchmark_code?: string | readonly string[]
```

EDI-only

#### `Optional` ` Readonly`bond_category_code

```ts
bond_category_code?: string | readonly string[]
```

EDI,XID: Category of the financial instrument

#### `Optional` ` Readonly`bond_keyfigure_source

```ts
bond_keyfigure_source?: CdapiGetBondInterestRatePeriodsOptionsBondKeyfigureSource
```

source for keyfigures

#### `Optional` ` Readonly`bond_source

```ts
bond_source?: CdapiGetBondInterestRatePeriodsOptionsBondSource
```

source of bond data (EDI, WM or XID)

#### `Optional` ` Readonly`bond_type_code

```ts
bond_type_code?: string | readonly string[]
```

EDI,XID: Macro category to which the financial instrument belongs.

#### `Optional` ` Readonly`cfi_code

```ts
cfi_code?: string | readonly string[]
```

search for cfi code (Classification of financial instrument)

#### `Optional` ` Readonly`chunk_size

```ts
chunk_size?: number
```

maximum number of items per chunk - only applies to streaming requests (min: 10, max: 100)

#### `Optional` ` Readonly`country_code

```ts
country_code?: string | readonly string[]
```

country code in isoalpha2

#### `Optional` ` Readonly`coupon_type_code

```ts
coupon_type_code?: string | readonly string[]
```

EDI,XID: Type of the coupon structure

#### `Optional` ` Readonly`currency_code

```ts
currency_code?: string | readonly string[]
```

currency code in isoalpha3

#### `Optional` ` Readonly`eet_sfdr_pai_source

```ts
eet_sfdr_pai_source?: CdapiGetBondInterestRatePeriodsOptionsEetSfdrPaiSource
```

source for sfdr-pai data

#### `Optional` ` Readonly`eet_spi_source

```ts
eet_spi_source?: CdapiGetBondInterestRatePeriodsOptionsEetSpiSource
```

source for sustainability data

#### `Optional` ` Readonly`esg_risk_source

```ts
esg_risk_source?: CdapiGetBondInterestRatePeriodsOptionsEsgRiskSource
```

the esg_risk source (e.g. CLARITY)

#### `Optional` ` Readonly`id

```ts
id?: string | readonly string[]
```

identifier on listing level for Infront data universe

#### `Optional` ` Readonly`ids_feed_code

```ts
ids_feed_code?: string | readonly string[]
```

ids-feedcode for Infront data universe (linked to ids-feednumber)

#### `Optional` ` Readonly`ids_feed_number

```ts
ids_feed_number?: number | readonly number[]
```

ids-feednumber for Infront data universe

#### `Optional` ` Readonly`ids_ticker

```ts
ids_ticker?: string | readonly string[]
```

ids-ticker identifier for Infront data universe

#### `Optional` ` Readonly`instrument_id

```ts
instrument_id?: string | readonly string[]
```

identifier on instrument level for Infront data universe

#### `Optional` ` Readonly`interest_rate_calculation_method_code

```ts
interest_rate_calculation_method_code?: string | readonly string[]
```

EDI,WM,XID

#### `Optional` ` Readonly`interest_rate_month_code

```ts
interest_rate_month_code?: string | readonly string[]
```

WM-only

#### `Optional` ` Readonly`interest_rate_pa_code

```ts
interest_rate_pa_code?: string | readonly string[]
```

WM-only: Interest rate p. a.

#### `Optional` ` Readonly`interest_rate_period_code

```ts
interest_rate_period_code?: string | readonly string[]
```

EDI,XID

#### `Optional` ` Readonly`interest_rate_period_count

```ts
interest_rate_period_count?: number | readonly number[]
```

WM-only: The field reference_interest_rate_period_count represents the
number of days/weeks/months/years (=reference_interest_rate_period) of the
maturity for the instrument from which the value for interest_rate depends
on.

#### `Optional` ` Readonly`interest_rate_type_code

```ts
interest_rate_type_code?: string | readonly string[]
```

EDI,XID

#### `Optional` ` Readonly`isin

```ts
isin?: string | readonly string[]
```

search for International Securities Identification Number

#### `Optional` ` Readonly`issuer_id

```ts
issuer_id?: string | readonly string[]
```

identifier on issuer level for Infront data universe

#### `Optional` ` Readonly`lei

```ts
lei?: string | readonly string[]
```

search for legal entity identifier

#### `Optional` ` Readonly`limit

```ts
limit?: number
```

limit of the results

#### `Optional` ` Readonly`listing_id

```ts
listing_id?: string | readonly string[]
```

identifier on listing level for Infront data universe (same as 'id' in this context)

#### `Optional` ` Readonly`nsin

```ts
nsin?: string | readonly string[]
```

search for national identifier like 'wkn', 'valor', 'sedol'...

#### `Optional` ` Readonly`offset

```ts
offset?: number
```

offset - used for pagination

#### `Optional` onData

```ts
onData?: CoreDataRequestSuccessCallback<CdapiBondInterestRatePeriodsData>
```

A callback called when a data request has completed succesfully.

Inherited from Infront.CdapiCommonRequestOptions.onData

#### `Optional` onError

```ts
onError?: CoreDataRequestErrorCallback<CdapiBondInterestRatePeriodsData>
```

A callback called when an error occurred trying to make the request.

Inherited from Infront.CdapiCommonRequestOptions.onError

#### `Optional` onFinally

```ts
onFinally?: CoreDataRequestFinallyCallback<CdapiBondInterestRatePeriodsData>
```

A callback called when the request is finished, either because data was received,
error occurred, or the request was aborted/unsubscribed.

Inherited from Infront.CdapiCommonRequestOptions.onFinally

#### `Optional` ` Readonly`operating_mic_code

```ts
operating_mic_code?: string | readonly string[]
```

search for operating_mic_code according ISO 10383

#### `Optional` ` Readonly`preferred_trading_venue_strategy_code

```ts
preferred_trading_venue_strategy_code?: CdapiGetBondInterestRatePeriodsOptionsPreferredTradingVenueStrategyCode
```

Defines the strategy used to select a single listing per instrument.
All strategies always restrict the result to listings the customer is entitled to.
Applies only when the request uses an instrument-level identifier
(e.g., isin, nsin, ids_ticker, instrument_id) rather than a listing-level
identifier (e.g., listing_id, vwd_key, ids_identifier).
The strategy is ignored when filtering by specific trading venues or feeds
(e.g., trading_venue_code, trading_venue_id, ids_feed_number, ids_feed_code).
If no strategy is specified, all listings from all entitled sources are returned.

#### `Optional` ` Readonly`rating_source

```ts
rating_source?: CdapiGetBondInterestRatePeriodsOptionsRatingSource
```

the rating source (e.g. FITCH, MOODYS...)

#### `Optional` ` Readonly`redemption_type_code

```ts
redemption_type_code?: string | readonly string[]
```

EDI,WM,XID

#### `Optional` ` Readonly`reference_interest_rate_code

```ts
reference_interest_rate_code?: string | readonly string[]
```

WM-only

#### `Optional` ` Readonly`reference_interest_rate_maturity_code

```ts
reference_interest_rate_maturity_code?: string | readonly string[]
```

EDI,WM

#### `Optional` ` Readonly`reference_interest_rate_period_code

```ts
reference_interest_rate_period_code?: string | readonly string[]
```

WM-only

#### `Optional` ` Readonly`reference_interest_rate_period_count

```ts
reference_interest_rate_period_count?: string | readonly string[]
```

WM-only: The field reference_interest_rate_period_count represents the
number of days/weeks/months/years (=reference_interest_rate_period) of the
maturity for the instrument from which the value for interest_rate depends
on.

#### `Optional` ` Readonly`search_string

```ts
search_string?: string
```

perform a free-text search across several fields, e.g. by instrument name, ISIN, ticker etc. (3 characters at least)

#### `Optional` ` Readonly`sector_id

```ts
sector_id?: number | readonly number[]
```

sector_id, e.g. Consumer Durables (source = INFRONT)

#### `Optional` ` Readonly`segment_mic_code

```ts
segment_mic_code?: string | readonly string[]
```

search for segment_mic_code according ISO 10383

#### `Optional` ` Readonly`special_debitor_redemption_code

```ts
special_debitor_redemption_code?: string | readonly string[]
```

WM-only

#### `Optional` ` Readonly`special_redemption_code

```ts
special_redemption_code?: string | readonly string[]
```

WM-only

#### `Optional` ` Readonly`sub_sector_id

```ts
sub_sector_id?: number | readonly number[]
```

sub_sector_id, e.g. Automobiles & Parts (source = INFRONT)

#### `Optional` ` Readonly`trading_venue_code

```ts
trading_venue_code?: string | readonly string[]
```

code of trading-venue linked to vwd-key

#### `Optional` ` Readonly`vwd_key

```ts
vwd_key?: string | readonly string[]
```

Our internal identifier combining instrument information with trading venue
