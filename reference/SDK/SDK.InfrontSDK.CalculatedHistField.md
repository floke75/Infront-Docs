---
title: "CalculatedHistField"
qualified_name: "SDK.InfrontSDK.CalculatedHistField"
kind: enum
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK"
group: "Other"
nav_path: "SDK > InfrontSDK > Other > CalculatedHistField"
source_url: "https://docs.infrontfinance.com/docs/enums/SDK.InfrontSDK.CalculatedHistField.html"
defines: ["CalculatedHistField"]
member_count: 45
members: ["AverageAsk", "AverageBid", "AverageDailyChange", "AverageDailyExchangeVolume", "AverageDailyVolume", "AverageDailyVolumeFactor", "AverageDailyVolumeFactorPct", "AverageDivYieldFactor", "AverageTrueRange", "AverageTurnover", "ExponentialMovingAverage10", "ExponentialMovingAverage12", "ExponentialMovingAverage26", "LinearRegressionSlopeOfLastPredict", "LinearRegressionSlopeOfLastPrice", "LinearRegressionSlopeOfLastStderr", "LnReturnCount30", "LnReturnCount60", "LnReturnCount90", "LnReturnSquareSum30", "LnReturnSquareSum60", "LnReturnSquareSum90", "LnReturnSum30", "LnReturnSum60", "LnReturnSum90", "MovingAverage100", "MovingAverage200", "MovingAverage50", "MovingAveragePrevClose100", "MovingAveragePrevClose200", "MovingAveragePrevClose50", "RealtimeAverageDailyVolume", "RealtimeAverageDailyVolumeFactor", "RemainingRealtimeAverageDailyVolume", "SimpleAvgOfLastPrice", "StdDevOfDailyChange", "StdDevOfDailyVolume", "StdDevOfExchangeVolume", "StdDevOfLastPrice", "Volatility30", "Volatility60", "Volatility90", "VolumeWeightedAveragePrice30", "VolumeWeightedAveragePrice60", "VolumeWeightedAveragePrice90"]
member_groups:
  "Enumeration Members": ["AverageAsk", "AverageBid", "AverageDailyChange", "AverageDailyExchangeVolume", "AverageDailyVolume", "AverageDailyVolumeFactor", "AverageDailyVolumeFactorPct", "AverageDivYieldFactor", "AverageTrueRange", "AverageTurnover", "ExponentialMovingAverage10", "ExponentialMovingAverage12", "ExponentialMovingAverage26", "LinearRegressionSlopeOfLastPredict", "LinearRegressionSlopeOfLastPrice", "LinearRegressionSlopeOfLastStderr", "LnReturnCount30", "LnReturnCount60", "LnReturnCount90", "LnReturnSquareSum30", "LnReturnSquareSum60", "LnReturnSquareSum90", "LnReturnSum30", "LnReturnSum60", "LnReturnSum90", "MovingAverage100", "MovingAverage200", "MovingAverage50", "MovingAveragePrevClose100", "MovingAveragePrevClose200", "MovingAveragePrevClose50", "RealtimeAverageDailyVolume", "RealtimeAverageDailyVolumeFactor", "RemainingRealtimeAverageDailyVolume", "SimpleAvgOfLastPrice", "StdDevOfDailyChange", "StdDevOfDailyVolume", "StdDevOfExchangeVolume", "StdDevOfLastPrice", "Volatility30", "Volatility60", "Volatility90", "VolumeWeightedAveragePrice30", "VolumeWeightedAveragePrice60", "VolumeWeightedAveragePrice90"]
reference_count: 4
references: ["SDK.InfrontSDK.SymbolField", "SDK.InfrontSDK.SymbolDataContent", "SDK.InfrontSDK.SymbolDataOptions", "SDK.InfrontSDK.symbolData"]
---

# CalculatedHistField

Calculated history fields. These fields are being calculated on demand.

#### See

[SymbolField](./SDK.InfrontSDK.SymbolField.md) | SymbolDataContent | [SymbolDataOptions](./SDK.InfrontSDK.SymbolDataOptions.md) | [symbolData](./SDK.InfrontSDK.symbolData.md)

### Enumeration Members

#### AverageAsk

```ts
AverageAsk: "AverageAsk"
```

Average Ask for the last 30 days.

#### AverageBid

```ts
AverageBid: "AverageBid"
```

Average Bid for the last 30 days.

#### AverageDailyChange

```ts
AverageDailyChange: "AverageDailyChange"
```

Average Daily Change for the last 30 days.

#### AverageDailyExchangeVolume

```ts
AverageDailyExchangeVolume: "AverageDailyExchangeVolume"
```

Average Daily Exchange Volume for the last 30 days.

#### AverageDailyVolume

```ts
AverageDailyVolume: "AverageDailyVolume"
```

Average Daily Volume for the last 30 days.

#### AverageDailyVolumeFactor

```ts
AverageDailyVolumeFactor: "AverageDailyVolumeFactor"
```

Average Daily Volume factor is calculated by dividing volume by average daily volume.

#### AverageDailyVolumeFactorPct

```ts
AverageDailyVolumeFactorPct: "AverageDailyVolumeFactorPct"
```

Percentage of volume divided by average daily volume.

#### AverageDivYieldFactor

```ts
AverageDivYieldFactor: "AverageDivYieldFactor"
```

Weighted average index dividend yield factor. Divided by index price to get apx weighted average dividend yield.

#### AverageTrueRange

```ts
AverageTrueRange: "AverageTrueRange"
```

Average True Range for the last 30 days.

#### AverageTurnover

```ts
AverageTurnover: "AverageTurnover"
```

Average Turnover for the last 30 days.

#### ExponentialMovingAverage10

```ts
ExponentialMovingAverage10: "ExponentialMovingAverage10"
```

Exponential moving average for the last 10 days.

#### ExponentialMovingAverage12

```ts
ExponentialMovingAverage12: "ExponentialMovingAverage12"
```

Exponential moving average for the last 12 days.

#### ExponentialMovingAverage26

```ts
ExponentialMovingAverage26: "ExponentialMovingAverage26"
```

Exponential moving average for the last 26 days.

#### LinearRegressionSlopeOfLastPredict

```ts
LinearRegressionSlopeOfLastPredict: "LinearRegressionSlopeOfLastPredict"
```

Linear Regression Slope of Last (price) - extrapolated to today.

#### LinearRegressionSlopeOfLastPrice

```ts
LinearRegressionSlopeOfLastPrice: "LinearRegressionSlopeOfLastPrice"
```

Linear Regression Slope of Last (price) for the last 30 days.

#### LinearRegressionSlopeOfLastStderr

```ts
LinearRegressionSlopeOfLastStderr: "LinearRegressionSlopeOfLastStderr"
```

Linear Regression Slope of Last (price) - stderr.

#### LnReturnCount30

```ts
LnReturnCount30: "LnReturnCount30"
```

#### LnReturnCount60

```ts
LnReturnCount60: "LnReturnCount60"
```

#### LnReturnCount90

```ts
LnReturnCount90: "LnReturnCount90"
```

#### LnReturnSquareSum30

```ts
LnReturnSquareSum30: "LnReturnSquareSum30"
```

#### LnReturnSquareSum60

```ts
LnReturnSquareSum60: "LnReturnSquareSum60"
```

#### LnReturnSquareSum90

```ts
LnReturnSquareSum90: "LnReturnSquareSum90"
```

#### LnReturnSum30

```ts
LnReturnSum30: "LnReturnSum30"
```

#### LnReturnSum60

```ts
LnReturnSum60: "LnReturnSum60"
```

#### LnReturnSum90

```ts
LnReturnSum90: "LnReturnSum90"
```

#### MovingAverage100

```ts
MovingAverage100: "MovingAverage100"
```

Moving average for the last 100 days.

#### MovingAverage200

```ts
MovingAverage200: "MovingAverage200"
```

Moving average for the last 200 days.

#### MovingAverage50

```ts
MovingAverage50: "MovingAverage50"
```

Moving average for the last 50 days.

#### MovingAveragePrevClose100

```ts
MovingAveragePrevClose100: "MovingAveragePrevClose100"
```

Moving average previous close for the last 100 days.

#### MovingAveragePrevClose200

```ts
MovingAveragePrevClose200: "MovingAveragePrevClose200"
```

Moving average previous close for the last 200 days.

#### MovingAveragePrevClose50

```ts
MovingAveragePrevClose50: "MovingAveragePrevClose50"
```

Moving average previous close for the last 50 days.

#### RealtimeAverageDailyVolume

```ts
RealtimeAverageDailyVolume: "RealtimeAverageDailyVolume"
```

Get the average daily volume in realtime from the last month.

#### RealtimeAverageDailyVolumeFactor

```ts
RealtimeAverageDailyVolumeFactor: "RealtimeAverageDailyVolumeFactor"
```

Realtime average daily volume factor is calculated by Volume divided by average daily volume in realtime.

#### RemainingRealtimeAverageDailyVolume

```ts
RemainingRealtimeAverageDailyVolume: "RemainingRealtimeAverageDailyVolume"
```

#### SimpleAvgOfLastPrice

```ts
SimpleAvgOfLastPrice: "SimpleAvgOfLastPrice"
```

Simple average of Last (price) for the last 30 days.

#### StdDevOfDailyChange

```ts
StdDevOfDailyChange: "StdDevOfDailyChange"
```

Standard deviation of Daily Change for the last 30 days.

#### StdDevOfDailyVolume

```ts
StdDevOfDailyVolume: "StdDevOfDailyVolume"
```

Standard deviation of Daily Volume for the last 30 days.

#### StdDevOfExchangeVolume

```ts
StdDevOfExchangeVolume: "StdDevOfExchangeVolume"
```

Standard deviation of Daily Exchange Volume for the last 30 days.

#### StdDevOfLastPrice

```ts
StdDevOfLastPrice: "StdDevOfLastPrice"
```

Standard deviation of Last (price) for the last 30 days.

#### Volatility30

```ts
Volatility30: "Volatility30"
```

Volatility for the last 30 days.

#### Volatility60

```ts
Volatility60: "Volatility60"
```

Volatility for the last 60 days.

#### Volatility90

```ts
Volatility90: "Volatility90"
```

Volatility for the last 90 days.

#### VolumeWeightedAveragePrice30

```ts
VolumeWeightedAveragePrice30: "VolumeWeightedAveragePrice30"
```

Volume Weighted Average Price for the last 30 days.

#### VolumeWeightedAveragePrice60

```ts
VolumeWeightedAveragePrice60: "VolumeWeightedAveragePrice60"
```

Volume Weighted Average Price for the last 60 days.

#### VolumeWeightedAveragePrice90

```ts
VolumeWeightedAveragePrice90: "VolumeWeightedAveragePrice90"
```

Volume Weighted Average Price for the last 90 days.
