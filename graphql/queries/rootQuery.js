const { GraphQLObjectType } = require('graphql');
const queryAllTech = require('./queryAllTech');
const queryTechById = require('./queryTechById');

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    queryAllTech,
    queryTechById
  }
});

module.exports = RootQuery;
