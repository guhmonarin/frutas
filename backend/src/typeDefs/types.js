const {gql} = require("apollo-server");

const types = gql`
    type Fruta {
        id: ID!
        nome: String
        informacoes: Informacoes
    }
    
    type Informacoes {
        calorias: String
        acucar: String
    }
    `;

module.exports = types;