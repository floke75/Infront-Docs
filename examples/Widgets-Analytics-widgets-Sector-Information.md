---
title: "Sector Information"
kind: example
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widgets > Analytics widgets > Sector Information"
description: "Displays a sector information widget using AnalyticsSectorInformationWidget and related selectors."
tags: ["sector-information-widget", "AnalyticsSectorInformationWidget", "widgets", "examples", "wtk", "requests"]
example_config: {"title":"Sector Information","description":"Displays a sector information widget using AnalyticsSectorInformationWidget and related selectors.","modify_date":"2025-12-08T12:43:30","owner":"","tags":["sector-information-widget","AnalyticsSectorInformationWidget","widgets","examples","wtk","requests"]}
source_url: "https://docs.infrontfinance.com/examples/Widgets/Widgets/Analyticswidgets/SectorInformation"
source_files: ["script.ts", "template.html", "config.json"]
---

# Sector Information

Displays a sector information widget using AnalyticsSectorInformationWidget and related selectors.

## Script (script.ts)

```typescript
const widget = infront.analyticsSectorInformationWidget('analyticsSectorInformationWidget', {
    // instrument: = {ticker: 'BMW',feed: 26},
    keyfigureSource: 'INFRONT',
    companySource: 'INFRONT',
    currency: 'EUR',
    minimumMarketCap: { currency: 'EUR', value: 5_000_000 },
    onInstrumentClicked: (symbolId) => {
        console.log('[AnalyticsSectorInformationWidget] onInstrumentClicked', symbolId);
    },
    columnDefOverwrites: {
        'Name': {
            overwrites: {
                onColumnClicked: function() {
                    console.log('[AnalyticsSectorInformationWidget] onColumnClicked Name', arguments);
                },
            },
            strategy: 'merge-prio',
        },
    },
});

const sectorWidget = infront.subSectorMultiSelectWidget('sectorWidget', {
    closeOnSelect: true,
    includeCount: true,
    showArrow: true,
    onSectorsSelected: (selection) => {
        console.log('[SubSectorMultiSelectWidget] Set sector(s)', { selection });
        widget.modify(selection);
    },
});

const instrumentSectorWidget = infront.subSectorSelectWidget('instrumentSectorWidget', {
    closeOnSelect: true,
    showFactoryIcon: true,
    onSectorSelected: (selection) => {
        console.log('[SubSectorSelectWidget] Set sector(s)', { selection });
        widget.modify(selection);
    },
});

const regionWidget = infront.regionSelectWidget('regionWidget', {
    closeOnSelect: true,
    showArrow: true,
    // customRegions: [
    //     { code: 'US-FR-BE-NL-DE', name: 'US + Central Europe', countryCode: ['US', 'FR', 'BE', 'NL', 'DE'] },
    //     { code: 'FR-BE-NL-DE', name: 'Central Europe', countryCode: ['FR', 'BE', 'NL', 'DE'] },
    // ],
    onRegionSelected: sectorRegion => {
        console.log('[RegionSelectWidget] Set region', { sectorRegion });
        widget.modify({ sectorRegion });
        sectorWidget.modify({
            filterOnRegionCodes: sectorRegion.regionCode,
            filterOnCountryCodes: sectorRegion.countryCode,
        });
    },
});
```

## Markup (template.html)

```html
<div class="cell-flex-row">
    <div class="cell-flex-column">
        <div class="cell-content">
            <div class="cell-flex-row cell-flex-collapse cell-flex-align-middle">
                <div class="cell-flex-column cell-flex-shrink">
                    Sector: <div id="sectorWidget"></div> <div id="instrumentSectorWidget"></div>
                </div>

                <div class="cell-flex-column">
                    Region: <div id="regionWidget"></div>
                </div>
            </div>

            <div class="cell-flex-row">
                <div class="cell-flex-column">
                    <div id="analyticsSectorInformationWidget" style="height: 400px;"></div>
                </div>
            </div>
        </div>
    </div>
</div>
```

