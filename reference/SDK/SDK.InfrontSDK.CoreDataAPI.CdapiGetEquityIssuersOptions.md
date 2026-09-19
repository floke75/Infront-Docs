---
title: "CdapiGetEquityIssuersOptions"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiGetEquityIssuersOptions"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiGetEquityIssuersOptions"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiGetEquityIssuersOptions.html"
defines: ["CdapiGetEquityIssuersOptions"]
member_count: 52
members: ["asset_class_category_code?", "asset_class_group_code?", "cfi_code?", "chunk_size?", "company_code?", "company_source?", "country_code?", "country_id?", "currency_code?", "eet_sfdr_pai_source?", "eet_spi_source?", "equity_issuer_estimate_keyfigure_source?", "equity_issuer_keyfigure_source?", "equity_keyfigure_source?", "equity_source?", "esg_risk_source?", "gics_industry_code?", "gics_industry_group_code?", "gics_sector_code?", "gics_sub_industry_code?", "has_company_data?", "has_esg_risk_data?", "id?", "ids_feed_code?", "ids_feed_number?", "ids_ticker?", "instrument_id?", "is_primary_instrument?", "isin?", "issuer_country_code?", "issuer_id?", "issuer_region_code?", "lei?", "limit?", "listing_id?", "market_capitalization_nearest_by?", "not_asset_class_group_code?", "nsin?", "offset?", "onData?", "onError?", "onFinally?", "operating_mic_code?", "preferred_trading_venue_strategy_code?", "rating_source?", "search_string?", "sector_id?", "segment_mic_code?", "sort?", "sub_sector_id?", "trading_venue_code?", "vwd_key?"]
member_groups:
  "Properties": ["asset_class_category_code?", "asset_class_group_code?", "cfi_code?", "chunk_size?", "company_code?", "company_source?", "country_code?", "country_id?", "currency_code?", "eet_sfdr_pai_source?", "eet_spi_source?", "equity_issuer_estimate_keyfigure_source?", "equity_issuer_keyfigure_source?", "equity_keyfigure_source?", "equity_source?", "esg_risk_source?", "gics_industry_code?", "gics_industry_group_code?", "gics_sector_code?", "gics_sub_industry_code?", "has_company_data?", "has_esg_risk_data?", "id?", "ids_feed_code?", "ids_feed_number?", "ids_ticker?", "instrument_id?", "is_primary_instrument?", "isin?", "issuer_country_code?", "issuer_id?", "issuer_region_code?", "lei?", "limit?", "listing_id?", "market_capitalization_nearest_by?", "not_asset_class_group_code?", "nsin?", "offset?", "onData?", "onError?", "onFinally?", "operating_mic_code?", "preferred_trading_venue_strategy_code?", "rating_source?", "search_string?", "sector_id?", "segment_mic_code?", "sort?", "sub_sector_id?", "trading_venue_code?", "vwd_key?"]
related_types: ["SDK.InfrontSDK.CoreDataAPI.CdapiEquityIssuersData"]
reference_count: 14
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiGetEquityIssuersOptionsCompanySource", "SDK.InfrontSDK.CoreDataAPI.CdapiGetEquityIssuersOptionsEetSfdrPaiSource", "SDK.InfrontSDK.CoreDataAPI.CdapiGetEquityIssuersOptionsEetSpiSource", "SDK.InfrontSDK.CoreDataAPI.CdapiGetEquityIssuersOptionsEquityIssuerEstimateKeyfigureSource", "SDK.InfrontSDK.CoreDataAPI.CdapiGetEquityIssuersOptionsEquityIssuerKeyfigureSource", "SDK.InfrontSDK.CoreDataAPI.CdapiGetEquityIssuersOptionsEquityKeyfigureSource", "SDK.InfrontSDK.CoreDataAPI.CdapiGetEquityIssuersOptionsEquitySource", "SDK.InfrontSDK.CoreDataAPI.CdapiGetEquityIssuersOptionsEsgRiskSource", "SDK.InfrontSDK.CoreDataAPI.CdapiEquityIssuersData", "SDK.InfrontSDK.CoreDataAPI.CdapiGetEquityIssuersOptionsPreferredTradingVenueStrategyCode", "SDK.InfrontSDK.CoreDataAPI.CdapiGetEquityIssuersOptionsRatingSource", "SDK.InfrontSDK.CoreDataAPI.CdapiSortField", "SDK.InfrontSDK.CoreDataAPI.CdapiGetEquityIssuersSortField", "SDK.InfrontSDK.CoreDataAPI.cdapiGetEquityIssuers"]
---

# CdapiGetEquityIssuersOptions

Request options for [cdapiGetEquityIssuers](./SDK.InfrontSDK.CoreDataAPI.cdapiGetEquityIssuers.md)

```ts
interface CdapiGetEquityIssuersOptions {
    asset_class_category_code?: string | readonly string[];
    asset_class_group_code?: string | readonly string[];
    cfi_code?: string | readonly string[];
    chunk_size?: number;
    company_code?: string | readonly string[];
    company_source?: CdapiGetEquityIssuersOptionsCompanySource;
    country_code?: string | readonly string[];
    country_id?: number | readonly number[];
    currency_code?: string | readonly string[];
    eet_sfdr_pai_source?: CdapiGetEquityIssuersOptionsEetSfdrPaiSource;
    eet_spi_source?: CdapiGetEquityIssuersOptionsEetSpiSource;
    equity_issuer_estimate_keyfigure_source?: CdapiGetEquityIssuersOptionsEquityIssuerEstimateKeyfigureSource;
    equity_issuer_keyfigure_source?: CdapiGetEquityIssuersOptionsEquityIssuerKeyfigureSource;
    equity_keyfigure_source?: CdapiGetEquityIssuersOptionsEquityKeyfigureSource;
    equity_source?: CdapiGetEquityIssuersOptionsEquitySource;
    esg_risk_source?: CdapiGetEquityIssuersOptionsEsgRiskSource;
    gics_industry_code?: string | readonly string[];
    gics_industry_group_code?: string | readonly string[];
    gics_sector_code?: string | readonly string[];
    gics_sub_industry_code?: string | readonly string[];
    has_company_data?: boolean;
    has_esg_risk_data?: boolean;
    id?: string | readonly string[];
    ids_feed_code?: string | readonly string[];
    ids_feed_number?: number | readonly number[];
    ids_ticker?: string | readonly string[];
    instrument_id?: string | readonly string[];
    is_primary_instrument?: boolean;
    isin?: string | readonly string[];
    issuer_country_code?: string | readonly string[];
    issuer_id?: string | readonly string[];
    issuer_region_code?: string | readonly string[];
    lei?: string | readonly string[];
    limit?: number;
    listing_id?: string | readonly string[];
    market_capitalization_nearest_by?: number;
    not_asset_class_group_code?: string | readonly string[];
    nsin?: string | readonly string[];
    offset?: number;
    onData?: CoreDataRequestSuccessCallback<CdapiEquityIssuersData>;
    onError?: CoreDataRequestErrorCallback<CdapiEquityIssuersData>;
    onFinally?: CoreDataRequestFinallyCallback<CdapiEquityIssuersData>;
    operating_mic_code?: string | readonly string[];
    preferred_trading_venue_strategy_code?: CdapiGetEquityIssuersOptionsPreferredTradingVenueStrategyCode;
    rating_source?: CdapiGetEquityIssuersOptionsRatingSource;
    search_string?: string;
    sector_id?: number | readonly number[];
    segment_mic_code?: string | readonly string[];
    sort?:
        | CdapiSortField<CdapiGetEquityIssuersSortField>
        | readonly CdapiSortField<CdapiGetEquityIssuersSortField>[];
    sub_sector_id?: number | readonly number[];
    trading_venue_code?: string | readonly string[];
    vwd_key?: string | readonly string[];
}
```

#### Hierarchy

- CdapiCommonRequestOptions<CdapiEquityIssuersData>

  - CdapiGetEquityIssuersOptions

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

#### `Optional` ` Readonly`company_code

```ts
company_code?: string | readonly string[]
```

company_code from source INFRONT

#### `Optional` ` Readonly`company_source

```ts
company_source?: CdapiGetEquityIssuersOptionsCompanySource
```

source for company data

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

#### `Optional` ` Readonly`eet_sfdr_pai_source

```ts
eet_sfdr_pai_source?: CdapiGetEquityIssuersOptionsEetSfdrPaiSource
```

source for sfdr-pai data

#### `Optional` ` Readonly`eet_spi_source

```ts
eet_spi_source?: CdapiGetEquityIssuersOptionsEetSpiSource
```

source for sustainability data

#### `Optional` ` Readonly`equity_issuer_estimate_keyfigure_source

```ts
equity_issuer_estimate_keyfigure_source?: CdapiGetEquityIssuersOptionsEquityIssuerEstimateKeyfigureSource
```

source for issuer estimate keyfigures

#### `Optional` ` Readonly`equity_issuer_keyfigure_source

```ts
equity_issuer_keyfigure_source?: CdapiGetEquityIssuersOptionsEquityIssuerKeyfigureSource
```

source for issuer keyfigures

#### `Optional` ` Readonly`equity_keyfigure_source

```ts
equity_keyfigure_source?: CdapiGetEquityIssuersOptionsEquityKeyfigureSource
```

source for keyfigures

#### `Optional` ` Readonly`equity_source

```ts
equity_source?: CdapiGetEquityIssuersOptionsEquitySource
```

source of equity data (EDI only at the moment)

#### `Optional` ` Readonly`esg_risk_source

```ts
esg_risk_source?: CdapiGetEquityIssuersOptionsEsgRiskSource
```

the esg_risk source (e.g. CLARITY)

#### `Optional` ` Readonly`gics_industry_code

```ts
gics_industry_code?: string | readonly string[]
```

gics industry

#### `Optional` ` Readonly`gics_industry_group_code

```ts
gics_industry_group_code?: string | readonly string[]
```

gics industry group

#### `Optional` ` Readonly`gics_sector_code

```ts
gics_sector_code?: string | readonly string[]
```

gics sector

#### `Optional` ` Readonly`gics_sub_industry_code

```ts
gics_sub_industry_code?: string | readonly string[]
```

gics sub-industry

#### `Optional` ` Readonly`has_company_data

```ts
has_company_data?: boolean
```

only results with company data (source-specific, INFRONT, STANDARD_AND_POORS, MORNINGSTAR are availlable)

#### `Optional` ` Readonly`has_esg_risk_data

```ts
has_esg_risk_data?: boolean
```

only results with esg_risk data (source-specific, CLARITY is availlable)

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

#### `Optional` ` Readonly`listing_id

```ts
listing_id?: string | readonly string[]
```

identifier on listing level for Infront data universe (same as 'id' in this context)

#### `Optional` ` Readonly`market_capitalization_nearest_by

```ts
market_capitalization_nearest_by?: number
```

filter/sorting to find listings nearby to a defined market_capitalization

#### `Optional` ` Readonly`not_asset_class_group_code

```ts
not_asset_class_group_code?: string | readonly string[]
```

exclude a asset class group from your result

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
onData?: CoreDataRequestSuccessCallback<CdapiEquityIssuersData>
```

A callback called when a data request has completed succesfully.

Inherited from Infront.CdapiCommonRequestOptions.onData

#### `Optional` onError

```ts
onError?: CoreDataRequestErrorCallback<CdapiEquityIssuersData>
```

A callback called when an error occurred trying to make the request.

Inherited from Infront.CdapiCommonRequestOptions.onError

#### `Optional` onFinally

```ts
onFinally?: CoreDataRequestFinallyCallback<CdapiEquityIssuersData>
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
preferred_trading_venue_strategy_code?: CdapiGetEquityIssuersOptionsPreferredTradingVenueStrategyCode
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
rating_source?: CdapiGetEquityIssuersOptionsRatingSource
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
    | CdapiSortField<CdapiGetEquityIssuersSortField>
    | readonly CdapiSortField<CdapiGetEquityIssuersSortField>[]
```

use repeated field to apply sorting.
'+' at the beginning of the string sorts ASC
'-' at the beginning of the string sorts DESC

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
