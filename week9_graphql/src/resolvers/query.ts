import { Person, Address, Args, Context } from '../types';

export default {
  people: (_parent: never, _args: Args, { people }: Context) => people,
  addresses: (_parent: never, _args: Args, { addresses, people }: Context) =>
    addresses.map((address: Address) => ({
      ...address,
        people: people.filter((person: Person) => person?.address?.id === address.id),
    })),
};