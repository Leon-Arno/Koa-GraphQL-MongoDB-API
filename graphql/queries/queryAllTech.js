const { GraphQLList } = require('graphql');
const techGraphQLType = require('../techType');
const Technology = require('../../models/tech');

module.exports = {
  type: new GraphQLList(techGraphQLType),
  args: {},
  async resolve() {
    return await Technology.find({});
  }
};
