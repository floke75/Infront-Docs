---
title: "Rating Distribution"
kind: example
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widgets > ESG widgets > Rating Distribution"
description: "Displays an ESG rating distribution widget using EsgRatingDistributionWidgetOptions for a given instrument and sector."
tags: ["esg-rating-distribution-widget", "EsgRatingDistributionWidgetOptions", "AnalyticsInstrument", "SectorClassification", "widgets", "examples", "wtk", "requests"]
example_config: {"title":"Rating Distribution","description":"Displays an ESG rating distribution widget using EsgRatingDistributionWidgetOptions for a given instrument and sector.","modify_date":"2025-12-20T00:00:00","owner":"","tags":["esg-rating-distribution-widget","EsgRatingDistributionWidgetOptions","AnalyticsInstrument","SectorClassification","widgets","examples","wtk","requests"]}
source_url: "https://docs.infrontfinance.com/examples/Widgets/Widgets/ESGwidgets/RatingDistribution"
source_files: ["script.ts", "template.html", "config.json"]
---

# Rating Distribution

Displays an ESG rating distribution widget using EsgRatingDistributionWidgetOptions for a given instrument and sector.

## Script (script.ts)

```typescript
let options = new Infront.EsgRatingDistributionWidgetOptions();
options.instrument = new Infront.AnalyticsInstrument({"isin": "US0378331005"});
options.companyColor = 'orange';
options.sector = Infront.SectorClassification.Communication_MediaEntertainment;
options.avgCalculation = avgCalculation;
let widget = infront.esgRatingDistribution("#esgRatingDistributionWidget", options);
```

## Markup (template.html)

```html
<div class="cell-10-padding" id="esgRatingDistributionWidget">
       <div id="ratingWidget"></div>
</div>
```

