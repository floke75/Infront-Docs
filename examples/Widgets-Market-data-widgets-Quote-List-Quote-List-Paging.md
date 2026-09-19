---
title: "Quote List Paging"
kind: example
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widgets > Market data widgets > Quote List > Quote List Paging"
description: "Displays a quote list widget with paging functionality using QuoteListWidgetOptions."
tags: ["quote-list-widget", "QuoteListWidgetOptions", "widgets", "examples", "wtk", "requests"]
example_config: {"title":"Quote List Paging","description":"Displays a quote list widget with paging functionality using QuoteListWidgetOptions.","modify_date":"2023-04-28T07:32:27","owner":"","tags":["quote-list-widget","QuoteListWidgetOptions","widgets","examples","wtk","requests"]}
source_url: "https://docs.infrontfinance.com/examples/Widgets/Widgets/Marketdatawidgets/QuoteList/QuoteListPaging"
source_files: ["script.ts", "template.html", "style.css", "config.json"]
---

# Quote List Paging

Displays a quote list widget with paging functionality using QuoteListWidgetOptions.

## Script (script.ts)

```typescript
let totalCount = 0;
const pageSize = 5;
const opts = new Infront.QuoteListWidgetOptions();
opts.maxItems = pageSize;
opts.feed = 26;
opts.sortable = true;
opts.enableChangeStatusColors = true;
opts.instrumentTypes = ["STOCK"];
opts.columns = ["TICKER", "BID", "ASK", "OPEN", "Last"];
opts.onItemCountChange = function (count) {
  totalCount = count;
  document.getElementById("totalItems").innerText = totalCount;
  document.getElementById("displayedItems").innerText = (totalCount < widget.options.maxItems) ? totalCount : widget.options.maxItems;
};

let widget = infront.quoteList("#quotelist", opts);

window.showMore = function() {
  if (widget) {
    widget.setMaxItems(widget.options.maxItems += pageSize);
    if (widget.options.maxItems >= totalCount) {
      widget.options.maxItems = totalCount;
    }
    document.getElementById("displayedItems").innerText = (totalCount < pageSize) ? totalCount : widget.options.maxItems;
  }
}
```

## Markup (template.html)

```html
<div class="cell-content cell-row">
  <h1>Description</h1>
  <p>This example shows how to limit the number of rows, and use setMaxItems to implement paging functionality.</p>
</div>

<div class="cell-content">
  <div class="cell-row" id="quotelist"></div>
  <div class="show-more-container"> 
    Displaying <span id="displayedItems"></span> of <span id="totalItems"></span> 
    <a class="show-more-link  cell-pull-right" href="#" onclick="showMore();">show more...</a>
  </div>
</div>
```

## Styles (style.css)

```css
.show-more-link {
  border: 1px solid #26b1ee;
  background: #26b1ee;
  padding: 10px 10px 9px;
  margin-right: 0 !important;
  color: #fff !important;
  border-radius: 4px;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 400;
  margin-right: 30px;
  text-decoration: none;   
}}
```

