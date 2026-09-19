---
title: "Peers Comparison"
kind: example
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widgets > Analytics widgets > Peers Comparison"
description: "Displays a peers comparison widget using AnalyticsPeersComparisonWidget for a given instrument."
tags: ["peers-comparison-widget", "AnalyticsPeersComparisonWidget", "widgets", "examples", "wtk", "requests"]
example_config: {"title":"Peers Comparison","description":"Displays a peers comparison widget using AnalyticsPeersComparisonWidget for a given instrument.","modify_date":"2025-12-08T12:28:04","owner":"","tags":["peers-comparison-widget","AnalyticsPeersComparisonWidget","widgets","examples","wtk","requests"]}
source_url: "https://docs.infrontfinance.com/examples/Widgets/Widgets/Analyticswidgets/PeersComparison"
source_files: ["script.ts", "template.html", "config.json"]
---

# Peers Comparison

Displays a peers comparison widget using AnalyticsPeersComparisonWidget for a given instrument.

## Script (script.ts)

```typescript
const selectedInstrument = { ticker: 'BMW', feed: 26 };

const defaultColumns = [
        // for testing Quarterly
        // 'GROSS_PROFIT',
        // 'EBITDA',
        // 'NET_DEBT',
        'PRICE_BOOKVALUE_RATIO',
        'PRICE_EARNINGS_RATIO',
        'PRICE_SALES_RATIO',
        'ENTERPRISE_VALUE_SALES_RATIO',
        'ENTERPRISE_VALUE_EBITDA_RATIO',
        'DIVIDEND_YIELD',
];

const widget = infront.analyticsPeersComparisonWidget( 'analyticsPeersComparisonWidget', {
    id: 'DemoAnalyticsPeersComparisonWidget',
    instrument: selectedInstrument,
    keyfigureSource: 'MORNINGSTAR',
    consensusEstimatesSource: 'STANDARD_AND_POORS',
    companySource: 'STANDARD_AND_POORS',
    currency: 'EUR',
    minimumMarketCap: { currency: 'EUR', value: 5_000_000 },
    maxPeerCompanies: 15,
    fundamentalSource: 'MORNINGSTAR',
    reportPeriodType: 'ANNUAL',
    peersFields: defaultColumns,
    showLtmCheckbox: true,
    showFundamentalPeriodSelectDropdown: true,
    showEstimatePeriodSelectDropdown: true,
    showReportPeriodTypeSwitch: false,
    fundamentalPeriodSelectDropdownPeriods: {
        ANNUAL: [0, 1, 2, 3, 4],
    },
    estimatePeriodSelectDropdownPeriods: {
        ANNUAL: [0, 1, 2, 3],
        QUARTERLY: [0, 1, 2, 4, 8],
    },
    onInstrumentClicked: ( symbolId ) => {
        console.log('[AnalyticsPeersComparisonWidget] Instrument clicked', { symbolId });
    },
    persistState: true,
    onFundamentalPeriodCountChanged: (fundamentalPeriodCount) => {
        console.log('[AnalyticsPeersComparisonWidget] onFundamentalPeriodCountChanged', { fundamentalPeriodCount });
    },
    onEstimatePeriodCountChanged: (estimatePeriodCount) => {
        console.log('[AnalyticsPeersComparisonWidget] onEstimatePeriodCountChanged', { estimatePeriodCount });
    },
    onShowLTMChanged: (showLTM) => {
        console.log('[AnalyticsPeersComparisonWidget] onShowLTMChanged', { showLTM });
    },
    onReportTypeChanged: (reportPeriodType) => {
        console.log('[AnalyticsPeersComparisonWidget] onReportTypeChanged', { reportPeriodType });
    },
} );

const instrumentSectorWidget = infront.subSectorSelectWidget( 'instrumentSectorWidget', {
    id: 'DemoAnalyticsPeersComparison_SectorWidget',
    instrument: selectedInstrument,
    closeOnSelect: true,
    showArrow: true,
    showIcon: true,
    showFactoryIcon: true,
    sectorType: 'GICS',
    onSectorSelected: ( selection ) => {
        console.log( '[SubSectorSelectWidget] Set sector(s)', { selection } );
        widget.modify( selection );
    },
    hasContentCallback: ( ...args ) => {
        const selection = instrumentSectorWidget.getSelection();
        console.log( '[SubSectorSelectWidget] hasContentCallback', args, selection );
        widget.modify( selection );
    },
    persistState: true,
} );


const regionWidget = infront.regionSelectWidget( 'regionWidget', {
    id: 'DemoAnalyticsPeersComparison_RegionWidget',
    instrument: selectedInstrument,
    closeOnSelect: true,
    showArrow: true,
    showFlagIcon: true,
    selectedRegionCode: 'REGIONAL',
    onRegionSelected: sectorRegion => {
        console.log( '[RegionSelectWidget] Set region', { sectorRegion } );
        widget.modify( { sectorRegion } );
    },
    persistState: true,
} );

const columnPickerWidget = infront.columnPickerWidget('ColumnPickerWidget', {
    id: 'DemoAnalyticsPeersComparison_ColumnPickerWidget',
    persistState: true,
    groups: columnSelectorGroups,
    onDropDownReady: (item) => {
        dropDown = item;
    },
    onSelectionChanged: (columns) => {
        widget.modify({ peersFields: columns })
    },
});
```

## Markup (template.html)

```html
<div class="cell-content" style="margin-left: 5px;">
    <div class="cell-flex-row cell-flex-collapse cell-flex-align-middle">
        <div class="cell-flex-column cell-flex-shrink">
              <div id="instrumentSectorWidget"></div>
        </div>
        <div class="cell-flex-column">
              <div id="regionWidget"></div>
        </div>
        <div class="cell-flex-column cell-flex-shrink">
             <div id="ColumnPickerWidget"></div>
        </div>
    </div>
    <div id="analyticsPeersComparisonWidget" style="max-width: 1500px; width: 1200px; height: 580px;"></div>
</div>
```

