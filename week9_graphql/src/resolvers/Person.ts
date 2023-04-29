import { Person } from '../types';

export default {

  addresses: async (parent:Person)=> {
    return parent.address
  },

};