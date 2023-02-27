import React from "react";
import {
  CardBotao,
  CardConteiner,
  CardImagem,
  CardInfosDivisoria,
  CardItemDetalhes,
  CardListaDetalhes,
  CardTitulo,
} from "./StylesCard";
import axios from "axios";
import Login from "../Login/Login";
import jogadores from "../../Imagens/jogadores.png";
import relogio from "../../Imagens/relogio.png";
import idade from "../../Imagens/idade.png";
import preco from "../../Imagens/preco.png";
// const [jogos, setjogos] = React.useState([]);

// function visualizarJogos() {
//   axios
//     .get("http://localhost:5000/teste")
//     .then((response) => {
//       setjogos(response.data);
//       console.log(response.data);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// }

const Card = (dados) => {
  const [loginStatus, setLoginStatus] = React.useState(false);
  const [jogoAdicionado, setJogoAdicionado] = React.useState(false);
  const [jogos, setJogos] = React.useState([]);
  const [dolar, setDolar] = React.useState();
  const logado = localStorage.getItem("user");
  const id_usuario = localStorage.getItem("id");

  function converterParaReal(valor) {
    const valorConvertido = +valor * +dolar;
    return valorConvertido.toFixed(2);
  }

  React.useEffect(() => {
    fetch("https://economia.awesomeapi.com.br/last/USD-BRL")
      .then((response) => {
        return response.json();
      })
      .then((valorFinal) => {
        setDolar(valorFinal.USDBRL.high);
      });
  }, []);

  React.useEffect(() => {
    axios
      .get("http://localhost:5000/buscarColecao/" + id_usuario)
      .then((response) => {
        setJogos(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id_usuario]);

  React.useEffect(() => {
    jogos.forEach((jogo) => {
      if (dados.nome === jogo[1]) {
        setJogoAdicionado(true);
      }
    });
  }, [dados.nome, jogos]);

  function adicionar(e) {
    setJogoAdicionado(true);
    e.preventDefault();
    if (logado) {
      axios
        .post("http://localhost:5000/insert", {
          nome: dados.nome,
          imagem: dados.imagem,
          duracao_min: dados.duracao_min,
          duracao_max: dados.duracao_max,
          jogadores_min: dados.jogadores_min,
          jogadores_max: dados.jogadores_min,
          idade: dados.idade,
          preco: dados.preco,
          id_usuario: id_usuario,
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log("Deu erro na parada: " + error);
        });
    } else {
      setLoginStatus(true);
    }
  }
  return (
    <>
      {dados.minhaColecao && (
        <>
          <CardConteiner>
            <CardImagem src={dados.imagem} alt="jogo" />
            <CardTitulo>{dados.nome}</CardTitulo>
            <CardListaDetalhes>
              <CardInfosDivisoria>
                <CardItemDetalhes>
                  <img src={relogio} alt="relogio icon" />
                  {dados.duracao_min}~{dados.duracao_max} min
                </CardItemDetalhes>

                <CardItemDetalhes>
                  <img src={jogadores} alt="jogadores icon" />
                  {dados.jogadores_min}-{dados.jogadores_max} jogadores
                </CardItemDetalhes>
              </CardInfosDivisoria>

              <CardInfosDivisoria>
                <CardItemDetalhes>
                  <img src={idade} alt="idade icon" />
                  {dados.idade} anos
                </CardItemDetalhes>

                <CardItemDetalhes>
                  <img src={preco} alt="preco icon" />
                  R$ {converterParaReal(dados.preco)}
                </CardItemDetalhes>
              </CardInfosDivisoria>
            </CardListaDetalhes>
          </CardConteiner>
        </>
      )}
      {!jogoAdicionado && (
        <>
          <CardConteiner>
            <CardImagem src={dados.imagem} alt="jogo" />
            <CardTitulo>{dados.nome}</CardTitulo>
            <CardListaDetalhes>
              <CardInfosDivisoria>
                <CardItemDetalhes>
                  <img src={relogio} alt="relogio icon" />
                  {dados.duracao_min}~{dados.duracao_max} min
                </CardItemDetalhes>

                <CardItemDetalhes>
                  <img src={jogadores} alt="jogadores icon" />
                  {dados.jogadores_min}-{dados.jogadores_max} jogadores
                </CardItemDetalhes>
              </CardInfosDivisoria>

              <CardInfosDivisoria>
                <CardItemDetalhes>
                  <img src={idade} alt="idade icon" />
                  {dados.idade} anos
                </CardItemDetalhes>

                <CardItemDetalhes>
                  <img src={preco} alt="preco icon" />
                  R$ {converterParaReal(dados.preco)}
                </CardItemDetalhes>
              </CardInfosDivisoria>
            </CardListaDetalhes>
            <CardBotao onClick={adicionar}>Adicionar</CardBotao>
            {loginStatus && (
              <>
                <Login setLoginStatus={setLoginStatus} />
              </>
            )}
          </CardConteiner>
        </>
      )}
    </>
  );
};

export default Card;
