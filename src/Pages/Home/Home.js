import React from "react";
import Card from "../../Components/Card/Card";
import Header from "../../Components/Header/Header";
import {
  HomeCarregando,
  HomeCarregandoMais,
  HomeMostrarMais,
  HomeMostruarioContainer,
} from "./StylesHome";
import { ClipLoader } from "react-spinners";
const Home = () => {
  const [listaJogos, setListaJogos] = React.useState([]);
  const [intervalo, setIntervalo] = React.useState(20);
  const [carregando, setCarregando] = React.useState(true);
  const [carregandoMais, setCarregandoMais] = React.useState(true);

  async function buscarJogos(url) {
    const response = await fetch(url);
    const jsonResponse = await response.json();
    const resultado = jsonResponse.games;
    setListaJogos(resultado);
    setCarregando(false);
    setCarregandoMais(false);
  }
  React.useEffect(() => {
    const url = `https://api.boardgameatlas.com/api/search?limit=${intervalo}&client_id=ngvmQV0EYe`;
    buscarJogos(url);
  }, [intervalo]);

  function mostrarMais() {
    setIntervalo(intervalo + 20);
    setCarregandoMais(true);
  }
  if (listaJogos === []) return null;
  return (
    <>
      <Header />
      <HomeMostruarioContainer>
        {carregando && (
          <>
            <HomeCarregando>
              <ClipLoader size={100} />
            </HomeCarregando>
          </>
        )}
        {listaJogos &&
          carregando === false &&
          listaJogos.map((jogo) => (
            <Card
              key={jogo.name}
              imagem={jogo.image_url}
              nome={jogo.name}
              duracao_min={jogo.min_playtime}
              duracao_max={jogo.max_playtime}
              jogadores_min={jogo.min_players}
              jogadores_max={jogo.max_players}
              idade={jogo.min_age}
              preco={jogo.price}
            />
          ))}
      </HomeMostruarioContainer>
      <HomeMostrarMais onClick={mostrarMais}>Ver mais...</HomeMostrarMais>
      {carregandoMais && (
        <>
          <HomeCarregandoMais>
            <ClipLoader size={80} />
          </HomeCarregandoMais>
        </>
      )}
      {}
    </>
  );
};

export default Home;
