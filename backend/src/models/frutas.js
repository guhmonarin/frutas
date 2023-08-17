const mongoose = require("mongoose");
const FrutaSchema = mongoose.Schema({
    nome: String,
    informacoes: {
        acucar: String,
        calorias: String,
    },
});

module.exports = mongoose.model("Fruta", FrutaSchema);