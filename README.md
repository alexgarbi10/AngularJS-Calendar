# `angular-app`

AngularJS web-based application. The skeleton of the project was cloned from the angular-seed code.
It's used to quickly bootstrap a base prototype. For more information, refer to the following link:
https://github.com/angular/angular-seed.

## Getting Started

To get started you can simply clone the `angular-app` repository and install the dependencies:

### Prerequisites

The application uses a number of Node.js tools to initialize `angular-app`. You must have Node.js
and its package manager (npm) installed. You can get them from https://nodejs.org/en/. Also, you will need Bower
(a client-side package manager).

### Clone `angular-app`

Clone the `angular-app` repository using git:

```
git clone https://github.com/alexgarbi10/AngularJS-Calendar.git
cd AngularJS-Calendar
```

### Install Dependencies

The application is preconfigured so that you can install everything with the following commands:

```
npm install
npm install -g bower
bower install
```

This should create two folders: node_modules and bower_components. Bower components should be located inside the app folder.

### Run the Application

The application is preconfigured as a simple development web server. The simplest way to start
this server is:

```
npm start
```

Now browse to the app at [`localhost:8000/index.html`].

### Additional information
- Input type date doesn't work on Firefox browser.
- Holidays don't have rollover labels.
