---
title: "WTK — Authentication"
kind: guide
page_type: guide
product: "Infront Web Toolkit"
version: "4.3.1"
source_url: "https://docs.infrontfinance.com/docs/index.html"
library: "WTK"
guide_section: "Authentication"
guide_order: 4
part_of: "getting-started"
---

# WTK — Authentication

### 1. Getting the Access token

Access tokens are being used by toolkit to check login on client side. In order to get one, you need to send a server side username, password, client ID and client secret to Infront Identity Server. These parameters are provided by Infront and must only be used on the server side.

```ts
var form = new Dictionary
{
    {"grant_type", "password"},
    {"username", "<SERVERSIDE_USER>"}, 
    {"password", "<PASSWORD>"},
    {"client_id", "<CLIENT_ID>"},
    {"client_secret", "<CLIENT_SECRET>"},
    {"scope", "openid"}
};
HttpResponseMessage tokenResponse = client.PostAsync("https://api.infrontservices.com/id/connect/token", new FormUrlEncodedContent(form)).Result;

if (tokenResponse.StatusCode == System.Net.HttpStatusCode.OK)
{
    var task = tokenResponse.Content.ReadAsStringAsync();
    task.Wait();
    JToken obj = JToken.Parse(task.Result);

    access_token = obj?["access_token"]?.ToString();
}
```

### 2. Initiate the toolkit with the access token

After getting the access token, it is possible to initiate the toolkit and connect using that token.

```ts
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
```
