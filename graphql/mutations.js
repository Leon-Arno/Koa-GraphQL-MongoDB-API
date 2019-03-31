const { GraphQLObjectType, GraphQLString } = require('graphql');
const techGraphQLType = require('./techType');
const Tech = require('../models/tech');

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addTechnology: {
      type: techGraphQLType,
      args: {
        name: { type: GraphQLString },
        release_date: { type: GraphQLString },
        by_company: { type: GraphQLString },
        license: { type: GraphQLString }
      }
    }
  }
});

module.exports = Mutation;
