---
layout: default
title: Abstractions
nav_order: 3
has_children: true
permalink: /abstractions
has_toc: false
---

# Abstractions

The C4 model is an "abstraction-first" approach to diagramming software architecture, based upon abstractions that
reflect how software architects and developers think about and build software. The small set of abstractions and
diagram types makes the C4 model easy to learn and use.

In order to create some "maps of your code", we first need a common set of abstractions to create a ubiquitous language
that we can use to describe the static structure of a software system. A [software system](/abstractions/software-system)
is made up of one or  more [containers](/abstractions/container) (applications and data stores),
each of which contains one or more [components](/abstractions/component),  which in turn are implemented by one or
more [code elements](/abstractions/code) (classes, interfaces, objects, functions, etc).
And [people](/abstractions/person) may use the software systems that we build.

![The abstractions behind the C4 model](/images/abstractions.png)