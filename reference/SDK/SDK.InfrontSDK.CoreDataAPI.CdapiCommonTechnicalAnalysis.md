---
title: "CdapiCommonTechnicalAnalysis"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiCommonTechnicalAnalysis"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiCommonTechnicalAnalysis"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiCommonTechnicalAnalysis.html"
defines: ["CdapiCommonTechnicalAnalysis"]
member_count: 32
members: ["_meta", "alpha_1_month", "beta_3_month", "close_price", "close_price_on_signal_date", "correlation_3_month", "date", "dina_risk", "high_price_3_month_percent", "id", "long_term_trend", "long_term_trend_since_days", "low_price_3_month_percent", "medium_term_comment", "medium_term_trend", "medium_term_trend_since_days", "resistance_level_1", "resistance_level_2", "short_term_comment", "short_term_trend", "short_term_trend_since_days", "signal_date", "signal_price", "signal_text", "signal_type_code", "source", "stop_loss", "support_level_1", "support_level_2", "target_price", "technical_comment", "vola_21_day"]
member_groups:
  "Properties": ["_meta", "alpha_1_month", "beta_3_month", "close_price", "close_price_on_signal_date", "correlation_3_month", "date", "dina_risk", "high_price_3_month_percent", "id", "long_term_trend", "long_term_trend_since_days", "low_price_3_month_percent", "medium_term_comment", "medium_term_trend", "medium_term_trend_since_days", "resistance_level_1", "resistance_level_2", "short_term_comment", "short_term_trend", "short_term_trend_since_days", "signal_date", "signal_price", "signal_text", "signal_type_code", "source", "stop_loss", "support_level_1", "support_level_2", "target_price", "technical_comment", "vola_21_day"]
reference_count: 6
references: ["SDK.InfrontSDK.CoreDataAPI.BasedefEntityMeta", "SDK.InfrontSDK.CoreDataAPI.CdapiCommonTechnicalAnalysisLongTermTrend", "SDK.InfrontSDK.CoreDataAPI.CdapiCommonTechnicalAnalysisMediumTermTrend", "SDK.InfrontSDK.CoreDataAPI.CdapiCommonTechnicalAnalysisShortTermTrend", "SDK.InfrontSDK.CoreDataAPI.CdapiCommonTechnicalAnalysisSignalTypeCode", "SDK.InfrontSDK.CoreDataAPI.CdapiCommonTechnicalAnalysisSource"]
---

# CdapiCommonTechnicalAnalysis

TechnicalAnalysis holds technical analysis signals and indicators from the FTA provider.
Covers buy/sell/hold signals, trend directions, support/resistance levels, and risk metrics.
Source: FTA (Financial Technical Analysis).

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.common.TechnicalAnalysis

```ts
interface CdapiCommonTechnicalAnalysis {
    _meta: BasedefEntityMeta;
    alpha_1_month: number;
    beta_3_month: number;
    close_price: number;
    close_price_on_signal_date: number;
    correlation_3_month: number;
    date: string;
    dina_risk: number;
    high_price_3_month_percent: number;
    id: number;
    long_term_trend: CdapiCommonTechnicalAnalysisLongTermTrend;
    long_term_trend_since_days: number;
    low_price_3_month_percent: number;
    medium_term_comment: string;
    medium_term_trend: CdapiCommonTechnicalAnalysisMediumTermTrend;
    medium_term_trend_since_days: number;
    resistance_level_1: number;
    resistance_level_2: number;
    short_term_comment: string;
    short_term_trend: CdapiCommonTechnicalAnalysisShortTermTrend;
    short_term_trend_since_days: number;
    signal_date: string;
    signal_price: number;
    signal_text: string;
    signal_type_code: CdapiCommonTechnicalAnalysisSignalTypeCode;
    source: CdapiCommonTechnicalAnalysisSource;
    stop_loss: number;
    support_level_1: number;
    support_level_2: number;
    target_price: number;
    technical_comment: string;
    vola_21_day: number;
}
```

### Properties

#### `Readonly` _meta

```ts
_meta: BasedefEntityMeta
```

Entity metadata (creation time, update time, version, etc.).

#### `Readonly` alpha_1_month

```ts
alpha_1_month: number
```

Monthly alpha — the stock's price movement independent of the market (specific risk).
Unlike beta (systematic risk), alpha captures idiosyncratic price behaviour.

##### Remarks

Format: double

#### `Readonly` beta_3_month

```ts
beta_3_month: number
```

3-month beta — calculated over 69 daily closes.
Values > 1: "aggressive" (amplifies market moves); values < 1: "defensive".

##### Remarks

Format: double

#### `Readonly` close_price

```ts
close_price: number
```

Closing price used as the basis for this analysis.

##### Remarks

Format: double

#### `Readonly` close_price_on_signal_date

```ts
close_price_on_signal_date: number
```

Closing price on the date the buy/sell signal was triggered.

##### Remarks

Format: double

#### `Readonly` correlation_3_month

```ts
correlation_3_month: number
```

3-month correlation between the stock and its reference index.
High positive values indicate close tracking of the index.

##### Remarks

Format: double

#### `Readonly` date

```ts
date: string
```

Date on which the analysis was produced by the source. ISO-8601 recommended.

#### `Readonly` dina_risk

```ts
dina_risk: number
```

Dina Risk — estimated maximum daily loss at the opening price of the next trading day.

##### Remarks

Format: double

#### `Readonly` high_price_3_month_percent

```ts
high_price_3_month_percent: number
```

% distance from the 3-month high — how far below the last 69 sessions' maximum.
Lower value = stronger recent uptrend force (0 = at the 3-month high).

##### Remarks

Format: double

#### `Readonly` id

```ts
id: number
```

##### Remarks

Format: int32

#### `Readonly` long_term_trend

```ts
long_term_trend: CdapiCommonTechnicalAnalysisLongTermTrend
```

Long-term trend direction (typically 3–4 weeks to ~3 months).

##### Remarks

Format: enum

#### `Readonly` long_term_trend_since_days

```ts
long_term_trend_since_days: number
```

Days the current long-term trend has been in place.

##### Remarks

Format: int32

#### `Readonly` low_price_3_month_percent

```ts
low_price_3_month_percent: number
```

% distance from the 3-month low — how far above the last 69 sessions' minimum.
Lower value = stronger recent downtrend force (0 = at the 3-month low).

##### Remarks

Format: double

#### `Readonly` medium_term_comment

```ts
medium_term_comment: string
```

Medium/long-term signal narrative comment.

#### `Readonly` medium_term_trend

```ts
medium_term_trend: CdapiCommonTechnicalAnalysisMediumTermTrend
```

Medium-term trend direction (typically 3–5 days to 3–4 weeks).

##### Remarks

Format: enum

#### `Readonly` medium_term_trend_since_days

```ts
medium_term_trend_since_days: number
```

Days the current medium-term trend has been in place.

##### Remarks

Format: int32

#### `Readonly` resistance_level_1

```ts
resistance_level_1: number
```

First resistance level — price above current that is expected to cap upward moves.
A breakout above signals trend continuation.

##### Remarks

Format: double

#### `Readonly` resistance_level_2

```ts
resistance_level_2: number
```

Second (stronger/further) resistance level.

##### Remarks

Format: double

#### `Readonly` short_term_comment

```ts
short_term_comment: string
```

Short-term signal narrative comment.

#### `Readonly` short_term_trend

```ts
short_term_trend: CdapiCommonTechnicalAnalysisShortTermTrend
```

Short-term trend direction (typically 3–5 trading days).

##### Remarks

Format: enum

#### `Readonly` short_term_trend_since_days

```ts
short_term_trend_since_days: number
```

Days the current short-term trend has been in place.

##### Remarks

Format: int32

#### `Readonly` signal_date

```ts
signal_date: string
```

Date on which the signal was generated. ISO-8601 recommended.

#### `Readonly` signal_price

```ts
signal_price: number
```

Price at which the signal was triggered.

##### Remarks

Format: double

#### `Readonly` signal_text

```ts
signal_text: string
```

Descriptive text explaining the signal rationale.

#### `Readonly` signal_type_code

```ts
signal_type_code: CdapiCommonTechnicalAnalysisSignalTypeCode
```

Current recommendation — BUY, SELL, or HOLD.

##### Remarks

Format: enum

#### `Readonly` source

```ts
source: CdapiCommonTechnicalAnalysisSource
```

##### Remarks

Format: enum

#### `Readonly` stop_loss

```ts
stop_loss: number
```

Stop loss level — the price at which the FTA methodology recommends closing the position
to limit losses. Based on daily closes; wait for end-of-day confirmation before acting.

##### Remarks

Format: double

#### `Readonly` support_level_1

```ts
support_level_1: number
```

First support level — price below current that is expected to limit downward moves.

##### Remarks

Format: double

#### `Readonly` support_level_2

```ts
support_level_2: number
```

Second (stronger/further) support level.

##### Remarks

Format: double

#### `Readonly` target_price

```ts
target_price: number
```

Short-term price target — the near-term level the methodology expects the price to reach.
This is not necessarily the ultimate trend target.

##### Remarks

Format: double

#### `Readonly` technical_comment

```ts
technical_comment: string
```

Narrative technical comment about the current situation.

#### `Readonly` vola_21_day

```ts
vola_21_day: number
```

21-day historical volatility — standard deviation of daily price changes over 3 weeks.

##### Remarks

Format: double
