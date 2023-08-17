import React from "react";
import {gql, useQuery} from "@apollo/client";
import { useParams, Link} from "react-router-dom";

export const GET_FRUTA_BY_ID = gql `
    query GetFruta($id: ID!){
        fruta(id: $id) {
            id
            nome
            informacoes {
                acucar
                calorias
            }
        }
    }
    `;

    const Fruta = () => {
        const {id} = useParams();
        const {loading, error, data} = useQuery(GET_FRUTA_BY_ID, {
            variaveis: {id},
        });

        if (loading) return <p>Carregando...</p>;
        if (error) return <p>Erro</p>;

        return (
            <div className="App-viewbox">
                <p>
                    <strong>Fruta: </strong>
                    {data.fruta.nome}
                </p>
                <p>
                    <strong>Açucar: </strong>
                    {data.fruta.informacoes.acucar} g
                </p>
                <p>
                    <strong>Calorias: </strong>
                    {data.fruta.informacoes.calorias} kcal
                </p>
                <p className="App-close-btn">
                    <Link to="/">
                        <button>X</button>
                    </Link>
                </p>
                <p>
                    <Link to={`/editFruta/${id}`}>
                        <button>Editar</button>
                    </Link>
                </p>
            </div>
        );
    };

    export default Fruta;