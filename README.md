# typescript-angular-webpack

#Overview

This is a template application to get you up and running with a solid implementation and structure of a angularJS single page app. The main point of this is to have Typescript and Webstorm setup, run continuous testing in development mode with Testem and finally have an easy to use Packager that will package your application for deployment.

Requirements

NodeJS >= v0.12.0
NPM >= v2.5.1

#Intallation
Once the required software is installed (NodeJS, NPM) run the command:
- sudo npm install 
- bower install

#Package and file structure
app: For the Application properties
All your modules must be created inside the folder app/modules (i.e. app/modules/entry)


#Starts a basic WebServer
- npm start

- If you need live reloading you can open your browser (I've tested with chrome) at the following address:
    - http://localhost:8090/webpack-dev-server/app/src/index.html (the main advantage is that you can write the code in your editor and see the changes in your browser without reload it)
     
- otherwise:
    - http://localhost:8090/app/src/index.html
