---
layout: default
title: Home
nav_order: 1
description: C4 model
permalink: /
---

# The C4 model for visualising software architecture

The C4 model is an easy to learn, developer friendly approach to software architecture diagramming:

1. A set of [hierarchical abstractions](/abstractions) - [software systems](/abstractions/software-system), [containers](/abstractions/container), [components](/abstractions/component), and [code](/abstractions/code).
2. A set of [hierarchical diagrams](/diagrams) - [system context](/diagrams/system-context), [containers](/diagrams/container), [components](/diagrams/component), and [code](/diagrams/code).
3. An additional set of supporting diagrams - [system landscape](/diagrams/system-landscape), [dynamic](/diagrams/dynamic), and [deployment](/diagrams/deployment).
4. [Notation independent](/diagrams/notation).
5. [Tooling independent](/tooling).

<table style="text-align: center">
<tr>
<td width="50%">
<iframe src="https://www.youtube-nocookie.com/embed/x2-rSnhpw0g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
<br />
<b>Visualising software architecture with the C4 model</b>
<br />
Recorded at "Agile on the Beach 2019", July 2019
</td>
<td width="50%">
<a href="https://www.oreilly.com/library/view/the-c4-model/9798341660113/"><img src="/images/book.jpg" /></a>
<br />
<b>The C4 model</b>
<br />Simon Brown
</td>
</tr>
</table>

## About this website

This is the official website for the "C4 model for visualising software architecture",
written by its creator [Simon Brown](https://simonbrown.je).

<script>
    const links = {
        'abstractions': '/abstractions',
        'systemcontextdiagram': '/diagrams/system-context',
        'containerdiagram': '/diagrams/container',
        'componentdiagram': '/diagrams/component',
        'codediagram': '/diagrams/code',
        'systemlandscapediagram': '/diagrams/system-landscape',
        'dynamicdiagram': '/diagrams/dynamic',
        'deploymentdiagram': '/diagrams/deployment',
        'notation': '/diagrams/notation',
        'tooling': '/tooling',
        'faq': '/faq',
    };
    var hash = window.location.hash;

    if (hash && hash.length > 0) {
        hash = hash.substring(1).toLowerCase();
        const link = links[hash];

        if (link) {
            window.location.href = link;
        }
    }
</script>