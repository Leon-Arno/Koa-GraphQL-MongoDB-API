const graphQL = require('graphql');
const { GraphQLObjectType, GraphQLString } = graphQL;

const TechType = new GraphQLObjectType({
  name: 'Tech',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    release_date: { type: GraphQLString },
    by_company: { type: GraphQLString },
    open_source: { type: GraphQLString }
  })
});

module.exports = TechType;
