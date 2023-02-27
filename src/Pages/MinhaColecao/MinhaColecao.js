import React from "react";
import Header from "../../Components/Header/Header";
import {
  MinhaColecaoBotao,
  MinhaColecaoCard,
  MinhaColecaoCardTitulo,
  MinhaColecaoContainer,
} from "./StylesMinhaColecao";
import axios from "axios";
const MinhaColecao = () => {
  const [meusJogos, setMeusJogos] = React.useState([]);
  const id_usuario = localStorage.getItem("id");

  React.useEffect(() => {
    axios
      .get("http://localhost:5000/buscarColecao/" + id_usuario)
      .then((response) => {
        setMeusJogos(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id_usuario]);

  return (
    <>
      <Header />
      <MinhaColecaoContainer>
        {meusJogos &&
          meusJogos.map((jogo) => (
            <MinhaColecaoCard>
              <img src={jogo[2]} alt="foto" />
              <MinhaColecaoCardTitulo>{jogo[1]}</MinhaColecaoCardTitulo>
              <MinhaColecaoBotao
                onClick={() => {
                  axios
                    .post("http://localhost:5000/deletarJogo", {
                      id: jogo[0],
                    })
                    .then((response) => {
                      console.log(response);
                      window.location.reload();
                    })
                    .catch((error) => {
                      console.log(error);
                    });
                }}
              >
                Excluir
              </MinhaColecaoBotao>
            </MinhaColecaoCard>
          ))}
      </MinhaColecaoContainer>
    </>
  );
};

export default MinhaColecao;
