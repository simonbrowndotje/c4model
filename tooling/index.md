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

## Modelling

The C4 model can be used irrespective of whether you use a diagramming or modelling tool, but there are some
interesting opportunities when you progress from diagramming to modelling. With a modelling tool,
you're building up a non-visual model of your software architecture
(a single definition of all elements and the relationships between them), and then creating different views
(that become diagrams) on top of that model. This requires a little more rigour, but the problems associated with diagramming tools can be resolved - modelling tools can understand the semantics of what you're trying to do, provide additional assistance,
and renaming elements/relationships is easy.

Software architecture models are essentially just [directed graphs](https://en.wikipedia.org/wiki/Directed_graph),
consisting of nodes and edges, with diagrams showing a subset of the graph. Once you see the separation of the model
(which is just structured data) and the views (which are rendered as diagrams), you quickly see there are a number of
interesting opportunities that arise:

- Creating alternative visualisations to help understand large and complicated architecture models - see [Does the C4 model scale?](/faq#does-the-c4-model-scale) for more.
- Querying the model.
- Exporting the model to other tools.
- etc

A model is just data! And we, as software developers, have an endless supply of tools to visualise and manipulate that data, including AI.

## Tools

<div>
<input type="radio" id="toolingTypeModelling" name="toolingType" value="Modelling" checked />
<label for="toolingTypeModelling">Modelling</label> <span style="font-size: 75%">(recommended)</span>

&nbsp;&nbsp;&nbsp;&nbsp;

<input type="radio" id="toolingTypeDiagramming" name="toolingType" value="Diagramming" />
<label for="toolingTypeDiagramming">Diagramming</label><br />
</div>

<div id="toolsTable"></div>

<style>
    .toolingLogo {
        width: 200px;
    }
    .hidden {
        display: none;
    }
</style>

<script>
    const tools = [
        {
            name: 'Archi',
            url: 'https://www.archimatetool.com/blog/2020/04/18/c4-model-architecture-viewpoint-and-archi-4-7/',
            description: 'The Open Source modelling toolkit for creating ArchiMate models and sketches. Used by Enterprise Architects everywhere.',
            logo: undefined,
            modelling: true
        },
        {
            name: 'C4InterFlow',
            url: 'https://github.com/SlavaVedernikov/C4InterFlow',
            description: 'Architecture as Code (AaC) framework that generates diagrams and lets you analyse Application Architecture. Inspired by C4 Model.',
            logo: undefined,
            modelling: true
        },
        {
            name: 'Gaphor',
            url: 'https://gaphor.org',
            description: 'A picture is worth a thousand words. Describe and document your applications and systems with Gaphor to enhance knowledge sharing.',
            logo: undefined,
            modelling: true
        },
        {
            name: 'Isoflow',
            url: 'https://isoflow.io',
            description: 'Create interactive diagrams. In minutes.',
            logo: 'isoflow.webp',
            modelling: true
        },
        {
            name: 'Model',
            url: 'https://github.com/goadesign/model',
            description: 'Create your software architecture models and diagrams in Go.',
            logo: undefined,
            modelling: true
        },
        {
            name: 'Overarch',
            url: 'https://github.com/soulspace-org/overarch',
            description: 'Overarch provides a data model for the holistic description of a software system, opening multiple use cases on the model data. Supports C4 and UML diagram generation with PlantUML.',
            logo: undefined,
            modelling: true
        },
        {
            name: 'pumla',
            url: 'https://github.com/DrMarkusVoss/pumla/blob/main/test/examples/C4example/pumlaC4Example.md',
            description: 'pumla - systematic re-use of model elements described with PlantUML.',
            logo: undefined,
            modelling: true
        },
        {
            name: 'PyStructurizr',
            url: 'https://github.com/nielsvanspauwen/pystructurizr',
            description: 'A Python DSL inspired by Structurizr, intended for generating C4 diagrams.',
            logo: undefined,
            modelling: true
        },
        {
            name: 'RDB modeling',
            url: 'https://rdbmodel.github.io',
            description: 'Create and visualize software architecture using a simplified version of the C4 model and YAML.',
            logo: undefined,
            modelling: true
        },
        {
            name: 'Structurizr',
            url: 'https://docs.structurizr.com',
            description: 'The original tool designed to support the C4 model - models as code, manual layout, AI friendly.',
            logo: 'structurizr.png',
            modelling: true
        },
        {
            name: 'Archinsight',
            url: 'https://github.com/lonely-lockley/archinsight',
            description: 'Archinsight implements an architecture-as-code approach, following the principles based on the C4 model. Its core feature is the Insight language, which simplifies architectural descriptions and frees architects from excessive visualization details. Insight emphasizes clarity, conciseness, and simplicity tailored to C4 diagrams.',
            logo: undefined,
            modelling: false
        },
        {
            name: 'BAC4 Standalone',
            url: 'https://github.com/DavidROliverBA/bac4-standalone',
            description: 'An interactive web-based C4 modelling tool built with React that allows architects to create, edit, and visualise C4 diagrams with full interactivity. Runs completely standalone in any browser - no server, no installation, no dependencies!',
            logo: undefined,
            modelling: false
        },
        {
            name: 'C4-PlantUML',
            url: 'https://github.com/plantuml-stdlib/C4-PlantUML',
            description: 'C4-PlantUML combines the benefits of PlantUML and the C4 model for providing a simple way of describing and communicate software architectures.',
            logo: undefined,
            modelling: false
        },
        {
            name: 'c4builder',
            url: 'https://adrianvlupu.github.io/C4-Builder',
            description: 'A lightweight Node.js CLI tool for building, maintaining and sharing a software architecture project using only text.',
            logo: undefined,
            modelling: false
        },
        {
            name: 'C4 Modelizer',
            url: 'https://github.com/archivisio/c4_modelizer',
            description: 'Visual tool to design and edit C4 system-level architecture diagrams using a modern React interface.',
            logo: undefined,
            modelling: false
        },
        {
            name: 'C4Sharp',
            url: 'https://github.com/8T4/c4sharp',
            description: 'C4Sharp (C4S) is a .NET library for building C4 Model diagrams.',
            logo: undefined,
            modelling: false
        },
        {
            name: 'CUE4Puml4C4',
            url: 'https://owulveryck.github.io/cue4puml4c4/',
            description: 'Describe your C4 model as data (not as code) thanks to the CUE language. Transpile it and render it thanks to PlantUML.',
            logo: undefined,
            modelling: false
        },
        {
            name: 'Diagrams',
            url: 'https://diagrams.mingrammer.com/docs/nodes/c4',
            description: 'Diagrams lets you draw the cloud system architecture in Python code.',
            logo: undefined,
            modelling: false
        },
        {
            name: 'draw.io',
            url: 'https://www.drawio.com/blog/c4-modelling',
            description: 'draw.io is a JavaScript, client-side editor for general diagramming.',
            logo: undefined,
            modelling: false
        },
        {
            name: 'Keadex Mina',
            url: 'https://keadex.dev/en/projects/keadex-mina',
            description: 'Open Source, serverless IDE to easily code and organize at a scale C4 model diagrams.',
            logo: undefined,
            modelling: false
        },
        {
            name: 'Mermaid',
            url: 'https://mermaid.js.org/syntax/c4.html',
            description: 'JavaScript based diagramming and charting tool that renders Markdown-inspired text definitions to create and modify diagrams dynamically.',
            logo: undefined,
            modelling: false
        }
    ];

    const toolsTable = document.getElementById('toolsTable');

    var html = '<table width="100%"><tr><th>Name</th><th>Description</th></tr>';

    tools.sort(function(a, b) {
        const aString = (a.logo ? '_' : '') + a.name;
        const bString = (b.logo ? '_' : '') + b.name;

        return aString.localeCompare(bString);
    });

    tools.forEach(function(tool) {
        html += '<tr class="toolingOption ';
        html += (tool.modelling ? 'toolingOptionModelling' : 'toolingOptionDiagramming' );
        html += '"><td><a href="';
        html += tool.url;
        html += '" target="_blank">';
        if (tool.logo) {
            html += '<img src="./logos/';
            html += tool.logo;
            html += '" class="toolingLogo" />';
        } else {
            html += tool.name;
        }
        html += '</a></td>';
        html += '<td>';
        html += tool.description;
        html += '</td>';
        html += '</tr>';
    });

    toolsTable.innerHTML = html;

    var toolingOptions = document.getElementsByClassName('toolingOption');
    for (var i = 0; i < toolingOptions.length; i++) {
        const toolingOption = toolingOptions[i];
        toolingOption.classList.add('hidden');
        toolingOption.classList.remove('hidden');
    }

    const radioButtons = document.querySelectorAll('input[name="toolingType"]');

    radioButtons.forEach(function(radioButton) {
        radioButton.addEventListener('change', function() {
            if (this.checked) {
                showToolingOption(this.value);
            }
        });
    });

    function showToolingOption(toolingOptionType) {
        var toolingOptions = document.getElementsByClassName('toolingOption');
        for (var i = 0; i < toolingOptions.length; i++) {
            const toolingOption = toolingOptions[i];
            toolingOption.classList.add('hidden');
        }

        toolingOptions = document.getElementsByClassName('toolingOption' + toolingOptionType);
        for (var i = 0; i < toolingOptions.length; i++) {
            const toolingOption = toolingOptions[i];
            toolingOption.classList.remove('hidden');
        }
    }

    showToolingOption('Modelling');
</script>

## Tool missing?

### Open source tools

Open source tools can be added to this list for free. Please [get in touch](mailto:hello@architectis.je?subject=[C4%20model]%20Open%20source%20tooling) with the following information:

- Name of tool
- Short description
- URL

### Paid/closed source tools

Please [get in touch](mailto:hello@architectis.je?subject=[C4%20model]%20Paid%20tooling) with the following information to discuss pricing options to advertise your tool:

- Name of tool
- Short description
- URL
- Logo