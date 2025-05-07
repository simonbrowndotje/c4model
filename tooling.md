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

As an industry, we've tended to prefer diagramming (e.g. Visio, draw.io, Lucidchart, PlantUML, Mermaid, etc) 
over modelling (e.g. Sparx EA, Archi, IcePanel, Structurizr, etc), primarily because the barrier to entry is relatively 
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

## Options

Here's a collection of tooling that provides some degree of specific support for the C4 model.

<script type="application/javascript" src="https://code.jquery.com/jquery-3.7.1.slim.min.js"></script>

<style>
.toolingOptionFilter {
    margin: 10px 20px 20px 10px;
    display: inline-block;
}
.toolingOption {
    font-size: 16px;
    display: inline-block;
    margin: 10px;
    border: solid 1px #1168BD;
    padding: 5px 10px 5px 10px;
    border-radius: 5px;
}
.toolingOption:hover {
    background: #1168BD;
    color: #ffffff;
}
.toolingOption:hover a {
    color: #ffffff;
}
.toolingOption a {
    text-decoration: none;
}
.toolingOption a:hover {
    background: #1168BD;
    color: #ffffff;
    text-decoration: none;
}
.centered {
    text-align: center;
}
.faded {
    opacity: 0.2;
}
.small {
    font-size: 13px;
}
.smaller {
    font-size: 11px;
}
</style>

<table>
<tr>
<td style="vertical-align: top">
    <h4>Supported diagram types</h4>
    <div class="toolingOptionFilter">
        <label><input id="toolingStaticDiagramsFilter" type="checkbox" checked="checked" disabled="disabled"> Static diagrams</label>
        <div class="smaller">(e.g. system context, container, and component diagrams)</div>
    </div>

    <div class="toolingOptionFilter">
        <label><input id="toolingDynamicDiagramsFilter" type="checkbox"> Dynamic diagrams</label>
        <div class="smaller">(e.g. collaboration or sequence diagrams)</div>
    </div>

    <div class="toolingOptionFilter">
        <label><input id="toolingDeploymentDiagramsFilter" type="checkbox"> Deployment diagrams</label>
        <div class="smaller">(e.g. diagrams showing deployment and infrastructure concerns)</div>
    </div>
</td>
<td style="vertical-align: top">
    <h4>Diagramming vs modelling</h4>
    <div class="toolingOptionFilter">
        <label><input id="toolingDiagrammingFilter" name="diagramVsModel" type="radio"> Diagramming tool</label>
        <div class="smaller">(boxes and arrows are reused via copy and paste, no assistance, no validation rules, etc)</div>
    </div>

    <div class="toolingOptionFilter">
        <label><input id="toolingModelBasedFilter" name="diagramVsModel" type="radio" checked="checked"> Reuse elements across multiple diagrams</label>
        <div class="smaller">(i.e. a modelling tool - to keep multiple diagrams in sync automatically when you rename elements)</div>
        <div style="margin-top: 10px">
        <span class="smaller" style="font-weight: normal; background: #02b621; color: #ffffff; padding: 5px; margin-top: 10px;">Recommended</span>
        </div>
    </div>
</td>
<td style="vertical-align: top">
    <h4>Authoring</h4>
    <div class="toolingOptionFilter">
        <label><input id="toolingWithUIFilter" name="authoring" type="radio"> Graphical user interface</label>
        <div class="smaller">(drag and drop modelling UI)</div>
    </div>

    <div class="toolingOptionFilter">
        <label><input id="toolingAsCodeFilter" name="authoring" type="radio" checked="checked"> Diagrams and models as code</label>
        <div class="smaller">(for easy version control and integration into build pipelines/other tools)</div>
    </div>
</td>
<td style="vertical-align: top">
    <h4>Other</h4>
    <div class="toolingOptionFilter">
        <label><input id="toolingOpenSourceFilter" type="checkbox"> Open source</label>
        <div class="smaller">(free, fork/customize, etc)</div>
    </div>

    <div class="toolingOptionFilter">
        <label><input id="toolingRenderingToolIndependentFilter" type="checkbox"> Rendering tool independent</label>
        <div class="smaller">(to render diagrams with different tools or visualisation formats such as <a href="/diagrams/notation#alternative-visualisations">diagrams, graphs, etc</a>)</div>
    </div>
</td>
</tr>
</table>

<div class="centered">
    <div class="toolingOption toolingOpenSource toolingModelBased toolingWithUI toolingStaticDiagrams toolingDynamicDiagrams toolingDeploymentDiagrams">
        <a href="https://www.archimatetool.com/blog/2020/04/18/c4-model-architecture-viewpoint-and-archi-4-7/" target="_blank">Archi</a>
    </div>
    <div class="toolingOption toolingOpenSource toolingDiagramming toolingAsCode toolingStaticDiagrams">
        <a href="https://github.com/lonely-lockley/archinsight" target="_blank">Archinsight</a>
    </div>
    <div class="toolingOption toolingModelBased toolingWithUI toolingStaticDiagrams toolingDeploymentDiagrams">
        <a href="https://www.archipeg.com/learn/c4-model-v1-metamodel" target="_blank">Archipeg</a>
    </div>
    <div class="toolingOption toolingModelBased toolingWithUI toolingStaticDiagrams toolingDynamicDiagrams toolingDeploymentDiagrams">
        <a href="https://github.com/ChangeVision/astah-c4model-plugin" target="_blank">Astah</a>
    </div>
    <div class="toolingOption toolingOpenSource toolingDiagramming toolingAsCode toolingStaticDiagrams toolingDynamicDiagrams toolingDeploymentDiagrams">
        <a href="https://github.com/plantuml-stdlib/C4-PlantUML" target="_blank">C4-PlantUML</a>
    </div>
    <div class="toolingOption toolingOpenSource toolingDiagramming toolingAsCode toolingStaticDiagrams toolingDynamicDiagrams toolingDeploymentDiagrams">
        <a href="https://adrianvlupu.github.io/C4-Builder" target="_blank">c4builder</a>
    </div>
    <div class="toolingOption toolingOpenSource toolingModelBased toolingAsCode toolingStaticDiagrams">
        <a href="https://github.com/SlavaVedernikov/C4InterFlow" target="_blank">C4InterFlow</a>
    </div>
    <div class="toolingOption toolingOpenSource toolingWithUI toolingDiagramming toolingStaticDiagrams">
        <a href="https://github.com/archivisio/c4_modelizer" target="_blank">C4 Modelizer</a>
    </div>
    <div class="toolingOption toolingOpenSource toolingDiagramming toolingAsCode toolingStaticDiagrams toolingDeploymentDiagrams">
        <a href="https://github.com/8T4/c4sharp" target="_blank">C4Sharp</a>
    </div>
    <div class="toolingOption toolingOpenSource toolingDiagramming toolingAsCode toolingStaticDiagrams">
        <a href="https://owulveryck.github.io/cue4puml4c4/" target="_blank">CUE4Puml4C4</a>
    </div>
    <div class="toolingOption toolingOpenSource toolingDiagramming toolingAsCode toolingStaticDiagrams">
        <a href="https://diagrams.mingrammer.com/docs/nodes/c4" target="_blank">Diagrams</a>
    </div>
    <div class="toolingOption toolingOpenSource toolingDiagramming toolingWithUI toolingStaticDiagrams toolingDynamicDiagrams toolingDeploymentDiagrams">
        <a href="https://www.diagrams.net/blog/c4-modelling" target="_blank">diagrams.net</a>
    </div>
    <div class="toolingOption toolingWithUI toolingDiagramming toolingStaticDiagrams toolingDynamicDiagrams toolingDeploymentDiagrams">
        <a href="https://libraries.excalidraw.com/#dmitry-burnyshev-c4-architecture" target="_blank">Excalidraw</a>
    </div>
    <div class="toolingOption toolingWithUI toolingDiagramming toolingStaticDiagrams toolingDynamicDiagrams toolingDeploymentDiagrams">
        <a href="https://www.figma.com/templates/c4-model-examples/" target="_blank">Figma</a>
    </div>
    <div class="toolingOption toolingWithUI toolingOpenSource toolingModelBased toolingStaticDiagrams toolingDynamicDiagrams toolingDeploymentDiagrams">
        <a href="https://gaphor.org" target="_blank">Gaphor</a>
    </div>
    <div class="toolingOption toolingWithUI toolingDiagramming toolingStaticDiagrams toolingDynamicDiagrams toolingDeploymentDiagrams">
        <a href="https://www.gliffy.com/blog/c4-model" target="_blank">Gliffy</a>
    </div>
    <div class="toolingOption toolingWithUI toolingModelBased toolingStaticDiagrams toolingDynamicDiagrams">
        <a href="https://icepanel.io/c4-model" target="_blank">IcePanel</a>
    </div>
    <div class="toolingOption toolingOpenSource toolingDiagramming toolingAsCode toolingStaticDiagrams toolingDynamicDiagrams toolingDeploymentDiagrams">
        <a href="https://keadex.dev/en/projects/keadex-mina" target="_blank">Keadex Mina</a>
    </div>
    <div class="toolingOption toolingWithUI toolingDiagramming toolingStaticDiagrams toolingDynamicDiagrams toolingDeploymentDiagrams">
        <a href="https://www.lucidchart.com/pages/templates/c4-model-example" target="_blank">Lucidchart</a>
    </div>
    <div class="toolingOption toolingWithUI toolingDiagramming toolingStaticDiagrams toolingDynamicDiagrams toolingDeploymentDiagrams">
        <a href="https://github.com/pihalve/c4model-visio-stencil" target="_blank">Microsoft Visio</a>
    </div>
    <div class="toolingOption toolingOpenSource toolingDiagramming toolingAsCode toolingStaticDiagrams toolingDynamicDiagrams toolingDeploymentDiagrams">
        <a href="https://mermaid.js.org/syntax/c4.html" target="_blank">Mermaid</a>
    </div>
    <div class="toolingOption toolingWithUI toolingDiagramming toolingStaticDiagrams toolingDynamicDiagrams toolingDynamicDiagrams toolingDeploymentDiagrams">
        <a href="https://miro.com/miroverse/c4-architecture/" target="_blank">Miro</a>
    </div>
    <div class="toolingOption toolingOpenSource toolingModelBased toolingAsCode toolingStaticDiagrams toolingDynamicDiagrams toolingDeploymentDiagrams">
        <a href="https://github.com/goadesign/model" target="_blank">Model</a>
    </div>
    <div class="toolingOption toolingOpenSource toolingWithUI toolingDiagramming toolingStaticDiagrams toolingDynamicDiagrams toolingDeploymentDiagrams">
        <a href="https://architecture.models.nasdanika.org/references/eSubpackages/c4/index.html" target="_blank">Nasdanika Architecture</a>
    </div>
    <div class="toolingOption toolingWithUI toolingDiagramming toolingStaticDiagrams toolingDynamicDiagrams toolingDeploymentDiagrams">
        <a href="https://stenciltown.omnigroup.com/stencils/c4/" target="_blank">OmniGraffle</a>
    </div>
    <div class="toolingOption toolingOpenSource toolingModelBased toolingAsCode toolingStaticDiagrams toolingDynamicDiagrams toolingDeploymentDiagrams">
        <a href="https://github.com/soulspace-org/overarch" target="_blank">Overarch</a>
    </div>
    <div class="toolingOption toolingOpenSource toolingModelBased toolingAsCode toolingStaticDiagrams toolingDynamicDiagrams toolingDeploymentDiagrams">
        <a href="https://github.com/DrMarkusVoss/pumla/blob/main/test/examples/C4example/pumlaC4Example.md" target="_blank">pumla</a>
    </div>
    <div class="toolingOption toolingOpenSource toolingModelBased toolingAsCode toolingStaticDiagrams">
        <a href="https://github.com/nielsvanspauwen/pystructurizr" target="_blank">PyStructurizr</a>
    </div>
    <div class="toolingOption toolingWithUI toolingModelBased toolingStaticDiagrams toolingDynamicDiagrams toolingDeploymentDiagrams">
        <a href="http://www.sparxsystems.eu/c4/" target="_blank">Sparx Enterprise Architect</a>
    </div>
    <div class="toolingOption toolingOpenSource toolingModelBased toolingAsCode toolingStaticDiagrams">
        <a href="https://rdbmodel.github.io" target="_blank">RDB modeling</a>
    </div>
    <div class="toolingOption toolingModelBased toolingWithUI toolingStaticDiagrams">
        <a href="https://revision.app/c4-model" target="_blank">Revision</a>
    </div>
    <div class="toolingOption toolingOpenSource toolingModelBased toolingAsCode toolingRenderingToolIndependent toolingStaticDiagrams toolingDynamicDiagrams toolingDeploymentDiagrams">
        <a href="https://structurizr.com" target="_blank">Structurizr</a>
    </div>
    <div class="toolingOption toolingWithUI toolingDiagramming toolingStaticDiagrams toolingDynamicDiagrams toolingDeploymentDiagrams">
        <a href="https://online.visual-paradigm.com/diagrams/features/c4-model-tool/" target="_blank">Visual Paradigm</a>
    </div>
    <div class="toolingOption toolingWithUI toolingDiagramming toolingStaticDiagrams toolingDynamicDiagrams toolingDeploymentDiagrams">
        <a href="https://github.com/Ferhat67/C4-yEd" target="_blank">yEd</a>
    </div>
</div>

<script>
    $('#toolingOpenSourceFilter, #toolingDiagrammingFilter, #toolingModelBasedFilter, #toolingAsCodeFilter, #toolingWithUIFilter, #toolingRenderingToolIndependentFilter, #toolingStaticDiagramsFilter, #toolingDynamicDiagramsFilter, #toolingDeploymentDiagramsFilter').change(function() {
        filterToolingOptions();
    });

    function filterToolingOptions() {
        var classes = '';

        if ($('#toolingOpenSourceFilter').is(":checked")) {
            classes = classes + '.toolingOpenSource';
        }
        
        if ($('#toolingDiagrammingFilter').is(":checked")) {
            classes = classes + '.toolingDiagramming';
        }
        
        if ($('#toolingModelBasedFilter').is(":checked")) {
            classes = classes + '.toolingModelBased';
        }
        
        if ($('#toolingAsCodeFilter').is(":checked")) {
            classes = classes + '.toolingAsCode';
        }
        
        if ($('#toolingWithUIFilter').is(":checked")) {
            classes = classes + '.toolingWithUI';
        }
        
        if ($('#toolingRenderingToolIndependentFilter').is(":checked")) {
            classes = classes + '.toolingRenderingToolIndependent';
        }
        
        if ($('#toolingStaticDiagramsFilter').is(":checked")) {
            classes = classes + '.toolingStaticDiagrams';
        }
        
        if ($('#toolingDynamicDiagramsFilter').is(":checked")) {
            classes = classes + '.toolingDynamicDiagrams';
        }
        
        if ($('#toolingDeploymentDiagramsFilter').is(":checked")) {
            classes = classes + '.toolingDeploymentDiagrams';
        }
        
        if (classes.length === 0) {
            $('.toolingOption').removeClass('faded');
        } else {
            $('.toolingOption').addClass('faded');
            $('.toolingOption').filter(classes).removeClass('faded');
        }
    }

    filterToolingOptions();
</script>
