const {gql} = require("apollo-server");

const query = gql`
    type Query {
        frutas: [Fruta]
        fruta(id:ID!): Fruta
    }
`;

module.exports = query;