import React from "react";
import { gql, useQuery, useMutation } from "@apollo/client";
import { useParams, Link, useHistory } from "react-router-dom";
import { GET_FRUTAS } from "./Frutas";
import { GET_FRUTA_BY_ID } from "./Fruta";

const DELETE_FRUTA = gql`
  mutation DeleteFruta($id: String) {
    deleteFruta(id: $id) {
      id
      nome
      informacoes {
        calorias
        acucar
      }
    }
  }
`;

const DeleteFruta = () => {
  const history = useHistory();
  const { id } = useParams();

  const { loading, error, data } = useQuery(GET_FRUTA_BY_ID, {
    variables: { id },
  });

  const [deleteFruta, { error: mutationError }] = useMutation(DELETE_FRUTA, {
    update(cache) {
      const { frutas } = cache.readQuery({ query: GET_FRUTAS });

      const deletedIndex = frutas.findIndex((fruta) => fruta.id === id);
      const updatedCache = [
        ...frutas.slice(0, deletedIndex),
        ...frutas.slice(deletedIndex + 1, frutas.length),
      ];
      cache.writeQuery({
        query: GET_FRUTAS,
        data: {
          frutas: updatedCache,
        },
      });
    },
    onCompleted() {
      history.push(`/`);
    },
  });

  if (loading) return <p>Carregando...</p>;
  if (error || mutationError) return <p>Error</p>;

  return (
    <div>
      <form
        className="App-viewbox"
        onSubmit={(e) => {
          e.preventDefault();

          deleteFruta({
            variables: { id },
          });
        }}
      >
        <p>
          Excluir <strong>{data.fruta.nome}</strong>?
        </p>
        <p className="App-close-btn">
          <Link to="/">
            <button>X</button>
          </Link>
        </p>
        <p>
          <button className="App-btn" type="submit">
            Excluir
          </button>
        </p>
      </form>
    </div>
  );
};

export default DeleteFruta;