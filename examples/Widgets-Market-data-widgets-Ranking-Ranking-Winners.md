---
title: "Ranking Winners"
kind: example
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widgets > Market data widgets > Ranking > Ranking Winners"
tags: ["ranking-widget", "RankingWidgetOptions", "widgets", "examples", "wtk", "requests"]
example_config: {"title":"Ranking Winners","description":"","modify_date":"2021-09-01T11:04:56","owner":"","tags":["ranking-widget","RankingWidgetOptions","widgets","examples","wtk","requests"]}
source_url: "https://docs.infrontfinance.com/examples/Widgets/Widgets/Marketdatawidgets/Ranking/RankingWinners"
source_files: ["script.ts", "template.html", "config.json"]
---

# Ranking Winners

## Script (script.ts)

```typescript
const opts = new Infront.RankingWidgetOptions();
opts.feed = 26;
opts.sortOrder = Infront.SortOrder.Asc;
opts.rows = 10;
opts.instrumentTypes = ["STOCK"];
opts.widgetTitle = "Ranked";
const widget = infront.rankingWidget("#ranking", opts);
```

## Markup (template.html)

```html
<div class="cell-row">
	<div class="cell cell--w8">
		<div id="ranking" class="cell-content"></div>
	</div>
</div>
```

