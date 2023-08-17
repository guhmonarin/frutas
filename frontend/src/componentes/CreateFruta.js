import React from "react";
import {gql, useMutation} from "@apollo/client";
import {Link, useHistory} from "react-router-dom";
import { GET_FRUTAS } from "./Frutas";

const CREATE_FRUTA = gql `
    mutation UpdateFruta($nome: String!, $acucar: String!, $calorias: String!) {
        createFruta(
            fruta: {nome: $nome, informacoes: {acucar:$acucar, calorias: $calorias}}
        ) {
            id
            nome
            informacoes {
                calorias
                acucar
            }
        }
    }
`;

const CreateFruta = () => {
    const history = useHistory();

    const [createFruta, {loading, error}] = useMutation(CREATE_FRUTA, {
        update(cache, {data:{createFruta}}) {
            const {frutas} = cache.readQuery({ query:GET_FRUTAS});
            cache.writeQuery({
                query: GET_FRUTAS,
                data: { frutas: frutas.concat([createFruta])},
            });
        },
        onCompleted() {
            history.push(`/`);
        },
    });

    if (loading) return <p>Carregando...</p>;
    if (error) return <p>Erro</p>;

    let nomeInput;
    let acucarInput;
    let caloriasInput;

    return (
        <div>
            <form className="App-viewbox" onSubmit={(e) => {
                e.preventDefault();

                createFruta({
                    variables: {
                        nome: nomeInput.value,
                        acucar: acucarInput.value,
                        calorias: caloriasInput.value,
                    },
                });

                nomeInput.value = "";
                acucarInput.value = "";
                caloriasInput.value = "";
            }}
            >
                <p>
                    <label>
                        Fruta
                        <br/>
                        <input 
                            type="text"
                            name="nome"
                            ref={(node) => {
                                nomeInput = node;
                            }}
                        />
                    </label>
                </p>
                <p>
                    <label>
                        Açucar(g)
                        <br/>
                        <input 
                            type="text"
                            name="acucar"
                            ref={(node) => {
                                acucarInput = node;
                            }}
                        />
                    </label>
                </p>
                <p className="App-close-btn">
                    <Link to="/">
                        <button>X</button>
                    </Link>
                </p>
                <p>
                    <button className="App-btn" type="submit">
                        Salvar
                    </button>
                </p>
            </form>
        </div>
    );
};

export default CreateFruta;