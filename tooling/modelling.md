---
layout: default
title: Modelling
parent: Tooling
nav_order: 1
permalink: /tooling/modelling
---

# Modelling

The C4 model can be used irrespective of whether you use a diagramming or modelling tool, but there are some
interesting opportunities when you progress from diagramming to modelling. With a modelling tool,
you're building up a non-visual model of your software architecture
(a single definition of all elements and the relationships between them), and then creating different views
(that become diagrams) on top of that model. This requires a little more rigour, but the problems associated with diagramming tools can be resolved -
modelling tools can understand the semantics of what you're trying to do, provide additional assistance,
and renaming elements/relationships is easy.

Software architecture models are essentially just [directed graphs](https://en.wikipedia.org/wiki/Directed_graph),
consisting of nodes and edges, with diagrams showing a subset of the graph. Once you see the separation of the model
(which is just structured data) and the views (which are rendered as diagrams), you quickly see there are a number of
interesting opportunities that arise:

- Creating alternative visualisations to help understand large and complicated architecture models - see [Does the C4 model scale?](/faq#does-the-c4-model-scale) for more.
- Querying the model.
- Exporting the model to other tools.
- etc

A model is just data! And we, as software developers, have an endless supply of tools to visualise and manipulate that data.

## Tools

Here are some modelling tools that support the C4 model.

|------|-------------|
| Tool | Description |
|------|-------------|
| [Archi](https://www.archimatetool.com/blog/2020/04/18/c4-model-architecture-viewpoint-and-archi-4-7/)  | The Open Source modelling toolkit for creating ArchiMate models and sketches. Used by Enterprise Architects everywhere. |
| [C4InterFlow](https://github.com/SlavaVedernikov/C4InterFlow) | Architecture as Code (AaC) framework that generates diagrams and lets you analyse Application Architecture. Inspired by C4 Model. |
| [Gaphor](https://gaphor.org) | A picture is worth a thousand words. Describe and document your applications and systems with Gaphor to enhance knowledge sharing. |
| [Model](https://github.com/goadesign/model) | Create your software architecture models and diagrams in Go. |
| [Overarch](https://github.com/soulspace-org/overarch) | Overarch provides a data model for the holistic description of a software system, opening multiple use cases on the model data. Supports C4 and UML diagram generation with PlantUML. |
| [pumla](https://github.com/DrMarkusVoss/pumla/blob/main/test/examples/C4example/pumlaC4Example.md) | pumla - systematic re-use of model elements described with PlantUML. |
| [PyStructurizr](https://github.com/nielsvanspauwen/pystructurizr) | A Python DSL inspired by Structurizr, intended for generating C4 diagrams. |
| [RDB modeling](https://rdbmodel.github.io) | This application allows to create and visualize software architecture using a simplified version of the C4 model and YAML. |
| <a href="https://docs.structurizr.com"><img src="/tooling/logos/structurizr.png" alt="Structurizr" class="toolingLogo" /></a> | Structurizr builds upon “diagrams as code”, allowing you to create multiple software architecture diagrams using the C4 model, in a variety of rendering tools, from a single model. |
