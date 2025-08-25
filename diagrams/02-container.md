---
layout: default
title: 2. Container diagram
parent: Diagrams
nav_order: 2
permalink: /diagrams/container
---

# Container diagram

Once you understand how your system fits in to the overall IT environment, a useful next step is to zoom in to
the system boundary with a container diagram. In C4, a [container](/abstractions/container) is an application or a data store.
For example, a server-side web application, a client-side single-page application, a desktop application,
a mobile app, a database schema, a folder on a file system, an Amazon Web Services S3 bucket, etc.

The container diagram shows the high-level shape of the software architecture and how responsibilities are distributed
across it. It also shows the major technology choices and how the containers communicate with one another. It's a
simple, high-level technology focussed diagram that is useful for software developers and support/operations staff alike.

## Example

[![A container diagram](/images/examples/Containers.png)](/images/examples/Containers.png)

### Diagram key

[![A diagram key](/images/examples/Containers-key.png)](/images/examples/Containers-key.png)

## Scope

A single software system.

## Primary elements

Containers within the software system in scope.

## Supporting elements

People and software systems directly connected to the containers.

## Intended audience

Technical people inside and outside the software development team; including software architects,
developers and operations/support staff.

## Recommended?

Yes, a container diagram is recommended for all software development teams.

## Notes

This diagram says very little about deployment aspects such as clustering, load balancers, replication, failover, etc
because it will likely vary across different environments (e.g. production, staging, development, etc).
Deployment information is better captured via one or more [deployment diagrams](/diagrams/deployment), one per environment.