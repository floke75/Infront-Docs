---
title: "Quote List Filtered"
kind: example
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widgets > Market data widgets > Quote List > Quote List Filtered"
example_config: {"title":"Quote List Filtered","description":"","modify_date":"2023-04-28T07:32:24","owner":"","tags":[]}
source_url: "https://docs.infrontfinance.com/examples/Widgets/Widgets/Marketdatawidgets/QuoteList/QuoteListFiltered"
source_files: ["script.ts", "template.html", "config.json"]
---

# Quote List Filtered

## Script (script.ts)

```typescript
const quoteListOpts = new Infront.QuoteListWidgetOptions();
quoteListOpts.feed = 26;
quoteListOpts.showFilters = true;
quoteListOpts.preferredIssuers = ["BMW"];
quoteListOpts.sortable = true;
quoteListOpts.columns = [
  {
    name: "TICKER",
    hover: "FULL_NAME",
    flag: true
  },
  "BID",
  "STRIKE_PRICE",
  "EXPIRY_DATE",
  "ISSUER_FULL_NAME"
];
const dropdownOpts = new Infront.DropDownOptions();
dropdownOpts.title = "Data source";
dropdownOpts.closeOnClick = true;
dropdownOpts.sortAlphabetically = false;
dropdownOpts.list = ["DAX derivates", "Oslo derivatives"];
dropdownOpts.preSelectedItems = dropdownOpts.list[0];
dropdownOpts.onItemClicked = (item) => {   
  dropdownOpts.preSelectedItems = item;
  switch (item) {
    case dropdownOpts.list[0]: quoteListOpts.feed = 26; break;
    case dropdownOpts.list[1]: quoteListOpts.feed = 17971; break;
  }
  reInitList();
}
quoteListOpts.customDropDowns = [dropdownOpts];

let quoteListWidget = infront.quoteList("#quotelist", quoteListOpts);

window.reInitList = function() {
  const isChecked = function(element) { return document.getElementById(element).checked == true };
  if (quoteListWidget) quoteListWidget.destroy();
  quoteListOpts.showUnderlyings = isChecked("show-underlying");
  quoteListOpts.preferredUnderlying = quoteListOpts.showUnderlyings ? undefined : "ABB";
  quoteListOpts.showIssuers = isChecked("show-issuers");
  quoteListOpts.issuer = quoteListOpts.showIssuers ? undefined : "ABB";
  quoteListOpts.showExpiries = isChecked("show-expiries");
  quoteListWidget = infront.quoteList("#quotelist", quoteListOpts);
}
```

## Markup (template.html)

```html
<div class="cell-content cell-row">
  <h1>Description</h1>
  <p>This example shows how to filter QuoteListWidget by Underlying, Issuer or expiry date. QuoteListWidget supports adding extra filters by assigning the property customDropDowns.</p>
  <label>Show underlyings<input type="checkbox" id="show-underlying" onclick="reInitList()" checked></label>
  <label>Show issuers <input type="checkbox" id="show-issuers" onclick="reInitList()" checked></label>
  <label>Show expiry dates<input type="checkbox" id="show-expiries" onclick="reInitList()" checked></label>
</div>

<div class="cell-content  cell-row" id="quotelist"></div>
```

