import React from "react";
import Card from "../../Components/Card/Card";
import Header from "../../Components/Header/Header";
import {
  HomeCarregando,
  HomeMostrarMais,
  HomeMostruarioContainer,
} from "./StylesHome";
import { ClipLoader } from "react-spinners";
const Home = () => {
  const [listaJogos, setListaJogos] = React.useState([]);
  const [intervalo, setIntervalo] = React.useState(21);
  const [carregando, setCarregando] = React.useState(true);

  async function buscarJogos(url) {
    const response = await fetch(url);
    const jsonResponse = await response.json();
    const resultado = jsonResponse.games;
    setListaJogos(resultado);
    setCarregando(false);
  }
  React.useEffect(() => {
    const url = `https://api.boardgameatlas.com/api/search?limit=${intervalo}&client_id=ngvmQV0EYe`;
    buscarJogos(url);
  }, [intervalo]);

  function mostrarMais() {
    setIntervalo(intervalo + 21);
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
          !carregando &&
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
    </>
  );
};

export default Home;
