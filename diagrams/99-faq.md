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

## How do you diagram large and complex software systems?

Even with a relatively small software system, it's tempting to try and include the entire story on a single diagram. 
For example, if you have a web application, it seems logical to create a single component diagram that shows all
the components that make up that web application. Unless your software system really is that small, you're likely to 
run out of room on the diagram canvas or find it difficult to discover a layout that isn't cluttered by a myriad of
overlapping lines. Using a larger diagram canvas can sometimes help, but large diagrams are usually hard to interpret 
and comprehend because the cognitive load is too high. And if nobody understands the diagram, nobody is going to look 
at it.

Instead, don't be afraid to split that single complex diagram into a larger number of simpler diagrams, each with a 
specific focus around a business area, functional area, functional grouping, bounded context, use case, user 
interaction, feature set, etc. The key is to ensure that each of the separate diagrams tells a different part of the 
same overall story, at the same level of abstraction. 
You can also use an [alternative visualisation](/notation#alternative-visualisations).

## Will the diagrams become outdated quickly?

Due to the hierarchical nature of the C4 model, each diagram will change at a different rate.

- __System Context diagram__: In most cases, the system context diagram will change very slowly, as this describes the 
landscape that the software system is operating within.
- __Container diagram__: Unless you're building a software system that makes heavy use of microservices or serverless 
lambdas/functions/etc, the container diagram will also change relatively slowly.
- __Component diagram__: For any software system under active development, the component diagrams may change frequently 
as the team adds, removes or restructures the code into cohesive components. Automating the generation of this level 
of detail with tooling can help.
- __Code diagram__: The level 4 code (e.g. class) diagrams will potentially become outdated very quickly if the codebase is
under active development. For this reason, the recommendation is to (1) not create them at all or (2) generate them 
on-demand using tooling such as your IDE.

## The C4 model vs UML, ArchiMate and SysML?

Although existing notations such as UML, ArchiMate and SysML already exist, many software development teams don't 
seem to use them. Often this is because teams don't know these notations well enough, perceive them to be too 
complicated, think they are not compatible with agile approaches or don't have the required tooling.

If you are already successfully using one of these notations to communicate software architecture, and it's working, 
stick with it. If not, try the C4 model. And don't be afraid to supplement the C4 diagrams with UML state diagrams, 
timing diagrams, etc if you need to.

## Can we combine C4 and arc42?

Yes, many teams do, and the C4 model is compatible with the [arc42 documentation template](http://arc42.org) as follows.

- Context and Scope => System Context diagram
- Building Block View (level 1) => Container diagram
- Building Block View (level 2) => Component diagram
- Building Block View (level 3) => Code (e.g. class) diagram
