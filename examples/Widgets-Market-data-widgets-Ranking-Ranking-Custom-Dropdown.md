---
title: "Ranking Custom Dropdown"
kind: example
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widgets > Market data widgets > Ranking > Ranking Custom Dropdown"
tags: ["ranking-widget", "RankingWidgetOptions", "DropDownOptions", "widgets", "examples", "wtk", "requests"]
example_config: {"title":"Ranking Custom Dropdown","description":"","modify_date":"2021-09-01T11:02:57","owner":"","tags":["ranking-widget","RankingWidgetOptions","DropDownOptions","widgets","examples","wtk","requests"]}
source_url: "https://docs.infrontfinance.com/examples/Widgets/Widgets/Marketdatawidgets/Ranking/RankingCustomDropdown"
source_files: ["script.ts", "template.html", "config.json"]
---

# Ranking Custom Dropdown

## Script (script.ts)

```typescript
let opts: Infront.RankingWidgetOptions; 
let rankingWidget: Infront.RankingWidget;


const dropdownList = [
        { label: 'Large Cap', customRanking: Infront.CustomRanking.LARGE_CAP },
        { label: 'Mid Cap', customRanking: Infront.CustomRanking.MID_CAP },
        { label: 'Small Cap', customRanking: Infront.CustomRanking.SMALL_CAP },
        { label: 'First North', customRanking: Infront.CustomRanking.FIRST_NORTH },
        { label: 'Nordic Growth Market', feed: 17938 },
        { label: 'Spotlight', feed: 18051 },
    ];

const defaultSelectedIndex = 0;
let selectedDropdownItem = dropdownList[defaultSelectedIndex];
let selectedRanking = selectedDropdownItem.customRanking;
let selectedFeed = selectedDropdownItem['feed'];
const defaultFeed = 17921;

const dropDownOpts = new Infront.DropDownOptions();
dropDownOpts.list = dropdownList;
dropDownOpts.preSelectedItems = [selectedDropdownItem];
dropDownOpts.title = selectedDropdownItem.label;
dropDownOpts.selectionUpdatesTitle = true;
dropDownOpts.closeOnClick = true;
dropDownOpts.itemLabelPropertyKeys = ['label'];
dropDownOpts.onItemClicked = (item: any) => {
    opts = Object.assign({}, opts); // remove ref.
    selectedDropdownItem = item;
    selectedRanking = item['customRanking'];
    selectedFeed = item['feed'];
    opts.customRanking = selectedRanking;
    opts.feed = selectedFeed ? selectedFeed : defaultFeed;
    if(rankingWidget) {
        rankingWidget.destroy();
        rankingWidget = infront.rankingWidget("#ranking", opts) as Infront.RankingWidget;
    }
};

opts = new Infront.RankingWidgetOptions();
opts.sortOrder = Infront.SortOrder.Asc;
opts.rows = 10;
opts.instrumentTypes = ["STOCK"];
opts.widgetTitle = "Ranked";
opts.enablePeriodSelector = false;
opts.customRanking = selectedRanking;
opts.feed = selectedFeed ? selectedFeed : defaultFeed;
const dropdown = infront.dropDownWidget('#dropdown', dropDownOpts, infront.languageHandler);
rankingWidget = infront.rankingWidget("#ranking", opts) as Infront.RankingWidget;
```

## Markup (template.html)

```html
<div class="cell-row">
	<div class="cell cell--w8">
		<div id="dropdown"></div>
		<div id="ranking" class="cell-content"></div>
	</div>
</div>
```

