import React from "react";
import { gql, useQuery, useMutation } from "@apollo/client";
import { useParams, Link, useHistory } from "react-router-dom";
import { GET_FRUTA_BY_ID } from "./Fruta";

const UPDATE_FRUTA = gql`
  mutation UpdateFruta(
    $id: String!
    $nome: String
    $acucar: String
    $calorias: String
  ) {
    updateFruta(
      id: $id
      fruta: { nome: $nome, informacoes: { acucar: $acucar, calorias: $calorias } }
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

const EditFruta = () => {
  const { id } = useParams();
  const history = useHistory();

  const { loading, error, data } = useQuery(GET_FRUTA_BY_ID, {
    variables: { id },
  });
  const [updateFruta, { error: mutationError }] = useMutation(UPDATE_FRUTA, {
    onCompleted() {
      history.push(`/`);
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error || mutationError) return <p>Error :(</p>;

  let nomeInput;
  let acucarInput;
  let caloriasInput;

  return (
    <div>
      <form
        className="App-viewbox"
        onSubmit={(e) => {
          e.preventDefault();

          updateFruta({
            variables: {
              id: data.fruta.id,
              nome: nomeInput.value,
              acucar: acucarInput.value,
              calorias: caloriasInput.value,
            },
          });
        }}
      >
        <p>
          <label>
            Fruta
            <br />
            <input
              type="text"
              name="nome"
              defaultValue={data.fruta.nome}
              ref={(node) => {
                nomeInput = node;
              }}
            />
          </label>
        </p>
        <p>
          <label>
            Açucar (g)
            <br />
            <input
              type="text"
              name="acucar"
              defaultValue={data.fruta.informacoes.acucar}
              ref={(node) => {
                acucarInput = node;
              }}
            />
          </label>
        </p>
        <p>
          <label>
            Calorias
            <br />
            <input
              type="text"
              name="calorias"
              defaultValue={data.fruta.informacoes.calorias}
              ref={(node) => {
                caloriasInput = node;
              }}
            />
          </label>
        </p>
        <p className="App-close-btn">
          <Link to="/">
            <button type="button">X</button>
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

export default EditFruta;