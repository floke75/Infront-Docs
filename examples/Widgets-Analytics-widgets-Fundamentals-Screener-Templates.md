---
title: "Fundamentals Screener Templates"
kind: example
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widgets > Analytics widgets > Fundamentals Screener Templates"
description: "Displays a fundamentals screener widget with predefined templates. Country, sector and indicies filters."
tags: ["fundamentals-screener-widget", "AnalyticsFundamentalsScreenerWidget", "widgets", "examples", "wtk", "requests"]
example_config: {"title":"Fundamentals Screener","description":"Displays a fundamentals screener widget using AnalyticsFundamentalsScreenerWidget for financial data analysis.","modify_date":"2025-12-08T12:26:46","owner":"","tags":["fundamentals-screener-widget","AnalyticsFundamentalsScreenerWidget","widgets","examples","wtk","requests"]}
source_url: "https://docs.infrontfinance.com/examples/Widgets/Widgets/Analyticswidgets/FundamentalsScreenerTemplates"
source_files: ["script.ts", "template.html", "config.json"]
---

# Fundamentals Screener Templates

Displays a fundamentals screener widget with predefined templates. Country, sector and indicies filters.

## Script (script.ts)

```typescript
const initialColumns = [
    { field: 'name', width: 160 },
    { field: 'ticker', width: 160 },
    { field: 'currency', width: 160 },

    { field: 'gprv_total_score', width: 90 },
    { field: 'gprv_growth_score', width: 90 },
    { field: 'gprv_profitability_score', width: 90 },
    { field: 'gprv_risk_score', width: 90 },
    { field: 'gprv_value_score', width: 90 },

    { field: 'enterprise_value_sales_ratio', width: 90 },
    { field: 'gics_sector_name', width: 160 },
    { field: 'price_earnings_ratio', width: 180 },
    { field: 'dividend_yield', width: 90 },
    { field: 'enterprise_value_ebitda_ratio', width: 90 },
    { field: 'price_sales_ratio', width: 90 },
    { field: 'price_bookvalue_ratio', width: 90 },
    { field: 'market_capitalization_eur', width: 90 },
];

const templatesList = [
    {
        id: 'personal_template_1',
        name: 'Personal1',
        columns: [
            'ticker',
            'isin',
            'currency',
            'gics_sector_id',
            'gics_industry_group_id',
            'gics_industry_id',
            'gics_sub_industry_id',
            'fiscal_year_end_date',
            'infront_code',
        ],
    },
    {
        id: 'personal_template_2',
        name: 'Personal2',
        columns: [
            'net_sales_cagr_3_year',
            'gross_profit_margin',
            'ebitda_margin',
            'ebit_margin',
            'net_profit_margin',
            'earnings_per_share',
            'debt_asset_ratio',
            'growth_net_sales',
            'dividend',
            'dividend_payout_ratio',
            'return_on_equity',
            'return_on_asset',
            'earnings_per_share_growth_1_year',
            'net_profit_margin_average_3_year',
            'growth_net_income',
            'debt_equity_ratio',
            'estimate_dividend_payout_ratio',
            'estimate_earnings_per_share_growth_1_year',
            'pretax_margin',
            'estimate_ebit_margin',
            'estimate_ebitda_margin',
            'estimate_growth_net_sales',
            'estimate_net_profit_margin',
            'historical_roce',
            'net_debt_equity_ratio',
            'net_debt_ebitda_ratio',
            'asset_turnover_ratio',
            'interest_coverage_ratio',
        ],
        sortColumns: [{ name: 'net_profit_margin', sort: 'desc' }],
        filters: {
            dividend_payout_ratio: {
                filterType: 'number',
                type: 'inRange',
                filter: 0.2,
                filterTo: 0.78,
            },
        },
        countryCode: ['CA', 'US'],
        sectors: { subSectorId: [39, 40] },
        index: { listingId: '66384' },
    },
    {
        id: 'personal_template_3',
        name: 'Personal3',
        columns: [
            'price_sales_ratio',
            'price_earnings_ratio',
            'price_bookvalue_ratio',
            'enterprise_value_sales_ratio',
            'enterprise_value_ebit_ratio',
            'enterprise_value_ebitda_ratio',
            'dividend_yield',
            'earnings_yield',
            'price_earnings_earnings_per_share_growth_ratio',
            'estimate_dividend_yield',
            'estimate_enterprise_value_ebitda_ratio',
            'estimate_enterprise_value_sales_ratio',
            'estimate_price_bookvalue_ratio',
            'estimate_price_earnings_ratio',
            'estimate_price_earnings_earnings_per_share_growth_ratio',
            'estimate_price_sales_ratio',
            'estimate_earnings_yield',
            'price_cash_flow_ratio',
            'price_free_cash_flow_ratio',
            'free_cash_flow_yield',
        ],
    },
    {
        id: 'personal_template_4',
        name: 'Personal4',
        columns: [
            'target_price_median_upside',
            'target_price_upside_date',
            'outlook_number_of_analysts',
            'outlook_score',
            'recommendation',
        ],
    },
    {
        id: 'personal_template_5',
        name: 'Personal5',
        columns: [
            'performance_current_year',
            'performance_1_month',
            'performance_3_month',
            'performance_6_month',
            'performance_1_year',
            'performance_3_year',
            'performance_5_year',
            'performance_10_year',
            'volatility_1_month',
            'volatility_3_month',
            'volatility_6_month',
            'volatility_9_month',
            'volatility_1_year',
            'beta_1_year',
            'beta_2_year',
            'beta_3_year',
            'beta_4_year',
            'beta_5_year',
            'unlevered_beta_1_year',
            'unlevered_beta_2_year',
            'unlevered_beta_3_year',
            'unlevered_beta_4_year',
            'unlevered_beta_5_year',
        ],
    },
    {
        id: 'personal_template_6',
        name: 'Personal6',
        columns: [
            'gprv_total_score',
            'gprv_growth_score',
            'gprv_profitability_score',
            'gprv_risk_score',
            'gprv_value_score',
        ],
    },
    {
        id: 'personal_template_7',
        name: 'Personal7',
        columns: [
            'enterprise_value',
            'enterprise_value_eur',
            'enterprise_value_usd',
            'market_capitalization',
            'market_capitalization_eur',
            'market_capitalization_usd',
            'net_debt',
        ],
    },
];

const groupableColumnIds = new Set(); // filled after widget has been constructed

const widget = infront.analyticsFundamentalsScreenerWidget('AnalyticsFundamentalsScreenerWidget', {
    id: 'DemoAnalyticsFundamentalsScreenerWidget',
    persistState: true,
    minimumMarketCap: { currency: 'EUR', value: 5e06 },
    autoSizeColumns: true,
    allowColumnDragRemove: true,
    allowColumnMove : true,
    columns: initialColumns,
    sortColumns: [{ name: 'name', sort: 'desc' }],
    columnDefOverwrites: {
        'name': {
            overwrites: {
                onCellClicked: function() {
                    console.log('[AnalyticsFundamentalsScreener] onCellClicked name', arguments);
                },
            },
            strategy: 'merge-prio',
        },
    },
    onColumnsChanged(eventData) {
        console.log('AnalyticsFundamentalsScreenerWidget onColumnsChanged', eventData);
        const selectedColumns = eventData?.map(c => c.field).filter(n => groupableColumnIds.has(n)) ?? [];
    },
    onFilterChanged(eventData) {

    },
    hasContentCallback(hasContent, data) {
        console.log('AnalyticsFundamentalsScreenerWidget hasContent', { hasContent, data });
    },
    onDataAvailable(data) {
        console.log('AnalyticsFundamentalsScreenerWidget onDataAvailable', data);
    },
    onInstrumentClicked(symbol) {
        console.log(symbol);
    },
    onPinnedTopRowIsinsChanged: (isins) => {
        console.log('Pinned top rows changed', isins);
    },
    onPinnedBottomRowIsinsChanged: (isins) => {
        console.log('Pinned bottom rows changed', isins);
    },
});

console.info('AnalyticsFundamentalsScreenerWidget:', widget);

sectorWidget = infront.subSectorMultiSelectWidget('SubSectorSelectWidget', {
    id: 'DemoAnalyticsFundamentalsScreenerSectorWidget',
    persistState: true,
    defaultLabel: 'Sector',
    multipleSelectionLabel: 'Sectors (#)',
    allowParentSectorSelection: true,
    closeOnSelect: false,
    showArrow: true,
    showFactoryIcon: true,
    onSectorsSelected: (selection) => {
        widget.modify(selection);
    },
    hasContentCallback: (hasContent, item) => {
    },
});

console.info('SubSectorSelectWidget:', sectorWidget);

countryWidget = infront.countryMultiSelectWidget('CountrySelectWidget', {
    id: 'DemoAnalyticsFundamentalsScreenerCountryWidget',
    defaultLabel: 'Country',
    multipleSelectionLabel: 'Countries (#)',
    showCurrentCountryAsLabel: true, // default
    grouping: 'POPULAR_NORDICS',
    showFlagIcon: true,
    showArrow: true,
    onCountriesSelected: (eventData) => {
        widget.modify({ countryCode: eventData });
    },
    hasContentCallback: (hasContent, item) => {
    },
    onReady: () => {
        widget.modify({ countryCode: countryWidget.getSelection() });
    },
    onSelectionChanged: (selectedItems) => {
    },
});

indexSelectWidget = infront.indexSelectWidget('indexSelectWidget', {
    id: 'DemoAnalyticsFundamentalScreenerIndexSelectWidget',
    persistState: true,
    selectedIndex: { isin : 'EU0009658145' },
    onIndexClicked: (index) => {
        console.log('[IndexSelectWidget] Index clicked', { index });
    },
    onIndexSymbols: (symbols) => {
        console.log('[IndexSelectWidget] Index symbols', { symbols });
        widget.modify({ instruments: symbols });
    },
});

const templatesWidget = infront.analyticsTemplatesWidget('AnalyticsTemplatesWidget', {
    personalTemplates: templatesList,
    templateType: 'SCREENER',
    estimatesSource: 'STANDARD_AND_POORS',
    showPersonalTemplates: true,
    // id: 'DemoAnalyticsFundamentalScreener_TemplatesWidget',
    persistState: true,
    onTemplateSelected: (template, category) => {
        const screenerUpdates = {
            columns: [ 'name', ...(template.columns || []) ],
            countryCode: template.countryCode,
            filters: template.filters,
            sortColumns: template.sortColumns,
            ...(template.sectors ? template.sectors : {}),
        };
        widget.modify(screenerUpdates);
        sectorWidget.modify(template.sectors);
        indexSelectWidget.modify({ selectedIndex: template.index });
        countryWidget.modify({ countryCodes: template.countryCode });
    },
    handleCreateBlankTemplate: () => {
        const screenerTemplate = widget.getCurrentTemplate();
        const currentIndex = indexSelectWidget.getSelectedIndexSymbolId();
        console.log('Creating new template from screener', { screenerTemplate, currentIndex });
    },
    handleSaveAsCopy: () => {
        const screenerTemplate = widget.getCurrentTemplate();
        const currentIndex = indexSelectWidget.getSelectedIndexSymbolId();
        console.log('Saving as copy template from screener', { screenerTemplate, currentIndex });
    },
    handleTemporaryTemplate: () => {
        const screenerTemplate = widget.getCurrentTemplate();
        const currentIndex = indexSelectWidget.getSelectedIndexSymbolId();
        console.log('handleTemporaryTemplate from screener');
    },
    handlePersonalTemplateEdit: (template) => {
        console.log('Editing template from screener', { template});
    },
    handlePersonalTemplateDelete: (template) => {
        console.log('Deleting template', { template });
    },
    onFavoriteTemplatesChange: (favTemplateIds) => {
        console.log('Favorite templates changed', { favTemplateIds });
    },
    showTemplatesButtons: true,
    isCreateTemplateAllowed: true,
    isEditPersonalTemplateAllowed: true,
    isDeletePersonalTemplateAllowed: true,
    isSaveAsCopyAllowed: true,
    isTempTemplateAllowed: false,
});
console.info('AnalyticsTemplatesWidget:', templatesWidget);
console.info('Available getInfrontTemplates', templatesWidget.getInfrontTemplates());
```

## Markup (template.html)

```html
<div class="cell-row">
    <div class="cell cell--w12">
        <div class="cell-content">
            <div class="cell-flex-row cell-flex-align-middle">
                <div class="cell-flex-column cell-flex-shrink cell-flex-collapse">
                    <div id="CountrySelectWidget"></div>
                </div>

                <div class="cell-flex-column cell-flex-shrink">
                    <div id="SubSectorSelectWidget"></div>
                </div>

                <div class="cell-flex-column cell-flex-shrink">
                    <div id="indexSelectWidget"></div>
                </div>

                <div class="cell-flex-column cell-flex-shrink">
                    <div id="ColumnPickerWidget"></div>
                </div>

                <div class="cell-flex-column cell-flex-collapse">
                    <div id="SearchWidget" class="cell-text-right">
                        <input type="text" class="cell-input" placeholder="ISIN" onkeydown="pinTopIsin(event)" />
                        <button type="button" onclick="widget.modify({ pinnedTopRowIsins: [] }); location.reload()">Reset pinned rows</button>
                    </div> <!-- To be replaced by real search widget -->
                </div>
            </div>

            <div id="AnalyticsTemplatesWidget"></div>

            <div id="AnalyticsFundamentalsScreenerWidget" style="width: 100%; height: 400px"></div>
        </div>
    </div>
</div>
```

