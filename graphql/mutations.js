const { GraphQLObjectType, GraphQLString } = require('graphql');
const techGraphQLType = require('./techType');
const Tech = require('../models/tech');

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addTechnology: {
      type: techGraphQLType
    }
  }
});

module.exports = Mutation;
