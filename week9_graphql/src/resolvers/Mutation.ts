import { Person, Address, Context, Args } from '../types';
import { addresses } from '../data';

export default {
  createPerson: (_parent: never, { input }: Args, { people }: Context) => {
    if ('name' in input) { // input is a Person
      const newPerson: Person = {
        id: String(people.length + 1),
        name: input.name,
        age: input.age,
        dream: input.dream,
        address: input.address,
      };
      console.log('input: ', input, newPerson);
      people.push(newPerson);
      return newPerson;
    } else {
      console.log("MonkeyTime");
      return null;
    }
  },createAddress: (parent: Address, { input }: Args, { addresses }: Context) => {
    if ('street' in input) {
      const address: Address = {
        id: String(addresses.length + 1),
        street: input.street,
        city: input.city,
        people: input.people
      }
      addresses.push(address)
      return address;
    }
  },
};