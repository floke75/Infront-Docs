---
title: "Calendar"
kind: example
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "SDK > SDK Examples > Calendar"
description: "SDK example demonstrating how to retrieve and display financial calendar events using the Infront SDK."
tags: ["sdk", "examples", "calendar", "sdk-example", "requests"]
example_config: {"title":"Calendar","description":"SDK example demonstrating how to retrieve and display financial calendar events using the Infront SDK.","modify_date":"2021-05-31T07:19:25","owner":"","tags":["sdk","examples","calendar","sdk-example","requests"]}
source_url: "https://docs.infrontfinance.com/examples/SDK/SDK/SDKExamples/Calendar"
source_files: ["script.ts", "template.html", "style.css", "config.json"]
---

# Calendar

SDK example demonstrating how to retrieve and display financial calendar events using the Infront SDK.

## Script (script.ts)

```typescript
var calendarElement;

function getCalendar(sources) {
  clearEvents();
  sdk.get(InfrontSDK.financialCalendar({
    source: sources,
    from: new Date(),
    to: InfrontUtil.addMonths(new Date(), 6),
    onData: (events) => {
      for (let event of events) addEvent(event);
    }
  }));
}

function getFeedMetaData(feed, callback) {
  sdk.get(InfrontSDK.feedInfo({
    infoType: "MetaData",
    feed: feed,
    onData: data => callback(data && data[0] ? data[0].description : "-")
  }));
}

function append(parentElement, value = undefined, type = "td", field = "innerText") {
  let cell = document.createElement(type);
  if (value !== undefined) cell[field] = value;
  parentElement.appendChild(cell);
  return cell;
}

function addEvent(event) {
  if (!calendarElement) calendarElement = document.getElementById("calendar");
  let row = document.createElement("tr");
  append(append(row, ""), `https://www.countryflags.io/${event.country}/flat/24.png`, "img", "src");
  append(row, event.symbolId.ticker || "-");
  append(row, event.description);
  getFeedMetaData(event.feed, desc => append(row, desc));
  append(row, event.type);
  append(row, event.categoryDescription);
  append(row, InfrontUtil.formatDateTime(event.dateTime, "DD-MM-YYYY"));
  calendarElement.appendChild(row);
}

function clearEvents() {
  if (!calendarElement) calendarElement = document.getElementById("calendar");
  InfrontUtil.removeAllChildNodes(calendarElement);
}
```

## Markup (template.html)

```html
<div class="sidenav">
    <h1>Demos</h1>
    <a href="#" onclick="getCalendar({feed: 18177, ticker: 'DNB'})">Symbol events</a>
    <a href="#" onclick="getCalendar([
        { feed: 18177, ticker: 'DNB' },
        { feed: 18177, ticker: 'DNO' },
        { feed: 18177, ticker: 'KCC' },
        { feed: 18177, ticker: 'ABT' },
        { feed: 26, ticker: 'BMW' },
        { feed: 26, ticker: 'MRK' },
        { feed: 26, ticker: 'VOW3' },
        { feed: 17921, ticker: 'ABB' },
        { feed: 17921, ticker: 'VOLV B' },
        { feed: 17921, ticker: 'HM B' }
    ])">Symbols events</a>
    <a href="#" onclick="getCalendar('NO')">Country events</a>
    <a href="#" onclick="getCalendar(['NO', 'SE'])">Countries events</a>
    <a href="#" onclick="getCalendar(930)">Feed events</a>
    <a href="#" onclick="getCalendar([930])">Feeds events</a>
</div>

<div class="main">
    <h1>Infront SDK Financial Calendar demo</h1>
    <table>
        <thead>
            <th>Flag</th>
            <th>Symbol</th>
            <th>Description</th>
            <th>Source</th>
            <th>Type</th>
            <th>Category</th>
            <th>Time</th>
        </thead>
        <tbody id="calendar"></tbody>
    </table>
</div>
```

## Styles (style.css)

```css
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

/* The sidebar menu */
.sidenav {
    height: 100%;
    /* Full-height: remove this if you want "auto" height */
    width: 160px;
    /* Set the width of the sidebar */
    position: fixed;
    /* Fixed Sidebar (stay in place on scroll) */
    z-index: 1;
    /* Stay on top */
    top: 0;
    /* Stay at the top */
    left: 0;
    background-color: #111;
    /* Black */
    overflow-x: hidden;
    /* Disable horizontal scroll */
    padding-top: 20px;
    color: #f1f1f1;
    padding: 3px 8px 6px 16px;
}

/* The navigation menu links */

.sidenav a {
    padding: 6px 8px 6px 16px;
    text-decoration: none;
    font-size: 21px;
    color: #818181;
    display: block;
}

/* When you mouse over the navigation links, change their color */

.sidenav a:hover {
    color: #f1f1f1;
}

/* Style page content */

.main {
    margin-left: 200px;
    /* Same as the width of the sidebar */
    padding: 0px 10px;
}

/* On smaller screens, where height is less than 450px, change the style of the sidebar (less padding and a smaller font size) */

@media screen and (max-height: 450px) {
    .sidenav {
        padding-top: 15px;
    }
    .sidenav a {
        font-size: 18px;
    }
}

@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
body {
    font-family: Roboto, sans-serif;
}

html, body {
    height: 100%;
    max-height: 100%;
}

input, button {
    font-family: inherit;
}

table {
    border-collapse: collapse;
    width: 100%;
}

th, td {
    text-align: left;
    padding: 8px;
}

tr:nth-child(even) {
    background-color: #f2f2f2;
}

#free-text-search {
    padding: 6px 8px 6px 4px;
    width: 136px;
}

.news-container {
    height: 100%;
    margin: auto;
    padding: 10px;
}

.list {
    width: 75%;
    float: left;
    overflow-y: scroll;
    height: 720px;
}

.story {
    margin-left: 75%;
    padding-left: 10px;
    background-color: #f2f2f2;
}

.align-left {
    float: left;
}

.align-right {
    float: right;
}

.clickable {
    cursor: pointer;
}

.disabled {
    pointer-events: none;
}

.col-50 {
    width: 50%;
    float: left;
}

.tooltip {
    visibility: hidden;
    width: auto;
    background-color: #555;
    color: #fff;
    border-radius: 6px;
    padding: 5px;
    position: absolute;
    z-index: 1;
    opacity: 0;
    transition: opacity 0.3s;
    display: inline-block;

}

.tooltip::after {
    content: "";
    position: absolute;
    bottom: 100%;
    left: 10%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent transparent #555 transparent;
}

.tooltip-hover {
    visibility: visible;
    opacity: 0.9;
}
```

