---
layout: default
title: FAQ
nav_order: 20
permalink: /faq
---

# Frequently asked questions

## What's the background behind the C4 model?

The C4 model was created by [Simon Brown](http://simonbrown.je), who started teaching software architecture,
while working as a software developer/architect. Part of Simon's training course was a design exercise,
where groups of people were given some requirements, asked to do some design, and to draw some diagrams to express
that design.

Although this was a design focussed exercise, the wide variety of diagrams made it evident that the visualisation
of ideas was a skill that most people sorely lacked. The C4 model is essentially a formalisation of how Simon used
to visualise software architecture, which has evolved over the years.

Exact dates are hard to pin down, but the roots of the C4 model can be traced back to somewhere in the region
of 2006-2009, the diagram types ("context", "containers", "components", "classes") were named in early 2010,
with the "C4" name being first used in early 2011. The fourth diagram type was renamed from "classes" to "code"
during 2015-2016.

## What's the inspiration behind the C4 model?

The C4 model was created during a time where teams, influenced by the agile movement, were less than enthusiastic
about using the [Unified Modeling Language](https://en.wikipedia.org/wiki/Unified_Modeling_Language) (UML) to document
software architecture, if they were creating diagrams at all. Despite this, the C4 model was inspired by UML and
the [4+1 model for software architecture](https://en.wikipedia.org/wiki/4%2B1_architectural_view_model).
In summary, you can think of the C4 model as a simplified version of the underlying concepts, designed to
(1) make it easier for software developers to describe and understand how a software system works and
(2) to minimise the gap between the software architecture model/description and the source code.

## Isn't the C4 model a step backwards? Why are you reinventing UML? Why not just use UML?

Whether you see the C4 model as a step forwards or a step backwards depends upon where you are. If you're using UML
(or SysML, ArchiMate, etc) and it's working for you, stick with it. Unfortunately, UML usage seems to be in decline, 
and many teams have reverted to using ad hoc boxes and lines diagrams once again. Given that many of those teams don't 
want to use UML (for various reasons), the C4 model helps introduce some structure and discipline into the way software 
architecture is communicated. For many teams, the C4 model is sufficient. And for others, perhaps it's a stepping stone 
to UML.

## How many people use the C4 model?
The honest answer is that nobody knows. Simon has personally taught the C4 model to somewhere over 10,000 people in 
more than 30 countries; with conference talks, videos, books and articles reaching many more than this. Other people 
are also teaching, speaking and writing about the C4 model too. It's definitely being used though, in organisations 
ranging from startups to global household names.

## Why "container"?

Terms like "process", "application", "app", "server", "deployable unit", etc all have associated implications, so the 
name "container" was chosen as a generic way to describe something in which components live. From one perspective,
it's unfortunate that containerisation has become popular, because many software developers now associate the term 
"container" with Docker. From another perspective though, there is sometimes a nice parity between a container in the 
C4 model and an infrastructure (e.g. Docker) container.

While many teams successfully use the C4 model as is, feel free to change the terminology if needed.

## Can we change the terminology?

This terminology (context, containers, components and code) works for many organisations and many types of software. 
However, sometimes an organisation will have an existing terminology that people are already familiar with. Or perhaps 
"components" and "classes" don't easily map on to the technology being used (e.g. functional languages often use the 
terms "module" and "function").

Feel free to modify the terminology that you use to describe software architecture at different levels of abstraction. 
Just make sure that everybody explicitly understands it.

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

## Why doesn't the C4 model cover business processes, workflows, state machines, domain models, data models, etc?

The focus of the C4 model is the static structures that make up a software system, at different levels of abstraction. 
If you need to describe other aspects, feel free to supplement the C4 diagrams with UML diagrams, BPML diagrams, 
ArchiMate diagrams, entity relationship diagrams, etc.

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

## Does the C4 model imply a design process or team structure?

A common misconception is that a team's design process should follow the levels in the C4 model hierarchy, perhaps 
with different people on the team being responsible for different levels of diagrams. For example, a business analyst 
creates the system context diagram, the architect creates the container diagram, while the developers look after the 
remaining levels of detail.

Although you can certainly use the C4 model in this way, this is not the intended or recommended usage pattern. The 
C4 model is just a way to describe a software system, from different levels of abstraction, and it implies nothing 
about the process of delivering software.

## Using C4 to describe libraries, frameworks and SDKs?

The C4 model is really designed to model a software system, at various levels of abstraction. To document a library, 
framework or SDK, you might be better off using something like UML. Alternatively, you could use the C4 model to 
describe a usage example of your framework, library or SDK; perhaps using colour coding to signify which parts of 
the software system are bespoke vs those provided for you.

## Web applications; one container or two?

If you're building a server-side web application (e.g. Spring MVC, ASP.NET, Ruby on Rails, Django, etc) that is 
predominantly generating static HTML content, then that's a single container. If there's a significant quantity of 
JavaScript being delivered by the server-side web application (e.g. a single-page application built using Angular), 
then that's two containers.

Although, at deployment time, the server-side web application includes both the server-side and client-side code, 
treating the client and server as two separate containers makes it explicit that these are two separate process spaces, 
communicating via an inter-process/remote communication mechanism (e.g. JSON/HTTPS). It also provides a basis for 
zooming in to each container separately to show the components inside them.

## Should the lines represent dependencies or data flow?

This is your choice. Sometimes diagrams work better showing dependency relationships (e.g. uses, reads from, etc), 
and sometimes data flow (e.g. customer update events) works better. Whichever you choose, make sure that the 
description of the line matches the direction of the arrow.

It's also worth remembering that most relationships can be expressed either way, and the more explicit you can be, 
the better. For example, describing a relationship as "sends customer update events to" can be more descriptive 
than simply "customer update events".

## Is a Java JAR, C# assembly, DLL, module, etc a container?

Typically not. A container is a runtime construct, like an application; whereas Java JAR files, C# assemblies, 
DLLs, modules, etc are used to organise the code within those applications.

## Is a Java JAR, C# assembly, DLL, module, package, namespace, folder etc a component?

Perhaps but, again, typically not. The C4 model is about showing the runtime units (containers) and how 
functionality is partitioned across them (components), rather than organisational units such as Java JAR files, 
C# assemblies, DLLs, modules, packages, namespaces or folder structures.

Of course, there may be a one-to-one mapping between these constructs and a component; e.g. if you're building 
a hexagonal architecture, you may create a single Java JAR file or C# assembly per component. On the other hand, 
a single component might be implemented using code from a number of JAR files, which is typically what happens 
when you start to consider third-party frameworks/libraries, and how they become embedded in your codebase.

## Should you include message buses, API gateways, service meshes, etc?

If you have two services, A and B, that communicate by sending a message via a message bus (irrespective of topics, 
queues, p2p, pub/sub, etc) or another intermediary (e.g. an API gateway or service mesh), you have a couple of options. 

1. The first option is to show service A sending a message to the intermediary, and the intermediary subsequently forwarding 
that message to service B. While accurate, the "hub and spoke" nature of the diagram tends to obscure the notion that 
there's coupling between the message producer and consumer.

2. The other approach is to omit the intermediary, and instead use notation (e.g. a textual description, colour coding, 
line style, etc) to signify that the interaction between service A and B happens via an intermediary. This approach 
3. tends to result in diagrams that tell a clearer story.

## Should data storage services be shown as software systems or containers?

A frequently asked question is whether services like Amazon S3, Amazon RDS, Azure SQL Database, content delivery 
networks, etc should be shown as software systems or containers. After all, these are external services that most 
of us don't own or run ourselves.

If you're building a software system that is using Amazon S3 for storing data, it's true that you don't run S3 yourself, 
but you do have ownership and responsibility for the buckets you are using. Similarly with Amazon RDS, you have 
(more or less) complete control over any database schemas that you create. For this reason, treat them as containers 
because they are an integral part of your software architecture, although they are hosted elsewhere.

## Is the C4 model universally applicable?

The C4 model was designed to help describe, document, and diagram custom-built, bespoke software systems. From this 
perspective, the C4 model can be used to describe a variety of software architectures (monolithic or distributed), 
built in a variety of programming languages, deployed on a variety of platforms (on-premises or cloud).

Solutions that are perhaps less suited to the C4 model include embedded systems/firmware, and solutions that rely on 
heavy customization rather than bespoke development (e.g. SAP and Salesforce). Even with these solutions, you still may 
find the System Context and Container diagrams useful.
