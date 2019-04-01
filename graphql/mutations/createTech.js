const { GraphQLObjectType, GraphQLString } = require('graphql');
const techGraphQLType = require('../techType');
const Tech = require('../../models/tech');

module.exports = {
  type: techGraphQLType,
  args: {
    name: { type: GraphQLString },
    release_date: { type: GraphQLString },
    by_company: { type: GraphQLString },
    license: { type: GraphQLString }
  },
  async resolve(parent, args) {
    const newTech = await new Tech({
      name: args.name,
      release_date: args.release_date,
      by_company: args.by_company,
      license: args.license
    });

    return newTech.save();
  }
};
