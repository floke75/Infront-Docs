---
title: "CdapiPostFundLegalTypesNationalOptions"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiPostFundLegalTypesNationalOptions"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiPostFundLegalTypesNationalOptions"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiPostFundLegalTypesNationalOptions.html"
defines: ["CdapiPostFundLegalTypesNationalOptions"]
member_count: 60
members: ["asset_class_category_code", "asset_class_group_code", "benchmark_id", "cfi_code", "chunk_size", "compartment_region_id", "compartment_sector_id", "country_code", "currency_code", "custom", "eet_sfdr_pai_source", "eet_spi_source", "efc_id", "esg_risk_source", "foundation_date", "fund_type_id", "has_pension_plan", "has_savings_plan", "id", "ids_feed_code", "ids_feed_number", "ids_identifier", "ids_ticker", "instrument_id", "is_distribution", "is_etf", "is_german_riester_fund", "isin", "issuer_id", "lei", "limit", "listing_id", "nsin", "offset", "onData?", "onError?", "onFinally?", "operating_mic_code", "performance_1_month", "performance_1_year", "performance_10_year", "performance_3_month", "performance_3_year", "performance_5_year", "performance_6_month", "performance_current_year", "preferred_trading_venue_strategy_code", "rating_source", "search_string", "sector_id", "segment_mic_code", "sfdr", "sort?", "sri", "sub_sector_id", "total_expense_ratio", "total_score_esg_risk", "trading_venue_code", "turnover_ratio", "vwd_key"]
member_groups:
  "Properties": ["asset_class_category_code", "asset_class_group_code", "benchmark_id", "cfi_code", "chunk_size", "compartment_region_id", "compartment_sector_id", "country_code", "currency_code", "custom", "eet_sfdr_pai_source", "eet_spi_source", "efc_id", "esg_risk_source", "foundation_date", "fund_type_id", "has_pension_plan", "has_savings_plan", "id", "ids_feed_code", "ids_feed_number", "ids_identifier", "ids_ticker", "instrument_id", "is_distribution", "is_etf", "is_german_riester_fund", "isin", "issuer_id", "lei", "limit", "listing_id", "nsin", "offset", "onData?", "onError?", "onFinally?", "operating_mic_code", "performance_1_month", "performance_1_year", "performance_10_year", "performance_3_month", "performance_3_year", "performance_5_year", "performance_6_month", "performance_current_year", "preferred_trading_venue_strategy_code", "rating_source", "search_string", "sector_id", "segment_mic_code", "sfdr", "sort?", "sri", "sub_sector_id", "total_expense_ratio", "total_score_esg_risk", "trading_venue_code", "turnover_ratio", "vwd_key"]
related_types: ["SDK.InfrontSDK.CoreDataAPI.CdapiFundLegalTypesNationalData", "SDK.InfrontSDK.CoreDataAPI.CdapiFundListListingsRequest"]
reference_count: 14
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiFundListListingsRequestEetSfdrPaiSource", "SDK.InfrontSDK.CoreDataAPI.CdapiFundListListingsRequestEetSpiSource", "SDK.InfrontSDK.CoreDataAPI.CdapiFundListListingsRequestEsgRiskSource", "SDK.InfrontSDK.CoreDataAPI.BasedefFilterParamString", "SDK.InfrontSDK.CoreDataAPI.CdapiCommonIdsIdentifier", "SDK.InfrontSDK.CoreDataAPI.CdapiFundLegalTypesNationalData", "SDK.InfrontSDK.CoreDataAPI.BasedefFilterParamDouble", "SDK.InfrontSDK.CoreDataAPI.CdapiFundListListingsRequestPreferredTradingVenueStrategyCode", "SDK.InfrontSDK.CoreDataAPI.CdapiFundListListingsRequestRatingSource", "SDK.InfrontSDK.CoreDataAPI.CdapiSortField", "SDK.InfrontSDK.CoreDataAPI.CdapiGetFundLegalTypesNationalSortField", "SDK.InfrontSDK.CoreDataAPI.BasedefFilterParamInt32", "SDK.InfrontSDK.CoreDataAPI.cdapiPostFundLegalTypesNational", "SDK.InfrontSDK.CoreDataAPI.CdapiFundListListingsRequest"]
---

# CdapiPostFundLegalTypesNationalOptions

Request options for [cdapiPostFundLegalTypesNational](./SDK.InfrontSDK.CoreDataAPI.cdapiPostFundLegalTypesNational.md)

```ts
interface CdapiPostFundLegalTypesNationalOptions {
    asset_class_category_code: readonly string[];
    asset_class_group_code: readonly string[];
    benchmark_id: readonly number[];
    cfi_code: readonly string[];
    chunk_size: number;
    compartment_region_id: readonly number[];
    compartment_sector_id: readonly number[];
    country_code: readonly string[];
    currency_code: readonly string[];
    custom: any;
    eet_sfdr_pai_source: CdapiFundListListingsRequestEetSfdrPaiSource;
    eet_spi_source: CdapiFundListListingsRequestEetSpiSource;
    efc_id: readonly number[];
    esg_risk_source: CdapiFundListListingsRequestEsgRiskSource;
    foundation_date: BasedefFilterParamString;
    fund_type_id: readonly number[];
    has_pension_plan: boolean;
    has_savings_plan: boolean;
    id: readonly string[];
    ids_feed_code: readonly string[];
    ids_feed_number: readonly number[];
    ids_identifier: readonly CdapiCommonIdsIdentifier[];
    ids_ticker: readonly string[];
    instrument_id: readonly string[];
    is_distribution: boolean;
    is_etf: boolean;
    is_german_riester_fund: boolean;
    isin: readonly string[];
    issuer_id: readonly string[];
    lei: readonly string[];
    limit: number;
    listing_id: readonly string[];
    nsin: readonly string[];
    offset: number;
    onData?: CoreDataRequestSuccessCallback<CdapiFundLegalTypesNationalData>;
    onError?: CoreDataRequestErrorCallback<CdapiFundLegalTypesNationalData>;
    onFinally?: CoreDataRequestFinallyCallback<CdapiFundLegalTypesNationalData>;
    operating_mic_code: readonly string[];
    performance_1_month: BasedefFilterParamDouble;
    performance_1_year: BasedefFilterParamDouble;
    performance_10_year: BasedefFilterParamDouble;
    performance_3_month: BasedefFilterParamDouble;
    performance_3_year: BasedefFilterParamDouble;
    performance_5_year: BasedefFilterParamDouble;
    performance_6_month: BasedefFilterParamDouble;
    performance_current_year: BasedefFilterParamDouble;
    preferred_trading_venue_strategy_code: CdapiFundListListingsRequestPreferredTradingVenueStrategyCode;
    rating_source: CdapiFundListListingsRequestRatingSource;
    search_string: string;
    sector_id: readonly number[];
    segment_mic_code: readonly string[];
    sfdr: readonly number[];
    sort?:
        | CdapiSortField<CdapiGetFundLegalTypesNationalSortField>
        | readonly CdapiSortField<CdapiGetFundLegalTypesNationalSortField>[];
    sri: readonly number[];
    sub_sector_id: readonly number[];
    total_expense_ratio: BasedefFilterParamDouble;
    total_score_esg_risk: BasedefFilterParamInt32;
    trading_venue_code: readonly string[];
    turnover_ratio: BasedefFilterParamDouble;
    vwd_key: readonly string[];
}
```

#### Hierarchy

- CdapiCommonRequestOptions<CdapiFundLegalTypesNationalData>
- Omit<CdapiFundListListingsRequest, "fields" | "sort">

  - CdapiPostFundLegalTypesNationalOptions

### Properties

#### `Readonly` asset_class_category_code

```ts
asset_class_category_code: readonly string[]
```

category code of the asset class, e.g. LEVERAGE for leverage products

Inherited from CdapiFundListListingsRequest.asset_class_category_code

#### `Readonly` asset_class_group_code

```ts
asset_class_group_code: readonly string[]
```

group code of the asset class, e.g. LEVERAGE_WARR for warrants

Inherited from CdapiFundListListingsRequest.asset_class_group_code

#### `Readonly` benchmark_id

```ts
benchmark_id: readonly number[]
```

benchmark of the fund

Inherited from CdapiFundListListingsRequest.benchmark_id

#### `Readonly` cfi_code

```ts
cfi_code: readonly string[]
```

search for cfi code (Classification of financial instrument)

Inherited from CdapiFundListListingsRequest.cfi_code

#### `Readonly` chunk_size

```ts
chunk_size: number
```

maximum number of items per chunk - only applies to streaming requests (min: 10, max: 100)

##### Remarks

Format: int32

Inherited from CdapiFundListListingsRequest.chunk_size

#### `Readonly` compartment_region_id

```ts
compartment_region_id: readonly number[]
```

region_id of the compartment

Inherited from CdapiFundListListingsRequest.compartment_region_id

#### `Readonly` compartment_sector_id

```ts
compartment_sector_id: readonly number[]
```

sector_id of the compartment

Inherited from CdapiFundListListingsRequest.compartment_sector_id

#### `Readonly` country_code

```ts
country_code: readonly string[]
```

country code in isoalpha2

Inherited from CdapiFundListListingsRequest.country_code

#### `Readonly` currency_code

```ts
currency_code: readonly string[]
```

currency code in isoalpha3

Inherited from CdapiFundListListingsRequest.currency_code

#### `Readonly` custom

```ts
custom: any
```

for customer specific filter criterias, MUST be added via body on REST-interface

Inherited from CdapiFundListListingsRequest.custom

#### `Readonly` eet_sfdr_pai_source

```ts
eet_sfdr_pai_source: CdapiFundListListingsRequestEetSfdrPaiSource
```

source for sfdr-pai data

##### Remarks

Format: enum

Inherited from CdapiFundListListingsRequest.eet_sfdr_pai_source

#### `Readonly` eet_spi_source

```ts
eet_spi_source: CdapiFundListListingsRequestEetSpiSource
```

source for sustainability data

##### Remarks

Format: enum

Inherited from CdapiFundListListingsRequest.eet_spi_source

#### `Readonly` efc_id

```ts
efc_id: readonly number[]
```

id for efc classification

Inherited from CdapiFundListListingsRequest.efc_id

#### `Readonly` esg_risk_source

```ts
esg_risk_source: CdapiFundListListingsRequestEsgRiskSource
```

the esg_risk source (e.g. CLARITY)

##### Remarks

Format: enum

Inherited from CdapiFundListListingsRequest.esg_risk_source

#### `Readonly` foundation_date

```ts
foundation_date: BasedefFilterParamString
```

please specify UTC-dates!

Inherited from CdapiFundListListingsRequest.foundation_date

#### `Readonly` fund_type_id

```ts
fund_type_id: readonly number[]
```

id for fund type

Inherited from CdapiFundListListingsRequest.fund_type_id

#### `Readonly` has_pension_plan

```ts
has_pension_plan: boolean
```

Indication whether the fund has a pension plan

Inherited from CdapiFundListListingsRequest.has_pension_plan

#### `Readonly` has_savings_plan

```ts
has_savings_plan: boolean
```

Indication whether the fund has a savings plan

Inherited from CdapiFundListListingsRequest.has_savings_plan

#### `Readonly` id

```ts
id: readonly string[]
```

identifier on listing level for Infront data universe

Inherited from CdapiFundListListingsRequest.id

#### `Readonly` ids_feed_code

```ts
ids_feed_code: readonly string[]
```

ids-feedcode for Infront data universe (linked to ids-feednumber)

Inherited from CdapiFundListListingsRequest.ids_feed_code

#### `Readonly` ids_feed_number

```ts
ids_feed_number: readonly number[]
```

ids-feednumber for Infront data universe

Inherited from CdapiFundListListingsRequest.ids_feed_number

#### `Readonly` ids_identifier

```ts
ids_identifier: readonly CdapiCommonIdsIdentifier[]
```

combination of ids-ticker and -feednumber

Inherited from CdapiFundListListingsRequest.ids_identifier

#### `Readonly` ids_ticker

```ts
ids_ticker: readonly string[]
```

ids-ticker identifier for Infront data universe

Inherited from CdapiFundListListingsRequest.ids_ticker

#### `Readonly` instrument_id

```ts
instrument_id: readonly string[]
```

identifier on instrument level for Infront data universe

Inherited from CdapiFundListListingsRequest.instrument_id

#### `Readonly` is_distribution

```ts
is_distribution: boolean
```

indication whether the fund is distributing or accumulating

Inherited from CdapiFundListListingsRequest.is_distribution

#### `Readonly` is_etf

```ts
is_etf: boolean
```

Indication whether the fund is an ETF

Inherited from CdapiFundListListingsRequest.is_etf

#### `Readonly` is_german_riester_fund

```ts
is_german_riester_fund: boolean
```

Indication whether the fund is a Riester Fund

Inherited from CdapiFundListListingsRequest.is_german_riester_fund

#### `Readonly` isin

```ts
isin: readonly string[]
```

search for International Securities Identification Number

Inherited from CdapiFundListListingsRequest.isin

#### `Readonly` issuer_id

```ts
issuer_id: readonly string[]
```

identifier on issuer level for Infront data universe

Inherited from CdapiFundListListingsRequest.issuer_id

#### `Readonly` lei

```ts
lei: readonly string[]
```

search for legal entity identifier

Inherited from CdapiFundListListingsRequest.lei

#### `Readonly` limit

```ts
limit: number
```

limit of the results

##### Remarks

Format: int32

Inherited from CdapiFundListListingsRequest.limit

#### `Readonly` listing_id

```ts
listing_id: readonly string[]
```

identifier on listing level for Infront data universe (same as 'id' in this context)

Inherited from CdapiFundListListingsRequest.listing_id

#### `Readonly` nsin

```ts
nsin: readonly string[]
```

search for national identifier like 'wkn', 'valor', 'sedol'...

Inherited from CdapiFundListListingsRequest.nsin

#### `Readonly` offset

```ts
offset: number
```

offset - used for pagination

##### Remarks

Format: int32

Inherited from CdapiFundListListingsRequest.offset

#### `Optional` onData

```ts
onData?: CoreDataRequestSuccessCallback<CdapiFundLegalTypesNationalData>
```

A callback called when a data request has completed succesfully.

Inherited from Infront.CdapiCommonRequestOptions.onData

#### `Optional` onError

```ts
onError?: CoreDataRequestErrorCallback<CdapiFundLegalTypesNationalData>
```

A callback called when an error occurred trying to make the request.

Inherited from Infront.CdapiCommonRequestOptions.onError

#### `Optional` onFinally

```ts
onFinally?: CoreDataRequestFinallyCallback<CdapiFundLegalTypesNationalData>
```

A callback called when the request is finished, either because data was received,
error occurred, or the request was aborted/unsubscribed.

Inherited from Infront.CdapiCommonRequestOptions.onFinally

#### `Readonly` operating_mic_code

```ts
operating_mic_code: readonly string[]
```

search for operating_mic_code according ISO 10383

Inherited from CdapiFundListListingsRequest.operating_mic_code

#### `Readonly` performance_1_month

```ts
performance_1_month: BasedefFilterParamDouble
```

keyfigure performance for one month

Inherited from CdapiFundListListingsRequest.performance_1_month

#### `Readonly` performance_1_year

```ts
performance_1_year: BasedefFilterParamDouble
```

keyfigure performance for one year

Inherited from CdapiFundListListingsRequest.performance_1_year

#### `Readonly` performance_10_year

```ts
performance_10_year: BasedefFilterParamDouble
```

keyfigure performance for ten years

Inherited from CdapiFundListListingsRequest.performance_10_year

#### `Readonly` performance_3_month

```ts
performance_3_month: BasedefFilterParamDouble
```

keyfigure performance for three month

Inherited from CdapiFundListListingsRequest.performance_3_month

#### `Readonly` performance_3_year

```ts
performance_3_year: BasedefFilterParamDouble
```

keyfigure performance for three years

Inherited from CdapiFundListListingsRequest.performance_3_year

#### `Readonly` performance_5_year

```ts
performance_5_year: BasedefFilterParamDouble
```

keyfigure performance for five years

Inherited from CdapiFundListListingsRequest.performance_5_year

#### `Readonly` performance_6_month

```ts
performance_6_month: BasedefFilterParamDouble
```

keyfigure performance for six month

Inherited from CdapiFundListListingsRequest.performance_6_month

#### `Readonly` performance_current_year

```ts
performance_current_year: BasedefFilterParamDouble
```

keyfigure performance for the current year

Inherited from CdapiFundListListingsRequest.performance_current_year

#### `Readonly` preferred_trading_venue_strategy_code

```ts
preferred_trading_venue_strategy_code: CdapiFundListListingsRequestPreferredTradingVenueStrategyCode
```

Defines the strategy used to select a single listing per instrument.
All strategies always restrict the result to listings the customer is entitled to.
Applies only when the request uses an instrument-level identifier
(e.g., isin, nsin, ids_ticker, instrument_id) rather than a listing-level
identifier (e.g., listing_id, vwd_key, ids_identifier).
The strategy is ignored when filtering by specific trading venues or feeds
(e.g., trading_venue_code, trading_venue_id, ids_feed_number, ids_feed_code).
If no strategy is specified, all listings from all entitled sources are returned.

##### Remarks

Format: enum

Inherited from CdapiFundListListingsRequest.preferred_trading_venue_strategy_code

#### `Readonly` rating_source

```ts
rating_source: CdapiFundListListingsRequestRatingSource
```

the rating source (e.g. FITCH, MOODYS...)

##### Remarks

Format: enum

Inherited from CdapiFundListListingsRequest.rating_source

#### `Readonly` search_string

```ts
search_string: string
```

perform a free-text search across several fields, e.g. by instrument name, ISIN, ticker etc. (3 characters at least)

Inherited from CdapiFundListListingsRequest.search_string

#### `Readonly` sector_id

```ts
sector_id: readonly number[]
```

sector_id, e.g. Consumer Durables (source = INFRONT)

Inherited from CdapiFundListListingsRequest.sector_id

#### `Readonly` segment_mic_code

```ts
segment_mic_code: readonly string[]
```

search for segment_mic_code according ISO 10383

Inherited from CdapiFundListListingsRequest.segment_mic_code

#### `Readonly` sfdr

```ts
sfdr: readonly number[]
```

sfdr of the compartment

Inherited from CdapiFundListListingsRequest.sfdr

#### `Optional` ` Readonly`sort

```ts
sort?:
    | CdapiSortField<CdapiGetFundLegalTypesNationalSortField>
    | readonly CdapiSortField<CdapiGetFundLegalTypesNationalSortField>[]
```

Sortable fields:

- [benchmark.id](http://benchmark.id), [benchmark.name](http://benchmark.name)
- trading_venue.code
- compartment.sfdr
- instrument.fund.is_distribution, instrument.fund.sri
- listing.common.currency_code

#### `Readonly` sri

```ts
sri: readonly number[]
```

sri of the fund instrument

Inherited from CdapiFundListListingsRequest.sri

#### `Readonly` sub_sector_id

```ts
sub_sector_id: readonly number[]
```

sub_sector_id, e.g. Automobiles & Parts (source = INFRONT)

Inherited from CdapiFundListListingsRequest.sub_sector_id

#### `Readonly` total_expense_ratio

```ts
total_expense_ratio: BasedefFilterParamDouble
```

Indicator for the yearly costs

Inherited from CdapiFundListListingsRequest.total_expense_ratio

#### `Readonly` total_score_esg_risk

```ts
total_score_esg_risk: BasedefFilterParamInt32
```

total score for esg_risk

Inherited from CdapiFundListListingsRequest.total_score_esg_risk

#### `Readonly` trading_venue_code

```ts
trading_venue_code: readonly string[]
```

code of trading-venue linked to vwd-key

Inherited from CdapiFundListListingsRequest.trading_venue_code

#### `Readonly` turnover_ratio

```ts
turnover_ratio: BasedefFilterParamDouble
```

Total transactions over total net assets

Inherited from CdapiFundListListingsRequest.turnover_ratio

#### `Readonly` vwd_key

```ts
vwd_key: readonly string[]
```

Our internal identifier combining instrument information with trading venue

Inherited from CdapiFundListListingsRequest.vwd_key
