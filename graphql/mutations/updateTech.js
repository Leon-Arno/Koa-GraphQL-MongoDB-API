const { GraphQLString } = require('graphql');
const techGraphQLType = require('../types/techType');
const Tech = require('../../models/tech');

module.exports = {
  type: techGraphQLType,
  args: {
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    release_date: { type: GraphQLString },
    by_company: { type: GraphQLString },
    license: { type: GraphQLString }
  },
  async resolve(parent, args) {
    try {
      const technology = await Tech.findById(args.id);
      (technology.name = args.name),
        (technology.release_date = args.release_date),
        (technology.by_company = args.by_company),
        (technology.license = args.license);
      const updatedTech = technology.save();
      return updatedTech;
    } catch (error) {
      throw error;
    }
  }
};
