Directory Structure:
https://docs.google.com/document/d/152VIGxCrwdZyFlkOq3--NJMXlRzV56D0CX70pWtkaLA/edit

The root directory here is the src directory, which is one of the two base directories in React Application (the public folder being the other). In the src directory, we will have the basic App.js and index.js files in the root of the folder. Then, we'll have nested directories for each of the features in the application.

assets: In this directory, we can put all the static assets of the application like icons, or fonts.

common: This directory contains all the resources that are commonly between multiple components like Form Elements, etc.

components: While working on React Application, we must have a components based approach, in this directory, we can place all re-usable or independent components or stateless components like UI components, etc.

constants: Inside the constants directory, can place the constants like messages, routes, themes, etc.

containers: In this directory, we can place all the authenticated and stateful components.

layout: An application should have multiple layouts like Registration layout, Onboarding
layout, Dashboard layout. Here we can create a common component for common styling for child
components. Here we can also define components like TopBar, Side Menu, etc

pages: All the unauthenticated and stateless components as pages are being placed inside pages.
services: An application may need additional services like API Service, local storage services, etc.

modules: we’re using react-redux for central state management. All the actions and reducers related to application state are going to be placed inside this directory.

utils: This directory contains validations, hooks, etc.
