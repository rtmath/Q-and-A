# Ember Questions (aka Q-and-A)

This is a project to make a Yahoo! Answers-style Question-and-Answer board, where users can post questions and get answers from other users. Currently it does not support any actual user system, but does have functioning CRUD support working between Ember and Firebase.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Bower](https://bower.io/)
* [Ember CLI](https://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)
* [Firebase](https://console.firebase.google.com/)
## Installation

* `git clone <repository-url>` this repository
* `cd q-and-a`
* `npm install`
* `bower install`

## Running / Development

(I included a 'seed.json' for you to seed your Firebase database if you would like to.)

* In Google's firebase console, create a new project
* Select 'Add Firebase to your web app' on the Overview screen
* Copy the apiKey, authDomain, databaseURL, and storage bucket from the firebase screen that appears
* In this project's ~/config/environment.js, paste those 4 lines into the firebase section
* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### License

Copyright (c) 2016 Ryan Mathisen

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
