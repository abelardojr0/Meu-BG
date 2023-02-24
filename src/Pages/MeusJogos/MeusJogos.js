import React from "react";
import Card from "../../Components/Card/Card";
import Header from "../../Components/Header/Header";
import { MeusJogosContainer } from "./StylesMeusJogos";

const MeusJogos = () => {
  const [meusJogos, setMeusJogos] = React.useState([]);

  React.useEffect(() => {
    const jogos = JSON.parse(localStorage.getItem("jogos")) || [];
    setMeusJogos(jogos);
  }, []);

  return (
    <>
      <Header />
      <MeusJogosContainer>
        {meusJogos &&
          meusJogos.map((jogo) => (
            <Card
              key={jogo[1]}
              imagem={jogo[2]}
              nome={jogo[1]}
              duracao_min={jogo[3]}
              duracao_max={jogo[4]}
              jogadores_min={jogo[5]}
              jogadores_max={jogo[6]}
              idade={jogo[7]}
              preco={jogo[8]}
            />
          ))}
      </MeusJogosContainer>
    </>
  );
};

export default MeusJogos;
