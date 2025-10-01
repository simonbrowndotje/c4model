---
layout: default
title: Introduction
nav_order: 2
permalink: /introduction
---

# Introduction

Ask somebody in the building industry to visually communicate the architecture of a building and you'll be presented
with site plans, floor plans, elevation views, cross-section views and detail drawings. In contrast, ask a software
developer to communicate the software architecture of a software system using diagrams and you'll likely get a
confused mess of boxes and lines ... inconsistent notation (colour coding, shapes, line styles, etc), ambiguous naming,
unlabelled relationships, generic terminology, missing technology choices, mixed abstractions, etc.

| [![A software architecture sketch](/images/sketch-1.jpg)](/images/sketch-1.jpg) | [![A software architecture sketch](/images/sketch-2.jpg)](/images/sketch-2.jpg) |
| [![A software architecture sketch](/images/sketch-3.jpg)](/images/sketch-3.jpg) | [![A software architecture sketch](/images/sketch-4.jpg)](/images/sketch-4.jpg) |

As an industry, we do have the Unified Modeling Language (UML), ArchiMate and SysML, but asking whether these provide
an effective way to communicate software architecture is often irrelevant because many teams have already thrown them
out in favour of much simpler "boxes and lines" diagrams. Abandoning these modelling languages is one thing but,
perhaps in the race for agility, many software development teams have lost the ability to communicate visually.

## Maps of your code

The C4 model was created as a way to help software development teams describe and communicate software architecture,
both during up-front design sessions and when retrospectively documenting an existing codebase. It's a way to create
"maps of your code", at various levels of detail, in the same way you would use something like Google Maps to zoom in
and out of an area you are interested in.

| [![](/images/map-4.jpg)](/images/map-4.jpg) | [![](/images/map-3.jpg)](/images/map-3.jpg) | [![](/images/map-2.jpg)](/images/map-2.jpg) | [![](/images/map-1.jpg)](/images/map-1.jpg) |
| [![](/images/examples/SystemContext.png)](/diagrams/system-context) | [![](/images/examples/Containers.png)](/diagrams/container) | [![](/images/examples/Components.png)](/diagrams/component) | [![](/images/examples/Code.png)](/diagrams/code) |
| A [system context diagram](/diagrams/system-context) provides a starting point, showing how the software system in scope fits into the world around it. | A [container diagram](/diagrams/container) zooms into the software system in scope, showing the applications and data stores inside it. | A [component diagram](/diagrams/component) zooms into an individual container, showing the components inside it. | A [code diagram](/diagrams/code) (e.g. UML class) can be used to zoom into an individual component, showing how that component is implemented at the code level. |

## Uses and benefits

Good software architecture diagrams assist with communication inside and outside of software development/product teams,
efficient onboarding of new staff, architecture reviews/evaluations, risk identification (e.g. [risk-storming](https://riskstorming.com)),
threat modelling, etc. The goal of the C4 model is to raise the level of maturity associated with software architecture diagrams.

[![](/images/software-architecture-diagramming-maturity-model.png)](/images/software-architecture-diagramming-maturity-model.png)