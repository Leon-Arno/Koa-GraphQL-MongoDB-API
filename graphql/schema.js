const { GraphQLSchema, GraphQLObjectType, GraphQLString } = require('graphql');
const techGraphQLType = require('./techType');
const Tech = require('../models/tech');

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    tech: {
      type: techGraphQLType,
      args: { id: { type: GraphQLString } },
      resolve(parent, args) {
        return Tech.findById(args.id);
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
