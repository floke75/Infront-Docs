---
title: "Sdkchart Wtkwdg13071 — Script (script.ts)"
kind: widget-snippet
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widget snippets > Sdkchart Wtkwdg13071"
description: "Test snippet for SdkchartWtkwdg13071"
tags: ["widget", "test", "widget:ChartWidget", "widget:chartWidget"]
demonstrates: ["ChartWidget", "chartWidget"]
example_config: {"title":"Sdkchart Wtkwdg13071","description":"Test snippet for SdkchartWtkwdg13071","modify_date":"2025-12-16","owner":"Infront","tags":["widget","test","widget:ChartWidget","widget:chartWidget"],"flags":{"show_description":true,"show_creator":true,"show_date":true,"show_metadata":true},"scripts":["https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js","../../js/PreInfrontUI-latest.min.js","https://code.highcharts.com/stock/9.3.3/highstock.js","https://code.highcharts.com/stock/9.3.3/indicators/indicators-all.js","https://code.highcharts.com/stock/9.3.3/modules/drag-panes.js","https://code.highcharts.com/stock/9.3.3/modules/annotations-advanced.js","https://code.highcharts.com/stock/9.3.3/modules/stock-tools.js","https://code.highcharts.com/stock/9.3.3/modules/heikinashi.js","https://code.highcharts.com/stock/9.3.3/modules/hollowcandlestick.js"],"styles":["test-sdkChart-external.css","//localhost/temp/charts2.css"]}
source_url: "https://docs.infrontfinance.com/tests/SdkchartWtkwdg13071"
source_files: ["script.ts", "template.html", "config.json"]
part_of: "Widget-snippets-Sdkchart-Wtkwdg13071"
part_index: 1
sections: "Script (script.ts)"
---

> Part 1 of 2 of [Sdkchart Wtkwdg13071](../Widget-snippets-Sdkchart-Wtkwdg13071.md).

## Script (script.ts)

```typescript
// console.log("InfrontUtil.formatSettings", InfrontUtil.formatSettings);
// InfrontUtil.formatSettings.useBrowserFormatting = false;
// InfrontUtil.formatSettings.thousandsSeparator = ' ';
// InfrontUtil.formatSettings.decimalSeparator = ','

// quickly turn on/off custom data demo
const USE_CUSTOM_DATA_DEMO = false;

var chartOpts = new Infront.ChartWidgetOptions();
chartOpts.useOriginal = true;

/* Dummy Source for testing */
// chartOpts.source = new Infront.Chart.Source.Dummy();

/* Instruments */
// chartOpts.instruments = [instrumentList[14]];
chartOpts.instruments = [
    instrumentList[29],
    instrumentList[30],
    instrumentList[31],
    instrumentList[32],
    instrumentList[33],
    instrumentList[34],
    instrumentList[35],
];

// chartOpts.instruments = [instrumentList[10]]; // FUND 1M test!!
// chartOpts.instruments = [instrumentList[3], instrumentList[5]];
// chartOpts.instruments = instrumentList;

/* Indicators */
// chartOpts.indicators = [
//   { type: Infront.IndicatorType.VWAP },
//   { type: Infront.IndicatorType.BOLLINGER_BANDS },
//   { type: Infront.IndicatorType.MACD },
// ];
// chartOpts.indicators = [
//     {
//         type: Infront.IndicatorType.SMA,
//         linkedTo: 1, // 0 = first, 1 = second item of instruments array, ...
//         params: {
//             period: 15,
//             color: 'purple', // '#555555', ...
//             // ...
//         }
//     },
//     {
//         type: Infront.IndicatorType.SMA,
//         linkedTo: 'volume', // special case
//         params: {
//             period: 200,
//             color: '#00FF00',
//         }
//     },
// ];

/* overwrite CSS colors */
// chartOpts.colors = ['#91e8e1', '#7cb5ec', '#434348', '#90ed7d', '#f7a35c', '#8085e9', '#f15c80', '#e4d354', '#2b908f', '#f45b5b'];
// chartOpts.indicatorColors = ['#AA0A3C', '#F08200', '#BBCB56', '#0F7CBD', '#FBBE0D', '#E47CFF', '#53C973', '#009292'];
// chartOpts.annotationColors = ['#000000', '#DDDDDD', '#0000FF', '#444444'];

// chartOpts.labelAlpha = '55';
// chartOpts.labelOutsideAlpha = 'AA';
// chartOpts.legendAlpha = 'DD';

/* General settings */
chartOpts.chartType = Infront.Chart.ChartType.AREA;
// chartOpts.chartType = Infront.Chart.ChartType.CANDLESTICK;
// chartOpts.chartType = Infront.Chart.ChartType.LINE;
// chartOpts.chartType = Infront.Chart.ChartType.OHLC;
// chartOpts.chartType = Infront.Chart.ChartType.BASELINE;
// chartOpts.chartType = Infront.Chart.ChartType.HEIKINASHI;
// chartOpts.chartType = Infront.Chart.ChartType.HOLLOWCANDLESTICK;
// chartOpts.chartType = Infront.Chart.ChartType.POINTS;

// internal, switch this on and off if you want to see the difference for 1Y chart of "EXEGER B:2534"
// chartOpts.dataTypePreferOhlcOnShortage = true;

// chartOpts.mainDataType = Infront.Chart.SelectableDataType.CLOSE;
// chartOpts.mainDataType = Infront.Chart.SelectableDataType.BID;
// special data types:
// chartOpts.mainDataType = Infront.Chart.SelectableDataType.BID_ASK;
// chartOpts.mainDataType=Infront.Chart.SelectableDataType.PERFORMANCE;

/* customize secondary chart in special chart-types performance and bid-ask */
// chartOpts.secondaryChartType = Infront.Chart.ChartType.LINE;
// chartOpts.secondaryColorType = Infront.Chart.SecondaryColorType.NEXT;
// chartOpts.secondaryColorTransparency = 1;

// chartOpts.cursorEventsEnabled = false;

// chartOpts.cursorType = Infront.Chart.CursorType.VERTICAL;
// chartOpts.cursorType = Infront.Chart.CursorType.ARROW;
// chartOpts.cursorSnapX = false;
// chartOpts.cursorSnapY = true;
// chartOpts.prevCloseType = Infront.Chart.PrevCloseType.LINE;
// chartOpts.prevCloseType = Infront.Chart.PrevCloseType.DOT;
// chartOpts.showPrevClose = false;
// chartOpts.isPrevCloseCompareValue = false;
// chartOpts.showVolume = true;
// chartOpts.axisDateTimeLabelFormats = {
//     millisecond: '%H:%M:%S.%L',
//     second: '%H:%M:%S',
//     minute: '%H:%M',
//     hour: '%H:%M',
//     day: '%e. %b',
//     week: '%e. %b',
//     month: '%b \'%y',
//     year: '%Y'
// }
// chartOpts.showVolumeUnderlay = true;
// chartOpts.volumeAlpha = '33';
// chartOpts.showSplits = true;
// chartOpts.showDividends = true;
// chartOpts.showCalendar = true;
// chartOpts.calendarFeeds = [916]; // 962, 963, ...
// chartOpts.calendarFeeds = [916, -100, 2.52, 962, 'hallo', null, undefined, {hallo: 1}]; // test array for filter numbers
// chartOpts.adjustDividends = true;
// chartOpts.adjustSplits = false;
// chartOpts.companyEventSmallDots = true;

// Decimals
// chartOpts.decimals = 1; // general failback
// chartOpts.decimalsPercentage = 2;
// chartOpts.tooltipDecimals = 3;
// chartOpts.tooltipDecimalsPercentage = 4;
// chartOpts.yAxisLabelDecimals = 5;
// chartOpts.oppositeYAxisLabelDecimals = 6;
// chartOpts.seriesLabelDecimals = 8;
// chartOpts.oppositeSeriesLabelDecimals = 9;
// chartOpts.crosshairLabelDecimals = 10;
// chartOpts.oppositeCrosshairLabelDecimals = 1;

// Decimals callback
// chartOpts.oppositeSeriesLabelDecimalsCallback = (val, pct) => {
//   console.log('DEBUG oppositeSeriesLabelDecimalsCallback', val, pct);
//   return 0;
// };
// chartOpts.seriesLabelDecimalsCallback = (val, pct) => {
//   console.log('DEBUG seriesLabelDecimalsCallback', val, pct);
//   return 5;
// };
// chartOpts.oppositeYAxisLabelDecimalsCallback = (value, isPct) => {
//   console.log('DEBUG yAxisLabelDecimalsCallback', value, isPct);
//   return 2;
// };
// chartOpts.yAxisLabelDecimalsCallback = (value, isPct) => {
//   console.log('DEBUG yAxisLabelDecimalsCallback', value, isPct);
//   return 2;
// };

chartOpts.streaming = true;
chartOpts.caching = true;

// chartOpts.mainOnTop = false;
// chartOpts.showLegend = false;
// chartOpts.showTooltip = false;
// chartOpts.useNativeAnnotationSettings = true;
// chartOpts.indicatorsBasedOnResolution = true;

chartOpts.watermarkType = Infront.Chart.WatermarkType.SYMBOL;
// chartOpts.watermarkType = Infront.Chart.WatermarkType.DESCRIPTION;
// chartOpts.watermarkType = Infront.Chart.WatermarkType.CUSTOM;
// chartOpts.watermarkCustomText = 'Infront';
// chartOpts.watermarkMaxFontSize = 200;
// chartOpts.watermarkMaxHeightPercent = 50;
// chartOpts.watermarkMaxWidthPercent = 80;

chartOpts.showLogo = true;
chartOpts.logo = {
    // src: 'https://www.infrontfinance.com/dist/images/Infront_logo.png',
    // src: 'https://wtk.infrontservices.com/themes/terminal-latest/infront-logo-color-cmyk.svg',
    // src: 'https://wtk.infrontservices.com/themes/terminal-latest/infront-logo-mono-light.svg',
    // src: 'https://wtk.infrontservices.com/themes/terminal-latest/infront-logo-mono-dark.svg',
    infrontLogo: Infront.Chart.LogoType.BLACK,
    // infrontLogo: Infront.Chart.LogoType.WHITE,
    // position: Infront.Chart.LogoPosition.BOTTOM_RIGHT,
    // offset: 20,
    opacity: 0.4, // 0: fully transparent, 1: fully opaque
    // width: 128,
    // height: 25,
    // className: 'my-logo-class-name',
};

/* Ordinate settings */
// chartOpts.showOrdinate = false;
// chartOpts.ordinateCompareBase = 100;
// chartOpts.ordinateType = Infront.Chart.OrdinateType.LOGARITHMIC;
// chartOpts.ordinateScaling = Infront.Chart.OrdinateScaling.ABSOLUTE;
// chartOpts.ordinateScaling = Infront.Chart.OrdinateScaling.RELATIVE;
// chartOpts.ordinateScaling = Infront.Chart.OrdinateScaling.REBASE_ON_MAIN;
chartOpts.showOppositeOrdinate = true;
// chartOpts.ordinateLabelsOutside= true;
// chartOpts.showSeriesLabels = false;
// chartOpts.gridType = Infront.Chart.GridType.NONE;
// chartOpts.gridType = Infront.Chart.GridType.VERTICAL;
// chartOpts.gridType = Infront.Chart.GridType.HORIZONTAL;
// chartOpts.showAlternateGridColor = true;

/* Period settings */
// chartOpts.selectablePeriods = ["T", "S", "1D", "2D", "5D", "10D", "30D", Infront.Chart.Period.ONE_MONTH, "6M", "9M", "1Y", "2Y", "5Y", "YTD", "ALL"];
// chartOpts.selectablePeriods = ["CUSTOM", "T", "invalid", "ALL", "S", "1D", "10D", "2D", "5Y", "5D", "30D", "1M", "6M", "9M", "1Y", "2Y", "5Y", "YTD", "ALL", "90D", "3Y", "LYTD"];
// chartOpts.selectablePeriods = ["1D", "2D", "5D"];
// chartOpts.defaultPeriod = "1D";
// chartOpts.defaultPeriod = "5D";
// chartOpts.defaultPeriod = "1M";
chartOpts.defaultPeriod = '2Y';
// chartOpts.adjustStartDate = false;

// chartOpts.startDate = new Date(2023, 1, 30);
// chartOpts.endDate = new Date(2023, 2, 30);

/* Resolution settings */
// chartOpts.autoResolution = false;
// chartOpts.defaultResolutions = {
//     [Infront.Chart.IntradayPeriod.SECOND]: Infront.Chart.IntradayResolution.ONE_SECOND,
//     [Infront.Chart.IntradayPeriod.ONE_DAY]: Infront.Chart.IntradayResolution.ONE_MINUTE,
//     [Infront.Chart.IntradayPeriod.PERIOD_24H]: Infront.Chart.IntradayResolution.ONE_MINUTE,
//     [Infront.Chart.IntradayPeriod.TWO_DAYS]: Infront.Chart.IntradayResolution.ONE_MINUTE,
//     [Infront.Chart.IntradayPeriod.THREE_DAYS]: Infront.Chart.IntradayResolution.FIVE_MINUTES,
//     [Infront.Chart.HistoricalPeriod.FIVE_YEARS]: Infront.Chart.HistoricalResolution.ONE_WEEK,
//     // ... add more if required, .e.g for historical periods!
// };
// User filters for the available resolutions
// chartOpts.selectableIntradayResolutions = [];
// chartOpts.selectableHistoricalResolutions = [
//     Infront.Chart.HistoricalResolution.AUTO,
//     Infront.Chart.HistoricalResolution.ONE_DAY,
//     Infront.Chart.HistoricalResolution.THREE_DAYS,
//     Infront.Chart.HistoricalResolution.FIVE_DAYS,
//     Infront.Chart.HistoricalResolution.ONE_WEEK,
//     Infront.Chart.HistoricalResolution.ONE_MONTH,
// ];

/* UI settings */
chartOpts.showNavigator = true;
// chartOpts.navigatorHeight = 10,
// chartOpts.navigatorMargin = 0,
// chartOpts.navigatorHandlesEnabled = false,
// chartOpts.navigatorHandlesSymbols = ["navigator-handle","navigator-handle"],
// chartOpts.navigatorHandlesHeight = 10,
// chartOpts.navigatorHandlesWidth = 5,

// chartOpts.reflowTimeout = 100;

// chartOpts.legendItemClick = Infront.Chart.LegendItemClickType.NONE;
// chartOpts.legendItemClick = Infront.Chart.LegendItemClickType.HIDE_SERIES;
// chartOpts.legendItemClick = Infront.Chart.LegendItemClickType.EDIT_SERIES;
// chartOpts.legendItemClick = Infront.Chart.LegendItemClickType.REMOVE_SERIES;
chartOpts.legendItemClick = Infront.Chart.LegendItemClickType.EDIT_REMOVE_SERIES;

chartOpts.topToolbar = {
    // searchBox: true, // inofficial feature
    chartTypeMenu: true,
    periodMenu: true,
    resolutionMenu: true,
    indicatorMenu: true,
    compareMenu: true,
    newCompareMenu: true,
    annotationMenu: true,
    settingsMenu: true,
    templateMenu: true,
    currencyMenu: true,
    cursorEventsButton: true,
    // cursorTypeMenu: true, // not implemented yet
    instrumentHeader: true,
    fullScreenButton: true,
};
// chartOpts.topToolbarLabels = {
//   newCompareMenu: {
//     isIcon: true,
//     value: new Infront.Observable(Infront.Chart.Icon.getSvgIcon('calendar')),
//   },
//   periodMenu: {
//     isIcon: false,
//     value: new Infront.Observable("Period"),
//   }
// };

chartOpts.bottomToolbar = {
    periodButtons: true,
    // periodMenu: true, // Lasse: should be switched off in Demo chart
    resolutionMenu: true,
};
// chartOpts.bottomToolbarLabels = {
//   periodMenu: {
//     isIcon: true,
//     value: new Infront.Observable(Infront.Chart.Icon.getSvgIcon('chart')),
//   },
//   resolutionMenu: {
//    isIcon: false,
//    value: new Infront.Observable("Resolution"),
//   }
// };

chartOpts.instrumentHeader = {
    chartFields: true,
    quoteFields: true,
};

/*
chartOpts.instrumentHeaderChartFields = {
  Unknown: [{
    name: 'currentPeriod',
    label: false
  }, {
    name: 'pctChange',
    label: false,
    enableStatusColors: true,
    // blinkType: Infront.BlinkType.UpDown,
    // blinkDuration: Infront.BlinkDuration.Long,
  }, {
    name: 'absChange',
    label: false,
    enableStatusColors: true
  }],
  // Stock: [{
  //   name: 'currentPeriod',
  //   label: false
  // }],
  // label is optional parameter

  // default: [],
  // symbolType: [],
  // symbolSubType: [],
};

 chartOpts.instrumentHeaderQuoteFields = {
  Unknown: [{
    name: 'VWAP',
    label: true,
  }, {
    name: 'ACC_VOLUME',
    label: true,
  }, {
    name: 'CHANGE',
    label: true,
    enableStatusColors: true,
  }, {
    name: 'PCT_CHANGE',
    enableStatusColors: true,
    // blinkType: Infront.BlinkType.UpDown,
    // blinkDuration: Infront.BlinkDuration.Long,
  }],
  Index: [{
    name: 'ACC_VOLUME',
    label: true,
  }, {
    name: 'CHANGE',
    label: true,
    enableStatusColors: true,
  }, {
    name: 'PCT_CHANGE',
    enableStatusColors: true,
  }],
  // default: [],
  // symbolType: [],
  // symbolSubType: [],
};
*/

chartOpts.generalDropDownOptions = {
    booleanRepresentation: Infront.Chart.BooleanRepresentation.CHECKBOX,
};

chartOpts.defaultCurrency = Infront.Chart.Currency.DEFAULT; // initial currency
// chartOpts.selectableCurrencies = [Infront.Chart.Currency.USD, Infront.Chart.Currency.EUR];
// chartOpts.selectableCurrencies = ['USD', 'EUR', 'JPY'];
// chartOpts.selectableCurrencies = ['USD', Infront.Chart.Currency.GBP];
// chartOpts.selectableCurrencies = [];
// chartOpts.selectableCurrencies;
// chartOpts.selectableCurrencies = {
//     list: [
//     {
//       name: 'TestFolder1',
//       items: [
//         Infront.Chart.Currency.EUR,
//         Infront.Chart.Currency.USD,
//         "CHF",
//       ]
//     }, {
//       name: 'TestFolder2',
//       items: [
//         Infront.Chart.Currency.PLN,
//         "JPY",
//         Infront.Chart.Currency.HKD,
//       ]
//     }],
//     collapsable: Infront.Chart.Menu.COLLAPSABLE.FIRST,
// };

chartOpts.selectableIndicators = {
    list: [
        Infront.IndicatorType.TOGGLE_VOLUME_BY_PRICE,
        Infront.IndicatorType.TOGGLE_VOLUME,
        Infront.IndicatorType.TOGGLE_VOLUME_UNDERLAY,
        // Indicators
        {
            name: 'Indicators',
            translate: true,
            items: [
                // Infront.IndicatorType.VOLUME_BY_PRICE,
                Infront.IndicatorType.SMA,
                Infront.IndicatorType.EMA,
                Infront.IndicatorType.WMA,
                Infront.IndicatorType.BOLLINGER_BANDS,
                Infront.IndicatorType.VWAP,
            ],
        },
        // Oscillators (have own panes / y-axis)
        {
            name: 'Oscillators',
            translate: true,
            items: [
                Infront.IndicatorType.MACD,
                Infront.IndicatorType.MOMENTUM,
                Infront.IndicatorType.RSI,
                Infront.IndicatorType.RVI,
                Infront.IndicatorType.STDDEV,
                Infront.IndicatorType.STOCHASTIC, // STOCHASTIC is almost the same as STOCHASTIC_FAST!
                Infront.IndicatorType.STOCHASTIC_SLOW,
                Infront.IndicatorType.STOCHASTIC_FAST,
                Infront.IndicatorType.ATR,
            ],
        },
        // Service functions
        Infront.IndicatorType.TOGGLE_INDICATORS,
        Infront.IndicatorType.DELETE_ALL_INDICATORS,
        Infront.IndicatorType.DELETE_ALL_OSCILLATORS,
    ],
    collapsable: Infront.Chart.Menu.COLLAPSABLE.CLOSED,
};

chartOpts.sdkSearchBoxOptions.searchRequestOptions.onFeedScoreAdjustment = (factor, feedInfo) => {
    const feedScoreFactorItem = DefaultFeedScoreFactorItems.find((scoreItem) => {
        return (
            scoreItem.feed === feedInfo.feed ||
            (scoreItem.feedCode != undefined ? scoreItem?.feedCode === feedInfo.feedCode : false)
        );
    });

    if (feedScoreFactorItem != undefined) {
        factor *= feedScoreFactorItem.factor;
    }

    return factor;
};

//   chartOpts.newCompareDropDownOptions.fieldConfig = {
//     Unknown: ['COUNTRY_FLAG_16', 'TICKER', 'FEED_EXCHANGE', 'FEED_ACCESS_DESC'],
//     Fund: ['FULL_NAME', 'FEED_ACCESS_DESC'],
//   };

// chartOpts.selectableCompare = {
//   list : [
//       {
//           name: "World Indices",
//           translate: true,
//           items: [
//               new Infront.Chart.Menu.Compare.Instrument(2098, "DAX"),
//               new Infront.Chart.Menu.Compare.Instrument(20, "DJI"),
//           ]
//       },
//       {
//           name: "Automotive",
//           translate: true,
//           items: [
//               new Infront.Chart.Menu.Compare.Instrument(26, "MBG"),
//               new Infront.Chart.Menu.Compare.Instrument(26, "BMW"),
//               new Infront.Chart.Menu.Compare.Instrument(15, "TSLA")
//           ]
//       }
//   ],
//   collapsable: Infront.Chart.Menu.COLLAPSABLE.OPEN,
// };

// ChartEdit modal configurations
// chartOpts.globalSettingsNavigation = [
//   Infront.Chart.UserParamsNavigationItem.DISPLAY,
//   Infront.Chart.UserParamsNavigationItem.AXIS,
//   Infront.Chart.UserParamsNavigationItem.EVENTS
// ];

chartOpts.globalSettingsViewGroup = {
    [Infront.Chart.UserParamsNavigationItem.DISPLAY]: [
        'watermarkType',
        'watermarkCustomText',
        'gridType',
        'showAlternateGridColor',
        'mainOnTop',
        'showNavigator',
        'showLegend',
        'showTooltip',
        'streaming', // activated for testing
        'caching', // activated for testing
        'group_Intraday',
        'showPrevClose',
        'isPrevCloseCompareValue',
        'prevCloseType',
        'group_Cursor',
        'cursorSnapX', // activated for testing
        'cursorSnapY', // activated for testing
        'cursorType',
    ],
    [Infront.Chart.UserParamsNavigationItem.AXIS]: [
        'ordinateScaling',
        'ordinateCompareBase',
        'showOrdinate',
        'showOppositeOrdinate',
        'ordinateType',
        'ordinateLabelsOutside',
        'showSeriesLabels',
    ],
    [Infront.Chart.UserParamsNavigationItem.EVENTS]: [
        'group_Display',
        'showSplits',
        'showDividends',
        'showCalendar',
        'calendarFeeds',
        // 'showNews', // not implemented yet
        // 'showReleases', // not implemented yet
        'group_PriceAdjustments',
        'adjustSplits',
        'adjustDividends',
    ],
};

// chartOpts.instrumentSettingsNavigation = [
//   Infront.Chart.UserParamsNavigationItem.LINE,
//   Infront.Chart.UserParamsNavigationItem.VOLUME,
//   Infront.Chart.UserParamsNavigationItem.EVENTS
// ];

// chartOpts.instrumentSettingsViewGroup = {
//   [Infront.Chart.UserParamsNavigationItem.LINE]: [
//     'visible',
//     'targetCurrency',
//     'chartType',
//     'dataType',
//     'color',
//     'upWickColor',
//     'wickColor',
//     'upColor',
//     'downColor',
//     // 'negativeColor',
//     // 'lineColor',
//     'lineWidth',
//   ],
//   [Infront.Chart.UserParamsNavigationItem.VOLUME]: [
//     'group_VolumeBars',
//     'showVolume',
//     'volumeUseUpDownColors',
//     'group_VolumeUnderlay',
//     'showVolumeUnderlay',
//     'volumeUnderlayUseUpDownColors',
//     'group_VolumeCommon',
//     // 'volumeType', // WTKWDG-541 not wanted (for now)
//     'volumePositiveColor',
//     'volumeNegativeColor',
//     'volumeColor',
//   ],
//   [Infront.Chart.UserParamsNavigationItem.EVENTS]: [
//     'group_Display',
//     'showSplits',
//     'showDividends',
//     'showCalendar',
//     // 'showNews', // not implemented yet
//     // 'showReleases', // not implemented yet
//     'group_PriceAdjustments',
//     'adjustSplits',
//     'adjustDividends',
//   ],
// };

/* Custom Template examples */
// const templateNonFancy = {
//     chartType: Infront.Chart.ChartType.AREA,
//     period: Infront.Chart.Period.ONE_YEAR,
//     resolution: Infront.Chart.Resolution.AUTO,
//     showVolume: true,
//     volumeUseUpDownColors: false,
//     showVolumeUnderlay: false,
//     volumeUnderlayUseUpDownColors: true,
//     indicatorList: [],
// };
// const templateFancy = {
//     chartType: Infront.Chart.ChartType.CANDLESTICK,
//     period: Infront.Chart.Period.FIVE_YEARS,
//     resolution: Infront.Chart.Resolution.ONE_WEEK,
//     showVolume: true,
//     volumeUseUpDownColors: false,
//     showVolumeUnderlay: false,
//     indicatorList: [
//         {
//             type: Infront.IndicatorType.EMA,
//             params: {
//                 period: 52,
//             },
//         },
//         {
//             type: Infront.IndicatorType.EMA,
//             params: {
//                 period: 104,
//             },
//         },
//         {
//             type: Infront.IndicatorType.EMA,
//             params: {
//                 period: 156,
//             },
//         },
//         {
//             type: Infront.IndicatorType.VOLUME_BY_PRICE,
//             params: {
//                 color: "#00FF0033",
//                 negativeColor: "#FF000033",
//             },
//         },
//         {
//             type: Infront.IndicatorType.RSI,
//             params: {
//                 period: 14,
//             },
//         },
//     ],
// };
// chartOpts.availableCustomTemplates = {
//     "Non-fancy Stuff": templateNonFancy,
//     "Fancy Stuff": templateFancy,
// };
// chartOpts.selectableTemplates = {
//     list: [
//         Infront.Chart.ChartTemplateType.DEFAULT,
//         Infront.Chart.ChartTemplateType.TEN_MINUTES_VWAP,
//         "Non-fancy Stuff",
//         "Fancy Stuff",
//         Infront.Chart.ChartTemplateType.SAVE_AS_DEFAULT,
//         Infront.Chart.ChartTemplateType.RESET_DEFAULT,
//     ],
//     collapsable: Infront.Chart.Menu.COLLAPSABLE.CLOSED,
// };
/* END Custom Templates */

chartOpts.linkChannels = [7755];
chartOpts.linkAction = Infront.LinkAction.Replace;

// chartOpts.id required for storage, best way to be clarified!
chartOpts.id = 'chartwidget2';

chartOpts.onPopupStateChange = (state) => {
    console.log('Popup opened: ', state);
};

// Callbacks
// chartOpts.callbackChartFields = (chartFields) => {
//   chartFields?.pctChange?.observe({
//     valueUpdated: (value) => {
//       console.log("chartFields - calculated pctChange", value);
//     },
//   });
// };

if (USE_CUSTOM_DATA_DEMO) {
    // custom data from js file example
    // timeseries data must be in Highcharts format [unixtime in ms, value] or [unixtime in ms, open, high, low, close]
    // chartOpts.customData = {
    //     'CUSTOM': { // 1:1 custom ticker
    //         'ohlcData': getCustomDataOhlc(),
    //         'volumeData': getCustomDataVolume(), // required for indicators (like VbP)
    //         'turnoverData': getCustomDataTurnover(), // we display turnove as volume data!
    //         // ...
    //     }
    // }

    // custom data from single JSON example
    // const createCallback = (data) => {
    //     chartOpts.customData = {};
    //     chartOpts.customData['CUS-BMW'] = data;
    //     // the first paramter is the id of the HTML container, not the id of the widget itself!!!
    //     chartWidget = infront.chartWidget("chartwidget1", chartOpts);
    // };
    // getCustomDataJson('https://demo-live-data.highcharts.com/aapl-ohlcv.json', createCallback);
    // getCustomDataJson('./test-custom-data-bmw-3y.json', createCallback);

    // custom data from multi JSON example
    // chartOpts.instruments = [
    //     new Infront.Chart.CustomInstrument("CUS-DAI", "Cust. Daimler"),
    //     new Infront.Chart.CustomInstrument("CUS-BMW", "Bay. Motorenwerke"),
    //     new Infront.Chart.CustomInstrument("CUS-DAX"),
    //     new Infront.Chart.CustomInstrument("CUS-DELPHI", "Delphi Nordic N"),
    //     instrumentList[14]
    // ];
    // const loadCustomData = async () => {
    //     chartOpts.customData = {};
    //     // get timeseries data
    //     [
    //         chartOpts.customData['CUS-DAI'],
    //         chartOpts.customData['CUS-BMW'],
    //         chartOpts.customData['CUS-DAX'],
    //         chartOpts.customData['CUS-DELPHI'],
    //     ] = await Promise.all([
    //         // getJsonPromise('https://demo-live-data.highcharts.com/aapl-ohlcv.json'),
    //         Infront.Chart.Data.Custom.getJsonPromise('./test-custom-data-dai-3y.json'),
    //         Infront.Chart.Data.Custom.getJsonPromise('./test-custom-data-bmw-3y.json'),
    //         Infront.Chart.Data.Custom.getJsonPromise('./test-custom-data-dax-3y.json'),
    //         Infront.Chart.Data.Custom.getJsonPromise('./test-custom-data-delphi-nordic-n-3y.json'),
    //     ]);
    //     // add company event data
    //     chartOpts.customData['CUS-DAI'] = {
    //         ...chartOpts.customData['CUS-DAI'],
    //         ...(await Infront.Chart.Data.Custom.getJsonPromise('./test-custom-data-dai-dividend.json', 'dividendData')),
    //         ...(await Infront.Chart.Data.Custom.getJsonPromise('./test-custom-data-dai-split.json', 'splitData')),
    //         ...(await Infront.Chart.Data.Custom.getJsonPromise('./test-custom-data-dai-calendar.json', 'calendarData')),
    //     };
    //     // worse alternative: single call for every json
    //     // chartOpts.customData['CUS-BMW'] = await Infront.Chart.Data.Custom.getJsonPromise('./test-custom-data-bmw-3y.json');
    //     // chartOpts.customData['CUS-DAI'] = await Infront.Chart.Data.Custom.getJsonPromise('./test-custom-data-dai-3y.json');
    // };
    // loadCustomData().then(() => chartWidget = infront.chartWidget("chartwidget1", chartOpts));

    // custom data from multi JSON using internal toolkit data-loading example
    chartOpts.instruments = [
        new Infront.Chart.CustomInstrument('CUS-DAI', 'Cust. Daimler', [
            { url: './test-custom-data-dai-3y.json' },
            { url: './test-custom-data-dai-dividend.json', dataType: 'dividendData' },
            { url: './test-custom-data-dai-split.json', dataType: 'splitData' },
            { url: './test-custom-data-dai-calendar.json', dataType: 'calendarData' },
        ]),
        new Infront.Chart.CustomInstrument('CUS-BMW', 'Bay. Motorenwerke', {
            url: './test-custom-data-bmw-3y.json',
        }),
        new Infront.Chart.CustomInstrument('CUS-DAX', { url: './test-custom-data-dax-3y.json' }),
        new Infront.Chart.CustomInstrument('CUS-DELPHI', 'Delphi Nordic N', {
            url: './test-custom-data-delphi-nordic-n-3y.json',
        }),
        instrumentList[14],
    ];
    chartWidget = infront.chartWidget('chartwidget1', chartOpts);
    // chartWidget2 = infront.chartWidget("chartwidget2", chartOpts);
}

if (!USE_CUSTOM_DATA_DEMO) {
    // the first paramter is the id of the HTML container, not the id of the widget itself!!!
    chartWidget = infront.chartWidget('chartwidget1', chartOpts);
    // chartWidget2 = infront.chartWidget("chartwidget2", chartOpts);

    // chartOpts2 = JSON.parse(JSON.stringify(chartOpts));
    // chartWidget2 = infront.chartWidget("chartwidget2", chartOpts2);
}

navLink = new Infront.Link(infront, Infront.LinkAction.Replace, [7755], onLink);
var onLink = (type, value) => {
    console.log('link event triggered', type, value); // DEBUG
};

// next line has been used for testing WTKWDG-712
// chartWidget.setMainInstrument(instrumentList[19]);

// Test if CountryFlags are working as intended (requires DEBUG_UNHANDLED_TAGS = true)
// Object.keys(InfrontUtil.CountryFlagsMap).forEach((key) => {
//     document.body.appendChild(InfrontUtil.CountryFlag.getCountryFlag(key, 16));
// });
```
