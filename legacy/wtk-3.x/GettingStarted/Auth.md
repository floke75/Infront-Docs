---
title: "Authentication"
kind: legacy-widget
page_type: legacy-reference
product: "Infront Web Toolkit"
library_version: "3.x"
status: "legacy — superseded by the 4.x docs in ../../reference; Infront's own banner says this site is no longer updated"
legacy_page: "GettingStarted"
widget_id: "Auth"
source_url: "https://doc.infrontfinance.com/v3/GettingStarted#Auth"
---

# Authentication

As the toolkit runs on client side (browser), it is important to provide a server side authentication.
No matter what environment has been used, it is always the same.

The next steps are going to explain how to do a server-side authentication by example.

### 1. Getting the Access token

Access tokens are being used by toolkit to check login on client side.
In order to get one, you need to send a server side username, password, client ID and client secret to Infront Identity Server.
These parameters are provided by Infront and must only be used on the server side.

```javascript
var form = new Dictionary<string, string="">
{
    {"grant_type", "password"},
    {"username", "<SERVERSIDE_USER>"}, 
    {"password", "<PASSWORD>"},
    {"client_id", "<CLIENT_ID>"},
    {"client_secret", "<CLIENT_SECRET>"},
    {"scope", "openid read write"}
};
HttpResponseMessage tokenResponse = client.PostAsync("https://api.infrontservices.com/id/connect/token", new FormUrlEncodedContent(form)).Result;

if (tokenResponse.StatusCode == System.Net.HttpStatusCode.OK)
{
    var task = tokenResponse.Content.ReadAsStringAsync();
    task.Wait();
    JToken obj = JToken.Parse(task.Result);

    access_token = obj?["access_token"]?.ToString();
}</string,>
```

### 2. Initiate the toolkit with the access token

After getting the access token, it is possible to initiate the toolkit and connect using that token.

```javascript
infront = new Infront.UI({
    signed_token: "",
    token_type: 'IDP',
    secureConnection: Infront.ConnectionSecurity.Require,
    useDefaultStateStorage: true,
    language: 'sv',
    streaming: true
});
infront.registerEventObserver("onReady", function(){
    //Create widgets here
});
infront.registerEventObserver("onLoginFailed", function (event) {
    //Login failed - use event.message to get the error message
});
infront.init();
```

Click here to download a full demo project
