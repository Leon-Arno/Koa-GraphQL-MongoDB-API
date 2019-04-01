const { GraphQLString } = require('graphql');
const techGraphQLType = require('../techType');
const Tech = require('../../models/tech');

module.exports = {
  type: techGraphQLType,
  args: {
    id: { type: GraphQLString }
  },
  async resolve(parent, args) {
    try {
      const technology = await Tech.findOneAndDelete(args.id);
      const deletedTech = technology.remove();
      return deletedTech;
    } catch (error) {
      throw error;
    }
  }
};
