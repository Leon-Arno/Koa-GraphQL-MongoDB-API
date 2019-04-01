const { GraphQLObjectType, GraphQLString } = require('graphql');

const createTech = require('./mutations/createTech');
const updateTech = require('./mutations/updateTech');
const deleteTech = require('./mutations/deleteTech');

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    createTech,
    updateTech,
    deleteTech
  }
});

module.exports = Mutation;
