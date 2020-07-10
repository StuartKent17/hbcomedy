
# HB-Comedy-template

Based off the default [Sapper](https://github.com/sveltejs/sapper) template, available for Rollup and webpack.

  
  

## Getting started

This website is built with Sapper/Svelte, chosen for the speed of development, and ease of use for people with a background in modern javascript development. The output is flat HTML so can be hosted free of change. The templating is fast and allows complex configuration but a very fast output. 
 
 The main commands are 
 ``` npm run dev ``` launches a local development server and builds changes
 ``` npm run deploy ``` runs the export, and deploys the website. 

The website is developed on the ```develop``` branch, and is deployed automatically to the main branch.
 
 

### Hacks / Workarounds
This project has a few workarounds needed for switching between dev / prod

****to work locally****
in line 11 in ```\src\server.js``` you need to comment ```'hbcomedy'``` from the polka args
``` Javascript
	polka() // You can also use Express
		.use(
			// 'hbcomedy',
			compression({ threshold:  0 }),
```
  
****See gallery locally****
if you wish to see the gallery locally change this line (15)
``` Javascript
path: child.path.replace('static','/hbcomedy')
```
to
``` Javascript
 path: child.path.replace('static','')
```
  

***to build/push prod**

> in line 11 in \src\server.js you need to *un*comment 'hbcomedy' from the route args
``` Javascript
	polka() // You can also use Express
		.use(
			'hbcomedy',
			compression({ threshold:  0 }),
```

  


  

### Using `degit`

  

[`degit`](https://github.com/Rich-Harris/degit) is a scaffolding tool that lets you create a directory from a branch in a repository. Use either the `rollup` or `webpack` branch in `sapper-template`:

  

```bash

# for Rollup

npx degit "sveltejs/sapper-template#rollup" my-app

# for webpack

npx degit "sveltejs/sapper-template#webpack" my-app

```

  

### Running the project

  

However you get the code, you can install dependencies and run the project in development mode with:

  

```bash

cd my-app

npm install # npm comes with NODE.JS

npm run dev

```

  

Open up [localhost:3000](http://localhost:3000) and start clicking around.

  

Consult [sapper.svelte.dev](https://sapper.svelte.dev) for help getting started.

  
  

## Structure

  

Sapper expects to find two directories in the root of your project — `src` and `static`.

  
  

### src

  

The [src](src) directory contains the entry points for your app — `client.js`, `server.js` and (optionally) a `service-worker.js` — along with a `template.html` file and a `routes` directory.

  
  

#### src/routes

  

This is the heart of your Sapper app. There are two kinds of routes — *pages*, and *server routes*.

  

**Pages** are Svelte components written in `.svelte` files. When a user first visits the application, they will be served a server-rendered version of the route in question, plus some JavaScript that 'hydrates' the page and initialises a client-side router. From that point forward, navigating to other pages is handled entirely on the client for a fast, app-like feel. (Sapper will preload and cache the code for these subsequent pages, so that navigation is instantaneous.)

  

**Server routes** are modules written in `.js` files, that export functions corresponding to HTTP methods. Each function receives Express `request` and `response` objects as arguments, plus a `next` function. This is useful for creating a JSON API, for example.

  

There are three simple rules for naming the files that define your routes:

  

* A file called `src/routes/about.svelte` corresponds to the `/about` route. A file called `src/routes/blog/[slug].svelte` corresponds to the `/blog/:slug` route, in which case `params.slug` is available to the route

* The file `src/routes/index.svelte` (or `src/routes/index.js`) corresponds to the root of your app. `src/routes/about/index.svelte` is treated the same as `src/routes/about.svelte`.

* Files and directories with a leading underscore do *not* create routes. This allows you to colocate helper modules and components with the routes that depend on them — for example you could have a file called `src/routes/_helpers/datetime.js` and it would *not* create a `/_helpers/datetime` route

  
  

### static

  

The [static](static) directory contains any static assets that should be available. These are served using [sirv](https://github.com/lukeed/sirv).

  

In your [service-worker.js](src/service-worker.js) file, you can import these as `files` from the generated manifest...

  

```js

import { files } from  '@sapper/service-worker';

```

  

...so that you can cache them (though you can choose not to, for example if you don't want to cache very large files).

  
  

## Bundler config

  

Sapper uses Rollup or webpack to provide code-splitting and dynamic imports, as well as compiling your Svelte components. With webpack, it also provides hot module reloading. As long as you don't do anything daft, you can edit the configuration files to add whatever plugins you'd like.

  
  

## Production mode and deployment

  

To start a production version of your app, run `npm run build && npm start`. This will disable live reloading, and activate the appropriate bundler plugins.

  

You can deploy your application to any environment that supports Node 10 or above. As an example, to deploy to [Vercel Now](https://vercel.com) when using `sapper export`, run these commands:

  

```bash

npm install -g now

now

```

  

If your app can't be exported to a static site, you can use the [now-sapper](https://github.com/thgh/now-sapper) builder. You can find instructions on how to do so in its [README](https://github.com/thgh/now-sapper#basic-usage).

  
  

## Using external components

  

When using Svelte components installed from npm, such as [@sveltejs/svelte-virtual-list](https://github.com/sveltejs/svelte-virtual-list), Svelte needs the original component source (rather than any precompiled JavaScript that ships with the component). This allows the component to be rendered server-side, and also keeps your client-side app smaller.

  

Because of that, it's essential that the bundler doesn't treat the package as an *external dependency*. You can either modify the `external` option under `server` in [rollup.config.js](rollup.config.js) or the `externals` option in [webpack.config.js](webpack.config.js), or simply install the package to `devDependencies` rather than `dependencies`, which will cause it to get bundled (and therefore compiled) with your app:

  

```bash

npm install -D @sveltejs/svelte-virtual-list

```

  
  

## Bugs and feedback

  

Sapper is in early development, and may have the odd rough edge here and there. Please be vocal over on the [Sapper issue tracker](https://github.com/sveltejs/sapper/issues).