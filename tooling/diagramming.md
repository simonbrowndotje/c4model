---
layout: default
title: Diagramming
parent: Tooling
nav_order: 1
permalink: /tooling/diagramming
---

# Diagramming

As an industry, we've tended to prefer diagramming over modelling, primarily because the barrier to entry is relatively
low, and it's seen as a much simpler task. But there are a number of major problems with using diagramming tools for
software architecture diagrams:

1. The domain language of diagramming tools is "boxes and lines", which means:
    - They can't provide any assistance or validation of your diagrams.
    - You can't query the diagrams (e.g. "show me all dependencies of component X").
2. Reusing diagram elements is done via copy-paste - if you rename a box, you need to rename it across every diagram where it appears.
3. Many diagramming tools have data formats that are hard to diff, making them tricky to use in conjunction with pull requests, for example.

## Tools

Here are some diagramming tools that support the C4 model.

|------|-------------|
| Tool | Description |
|------|-------------|
| [Archinsight](https://github.com/lonely-lockley/archinsight)  | Archinsight implements an architecture-as-code approach, following the principles based on the C4 model. Its core feature is the Insight language, which simplifies architectural descriptions and frees architects from excessive visualization details. Insight emphasizes clarity, conciseness, and simplicity tailored to C4 diagrams. |
| [C4-PlantUML](https://github.com/plantuml-stdlib/C4-PlantUML) | C4-PlantUML combines the benefits of PlantUML and the C4 model for providing a simple way of describing and communicate software architectures |
| [c4builder](https://adrianvlupu.github.io/C4-Builder)         | A lightweight Node.js CLI tool for building, maintaining and sharing a software architecture project using only text. |
| [C4 Modelizer](https://github.com/archivisio/c4_modelizer)    | Visual tool to design and edit C4 system-level architecture diagrams using a modern React interface. |
| [C4Sharp](https://github.com/8T4/c4sharp)                     | C4Sharp (C4S) is a .NET library for building C4 Model diagrams. |
| [CUE4Puml4C4](https://owulveryck.github.io/cue4puml4c4/)      | Describe your C4 model as data (not as code) thanks to the CUE language. Transpile it and render it thanks to PlantUML. |
| [Diagrams](https://diagrams.mingrammer.com/docs/nodes/c4)     | Diagrams lets you draw the cloud system architecture in Python code. |
| [draw.io](https://www.diagrams.net/blog/c4-modelling)         | draw.io is a JavaScript, client-side editor for general diagramming. |
| [Keadex Mina](https://keadex.dev/en/projects/keadex-mina)     | Open Source, serverless IDE to easily code and organize at a scale C4 model diagrams. |
| [Mermaid](https://mermaid.js.org/syntax/c4.html)              | JavaScript based diagramming and charting tool that renders Markdown-inspired text definitions to create and modify diagrams dynamically. |

