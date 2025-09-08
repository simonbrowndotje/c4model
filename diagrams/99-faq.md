---
layout: default
title: FAQ
parent: Diagrams
nav_order: 99
permalink: /diagrams/faq
---

# Frequently asked questions

## Should the lines represent dependencies or data flow?

This is your choice. Sometimes diagrams work better showing dependency relationships (e.g. uses, reads from, etc),
and sometimes data flow (e.g. customer update events) works better. Whichever you choose, make sure that the
description of the line matches the direction of the arrow.

It's also worth remembering that most relationships can be expressed either way, and the more explicit you can be,
the better. For example, describing a relationship as "sends customer update events to" can be more descriptive
than simply "customer update events".

## Will the diagrams become outdated quickly?

Due to the hierarchical nature of the C4 model, each diagram will change at a different rate.

- __System context diagram__: In most cases, the system context diagram will change very slowly, as this describes the 
landscape that the software system is operating within.
- __Container diagram__: Unless you're building a software system that makes heavy use of microservices or serverless 
lambdas/functions/etc, the container diagram will also change relatively slowly.
- __Component diagram__: For any software system under active development, the component diagrams may change frequently 
as the team adds, removes or restructures the code into cohesive components.
- __Code diagram__: The level 4 code (e.g. class) diagrams will potentially become outdated very quickly if the codebase is
under active development. For this reason, the recommendation is to (1) not create them at all or (2) generate them 
on-demand using tooling such as your IDE.

Of course, the above only applies when you are creating your C4 diagrams by hand.
Automatically generating your diagrams will ensure they are kept up to date and reflect reality at all times.
Possible approaches to do this include:

- __System landscape/context diagrams__: Using existing system/service catalogs (e.g. Backstage, ServiceNow, etc) as a source of data for identifying software systems and relationships.
- __Container diagrams__: Parsing log files or using OpenTelemetry data as a source of data for identifying microservices and relationships.
- __Component diagrams__: Static analysis/reverse-engineering of code as a source of data for identifying components and their relationships.
- __Deployment diagrams__: Parsing "infrastructure as code" definitions (e.g. Terraform, CloudFormation, etc) or reverse-engineering cloud environment configuration as a source of data for identifying deployment elements.
