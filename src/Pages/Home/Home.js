import React from "react";
import Card from "../../Components/Card/Card";
import Header from "../../Components/Header/Header";
import { HomeMostruarioContainer } from "./StylesHome";

const Home = () => {
  const [listaJogos, setListaJogos] = React.useState([]);

  async function buscarJogos(url) {
    const response = await fetch(url);
    const jsonResponse = await response.json();
    const resultado = jsonResponse.games;
    setListaJogos(resultado);
  }
  React.useEffect(() => {
    const url =
      "https://api.boardgameatlas.com/api/search?limit=100&client_id=ngvmQV0EYe";
    buscarJogos(url);
  }, []);
  if (listaJogos === []) return null;
  return (
    <>
      <Header />
      <HomeMostruarioContainer>
        {listaJogos &&
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
    </>
  );
};

export default Home;
