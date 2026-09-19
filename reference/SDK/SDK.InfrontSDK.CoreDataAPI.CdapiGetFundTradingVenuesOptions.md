---
title: "CdapiGetFundTradingVenuesOptions"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiGetFundTradingVenuesOptions"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiGetFundTradingVenuesOptions"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiGetFundTradingVenuesOptions.html"
defines: ["CdapiGetFundTradingVenuesOptions"]
member_count: 46
members: ["asset_class_category_code?", "asset_class_group_code?", "benchmark_id?", "cfi_code?", "chunk_size?", "compartment_region_id?", "compartment_sector_id?", "country_code?", "currency_code?", "eet_sfdr_pai_source?", "eet_spi_source?", "efc_id?", "esg_risk_source?", "fund_type_id?", "has_pension_plan?", "has_savings_plan?", "id?", "ids_feed_code?", "ids_feed_number?", "ids_ticker?", "instrument_id?", "is_distribution?", "is_etf?", "is_german_riester_fund?", "isin?", "issuer_id?", "lei?", "limit?", "listing_id?", "nsin?", "offset?", "onData?", "onError?", "onFinally?", "operating_mic_code?", "preferred_trading_venue_strategy_code?", "rating_source?", "search_string?", "sector_id?", "segment_mic_code?", "sfdr?", "sort?", "sri?", "sub_sector_id?", "trading_venue_code?", "vwd_key?"]
member_groups:
  "Properties": ["asset_class_category_code?", "asset_class_group_code?", "benchmark_id?", "cfi_code?", "chunk_size?", "compartment_region_id?", "compartment_sector_id?", "country_code?", "currency_code?", "eet_sfdr_pai_source?", "eet_spi_source?", "efc_id?", "esg_risk_source?", "fund_type_id?", "has_pension_plan?", "has_savings_plan?", "id?", "ids_feed_code?", "ids_feed_number?", "ids_ticker?", "instrument_id?", "is_distribution?", "is_etf?", "is_german_riester_fund?", "isin?", "issuer_id?", "lei?", "limit?", "listing_id?", "nsin?", "offset?", "onData?", "onError?", "onFinally?", "operating_mic_code?", "preferred_trading_venue_strategy_code?", "rating_source?", "search_string?", "sector_id?", "segment_mic_code?", "sfdr?", "sort?", "sri?", "sub_sector_id?", "trading_venue_code?", "vwd_key?"]
related_types: ["SDK.InfrontSDK.CoreDataAPI.CdapiCommonTradingVenuesData"]
reference_count: 9
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiGetFundTradingVenuesOptionsEetSfdrPaiSource", "SDK.InfrontSDK.CoreDataAPI.CdapiGetFundTradingVenuesOptionsEetSpiSource", "SDK.InfrontSDK.CoreDataAPI.CdapiGetFundTradingVenuesOptionsEsgRiskSource", "SDK.InfrontSDK.CoreDataAPI.CdapiCommonTradingVenuesData", "SDK.InfrontSDK.CoreDataAPI.CdapiGetFundTradingVenuesOptionsPreferredTradingVenueStrategyCode", "SDK.InfrontSDK.CoreDataAPI.CdapiGetFundTradingVenuesOptionsRatingSource", "SDK.InfrontSDK.CoreDataAPI.CdapiSortField", "SDK.InfrontSDK.CoreDataAPI.CdapiGetFundTradingVenuesSortField", "SDK.InfrontSDK.CoreDataAPI.cdapiGetFundTradingVenues"]
---

# CdapiGetFundTradingVenuesOptions

Request options for [cdapiGetFundTradingVenues](./SDK.InfrontSDK.CoreDataAPI.cdapiGetFundTradingVenues.md)

```ts
interface CdapiGetFundTradingVenuesOptions {
    asset_class_category_code?: string | readonly string[];
    asset_class_group_code?: string | readonly string[];
    benchmark_id?: number | readonly number[];
    cfi_code?: string | readonly string[];
    chunk_size?: number;
    compartment_region_id?: number | readonly number[];
    compartment_sector_id?: number | readonly number[];
    country_code?: string | readonly string[];
    currency_code?: string | readonly string[];
    eet_sfdr_pai_source?: CdapiGetFundTradingVenuesOptionsEetSfdrPaiSource;
    eet_spi_source?: CdapiGetFundTradingVenuesOptionsEetSpiSource;
    efc_id?: number | readonly number[];
    esg_risk_source?: CdapiGetFundTradingVenuesOptionsEsgRiskSource;
    fund_type_id?: number | readonly number[];
    has_pension_plan?: boolean;
    has_savings_plan?: boolean;
    id?: string | readonly string[];
    ids_feed_code?: string | readonly string[];
    ids_feed_number?: number | readonly number[];
    ids_ticker?: string | readonly string[];
    instrument_id?: string | readonly string[];
    is_distribution?: boolean;
    is_etf?: boolean;
    is_german_riester_fund?: boolean;
    isin?: string | readonly string[];
    issuer_id?: string | readonly string[];
    lei?: string | readonly string[];
    limit?: number;
    listing_id?: string | readonly string[];
    nsin?: string | readonly string[];
    offset?: number;
    onData?: CoreDataRequestSuccessCallback<CdapiCommonTradingVenuesData>;
    onError?: CoreDataRequestErrorCallback<CdapiCommonTradingVenuesData>;
    onFinally?: CoreDataRequestFinallyCallback<CdapiCommonTradingVenuesData>;
    operating_mic_code?: string | readonly string[];
    preferred_trading_venue_strategy_code?: CdapiGetFundTradingVenuesOptionsPreferredTradingVenueStrategyCode;
    rating_source?: CdapiGetFundTradingVenuesOptionsRatingSource;
    search_string?: string;
    sector_id?: number | readonly number[];
    segment_mic_code?: string | readonly string[];
    sfdr?: number | readonly number[];
    sort?:
        | CdapiSortField<CdapiGetFundTradingVenuesSortField>
        | readonly CdapiSortField<CdapiGetFundTradingVenuesSortField>[];
    sri?: number | readonly number[];
    sub_sector_id?: number | readonly number[];
    trading_venue_code?: string | readonly string[];
    vwd_key?: string | readonly string[];
}
```

#### Hierarchy

- CdapiCommonRequestOptions<CdapiCommonTradingVenuesData>

  - CdapiGetFundTradingVenuesOptions

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

#### `Optional` ` Readonly`benchmark_id

```ts
benchmark_id?: number | readonly number[]
```

benchmark of the fund

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

#### `Optional` ` Readonly`compartment_region_id

```ts
compartment_region_id?: number | readonly number[]
```

region_id of the compartment

#### `Optional` ` Readonly`compartment_sector_id

```ts
compartment_sector_id?: number | readonly number[]
```

sector_id of the compartment

#### `Optional` ` Readonly`country_code

```ts
country_code?: string | readonly string[]
```

country code in isoalpha2

#### `Optional` ` Readonly`currency_code

```ts
currency_code?: string | readonly string[]
```

currency code in isoalpha3

#### `Optional` ` Readonly`eet_sfdr_pai_source

```ts
eet_sfdr_pai_source?: CdapiGetFundTradingVenuesOptionsEetSfdrPaiSource
```

source for sfdr-pai data

#### `Optional` ` Readonly`eet_spi_source

```ts
eet_spi_source?: CdapiGetFundTradingVenuesOptionsEetSpiSource
```

source for sustainability data

#### `Optional` ` Readonly`efc_id

```ts
efc_id?: number | readonly number[]
```

id for efc classification

#### `Optional` ` Readonly`esg_risk_source

```ts
esg_risk_source?: CdapiGetFundTradingVenuesOptionsEsgRiskSource
```

the esg_risk source (e.g. CLARITY)

#### `Optional` ` Readonly`fund_type_id

```ts
fund_type_id?: number | readonly number[]
```

id for fund type

#### `Optional` ` Readonly`has_pension_plan

```ts
has_pension_plan?: boolean
```

Indication whether the fund has a pension plan

#### `Optional` ` Readonly`has_savings_plan

```ts
has_savings_plan?: boolean
```

Indication whether the fund has a savings plan

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

#### `Optional` ` Readonly`is_distribution

```ts
is_distribution?: boolean
```

indication whether the fund is distributing or accumulating

#### `Optional` ` Readonly`is_etf

```ts
is_etf?: boolean
```

Indication whether the fund is an ETF

#### `Optional` ` Readonly`is_german_riester_fund

```ts
is_german_riester_fund?: boolean
```

Indication whether the fund is a Riester Fund

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
onData?: CoreDataRequestSuccessCallback<CdapiCommonTradingVenuesData>
```

A callback called when a data request has completed succesfully.

Inherited from Infront.CdapiCommonRequestOptions.onData

#### `Optional` onError

```ts
onError?: CoreDataRequestErrorCallback<CdapiCommonTradingVenuesData>
```

A callback called when an error occurred trying to make the request.

Inherited from Infront.CdapiCommonRequestOptions.onError

#### `Optional` onFinally

```ts
onFinally?: CoreDataRequestFinallyCallback<CdapiCommonTradingVenuesData>
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
preferred_trading_venue_strategy_code?: CdapiGetFundTradingVenuesOptionsPreferredTradingVenueStrategyCode
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
rating_source?: CdapiGetFundTradingVenuesOptionsRatingSource
```

the rating source (e.g. FITCH, MOODYS...)

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

#### `Optional` ` Readonly`sfdr

```ts
sfdr?: number | readonly number[]
```

sfdr of the compartment

#### `Optional` ` Readonly`sort

```ts
sort?:
    | CdapiSortField<CdapiGetFundTradingVenuesSortField>
    | readonly CdapiSortField<CdapiGetFundTradingVenuesSortField>[]
```

Sortable fields:

- [benchmark.id](http://benchmark.id), [benchmark.name](http://benchmark.name)
- trading_venue.code
- compartment.sfdr
- instrument.fund.is_distribution, instrument.fund.sri
- listing.common.currency_code

#### `Optional` ` Readonly`sri

```ts
sri?: number | readonly number[]
```

sri of the fund instrument

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
