# vue-apollo-base

> A project composed of Vue.js, Apollo, and graphQL.

## Installation

#Setup Vue
``` bash
# install vue-cli
$ npm install --global vue-cli
# create a new project using the "webpack" template
$ vue init webpack my-project
# install dependencies and go!
$ cd my-project
$ npm install
# serve with hot reload at localhost:8080
$ npm run dev
```
#Setup Apollo & GraphQL
``` bash
#Cors which is used in server.js solved a 405 connection issue that I was having 
$ npm install apollo-boost apollo-server-express vue-apollo graphql graphql-tools cors
#Open a second terminal and startup the server
$ node server.js

# You should now see "Hello World" which is being populated by the apollo server using graphQL
```

