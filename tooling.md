---
layout: default
title: Tooling
nav_order: 6
permalink: /tooling
---

# Tooling

For design sessions, you might find a whiteboard or flip chart paper better for collaboration, and iterating quickly.
For long-lived documentation, there are a number of tools can help create software architecture diagrams based upon
the C4 model. Here are some of the questions you should ask yourself when looking at tooling:

- Who are the diagram authors, and how technical are they?
- Who is the diagram audience, and how will they access the diagrams/documentation?
- [Diagramming vs modelling?](/tooling#diagramming-vs-modelling)
- A "drag and drop" UI vs "diagrams as code"?
- Data stored in git next to your source code vs stored in the tool/cloud service?
- Easy to diff source to use in pull requests?
- Closed vs open data format?
- Interactive vs static diagrams?
- Free vs paid?
- Closed vs open source?
- Cloud vs self-hosted?
- Short-lived vs long-lived documentation?
- Team only diagramming vs enterprise-wide modelling?

## Diagramming vs modelling

A short note on diagramming vs modelling, since this is the biggest decision you'll need to make regarding tooling.
The C4 model *can* be used irrespective of whether you use a diagramming or modelling tool, but there are some 
interesting opportunities when you progress from diagramming to modelling.

### Diagramming

As an industry, we've tended to prefer diagramming  over modelling, primarily because the barrier to entry is relatively 
low, and it's seen as a much simpler task. But there are a number of major problems with using diagramming tools for
software architecture diagrams:

1. The domain language of diagramming tools is "boxes and lines", which means:
   - They can't provide any assistance or validation of your diagrams.
   - You can't query the diagrams (e.g. "show me all dependencies of component X").
2. Reusing diagram elements is done via copy-paste - if you rename a box, you need to rename it across every diagram where it appears.
3. Many diagramming tools have data formats that are hard to diff, making them tricky to use in conjunction with pull requests, for example.

### Modelling

With a modelling tool, you're building up a non-visual model of your software architecture
(a single definition of all elements and the relationships between them), and then creating different views
(that become diagrams) on top of that model. This requires a little more rigour, but the problems can be resolved - 
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