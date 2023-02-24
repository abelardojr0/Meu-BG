import React from "react";
import Header from "../../Components/Header/Header";
import {
  MinhaColecaoCard,
  MinhaColecaoCardTitulo,
  MinhaColecaoContainer,
} from "./StylesMinhaColecao";
import axios from "axios";
const MinhaColecao = () => {
  const [meusJogos, setMeusJogos] = React.useState([]);
  const id_usuario = localStorage.getItem("id");
  React.useEffect(() => {
    const jogos = JSON.parse(localStorage.getItem("jogos")) || [];
    setMeusJogos(jogos);
  }, []);

  return (
    <>
      <Header />
      <MinhaColecaoContainer>
        {meusJogos &&
          meusJogos.map((jogo) => (
            <MinhaColecaoCard>
              <img src={jogo[2]} alt="foto" />
              <MinhaColecaoCardTitulo>{jogo[1]}</MinhaColecaoCardTitulo>
              <button
                onClick={() => {
                  axios
                    .post("http://localhost:5000/deletarJogo", {
                      id: jogo[0],
                    })
                    .then((response) => {
                      console.log(response);
                      axios
                        .get(
                          "http://localhost:5000/buscarColecao/" + id_usuario
                        )
                        .then((response) => {
                          localStorage.setItem(
                            "jogos",
                            JSON.stringify(response.data)
                          );
                        })
                        .catch((error) => {
                          console.log(error);
                        });
                    })
                    .catch((error) => {
                      console.log(error);
                    });
                }}
              >
                Excluir
              </button>
            </MinhaColecaoCard>
          ))}
      </MinhaColecaoContainer>
    </>
  );
};

export default MinhaColecao;
