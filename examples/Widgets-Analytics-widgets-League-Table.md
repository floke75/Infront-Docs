---
title: "League Table"
kind: example
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widgets > Analytics widgets > League Table"
example_config: {"title":"League Table","description":"","modify_date":"2020-12-06T15:59:46","owner":"","tags":[]}
source_url: "https://docs.infrontfinance.com/examples/Widgets/Widgets/Analyticswidgets/LeagueTable"
source_files: ["script.ts", "template.html", "config.json"]
---

# League Table

## Script (script.ts)

```typescript
let opts = new Infinancials.LeagueTableWidgetOptions();
opts.type = Infront.UniverseType.REGION;//# Default
opts.region = InfinancialsConstants.Regions.WORLD;
// opts.marketPlaces = ["BDCS","OSS"];
opts.country = ["FRA","GBR","ITA"];
opts.nbtop = InfinancialsConstants.Utils.NB_10;
opts.nbbot = InfinancialsConstants.Utils.NB_0;
opts.forceUniverse = true;
let widget = visuaI.LeagueTableWidget("#leagueTable-widget", opts);
```

## Markup (template.html)

```html
<div class="cell-row">
    <div class="cell cell--w12">
        <div class="cell-content" id="leagueTable-widget"></div>
    </div>
</div>
```

