const { GraphQLObjectType, GraphQLString } = require('graphql');
const techGraphQLType = require('./techType');
const Tech = require('../models/tech');

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addTechnology: {
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
    },
    updateTechnology: {
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
    },
    deleteTechnology: {
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
          const technology = await Tech.findOneAndDelete(args.id);
          const deletedTech = technology.remove();
          return deletedTech;
        } catch (error) {
          throw error;
        }
      }
    }
  }
});

module.exports = Mutation;
