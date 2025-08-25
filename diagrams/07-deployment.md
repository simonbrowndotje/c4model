---
layout: default
title: Deployment diagram
parent: Diagrams
nav_order: 7
permalink: /diagrams/deployment
---

# Deployment diagram

A deployment diagram allows you to illustrate how instances of software systems and/or containers in the static model
are deployed on to the infrastructure within a given __deployment environment__
(e.g. production, staging, development, etc).
It's based upon a [UML deployment diagram](https://en.wikipedia.org/wiki/Deployment_diagram).

A __deployment node__ represents where an instance of a software system/container is running;
perhaps physical infrastructure (e.g. a physical server or device), virtualised infrastructure
(e.g. IaaS, PaaS, a virtual machine), containerised infrastructure (e.g. a Docker container),
an execution environment (e.g. a database server, Java EE web/application server, Microsoft IIS), etc.
Deployment nodes can be nested.

You may also want to include __infrastructure nodes__ such as DNS services, load balancers, firewalls, etc.

Feel free to use icons provided by Amazon Web Services, Azure, etc to complement your deployment diagrams ...
just make sure any icons you use are included in your diagram key/legend.

## Example 1

[![A deployment diagram](/images/examples/Deployment-Development.png)](/images/examples/Deployment-Development.png)

### Diagram key

[![A diagram key](/images/examples/Deployment-Development-key.png)](/images/examples/Deployment-Development-key.png)

## Example 2

[![A deployment diagram](/images/examples/Deployment-Live.png)](/images/examples/Deployment-Live.png)

### Diagram key

[![A diagram key](/images/examples/Deployment-Live-key.png)](/images/examples/Deployment-Live-key.png)

## Example 3

[![A deployment diagram](/images/examples/Deployment-AmazonWebServices.png)](/images/examples/Deployment-AmazonWebServices.png)

### Diagram key

[![A diagram key](/images/examples/Deployment-AmazonWebServices-key.png)](/images/examples/Deployment-AmazonWebServices-key.png)

## Scope

One or more software systems within a single deployment environment (e.g. production, staging, development, etc).

## Primary and supporting elements

Deployment nodes, software system instances, and container instances.

## Supporting elements

Infrastructure nodes used in the deployment of the software system.

## Intended audience

Technical people inside and outside of the software development team; including software architects, developers,
infrastructure architects, and operations/support staff.

## Recommended?

Yes.