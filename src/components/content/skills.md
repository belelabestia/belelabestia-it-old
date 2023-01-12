## Skills

Over the course of my carreer I've worked with a variety of technologies and developed many skills; I've also privately studied or experimented various programming languages, frameworks and some more theoretical/philosophical topics.

Here follows a brief summary of key topics that I've worked with, privately studied, or that I'd be interested in exploring more deeply.

### Languages

I love studying how languages and syntaxes mould how programmers think of the requirements and their actual implementation. I started by studying Clean Code by "Uncle Bob" for practical reasons and never stopped my research in this field.

#### JavaScript/TypeScript

I've used these two languages both backend and frontend side, mastering them over half a decade of experience. I have a profound knowledge of the powerful TypeScript type system, as well as a deep understanding of the features and constructs of the underlying language JavaScript.

#### C#

I've worked with C# for most of my carreer; I used it in backend web services as well as in command line tools. I worked with the Razor syntax in MVC projects too, and I made some personal experiments using C# in the frontend with Blazor.

#### C/C++

Even if I've never worked with these two languages, it's worth mentioning that I actually learned programming with them in my university years, while I was studying physics.

#### F#

This is a programming language that I'm really curious about. In particular it has some really innovative features like computation expressions, but I also like the powerful type system and the way it mixes FP static modules with proper OOP classes in a really synthetic syntax.

#### Haskell

This is a FP language that I've privately studied and that I'm very curious about. In a world of catch-all languages, I find its rigorous, pure, paradigm-oriented approach almost romantic.

#### Rust

I think Rust is overall the most promising language in the field at the moment. Its main peculiarity is the capability to grant memory and thread safety with low level performances. Rust has also an amazing community and a fast and complete toolchain. Although I'm not an expert with this language, I'd be really interested in working with it.

#### HTML/CSS

As a full-stack developer I just have to master HTML/CSS. I've worked a lot with flex and grid layouts and with UI toolkits, but I have to say, aesthetics is not really my biggest strength.

#### Markdown

I simply love the simplicity of this markup language.

#### SCSS/SASS

I used SCSS in a single but long work project, I wouldn't call myself an expert but I definitely see value in using this CSS extension to improve the organization and architecture of modular, customizable design systems.

#### T-SQL

I worked with this language but honestly, I see no reason for using procedural extensions of the SQL language. I worked with many monolithic database-centric backends at the very beginning of my career and I really disenjoyed the experience.

### Platforms

#### .NET

This is by far the echosystem I've worked with the most. My dev career started in 2017 with .NET Framework, using WPF to build native Windows applications. At the time it was usual to query the database directly from the client, so I had few opportunities to use ASP.NET (and, alas, IIS) to build backend services. I started working with .NET Core starting from version 2.0 and I still keep up to date with the latest releases. I really love the new, rewritten framework and I've used it for many work and personal projects.

#### Node

Since my backend experience is mostly built on .NET projects, in the past I used Node mostly for trivial backend services. Lately I've been using Node with Express and tRPC in professional real-world projects, experiencing the tremendous benefit of having a single language to share data types and utilities all across a project that could include many backend services and different frontend apps.

#### Web browsers

Here I am, Captain Obvious. As a web developer I know how a web browser works. Having created a huge lot of tiny vanilla HTML5 projects, I know what's needed about DOM manipulation, Service Workers, and many other native JS APIs. I think this is worth mentioning just to enphasize the fact that I'm able to understand (and interested in studying) what the most common frontend frameworks are doing under the hood.

#### Docker

I'm not a DevOps expert, but I have definitely used docker a lot. I know the basics of docker and compose and I've used it in development and deployment contexts. Still in my opinion the use of this kind of abstraction layers over pure software packages is often an overkill in small projects.

### Frameworks

It is said that frameworks are the new languages, and in a sense that's true. Learning different architectural approaches to common problems is what gives the programmer a wide range of possibilities to represent domain and business logic.

#### WPF/UWP

In my early days in CAPP I worked with these two frameworks, but I've never been a fan of XAML.

#### ASP.NET

I've user this framework for most of my work and personal projects. I've played a little with Blazor and find WASM an opportunity to bring on web browsers many technologies that are by far stronger than JS-based ones.

#### Angular

Even if this is not the most liked frontend framework, I still find it the most powerful and complete development enviroment that I've ever worked with. That said, I've ascertained that having too many ways of accomplishing a task is not always the best choice for a dev team.

#### React

After years of experience on Angular, learning React was kind of a joke. In fact, I think the learning curve is the biggest strength of this UI rendering library. I'd call it a frontend framework, but let's be honest, that's not what it is. Anyways, along with React Router and a set of other libraries, it can also be used for real-world applications. I know Next.js fills this gap, but I've never used it.

#### Qwik

Despite being super young, this framework is already my favourite, and I bet it's going to be a game changer in the approach to web frontend technologies. The main goal of Qwik is to get completely rid of the hydration process, making web apps super fast and scalable and reducing the distance between frontend and backend rendering and development in general. Along with Qwik City (the Next.js of Qwik) it's really powerful and productive.

### Database

I have to be honest, I never found a database engine able to fully convince me, so I'm still looking for something different. I never had the opportunity or the urgency to use one of the most famous NoSQL databases, but I know the main ones and I have a feel of how they work.

#### SQLite

This is my first option for small and medium projects that just need a data store.

#### LiteDB (.NET)

I also like this solution as a lightweight NoSQL file based database.

#### SQL Server

This is the database engine I've worked with the most. It's powerful and works really well with Entity Framework.

#### PostgreSQL

This is my favourite solution for big databases hosted on linux or with docker. Works well with Entity Framework, at the cost of massively underuse its most powerful, non-standard features.

### ORM

Since I'm not so enthusiast about the database engines and APIs I've worked with, this far I've usually just opted for a good reliable ORM in my projects.

#### EF Core

This is just the right solution for the backend developer who isn't in love with SQL (i.e. me). The data modeling is complete and powerful, the developer experience is easy and straightforward.

#### Prisma

Lately I've been using this ORM, and I have to say, it's really powerful. However, I overall disliked the developer experience. It uses a dedicated language to declare the data model and you have to manually scaffold the TypeScript models and repositories every time you update the schema. Also, it generates only forward-migrations (that means, no easy migration rollbacks).

### Libs and protocols

Here are some specific topics I had the opportunity to deepen and master.

#### OAuth2/OIDC

While I was in CAPP I wrote a library that implemented the OAuth 2.0 Authentication Code flow with PKCE because I was not fully convinced by the npm libraries that were available. This gave me the opportunity to implement a complex set of features, from the creation of cryptographically secure strings to the flow of redirects and validation steps, starting from the bare RFC description of the protocol.

#### RxJS

While I was trying to truly master Angular, I took the chance to get to master reactive programming and RxJS. I really like how this kind of programming make you think of a portion of the application state as a consequence of changes that happen over time. Observables make it possible to have immutable, declarative state in an object-oriented architecture.
