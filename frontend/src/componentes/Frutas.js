import React from "react";
import {gql, useQuery} from "@apollo/client";
import {Link} from "react-router-dom";

export const GET_FRUTAS = gql`
    {
        frutas {
            id
            nome
        }
    }
`;

const Frutaslist = () => {
    const {loading, error, data} = useQuery(GET_FRUTAS);

    if(loading) return <p>Carregando...</p>;
    if (error) return <p>Erro</p>;

    return (
        <>
          <ul>
            {data.frutas &&
              data.frutas.map(({ nome, id }) => (
                <li key={id}>
                  <span>{nome}</span>
                  <div className="App-item-actions">
                    <Link to={`/fruta/${id}`}>
                      <span role="img" aria-label="visualizar">
                        👀
                      </span>
                    </Link>
                    <Link to={`/editFruta/${id}`}>
                      <span role="img" aria-label="editar">
                        ✏️
                      </span>
                    </Link>
                    <Link to={`/deleteFruit/${id}`}>
                      <span role="img" aria-label="excluir">
                        ❌
                      </span>
                    </Link>
                  </div>
                </li>
              ))}
          </ul>
    
          <p>
            <Link to="/createFruta">
              <button>Nova Fruta</button>
            </Link>
          </p>
        </>
      );
    
};

export default Frutaslist;