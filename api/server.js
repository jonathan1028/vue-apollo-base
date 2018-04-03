var express = require('express');
var bodyParser = require('body-parser');
// Without adding cors I was having graphql connection issues. See this issue: https://github.com/apollographql/apollo-server/issues/269
var cors = require('cors');
var { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
var { makeExecutableSchema } = require('graphql-tools');

var typeDefs = [`
type Query {
  hello: String
}

schema {
  query: Query
}`];

var resolvers = {
  Query: {
    hello(root) {
      return 'Hello from server!';
    }
  }
};

var schema = makeExecutableSchema({typeDefs, resolvers});
var app = express();
app.use('/graphql', cors(), bodyParser.json(), graphqlExpress({schema}));
app.use('/graphiql', graphiqlExpress({endpointURL: '/graphql'}));
app.listen(4000, () => console.log('Now browse to localhost:4000/graphiql'));
console.log("Hi, from server")