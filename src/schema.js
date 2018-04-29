const _ = require('lodash');
const Parks = require('./data/parks');

let {
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLFloat,
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLSchema,
} = require('graphql');

const ParkType = new GraphQLObjectType({
  name: 'Park',
  description: 'This represent an park.',
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLInt) },
    name: { type: new GraphQLNonNull(GraphQLString) },
    location: { type: LocationType },
  }),
});

const LocationType = new GraphQLObjectType({
  name: 'Location',
  description: 'This represent the park location.',
  fields: () => ({
    latitude: { type: new GraphQLNonNull(GraphQLFloat) },
    longitude: { type: new GraphQLNonNull(GraphQLFloat) },
  }),
});

// This is the Root Query
const ParksQueryRootType = new GraphQLObjectType({
  name: 'ParkAppSchema',
  description: 'Parks Schema Query Root',
  fields: () => ({
    parks: {
      type: new GraphQLList(ParkType),
      description: 'List of all parks',
      resolve: function() {
        return Parks;
      },
    },
  }),
});

// This is the schema declaration
const ParksAppSchema = new GraphQLSchema({
  query: ParksQueryRootType,
});

module.exports = ParksAppSchema;
