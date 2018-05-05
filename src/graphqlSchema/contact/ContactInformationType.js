import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt,
} from 'graphql';

import AddressType from './AddressType';

export default new GraphQLObjectType({
  name: 'ContactInformation',
  description: 'This object represents contact information type.',
  fields: {
    manager: { type: new GraphQLNonNull(GraphQLString) },
    phone: { type: new GraphQLNonNull(GraphQLString) },
    email: { type: new GraphQLNonNull(GraphQLString) },
    officeHours: { type: GraphQLString },
    officeName: { type: GraphQLString },
    address: { type: AddressType },
  },
});
