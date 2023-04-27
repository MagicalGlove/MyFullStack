import { Person, Address, Context, Args } from '../types';

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
      return null;
    }

  },
};