import { Person, Address, Context, Args } from '../types';
import { addresses } from '../data';

export default {
  createPerson: (_parent: never, { input }: Args, { people }: Context) => {
    if ('name' in input) {
      const newPerson: Person = {
        id: String(people.length + 1),
        name: input.name,
        age: input.age,
        dream: input.dream,
        address: input.address,
      };
      people.push(newPerson);
      return newPerson;
    } else {
      return null;
    }
  },
  createAddress: (parent: Address, { input }: Args, { addresses }: Context) => {
    if ('street' in input) {
      const address: Address = {
        id: String(addresses.length + 1),
        street: input.street,
        city: input.city,
        people: input.people
      };
      addresses.push(address);
      return address;
    }
  },
  addPersonToAddress: (parent: Address, { personId, addressId }: Args, { people, addresses }: Context) => {
    const person = people.find(p => p.id === personId);
    const address = addresses.find(a => a.id === addressId);
    if (person && address) {
      address.people.push(person);
      return address;
    } else {
      return null;
    }
  },
  removePersonFromAddress: (parent: Address, { personId, addressId }: Args, { people, addresses }: Context) => {
    const address = addresses.find(a => a.id === addressId);
    if (address) {
      const personIndex = address.people.findIndex(p => p.id === personId);
      if (personIndex !== -1) {
        address.people.splice(personIndex, 1);
        return address;
      }
    }
    return null;
  },
  deletePerson: (parent: never, { id }: Args, { people }: Context) => {
    const personIndex = people.findIndex(p => p.id === id);
    if (personIndex !== -1) {
      const deletedPerson = people.splice(personIndex, 1)[0];
      return deletedPerson;
    }
    return null;
  },
};
