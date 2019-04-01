const { GraphQLSchema, GraphQLObjectType, GraphQLString } = require('graphql');
const techGraphQLType = require('./techType');
const Technology = require('../models/tech');
const Mutation = require('./mutations');

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    technology: {
      type: techGraphQLType,
      args: { id: { type: GraphQLString } },
      resolve(parent, args) {
        return Technology.findById(args.id);
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
});
