# Hiresly

Connecting employers with developers in the Portland Metro Area.

Developers can create a profile, complete code challenges and generally prove their abilities. Developers must return a full answer and a video walkthrough (screencast) of their code.

Employers can see what the dev talent have to offer and can even send tests  (made up of a problem) to developers to further see what the developer can do.

The idea for this app came from looking at the local job-board webside [Mac's List](https://www.macslist.org/) and coming to the conclusion that we could do the same thing, but better, and for developers. Let the developers shine!

## 1 Where We Are:

* Basic routes made for logging in as an employer or developer
* Basic Models created for employers, developers, problems, and tests
* Basic sign-up and login forms built and handled by router actions
* Fake login is implemented via buttons in login
* employers and companies fill out their full profiles after sign-up to further interact with the site
* developers have to take a test to finish their profile before it should presented to employers list page (a page that still doesn't exist)

## 2 Notes About Where We Are:

* Sign-up and login have no authentication
* passwords are stored in plaintext

## 3 Where We Want To Go:

* get first-test action to fire with building a new test object for a developer
* build profile page for employers with form to add new/custom problem objects
* build page for employers to see all currently available developers
* build page for developers to view employers currently seeking developers
* Roll in Authentication (can we get a volunteer for this?)
* Add linkedIn profile links to developers to ease form completion on the developer user end?
* styling can be done at the will of anyone involved.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://www.ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

One Day we'll have it deployed. Still in development.
