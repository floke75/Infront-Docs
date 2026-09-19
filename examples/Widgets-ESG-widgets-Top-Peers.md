---
title: "Top Peers"
kind: example
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widgets > ESG widgets > Top Peers"
description: "Displays an ESG top peers widget using EsgTopPeersWidgetOptions for a given instrument."
tags: ["esg-top-peers-widget", "EsgTopPeersWidgetOptions", "AnalyticsInstrument", "widgets", "examples", "wtk", "requests"]
example_config: {"title":"Top Peers","description":"Displays an ESG top peers widget using EsgTopPeersWidgetOptions for a given instrument.","modify_date":"2025-12-20T00:00:00","owner":"","tags":["esg-top-peers-widget","EsgTopPeersWidgetOptions","AnalyticsInstrument","widgets","examples","wtk","requests"]}
source_url: "https://docs.infrontfinance.com/examples/Widgets/Widgets/ESGwidgets/TopPeers"
source_files: ["script.ts", "template.html", "config.json"]
---

# Top Peers

Displays an ESG top peers widget using EsgTopPeersWidgetOptions for a given instrument.

## Script (script.ts)

```typescript
let options = new Infront.EsgTopPeersWidgetOptions();
options.instrument = new Infront.AnalyticsInstrument({"isin": "US0378331005"});
options.limit = 10;
options.sortOrder = "DESC";

let widget = infront.esgTopPeersWidget("#esgTopPeers", options);
```

## Markup (template.html)

```html
<div class="cell-10-padding">
          <div id="esgTopPeers"></div>
</div>
```

