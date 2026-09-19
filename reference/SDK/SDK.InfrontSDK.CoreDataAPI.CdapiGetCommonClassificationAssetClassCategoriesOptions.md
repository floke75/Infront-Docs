---
title: "CdapiGetCommonClassificationAssetClassCategoriesOptions"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiGetCommonClassificationAssetClassCategoriesOptions"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiGetCommonClassificationAssetClassCategoriesOptions"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiGetCommonClassificationAssetClassCategoriesOptions.html"
defines: ["CdapiGetCommonClassificationAssetClassCategoriesOptions"]
member_count: 49
members: ["asset_class_category_code?", "asset_class_group_code?", "cfi_code?", "chunk_size?", "country_code?", "country_id?", "currency_code?", "eet_carbon_footprint_source?", "eet_eutax_source?", "eet_exposure_source?", "eet_manufacturer_source?", "eet_sfdr_pai_source?", "eet_spi_source?", "esg_risk_source?", "field_template?", "id?", "ids_feed_code?", "ids_feed_number?", "ids_ticker?", "index_listing_id?", "instrument_additional_source?", "instrument_id?", "is_primary_instrument?", "isin?", "issuer_country_code?", "issuer_id?", "issuer_region_code?", "lei?", "limit?", "listing_additional_source?", "listing_id?", "main_index_listing_id?", "nsin?", "offset?", "onData?", "onError?", "onFinally?", "operating_mic_code?", "preferred_trading_venue_strategy_code?", "rating_source?", "search_string?", "sector_id?", "segment_mic_code?", "sort?", "sub_sector_id?", "trading_venue_code?", "trading_venue_id?", "vwd_key?", "xid_instrument_type_code?"]
member_groups:
  "Properties": ["asset_class_category_code?", "asset_class_group_code?", "cfi_code?", "chunk_size?", "country_code?", "country_id?", "currency_code?", "eet_carbon_footprint_source?", "eet_eutax_source?", "eet_exposure_source?", "eet_manufacturer_source?", "eet_sfdr_pai_source?", "eet_spi_source?", "esg_risk_source?", "field_template?", "id?", "ids_feed_code?", "ids_feed_number?", "ids_ticker?", "index_listing_id?", "instrument_additional_source?", "instrument_id?", "is_primary_instrument?", "isin?", "issuer_country_code?", "issuer_id?", "issuer_region_code?", "lei?", "limit?", "listing_additional_source?", "listing_id?", "main_index_listing_id?", "nsin?", "offset?", "onData?", "onError?", "onFinally?", "operating_mic_code?", "preferred_trading_venue_strategy_code?", "rating_source?", "search_string?", "sector_id?", "segment_mic_code?", "sort?", "sub_sector_id?", "trading_venue_code?", "trading_venue_id?", "vwd_key?", "xid_instrument_type_code?"]
related_types: ["SDK.InfrontSDK.CoreDataAPI.CdapiCommonClassificationAssetClassCategoriesData"]
reference_count: 15
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiGetCommonClassificationAssetClassCategoriesOptionsEetCarbonFootprintSource", "SDK.InfrontSDK.CoreDataAPI.CdapiGetCommonClassificationAssetClassCategoriesOptionsEetEutaxSource", "SDK.InfrontSDK.CoreDataAPI.CdapiGetCommonClassificationAssetClassCategoriesOptionsEetExposureSource", "SDK.InfrontSDK.CoreDataAPI.CdapiGetCommonClassificationAssetClassCategoriesOptionsEetManufacturerSource", "SDK.InfrontSDK.CoreDataAPI.CdapiGetCommonClassificationAssetClassCategoriesOptionsEetSfdrPaiSource", "SDK.InfrontSDK.CoreDataAPI.CdapiGetCommonClassificationAssetClassCategoriesOptionsEetSpiSource", "SDK.InfrontSDK.CoreDataAPI.CdapiGetCommonClassificationAssetClassCategoriesOptionsEsgRiskSource", "SDK.InfrontSDK.CoreDataAPI.CdapiGetCommonClassificationAssetClassCategoriesOptionsInstrumentAdditionalSource", "SDK.InfrontSDK.CoreDataAPI.CdapiGetCommonClassificationAssetClassCategoriesOptionsListingAdditionalSource", "SDK.InfrontSDK.CoreDataAPI.CdapiCommonClassificationAssetClassCategoriesData", "SDK.InfrontSDK.CoreDataAPI.CdapiGetCommonClassificationAssetClassCategoriesOptionsPreferredTradingVenueStrategyCode", "SDK.InfrontSDK.CoreDataAPI.CdapiGetCommonClassificationAssetClassCategoriesOptionsRatingSource", "SDK.InfrontSDK.CoreDataAPI.CdapiSortField", "SDK.InfrontSDK.CoreDataAPI.CdapiGetCommonClassificationAssetClassCategoriesSortField", "SDK.InfrontSDK.CoreDataAPI.cdapiGetCommonClassificationAssetClassCategories"]
---

# CdapiGetCommonClassificationAssetClassCategoriesOptions

Request options for [cdapiGetCommonClassificationAssetClassCategories](./SDK.InfrontSDK.CoreDataAPI.cdapiGetCommonClassificationAssetClassCategories.md)

```ts
interface CdapiGetCommonClassificationAssetClassCategoriesOptions {
    asset_class_category_code?: string | readonly string[];
    asset_class_group_code?: string | readonly string[];
    cfi_code?: string | readonly string[];
    chunk_size?: number;
    country_code?: string | readonly string[];
    country_id?: number | readonly number[];
    currency_code?: string | readonly string[];
    eet_carbon_footprint_source?: CdapiGetCommonClassificationAssetClassCategoriesOptionsEetCarbonFootprintSource;
    eet_eutax_source?: CdapiGetCommonClassificationAssetClassCategoriesOptionsEetEutaxSource;
    eet_exposure_source?: CdapiGetCommonClassificationAssetClassCategoriesOptionsEetExposureSource;
    eet_manufacturer_source?: CdapiGetCommonClassificationAssetClassCategoriesOptionsEetManufacturerSource;
    eet_sfdr_pai_source?: CdapiGetCommonClassificationAssetClassCategoriesOptionsEetSfdrPaiSource;
    eet_spi_source?: CdapiGetCommonClassificationAssetClassCategoriesOptionsEetSpiSource;
    esg_risk_source?: CdapiGetCommonClassificationAssetClassCategoriesOptionsEsgRiskSource;
    field_template?: string;
    id?: string | readonly string[];
    ids_feed_code?: string | readonly string[];
    ids_feed_number?: number | readonly number[];
    ids_ticker?: string | readonly string[];
    index_listing_id?: string;
    instrument_additional_source?: CdapiGetCommonClassificationAssetClassCategoriesOptionsInstrumentAdditionalSource;
    instrument_id?: string | readonly string[];
    is_primary_instrument?: boolean;
    isin?: string | readonly string[];
    issuer_country_code?: string | readonly string[];
    issuer_id?: string | readonly string[];
    issuer_region_code?: string | readonly string[];
    lei?: string | readonly string[];
    limit?: number;
    listing_additional_source?: CdapiGetCommonClassificationAssetClassCategoriesOptionsListingAdditionalSource;
    listing_id?: string | readonly string[];
    main_index_listing_id?: string;
    nsin?: string | readonly string[];
    offset?: number;
    onData?: CoreDataRequestSuccessCallback<
        CdapiCommonClassificationAssetClassCategoriesData,
    >;
    onError?: CoreDataRequestErrorCallback<
        CdapiCommonClassificationAssetClassCategoriesData,
    >;
    onFinally?: CoreDataRequestFinallyCallback<
        CdapiCommonClassificationAssetClassCategoriesData,
    >;
    operating_mic_code?: string
    | readonly string[];
    preferred_trading_venue_strategy_code?: CdapiGetCommonClassificationAssetClassCategoriesOptionsPreferredTradingVenueStrategyCode;
    rating_source?: CdapiGetCommonClassificationAssetClassCategoriesOptionsRatingSource;
    search_string?: string;
    sector_id?: number | readonly number[];
    segment_mic_code?: string | readonly string[];
    sort?:
        | CdapiSortField<
            CdapiGetCommonClassificationAssetClassCategoriesSortField,
        >
        | readonly CdapiSortField<
            CdapiGetCommonClassificationAssetClassCategoriesSortField,
        >[];
    sub_sector_id?: number
    | readonly number[];
    trading_venue_code?: string | readonly string[];
    trading_venue_id?: number | readonly number[];
    vwd_key?: string | readonly string[];
    xid_instrument_type_code?: string | readonly string[];
}
```

#### Hierarchy

- CdapiCommonRequestOptions<CdapiCommonClassificationAssetClassCategoriesData>

  - CdapiGetCommonClassificationAssetClassCategoriesOptions

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

#### `Optional` ` Readonly`country_id

```ts
country_id?: number | readonly number[]
```

country_id, e.g. 20 for germany

#### `Optional` ` Readonly`currency_code

```ts
currency_code?: string | readonly string[]
```

currency code in isoalpha3

#### `Optional` ` Readonly`eet_carbon_footprint_source

```ts
eet_carbon_footprint_source?: CdapiGetCommonClassificationAssetClassCategoriesOptionsEetCarbonFootprintSource
```

source for eet-eet_carbon_footprint data

#### `Optional` ` Readonly`eet_eutax_source

```ts
eet_eutax_source?: CdapiGetCommonClassificationAssetClassCategoriesOptionsEetEutaxSource
```

source for eet-eutax data

#### `Optional` ` Readonly`eet_exposure_source

```ts
eet_exposure_source?: CdapiGetCommonClassificationAssetClassCategoriesOptionsEetExposureSource
```

source for eet-exposure data

#### `Optional` ` Readonly`eet_manufacturer_source

```ts
eet_manufacturer_source?: CdapiGetCommonClassificationAssetClassCategoriesOptionsEetManufacturerSource
```

source for eet-manufacturer data

#### `Optional` ` Readonly`eet_sfdr_pai_source

```ts
eet_sfdr_pai_source?: CdapiGetCommonClassificationAssetClassCategoriesOptionsEetSfdrPaiSource
```

source for eet-sfdr-pai data

#### `Optional` ` Readonly`eet_spi_source

```ts
eet_spi_source?: CdapiGetCommonClassificationAssetClassCategoriesOptionsEetSpiSource
```

source for sustainability data

#### `Optional` ` Readonly`esg_risk_source

```ts
esg_risk_source?: CdapiGetCommonClassificationAssetClassCategoriesOptionsEsgRiskSource
```

the esg_risk source (e.g. CLARITY)

#### `Optional` ` Readonly`field_template

```ts
field_template?: string
```

name of a template of fields to return

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

#### `Optional` ` Readonly`index_listing_id

```ts
index_listing_id?: string
```

the listing id of the index. This filter only makes sense when you either additionally add a filter on the trading_venue (id or code) or provide a preferred_trading_venue_strategy_code (e.g. DEFAULT)

#### `Optional` ` Readonly`instrument_additional_source

```ts
instrument_additional_source?: CdapiGetCommonClassificationAssetClassCategoriesOptionsInstrumentAdditionalSource
```

source for additional listing data

#### `Optional` ` Readonly`instrument_id

```ts
instrument_id?: string | readonly string[]
```

identifier on instrument level for Infront data universe

#### `Optional` ` Readonly`is_primary_instrument

```ts
is_primary_instrument?: boolean
```

only get the primary instrument for an issuer (company)

#### `Optional` ` Readonly`isin

```ts
isin?: string | readonly string[]
```

search for International Securities Identification Number

#### `Optional` ` Readonly`issuer_country_code

```ts
issuer_country_code?: string | readonly string[]
```

the country code from the issuer

#### `Optional` ` Readonly`issuer_id

```ts
issuer_id?: string | readonly string[]
```

identifier on issuer level for Infront data universe

#### `Optional` ` Readonly`issuer_region_code

```ts
issuer_region_code?: string | readonly string[]
```

the region code from the issuer (main region linked to country_code)

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

#### `Optional` ` Readonly`listing_additional_source

```ts
listing_additional_source?: CdapiGetCommonClassificationAssetClassCategoriesOptionsListingAdditionalSource
```

source for additional listing data

#### `Optional` ` Readonly`listing_id

```ts
listing_id?: string | readonly string[]
```

identifier on listing level for Infront data universe (same as 'id' in this context)

#### `Optional` ` Readonly`main_index_listing_id

```ts
main_index_listing_id?: string
```

the listing id of the main-index. With this filter you'll get the main listings for an index (e.g. all listings on XETRA for DAX)

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
onData?: CoreDataRequestSuccessCallback<
    CdapiCommonClassificationAssetClassCategoriesData,
>
```

A callback called when a data request has completed succesfully.

Inherited from Infront.CdapiCommonRequestOptions.onData

#### `Optional` onError

```ts
onError?: CoreDataRequestErrorCallback<
    CdapiCommonClassificationAssetClassCategoriesData,
>
```

A callback called when an error occurred trying to make the request.

Inherited from Infront.CdapiCommonRequestOptions.onError

#### `Optional` onFinally

```ts
onFinally?: CoreDataRequestFinallyCallback<
    CdapiCommonClassificationAssetClassCategoriesData,
>
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
preferred_trading_venue_strategy_code?: CdapiGetCommonClassificationAssetClassCategoriesOptionsPreferredTradingVenueStrategyCode
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
rating_source?: CdapiGetCommonClassificationAssetClassCategoriesOptionsRatingSource
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

#### `Optional` ` Readonly`sort

```ts
sort?:
    | CdapiSortField<
        CdapiGetCommonClassificationAssetClassCategoriesSortField,
    >
    | readonly CdapiSortField<
        CdapiGetCommonClassificationAssetClassCategoriesSortField,
    >[]
```

use repeated field to apply sorting.
'+' at the beginning of the string sorts ASC,
'-' at the beginning of the string sorts DESC.
Sortable fields:

- listing.common.ids_ticker, listing.common.vwd_key, listing.common.sedol, [listing.common.name](http://listing.common.name), listing.common.name_short
- [instrument.common.name](http://instrument.common.name), instrument.common.name_short, instrument.common.isin, instrument.common.wkn, instrument.common.valor
- [issuer.common.name](http://issuer.common.name), issuer.common.lei, [issuer.common.sector.name](http://issuer.common.sector.name), issuer.common.sub_sector.name
- trading_venue.internal_code
- keyfigure.common.performance_current_year, keyfigure.common.performance_1_day, keyfigure.common.performance_1_week
- keyfigure.common.performance_1_month, keyfigure.common.performance_3_month, keyfigure.common.performance_6_month
- keyfigure.common.performance_1_year, keyfigure.common.performance_3_year, keyfigure.common.performance_5_year, keyfigure.common.performance_10_year
- keyfigure.common.average_turnover_1_week, keyfigure.common.average_turnover_1_month, keyfigure.common.average_turnover_3_month
- esg_risk.total.score, esg_risk.environmental.score, esg_risk.social.score, esg_risk.governance.score
- classification.common_gics.sector.name, classification.common_gics.industry.name, classification.common_gics.sub_industry.name, classification.common_gics.industry_group.name

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

#### `Optional` ` Readonly`trading_venue_id

```ts
trading_venue_id?: number | readonly number[]
```

trading_venue_id, e.g. 221 for FFM

#### `Optional` ` Readonly`vwd_key

```ts
vwd_key?: string | readonly string[]
```

Our internal identifier combining instrument information with trading venue

#### `Optional` ` Readonly`xid_instrument_type_code

```ts
xid_instrument_type_code?: string | readonly string[]
```

xid instrument type code
