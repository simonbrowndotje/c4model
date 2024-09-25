---
layout: default
title: 2. Container diagram
parent: Diagrams
nav_order: 2
permalink: /diagrams/container
---

# Container diagram

Once you understand how your system fits in to the overall IT environment, a really useful next step is to zoom-in to
the system boundary with a Container diagram. A "container" is something like a server-side web application, 
single-page application, desktop application, mobile app, database schema, file system, etc. Essentially,
a container is a separately runnable/deployable unit (e.g. a separate process space) that executes code or stores data.

The Container diagram shows the high-level shape of the software architecture and how responsibilities are distributed
across it. It also shows the major technology choices and how the containers communicate with one another. It's a
simple, high-level technology focussed diagram that is useful for software developers and support/operations staff alike.

## Example

[![A container diagram](https://static.structurizr.com/workspace/36141/diagrams/Containers.png)](https://static.structurizr.com/workspace/36141/diagrams/Containers.png)

### Diagram key

[![A diagram key](https://static.structurizr.com/workspace/36141/diagrams/Containers-key.png)](https://static.structurizr.com/workspace/36141/diagrams/Containers-key.png)

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

This diagram says nothing about clustering, load balancers, replication, failover, etc because it will likely vary
across different environments (e.g. production, staging, development, etc). This information is better captured
via one or more [deployment diagrams](/diagrams/deployment).

<script type="application/javascript" src="https://code.jquery.com/jquery-3.7.1.slim.min.js"></script>
<script type="application/javascript" src="/assets/c4model.js"></script>
