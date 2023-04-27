type Person = {
  id: string;
  name: string;
  age: number;
  dream: string;
};

type Context = {
  people: Person[];
};

type Args = {
  id: string;
  input: Person;
};

export type { Person  , Context, Args };