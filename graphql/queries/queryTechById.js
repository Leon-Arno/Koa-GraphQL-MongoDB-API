const { GraphQLString } = require('graphql');
const techGraphQLType = require('../techType');
const Technology = require('../../models/tech');

module.exports = {
  type: techGraphQLType,
  args: { id: { type: GraphQLString } },
  async resolve(parent, args) {
    return await Technology.findById(args.id);
  }
};
