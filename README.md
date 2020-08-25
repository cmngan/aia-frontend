# AIA Frontend

## Routing
- entry point: containers/index.js
- Each route can be defined by 
```
Component.title = 'I am details title on the top';
Component.route = 'details:/sort';
```

## File structure
We use a flat file structure. `compounds` is a new concept added in this project to see if it helps on organizing ui reusable element with data. 
- components: all reusable ui elements. From simple to complex components. Potentially change to use atomic design
- compounds: compose with component(s) and data/functions. Reusable and independent for different pages. 
- containers: all screens. 

## Requirement

Technical Test   
  
The task is to create a Web responsive app and a RN app that share the business logic,   the only thing that should be different is the presentation layer.  
  
User can register and can login  
  
The app is a simple CRUD that will have the following sections:  
Register Page  
Login Page  
Dashboard Page  
Profile Page  

Things to evaluate:  
Code structure and cleanliness  
UI / Design  
Animation / Transitions  
App should work in iOS and Android, Main web browsers  
