# typescript-angular-webpack

#Overview

This is a template application to get you up and running with a solid implementation and structure of an **AngularJS** single page app. The main point of this is to have **Typescript and Webpack** setup, run continuous testing in development mode with Testem and finally have an easy to use Packager that will package your application for deployment.

    Feature
        - typescript with webpack and angular
        - annotation: require your dependencies without write complete path: 
            - app/src/modules/entry/Controller.ts -> entry.Controller
        - write your code without reload your browser
        - mock server
        - gulp
        - test (still missing)
        - generate documentation (still missing - there's no good tool that works with webpack and typescript.)
        
        - the compiled output has 2 files:
            - dist/bundle.js --> our code
            - vendor.bundle.js --> angular code and other dependencies
        

#Requirements

- NodeJS >= v0.12.0
- NPM >= v2.5.1



#Intallation
Once the required software is installed (NodeJS, NPM) run the command:
- sudo npm install 
- bower install

#Package and file structure
app: For the Application properties
All your modules must be created inside the folder app/modules (i.e. app/modules/entry)


#Starts a basic WebServer
- gulp

- The main advantage is that you can write the code in your editor and see the changes in your browser without reload it. Open your browser (I've tested with chrome) at the following address:
    - http://localhost:8090/webpack-dev-server/app/src/index.html 
         
- otherwise (not still ready for the production environment need same other configuration):
    - http://localhost:8090/app/src/index.html
