import React from "react";
import Header from "../../Components/Header/Header";
import { useSearchParams } from "react-router-dom";
import Card from "../../Components/Card/Card";
import { SearchContainer } from "./StylesSearch";
const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");

  const [resultado, setResultado] = React.useState([]);

  async function buscarPesquisa(url) {
    const response = await fetch(url);
    const json = await response.json();
    const jogos = await json.games;
    setResultado(jogos);
  }
  React.useEffect(() => {
    const url = `https://api.boardgameatlas.com/api/search?name=${query}&client_id=ngvmQV0EYe`;
    buscarPesquisa(url);
  }, [query]);
  if (resultado === []) return null;
  return (
    <>
      <Header />
      <SearchContainer>
        {resultado &&
          resultado.map((jogo) => (
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
      </SearchContainer>
    </>
  );
};

export default Search;
