const graphQL = require('graphql');
const { GraphQLObjectType, GraphQLString } = graphQL;

const TechType = new GraphQLObjectType({
  name: 'Technology',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    release_date: { type: GraphQLString },
    by_company: { type: GraphQLString },
    license: { type: GraphQLString }
  })
});

module.exports = TechType;
