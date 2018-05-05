import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLFloat,
  GraphQLList,
  GraphQLScalarType
 } from 'graphql';

var GeoJSON = new GraphQLScalarType({
  name: 'GeoJSON',
  serialize: (value) => {
    return value;
  },
  parseValue: (value) => {
    return value;
  },
  parseLiteral: (ast) => {
    return ast.value;
  }
});

export default new GraphQLObjectType({
  name: 'geometry',
  description: 'This object represents the geometry of the byway',
  fields: {
    paths: {type: GeoJSON },
  },
});
