type Person = {
  id: string;
  name: string;
  age: number;
  dream: string;
  address: Address;
};

type Address = {
  id: string;
  street: string;
  city: string;
  people: Person[];
};

type Context = {
  people: Person[];
  addresses: Address[];
};

type Args = {
  id: string;
  input: Person | Address;
};

export type { Person, Address , Context, Args };