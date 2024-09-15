---
layout: default
title: 2. Container
parent: Abstractions
nav_order: 2
permalink: /abstractions/container
---

# Container

Not Docker! In the C4 model, a container represents an __application__ or a __data store__. A container is something
that needs to be running in order for the overall software system to work. In real terms, a container is something like:

- __Server-side web application__: A Java EE web application running on Apache Tomcat, an ASP.NET MVC application running on Microsoft IIS, a Ruby on Rails application running on WEBrick, a Node.js application, etc.
- __Client-side web application__: A JavaScript application running in a web browser using Angular, Backbone.JS, jQuery, etc.
- __Client-side desktop application__: A Windows desktop application written using WPF, an OS X desktop application written using Objective-C, a cross-platform desktop application written using JavaFX, etc.
- __Mobile app__: An Apple iOS app, an Android app, a Microsoft Windows Phone app, etc.
- __Server-side console application__: A standalone (e.g. "public static void main") application, a batch process, etc.
- __Serverless function__: A single serverless function (e.g. Amazon Lambda, Azure Function, etc).
- __Database__: A schema or database in a relational database management system, document store, graph database, etc such as MySQL, Microsoft SQL Server, Oracle Database, MongoDB, Riak, Cassandra, Neo4j, etc.
- __Blob or content store__: A blob store (e.g. Amazon S3, Microsoft Azure Blob Storage, etc) or content delivery network (e.g. Akamai, Amazon CloudFront, etc).
- __File system__: A full local file system or a portion of a larger networked file system (e.g. SAN, NAS, etc).
- __Shell script__: A single shell script written in Bash, etc.
- etc

A container is essentially a runtime boundary around some code that is being executed or some data that is being stored.
The name "container" was chosen because I wanted a name that didn't imply anything about the physical nature of how
that container is executed. For example, a single Java EE server like Apache Tomcat can run multiple web
applications inside a single Java Virtual Machine, although each of those web applications is essentially isolated
from the others. At development time I might have three web applications running on a single Apache Tomcat server,
while each web application may be deployed onto a dedicated Apache Tomcat server in a live environment.
In this situation, each web application is a "C4 container", with the deployment being a seperate concern.

## FAQ

### Why "container"?

Terms like "process", "application", "app", "server", "deployable unit", etc all have associated implications, so the
name "container" was chosen as a generic way to describe something in which components live. From one perspective,
it's unfortunate that containerisation has become popular, because many software developers now associate the term
"container" with Docker. From another perspective though, there is sometimes a nice parity between a container in the
C4 model and an infrastructure (e.g. Docker) container.

While many teams successfully use the C4 model as is, feel free to change the terminology if needed.

### Web applications; one container or two?

If you're building a server-side web application (e.g. Spring MVC, ASP.NET, Ruby on Rails, Django, etc) that is
predominantly generating static HTML content, then that's a single container. If there's a significant quantity of
JavaScript being delivered by the server-side web application (e.g. a single-page application built using Angular),
then that's two containers.

Although, at deployment time, the server-side web application includes both the server-side and client-side code,
treating the client and server as two separate containers makes it explicit that these are two separate process spaces,
communicating via an inter-process/remote communication mechanism (e.g. JSON/HTTPS). It also provides a basis for
zooming in to each container separately to show the components inside them.

### Is a Java JAR, C# assembly, DLL, module, etc a container?

Typically not. A container is a runtime construct, like an application; whereas Java JAR files, C# assemblies,
DLLs, modules, etc are used to organise the code within those applications.

### Should data storage services be shown as software systems or containers?

A frequently asked question is whether services like Amazon S3, Amazon RDS, Azure SQL Database, content delivery
networks, etc should be shown as software systems or containers. After all, these are external services that most
of us don't own or run ourselves.

If you're building a software system that is using Amazon S3 for storing data, it's true that you don't run S3 yourself,
but you do have ownership and responsibility for the buckets you are using. Similarly with Amazon RDS, you have
(more or less) complete control over any database schemas that you create. For this reason, treat them as containers
because they are an integral part of your software architecture, although they are hosted elsewhere.