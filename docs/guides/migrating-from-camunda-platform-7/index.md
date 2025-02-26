---
id: index
title: Pre-migration details
description: "Migrate process solutions developed for Camunda Platform 7 to run them on Camunda Platform 8."
keywords:
  [
    Camunda 8,
    Camunda 7,
    migration guide,
    transition,
    transition guide,
    Camunda Platform 7,
  ]
---

:::note
Migration of existing projects to Camunda Platform 8 is optional. Camunda Platform 7 still has ongoing [support](https://docs.camunda.org/enterprise/announcement/).
:::

This guide describes how to migrate process solutions developed for Camunda Platform 7 to run them on Camunda Platform 8, including:

- Differences in application architecture
- How process models and code can generally be migrated, whereas runtime and history data cannot
- How migration can be very simple for some models, but also marked limitations, where migration might get very complicated
- You need to adjust code that uses the workflow engine API
- How you might be able to reuse glue code
- Community extensions that can help with migration
- The Clean Delegate approach, which helps you write Camunda Platform 7 solutions that are easier to migrate

We are watching all customer migration projects closely and will update this guide in the future.

## What to expect

Before diving into concrete steps on migrating your models and code, let's cover some conceptual topics and migration readiness steps. The list below provides an outline of the sections in this guide:

- [Conceptual differences](./conceptual-differences.md)
- [Migration readiness](./migration-readiness.md)
- [Adjusting BPMN models](./adjusting-bpmn-models.md)
- [Adjusting DMN models](./adjusting-dmn-models.md)
- [Adjusting source code](./adjusting-source-code.md)

## Open issues

As described earlier in this guide, migration is an ongoing topic and this guide is far from complete. Open issues include the following:

- Describe implications on testing
- Discuss adapters for Java or REST client
- Discuss more concepts around BPMN:
  ** [Field injection](https://docs.camunda.org/manual/latest/user-guide/process-engine/delegation-code/#field-injection) that is using `camunda:field` available on many BPMN elements.
  ** Multiple instance markers available on most BPMN elements.
  ** `camunda:inputOutput` available on most BPMN elements.
  ** `camunda:errorEventDefinition` available on several BPMN elements.
- Discuss workload migrations (operations)
- Eventual consistency

[Reach out to us](/contact/) to discuss your specific migration use case.
