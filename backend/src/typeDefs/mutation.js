const {gql}  = require("apollo-server");

const mutation = gql`
    type Mutation {
        createFruta(fruta: FrutaInput): Fruta
        updateFruta(id: String, fruta: FrutaInput): Fruta
        deleteFruta(id: String): Fruta
    }
    input FrutaInput {
        nome: String
        informacoes: InformacoesInput
    }
    input InformacoesInput{
        acucar: String
        calorias: String
    }
`;

module.exports = mutation