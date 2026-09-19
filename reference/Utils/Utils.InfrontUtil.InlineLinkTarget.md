---
title: "InlineLinkTarget"
qualified_name: "Utils.InfrontUtil.InlineLinkTarget"
kind: class
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "Utils"
namespace: "Utils.InfrontUtil"
group: "InfrontUtil"
nav_path: "Utils > InfrontUtil > InlineLinkTarget"
source_url: "https://docs.infrontfinance.com/docs/classes/Utils.InfrontUtil.InlineLinkTarget.html"
defines: ["InlineLinkTarget"]
member_count: 2
members: ["accepts", "receiveMessage"]
member_groups:
  "Methods": ["accepts", "receiveMessage"]
---

# InlineLinkTarget

Utility-class for ad-hoc inline linking using the InterLibraryLink interfaces.

#### Implements

- Target

### Methods

#### accepts

```ts
accepts(): string[]
```

Target must return an array of all data types the widget accepts in a message.

##### Returns string[]

Implementation of InterLibraryLink.Target.accepts

#### receiveMessage

```ts
receiveMessage(msg: Message): void
```

Target must:

- Handle any message containing a data type returned by accepts()
- Disregard any message not containing a datatype returned by accepts()

##### Parameters

- msg: Message

##### Returns void

Implementation of InterLibraryLink.Target.receiveMessage
