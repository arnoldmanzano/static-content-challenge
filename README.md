# Static Content challenge

### Installation/Usage instructions
```sh
$ npm install # install dependencies
$ npm start  # run to start web application
$ npm test  # run to execute tests
```

### Solution approach

Application is created using node.js and express using essential dependencies only for simplicity. Chai and mocha are used for testing, together with chai-http for request and response codes.

The solution makes use of express dynamic routing, and node.js file loading to combine the template with the markdown files. Invalid routes are determined through errors on file load.

Original template.html file has been renamed to views/template.ejs file. There is one line of code changed on loading the content to make use of ejs view engine.

An npm package called marked is used to parse the markdown file into html tags displayed as content on the page.


# Original instructions

**NB: Please do not fork this repository, to avoid your solution being visible from this repository's GitHub page. Please clone this repository and submit your solution as a separate repository.**

The challenge here is to create a node.js application that displays HTML pages at URLs that match the names of the folders in the `content` folder. The content of these pages should come from a combination of the template HTML file and a markdown file containing the content.

For example, for a folder called `about-page`, a request to `/about-page` would return a HTML page created from the `template.html` template and the `about-page/index.md` content file. The `template.html` file contains a `{{content}}` placeholder that would be replaced by the content for each page.

This repository contains a `template.html` template file and a `content` folder with sub-folders containing `index.md` markdown files.

The application should be shipped with three tests:

* one that verifies that requests to valid URLs return a 200 HTTP status code
* one that verifies that requests to valid URLS return a body that contains the HTML generated from the relevant `index.md` markdown file
* one that verifies that requests to URLs that do not match content folders return a 404 HTTP status code

Your application may make use of open-source code libraries. It is entirely up to you how the application performs the challenge.
