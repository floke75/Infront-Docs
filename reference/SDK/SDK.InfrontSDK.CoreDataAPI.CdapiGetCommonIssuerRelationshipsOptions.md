---
title: "CdapiGetCommonIssuerRelationshipsOptions"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiGetCommonIssuerRelationshipsOptions"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiGetCommonIssuerRelationshipsOptions"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiGetCommonIssuerRelationshipsOptions.html"
defines: ["CdapiGetCommonIssuerRelationshipsOptions"]
member_count: 6
members: ["id?", "lei?", "onData?", "onError?", "onFinally?", "relation_type_code?"]
member_groups:
  "Properties": ["id?", "lei?", "onData?", "onError?", "onFinally?", "relation_type_code?"]
related_types: ["SDK.InfrontSDK.CoreDataAPI.CdapiCommonIssuersData"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiCommonIssuersData", "SDK.InfrontSDK.CoreDataAPI.CdapiGetCommonIssuerRelationshipsOptionsRelationTypeCode", "SDK.InfrontSDK.CoreDataAPI.cdapiGetCommonIssuerRelationships"]
---

# CdapiGetCommonIssuerRelationshipsOptions

Request options for [cdapiGetCommonIssuerRelationships](./SDK.InfrontSDK.CoreDataAPI.cdapiGetCommonIssuerRelationships.md)

```ts
interface CdapiGetCommonIssuerRelationshipsOptions {
    id?: string;
    lei?: string;
    onData?: CoreDataRequestSuccessCallback<CdapiCommonIssuersData>;
    onError?: CoreDataRequestErrorCallback<CdapiCommonIssuersData>;
    onFinally?: CoreDataRequestFinallyCallback<CdapiCommonIssuersData>;
    relation_type_code?: CdapiGetCommonIssuerRelationshipsOptionsRelationTypeCode;
}
```

#### Hierarchy

- CdapiCommonRequestOptions<CdapiCommonIssuersData>

  - CdapiGetCommonIssuerRelationshipsOptions

### Properties

#### `Optional` ` Readonly`id

```ts
id?: string
```

the id of the issuer you search for the relationship

#### `Optional` ` Readonly`lei

```ts
lei?: string
```

the lei of the issuer you search for the relationship

#### `Optional` onData

```ts
onData?: CoreDataRequestSuccessCallback<CdapiCommonIssuersData>
```

A callback called when a data request has completed succesfully.

Inherited from Infront.CdapiCommonRequestOptions.onData

#### `Optional` onError

```ts
onError?: CoreDataRequestErrorCallback<CdapiCommonIssuersData>
```

A callback called when an error occurred trying to make the request.

Inherited from Infront.CdapiCommonRequestOptions.onError

#### `Optional` onFinally

```ts
onFinally?: CoreDataRequestFinallyCallback<CdapiCommonIssuersData>
```

A callback called when the request is finished, either because data was received,
error occurred, or the request was aborted/unsubscribed.

Inherited from Infront.CdapiCommonRequestOptions.onFinally

#### `Optional` ` Readonly`relation_type_code

```ts
relation_type_code?: CdapiGetCommonIssuerRelationshipsOptionsRelationTypeCode
```

type of relation
