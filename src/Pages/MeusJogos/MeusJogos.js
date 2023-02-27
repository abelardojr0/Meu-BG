import React from "react";
import Card from "../../Components/Card/Card";
import Header from "../../Components/Header/Header";
import { MeusJogosContainer } from "./StylesMeusJogos";
import axios from "axios";
const MeusJogos = () => {
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
              minhaColecao={true}
            />
          ))}
      </MeusJogosContainer>
    </>
  );
};

export default MeusJogos;
