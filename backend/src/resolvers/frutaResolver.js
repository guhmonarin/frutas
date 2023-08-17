const Fruta = require("../models/frutas");

const frutaResolver = {
    Query: {
        frutas() {
            return Fruta.find();
        },
        fruta(_, {id}){
            return Fruta.findById(id);
        }
    },
    Mutation: {
        createFruta(_, {fruta}) {
            const newFruta = new Fruta(fruta);
            return newFruta.save();
        },
        updateFruta(_, {id, fruta}) {
            return Fruta.findByIdAndUpdate(id, fruta, {
                new: true,
                useFindAndModify: false,
            });
        },
        deleteFruta(_, {id}) {
            return Fruta.findByIdAndRemove(id, {
                useFindAndModify: false,
            });
        },
    },
};

module.exports = frutaResolver;