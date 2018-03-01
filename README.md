# Vue, Apollo, GraphQL & Node Server

> Initial boilerplate wire-up of Vue.js, Apollo, and graphQL.

## Setup Vue
Install vue-cli if you have not already. Then create a standard vue project.
``` bash
vue init webpack my-project
cd my-project
npm install
npm run dev
```
## Setup Apollo & GraphQL
Install the server side packages.
``` bash
npm install apollo-boost apollo-server-express vue-apollo graphql graphql-tools cors
```
Cors which is used in server.js solved a 405 connection issue that I was having. The remainder of the code comes directly from: http://graphql.org/code/#javascript. 

## Run Server
Open a second terminal and startup the server
``` bash
node server.js
```
You should now see "Hello World" which is being populated by the apollo server using graphQL.
