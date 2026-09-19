---
title: "News Custom Popup"
kind: example
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widgets > Market data widgets > News > News Custom Popup"
tags: ["news-list-widget", "NewsListWidgetOptions", "widgets", "examples", "wtk", "requests", "sdk"]
example_config: {"title":"News Custom Popup","description":"","modify_date":"2023-04-28T07:31:22","owner":"","tags":["news-list-widget","NewsListWidgetOptions","widgets","examples","wtk","requests","sdk"]}
source_url: "https://docs.infrontfinance.com/examples/Widgets/Widgets/Marketdatawidgets/News/NewsCustomPopup"
source_files: ["script.ts", "template.html", "style.css", "config.json"]
---

# News Custom Popup

## Script (script.ts)

```typescript
const opts = new Infront.NewsListWidgetOptions();
opts.instrument = new Infront.Instrument(18177, "INFRO");
opts.columns = ["TIME", "HEADLINE", "SHORT_SOURCE"];
opts.streaming = true;
opts.paging = true;
opts.pageItems = 12;
opts.useLightbox = false;
opts.onNewsItemSelected = (item => getNewsBody(item))

function getNewsBody(newsItem: Infront.HeadlineItem) {
    openPopup();
    infront.sdk.get(InfrontSDK.newsStory(
        {
            id: newsItem.id,
            feed: newsItem.feed,
            headline: undefined, 
            onData: (data) => {
                populateNewsPopup(data);
            }
        }
    ));
};

function populateNewsPopup(data: {body: string, headline: {
    dateTime: Date, 
    feed: number,
    headline: string,
    isUpdated: boolean,
    newsId: string, 
    storyNumber: number,
    streamingId: string,
    symbols: any[]
}}) {
    setNewsBody(data.body);
    setNewsDate(data.headline.dateTime);
    setNewsHeadline(data.headline.headline);

}

function setNewsHeadline(headline: string) {
    const headlineElm = document.getElementById("news-headline");
    headlineElm.innerHTML = headline;
}

function setNewsDate(date: Date) {
    const dateElm = document.getElementById("news-date");
    dateElm.innerHTML = `${date.getDate()}. ${date.toLocaleString('default', { month: 'long' })} ${date.getFullYear()}  | ${date.toLocaleTimeString('en-US')}`
}


function setNewsBody(newsBody: string) {
    const bodyElm = document.getElementById("news-body");
    bodyElm.innerHTML = newsBody;
}

function openPopup() {
    const popupElm = document.getElementById("newsPopup");
    popupElm.classList.add("cell-popup--open");
    document.body.style.overflow = "hidden";
}

function closePopup() {
    const popupElm = document.getElementById("newsPopup");
    popupElm.classList.remove("cell-popup--open");
    document.body.style.overflow = "auto";
}
const widget = infront.newsListWidget("#newsWidget", opts);
```

## Markup (template.html)

```html
<div class="cell-row">
	<div class="cell cell--w12">
		<div id="newsWidget" class="cell-content"></div>
	</div>
</div>
<!--POPUP FOR NEWS-->
<div id="newsPopup" class="cell-popup">
	<div class="cell-popup__content">
		<button onclick="closePopup()">Close</button>
		<h1 id="news-headline"></h1>
		<span id="news-date" class="news-popup__date"></span>
		<div id="news-body"></p>
	</div>
</div>
```

## Styles (style.css)

```css
 * {
     float: none !important;
     box-sizing: border-box !important;
 }
 
 .cell-popup {
     position: fixed;
     height: 100vh;
     width: 100vw;
     top: 0;
     left: 0;
     right: 0;
     bottom: 0;
     background-color: rgba(0,0,0, 0.5);
     display: none;
     overflow: auto;
     padding: 16px;
 }

 .cell-popup__content {
     width: 80%;
     height: auto;
     min-height: 90%;
     background-color: white;
     padding: 16px;
     position: relative;
     margin-top: 5%;
     margin-bottom: 5%;
     left: 50%;
     transform: translateX(-50%);
     display: flex;
     flex-direction: column;
 }

 .cell-popup--open {
     display: block;
 }
```

