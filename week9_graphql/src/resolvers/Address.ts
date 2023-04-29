import { Person, Context, Address, Args } from '../types'
export default {

  people: async (parent:Address)=> {
    return parent.people
  },
}