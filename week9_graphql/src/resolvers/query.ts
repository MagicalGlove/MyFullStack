// import { books, categories } from '../data';
import { Person, Args, Context } from '../types';

export default {
  people: (_parent:never, _args:Args, {people}:Context) => people,
}