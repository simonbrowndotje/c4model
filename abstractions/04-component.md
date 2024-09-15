---
layout: default
title: Component
parent: Abstractions
nav_order: 4
permalink: /abstractions/component
---

# Component

The word "component" is a hugely overloaded term in the software development industry but, in the C4 model,
a component is a grouping of related functionality encapsulated behind a well-defined interface.
If you're using a language like Java or C#, the simplest way to think of a component is that it's a collection
of implementation classes behind an interface.

With the C4 model, components are *not* separately deployable units. Instead, it's the container that's the
deployable unit. In other words, all components inside a container execute in the same process space.
Aspects such as how components are packaged (e.g. one component vs many components per JAR file, DLL,
shared library, etc) is an orthogonal concern.

## FAQ

- [What's the difference between components and code?](/abstractions/components-vs-code)
- [Is a Java JAR, C# assembly, DLL, module, package, namespace, folder etc a component?](/faq#is-a-java-jar-c-assembly-dll-module-package-namespace-folder-etc-a-component)
