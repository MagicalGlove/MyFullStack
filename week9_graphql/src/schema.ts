const typeDefs = `#graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Person" type defines the queryable fields for every person in our data source.
  type Person {
    id: ID!
    name: String!
    age: String!
    dream: String
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  # The "books" query accepts an optional "author" argument of type String. And returns a list always (even if it's empty). Never null. And content will allways be a Book object or empty. never null.
  type Query {
    people: [Person!]!
    
  }
 
  # type Mutation {
    # createBook(input: BookInput!): Book
    # createRating(input: RatingInput!): Rating
    # deleteBook(id: ID!): Boolean
    # updateBook(id: ID!, input: BookInput!): Book
  # }
  
`;

export default typeDefs;