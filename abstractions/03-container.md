---
layout: default
title: Container
parent: Abstractions
nav_order: 3
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