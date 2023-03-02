import React from "react";
import {
  CardBotao,
  CardCarregando,
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
  const [carregando, setCarregando] = React.useState(true);
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
    if (id_usuario) {
      axios
        .get("http://localhost:5000/buscarColecao/" + id_usuario)
        .then((response) => {
          response.data.forEach((jogo) => {
            if (dados.nome === jogo[1]) {
              setJogoAdicionado(true);
            }
          });
          setCarregando(false);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      setCarregando(false);
    }
  }, [id_usuario, dados.nome]);

  function adicionar(e) {
    e.preventDefault();
    if (logado) {
      setJogoAdicionado(true);
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
          console.log("Error: " + error);
        });
    } else {
      setLoginStatus(true);
    }
  }
  function remover() {
    axios
      .post("http://localhost:5000/deletarJogo", {
        id: dados.id,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <>
      {dados.minhaColecao && !carregando && (
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
                  {dados.idade} anos +
                </CardItemDetalhes>

                <CardItemDetalhes>
                  <img src={preco} alt="preco icon" />
                  {converterParaReal(dados.preco)}
                </CardItemDetalhes>
              </CardInfosDivisoria>
            </CardListaDetalhes>
            <CardBotao onClick={remover}>Remover</CardBotao>
          </CardConteiner>
        </>
      )}
      {carregando && <CardCarregando />}
      {!jogoAdicionado && !carregando && (
        <>
          <CardConteiner>
            <CardImagem src={dados.imagem} alt="jogo" />
            <CardTitulo>{dados.nome}</CardTitulo>
            <CardListaDetalhes>
              <CardInfosDivisoria>
                <CardItemDetalhes>
                  <img src={relogio} alt="relogio icon" />
                  {dados.duracao_min}~{dados.duracao_max}
                </CardItemDetalhes>

                <CardItemDetalhes>
                  <img src={jogadores} alt="jogadores icon" />
                  {dados.jogadores_min}-{dados.jogadores_max}
                </CardItemDetalhes>
              </CardInfosDivisoria>

              <CardInfosDivisoria>
                <CardItemDetalhes>
                  <img src={idade} alt="idade icon" />
                  {dados.idade} +
                </CardItemDetalhes>

                <CardItemDetalhes>
                  <img src={preco} alt="preco icon" />
                  {converterParaReal(dados.preco)}
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
