import React from "react";
import Card from "../../Components/Card/Card";
import Header from "../../Components/Header/Header";
import { MeusJogosCarregando, MeusJogosContainer } from "./StylesMeusJogos";
import axios from "axios";
import Login from "../../Components/Login/Login";
import ClipLoader from "react-spinners/ClipLoader";
const MeusJogos = () => {
  const [meusJogos, setMeusJogos] = React.useState(false);
  const [loginStatus, setLoginStatus] = React.useState(false);
  const [carregando, setCarregando] = React.useState(true);
  const id_usuario = localStorage.getItem("id");

  React.useEffect(() => {
    if (id_usuario) {
      axios
        .get("http://localhost:5000/buscarColecao/" + id_usuario)
        .then((response) => {
          setMeusJogos(response.data);
          setCarregando(false);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      if (!meusJogos) {
        setLoginStatus(true);
      } else {
        setLoginStatus(false);
      }
    }
  }, [id_usuario, meusJogos]);
  return (
    <>
      <Header />
      <MeusJogosContainer>
        {carregando && (
          <>
            <MeusJogosCarregando>
              <ClipLoader size={100} />
            </MeusJogosCarregando>
          </>
        )}
        {meusJogos && !carregando ? (
          meusJogos.map((jogo) => (
            <Card
              key={jogo[1]}
              id={jogo[0]}
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
          ))
        ) : (
          <>
            {loginStatus && (
              <>
                <Login setLoginStatus={setLoginStatus} />
              </>
            )}
          </>
        )}
      </MeusJogosContainer>
    </>
  );
};

export default MeusJogos;
