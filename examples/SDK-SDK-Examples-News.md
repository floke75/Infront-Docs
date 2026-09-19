---
title: "News"
kind: example
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "SDK > SDK Examples > News"
description: "SDK example demonstrating how to retrieve and display news headlines and stories using the Infront SDK."
tags: ["sdk", "examples", "news", "sdk-example", "requests"]
example_config: {"title":"News","description":"SDK example demonstrating how to retrieve and display news headlines and stories using the Infront SDK.","modify_date":"2021-09-22T07:48:55","owner":"","tags":["sdk","examples","news","sdk-example","requests"]}
source_url: "https://docs.infrontfinance.com/examples/SDK/SDK/SDKExamples/News"
source_files: ["script.ts", "template.html", "style.css", "config.json"]
---

# News

SDK example demonstrating how to retrieve and display news headlines and stories using the Infront SDK.

## Script (script.ts)

```typescript
var unsubscribes;
var listElement;
var storyElement;

function unsubscribe() {
    if (unsubscribes) unsubscribes();
    unsubscribes = undefined;
}
function headlines(source, limit = 100, id = null) {
    emptyList();
    unsubscribe();
    unsubscribes = sdk.get(InfrontSDK.newsHeadlines({
        source: source,
        limit: limit,
        idHint: id,
        subscribe: true,
        onData: (news) => {
            let binding = {
                reInit: (items) => {
                    console.table(items);
                    for (let item of items) createHeadlineRow(item);
                },
                itemAdded: (item, index) => {
                    console.log("News added: ", item, "at", index);
                    createHeadlineRow(item, true);
                },
                itemMoved: (item, fromIndex, toIndex) => { console.log("News moved: ", item, fromIndex, toIndex); },
                itemRemoved: (item, index) => {
                    console.log("News removed: ", item, index);
                    removeRow(index);
                },
                itemChanged: (item, index) => { console.log("News updated: ", item, index); }
            };
            news.observe(binding);
        }
    }));
}

function getStory(headline) {
    sdk.get(InfrontSDK.newsStory({
        headline: headline,
        onData: (story) => {
            renderStory(story);
        }
    }));
}

function append(parentElement, value = undefined, type = "td", field = "innerText") {
    let cell = document.createElement(type);
    if (value !== undefined) {
        cell[field] = value;
    } else {
        cell[field] = "-";
    }
    parentElement.appendChild(cell);
    return cell;
}

function renderStory(story) {
    if (!storyElement) storyElement = document.getElementById("story");
    let bodyRect = document.body.getBoundingClientRect();
    let height = bodyRect.height * 70 / 100;
    let width = bodyRect.width * 70 / 100;
    storyElement.style.top = Math.round((bodyRect.height / 2) - (height / 2) + document.documentElement.scrollTop) + "px";
    storyElement.style.left = Math.round((bodyRect.width / 2) - (width / 2)) + "px";
    storyElement.style.height = height + "px";
    storyElement.style.width = width + "px";
    storyElement.parentElement.top = document.documentElement.scrollTop + "px";
    storyElement.parentElement.hidden = false;

    InfrontUtil.removeAllChildNodes(storyElement);
    if (story) {
        //Title
        append(storyElement, story.headline.headline, "h1");
        //Flag
        let flag = append(storyElement, "", "img");
        //Source
        let feed = append(storyElement, "-", "span");
        feed.className = "align-left";
        //Request feed info to get source details
        sdk.get(InfrontSDK.feedInfo({
            feed: story.headline.feed, infoType: "MetaData", onData: (feedInfo) => {
                feed.innerText = feedInfo[0].description;
                if (feedInfo[0].isoCountry) {
                    flag.src = `https://www.countryflags.io/${feedInfo[0].isoCountry}/flat/24.png`;
                } else {
                    flag.src = "https://icons.iconarchive.com/icons/wikipedia/flags/24/UN-United-Nations-Flag-icon.png"
                }
            }
        }));
        //Logo
        if (story.logo) append(storyElement, story.logo, "img", "src");
        //Date
        let date = append(storyElement, InfrontUtil.formatDateTime(story.headline.dateTime, "DD-MM-YYYY"), "span");
        date.className = "align-right";
        //Body
        append(storyElement, story.body, "span", "innerHTML");
    }
}

function hideStory() {
    if (!storyElement) storyElement = document.getElementById("story");
    storyElement.parentElement.hidden = true;
}

function createHeadlineRow(headline, onTop) {
    if (!listElement) listElement = document.getElementById("headlines");
    let row = document.createElement("tr");

    //symbols
    if (headline.symbols) {
        row.title = headline.symbols.map(symbol => symbol.ticker).join(', ');
    }

    //id
    append(row, headline.id);

    //feed
    append(row, headline.feed);

    //headline
    let cell = document.createElement("td");
    if (headline.url) {
        append(row, `<a target="_blank" href="${headline.url}">${headline.headline}">`, "td", "innerHTML");
    } else {
        append(row, headline.headline);
        if (!headline.isFlash) {
            row.onclick = () => {
                getStory(headline);
            }
        }
    }
    
    //body
    append(row, headline.url || headline.isFlash ? "No" : "Yes");
    if (!(headline.url || headline.isFlash)) row.className = "clickable";

    //date/time
    append(row, InfrontUtil.isToday(headline.dateTime) ? InfrontUtil.formatDateTime(headline.dateTime, "HH:mm") : InfrontUtil.formatDateTime(headline.dateTime, "dd.MM.YYYY HH:mm"));

    if (onTop) {
        listElement.insertBefore(row, listElement.firstElementChild);
    } else {
        listElement.appendChild(row);
    }
}

function removeRow(index) {
    if (!listElement) listElement = document.getElementById("headlines");
    listElement.removeChild(listElement.childNodes[index]);
}

function emptyList() {
    if (!listElement) listElement = document.getElementById("headlines");
    InfrontUtil.removeAllChildNodes(listElement);
}
```

## Markup (template.html)

```html
<div class="sidenav">
    <h1>Demos</h1>
    <a href="#" onclick="headlines({ feed: 18177, ticker: 'DNB' })">Symbol headlines</a>
    <a href="#" onclick="headlines([{ feed: 17921, ticker: 'VOLV B' }, { feed: 17921, ticker: 'ABB' }])">Symbols headlines</a>
    <a href="#" onclick="headlines([1189, 18182, 1160, 1020, 1038])">Feed headlines</a>
    <a href="#" onclick="unsubscribe()">Unsubscribe</a>
</div>

<div class="main">
    <h1>Infront SDK news demo</h1>
    <div class="news-container">
        <div class="list">
            <table>
                <thead>
                    <th>id</th>
                    <th>Feed</th>
                    <th>Headline</th>
                    <th>Has body</th>
                    <th>Time</th>
                </thead>
                <tbody id="headlines"></tbody>
            </table>
        </div>
        <div class="shade" onclick="hideStory()" hidden>
            <div class="story" id="story"></div>
        </div>
    </div>
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

