---
title: "TechnicalAnalysisField"
qualified_name: "SDK.InfrontSDK.TechnicalAnalysisField"
kind: enum
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK"
group: "Other"
nav_path: "SDK > InfrontSDK > Other > TechnicalAnalysisField"
source_url: "https://docs.infrontfinance.com/docs/enums/SDK.InfrontSDK.TechnicalAnalysisField.html"
defines: ["TechnicalAnalysisField"]
member_count: 30
members: ["TAAlpha1Month", "TABeta3Month", "TAClosePrice", "TAClosePriceOnSignalDate", "TACorrelation3Month", "TADate", "TADinaRisk", "TAHighPrice3MonthPercent", "TALongTermTrend", "TALongTermTrendSinceDays", "TALowPrice3MonthPercent", "TAMediumTermComment", "TAMediumTermTrend", "TAMediumTermTrendSinceDays", "TAResistanceLevel1", "TAResistanceLevel2", "TAShortTermComment", "TAShortTermTrend", "TAShortTermTrendSinceDays", "TASignalDate", "TASignalPrice", "TASignalText", "TASignalType", "TASource", "TAStopLoss", "TASupportLevel1", "TASupportLevel2", "TATargetPrice", "TATechnicalComment", "TAVola21Day"]
member_groups:
  "Enumeration Members": ["TAAlpha1Month", "TABeta3Month", "TAClosePrice", "TAClosePriceOnSignalDate", "TACorrelation3Month", "TADate", "TADinaRisk", "TAHighPrice3MonthPercent", "TALongTermTrend", "TALongTermTrendSinceDays", "TALowPrice3MonthPercent", "TAMediumTermComment", "TAMediumTermTrend", "TAMediumTermTrendSinceDays", "TAResistanceLevel1", "TAResistanceLevel2", "TAShortTermComment", "TAShortTermTrend", "TAShortTermTrendSinceDays", "TASignalDate", "TASignalPrice", "TASignalText", "TASignalType", "TASource", "TAStopLoss", "TASupportLevel1", "TASupportLevel2", "TATargetPrice", "TATechnicalComment", "TAVola21Day"]
reference_count: 4
references: ["SDK.InfrontSDK.SymbolField", "SDK.InfrontSDK.SymbolDataContent", "SDK.InfrontSDK.SymbolDataOptions", "SDK.InfrontSDK.symbolData"]
---

# TechnicalAnalysisField

Technical analysis fields.

#### See

[SymbolField](./SDK.InfrontSDK.SymbolField.md) | SymbolDataContent | [SymbolDataOptions](./SDK.InfrontSDK.SymbolDataOptions.md) | [symbolData](./SDK.InfrontSDK.symbolData.md)

### Enumeration Members

#### TAAlpha1Month

```ts
TAAlpha1Month: "TAAlpha1Month"
```

The "Monthly Alpha" indicates the value of the Alpha coefficient. Unlike the Beta coefficient, which measures the propensity of a stock to vary according to the market (systematic risk), the "Alpha coefficient" shows the propensity of a stock to vary independently of the market (specific risk)..

#### TABeta3Month

```ts
TABeta3Month: "TABeta3Month"
```

The "Beta 3 months" indicates the value of the Beta, calculated at 69 days on daily closings. Values ​​higher than 1 indicate that the stock amplifies the movements of the index, "aggressive", values ​​below 1 indicate that the stock attenuates the movements of the index, "defensive" action..

#### TAClosePrice

```ts
TAClosePrice: "TAClosePrice"
```

The close price.

#### TAClosePriceOnSignalDate

```ts
TAClosePriceOnSignalDate: "TAClosePriceOnSignalDate"
```

Closing price at which the sell/buy signal is triggered.

#### TACorrelation3Month

```ts
TACorrelation3Month: "TACorrelation3Month"
```

The "3-month correlation" shows the correlation index between stock and the related index in the last 3 months. Correlation shows the ability of the stock to follow market behavior. High positive values ​​are typical of stocks that tend to replicate the performance of the reference index..

#### TADate

```ts
TADate: "TADate"
```

Date of the signal.

#### TADinaRisk

```ts
TADinaRisk: "TADinaRisk"
```

The "Dina Risk" shows a risk measure. It indicates the potential maximum daily loss that the investor could face in case of purchase of the security at the opening price of the trading day..

#### TAHighPrice3MonthPercent

```ts
TAHighPrice3MonthPercent: "TAHighPrice3MonthPercent"
```

The "% Distance from Max of the last 3 months" column, shows the distance expressed as a percentage between the closing price of the last session and the maximum value reached in the last 69 sessions. The lower the value indicated (limit value = 0, that is, the closing price of the previous session corresponds to the highs of the last 3 months), the greater is the upward trend force of the last 3 months..

#### TALongTermTrend

```ts
TALongTermTrend: "TALongTermTrend"
```

#### TALongTermTrendSinceDays

```ts
TALongTermTrendSinceDays: "TALongTermTrendSinceDays"
```

Day since the long term trend is in place.

#### TALowPrice3MonthPercent

```ts
TALowPrice3MonthPercent: "TALowPrice3MonthPercent"
```

The "% Distance from min of the last 3 months" shows the distance expressed as a percentage between the closing price of the last session and the minimum value reached in the last 69 sessions. The lower the value indicated (limit value = 0, ie the closing price of the previous session corresponds to the lows of the last 3 months), the greater is the downward trend force of the last 3 months..

#### TAMediumTermComment

```ts
TAMediumTermComment: "TAMediumTermComment"
```

A comment to the medium/long term the signal.

#### TAMediumTermTrend

```ts
TAMediumTermTrend: "TAMediumTermTrend"
```

The "Medium term Trend" columns describe the state of the stock's trend over the past few weeks. Usually medium term from 3/5 day to 3/4 weeks..

#### TAMediumTermTrendSinceDays

```ts
TAMediumTermTrendSinceDays: "TAMediumTermTrendSinceDays"
```

Day since the medium term trend is in place.

#### TAResistanceLevel1

```ts
TAResistanceLevel1: "TAResistanceLevel1"
```

In the "Resistance" you will find an indication of the level that opposes to a rise price in the short term: the breakout of this level is a sign of continuity of the trend in the direction of the break (strength signal for stocks).

#### TAResistanceLevel2

```ts
TAResistanceLevel2: "TAResistanceLevel2"
```

In the "Resistance" you will find an indication of the level that opposes to a rise price in the short term: the breakout of this level is a sign of continuity of the trend in the direction of the break (strength signal for stocks).

#### TAShortTermComment

```ts
TAShortTermComment: "TAShortTermComment"
```

A comment to the short term signal.

#### TAShortTermTrend

```ts
TAShortTermTrend: "TAShortTermTrend"
```

The "Short term Trend" columns describe the state of the stock's trend over the past few weeks. Usually short term is till 3/5 days..

#### TAShortTermTrendSinceDays

```ts
TAShortTermTrendSinceDays: "TAShortTermTrendSinceDays"
```

Day since the short term trend is in place.

#### TASignalDate

```ts
TASignalDate: "TASignalDate"
```

Date of the signal.

#### TASignalPrice

```ts
TASignalPrice: "TASignalPrice"
```

Price of the signal.

#### TASignalText

```ts
TASignalText: "TASignalText"
```

The signal.

#### TASignalType

```ts
TASignalType: "TASignalType"
```

Type of the signal (BUY, SELL, HOLD).

#### TASource

```ts
TASource: "TASource"
```

Source of the data.

#### TAStopLoss

```ts
TAStopLoss: "TAStopLoss"
```

The "Stop Loss" indicates the level at which the Technical Analysis methodology suggests liquidating the operation undertaken even with a small loss in order to avoid greater damage and to allow re-entry at better price when possibile. The analysis system is based on daily close data. Therefore, as a rule, wait for confirmation at the end of the day that the "stop loss" level has been exceeded before evaluating trading actions..

#### TASupportLevel1

```ts
TASupportLevel1: "TASupportLevel1"
```

1st support level.

#### TASupportLevel2

```ts
TASupportLevel2: "TASupportLevel2"
```

2nd support level.

#### TATargetPrice

```ts
TATargetPrice: "TATargetPrice"
```

The "Target Price" identifies the short-term target of the trade, not necessarily the ultimate target towards which the market tends..

#### TATechnicalComment

```ts
TATechnicalComment: "TATechnicalComment"
```

A technical comment.

#### TAVola21Day

```ts
TAVola21Day: "TAVola21Day"
```

The "Volatility" indicates the historical volatility calculated on the closing prices of the last 3 weeks. Volatility is calculated as the standard deviation of daily changes and indicates the risk (but also the potential profit) associated with the instrument for which it is calculated. Increasing values ​​are therefore indicative of a more fluctuating behavior of the share, subject to wider fluctuations (in both directions) than stocks with lower volatility values..
