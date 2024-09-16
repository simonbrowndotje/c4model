---
layout: default
title: Home
nav_order: 1
description: C4 model
permalink: /
---

# The C4 model for visualising software architecture

The C4 model is:

1. A set of [hierarchical abstractions](/abstractions) (software systems, containers, components, and code).
2. A set of [hierarchical diagrams](/diagrams) (system context, containers, components, and code).
3. [Notation independent](/diagrams/notation).
4. [Tooling independent](/tooling).

[![An overview of the C4 model for visualising software architecture](/images/c4-overview.png)](/images/c4-overview.png)

## Uses and benefits

The C4 model is an easy to learn, developer friendly approach to software architecture diagramming.
Good software architecture diagrams assist with communication inside and outside of software development/product teams,
efficient onboarding of new staff, architecture reviews/evaluations, risk identification (e.g. [risk-storming](https://riskstorming.com)),
threat modelling, etc.

<table style="text-align: center">
<tr>
<td>
<iframe src="https://www.youtube-nocookie.com/embed/x2-rSnhpw0g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
<br />
<b>Visualising software architecture with the C4 model</b>
<br />
Recorded at "Agile on the Beach 2019", July 2019
</td>
<td>
<a href="https://leanpub.com/visualising-software-architecture"><img src="/images/book-small.png" width="150px" /></a>
<br />
<b>The C4 model for visualising software architecture</b>
<br />Simon Brown
</td>
</tr>
</table>

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