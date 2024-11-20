---
layout: default
title: 1. Software system
parent: Abstractions
nav_order: 1
permalink: /abstractions/software-system
---

# Software system

A software system is the highest level of abstraction and describes something that delivers value to its users,
whether they are human or not. This includes the software system you are modelling, and the other software systems
upon which your software system depends (or vice versa).

Unfortunately the term "software system" is the hardest of the C4 model abstractions to define, and this isn't helped
by the fact that each organisation will also have their own terminology for describing the same thing, typically using
terms such as "application", "product", "service", etc. One way to think about it is that a software system is
something a single software development team is building, owns, has responsibility for, and can see the internal
implementation details of. Perhaps the code for that software system resides in a single source code repository,
and anybody on the team is entitled to modify it. In many cases, the boundary of a software system will correspond to
the boundary of a single team. It may also be the case that everything inside the boundary of a software system is
deployed at the same time.

Things that are not usually software systems in the C4 model include product domains, bounded contexts,
business capabilities, feature teams, tribes, or squads.