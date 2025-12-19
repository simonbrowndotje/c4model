---
layout: default
title: Tooling
nav_order: 50
has_children: false
permalink: /tooling
has_toc: false
---

# Tooling

For design sessions, you might find a whiteboard or flip chart paper better for collaboration, and iterating quickly.
For long-lived documentation, there are a number of tools can help create software architecture diagrams based upon
the C4 model. Here are some of the questions you should ask yourself when looking at tooling:

- Who are the diagram authors, and how technical are they?
- Who is the diagram audience, and how will they access the diagrams/documentation?
- [Diagramming](#diagramming) or [modelling](#modelling)?
- A "drag and drop" UI or "diagrams as code"?
- Data stored in git next to your source code or stored in the tool/cloud service?
- Easy to diff source to use in pull requests?
- Open or closed data format?
- Interactive or static diagrams?
- Free or paid?
- Open or closed source?
- Cloud or self-hosted?
- Short-lived or long-lived documentation?
- Team only diagramming or enterprise-wide modelling?

## Diagramming

As an industry, we've tended to prefer diagramming over modelling, primarily because the barrier to entry is relatively
low, and it's seen as a much simpler task. But there are a number of major problems with using diagramming tools for
software architecture diagrams:

1. The domain language of diagramming tools is "boxes and lines", which means:
    - They can't provide any assistance or validation of your diagrams.
    - You can't query the diagrams (e.g. "show me all dependencies of component X").
2. Reusing diagram elements is done via copy-paste - if you rename a box, you need to rename it across every diagram where it appears.
3. Many diagramming tools have data formats that are hard to diff, making them tricky to use in conjunction with pull requests, for example.


|------|-------------|
| Name | Description |
|------|-------------|
| [Archinsight](https://github.com/lonely-lockley/archinsight)  | Archinsight implements an architecture-as-code approach, following the principles based on the C4 model. Its core feature is the Insight language, which simplifies architectural descriptions and frees architects from excessive visualization details. Insight emphasizes clarity, conciseness, and simplicity tailored to C4 diagrams. |
| [BAC4 Standalone](https://github.com/DavidROliverBA/bac4-standalone) | An interactive web-based C4 modelling tool built with React that allows architects to create, edit, and visualise C4 diagrams with full interactivity. Runs completely standalone in any browser - no server, no installation, no dependencies! |
| [C4-PlantUML](https://github.com/plantuml-stdlib/C4-PlantUML) | C4-PlantUML combines the benefits of PlantUML and the C4 model for providing a simple way of describing and communicate software architectures |
| [c4builder](https://adrianvlupu.github.io/C4-Builder)         | A lightweight Node.js CLI tool for building, maintaining and sharing a software architecture project using only text. |
| [C4 Modelizer](https://github.com/archivisio/c4_modelizer)    | Visual tool to design and edit C4 system-level architecture diagrams using a modern React interface. |
| [C4Sharp](https://github.com/8T4/c4sharp)                     | C4Sharp (C4S) is a .NET library for building C4 Model diagrams. |
| [CUE4Puml4C4](https://owulveryck.github.io/cue4puml4c4/)      | Describe your C4 model as data (not as code) thanks to the CUE language. Transpile it and render it thanks to PlantUML. |
| [Diagrams](https://diagrams.mingrammer.com/docs/nodes/c4)     | Diagrams lets you draw the cloud system architecture in Python code. |
| [draw.io](https://www.diagrams.net/blog/c4-modelling)         | draw.io is a JavaScript, client-side editor for general diagramming. |
| [Keadex Mina](https://keadex.dev/en/projects/keadex-mina)     | Open Source, serverless IDE to easily code and organize at a scale C4 model diagrams. |
| [Mermaid](https://mermaid.js.org/syntax/c4.html)              | JavaScript based diagramming and charting tool that renders Markdown-inspired text definitions to create and modify diagrams dynamically. |

## Modelling

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

|------|-------------|
| Name | Description |
|------|-------------|
| [Archi](https://www.archimatetool.com/blog/2020/04/18/c4-model-architecture-viewpoint-and-archi-4-7/)  | The Open Source modelling toolkit for creating ArchiMate models and sketches. Used by Enterprise Architects everywhere. |
| [C4InterFlow](https://github.com/SlavaVedernikov/C4InterFlow) | Architecture as Code (AaC) framework that generates diagrams and lets you analyse Application Architecture. Inspired by C4 Model. |
| [Gaphor](https://gaphor.org) | A picture is worth a thousand words. Describe and document your applications and systems with Gaphor to enhance knowledge sharing. |
| <a href="https://isoflow.io"><img src="/tooling/logos/isoflow.webp" alt="Isoflow" class="toolingLogo" /></a> | Create interactive diagrams. In minutes. |
| [Model](https://github.com/goadesign/model) | Create your software architecture models and diagrams in Go. |
| [Overarch](https://github.com/soulspace-org/overarch) | Overarch provides a data model for the holistic description of a software system, opening multiple use cases on the model data. Supports C4 and UML diagram generation with PlantUML. |
| [pumla](https://github.com/DrMarkusVoss/pumla/blob/main/test/examples/C4example/pumlaC4Example.md) | pumla - systematic re-use of model elements described with PlantUML. |
| [PyStructurizr](https://github.com/nielsvanspauwen/pystructurizr) | A Python DSL inspired by Structurizr, intended for generating C4 diagrams. |
| [RDB modeling](https://rdbmodel.github.io) | This application allows to create and visualize software architecture using a simplified version of the C4 model and YAML. |
| <a href="https://docs.structurizr.com"><img src="/tooling/logos/structurizr.png" alt="Structurizr" class="toolingLogo" /></a> | Structurizr builds upon “diagrams as code”, allowing you to create multiple software architecture diagrams using the C4 model, in a variety of rendering tools, from a single model. |

## Tool missing?

If you would like to add your open source tool or advertise your closed source tool, please
[get in touch](mailto:hello@architectis.je?subject=C4%20model%20-%20tooling) with the following information:

- Name
- Short description
- URL
- Open source (include link to repo) or closed source?

If your tool doesn't support the C4 model natively "out of the box", please provide a link to a guide that
describes how to use your tool in conjunction with the C4 model.